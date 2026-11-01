import { NextRequest, NextResponse } from 'next/server';

export const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET_KEY || 'graveyard-curator-2024';
export const ADMIN_COOKIE_NAME = 'graveyard_admin_token';

/**
 * Validates whether the incoming request contains the correct admin authentication token.
 * Checks:
 * 1. 'Authorization: Bearer <token>' header
 * 2. 'x-admin-token: <token>' custom header
 * 3. 'graveyard_admin_token' cookie
 */
export function isAuthorizedAdmin(request: NextRequest): boolean {
  // 1. Check Bearer Authorization header
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.slice(7).trim();
    if (token === ADMIN_SECRET_KEY) return true;
  }

  // 2. Check x-admin-token header
  const customHeader = request.headers.get('x-admin-token');
  if (customHeader && customHeader.trim() === ADMIN_SECRET_KEY) {
    return true;
  }

  // 3. Check admin cookie
  const cookieToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (cookieToken && cookieToken.trim() === ADMIN_SECRET_KEY) {
    return true;
  }

  return false;
}

export function unauthorizedAdminResponse(): NextResponse {
  return NextResponse.json(
    { 
      error: 'Unauthorized: Access to the Archival Admin Terminal requires valid curator credentials.',
      code: 'UNAUTHORIZED_ADMIN'
    },
    { status: 401 }
  );
}
