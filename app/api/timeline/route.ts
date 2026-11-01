import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || undefined;

    const timelineData = graveyardDb.getTimelineEntities(category);
    return NextResponse.json({
      timeline: timelineData
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch timeline' }, { status: 500 });
  }
}
