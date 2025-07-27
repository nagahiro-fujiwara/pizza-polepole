import Script from 'next/script';

interface BlogStructuredDataProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
}

export default function BlogStructuredData({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo
}: BlogStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "url": url,
    "image": [image],
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Script
      id="blog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
