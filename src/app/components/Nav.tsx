import Link from "next/link";
import styles from "./Nav.module.css";
import { FaInstagram } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" className={styles.siteName}>
          薪窯Pizza POLEPOLE
        </Link>
      </div>
      <ul className={styles.links}>
        <li><Link href="/about">店舗紹介</Link></li>
        <li><Link href="/menu">メニュー</Link></li>
        <li><Link href="/access">アクセス</Link></li>
        <li><Link href="/blog">ブログ</Link></li>
        <li>
          <a href="https://www.instagram.com/pizza_pole_pole/" target="_blank" rel="noopener noreferrer" className={styles.insta}>
            <FaInstagram size={22} />
            <span className={styles.instaText}>Instagram</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
