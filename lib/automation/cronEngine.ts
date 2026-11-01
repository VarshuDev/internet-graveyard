import fs from 'fs';
import path from 'path';
import { graveyardDb } from '@/lib/db';
import { crawlHackerNewsSunsets } from '@/lib/discovery/hnSunsetCrawler';
import { scrapeWikipediaDefunctWebsites } from '@/lib/discovery/wikipediaScraper';
import { probeDomainHealth, HealthScanResult } from '@/lib/discovery/scanner';
import { DiscoveryCandidate, GraveEntity } from '@/types/graveyard';

export interface AutomationRunOptions {
  crawlHn?: boolean;
  scrapeWikipedia?: boolean;
  probeBatchSize?: number;
  autoApproveScoreThreshold?: number; // e.g. 95
  maxNewCandidates?: number;
}

export interface AutomationRunReport {
  timestamp: string;
  duration_ms: number;
  sources_executed: string[];
  hn_candidates_found: number;
  wiki_candidates_found: number;
  new_candidates_queued: number;
  auto_approved_count: number;
  domains_probed: {
    domain: string;
    status: string;
    parking_detected: boolean;
    http_status: number | null;
  }[];
  logs: string[];
  summary: string;
}

const INQUESTS_FILE = path.join(process.cwd(), 'data', 'inquests.json');

// In-memory record of the last automated execution
let lastAutomationReport: AutomationRunReport | null = null;

export function getInquestHistory(): AutomationRunReport[] {
  try {
    if (fs.existsSync(INQUESTS_FILE)) {
      const data = fs.readFileSync(INQUESTS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Failed to read inquest history:', err);
  }
  return lastAutomationReport ? [lastAutomationReport] : [];
}

export function getLastAutomationReport(): AutomationRunReport | null {
  if (lastAutomationReport) return lastAutomationReport;
  const history = getInquestHistory();
  return history.length > 0 ? history[0] : null;
}

function persistInquestReport(report: AutomationRunReport) {
  try {
    const history = getInquestHistory();
    const updated = [report, ...history.filter(r => r.timestamp !== report.timestamp)].slice(0, 50);
    const dataDir = path.dirname(INQUESTS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(INQUESTS_FILE, JSON.stringify(updated, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to persist inquest report:', err);
  }
}

/**
 * Executes the complete automated discovery, scraping, and health sweep pipeline
 */
export async function runAutomatedArchaeologyPipeline(
  options: AutomationRunOptions = {}
): Promise<AutomationRunReport> {
  const startTime = Date.now();
  const timestamp = new Date().toISOString();
  const logs: string[] = [];

  const {
    crawlHn = true,
    scrapeWikipedia = true,
    probeBatchSize = 6,
    autoApproveScoreThreshold = 95,
    maxNewCandidates = 10
  } = options;

  logs.push(`[${timestamp}] Initiating Automated Archaeology & Discovery Pipeline...`);

  const existingEntities = graveyardDb.getAllEntities();
  const existingSlugs = new Set(existingEntities.map(e => e.slug.toLowerCase()));
  const existingDomains = new Set(
    existingEntities.map(e => e.primary_domain.toLowerCase().replace(/^www\./, ''))
  );

  const existingCandidates = graveyardDb.getDiscoveryCandidates();
  const candidateDomains = new Set(
    existingCandidates.map((c: DiscoveryCandidate) => c.domain.toLowerCase().replace(/^www\./, ''))
  );

  const sourcesExecuted: string[] = [];
  let hnCount = 0;
  let wikiCount = 0;
  let newCandidatesQueued = 0;
  let autoApprovedCount = 0;

  // 1. AUTOMATED HACKER NEWS SUNSET CRAWL
  if (crawlHn) {
    sourcesExecuted.push('Hacker News Algolia Sunsets');
    logs.push('[Crawler] Querying Hacker News Algolia for shutdown declarations...');
    try {
      const hnHits = await crawlHackerNewsSunsets(8);
      hnCount = hnHits.length;
      logs.push(`[Crawler] Retrieved ${hnHits.length} sunset stories from Hacker News.`);

      for (const cand of hnHits) {
        const cleanDom = cand.domain.toLowerCase().replace(/^www\./, '');
        if (existingDomains.has(cleanDom) || candidateDomains.has(cleanDom)) {
          continue;
        }

        graveyardDb.addDiscoveryCandidate(cand);
        candidateDomains.add(cleanDom);
        newCandidatesQueued++;
        logs.push(`[Discovery] Queued candidate from HN: ${cand.service_name} (${cand.domain}) [Score: ${cand.confidence_score}]`);

        if (newCandidatesQueued >= maxNewCandidates) break;
      }
    } catch (err: any) {
      logs.push(`[Crawler Warning] HN Sunset crawler encountered an issue: ${err.message}`);
    }
  }

  // 2. AUTOMATED WIKIPEDIA DEFUNCT DIRECTORY SCRAPE
  if (scrapeWikipedia && newCandidatesQueued < maxNewCandidates) {
    sourcesExecuted.push('Wikipedia Defunct Web Archive');
    logs.push('[Scraper] Querying Wikipedia API for defunct online services...');
    try {
      const wikiResults = await scrapeWikipediaDefunctWebsites(5);
      wikiCount = wikiResults.length;
      logs.push(`[Scraper] Retrieved ${wikiResults.length} articles from Wikipedia.`);

      for (const item of wikiResults) {
        const cleanDom = item.candidate.domain.toLowerCase().replace(/^www\./, '');
        const slug = item.candidate.service_name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        if (existingDomains.has(cleanDom) || existingSlugs.has(slug) || candidateDomains.has(cleanDom)) {
          continue;
        }

        if (item.entity && item.candidate.confidence_score >= autoApproveScoreThreshold) {
          graveyardDb.saveEntity(item.entity);
          existingDomains.add(cleanDom);
          existingSlugs.add(slug);
          autoApprovedCount++;
          logs.push(`[Auto-Ingest] Verified grave created automatically: ${item.entity.name} (${item.entity.lifespan}) [Score: ${item.candidate.confidence_score}]`);
        } else {
          graveyardDb.addDiscoveryCandidate(item.candidate);
          candidateDomains.add(cleanDom);
          newCandidatesQueued++;
          logs.push(`[Discovery] Queued candidate from Wikipedia: ${item.candidate.service_name} (${item.candidate.domain})`);
        }

        if (newCandidatesQueued >= maxNewCandidates) break;
      }
    } catch (err: any) {
      logs.push(`[Scraper Warning] Wikipedia scraper encountered an issue: ${err.message}`);
    }
  }

  // 3. PRIORITY AT-RISK HEALTH MONITORING & FORENSIC PROBING
  const probedDomains: {
    domain: string;
    status: string;
    parking_detected: boolean;
    http_status: number | null;
  }[] = [];

  if (probeBatchSize > 0 && existingEntities.length > 0) {
    sourcesExecuted.push('Automated Priority Domain Health Monitor');
    logs.push(`[Health Sweep] Probing heartbeat of at-risk and sentinel domains...`);

    // Prioritize platforms classified as AT_RISK or ZOMBIE
    const atRiskList = existingEntities.filter(e => e.status === 'AT_RISK' || e.status === 'ZOMBIE');
    const normalList = existingEntities.filter(e => e.status !== 'AT_RISK' && e.status !== 'ZOMBIE');

    // Shuffle both
    const shuffledAtRisk = [...atRiskList].sort(() => 0.5 - Math.random());
    const shuffledNormal = [...normalList].sort(() => 0.5 - Math.random());

    // Take up to half from at-risk, rest from normal
    const sample = [
      ...shuffledAtRisk.slice(0, Math.ceil(probeBatchSize / 2)),
      ...shuffledNormal.slice(0, Math.floor(probeBatchSize / 2))
    ].slice(0, probeBatchSize);

    for (const ent of sample) {
      if (!ent.primary_domain) continue;
      try {
        const probeResult = await probeDomainHealth(ent.primary_domain);
        probedDomains.push({
          domain: ent.primary_domain,
          status: probeResult.recommended_status,
          parking_detected: probeResult.parking_detected || false,
          http_status: probeResult.http_status
        });

        if (probeResult.parking_detected && ent.last_known_state?.domain) {
          ent.last_known_state.domain.ownership = 'Parked / Squatter Domain';
          ent.last_known_state.domain.state_desc = 'Domain acquired by parking brokerage / resale squatter.';
          logs.push(`[Health Alert] Squatter/parking page confirmed on ${ent.primary_domain}! Updated archival record.`);
        }
      } catch (err: any) {
        logs.push(`[Health Sweep] Probe failed for ${ent.primary_domain}: ${err.message}`);
      }
    }
  }

  const durationMs = Date.now() - startTime;
  const summary = `Automation run complete in ${durationMs}ms. Queued: ${newCandidatesQueued}, Auto-approved: ${autoApprovedCount}, Probed domains: ${probedDomains.length}.`;
  logs.push(`[Summary] ${summary}`);

  const report: AutomationRunReport = {
    timestamp,
    duration_ms: durationMs,
    sources_executed: sourcesExecuted,
    hn_candidates_found: hnCount,
    wiki_candidates_found: wikiCount,
    new_candidates_queued: newCandidatesQueued,
    auto_approved_count: autoApprovedCount,
    domains_probed: probedDomains,
    logs,
    summary
  };

  lastAutomationReport = report;
  persistInquestReport(report);
  return report;
}
