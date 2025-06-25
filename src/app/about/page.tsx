import Image from "next/image";
import pageStyles from "../page.module.css";
import aboutStyles from "./about.module.css";

export const metadata = {
  title: "メッセージ | 薪窯ピザ POLEPOLE",
  description:
    "薪窯ピザPOLEPOLEからのメッセージ。ゆっくり、ぼちぼち、やすらぎの場で過ごす心豊かなひとときへの想いをお伝えします。",
  keywords: [
    "西条",
    "東広島",
    "ピザ",
    "カフェ",
    "ランチ",
    "メッセージ",
    "想い",
    "POLEPOLE",
    "ポレポレ",
  ],
  openGraph: {
    title: "メッセージ | 薪窯ピザ POLEPOLE",
    description:
      "薪窯ピザPOLEPOLEからのメッセージ。ゆっくり、ぼちぼち、やすらぎの場で過ごす心豊かなひとときへの想いをお伝えします。",
    url: "https://pizzapolepole.com/about",
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
    title: "メッセージ | 薪窯ピザ POLEPOLE",
    description:
      "薪窯ピザPOLEPOLEからのメッセージ。ゆっくり、ぼちぼち、やすらぎの場で過ごす心豊かなひとときへの想いをお伝えします。",
    images: ["/images/Kama.jpg"],
  },
};

export default function About() {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <section className={aboutStyles.philosophySection}>
          <div className={aboutStyles.backgroundImage}>
            <Image
              src="/images/exterior_イス2.JPG"
              alt="店外の椅子と緑"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className={aboutStyles.overlay}></div>
          <div className={aboutStyles.philosophyContent}>
            <h2>
              “POLE POLE” <br />「ゆっくりゆっくり」「ぼちぼちいこう」
            </h2>
            <p>
              変化が早く、不確実性が高まる現代。
              <br />
              私たちの目まぐるしい日々では、
              <br />
              大切な時間がつい後回しにされがちです。
            </p>
            <p>
              そんな日常から少しだけ離れて、
              <br />
              自分のこころの声に耳をかたむけるひとときが
              <br />
              あってもいいのではないでしょうか。
            </p>
            <p>
              POLEPOLEが、そんなやすらぎの場所に
              <br />
              なれたらと願っています。
            </p>
            <p>
              道が常にあなたの前にありますように。
              <br />
              風がいつもあなたの背中を押してくれますように。
              <br />
              <br />
              ぼちぼちいきましょう、POLE POLE。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
