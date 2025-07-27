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
  },
  
  // ESLint設定
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;