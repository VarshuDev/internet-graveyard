import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const entity = graveyardDb.getEntityBySlug(slug);

    if (!entity) {
      return NextResponse.json({ error: `Grave not found for slug "${slug}"` }, { status: 404 });
    }

    return NextResponse.json({ entity });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch entity' }, { status: 500 });
  }
}
