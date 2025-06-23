import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>薪窯Pizza POLEPOLEへようこそ</h1>
        <p className={styles.catch}>
          ゆるふわ・和モダン・カフェ風の癒し空間で
          <br />
          本格ナポリピザと地元食材をお楽しみください。
        </p>
        <div className={styles.heroImgWrapper}>
          <Image
            src="/images/Kama.jpg"
            alt="薪窯"
            width={400}
            height={260}
            className={styles.heroImg}
            priority
          />
        </div>
        <div
          className={styles.section}
          style={{ background: "#e6f4ea", color: "#357a38" }}
        >
          <h2 style={{ fontSize: "1.3rem", marginBottom: 8 }}>ギャラリー</h2>
          <p style={{ marginBottom: 16 }}>
            お店やピザの雰囲気を写真でご覧ください。
          </p>
          <div className={styles.galleryGrid}>
            {[
              "/images/menu1_Malinala.jpg",
              "/images/menu2_Margherita.jpg",
              "/images/menu3_Butabarita.jpg",
              "/images/menu4_Norijapone.jpg",
              "/images/menu5_Quwtrofolmadge.jpg",
              "/images/menu6_Seasonal.jpg",
            ].map((src, i) => (
              <div className={styles.galleryCard} key={src}>
                <Image
                  src={src}
                  alt={`ギャラリー画像${i + 1}`}
                  width={180}
                  height={120}
                  className={styles.galleryImg}
                />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <Link
              href="/gallery"
              className={styles.privacyLink}
              style={{
                color: "#357a38",
                fontWeight: 600,
              }}
            >
              もっと見る
            </Link>
          </div>
        </div>
        <div className={styles.instaBanner}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/insta-banner.png"
              alt="Instagram"
              width={32}
              height={32}
            />
            <span>Instagramで最新情報を見る</span>
          </a>
        </div>
        <nav className={styles.topNav}>
          <a href="/about">店舗紹介</a>
          <a href="/menu">メニュー</a>
          <a href="/access">アクセス</a>
          <Link href="/blog">ブログ</Link>
        </nav>
      </main>
    </div>
  );
}
