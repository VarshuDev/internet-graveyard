import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const exclude = searchParams.get('exclude') || undefined;

    const randomGrave = graveyardDb.getRandomEntity(exclude);
    return NextResponse.json({ entity: randomGrave });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to select random grave' }, { status: 500 });
  }
}
