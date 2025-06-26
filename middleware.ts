import { getToken } from 'next-auth/jwt';
import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export default auth(async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const isAuthenticated = Boolean(token);

  if (req.nextUrl.pathname.startsWith('/login')) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
});

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname === request.nextUrl.pathname.toLocaleLowerCase()
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    `${request.nextUrl.origin}${request.nextUrl.pathname.toLocaleLowerCase()}${request.nextUrl.search}`,
  );
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
