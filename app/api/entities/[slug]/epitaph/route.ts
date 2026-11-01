import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const body = await request.json();

    if (!body.content || typeof body.content !== 'string' || body.content.trim().length === 0) {
      return NextResponse.json({ error: 'Epitaph content cannot be blank' }, { status: 400 });
    }

    const created = graveyardDb.addEpitaph(slug, {
      author_name: body.author_name || 'Anonymous Pilgrim',
      content: body.content,
      years_used: body.years_used
    });

    if (!created) {
      return NextResponse.json({ error: `Grave not found for slug "${slug}"` }, { status: 404 });
    }

    return NextResponse.json({ success: true, epitaph: created });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to submit epitaph' }, { status: 500 });
  }
}
