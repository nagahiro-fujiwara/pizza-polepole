import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import FeatureSection from "../components/FeatureSection";
import BlogNotification from "../components/BlogNotification";
import StructuredData from "../components/StructuredData";
import RestaurantStructuredData from "../components/RestaurantStructuredData";
import FAQStructuredData from "../components/FAQStructuredData";
import OrganizationStructuredData from "../components/OrganizationStructuredData";
import { getDictionary } from "../get-dictionary";
import { getFeaturedBlogPosts } from "../utils/blog";

export const metadata = {
  title: "薪窯Pizza POLE POLE | 東広島・西条のピザ・ランチ・カフェ",
  description:
    "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
  keywords: [
    "東広島 ピザ",
    "西条 ピザ", 
    "東広島 ランチ",
    "西条 ランチ",
    "東広島 カフェ",
    "西条 カフェ",
    "薪窯ピザ 東広島",
    "ナポリピザ 西条",
    "POLE POLE",
    "ポレポレ",
    "広島県 ピザ",
    "イタリアン 東広島",
    "ピザ 西条駅",
    "地元食材 ピザ",
    "手作りピザ 広島",
    "本格ピザ 東広島",
    "ファミリーレストラン 東広島",
    "デート レストラン 西条",
    "女子会 カフェ 東広島",
    "駐車場 レストラン 西条",
    "人気 ピザ 東広島"
  ],
  openGraph: {
    title: "薪窯Pizza POLE POLE | 東広島・西条の本格ピザレストラン",
    description: "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
    images: ["/images/interior_釜.JPG"],
  },
  twitter: {
    card: "summary_large_image",
    title: "薪窯Pizza POLE POLE | 東広島・西条のピザレストラン",
    description: "広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめる「POLE POLE（ポレポレ）」。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザをどうぞ。",
    images: ["/images/interior_釜.JPG"],
  },
};

export default async function Home() {
  const dict = await getDictionary('ja');
  const t = dict.home;
  const featuredPosts = await getFeaturedBlogPosts('ja');

  return (
    <div className={`${styles.page} page-container`}>
      <StructuredData />
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/interior_景色.JPG"
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

        <BlogNotification lang="ja" posts={featuredPosts} />

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
      
      {/* レストラン構造化データ */}
      <RestaurantStructuredData 
        name="薪窯Pizza POLE POLE"
        description="広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめるレストラン。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザを提供。"
        address={{
          streetAddress: "西条町田口70-1",
          addressLocality: "東広島市",
          addressRegion: "広島県",
          postalCode: "739-0036",
          addressCountry: "JP"
        }}
        phone=""
        email=""
        url="https://pizzapolepole.com"
        openingHours={[
          "火曜日: 11:00-15:00",
          "水曜日: 11:00-15:00", 
          "木曜日: 11:00-15:00",
          "金曜日: 11:00-15:00",
          "土曜日: 11:00-15:00",
          "日曜日: 11:00-15:00"
        ]}
        priceRange="¥¥"
        cuisine={["ピザ", "イタリア料理", "カフェ"]}
        image="https://pizzapolepole.com/images/exterior_全体.JPG"
      />
      <FAQStructuredData />
      <OrganizationStructuredData />
    </div>
  );
}
