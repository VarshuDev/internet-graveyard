import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string; id: string } }
) {
  try {
    const hearts = graveyardDb.heartEpitaph(params.slug, params.id);
    return NextResponse.json({ success: true, hearts });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
