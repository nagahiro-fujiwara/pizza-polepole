import pageStyles from "../../page.module.css";
import aboutStyles from "../../about/about.module.css";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import { getDictionary } from "../../../get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'ja' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

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
          url: "/images/exterior_全体.JPG",
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
      images: ["/images/exterior_全体.JPG"],
    },
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ lang: 'ja' | 'en' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <Breadcrumb 
          items={[
            { name: lang === 'en' ? 'Home' : 'ホーム', url: `/${lang === 'en' ? 'en/' : ''}` },
            { name: lang === 'en' ? 'About' : '店舗情報', url: `/${lang === 'en' ? 'en/' : ''}about` }
          ]}
        />
        <h1 className="section-title">{dict.about.title}</h1>
        
        <section className={aboutStyles.aboutSection}>
          <div className={aboutStyles.aboutImage}>
            <Image
              src="/images/exterior_全体.JPG"
              alt={lang === 'en' ? "POLE POLE restaurant exterior - Wood-fired pizza restaurant surrounded by nature" : "薪窯Pizza POLE POLE店舗外観 - 自然に囲まれた薪窯ピザレストラン"}
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className={aboutStyles.aboutContent}>
            <h2 className={aboutStyles.sectionTitle}>{dict.about.heading}</h2>
            <p>{dict.about.content1}</p>
            <p>{dict.about.content2}</p>
            <p>{dict.about.content3}</p>
          </div>
        </section>

        <section className={aboutStyles.aboutSection}>
          <div className={aboutStyles.aboutContent}>
            <h2 className={aboutStyles.sectionTitle}>{lang === 'en' ? 'Our Philosophy' : '私たちの想い'}</h2>
            <p>{dict.about.content4}</p>
          </div>
          <div className={aboutStyles.aboutImage}>
            <Image
              src="/images/interior_釜.JPG"
              alt={lang === 'en' ? "Wood-fired oven interior - Traditional pizza baking method" : "薪窯の内部 - 伝統的なピザ焼きの手法"}
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </section>

        <section className={aboutStyles.aboutSection}>
          <div className={aboutStyles.aboutImage}>
            <Image
              src="/images/exterior_イス.JPG"
              alt={lang === 'en' ? "Outdoor seating area - Peaceful dining space surrounded by nature" : "屋外席 - 自然に囲まれた落ち着いた食事空間"}
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className={aboutStyles.aboutContent}>
            <h2 className={aboutStyles.sectionTitle}>{lang === 'en' ? 'POLE POLE Space' : 'POLE POLEの空間'}</h2>
            <p>{lang === 'en' ? 'Enjoy a relaxing time in a house surrounded by nature.' : '自然に囲まれた一軒家で、ゆったりとした時間をお過ごしいただけます。'}</p>
          </div>
        </section>

        <section className={aboutStyles.ctaSection}>
          <h2 className={aboutStyles.sectionTitle}>{lang === 'en' ? 'Let\'s meet at POLE POLE' : 'POLE POLEで会いましょう'}</h2>
          <p>{lang === 'en' ? 'With hot pizza baked in a wood-fired oven and a peaceful space.<br />We sincerely look forward to your visit.' : '薪窯で焼き上げるあつあつのPizzaと、やすらぎの空間をご用意して。<br />あなたのお越しを、心よりお待ちしています。'}</p>
          <div className={aboutStyles.ctaButtons}>
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={aboutStyles.button}>
              {lang === 'en' ? 'View Menu' : 'メニューを見る'}
            </Link>
            <Link href={`/${lang === 'en' ? 'en/' : ''}access`} className={aboutStyles.button}>
              {lang === 'en' ? 'Access' : 'アクセス'}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
