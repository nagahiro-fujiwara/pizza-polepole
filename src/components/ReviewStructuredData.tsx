export default function ReviewStructuredData() {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Restaurant",
      "name": "薪窯Pizza POLE POLE"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "地元グルメレビューサイト"
    },
    "reviewBody": "自然に囲まれた素敵な環境で、本格的な薪窯ピザが味わえる隠れ家的レストラン。生地から手作りで、地元食材を活かした季節のピザが絶品。ゆったりとした時間を過ごせる最高の場所です。",
    "datePublished": "2025-06-26",
    "publisher": {
      "@type": "Organization",
      "name": "薪窯Pizza POLE POLE"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewData) }}
    />
  );
}
