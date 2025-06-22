import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>薪窯Pizza POLEPOLE</h1>
        <p className={styles.catch}>
          ぼちぼち行こか。
          <br />
          西条・東広島のゆるふわ薪窯ピザ
        </p>
        <Image
          className={styles.hero}
          src="/images/pizza-hero.jpg"
          alt="薪窯ピザのイメージ"
          width={480}
          height={320}
          priority
        />
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
