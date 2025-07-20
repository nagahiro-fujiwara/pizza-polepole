"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getClientDictionary } from '../utils/client-dictionary';
import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [dict, setDict] = useState<any>(null);
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

  // 翻訳が読み込まれていない場合はローディング
  if (!dict) {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h3 className={styles.title}>Pizza POLE POLE</h3>
          </div>
        </div>
      </footer>
    );
  }

  const linkPrefix = isEnglish ? '/en' : '';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>{dict.footer.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: dict.footer.address }} />
          <p dangerouslySetInnerHTML={{ __html: dict.footer.hours }} />
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>{dict.footer.sitemap}</h3>
          <nav className={styles.nav}>
            <Link href={linkPrefix || "/"}>{dict.footer.home}</Link>
            <Link href={`${linkPrefix}/about`}>{dict.footer.about}</Link>
            <Link href={`${linkPrefix}/menu`}>{dict.footer.menu}</Link>
            <Link href={`${linkPrefix}/access`}>{dict.footer.access}</Link>
            <Link href={`${linkPrefix}/gallery`}>{dict.footer.gallery}</Link>
            <Link href={`${linkPrefix}/blog`}>{dict.footer.blog}</Link>
            <Link href={`${linkPrefix}/privacy`}>{dict.footer.privacy}</Link>
          </nav>
        </div>
        <div className={styles.section}>
          <h3 className={styles.title}>{dict.footer.sns}</h3>
          <div className={styles.socialContainer}>
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
          {/* 言語切り替えボタン - テキストのみ */}
          <div className={styles.langContainer}>
            <Link
              href={isEnglish ? pathname.replace('/en', '') || '/' : `/en${pathname}`}
              className={styles.langSwitch}
              title={isEnglish ? '日本語に切り替え' : 'Switch to English'}
            >
              <span className={styles.langText}>
                {isEnglish ? '日本語' : 'English'}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Pizza POLE POLE. {dict.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
