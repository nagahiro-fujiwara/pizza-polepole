interface BlogPostStructuredDataProps {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  authorName?: string;
  slug: string;
}

export default function BlogPostStructuredData({
  title,
  description,
  publishedDate,
  modifiedDate,
  image,
  authorName = "Pizza ポレポレ",
  slug
}: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image ? `https://pizzapolepole.com${image}` : "https://pizzapolepole.com/images/Kama.jpg",
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://pizzapolepole.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pizza ポレポレ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pizzapolepole.com/images/Logo1.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pizzapolepole.com/blog/${slug}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
