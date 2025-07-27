import Image from "next/image";
import { getDictionary } from "../../get-dictionary";
import pageStyles from "../page.module.css";
import aboutStyles from "./about.module.css";
import Breadcrumb from "../../components/Breadcrumb";

export async function generateMetadata() {
  const dict = await getDictionary('ja');

  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
    keywords: dict.about.meta.keywords,
    openGraph: {
      title: dict.about.meta.title,
      description: dict.about.meta.description,
      url: `https://pizzapolepole.com/about`,
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

export default async function About() {
  const dict = await getDictionary('ja');
  
  return (
    <div className={`${pageStyles.page} page-container`}>
      <Breadcrumb 
        items={[
          { name: 'ホーム', url: '/' },
          { name: 'ポレポレについて', url: '/about' }
        ]}
      />
      <main className={pageStyles.main}>
        <section className={aboutStyles.philosophySection}>
          <div className={aboutStyles.backgroundImage}>
            <Image
              src="/images/exterior_イス2.JPG"
              alt="店外の椅子と緑"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className={aboutStyles.overlay}></div>
          <div className={aboutStyles.philosophyContent}>
            <h2 dangerouslySetInnerHTML={{ __html: dict.about.heading.replace(/\n/g, '<br />') }}></h2>
            <p dangerouslySetInnerHTML={{ __html: dict.about.content1.replace(/\n/g, '<br />') }}></p>
            <p dangerouslySetInnerHTML={{ __html: dict.about.content2.replace(/\n/g, '<br />') }}></p>
            <p dangerouslySetInnerHTML={{ __html: dict.about.content3.replace(/\n/g, '<br />') }}></p>
            <p dangerouslySetInnerHTML={{ __html: dict.about.content4.replace(/\n/g, '<br />') }}></p>
          </div>
        </section>
      </main>
    </div>
  );
}
