import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

async function verifyJWT(token: string) {
  const secret = new TextEncoder().encode(JWT_SECRET);
  const { payload } = await jwtVerify(token, secret);
  return payload;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (['/', '/login', '/register'].includes(pathname)) {
    return NextResponse.next();
  }

  try {
    const token = req.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    const decoded = await verifyJWT(token);

    const response = NextResponse.next();
    if (decoded.userId) {
      response.headers.set('x-user-id', decoded.userId.toString());
    }
    if (decoded.username) {
      response.headers.set('x-username', decoded.username as string);
    }

    return response;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: [
    '/account/:path*',
    '/appointment/:path*',
    '/dashboard/:path*',
    '/doctors/:path*',
    '/healthcare/:path*',
    '/healthcare-monitoring/:path*',
    '/laboratory/:path*',
    '/message/:path*',
    '/pharmacy/:path*',
    '/api/((?!auth).*)',
  ],
};
