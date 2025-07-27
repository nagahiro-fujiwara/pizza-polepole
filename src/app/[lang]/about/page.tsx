import Image from "next/image";
import { getDictionary } from "../../../get-dictionary";
import pageStyles from "../../page.module.css";
import aboutStyles from "../../about/about.module.css";

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
    keywords: dict.about.meta.keywords,
    openGraph: {
      title: dict.about.meta.title,
      description: dict.about.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}about`,
      images: [
        {
          url: "/images/Kama.jpg",
          width: 1200,
          height: 630,
          alt: dict.about.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.about.meta.title,
      description: dict.about.meta.description,
      images: ["/images/Kama.jpg"],
    },
  };
}

export default async function About({ params }: AboutPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');
  
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <section className={aboutStyles.philosophySection}>
          <div className={aboutStyles.backgroundImage}>
            <Image
              src="/images/exterior_イス2.JPG"
              alt="薪窯Pizza POLE POLE店外の石のベンチ - 東広島西条の自然に囲まれた憩いの空間"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={aboutStyles.overlay}></div>
          <div className={aboutStyles.content}>
            <h1 className={aboutStyles.title}>{dict.about.title}</h1>
            <p className={aboutStyles.subtitle}>{dict.about.heading}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
