interface WebPageStructuredDataProps {
  name: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  lastModified?: string;
  inLanguage?: string;
}

export default function WebPageStructuredData({
  name,
  description,
  url,
  breadcrumbs = [],
  lastModified,
  inLanguage = "ja"
}: WebPageStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "inLanguage": inLanguage,
    "isPartOf": {
      "@type": "WebSite",
      "name": "薪窯Pizza POLE POLE",
      "url": "https://pizzapolepole.com"
    },
    "about": {
      "@type": "Restaurant",
      "name": "薪窯Pizza POLE POLE"
    },
    "mainEntity": {
      "@type": "Restaurant",
      "name": "薪窯Pizza POLE POLE"
    },
    ...(lastModified && { "dateModified": lastModified }),
    ...(breadcrumbs.length > 0 && {
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
