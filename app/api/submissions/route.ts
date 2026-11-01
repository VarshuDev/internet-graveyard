import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';

export async function GET() {
  try {
    const submissions = graveyardDb.getAllSubmissions();
    return NextResponse.json({ submissions });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch submissions' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.service_name || !body.url || !body.what_happened) {
      return NextResponse.json({
        error: 'Please provide Service Name, URL, and a description of what happened.'
      }, { status: 400 });
    }

    const created = graveyardDb.submitCandidate({
      service_name: body.service_name,
      url: body.url,
      what_happened: body.what_happened,
      shutdown_date: body.shutdown_date,
      sources: body.sources || 'User Report',
      submitter_memory: body.submitter_memory,
      submitter_email: body.submitter_email
    });

    return NextResponse.json({
      success: true,
      message: 'Submission successfully received and placed into the moderation queue.',
      submission: created
    }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Submission failed' }, { status: 500 });
  }
}
