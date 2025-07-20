"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getClientDictionary } from '../utils/client-dictionary';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dict, setDict] = useState<{
    header: {
      about: string;
      menu: string;
      access: string;
      gallery: string;
      blog: string;
      instagram: string;
    };
  } | null>(null);
  const pathname = usePathname();

  // URLから言語を判定
  const isEnglish = pathname.startsWith('/en');
  const lang = isEnglish ? 'en' : 'ja';

  useEffect(() => {
    const loadDict = async () => {
      const dictionary = await getClientDictionary(lang as 'ja' | 'en');
      setDict(dictionary);
    };
    loadDict();
  }, [lang]);

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

  // 翻訳が読み込まれていない場合はローディング
  if (!dict) {
    return (
      <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles.container}>
          <Link href={isEnglish ? "/en" : "/"} className={styles.logo}>
            <Image src="/images/Logo1.png" alt="Pizza PolePole Logo" width={160} height={40} priority />
          </Link>
          <nav className={styles.nav}>
            <span>Loading...</span>
          </nav>
        </div>
      </header>
    );
  }

  const linkPrefix = isEnglish ? '/en' : '';

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <Link href={linkPrefix || "/"} className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Image src="/images/Logo1.png" alt="Pizza PolePole Logo" width={160} height={40} priority />
        </Link>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href={`${linkPrefix}/about`} onClick={() => setMenuOpen(false)}>
            {dict.header.about}
          </Link>
          <Link href={`${linkPrefix}/menu`} onClick={() => setMenuOpen(false)}>
            {dict.header.menu}
          </Link>
          <Link href={`${linkPrefix}/access`} onClick={() => setMenuOpen(false)}>
            {dict.header.access}
          </Link>
          <Link href={`${linkPrefix}/gallery`} onClick={() => setMenuOpen(false)}>
            {dict.header.gallery}
          </Link>
          <Link href={`${linkPrefix}/blog`} onClick={() => setMenuOpen(false)}>
            {dict.header.blog}
          </Link>
          <a
            href="https://www.instagram.com/pizza_pole_pole/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            {dict.header.instagram}
          </a>
          {/* 言語切り替えボタン - テキストのみ */}
          <Link 
            href={isEnglish ? pathname.replace('/en', '') || '/' : `/en${pathname}`}
            onClick={() => setMenuOpen(false)}
            className={styles.langSwitch}
            title={isEnglish ? '日本語に切り替え' : 'Switch to English'}
          >
            <span className={styles.langText}>
              {isEnglish ? '日本語' : 'English'}
            </span>
          </Link>
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
