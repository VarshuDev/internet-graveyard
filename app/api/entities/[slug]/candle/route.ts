import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const newCount = graveyardDb.lightCandle(slug);

    if (newCount === 0) {
      return NextResponse.json({ error: `Grave not found for slug "${slug}"` }, { status: 404 });
    }

    return NextResponse.json({ success: true, candle_count: newCount });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to light candle' }, { status: 500 });
  }
}
