import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';
import styles from './blog.module.css';

export const metadata = {
  title: 'ブログ | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ・ランチ',
  description: '薪窯ピザPOLEPOLEの最新情報・お知らせ・季節のメニュー・イベント情報などを発信。西条・東広島でピザ・カフェ・ランチをお探しなら。',
  keywords: [
    '西条', '東広島', 'ピザ', 'ブログ', 'お知らせ', 'カフェ', 'ランチ', 'イベント', '季節限定', 'POLEPOLE', 'ポレポレ', 'pizza', 'lunch', 'cafe', 'gourmet', 'restaurant', 'blog'
  ],
  openGraph: {
    title: 'ブログ | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ・ランチ',
    description: '薪窯ピザPOLEPOLEの最新情報・お知らせ・季節のメニュー・イベント情報などを発信。西条・東広島でピザ・カフェ・ランチをお探しなら。',
    url: 'https://pizzapolepole.com/blog',
    images: [
      {
        url: '/images/Kama.jpg',
        width: 1200,
        height: 630,
        alt: '薪窯Pizza POLEPOLEの薪窯'
      }
    ],
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ブログ | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ・ランチ',
    description: '薪窯ピザPOLEPOLEの最新情報・お知らせ・季節のメニュー・イベント情報などを発信。西条・東広島でピザ・カフェ・ランチをお探しなら。',
    images: ['/images/Kama.jpg']
  }
};

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

async function getPosts(): Promise<Post[]> {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith('.md')) // Ensure only markdown files are processed
        .map(async (fileName) => {
          try {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = await fs.readFile(fullPath, 'utf8');
            const matterResult = matter(fileContents);

            // Basic validation to ensure essential data exists
            if (!matterResult.data.title || !matterResult.data.date || !matterResult.data.image) {
              console.warn(`Skipping post ${fileName} due to missing frontmatter.`);
              return null;
            }

            return {
              slug,
              title: matterResult.data.title,
              date: matterResult.data.date,
              description: matterResult.data.description || '', // Provide a fallback
              image: matterResult.data.image,
            };
          } catch (error) {
            console.error(`Error processing post ${fileName}:`, error);
            return null; // Return null if a specific post fails
          }
        })
    );

    // Filter out any null results from failed processing and sort
    const validPosts = allPostsData.filter((post): post is Post => post !== null);
    return validPosts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  } catch (error) {
    console.error("Could not read posts directory:", error);
    return []; // Return an empty array on failure
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={`${styles.container} page-container`}>
      <h1 className="section-title">ブログ</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
            <div className={styles.cardImageContainer}>
                <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className={styles.cardImage}
                />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardDate}>{post.date}</p>
              <p className={styles.cardDescription}>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
