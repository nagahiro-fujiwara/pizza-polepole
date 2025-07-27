export default function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "薪窯Pizza POLE POLE",
    "alternateName": "ピッツァポレポレ",
    "url": "https://pizzapolepole.com",
    "logo": "https://pizzapolepole.com/images/Logo1.png",
    "image": [
      "https://pizzapolepole.com/images/exterior_全体.JPG",
      "https://pizzapolepole.com/images/interior_釜.JPG",
      "https://pizzapolepole.com/images/Kama.jpg"
    ],
    "description": "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめるレストラン。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザを提供。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "西条町田口70-1",
      "addressLocality": "東広島市",
      "addressRegion": "広島県",
      "postalCode": "739-0036",
      "addressCountry": "JP"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Japanese"]
    },
    "sameAs": [
      "https://www.instagram.com/pizzapolepole/"
    ],
    "foundingDate": "2025",
    "slogan": "Take it easy - Live slowly",
    "keywords": "薪窯ピザ,ナポリピザ,東広島,西条,イタリアン,カフェ,ランチ",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "薪窯ピザ",
        "description": "本格的な薪窯で焼く手作りナポリピザ"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
