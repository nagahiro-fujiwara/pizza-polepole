import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from './post.module.css'; // Import the new CSS module
import { getPostBySlug, getAllPosts } from "../../lib/api";
import BackToTopButton from "../../../components/BackToTopButton";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

// Type definitions
type PostData = {
  title: string;
  date: string;
  image: string;
  description: string;
  contentHtml: string;
};

// Generate dynamic metadata
export async function generateMetadata({ params: paramsPromise }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await paramsPromise;
  const postData = await getPostData(params.slug);
  if (!postData) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: postData.title,
    description: postData.description,
  };
}

// Generate static paths
export async function generateStaticParams() {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

// Parse Markdown file and get post data
async function getPostData(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      image: matterResult.data.image,
      description: matterResult.data.description,
      contentHtml,
    };
  } catch {
    return null;
  }
}

// Page component
export default async function Post({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = await paramsPromise;
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <div className={`page-container`}>
      <div className={styles.postContainer}>
        {postData.image && (
          <div className={styles.backgroundImageContainer}>
            <Image
              src={postData.image}
              alt={postData.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className={styles.overlay}></div>
          </div>
        )}
        <main className={styles.content}>
          <article>
            <h1 className={styles.title}>{postData.title}</h1>
            <p className={styles.date}>{postData.date}</p>
            <div 
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
            />
          </article>
          <Link href="/blog" className={styles.backButton}>
            ブログ一覧へ戻る
          </Link>
        </main>
      </div>
      <BackToTopButton />
    </div>
  );
}
