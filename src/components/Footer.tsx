import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>薪窯Pizza POLEPOLE</h3>
          <p>〒739-0036<br />広島県東広島市西条町田口70-1</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>営業時間</h3>
          <p>11:00 - 15:00 (L.O. 14:30)</p>
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
