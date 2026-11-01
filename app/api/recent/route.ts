import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 12;
    const mode = searchParams.get('mode') || 'both';

    if (mode === 'updated') {
      const updated = graveyardDb.getRecentlyUpdated(limit);
      return NextResponse.json({
        count: updated.length,
        entities: updated
      });
    }

    if (mode === 'buried') {
      const buried = graveyardDb.getRecentlyBuried(limit);
      return NextResponse.json({
        count: buried.length,
        entities: buried
      });
    }

    const buried = graveyardDb.getRecentlyBuried(limit);
    const updated = graveyardDb.getRecentlyUpdated(limit);

    return NextResponse.json({
      count: buried.length,
      entities: buried,
      recently_updated: updated
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch recently buried entities' }, { status: 500 });
  }
}
