import { NextResponse } from 'next/server';
import { getInquestHistory, getLastAutomationReport } from '@/lib/automation/cronEngine';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const history = getInquestHistory();
    const latest = getLastAutomationReport();

    return NextResponse.json({
      latest,
      history,
      active_monitors: [
        "Hacker News Algolia Sunset Sentinel",
        "Wikipedia Defunct Services Inquest",
        "Automated At-Risk Priority Probes",
        "DNS NXDOMAIN & Squatter Domain Detector"
      ],
      system_time: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to retrieve inquests' }, { status: 500 });
  }
}
