import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const category = searchParams.get('category') || undefined;
    const status = searchParams.get('status') || undefined;
    const cause = searchParams.get('cause') || undefined;
    const yearFrom = searchParams.get('yearFrom') ? parseInt(searchParams.get('yearFrom')!) : undefined;
    const yearTo = searchParams.get('yearTo') ? parseInt(searchParams.get('yearTo')!) : undefined;
    const sort = (searchParams.get('sort') as any) || undefined;

    const entities = graveyardDb.getAllEntities({
      search,
      category,
      status,
      cause,
      yearFrom,
      yearTo,
      sort
    });

    return NextResponse.json({
      count: entities.length,
      entities
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch entities' }, { status: 500 });
  }
}
