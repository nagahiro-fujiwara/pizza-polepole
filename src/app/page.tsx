import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import FeatureSection from "../components/FeatureSection"; // FeatureSectionをインポート
import Notification from "../components/Notification"; // Notificationをインポート

export const metadata = {
  title: "薪窯Pizza POLE POLE | 西条・東広島のランチ・カフェ・ピザ",
  description:
    "東広島・西条でランチやカフェにおすすめの薪窯Pizza POLE POLE。地元食材・自家製生地・ナポリピザ。おしゃれな店内でゆっくり過ごせる人気店。テイクアウトもOK。",
  keywords: [
    "西条",
    "東広島",
    "ピザ",
    "ランチ",
    "カフェ",
    "薪窯",
    "ナポリピザ",
    "テイクアウト",
    "おしゃれ",
    "人気",
    "グルメ",
    "イタリアン",
    "ディナー",
    "ファミリー",
    "女子会",
    "デート",
    "地元食材",
    "自家製",
    "POLE POLE",
    "ポレポレ",
    "サイジョウ",
    "Saijo",
    "pizza",
    "lunch",
    "cafe",
    "takeout",
    "gourmet",
    "restaurant",
  ],
  openGraph: {
    title: "薪窯Pizza POLE POLE | 西条・東広島のランチ・カフェ・ピザ",
    description:
      "東広島・西条でランチやカフェにおすすめの薪窯Pizza POLE POLE。地元食材・自家製生地・ナポリピザ。おしゃれな店内でゆっくり過ごせる人気店。テイクアウトもOK。",
    url: "https://pizzapolepole.com/",
    images: [
      {
        url: "/images/interior_釜1.JPG",
        width: 1200,
        height: 630,
        alt: "薪窯Pizza POLE POLEの薪窯",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "薪窯Pizza POLE POLE | 西条・東広島のランチ・カフェ・ピザ",
    description:
      "東広島・西条でランチやカフェにおすすめの薪窯Pizza POLE POLE。地元食材・自家製生地・ナポリピザ。おしゃれな店内でゆっくり過ごせる人気店。テイクアウトもOK。",
    images: ["/images/interior_釜1.JPG"],
  },
};

export default function Home() {
  return (
    <div className={`${styles.page} page-container`}>
      <Notification 
        message="【臨時休業のお知らせ】7月20日(日)は休業いたします。"
        link="/blog/2025-07-20-temporary-closure"
        linkText="詳しくはこちら"
      />
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/interior_景色.JPG" // 画像を差し替え
              alt="薪窯Pizza POLE POLEの店内から見た景色"
              fill
              style={{ objectFit: "cover" }}
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>薪窯Pizza POLE POLE</h1>
            <p className={styles.catch}>
              ゆっくり、ぼちぼち、やすらぎの場で味わう薪窯Pizza。
            </p>
            <Link href="/menu" className={styles.button}>
              メニューをみる
            </Link>
          </div>
        </section>

        {/* --- About Section --- */}
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/exterior_イス.JPG"
              alt="店外の椅子"
              width={500}
              height={375}
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>POLE POLEという場所</h2>
            <p>
              POLE POLEは、スワヒリ語で「ぼちぼちいこか」というメッセージ。
              <br />
              忙しい日常から少しだけ離れて、薪の爆ぜる音に耳を澄ます。
              <br />
              心豊かなひとときをお過ごしいただきたい。
              <br />
              そんな想いが、この場所には込められています。
            </p>
            <Link href="/about" className={styles.button}>
              私たちの想い
            </Link>
          </div>
        </section>

        {/* --- Commitment & Menu Section --- */}
        <FeatureSection
          title="一枚一枚、心を込めて"
          description="400度を超える薪窯で、一気に焼き上げます。最高の焼き加減で、最高の味を。POLE POLEのこだわりが詰まった一枚を、ぜひご賞味ください。"
          imageUrl="/images/interior_釜4.JPG"
          imageAlt="薪窯で一枚一枚丁寧に焼くピザ"
          buttonLabel="すべてのメニューを見る"
          buttonLink="/menu"
        />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>自慢の薪窯Pizza</h2>
          <div className={styles.highlightGrid}>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu_マルゲリータ.jpeg"
                  alt="マルゲリータ"
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>マルゲリータ</h3>
                <p>トマトとバジル、モッツァレラの定番ピザ</p>
              </div>
            </Link>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu_フォルマッジ.jpeg"
                  alt="クワトロフォルマッジ"
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>クワトロフォルマッジ</h3>
                <p>自家製りんごペーストと楽しむ4種のチーズ</p>
              </div>
            </Link>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu_マリナーラ.jpeg"
                  alt="マリナーラ"
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>マリナーラ</h3>
                <p>トマト・にんにく・オレガノのシンプルなピザ</p>
              </div>
            </Link>
          </div>
        </section>

        {/* --- Gallery Section --- */}
        <FeatureSection
          title="空間へのこだわり"
          description="POLE POLEの店内は、木の温もりと開放的な窓が特徴です。一枚板のカウンター、ゆったりとしたテーブル席。お一人様でも、大切な方とでも、心地よい時間をお過ごしいただけます。"
          imageUrl="/images/interior_席1.JPG"
          imageAlt="店内のテーブル席"
          buttonLabel="ギャラリーを見る"
          buttonLink="/gallery"
        />

        {/* --- Final CTA Section --- */}
        <section className={`${styles.section} ${styles.finalCtaSection}`}>
          <h2 className={styles.sectionTitle}>POLE POLEで、会いましょう</h2>
          <p className={styles.sectionDescription}>
            薪窯で焼き上げるあつあつのピザと、やすらぎの空間をご用意して。
            <br />
            あなたのお越しを、心よりお待ちしています。
          </p>
          <div className={styles.finalCtaWrapper}>
            <Link href="/access" className={styles.button}>
              お店の場所を確認する
            </Link>
            <Link href="/blog" className={styles.button}>
              日々のブログを読む
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
