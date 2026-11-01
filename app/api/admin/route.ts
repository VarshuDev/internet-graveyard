import { NextRequest, NextResponse } from 'next/server';
import { graveyardDb } from '@/lib/db';
import { isAuthorizedAdmin, unauthorizedAdminResponse } from '@/lib/auth/admin';

export async function GET(request: NextRequest) {
  // Enforce security verification
  if (!isAuthorizedAdmin(request)) {
    return unauthorizedAdminResponse();
  }

  try {
    const stats = graveyardDb.getStats();
    const candidates = graveyardDb.getDiscoveryCandidates();
    const submissions = graveyardDb.getAllSubmissions();
    const entities = graveyardDb.getAllEntities();

    return NextResponse.json({
      stats,
      candidates,
      submissions,
      entities
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Admin fetch failed' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // Enforce security verification
  if (!isAuthorizedAdmin(request)) {
    return unauthorizedAdminResponse();
  }

  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'update_candidate') {
      const { id, status } = body;
      const ok = graveyardDb.updateCandidateStatus(id, status);
      return NextResponse.json({ success: ok });
    }

    if (action === 'update_submission') {
      const { id, status } = body;
      const ok = graveyardDb.updateSubmissionStatus(id, status);
      return NextResponse.json({ success: ok });
    }

    if (action === 'save_entity') {
      const { entity } = body;
      const saved = graveyardDb.saveEntity(entity);
      return NextResponse.json({ success: true, entity: saved });
    }

    if (action === 'delete_entity') {
      const { slug } = body;
      const deleted = graveyardDb.deleteEntity(slug);
      return NextResponse.json({ success: deleted });
    }

    return NextResponse.json({ error: 'Unknown admin action' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Admin operation failed' }, { status: 500 });
  }
}
