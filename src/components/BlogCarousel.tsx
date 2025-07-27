'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogCarousel.module.css';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  lang?: string;
  tags?: string[];
}

interface BlogCarouselProps {
  posts: BlogPost[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 画面サイズを監視
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // モバイルでは1つずつ、デスクトップでは3つずつ表示
  const itemsPerSlide = isMobile ? 1 : 3;
  const groupedPosts = [];
  for (let i = 0; i < posts.length; i += itemsPerSlide) {
    groupedPosts.push(posts.slice(i, i + itemsPerSlide));
  }

  const totalGroups = groupedPosts.length;

  // 画面サイズが変わった時にインデックスをリセット
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  // 自動スライド機能
  useEffect(() => {
    // 既存のインターバルをクリア
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (isAutoPlay && totalGroups > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % totalGroups;
          return nextIndex;
        });
      }, 4000); // 4秒ごとに切り替え
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlay, totalGroups]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
    );
    // 手動操作時は一時的に自動再生を停止
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000); // 5秒後に再開
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
    // 手動操作時は一時的に自動再生を停止
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000); // 5秒後に再開
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // 手動操作時は一時的に自動再生を停止
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000); // 5秒後に再開
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  if (posts.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>ブログ記事はまだありません。</p>
      </div>
    );
  }

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* メインカルーセル */}
      <div className={styles.carousel}>
        {/* 左ボタン */}
        {totalGroups > 1 && (
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            aria-label="前の記事へ"
          >
            &#8249;
          </button>
        )}

        {/* スライドコンテナ */}
        <div className={styles.slideContainer}>
          <div 
            className={styles.slideTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groupedPosts.map((group, groupIndex) => (
              <div key={groupIndex} className={styles.slide}>
                <div className={styles.cardsGrid}>
                  {group.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                      {post.image && (
                        <div className={styles.cardImageContainer}>
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className={styles.cardImage}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                        <time className={styles.cardDate}>
                          {new Date(post.date).toLocaleDateString('ja-JP')}
                        </time>
                        {post.tags && post.tags.length > 0 && (
                          <div className={styles.cardTags}>
                            {post.tags.map(tag => (
                              <span key={tag} className={styles.cardTag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className={styles.cardDescription}>{post.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* インジケーター（ドット） */}
          {totalGroups > 1 && (
            <div className={styles.indicators}>
              {groupedPosts.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`スライド ${index + 1} へ`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 右ボタン */}
        {totalGroups > 1 && (
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={goToNext}
            aria-label="次の記事へ"
          >
            &#8250;
          </button>
        )}
      </div>

      {/* 自動再生制御 */}
      {totalGroups > 1 && (
        <div className={styles.controls}>
          <button
            className={styles.playPauseButton}
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            aria-label={isAutoPlay ? '自動再生を停止' : '自動再生を開始'}
          >
            {isAutoPlay ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <polygon points="5,3 19,12 5,21" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
