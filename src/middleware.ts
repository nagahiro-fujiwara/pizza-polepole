import { NextRequest, NextResponse } from 'next/server'

const locales = ['ja', 'en']
const defaultLocale = 'ja'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // パスに言語が含まれているかチェック
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 英語パス(/en/...)の場合、クエリパラメータとして言語を追加
  if (pathname.startsWith('/en')) {
    const url = request.nextUrl.clone()
    // /en を除去して、langパラメータを追加
    url.pathname = pathname.replace(/^\/en/, '') || '/'
    url.searchParams.set('lang', 'en')
    return NextResponse.rewrite(url)
  }

  // 日本語（デフォルト）の場合はlangパラメータを追加
  if (!pathnameHasLocale && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    const url = request.nextUrl.clone()
    url.searchParams.set('lang', 'ja')
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
}
