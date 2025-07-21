import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';
import { getDictionary } from "../../../get-dictionary";
import pageStyles from "../../page.module.css";
import styles from '../../blog/blog.module.css';

interface BlogPageProps {
  params: Promise<{ lang: string }>;
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  lang?: string;
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return {
    title: dict.blog.meta.title,
    description: dict.blog.meta.description,
    keywords: dict.blog.meta.keywords,
    openGraph: {
      title: dict.blog.meta.title,
      description: dict.blog.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}blog`,
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

export default async function BlogPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  const getBlogPosts = async (): Promise<BlogPost[]> => {
    try {
      const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
      const filenames = await fs.readdir(postsDirectory);
      
      const posts = await Promise.all(
        filenames
          .filter(name => name.endsWith('.md'))
          .map(async (name) => {
            const filePath = path.join(postsDirectory, name);
            const fileContents = await fs.readFile(filePath, 'utf8');
            const { data } = matter(fileContents);
            
            return {
              slug: name.replace(/\.md$/, ''),
              title: data.title,
              date: data.date,
              description: data.description,
              image: data.image,
              lang: data.lang || 'ja'
            };
          })
        );

        // Filter posts by language
        const filteredPosts = posts.filter(post => {
          if (lang === 'en') {
            return post.lang === 'en';
          } else {
            return post.lang === 'ja' || !post.lang;
          }
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
        <div className={styles.blogContainer}>
        <div className={styles.postsGrid}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link 
                href={`/${lang === 'en' ? 'en/' : ''}blog/${post.slug}`} 
                key={post.slug} 
                className={styles.postCard}
              >
                {post.image && (
                  <div className={styles.cardImage}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <time className={styles.cardDate}>{new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'ja-JP')}</time>
                  <p className={styles.cardDescription}>{post.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#666', gridColumn: '1 / -1' }}>
              {lang === 'en' ? 'No blog posts available.' : 'ブログ記事はまだありません。'}
            </p>
          )}
        </div>
        </div>
      </main>
    </div>
  );
}
