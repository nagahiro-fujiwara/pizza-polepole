import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import FeatureSection from "../../components/FeatureSection";
import Notification from "../../components/Notification";
import { getDictionary } from "../../get-dictionary";

export const metadata = {
  title: "薪窯Pizza POLE POLE | 西条・東広島のランチ・カフェ・ピザ",
  description:
    "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
  keywords: [
    "西条",
    "東広島",
    "ピザ",
    "ランチ",
    "カフェ",
    "薪窯",
    "ナポリピザ",
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
      "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
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
      "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
    images: ["/images/interior_釜1.JPG"],
  },
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: 'ja' | 'en' };
}) {
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <div className={`${styles.page} page-container`}>
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
            <h1 className={styles.title}>{t.hero.title}</h1>
            <p className={styles.catch}>
              {t.hero.catch}
            </p>
            <Link href="/menu" className={styles.button}>
              {t.hero.button}
            </Link>
          </div>
        </section>

        <Notification 
          message={t.notification.temp_closure}
          link="/blog/2025-07-20-temporary-closure"
          linkText={t.notification.link_text}
        />
        <Notification 
          message={t.notification.summer_holiday}
          link="/blog/2025-08-12-summer-holiday"
          linkText={t.notification.link_text}
        />

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
            <h2 className={styles.sectionTitle}>{t.about.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.description_html }} />
            <Link href="/about" className={styles.button}>
              {t.about.button}
            </Link>
          </div>
        </section>

        {/* --- Commitment & Menu Section --- */}
        <FeatureSection
          title={t.commitment.title}
          description={t.commitment.description}
          imageUrl="/images/interior_釜4.JPG"
          imageAlt="薪窯で一枚一枚丁寧に焼くピザ"
          buttonLabel={t.commitment.button}
          buttonLink="/menu"
        />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.pizza_highlight.title}</h2>
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
                <h3>{t.pizza_highlight.margherita_title}</h3>
                <p>{t.pizza_highlight.margherita_desc}</p>
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
                <h3>{t.pizza_highlight.formaggi_title}</h3>
                <p>{t.pizza_highlight.formaggi_desc}</p>
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
          title={t.gallery.title}
          description={t.gallery.description}
          imageUrl="/images/interior_席1.JPG"
          imageAlt="店内のテーブル席"
          buttonLabel={t.gallery.button}
          buttonLink="/gallery"
        />

        {/* --- Final CTA Section --- */}
        <section className={`${styles.section} ${styles.finalCtaSection}`}>
          <h2 className={styles.sectionTitle}>{t.final_cta.title}</h2>
          <p className={styles.sectionDescription} dangerouslySetInnerHTML={{ __html: t.final_cta.description_html }} />
          <div className={styles.finalCtaWrapper}>
            <Link href="/access" className={styles.button}>
              {t.final_cta.button_access}
            </Link>
            <Link href="/blog" className={styles.button}>
              {t.final_cta.button_blog}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
