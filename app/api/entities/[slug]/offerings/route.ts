import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';
import { OfferingKind } from '@/types/graveyard';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const offerings = graveyardDb.getOfferings(params.slug);
    return NextResponse.json({ offerings });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json();
    const kind = (body.kind || 'CANDLE') as OfferingKind;

    const validKinds: OfferingKind[] = ['CANDLE', 'ROSE', 'FLOPPY', 'BELL'];
    if (!validKinds.includes(kind)) {
      return NextResponse.json({ error: 'Invalid offering kind' }, { status: 400 });
    }

    const offerings = graveyardDb.recordOffering(params.slug, kind);
    return NextResponse.json({ success: true, offerings });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
