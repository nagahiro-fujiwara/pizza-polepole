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
            <h2 className={styles.sectionTitle}>私たちのこだわり</h2>
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

        {/* --- Menu Highlight Section --- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>おすすめメニュー</h2>
          <div className={styles.highlightGrid}>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                  <Image
                    src="/images/menu2_Margherita.jpg"
                    alt="マルゲリータ"
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                  />
              </div>
              <div className={styles.cardContent}>
                <h3>マルゲリータ</h3>
                <p>王妃が愛したイタリアンクラシック</p>
              </div>
            </Link>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                  <Image
                    src="/images/menu5_Quwtrofolmadge.jpg"
                    alt="クワトロフォルマッジ"
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                  />
              </div>
              <div className={styles.cardContent}>
                <h3>クワトロフォルマッジ</h3>
                <p>4種チーズの濃厚な味わい</p>
              </div>
            </Link>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                  <Image
                    src="/images/menu3_Butabarita.jpg"
                    alt="豚バラと長ネギのピザ"
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                  />
              </div>
              <div className={styles.cardContent}>
                <h3>豚バラと長ネギのピザ</h3>
                <p>香ばしい豚バラとネギの風味</p>
              </div>
            </Link>
          </div>
          <div className={styles.sectionLink}>
            <Link href="/menu" className={styles.button}>
              全てのメニューを見る
            </Link>
          </div>
        </section>

        {/* --- Gallery Highlight Section --- */}
        <section className={`${styles.section} ${styles.gallerySection}`}>
          <h2 className={styles.sectionTitle}>ギャラリー</h2>
          <div className={styles.galleryHighlight}>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/Kama.jpg"
                alt="薪窯"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/menu1_Malinala.jpg"
                alt="マリナーラ"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/menu4_Norijapone.jpg"
                alt="海苔と大葉の和風ピザ"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/Logo.jpg"
                alt="店舗ロゴ"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
          </div>
          <div className={styles.sectionLink}>
            <Link href="/gallery" className={styles.button}>
              もっと写真を見る
            </Link>
          </div>
        </section>

        {/* --- Access Section --- */}
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>アクセス</h2>
            <div className={styles.accessContent}>
                <p>〒739-0036 広島県東広島市西条町田口70-1</p>
                <p>お車でのご来店が便利です。駐車場もご用意しております。</p>
                <div style={{marginTop: '1.5rem'}}>
                    <Link href="/access" className={styles.button}>詳しいアクセス情報</Link>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
