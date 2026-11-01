import { NextRequest } from 'next/server';
import { graveyardDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const stats = graveyardDb.getStats();

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="20%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#050507" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#050507" />
  <rect width="1200" height="630" fill="url(#glow)" />
  <rect x="20" y="20" width="1160" height="590" rx="20" stroke="#27272a" stroke-width="4" fill="none" />

  <!-- Top Header Bar -->
  <text x="60" y="80" font-family="serif" font-size="36" font-weight="900" fill="#f59e0b">†</text>
  <text x="95" y="72" font-family="sans-serif" font-size="22" font-weight="900" fill="#ffffff" letter-spacing="2">INTERNET GRAVEYARD</text>
  <text x="95" y="94" font-family="monospace" font-size="12" fill="#71717a" letter-spacing="1">DEFUNCT WEB ARCHAEOLOGY &amp; RELIC NECROPOLIS</text>

  <!-- Status Pill -->
  <rect x="910" y="55" width="230" height="38" rx="8" fill="#18181b" stroke="#10b981" stroke-width="1.5" />
  <circle cx="932" cy="74" r="5" fill="#10b981" />
  <text x="950" y="79" font-family="sans-serif" font-size="13" font-weight="700" fill="#10b981" letter-spacing="1.5">1,027+ SITES PRESERVED</text>

  <line x1="60" y1="120" x2="1140" y2="120" stroke="#27272a" stroke-width="2" />

  <!-- Main Headline -->
  <text x="60" y="220" font-family="serif" font-size="56" font-weight="900" fill="#ffffff" letter-spacing="-1">"The Internet Forgets.</text>
  <text x="60" y="285" font-family="serif" font-size="56" font-weight="900" fill="#f59e0b" letter-spacing="-1">We Archive What Disappeared."</text>

  <!-- Subtitle -->
  <text x="60" y="340" font-family="sans-serif" font-size="20" fill="#a1a1aa">A living cyber-cemetery &amp; forensic archaeological registry documenting 1,027+ websites,</text>
  <text x="60" y="370" font-family="sans-serif" font-size="20" fill="#a1a1aa">fallen protocols, and defunct digital communities across 36 years of internet history.</text>

  <!-- Stat Pills -->
  <rect x="60" y="420" width="220" height="85" rx="12" fill="#18181b" stroke="#ef4444" stroke-width="1.5" />
  <text x="80" y="460" font-family="sans-serif" font-size="32" font-weight="900" fill="#ef4444">${stats.confirmed_dead}</text>
  <text x="80" y="488" font-family="monospace" font-size="12" fill="#fca5a5" letter-spacing="1">EXTINCT RELICS</text>

  <rect x="300" y="420" width="220" height="85" rx="12" fill="#18181b" stroke="#10b981" stroke-width="1.5" />
  <text x="320" y="460" font-family="sans-serif" font-size="32" font-weight="900" fill="#10b981">434</text>
  <text x="320" y="488" font-family="monospace" font-size="12" fill="#6ee7b7" letter-spacing="1">LIVING OBSERVATION</text>

  <rect x="540" y="420" width="220" height="85" rx="12" fill="#18181b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="560" y="460" font-family="sans-serif" font-size="32" font-weight="900" fill="#f59e0b">${stats.at_risk}</text>
  <text x="560" y="488" font-family="monospace" font-size="12" fill="#fcd34d" letter-spacing="1">AT-RISK DYING</text>

  <rect x="780" y="420" width="220" height="85" rx="12" fill="#18181b" stroke="#8b5cf6" stroke-width="1.5" />
  <text x="800" y="460" font-family="sans-serif" font-size="32" font-weight="900" fill="#8b5cf6">${stats.zombie_services}</text>
  <text x="800" y="488" font-family="monospace" font-size="12" fill="#c4b5fd" letter-spacing="1">PARKED ZOMBIES</text>

  <line x1="60" y1="535" x2="1140" y2="535" stroke="#27272a" stroke-width="2" />

  <!-- Footer Telemetry -->
  <text x="60" y="575" font-family="monospace" font-size="14" fill="#71717a">AUTONOMOUS FORENSIC RADAR &amp; PROCEDURAL AUDIO SYNTHESIS</text>
  <text x="850" y="575" font-family="monospace" font-size="14" font-weight="600" fill="#10b981">internet-graveyard.vercel.app</text>
</svg>
`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
