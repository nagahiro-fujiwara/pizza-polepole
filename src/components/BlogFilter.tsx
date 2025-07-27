'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/blog/blog.module.css';

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

      {/* ブログ投稿一覧 */}
      <div className={styles.grid}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <time className={styles.cardDate}>{new Date(post.date).toLocaleDateString('ja-JP')}</time>
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
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#666', gridColumn: '1 / -1' }}>
            {selectedTag ? `「${selectedTag}」に該当する記事はありません。` : 'ブログ記事はまだありません。'}
          </p>
        )}
      </div>
    </div>
  );
}
