import { NextRequest, NextResponse } from 'next/server';

const PASSWORD = 'polepole2025';
const COOKIE_NAME = 'polepole_auth';

export function middleware(req: NextRequest) {
  // パスワードページと静的ファイルは除外
  if (
    req.nextUrl.pathname.startsWith('/password') ||
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.startsWith('/favicon') ||
    req.nextUrl.pathname.startsWith('/images')
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie === PASSWORD) {
    return NextResponse.next();
  }

  // 未認証ならパスワードページへ
  const url = req.nextUrl.clone();
  url.pathname = '/password';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon|images|password).*)',
  ],
};
