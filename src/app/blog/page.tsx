import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "../page.module.css";

export const dynamic = "force-static";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export default function Blog() {
  const posts = getPosts();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>ブログ・お知らせ</h1>
        <ul style={{ padding: 0, listStyle: "none", maxWidth: 500 }}>
          {posts.map((post) => (
            <li
              key={post.slug}
              style={{
                marginBottom: 32,
                background: "#e6f4ea",
                borderRadius: 12,
                padding: 18,
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: "#357a38",
                }}
              >
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </div>
              <div
                style={{
                  color: "#4e944f",
                  fontSize: "0.95rem",
                  marginBottom: 6,
                }}
              >
                {post.date}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
