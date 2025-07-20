import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';
import { getDictionary } from "../../get-dictionary";
import pageStyles from "../page.module.css";
import styles from './blog.module.css';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  lang?: string;
}

export async function generateMetadata() {
  const dict = await getDictionary('ja');

  return {
    title: dict.blog.meta.title,
    description: dict.blog.meta.description,
    keywords: dict.blog.meta.keywords,
    openGraph: {
      title: dict.blog.meta.title,
      description: dict.blog.meta.description,
      url: `https://pizzapolepole.com/blog`,
      images: [
        {
          url: "/images/Kama.jpg",
          width: 1200,
          height: 630,
          alt: dict.blog.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.blog.meta.title,
      description: dict.blog.meta.description,
      images: ["/images/Kama.jpg"],
    },
  };
}

export default async function BlogPage() {
  const dict = await getDictionary('ja');

  const getBlogPosts = async (): Promise<BlogPost[]> => {
    try {
      const postsDir = path.join(process.cwd(), 'src/app/blog/posts');
      const files = await fs.readdir(postsDir);
      const mdFiles = files.filter(file => file.endsWith('.md'));

      const posts = await Promise.all(
        mdFiles.map(async (file) => {
          const slug = file.replace('.md', '');
          const filePath = path.join(postsDir, file);
          const content = await fs.readFile(filePath, 'utf8');
          const { data } = matter(content);

          return {
            slug,
            title: data.title || 'Untitled',
            date: data.date || '2025-01-01',
            description: data.description || '',
            image: data.image,
            lang: data.lang || 'ja'
          };
        })
      );

      // Filter posts by language - defaulting to Japanese
      const filteredPosts = posts.filter(post => {
        return post.lang === 'ja' || !post.lang;
      });

      return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (error) {
      console.error('Error reading blog posts:', error);
      return [];
    }
  };

  const posts = await getBlogPosts();

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <h1 className="section-title">{dict.blog.title}</h1>
        
        <div className={styles.container}>
          <p style={{ color: '#666', fontSize: '1.1rem', textAlign: 'center', marginBottom: '3rem' }}>{dict.blog.description}</p>

          <div className={styles.grid}>
          {posts.length > 0 ? (
            posts.map((post) => (
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
                  <p className={styles.cardDescription}>{post.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#666', gridColumn: '1 / -1' }}>
              ブログ記事はまだありません。
            </p>
          )}
        </div>
        </div>
      </main>
    </div>
  );
}
