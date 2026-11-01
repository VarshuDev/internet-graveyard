import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || '';
    const category = searchParams.get('category') || undefined;
    const status = searchParams.get('status') || undefined;
    const cause = searchParams.get('cause') || undefined;

    const results = graveyardDb.getAllEntities({
      search: q,
      category,
      status,
      cause
    });

    return NextResponse.json({
      query: q,
      count: results.length,
      results
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Search failed' }, { status: 500 });
  }
}
