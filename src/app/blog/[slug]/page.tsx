import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

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
    <article className="prose lg:prose-xl mx-auto p-4 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
      <p className="text-gray-500 mb-4">{postData.date}</p>
      {postData.image && (
        <div className="relative w-full h-96 mb-4">
            <Image
                src={postData.image}
                alt={postData.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
