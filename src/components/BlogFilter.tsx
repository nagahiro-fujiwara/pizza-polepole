'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/blog/blog.module.css';
import BlogCarousel from './BlogCarousel';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  lang?: string;
  tags?: string[];
}

interface BlogFilterProps {
  posts: BlogPost[];
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid' | 'list'>('carousel');

  // すべての投稿からタグを抽出
  const allTags = Array.from(
    new Set(
      posts.flatMap(post => post.tags || [])
    )
  ).sort();

  useEffect(() => {
    if (selectedTag) {
      setFilteredPosts(posts.filter(post => 
        post.tags && post.tags.includes(selectedTag)
      ));
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedTag, posts]);

  return (
    <div>
      {/* 表示モード切り替え */}
      <div className={styles.viewModeToggle}>
        <button
          className={`${styles.viewModeButton} ${viewMode === 'carousel' ? styles.active : ''}`}
          onClick={() => setViewMode('carousel')}
          title="カルーセル表示"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8" cy="12" r="2" fill="currentColor"/>
            <circle cx="16" cy="12" r="2" fill="currentColor"/>
          </svg>
        </button>
        <button
          className={`${styles.viewModeButton} ${viewMode === 'grid' ? styles.active : ''}`}
          onClick={() => setViewMode('grid')}
          title="グリッド表示"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
            <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button
          className={`${styles.viewModeButton} ${viewMode === 'list' ? styles.active : ''}`}
          onClick={() => setViewMode('list')}
          title="リスト表示"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2"/>
            <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2"/>
            <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2"/>
            <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* タグフィルター */}
      <div className={styles.tagFilter}>
        <button
          className={`${styles.tagButton} ${!selectedTag ? styles.active : ''}`}
          onClick={() => setSelectedTag('')}
        >
          すべて
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`${styles.tagButton} ${selectedTag === tag ? styles.active : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 表示モードに応じたコンテンツ */}
      {viewMode === 'carousel' ? (
        <BlogCarousel posts={filteredPosts} />
      ) : (
        /* グリッド・リスト表示 */
        <div className={viewMode === 'grid' ? styles.grid : styles.list}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className={viewMode === 'grid' ? styles.card : styles.listCard}
              >
                {post.image && (
                  <div className={viewMode === 'grid' ? styles.cardImageContainer : styles.listImageContainer}>
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
                <div className={viewMode === 'grid' ? styles.cardContent : styles.listContent}>
                  <h2 className={viewMode === 'grid' ? styles.cardTitle : styles.listTitle}>
                    {post.title}
                  </h2>
                  {viewMode === 'list' ? (
                    <div className={styles.listMeta}>
                      <time className={styles.listDate}>
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
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
                  <p className={viewMode === 'grid' ? styles.cardDescription : styles.listDescription}>
                    {post.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p style={{ 
              textAlign: 'center', 
              color: 'var(--text-color)', 
              gridColumn: viewMode === 'grid' ? '1 / -1' : 'unset',
              padding: '2rem'
            }}>
              {selectedTag ? `「${selectedTag}」に該当する記事はありません。` : 'ブログ記事はまだありません。'}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
