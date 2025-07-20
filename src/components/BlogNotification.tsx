import React from 'react';
import Link from 'next/link';
import styles from './Notification.module.css';
import { BlogPost } from '../utils/blog';

type BlogNotificationProps = {
  posts: BlogPost[];
  lang: 'ja' | 'en';
};

const BlogNotification: React.FC<BlogNotificationProps> = ({ posts, lang }) => {
  if (posts.length === 0) return null;

  return (
    <div className={styles.notificationSection}>
      {posts.map((post) => (
        <div key={post.slug} className={styles.notification}>
          <span>{post.title}</span>
          <Link 
            href={`/${lang === 'en' ? 'en/' : ''}blog/${post.slug}`} 
            className={styles.link}
          >
            {lang === 'en' ? 'Learn More' : '詳しく見る'}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogNotification;
