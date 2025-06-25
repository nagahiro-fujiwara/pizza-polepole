import { NextRequest, NextResponse } from 'next/server';

console.log('PW:', process.env.NEXT_PUBLIC_SITE_PASSWORD, process.env.NODE_ENV);

export function middleware(request: NextRequest) {
  const password = process.env.NEXT_PUBLIC_SITE_PASSWORD || 'polepole';
  const url = request.nextUrl;
  const cookie = request.cookies.get('site_auth');

  // パスワードページとその静的リソースだけは常に通す
  if (
    url.pathname === '/password' ||
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/favicon.ico') ||
    url.pathname.startsWith('/images') ||
    url.pathname.startsWith('/public')
  ) {
    return NextResponse.next();
  }

  // 認証済みなら通す
  if (cookie && cookie.value === password) {
    return NextResponse.next();
  }

  // それ以外はパスワードページへリダイレクト
  url.pathname = '/password';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/(.*)'], // すべてのリクエストにパスワード制限
};
