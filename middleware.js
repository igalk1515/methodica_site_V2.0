import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/i18n-config';

function hasLocale(pathname) {
  return locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    /\.[\w-]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (hasLocale(pathname)) {
    return NextResponse.next();
  }

  const forcedLocale = defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${forcedLocale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*.[w-]+$).*)'],
};
