import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/Kama.jpg"
              alt="薪窯"
              layout="fill"
              objectFit="cover"
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>薪窯Pizza POLEPOLE</h1>
            <p className={styles.catch}>
              本格ナポリピザと地元食材を、心温まる空間で。
            </p>
            <Link href="/menu" className={styles.button}>
              メニューを見る
            </Link>
          </div>
        </section>

        {/* --- About Section --- */}
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.aboutContent}>
            <h2>私たちのこだわり</h2>
            <p>
              POLEPOLEでは、イタリア直輸入の小麦粉と新鮮な地元野菜を使い、一枚一枚丁寧に焼き上げています。薪窯で焼き上げることで生まれる、外はカリッと、中はもちもちの食感をお楽しみください。
            </p>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/images/menu2_Margherita.jpg"
              alt="マルゲリータ"
              width={400}
              height={300}
              objectFit="cover"
            />
          </div>
        </section>

        {/* --- Gallery Section --- */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>ギャラリー</h2>
          <div className={styles.galleryGrid}>
            {[
              "/images/menu1_Malinala.jpg",
              "/images/menu3_Butabarita.jpg",
              "/images/menu4_Norijapone.jpg",
              "/images/menu5_Quwtrofolmadge.jpg",
            ].map((src, i) => (
              <div className={styles.galleryCard} key={src}>
                <Image
                  src={src}
                  alt={`ギャラリー画像${i + 1}`}
                  width={250}
                  height={180}
                  className={styles.galleryImg}
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/gallery" className={styles.button}>
              もっと見る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
