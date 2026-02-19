import { NextResponse, NextRequest } from 'next/server';
import { MiddlewareType } from './middlewares/config';
import { translationsMiddleware } from './middlewares/translations';

const activatedMiddleware: MiddlewareType[] = [translationsMiddleware];

const excludedPaths = [
  '/manifest.json',
  '/favicon.ico',
  '/api/',
  '/_next/',
  '/static/',
];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (excludedPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  for (const mw of activatedMiddleware) {
    if (mw.matcher) {
      const regex = new RegExp(mw.matcher);
      if (!regex.test(pathname)) {
        continue;
      }
    }

    const response = await mw.middleware(request);
    if (response) {
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|_vercel).*)'],
};
