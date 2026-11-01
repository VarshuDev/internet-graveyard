import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_SECRET_KEY, ADMIN_COOKIE_NAME, isAuthorizedAdmin } from '@/lib/auth/admin';

// Verify session status
export async function GET(request: NextRequest) {
  const authorized = isAuthorizedAdmin(request);
  if (!authorized) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true });
}

// Login with passkey
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { passkey } = body;

    if (!passkey || typeof passkey !== 'string') {
      return NextResponse.json({ error: 'Passkey is required' }, { status: 400 });
    }

    if (passkey.trim() !== ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: 'Invalid curator passkey. Access denied.' }, { status: 401 });
    }

    const response = NextResponse.json({
      success: true,
      message: 'Curator authentication successful.',
      token: ADMIN_SECRET_KEY
    });

    // Set secure HTTP-only session cookie
    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: ADMIN_SECRET_KEY,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Authentication error' }, { status: 500 });
  }
}

// Logout
export async function DELETE() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully.' });
  response.cookies.delete(ADMIN_COOKIE_NAME);
  return response;
}
