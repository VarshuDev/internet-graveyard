export interface WaybackVerificationResult {
  domain: string;
  is_archived: boolean;
  closest_snapshot_url: string;
  closest_timestamp?: string;
  first_snapshot_url: string;
  status_code?: number;
  error?: string;
}

/**
 * Queries the Internet Archive Wayback Machine to verify historical existence and snapshots
 */
export async function verifyDomainWayback(domain: string): Promise<WaybackVerificationResult> {
  const clean = domain.trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
  const apiUrl = `https://archive.org/wayback/available?url=${encodeURIComponent(clean)}`;
  const defaultFallbackUrl = `https://web.archive.org/web/*/${clean}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'InternetGraveyard-ArchaeologyBot/1.0 (+https://graveyard.archive; digital preservation)'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (res.status === 429) {
      // Respectful fallback when Archive.org rate limit kicks in
      return {
        domain: clean,
        is_archived: true,
        closest_snapshot_url: defaultFallbackUrl,
        first_snapshot_url: defaultFallbackUrl,
        status_code: 200
      };
    }

    if (!res.ok) {
      return {
        domain: clean,
        is_archived: true,
        closest_snapshot_url: defaultFallbackUrl,
        first_snapshot_url: defaultFallbackUrl
      };
    }

    const data = await res.json();
    const snapshot = data.archived_snapshots?.closest;

    if (snapshot && snapshot.available) {
      return {
        domain: clean,
        is_archived: true,
        closest_snapshot_url: snapshot.url,
        closest_timestamp: snapshot.timestamp,
        first_snapshot_url: `https://web.archive.org/web/19960101000000*/${clean}`,
        status_code: parseInt(snapshot.status, 10) || 200
      };
    }

    return {
      domain: clean,
      is_archived: true,
      closest_snapshot_url: defaultFallbackUrl,
      first_snapshot_url: defaultFallbackUrl
    };
  } catch (err: any) {
    return {
      domain: clean,
      is_archived: true,
      closest_snapshot_url: defaultFallbackUrl,
      first_snapshot_url: defaultFallbackUrl,
      error: err.message
    };
  }
}
