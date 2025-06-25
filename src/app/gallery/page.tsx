import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "ギャラリー | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ",
  description:
    "薪窯ピザPOLEPOLEの店内・外観・ピザ・季節の風景ギャラリー。西条・東広島でおしゃれなカフェ・ピザ店をお探しなら。",
  keywords: [
    "西条",
    "東広島",
    "ピザ",
    "ギャラリー",
    "カフェ",
    "店内",
    "外観",
    "おしゃれ",
    "人気",
    "POLEPOLE",
    "ポレポレ",
    "pizza",
    "cafe",
    "gourmet",
    "restaurant",
    "gallery",
  ],
  openGraph: {
    title: "ギャラリー | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ",
    description:
      "薪窯ピザPOLEPOLEの店内・外観・ピザ・季節の風景ギャラリー。西条・東広島でおしゃれなカフェ・ピザ店をお探しなら。",
    url: "https://pizzapolepole.com/gallery",
    images: [
      {
        url: "/images/Kama.jpg",
        width: 1200,
        height: 630,
        alt: "薪窯Pizza POLEPOLEの薪窯",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ギャラリー | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ",
    description:
      "薪窯ピザPOLEPOLEの店内・外観・ピザ・季節の風景ギャラリー。西条・東広島でおしゃれなカフェ・ピザ店をお探しなら。",
    images: ["/images/Kama.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
