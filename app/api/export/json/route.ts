import { NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET() {
  const entities = graveyardDb.getAllEntities();
  const jsonContent = JSON.stringify(entities, null, 2);

  return new NextResponse(jsonContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': `attachment; filename="internet-graveyard-full-dataset-${new Date().toISOString().slice(0, 10)}.json"`,
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
