import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  lang?: string;
  featured?: boolean;
  category?: string;
}

export async function getFeaturedBlogPosts(lang: 'ja' | 'en' = 'ja'): Promise<BlogPost[]> {
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
          lang: data.lang || 'ja',
          featured: data.featured || false,
          category: data.category || 'general'
        };
      })
    );

    // Filter by language and featured status
    const filteredPosts = posts.filter(post => {
      const langMatch = lang === 'en' ? post.lang === 'en' : (post.lang === 'ja' || !post.lang);
      return langMatch && post.featured === true;
    });

    // Sort by date (newest first) and return max 3 posts
    return filteredPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  } catch (error) {
    console.error('Error reading featured blog posts:', error);
    return [];
  }
}
