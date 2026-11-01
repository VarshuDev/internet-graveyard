import { NextRequest, NextResponse } from 'next/server';
import { probeDomainHealth } from '@/lib/discovery/scanner';
import { graveyardDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const domainOrUrl = searchParams.get('domain') || searchParams.get('url') || searchParams.get('q');

    if (!domainOrUrl || typeof domainOrUrl !== 'string') {
      return NextResponse.json({ error: 'Valid domain or URL required' }, { status: 400 });
    }

    return await handleProbe(domainOrUrl);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Health probe failed' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const domainOrUrl = body.domain || body.url;

    if (!domainOrUrl || typeof domainOrUrl !== 'string') {
      return NextResponse.json({ error: 'Valid domain or URL required' }, { status: 400 });
    }

    return await handleProbe(domainOrUrl);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Health probe failed' }, { status: 500 });
  }
}

async function handleProbe(domainOrUrl: string) {
  const cleanInput = domainOrUrl.trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '').toLowerCase();
  const scanResult = await probeDomainHealth(domainOrUrl);

  // Check if this domain already exists in our verified graveyard database
  const allGraves = graveyardDb.getAllEntities();
  const matchedEntity = allGraves.find(g => {
    const d = g.primary_domain.toLowerCase();
    return d === cleanInput || cleanInput.includes(d) || d.includes(cleanInput);
  });

  if (matchedEntity) {
    scanResult.matched_grave = {
      slug: matchedEntity.slug,
      name: matchedEntity.name,
      status: matchedEntity.status
    };
  }

  // If significant degradation or shutdown language detected and not already archived, record in discovery queue
  if (!matchedEntity && (scanResult.confidence_score >= 60 || scanResult.recommended_status !== 'ACTIVE')) {
    graveyardDb.addDiscoveryCandidate({
      service_name: scanResult.domain,
      domain: scanResult.domain,
      category: 'Web technology',
      detected_signals: scanResult.signals_detected.map(s => `${s.label} (+${s.points} pts)`),
      confidence_score: scanResult.confidence_score,
      raw_evidence: scanResult.status_explanation,
      status: 'PENDING'
    });
  }

  return NextResponse.json({
    success: true,
    scan: scanResult,
    matched_entity: matchedEntity || null
  });
}
