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
  params,
}: {
  params: Promise<{ lang: 'ja' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <div className={`${styles.page} page-container`}>
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/interior_景色.JPG"
              alt={lang === 'en' ? "Interior view from POLE POLE restaurant" : "薪窯Pizza POLE POLEの店内から見た景色"}
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
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={styles.button}>
              {t.hero.button}
            </Link>
          </div>
        </section>

        <Notification 
          message={t.notification.temp_closure}
          link={`/${lang === 'en' ? 'en/' : ''}blog/2025-08-23-september-holiday${lang === 'en' ? '-en' : ''}`}
          linkText={t.notification.link_text}
        />
        <Notification 
          message={t.notification.summer_holiday}
          link={`/${lang === 'en' ? 'en/' : ''}blog/2025-08-23-september-holiday${lang === 'en' ? '-en' : ''}`}
          linkText={t.notification.link_text}
        />

        {/* --- About Section --- */}
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/exterior_イス.JPG"
              alt={lang === 'en' ? "Outdoor bench at POLE POLE - peaceful space surrounded by nature in Saijo, Higashihiroshima" : "薪窯Pizza POLE POLE店外のベンチ - 東広島西条の自然に囲まれた憩いの空間"}
              width={500}
              height={375}
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>{t.about.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.about.description_html }} />
            <Link href={`/${lang === 'en' ? 'en/' : ''}about`} className={styles.button}>
              {t.about.button}
            </Link>
          </div>
        </section>

        {/* --- Commitment & Menu Section --- */}
        <FeatureSection
          title={t.commitment.title}
          description={t.commitment.description}
          imageUrl="/images/interior_釜4.JPG"
          imageAlt={lang === 'en' ? "Pizza carefully baked one by one in wood-fired oven" : "薪窯で一枚一枚丁寧に焼くピザ"}
          buttonLabel={t.commitment.button}
          buttonLink={`/${lang === 'en' ? 'en/' : ''}menu`}
        />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.pizza_highlight.title}</h2>
          <div className={styles.highlightGrid}>
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu_マルゲリータ.jpeg"
                  alt={lang === 'en' ? "Authentic Margherita pizza baked in wood-fired oven - Mozzarella cheese and basil aroma" : "薪窯で焼いた本格マルゲリータピザ - モッツァレラチーズとバジルの香り"}
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
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu_フォルマッジ.jpeg"
                  alt={lang === 'en' ? "Four-cheese Quattro Formaggi pizza from wood-fired oven - Rich cheese flavor" : "4種チーズの薪窯クワトロフォルマッジピザ - 濃厚チーズの味わい"}
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
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                <Image
                  src="/images/menu_マリナーラ.jpeg"
                  alt={lang === 'en' ? "Marinara pizza from wood-fired oven - Tomato sauce and garlic flavor" : "薪窯焼きマリナーラピザ - トマトソースとガーリックの風味"}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.img}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{lang === 'en' ? 'Marinara' : 'マリナーラ'}</h3>
                <p>{lang === 'en' ? 'Simple pizza with tomato, garlic, and oregano' : 'トマト・にんにく・オレガノのシンプルなピザ'}</p>
              </div>
            </Link>
          </div>
        </section>

        {/* --- Gallery Section --- */}
        <FeatureSection
          title={t.gallery.title}
          description={t.gallery.description}
          imageUrl="/images/interior_席1.JPG"
          imageAlt={lang === 'en' ? "Indoor dining tables" : "店内のテーブル席"}
          buttonLabel={t.gallery.button}
          buttonLink={`/${lang === 'en' ? 'en/' : ''}gallery`}
        />

        {/* --- Final CTA Section --- */}
        <section className={`${styles.section} ${styles.finalCtaSection}`}>
          <h2 className={styles.sectionTitle}>{t.final_cta.title}</h2>
          <p className={styles.sectionDescription} dangerouslySetInnerHTML={{ __html: t.final_cta.description_html }} />
          <div className={styles.finalCtaWrapper}>
            <Link href={`/${lang === 'en' ? 'en/' : ''}access`} className={styles.button}>
              {t.final_cta.button_access}
            </Link>
            <Link href={`/${lang === 'en' ? 'en/' : ''}blog`} className={styles.button}>
              {t.final_cta.button_blog}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
