import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';
import styles from './blog.module.css';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

async function getPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        image: matterResult.data.image,
      };
    })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ブログ</h1>
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
