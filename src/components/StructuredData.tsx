export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "薪窯Pizza POLE POLE",
    "alternateName": "ピッツァポレポレ",
    "description": "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
    "image": [
      "https://pizzapolepole.com/images/Kama.jpg",
      "https://pizzapolepole.com/images/exterior_全体.JPG",
      "https://pizzapolepole.com/images/interior_釜.JPG"
    ],
    "@id": "https://pizzapolepole.com",
    "url": "https://pizzapolepole.com",
    "telephone": "",
    "priceRange": "¥¥",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "東広島市",
      "addressRegion": "広島県",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.4259,
      "longitude": 132.7402
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday", 
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:30",
        "closes": "16:00"
      }
    ],
    "servesCuisine": [
      "Italian",
      "Pizza",
      "ピザ",
      "イタリアン"
    ],
    "hasMenu": "https://pizzapolepole.com/menu",
    "acceptsReservations": "False",
    "keywords": "東広島 ピザ, 西条 ピザ, 薪窯ピザ, ナポリピザ, 広島 ピザ, ランチ 東広島, カフェ 西条",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification", 
        "name": "薪窯"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "駐車場"
      }
    ],
    "paymentAccepted": "Cash, Credit Card"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
