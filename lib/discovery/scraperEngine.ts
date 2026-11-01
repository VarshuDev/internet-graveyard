import { graveyardDb } from '@/lib/db';
import { scrapeWikipediaDefunctWebsites } from './wikipediaScraper';
import { crawlHackerNewsSunsets } from './hnSunsetCrawler';
import { probeDomainHealth } from './scanner';
import { verifyDomainWayback } from './waybackVerifier';
import { DiscoveryCandidate, GraveEntity } from '@/types/graveyard';

export interface ScraperRunOptions {
  source?: 'all' | 'wikipedia' | 'hn' | 'probe';
  limit?: number;
  autoIngest?: boolean;
  targetDomain?: string;
}

export interface ScrapedItemSummary {
  name: string;
  domain: string;
  status: string;
  confidence: number;
  source: string;
  actionTaken: 'INGESTED_GRAVE' | 'QUEUED_CANDIDATE' | 'EXISTING_SKIPPED';
}

export interface ScraperRunReport {
  timestamp: string;
  source: string;
  discovered_count: number;
  candidates_added: number;
  entities_ingested: number;
  items: ScrapedItemSummary[];
  logs: string[];
}

/**
 * Unified Automated Web Archaeology Scraper Engine
 */
export async function runScraperPipeline(options: ScraperRunOptions = {}): Promise<ScraperRunReport> {
  const source = options.source || 'all';
  const limit = options.limit || 8;
  const autoIngest = options.autoIngest ?? false;
  const logs: string[] = [];
  const items: ScrapedItemSummary[] = [];

  const addLog = (msg: string) => {
    const entry = `[${new Date().toLocaleTimeString()}] ${msg}`;
    logs.push(entry);
    console.log(entry);
  };

  addLog(`Starting Automated Web Archaeology Scraper (source: ${source}, limit: ${limit}, autoIngest: ${autoIngest})...`);

  const existingEntities = graveyardDb.getAllEntities();
  const existingCandidates = graveyardDb.getDiscoveryCandidates();
  const knownSlugs = new Set(existingEntities.map(e => e.slug.toLowerCase()));
  const knownDomains = new Set([
    ...existingEntities.map(e => e.primary_domain.toLowerCase()),
    ...existingCandidates.map(c => c.domain.toLowerCase())
  ]);

  let candidatesAdded = 0;
  let entitiesIngested = 0;

  // SOURCE 1: Wikipedia Defunct Tech Archives
  if (source === 'wikipedia' || source === 'all') {
    addLog('Executing Wikipedia Defunct Tech Archive scraper...');
    try {
      const wikiResults = await scrapeWikipediaDefunctWebsites(limit);
      addLog(`Wikipedia API returned ${wikiResults.length} historical defunct platform records.`);

      for (const res of wikiResults) {
        const domainLower = res.candidate.domain.toLowerCase();
        const slugLower = res.entity?.slug.toLowerCase() || '';

        if (knownSlugs.has(slugLower) || knownDomains.has(domainLower)) {
          addLog(`Skipped existing platform: ${res.candidate.service_name} (${domainLower})`);
          items.push({
            name: res.candidate.service_name,
            domain: domainLower,
            status: 'ALREADY_EXISTS',
            confidence: res.candidate.confidence_score,
            source: 'Wikipedia API',
            actionTaken: 'EXISTING_SKIPPED'
          });
          continue;
        }

        // Add to known sets so subsequent results in this run don't collide
        knownDomains.add(domainLower);
        if (slugLower) knownSlugs.add(slugLower);

        if (autoIngest && res.entity) {
          graveyardDb.saveEntity(res.entity);
          entitiesIngested++;
          addLog(`✓ Auto-ingested new grave: ${res.entity.name} (${domainLower}) [${res.entity.lifespan}]`);
          items.push({
            name: res.entity.name,
            domain: domainLower,
            status: res.entity.status,
            confidence: res.entity.confidence_score,
            source: 'Wikipedia API',
            actionTaken: 'INGESTED_GRAVE'
          });
        } else {
          graveyardDb.addDiscoveryCandidate(res.candidate);
          candidatesAdded++;
          addLog(`✓ Queued discovery candidate: ${res.candidate.service_name} (${domainLower})`);
          items.push({
            name: res.candidate.service_name,
            domain: domainLower,
            status: 'PENDING_REVIEW',
            confidence: res.candidate.confidence_score,
            source: 'Wikipedia API',
            actionTaken: 'QUEUED_CANDIDATE'
          });
        }
      }
    } catch (err: any) {
      addLog(`Error during Wikipedia excavation: ${err.message}`);
    }
  }

  // SOURCE 2: Hacker News Sunset Radar
  if (source === 'hn' || source === 'all') {
    addLog('Executing Hacker News Sunset Radar crawler...');
    try {
      const hnCandidates = await crawlHackerNewsSunsets(limit);
      addLog(`Hacker News crawler identified ${hnCandidates.length} potential sunset declarations.`);

      for (const cand of hnCandidates) {
        const domainLower = cand.domain.toLowerCase();
        if (knownDomains.has(domainLower)) {
          items.push({
            name: cand.service_name,
            domain: domainLower,
            status: 'ALREADY_EXISTS',
            confidence: cand.confidence_score,
            source: 'Hacker News Sunset Radar',
            actionTaken: 'EXISTING_SKIPPED'
          });
          continue;
        }

        knownDomains.add(domainLower);

        // Run live domain probe & Wayback verification to corroborate
        try {
          const probe = await probeDomainHealth(domainLower);
          const wayback = await verifyDomainWayback(domainLower);

          cand.detected_signals.push(
            `Live Probe Status: HTTP ${probe.http_status ?? 'Unreachable'} (DNS: ${probe.dns_resolved ? 'OK' : 'NXDOMAIN'})`,
            `Archive.org Wayback snapshot: ${wayback.is_archived ? 'Verified active in archive' : 'No snapshots'}`
          );

          if (!probe.dns_resolved || probe.http_status === 404 || probe.http_status === 410) {
            cand.confidence_score = Math.min(100, cand.confidence_score + 15);
          }
        } catch {
          // Probe timeout or network issue, proceed with base HN signals
        }

        graveyardDb.addDiscoveryCandidate(cand);
        candidatesAdded++;
        addLog(`✓ Queued HN sunset candidate: ${cand.service_name} (${domainLower}) [Confidence: ${cand.confidence_score}%]`);
        items.push({
          name: cand.service_name,
          domain: domainLower,
          status: 'PENDING_REVIEW',
          confidence: cand.confidence_score,
          source: 'Hacker News Sunset Radar',
          actionTaken: 'QUEUED_CANDIDATE'
        });
      }
    } catch (err: any) {
      addLog(`Error during Hacker News crawl: ${err.message}`);
    }
  }

  // SOURCE 3: Targeted Single Domain Probe
  if (source === 'probe' && options.targetDomain) {
    const target = options.targetDomain.trim().toLowerCase();
    addLog(`Running focused probe on target domain: ${target}...`);
    try {
      const probe = await probeDomainHealth(target);
      const wayback = await verifyDomainWayback(target);

      const candidate: DiscoveryCandidate = {
        id: `probe-${Date.now()}`,
        service_name: target.split('.')[0].toUpperCase(),
        domain: target,
        category: 'Web technology',
        detected_signals: [
          `HTTP Probe: ${probe.http_status ?? 'Unresponsive'} (${probe.status_explanation})`,
          `DNS Resolution: ${probe.dns_resolved ? 'Active Nameservers' : 'NXDOMAIN / Unresolved'}`,
          `SSL Certificate: ${probe.ssl_valid ? 'Valid TLS' : 'Invalid / Expired'}`,
          `Archive.org Wayback: ${wayback.closest_snapshot_url}`
        ],
        confidence_score: probe.confidence_score,
        raw_evidence: `Automated probe on ${probe.timestamp}. Status recommendation: ${probe.recommended_status}`,
        status: 'PENDING',
        created_at: new Date().toISOString()
      };

      graveyardDb.addDiscoveryCandidate(candidate);
      candidatesAdded++;
      addLog(`✓ Targeted domain probed and candidate queued: ${target} [Score: ${probe.confidence_score}%]`);
      items.push({
        name: candidate.service_name,
        domain: target,
        status: probe.recommended_status,
        confidence: probe.confidence_score,
        source: 'Live Domain Health Probe',
        actionTaken: 'QUEUED_CANDIDATE'
      });
    } catch (err: any) {
      addLog(`Error probing target domain ${target}: ${err.message}`);
    }
  }

  addLog(`Excavation finished: ${items.length} discovered, ${candidatesAdded} queued to moderation, ${entitiesIngested} auto-ingested.`);

  return {
    timestamp: new Date().toISOString(),
    source,
    discovered_count: items.length,
    candidates_added: candidatesAdded,
    entities_ingested: entitiesIngested,
    items,
    logs
  };
}
