interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  noindex?: boolean;
  alternateLanguages?: { [key: string]: string };
}

export default function AdvancedSEOMeta({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  alternateLanguages = {}
}: SEOMetaProps) {
  const siteTitle = "薪窯Pizza POLE POLE";
  const siteUrl = "https://pizzapolepole.com";
  const defaultDescription = "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめるレストラン。";

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || defaultDescription;
  const canonical = canonicalUrl || siteUrl;
  const image = ogImage || `${siteUrl}/images/exterior_全体.JPG`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title || "薪窯Pizza POLE POLE"} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@pizzapolepole" />
      <meta name="twitter:creator" content="@pizzapolepole" />

      {/* Alternate Languages */}
      {Object.entries(alternateLanguages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* Business-specific Meta */}
      {ogType === 'business.business' && (
        <>
          <meta property="business:contact_data:street_address" content="東広島市西条町田口" />
          <meta property="business:contact_data:locality" content="東広島市" />
          <meta property="business:contact_data:region" content="広島県" />
          <meta property="business:contact_data:postal_code" content="739-0036" />
          <meta property="business:contact_data:country_name" content="日本" />
          <meta property="place:location:latitude" content="34.4208" />
          <meta property="place:location:longitude" content="132.7442" />
        </>
      )}

      {/* Article-specific Meta */}
      {ogType === 'article' && (
        <>
          <meta property="article:publisher" content={siteUrl} />
          <meta property="article:author" content={siteTitle} />
          <meta property="article:section" content="レストラン・グルメ" />
          <meta property="article:tag" content="薪窯ピザ" />
          <meta property="article:tag" content="東広島" />
          <meta property="article:tag" content="イタリアン" />
        </>
      )}

      {/* Additional SEO Meta */}
      <meta name="theme-color" content="#9baf87" />
      <meta name="msapplication-TileColor" content="#9baf87" />
      <meta name="application-name" content={siteTitle} />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="JP-34" />
      <meta name="geo.placename" content="東広島市西条町" />
      <meta name="geo.position" content="34.4208;132.7442" />
      <meta name="ICBM" content="34.4208, 132.7442" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </>
  );
}
