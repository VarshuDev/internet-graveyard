import { DiscoveryCandidate, GraveCategory } from '@/types/graveyard';

export interface HnSunsetHit {
  title: string;
  url?: string;
  author: string;
  points: number;
  num_comments: number;
  created_at: string;
  objectID: string;
}

const NEWS_MEDIA_HOSTS = new Set([
  'techcrunch.com',
  'theverge.com',
  'engadget.com',
  'wired.com',
  'nytimes.com',
  'bloomberg.com',
  'reuters.com',
  'arstechnica.com',
  'venturebeat.com',
  'mashable.com',
  'wsj.com',
  'theinformation.com',
  'gizmodo.com',
  'zdnet.com',
  'medium.com',
  'substack.com',
  'cnbc.com',
  'forbes.com',
  'businessinsider.com',
  'ycombinator.com',
  'news.ycombinator.com',
  'github.com',
  'twitter.com',
  'x.com',
  'reddit.com'
]);

function inferCategoryFromTitle(title: string): GraveCategory {
  const t = title.toLowerCase();
  if (t.includes('chat') || t.includes('messenger') || t.includes('messaging') || t.includes('slack')) return 'Messaging';
  if (t.includes('music') || t.includes('audio') || t.includes('stream') || t.includes('video') || t.includes('podcast')) return 'Streaming';
  if (t.includes('game') || t.includes('gaming') || t.includes('arcade') || t.includes('vr') || t.includes('mmo')) return 'Gaming';
  if (t.includes('social') || t.includes('network') || t.includes('community') || t.includes('photo') || t.includes('forum')) return 'Social';
  if (t.includes('search') || t.includes('portal') || t.includes('directory') || t.includes('crawler')) return 'Search';
  if (t.includes('api') || t.includes('dev') || t.includes('code') || t.includes('sdk') || t.includes('cloud') || t.includes('database') || t.includes('hosting')) return 'Developer tools';
  if (t.includes('hardware') || t.includes('watch') || t.includes('device') || t.includes('phone')) return 'Hardware';
  return 'Web technology';
}

function extractDomain(url?: string, title?: string): string {
  if (url) {
    try {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./i, '').toLowerCase();
      // If the URL is not just a secondary news reporting publication, use it
      if (!NEWS_MEDIA_HOSTS.has(host) && !Array.from(NEWS_MEDIA_HOSTS).some(media => host.endsWith(`.${media}`))) {
        return host;
      }
    } catch {
      // url parse failed
    }
  }

  // Extract explicit domain mention in title (e.g. "Skiff.com is shutting down", "Mint.com closing")
  const domainMatch = title?.match(/\b([a-z0-9-]+\.(?:com|io|co|net|org|app|dev|me|fm|ai|so))\b/i);
  if (domainMatch) return domainMatch[1].toLowerCase();

  // Extract brand name from title phrases
  const nameMatch = title?.match(/^([A-Za-z0-9]+)\s+(?:is|has|announces|to|will)\s+(?:shutting down|shut down|sunset|closing|cease)/i) ||
                    title?.match(/(?:RIP|Goodbye|Farewell|Sunset of)\s+([A-Za-z0-9]+)/i);
  if (nameMatch) {
    const rawBrand = nameMatch[1].toLowerCase();
    if (!['google', 'apple', 'microsoft', 'meta', 'amazon'].includes(rawBrand)) {
      return `${rawBrand}.com`;
    }
  }

  return 'defunct-service.io';
}

function extractServiceName(title: string, domain: string): string {
  const match = title.match(/^([A-Za-z0-9\s.]+?)\s+(?:is|has|announces|closing|sunset|shut|to cease)/i) ||
                title.match(/(?:RIP|Goodbye|Farewell|Sunset of)\s+([A-Za-z0-9\s.]+)/i);
  if (match && match[1].trim().length > 1 && match[1].trim().length < 30) {
    return match[1].trim();
  }
  return domain.replace(/\.[a-z]+$/i, '').toUpperCase();
}

/**
 * Crawls Hacker News for real-world tech shutdown announcements and post-mortems
 */
export async function crawlHackerNewsSunsets(limit: number = 10): Promise<DiscoveryCandidate[]> {
  const query = 'shutting down OR sunsetting OR "closing its doors" OR "farewell letter" OR "shut down"';
  const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=${limit * 3}`;

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'InternetGraveyard-ArchaeologyBot/2.0 (+https://graveyard.archive; digital archaeology research)'
      }
    });

    if (!res.ok) {
      console.error(`HN Algolia API responded with status ${res.status}`);
      return [];
    }

    const data = await res.json();
    const hits: HnSunsetHit[] = data.hits || [];
    const candidates: DiscoveryCandidate[] = [];
    const seenDomains = new Set<string>();

    for (const hit of hits) {
      if (!hit.title) continue;

      const domain = extractDomain(hit.url, hit.title);
      if (domain === 'defunct-service.io' || seenDomains.has(domain)) continue;
      seenDomains.add(domain);

      const serviceName = extractServiceName(hit.title, domain);
      const category = inferCategoryFromTitle(hit.title);
      const hnUrl = `https://news.ycombinator.com/item?id=${hit.objectID}`;

      // Calculate confidence score based on HN community attention
      const pointsBonus = Math.min(15, Math.floor(hit.points / 15));
      const commentsBonus = Math.min(10, Math.floor(hit.num_comments / 10));
      const confidence = Math.min(95, 70 + pointsBonus + commentsBonus);

      candidates.push({
        id: `hn-${hit.objectID}`,
        service_name: serviceName,
        domain: domain,
        category: category,
        detected_signals: [
          `Hacker News discussion: "${hit.title}" (${hit.points} points, ${hit.num_comments} comments)`,
          `Direct announcement / report: ${hit.url || hnUrl}`,
          `Published date: ${hit.created_at.split('T')[0]}`,
          `Community consensus: Platform sunset/cessation confirmed by tech founders`
        ],
        confidence_score: confidence,
        raw_evidence: `HN Story #${hit.objectID} by ${hit.author}: "${hit.title}". Discussion: ${hnUrl}`,
        status: 'PENDING',
        created_at: new Date().toISOString()
      });

      if (candidates.length >= limit) break;
    }

    return candidates;
  } catch (err) {
    console.error('Error crawling Hacker News sunsets:', err);
    return [];
  }
}
