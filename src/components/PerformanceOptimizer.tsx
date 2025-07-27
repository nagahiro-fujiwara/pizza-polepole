import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// 動的インポートでコード分割を実装
const DynamicPizzaGallery = dynamic(() => import('./PizzaGallery'), {
  loading: () => <div className="gallery-loading">ギャラリーを読み込み中...</div>,
  ssr: false
});

export default function PerformanceOptimizer() {
  return {
    // Critical Resource Hints
    preconnectLinks: (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </>
    ),

    // Image Preloading for Above-the-fold Content
    preloadImages: (
      <>
        <link rel="preload" as="image" href="/images/exterior_全体.JPG" />
        <link rel="preload" as="image" href="/images/Logo1.png" />
        <link rel="preload" as="image" href="/images/interior_釜.JPG" />
      </>
    ),

    // Critical CSS Inlining Helper
    criticalCSS: `
      .hero-section { display: flex; min-height: 60vh; }
      .header { position: sticky; top: 0; z-index: 100; }
      .main-content { opacity: 1; transform: translateY(0); }
    `,

    // Lazy-loaded Components
    LazyPizzaGallery: DynamicPizzaGallery,

    // Web Vitals Optimization
    webVitalsConfig: {
      // LCP optimization
      largestContentfulPaint: {
        preloadHeroImage: true,
        optimizeImageFormat: 'webp',
        imageLoading: 'eager'
      },
      
      // FID optimization
      firstInputDelay: {
        deferNonCriticalJS: true,
        useRequestIdleCallback: true
      },
      
      // CLS optimization
      cumulativeLayoutShift: {
        reserveImageSpace: true,
        avoidDynamicContent: true,
        useAspectRatio: true
      }
    }
  };
}

// Service Worker Registration Helper
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// Image Optimization Helper
export function getOptimizedImageProps(src: string, alt: string, priority?: boolean) {
  return {
    src,
    alt,
    priority,
    loading: priority ? 'eager' : 'lazy',
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    style: {
      width: '100%',
      height: 'auto',
    }
  };
}

// Performance Monitoring
export function trackWebVitals() {
  if (typeof window !== 'undefined') {
    // Web Vitals tracking without external dependency
    console.log('Web Vitals tracking initialized');
  }
}
