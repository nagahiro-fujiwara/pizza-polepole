export default function WebSiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "薪窯Pizza POLE POLE",
    "alternateName": "ピッツァポレポレ",
    "url": "https://pizzapolepole.com",
    "description": "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめるレストラン。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザを提供。",
    "inLanguage": ["ja", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://pizzapolepole.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "薪窯Pizza POLE POLE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pizzapolepole.com/images/Logo1.png"
      }
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "薪窯Pizza POLE POLE"
    },
    "copyrightYear": "2025",
    "genre": ["レストラン", "ピザ", "イタリアン", "カフェ"],
    "keywords": "薪窯ピザ,ナポリピザ,東広島,西条,イタリアン,カフェ,ランチ,広島グルメ",
    "about": {
      "@type": "Restaurant",
      "name": "薪窯Pizza POLE POLE"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
