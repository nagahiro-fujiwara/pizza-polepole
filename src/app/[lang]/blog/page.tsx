import pageStyles from "../../page.module.css";
import blogStyles from "../../blog/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import { getDictionary } from "../../../get-dictionary";
import { getFeaturedBlogPosts } from "../../../utils/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'ja' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

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
          url: "/images/interior_景色.JPG",
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
      images: ["/images/interior_景色.JPG"],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ lang: 'ja' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const featuredPosts = await getFeaturedBlogPosts(lang);

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <Breadcrumb 
          items={[
            { name: lang === 'en' ? 'Home' : 'ホーム', url: `/${lang === 'en' ? 'en/' : ''}` },
            { name: lang === 'en' ? 'Blog' : 'ブログ', url: `/${lang === 'en' ? 'en/' : ''}blog` }
          ]}
        />
        <h1 className="section-title">{dict.blog.title}</h1>
        
        <section className={blogStyles.blogSection}>
          <p className={blogStyles.blogDescription}>
            {dict.blog.heading}
          </p>
          
          {featuredPosts.length > 0 && (
            <div className={blogStyles.featuredSection}>
                             <h2 className={blogStyles.sectionTitle}>{lang === 'en' ? 'Latest Posts' : '最新の投稿'}</h2>
              <div className={blogStyles.featuredGrid}>
                {featuredPosts.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/${lang === 'en' ? 'en/' : ''}blog/${post.slug}`} 
                    className={blogStyles.featuredCard}
                  >
                    <div className={blogStyles.imageContainer}>
                      <Image
                        src={post.image || "/images/interior_景色.JPG"}
                        alt={post.title}
                        width={400}
                        height={300}
                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        className={blogStyles.featuredImage}
                      />
                    </div>
                    <div className={blogStyles.cardContent}>
                      <h3 className={blogStyles.postTitle}>{post.title}</h3>
                      <p className={blogStyles.postDate}>{post.date}</p>
                      <p className={blogStyles.postDescription}>{post.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className={blogStyles.ctaSection}>
          <h2 className={blogStyles.sectionTitle}>{lang === 'en' ? 'Let\'s meet at POLE POLE' : 'POLE POLEで会いましょう'}</h2>
          <p>{lang === 'en' ? 'With hot pizza baked in a wood-fired oven and a peaceful space.<br />We sincerely look forward to your visit.' : '薪窯で焼き上げるあつあつのPizzaと、やすらぎの空間をご用意して。<br />あなたのお越しを、心よりお待ちしています。'}</p>
          <div className={blogStyles.ctaButtons}>
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={blogStyles.button}>
              {lang === 'en' ? 'View Menu' : 'メニューを見る'}
            </Link>
            <Link href={`/${lang === 'en' ? 'en/' : ''}about`} className={blogStyles.button}>
              {lang === 'en' ? 'Our Story' : '私たちの想い'}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
