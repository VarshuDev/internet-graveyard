import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET() {
  try {
    const atRisk = graveyardDb.getAtRiskEntities();
    return NextResponse.json({
      count: atRisk.length,
      entities: atRisk
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch at-risk entities' }, { status: 500 });
  }
}
