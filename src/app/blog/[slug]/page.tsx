import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import styles from "../../page.module.css";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => ({ slug: fileName.replace(/\.md$/, "") }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>{data.title}</h1>
          <div style={{ color: "#4e944f", fontSize: "0.95rem", marginBottom: 16 }}>{data.date}</div>
          <div style={{ color: "#226c2a", whiteSpace: "pre-line", background: "#f7faf7", borderRadius: 12, padding: 18 }}>{content}</div>
        </main>
      </div>
    );
  } catch {
    return notFound();
  }
}
