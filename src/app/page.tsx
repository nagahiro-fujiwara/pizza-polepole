import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`${styles.page} page-container`}>
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/interior_景色.JPG"
              alt="店内からの景色"
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
              ゆっくり、ぼちぼち、やすらぎの場で味わう薪窯ピザ。
            </p>
            <Link href="/menu" className={styles.button}>
              メニューを見る
            </Link>
          </div>
        </section>

        {/* --- About Section --- */}
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>やすらぎの場所</h2>
            <p>
              POLEPOLEは、スワヒリ語で「ゆっくり、ゆっくり」という意味。<br />
              忙しい日常を忘れ、薪の爆ぜる音を聞きながら、<br />
              心豊かなひとときをお過ごしください。
            </p>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/images/exterior_イス.JPG"
              alt="店外の椅子"
              width={400}
              height={300}
              objectFit="cover"
            />
          </div>
        </section>

        {/* --- Menu Highlight Section --- */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>自慢の薪窯ピザ</h2>
          <div className={styles.highlightGrid}>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                  <Image
                    src="/images/menu_マルゲリータ.jpeg"
                    alt="マルゲリータ"
                    layout="fill"
                    objectFit="cover"
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
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                  />
              </div>
              <div className={styles.cardContent}>
                <h3>クワトロフォルマッジ</h3>
                <p>はちみつと楽しむ4種のチーズ</p>
              </div>
            </Link>
            <Link href="/menu/" className={styles.highlightCard}>
              <div className={styles.imgContainer}>
                  <Image
                    src="/images/menu_マリナーラ.jpeg"
                    alt="マリナーラ"
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                  />
              </div>
              <div className={styles.cardContent}>
                <h3>マリナーラ</h3>
                <p>トマト・にんにく・オレガノのシンプルなピザ</p>
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
                src="/images/interior_席1.JPG"
                alt="店内の様子"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/interior_釜2.JPG"
                alt="薪窯"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/interior_花.JPG"
                alt="店内の花"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/menu_マルゲリータ.jpeg"
                alt="マルゲリータ"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/menu_フォルマッジ.jpeg"
                alt="クワトロフォルマッジ"
                layout="fill"
                className={styles.galleryImage}
              />
            </Link>
            <Link href="/gallery" className={styles.galleryImageWrapper}>
              <Image
                src="/images/interior_びん.JPG"
                alt="店内の瓶と光"
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
                <div style={{width: '100%', maxWidth: 500, margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)'}}>
                  <Image
                    src="/images/exterior_玄関.JPG"
                    alt="店舗外観"
                    width={500}
                    height={300}
                    style={{objectFit: 'cover', width: '100%', height: 'auto', display: 'block'}}
                    priority
                  />
                </div>
                <div style={{width: '100%', maxWidth: 500, margin: '0 auto 2rem auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)'}}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.823979139282!2d132.7694025762358!3d34.4571899969439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9e1e05f43943%3A0x5c26c28a5a73e5d!2s70-1%20Taguchi%2C%20Saij%C5%8Dch%C5%8D%2C%20Higashihiroshima%2C%20Hiroshima%20739-0036%2C%20Japan!5e0!3m2!1sen!2sus!4v1716886621772!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{border:0, borderRadius:'12px', display:'block'}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
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
