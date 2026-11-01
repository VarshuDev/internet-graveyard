import { NextRequest } from 'next/server';
import { graveyardDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') || '';
  const entity = graveyardDb.getEntityBySlug(slug);

  const title = entity ? entity.name : 'Internet Graveyard';
  const lifespan = entity ? entity.lifespan : '1990 — Present';
  const domain = entity ? entity.primary_domain : 'internet-graveyard.vercel.app';
  const category = entity ? entity.category : 'Digital Archaeology';
  const status = entity ? entity.status.replace('_', ' ') : 'PRESERVED';
  const cause = entity ? entity.cause_category : 'Technological Obsolescence';
  const causeSummary = entity
    ? (entity.cause_of_death_summary.length > 130
        ? entity.cause_of_death_summary.slice(0, 130) + '...'
        : entity.cause_of_death_summary)
    : 'Preserved into the cyber-necropolis.';
  const tagline = entity
    ? (entity.tagline || entity.description.slice(0, 110) + '...')
    : 'The internet forgets. We archive what disappeared.';
  const candles = entity ? (entity.candle_count || 1240).toLocaleString() : '1,027+';
  const confidence = entity ? entity.confidence_score : 100;

  const statusColor = entity?.status === 'CONFIRMED_DEAD' ? '#ef4444' : entity?.status === 'AT_RISK' ? '#f59e0b' : '#10b981';

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="${statusColor}" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#050507" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18181b" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#09090b" stop-opacity="0.9" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#050507" />
  <rect width="1200" height="630" fill="url(#glow)" />
  <rect x="20" y="20" width="1160" height="590" rx="20" stroke="#27272a" stroke-width="4" fill="none" />

  <!-- Top Header Bar -->
  <text x="60" y="80" font-family="serif" font-size="34" font-weight="900" fill="#f59e0b">†</text>
  <text x="95" y="72" font-family="sans-serif" font-size="20" font-weight="900" fill="#ffffff" letter-spacing="2">INTERNET GRAVEYARD</text>
  <text x="95" y="92" font-family="monospace" font-size="12" fill="#71717a" letter-spacing="1">WEB ARCHAEOLOGY &amp; RELIC NECROPOLIS</text>

  <!-- Status Pill -->
  <rect x="940" y="55" width="200" height="38" rx="8" fill="#18181b" stroke="${statusColor}" stroke-width="1.5" />
  <circle cx="962" cy="74" r="5" fill="${statusColor}" />
  <text x="980" y="79" font-family="sans-serif" font-size="13" font-weight="700" fill="${statusColor}" letter-spacing="1.5">${escapeXml(status)}</text>

  <line x1="60" y1="120" x2="1140" y2="120" stroke="#27272a" stroke-width="2" />

  <!-- Lifespan & Category Tags -->
  <rect x="60" y="145" width="180" height="32" rx="6" fill="#451a03" stroke="#d97706" stroke-width="1" />
  <text x="75" y="166" font-family="monospace" font-size="14" font-weight="700" fill="#fcd34d">EPOCH: ${escapeXml(lifespan)}</text>

  <text x="260" y="166" font-family="sans-serif" font-size="15" font-weight="600" fill="#a1a1aa">•   ${escapeXml(category.toUpperCase())}   •</text>
  <text x="440" y="166" font-family="monospace" font-size="15" font-weight="600" fill="#10b981">${escapeXml(domain)}</text>

  <!-- Relic Title -->
  <text x="60" y="255" font-family="serif" font-size="64" font-weight="900" fill="#ffffff" letter-spacing="-1">${escapeXml(title)}</text>

  <!-- Tagline Quote -->
  <text x="60" y="310" font-family="sans-serif" font-style="italic" font-size="22" fill="#d4d4d8">"${escapeXml(tagline)}"</text>

  <!-- Autopsy Card -->
  <rect x="60" y="350" width="1080" height="150" rx="16" fill="url(#cardGrad)" stroke="#27272a" stroke-width="2" />
  <text x="90" y="390" font-family="monospace" font-size="13" font-weight="700" fill="#ef4444" letter-spacing="1.5">PRIMARY CAUSE OF DEMISE:</text>
  <text x="330" y="390" font-family="sans-serif" font-size="15" font-weight="700" fill="#ffffff">${escapeXml(cause)}</text>
  <text x="90" y="430" font-family="sans-serif" font-size="16" fill="#a1a1aa">${escapeXml(causeSummary)}</text>
  <text x="90" y="465" font-family="monospace" font-size="12" fill="#71717a">CORONER VERDICT: PERMANENT DECOMMISSIONING • ARCHIVED IN WAYBACK CORE</text>

  <line x1="60" y1="535" x2="1140" y2="535" stroke="#27272a" stroke-width="2" />

  <!-- Footer Telemetry -->
  <text x="60" y="575" font-family="monospace" font-size="14" fill="#71717a">🕯️  ${escapeXml(candles)} TRIBUTES  •  CONFIDENCE: ${confidence}%  •  1,027+ PRESERVED</text>
  <text x="820" y="575" font-family="monospace" font-size="14" font-weight="600" fill="#10b981">CONSECRATED ARCHIVE // internet-graveyard</text>
</svg>
`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
