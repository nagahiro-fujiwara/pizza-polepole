"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; // Create this CSS module

const Header: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/Logo1.png" alt="Pizza PolePole Logo" width={160} height={40} priority />
        </Link>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/about">店舗紹介</Link>
          <Link href="/menu">メニュー</Link>
          <Link href="/access">アクセス</Link>
          <Link href="/blog">ブログ</Link>
          <a
            href="https://www.instagram.com/pizza_pole_pole/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
