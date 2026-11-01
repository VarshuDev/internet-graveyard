import { EvidenceItem, EvidenceType, ReliabilityLevel, GraveStatus } from '@/types/graveyard';

export interface HealthScanResult {
  target: string;
  domain: string;
  timestamp: string;
  http_status: number | null;
  dns_resolved: boolean;
  ssl_valid: boolean;
  latency_ms: number;
  server_header: string | null;
  wayback_url: string;
  final_url?: string;
  redirected?: boolean;
  parking_detected?: boolean;
  shutdown_phrases_detected: string[];
  signals_detected: {
    label: string;
    points: number;
    description: string;
  }[];
  confidence_score: number;
  recommended_status: GraveStatus;
  status_explanation: string;
  generated_evidence: Omit<EvidenceItem, 'id' | 'entity_id'>[];
  matched_grave?: {
    slug: string;
    name: string;
    status: GraveStatus;
  } | null;
}

const SHUTDOWN_PATTERNS = [
  /service\s+has\s+shut\s*down/i,
  /we\s+are\s+shutting\s+down/i,
  /has\s+been\s+discontinued/i,
  /no\s+longer\s+available/i,
  /closing\s+our\s+doors/i,
  /sunsetting\s+the\s+service/i,
  /service\s+has\s+ended/i,
  /end\s+of\s+life/i,
  /saying\s+goodbye/i,
  /ceased\s+operations/i,
  /permanently\s+closed/i,
  /has\s+wound\s+down/i,
  /winding\s+down\s+operations/i,
  /thank\s+you\s+for\s+an\s+incredible\s+journey/i
];

const PARKING_PATTERNS = [
  /buy\s+this\s+domain/i,
  /this\s+domain\s+(is\s+)?(for\s+sale|may\s+be\s+for\s+sale)/i,
  /domain\s+is\s+parked/i,
  /parked\s+free\s+courtesy\s+of/i,
  /hugedomains\.com/i,
  /dan\.com/i,
  /sedo\.com/i,
  /afternic\.com/i,
  /godaddy\.com\/domainsearch/i,
  /inquire\s+about\s+this\s+domain/i,
  /make\s+an\s+offer\s+on\s+this\s+domain/i,
  /domainmarket\.com/i,
  /parkingcrew\.net/i,
  /bodis\.com/i
];

const SUNSET_REDIRECT_TARGETS = [
  /support\.google\.com/i,
  /google\.com\/(.*\/)?shutdown/i,
  /help\.twitter\.com/i,
  /support\.microsoft\.com/i,
  /archive\.org/i,
  /wikipedia\.org/i,
  /sunset/i,
  /discontinued/i,
  /eol/i
];

async function executeProbe(url: string, timeoutMs: number = 6000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'InternetGraveyard-ArchaeologyBot/2.0 (+https://graveyard.archive; archaeological health monitor)'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    return { res, error: null };
  } catch (err: any) {
    return { res: null, error: err };
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function probeDomainHealth(domainOrUrl: string): Promise<HealthScanResult> {
  const cleanInput = domainOrUrl.trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '').toLowerCase();
  const httpsUrl = `https://${cleanInput}`;
  const timestamp = new Date().toISOString();
  const startTime = Date.now();

  let httpStatus: number | null = null;
  let dnsResolved = false;
  let sslValid = false;
  let serverHeader: string | null = null;
  let finalUrl: string | undefined = undefined;
  let redirected = false;
  let parkingDetected = false;
  const detectedPhrases: string[] = [];
  const signals: { label: string; points: number; description: string }[] = [];
  const generatedEvidence: Omit<EvidenceItem, 'id' | 'entity_id'>[] = [];

  // Attempt HTTPS probe first
  let { res: response, error: probeError } = await executeProbe(httpsUrl, 6000);

  // If HTTPS probe fails due to SSL or refused connection, fallback to HTTP port 80
  let usedHttpFallback = false;
  if (!response && probeError) {
    const errText = `${probeError?.cause?.message || ''} ${probeError?.message || ''}`.toLowerCase();
    const isSslOrRefused = errText.includes('cert') || errText.includes('ssl') || errText.includes('econnrefused');
    if (isSslOrRefused) {
      sslValid = false;
      const httpUrl = `http://${cleanInput}`;
      const httpAttempt = await executeProbe(httpUrl, 5000);
      if (httpAttempt.res) {
        response = httpAttempt.res;
        probeError = null;
        usedHttpFallback = true;
        signals.push({
          label: 'Insecure Protocol Degradation (SSL Failed, HTTP Responded)',
          points: 20,
          description: 'HTTPS TLS handshake failed or expired; domain only responds via unencrypted HTTP port 80.'
        });
      }
    }
  }

  if (response) {
    httpStatus = response.status;
    dnsResolved = true;
    if (!usedHttpFallback) {
      sslValid = true;
    }
    serverHeader = response.headers.get('server') || response.headers.get('x-powered-by') || null;
    finalUrl = response.url;

    // Detect redirect intent
    try {
      const parsedOriginal = new URL(httpsUrl);
      const parsedFinal = new URL(response.url);
      if (parsedOriginal.hostname.replace(/^www\./, '') !== parsedFinal.hostname.replace(/^www\./, '')) {
        redirected = true;

        // Check if redirected to known sunset / corporate support destination
        const isSunsetRedirect = SUNSET_REDIRECT_TARGETS.some(p => p.test(response.url));
        if (isSunsetRedirect) {
          signals.push({
            label: 'Redirected to Defunct / Sunset Support Hub',
            points: 40,
            description: `Traffic permanently routed from original host to sunset documentation hub: ${response.url}`
          });
          generatedEvidence.push({
            source_name: 'HTTP Redirect Inspector',
            source_type: 'Live Probe',
            url: httpsUrl,
            timestamp,
            evidence_type: 'REDIRECT_CAPTURE',
            reliability: 'VERY_HIGH',
            weight: 35,
            extracted_claim: `Domain redirects directly to official decommissioning hub at ${response.url}`,
            is_verified: true
          });
        } else {
          signals.push({
            label: 'Cross-Domain Canonical Redirection',
            points: 15,
            description: `Domain automatically forwards visitors to third-party domain ${parsedFinal.hostname}.`
          });
        }
      }
    } catch {
      // URL parsing fallback
    }

    if (response.status === 404 || response.status === 410) {
      signals.push({
        label: `HTTP Status Code ${response.status} (Not Found/Gone)`,
        points: 25,
        description: `Endpoint returned explicit HTTP ${response.status}, indicating decommissioning of active application routes.`
      });
      generatedEvidence.push({
        source_name: 'Automated HTTP Probe',
        source_type: 'Live Probe',
        url: httpsUrl,
        timestamp,
        evidence_type: 'HTTP_PROBE',
        reliability: 'HIGH',
        weight: 25,
        extracted_claim: `Automated probe received HTTP ${response.status} Gone/Not Found from ${httpsUrl}`,
        is_verified: true
      });
    } else if (response.status >= 500) {
      signals.push({
        label: `HTTP Server Error ${response.status}`,
        points: 20,
        description: `Origin servers returned persistent 5xx gateway/internal server failure.`
      });
      generatedEvidence.push({
        source_name: 'Automated Gateway Probe',
        source_type: 'Live Probe',
        url: httpsUrl,
        timestamp,
        evidence_type: 'HTTP_PROBE',
        reliability: 'MEDIUM',
        weight: 20,
        extracted_claim: `Origin server returned error code ${response.status}`,
        is_verified: true
      });
    }

    // Inspect body text for shutdown declarations or domain parking
    try {
      const text = await response.text();

      // Check shutdown declarations
      for (const pattern of SHUTDOWN_PATTERNS) {
        if (pattern.test(text)) {
          const matchStr = text.match(pattern)?.[0] || 'shutdown phrase';
          detectedPhrases.push(matchStr);
        }
      }

      // Check parking & squatter patterns
      for (const pattern of PARKING_PATTERNS) {
        if (pattern.test(text)) {
          parkingDetected = true;
          const matchStr = text.match(pattern)?.[0] || 'domain parking';
          signals.push({
            label: 'Domain Squatting / Parking Brokerage Page',
            points: 35,
            description: `Domain no longer serves legitimate software. Detected domain resale banner: "${matchStr}".`
          });
          generatedEvidence.push({
            source_name: 'Domain Squatting / Brokerage Inspector',
            source_type: 'Onsite Text Inspection',
            url: httpsUrl,
            timestamp,
            evidence_type: 'SHUTDOWN_PAGE',
            reliability: 'VERY_HIGH',
            weight: 35,
            extracted_claim: `Domain resolved to domain broker/squatter parking page matching "${matchStr}". Original service abandoned.`,
            is_verified: true
          });
          break;
        }
      }

      if (detectedPhrases.length > 0) {
        signals.push({
          label: 'Definitive Shutdown Language Onsite',
          points: 35,
          description: `Detected phrases on homepage: "${detectedPhrases.slice(0, 3).join('", "')}".`
        });
        generatedEvidence.push({
          source_name: 'Homepage Content Scanner',
          source_type: 'Onsite Text Inspection',
          url: httpsUrl,
          timestamp,
          evidence_type: 'SHUTDOWN_PAGE',
          reliability: 'VERY_HIGH',
          weight: 35,
          extracted_claim: `Found explicit shutdown language: "${detectedPhrases.slice(0, 2).join(', ')}" on homepage body.`,
          is_verified: true
        });
      }
    } catch {
      // Body reading aborted or non-text
    }

  } else if (probeError) {
    const causeCode = probeError?.cause?.code || probeError?.code || '';
    const causeMsg = `${probeError?.cause?.message || ''} ${probeError?.message || ''}`.toLowerCase();
    const isDnsFailure = causeCode === 'ENOTFOUND' || causeMsg.includes('enotfound') || causeMsg.includes('getaddrinfo') || causeMsg.includes('fetch failed');

    if (probeError.name === 'AbortError') {
      signals.push({
        label: 'Gateway Timeout / Unresponsive Host',
        points: 25,
        description: 'Server failed to establish TCP/TLS handshake within 6,000ms.'
      });
    } else if (isDnsFailure) {
      dnsResolved = false;
      signals.push({
        label: 'DNS Resolution Failure (NXDOMAIN / Unresolved Host)',
        points: 40,
        description: 'No active DNS A/AAAA records found on public nameservers.'
      });
      generatedEvidence.push({
        source_name: 'DNS Resolution Probe',
        source_type: 'DNS Query',
        url: httpsUrl,
        timestamp,
        evidence_type: 'DNS_FAILURE',
        reliability: 'VERY_HIGH',
        weight: 40,
        extracted_claim: `DNS resolution failed with NXDOMAIN; root records unassigned or removed from public zone.`,
        is_verified: true
      });
    } else if (causeMsg.includes('cert') || causeMsg.includes('ssl') || causeCode === 'CERT_HAS_EXPIRED') {
      sslValid = false;
      dnsResolved = true;
      signals.push({
        label: 'SSL / TLS Certificate Expired or Invalid',
        points: 25,
        description: 'Cryptographic certificate has expired or mismatched Common Name.'
      });
    } else {
      signals.push({
        label: 'Network Connection Refused',
        points: 25,
        description: `Host actively refused connection: ${probeError.message || 'Unknown network error'}`
      });
    }
  }

  // Calculate normalized confidence score (capped at 100)
  const rawScore = signals.reduce((sum, s) => sum + s.points, 0);
  const confidenceScore = Math.min(100, Math.max(10, rawScore));

  // Determine archaeological status recommendation
  let recommendedStatus: GraveStatus = 'ACTIVE';
  let statusExplanation = 'Domain is actively responding with valid DNS and normal HTTP status.';

  if (parkingDetected) {
    recommendedStatus = 'ZOMBIE';
    statusExplanation = 'Domain has lapsed into parking brokerage / squatter control. Original service has been abandoned.';
  } else if (detectedPhrases.length > 0 && confidenceScore >= 55) {
    recommendedStatus = 'CONFIRMED_DEAD';
    statusExplanation = 'Domain displays explicit shutdown declarations and verified decommissioning.';
  } else if (!dnsResolved) {
    recommendedStatus = 'OFFLINE';
    statusExplanation = 'Domain has dropped out of public DNS routing (NXDOMAIN). Host records are completely unassigned or removed.';
  } else if (httpStatus === 404 || httpStatus === 410) {
    recommendedStatus = 'CONFIRMED_DEAD';
    statusExplanation = `Endpoint returned explicit HTTP ${httpStatus} (Not Found/Gone), indicating decommissioning of active application routes.`;
  } else if (redirected && signals.some(s => s.label.includes('Defunct / Sunset Support Hub'))) {
    recommendedStatus = 'CONFIRMED_DEAD';
    statusExplanation = `Domain routes directly into corporate retirement or obsolescence support documentation.`;
  } else if (redirected) {
    recommendedStatus = 'ZOMBIE';
    statusExplanation = `Domain forwards visitors to an alternate destination (${finalUrl || 'remote host'}), service no longer operating standalone.`;
  } else if (confidenceScore >= 40) {
    recommendedStatus = 'AT_RISK';
    statusExplanation = 'Multiple anomalous degradation signals detected (server timeouts, certificate or route failures).';
  } else if (httpStatus && httpStatus >= 200 && httpStatus < 400) {
    recommendedStatus = 'ACTIVE';
    statusExplanation = `Domain is actively responding with HTTP ${httpStatus} and valid DNS resolution.`;
  }

  const latencyMs = Date.now() - startTime;
  const waybackUrl = `https://web.archive.org/web/*/${cleanInput}`;

  return {
    target: httpsUrl,
    domain: cleanInput,
    timestamp,
    http_status: httpStatus,
    dns_resolved: dnsResolved,
    ssl_valid: sslValid,
    latency_ms: latencyMs,
    server_header: serverHeader,
    wayback_url: waybackUrl,
    final_url: finalUrl,
    redirected,
    parking_detected: parkingDetected,
    shutdown_phrases_detected: detectedPhrases,
    signals_detected: signals,
    confidence_score: confidenceScore,
    recommended_status: recommendedStatus,
    status_explanation: statusExplanation,
    generated_evidence: generatedEvidence
  };
}

/**
 * Transparent Confidence Engine:
 * Computes transparent breakdown for any entity based on its verified evidence
 */
export function calculateEntityConfidence(evidenceItems: EvidenceItem[] = []): {
  score: number;
  breakdown: { label: string; points: number; reliability: ReliabilityLevel }[];
  statusGrade: 'CONFIRMED' | 'PROBABLE' | 'POSSIBLE' | 'UNKNOWN';
} {
  if (evidenceItems.length === 0) {
    return {
      score: 50,
      breakdown: [{ label: 'Baseline Unverified Report', points: 50, reliability: 'LOW' }],
      statusGrade: 'POSSIBLE'
    };
  }

  const breakdown: { label: string; points: number; reliability: ReliabilityLevel }[] = [];
  let totalPoints = 0;

  for (const item of evidenceItems) {
    let points = item.weight || 20;
    if (item.reliability === 'VERY_HIGH') points = Math.max(points, 35);
    else if (item.reliability === 'HIGH') points = Math.max(points, 25);
    else if (item.reliability === 'MEDIUM') points = Math.max(points, 15);
    else points = 10;

    totalPoints += points;
    breakdown.push({
      label: `${item.source_name} (${item.evidence_type.replace(/_/g, ' ')})`,
      points,
      reliability: item.reliability
    });
  }

  // Normalize between 10 and 100
  const normalized = Math.min(100, Math.max(15, totalPoints));

  let statusGrade: 'CONFIRMED' | 'PROBABLE' | 'POSSIBLE' | 'UNKNOWN' = 'CONFIRMED';
  if (normalized >= 85) statusGrade = 'CONFIRMED';
  else if (normalized >= 65) statusGrade = 'PROBABLE';
  else if (normalized >= 40) statusGrade = 'POSSIBLE';
  else statusGrade = 'UNKNOWN';

  return {
    score: normalized,
    breakdown,
    statusGrade
  };
}
