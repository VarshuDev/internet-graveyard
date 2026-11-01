import { NextRequest, NextResponse } from 'next/server';
import { isAuthorizedAdmin, unauthorizedAdminResponse } from '@/lib/auth/admin';
import { runScraperPipeline } from '@/lib/discovery/scraperEngine';
import { graveyardDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  if (!isAuthorizedAdmin(request)) {
    return unauthorizedAdminResponse();
  }

  const candidates = graveyardDb.getDiscoveryCandidates();
  const entities = graveyardDb.getAllEntities();

  return NextResponse.json({
    status: 'ONLINE',
    total_entities: entities.length,
    pending_candidates: candidates.filter(c => c.status === 'PENDING').length,
    total_candidates: candidates.length,
    available_sources: ['wikipedia', 'hn', 'probe', 'all']
  });
}

export async function POST(request: NextRequest) {
  if (!isAuthorizedAdmin(request)) {
    return unauthorizedAdminResponse();
  }

  try {
    const body = await request.json().catch(() => ({}));
    const { source, limit, autoIngest, targetDomain } = body;

    const report = await runScraperPipeline({
      source: source || 'all',
      limit: typeof limit === 'number' ? Math.min(30, Math.max(1, limit)) : 8,
      autoIngest: Boolean(autoIngest),
      targetDomain: typeof targetDomain === 'string' ? targetDomain.trim() : undefined
    });

    return NextResponse.json({
      success: true,
      report
    });
  } catch (err: any) {
    console.error('Scraper execution error:', err);
    return NextResponse.json(
      { error: err.message || 'Scraper pipeline encountered an unexpected failure.' },
      { status: 500 }
    );
  }
}
