export default function MenuStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "薪窯Pizza POLE POLE メニュー",
    "description": "本格的な薪窯で焼く手作りナポリピザメニュー",
    "inLanguage": "ja",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "薪窯ピザ",
        "description": "薪窯で一枚一枚丁寧に焼き上げる本格ナポリピザ",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "マルゲリータ",
            "description": "トマトソース、モッツァレラチーズ、バジルのシンプルな定番ピザ",
            "image": "https://pizzapolepole.com/images/menu_マルゲリータ.jpeg",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "JPY",
              "price": "1200"
            }
          },
          {
            "@type": "MenuItem",
            "name": "クワトロフォルマッジ",
            "description": "4種のチーズが織りなす濃厚な味わいのピザ",
            "image": "https://pizzapolepole.com/images/menu_フォルマッジ.jpeg",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "JPY",
              "price": "1500"
            }
          },
          {
            "@type": "MenuItem",
            "name": "マリナーラ",
            "description": "トマトソース、ガーリック、オレガノのシンプルなピザ",
            "image": "https://pizzapolepole.com/images/menu_マリナーラ.jpeg",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "JPY",
              "price": "1000"
            }
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "季節のピザ",
        "description": "旬の食材を使った限定ピザ",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "8月の季節ピザ",
            "description": "夏野菜と自家製パンチェッタのトマトクリームピザ",
            "image": "https://pizzapolepole.com/images/August_seasonal_pizza.png",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "JPY",
              "price": "1600"
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
