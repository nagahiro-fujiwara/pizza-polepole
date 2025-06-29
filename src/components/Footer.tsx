import Link from 'next/link';
import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>薪窯Pizza POLE POLE</h3>
          <p>
            〒739-0036<br />
            広島県東広島市西条町田口70-1
          </p>
          <p>
            営業時間: 11:00 - 15:00 (L.O. 14:30)<br />
            定休日: 火曜・水曜
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>サイトマップ</h3>
          <nav className={styles.nav}>
            <Link href="/">トップ</Link>
            <Link href="/about">メッセージ</Link>
            <Link href="/menu">メニュー</Link>
            <Link href="/access">アクセス</Link>
            <Link href="/gallery">ギャラリー</Link>
            <Link href="/blog">ブログ</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
          </nav>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>SNS</h3>
          <a 
            href="https://www.instagram.com/pizza_pole_pole/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Pizza POLE POLE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
