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
            <div className={styles.accessRow}>
                <div className={styles.accessInfoBlock}>
                  <p className={styles.accessAddress}>〒739-0036<br/>広島県東広島市西条町田口70-1</p>
                  <p className={styles.accessDetail}>営業時間：11:00-15:00 (L.O. 14:30)<br/>定休日：火曜日・水曜日<br/>駐車場：5台</p>
                  <p className={styles.accessNote}>お車でのご来店が便利です。駐車場もご用意しております。</p>
                  <div style={{marginTop: '1.5rem'}}>
                    <Link href="/access" className={styles.button}>詳しいアクセス情報</Link>
                  </div>
                  <div style={{marginTop: '1rem'}}>
                    <a
                      href="https://www.google.com/maps/place/%E8%96%AA%E7%AA%AFPIZZA+POLE+POLE(%E3%83%94%E3%83%83%E3%83%84%E3%82%A1%E3%83%9D%E3%83%AC%E3%83%9D%E3%83%AC)/@34.3887349,132.7001834,500m/data=!3m1!1e3!4m6!3m5!1s0x3550710d31cfc105:0x4cd18bdbeb206877!8m2!3d34.3884934!4d132.7009879!16s%2Fg%2F11m6r9r_b9?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.button}
                    >
                      Googleマップで開く
                    </a>
                  </div>
                </div>
                <div className={styles.accessMapBlock}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.5039671157233!2d132.70018337444412!3d34.38873494673091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3550710d31cfc105%3A0x4cd18bdbeb206877!2z6Jaq56qvUElaWkEgUE9MRSBQT0xFKOODlOODg-ODhOOCoeODneODrOODneODrCk!5e1!3m2!1sja!2sjp!4v1750779198049!5m2!1sja!2sjp"
                    width="100%"
                    height="300"
                    style={{border:0, borderRadius:'12px', display:'block'}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
