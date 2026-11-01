import { NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const stats = graveyardDb.getStats();
    return NextResponse.json(stats);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch stats' }, { status: 500 });
  }
}
