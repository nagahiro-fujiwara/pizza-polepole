/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pagesのサブパス対応
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // 静的エクスポート（GitHub Pages用）
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
  }),
  
  // 画像最適化を無効化（GitHub Pages制限のため）
  images: {
    unoptimized: true,
    // セキュリティ: 外部画像の制限
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pizzapolepole.com',
      },
    ],
  },
  
  // ESLint設定
  eslint: {
    ignoreDuringBuilds: true,
  },

  // セキュリティヘッダー設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // XSS保護
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // コンテンツタイプスニッフィング防止
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // クリックジャッキング防止
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // HTTPS強制（本番環境のみ）
          ...(process.env.NODE_ENV === 'production' ? [{
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }] : []),
          // 参照元ポリシー
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // 権限ポリシー
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join('; ')
          }
        ],
      },
    ]
  },

  // 実験的機能のセキュリティ設定
  experimental: {
    // サーバーコンポーネントの安全性向上
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
