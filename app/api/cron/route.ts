import { NextRequest, NextResponse } from 'next/server';
import { runAutomatedArchaeologyPipeline, getLastAutomationReport } from '@/lib/automation/cronEngine';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // If caller just wants the status of the last automated execution
    if (searchParams.get('status') === 'true') {
      const lastReport = getLastAutomationReport();
      return NextResponse.json({
        active: true,
        last_report: lastReport || { message: 'No automation runs executed yet in current cycle.' }
      });
    }

    // Verify Authorization (CRON_SECRET, admin passkey, or development mode)
    const authHeader = request.headers.get('authorization');
    const passkeyHeader = request.headers.get('x-admin-passkey');
    const cronSecret = process.env.CRON_SECRET || 'archaeology-cron-secret-2026';
    const adminPasskey = process.env.ADMIN_PASSKEY || 'graveyard-admin-2026';

    const isAuthorized =
      authHeader === `Bearer ${cronSecret}` ||
      passkeyHeader === adminPasskey ||
      searchParams.get('key') === cronSecret ||
      searchParams.get('key') === adminPasskey ||
      process.env.NODE_ENV !== 'production';

    if (!isAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized. Provide valid Authorization Bearer token or x-admin-passkey.' },
        { status: 401 }
      );
    }

    const crawlHn = searchParams.get('hn') !== 'false';
    const scrapeWikipedia = searchParams.get('wiki') !== 'false';
    const probeBatchSize = searchParams.get('probe') ? parseInt(searchParams.get('probe')!, 10) : 5;
    const autoApprove = searchParams.get('auto_approve') === 'true';

    const report = await runAutomatedArchaeologyPipeline({
      crawlHn,
      scrapeWikipedia,
      probeBatchSize,
      autoApproveScoreThreshold: autoApprove ? 90 : 101, // 101 means no auto-approve unless explicitly requested
      maxNewCandidates: 8
    });

    return NextResponse.json({
      success: true,
      report
    });
  } catch (err: any) {
    console.error('Error executing automated cron pipeline:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Automation execution failed' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    let body: any = {};
    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const authHeader = request.headers.get('authorization');
    const passkeyHeader = request.headers.get('x-admin-passkey');
    const cronSecret = process.env.CRON_SECRET || 'archaeology-cron-secret-2026';
    const adminPasskey = process.env.ADMIN_PASSKEY || 'graveyard-admin-2026';

    const isAuthorized =
      authHeader === `Bearer ${cronSecret}` ||
      passkeyHeader === adminPasskey ||
      body.passkey === adminPasskey ||
      body.key === cronSecret ||
      process.env.NODE_ENV !== 'production';

    if (!isAuthorized) {
      return NextResponse.json(
        { error: 'Unauthorized. Provide valid Authorization Bearer token or x-admin-passkey.' },
        { status: 401 }
      );
    }

    const report = await runAutomatedArchaeologyPipeline({
      crawlHn: body.crawlHn ?? true,
      scrapeWikipedia: body.scrapeWikipedia ?? true,
      probeBatchSize: body.probeBatchSize ?? 5,
      autoApproveScoreThreshold: body.autoApprove ? 90 : 101,
      maxNewCandidates: body.maxNewCandidates ?? 8
    });

    return NextResponse.json({
      success: true,
      report
    });
  } catch (err: any) {
    console.error('Error executing automated cron pipeline:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Automation execution failed' },
      { status: 500 }
    );
  }
}
