export default function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "営業時間を教えてください",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "営業時間は木・金・土曜日の11:30〜14:30と17:30〜20:30です。日曜日は11:30〜14:30のみの営業となります。月・火・水曜日は定休日です。"
        }
      },
      {
        "@type": "Question",
        "name": "予約は必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ご予約をお勧めしています。お電話またはお問い合わせフォームからご予約いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "どんなピザがありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "薪窯で焼くナポリピザを提供しています。マルゲリータ、マリナーラなどの定番から、季節の食材を使ったオリジナルピザまで様々なメニューをご用意しています。"
        }
      },
      {
        "@type": "Question",
        "name": "アクセス方法を教えてください",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JR石川町駅から徒歩約15分、またはお車でお越しいただけます。詳しいアクセス情報はアクセスページをご確認ください。"
        }
      },
      {
        "@type": "Question",
        "name": "駐車場はありますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "お店の前に駐車スペースをご用意しています。詳細はお電話でお問い合わせください。"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
