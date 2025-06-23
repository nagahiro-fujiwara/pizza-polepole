import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>Pizza POLEPOLE</h3>
          <p>〒123-4567 東京都渋谷区神宮前1-1-1</p>
          <p>TEL: 03-1234-5678</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>営業時間</h3>
          <p>ランチ: 11:30 - 15:00 (L.O. 14:30)</p>
          <p>ディナー: 17:30 - 22:00 (L.O. 21:30)</p>
          <p>定休日: 月曜日</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>サイトマップ</h3>
          <nav className={styles.nav}>
            <Link href="/about">店舗紹介</Link>
            <Link href="/menu">メニュー</Link>
            <Link href="/access">アクセス</Link>
            <Link href="/blog">ブログ</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
          </nav>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Pizza POLEPOLE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
