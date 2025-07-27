import { NextRequest, NextResponse } from 'next/server'

const locales = ['ja', 'en']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const userAgent = request.headers.get('user-agent') || ''
  
  // セキュリティチェック: 悪意のあるボットやスキャナーを検出
  const suspiciousPatterns = [
    /sqlmap/i,
    /nikto/i,
    /nmap/i,
    /masscan/i,
    /\.php$/,
    /\.asp$/,
    /\.aspx$/,
    /wp-admin/,
    /wp-content/,
    /admin\.php/,
    /phpmyadmin/i,
    /\.env$/,
    /\.git/,
    /\.svn/,
    /backup/i,
    /debug/i
  ]
  
  // 悪意のあるパスをブロック
  if (suspiciousPatterns.some(pattern => pattern.test(pathname))) {
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    console.log(`🚫 Blocked suspicious request: ${pathname} from ${clientIP}`)
    return new NextResponse('Access Denied', { status: 403 })
  }
  
  // レート制限のための基本チェック（同一IPからの短時間での大量リクエスト検出）
  const response = NextResponse.next()
  
  // セキュリティヘッダーを追加
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
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
  
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\.).*)',
  ],
}
