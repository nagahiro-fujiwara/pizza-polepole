import pageStyles from "../../page.module.css";
import accessStyles from "../../access/access.module.css";
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
    title: dict.access.meta.title,
    description: dict.access.meta.description,
    keywords: dict.access.meta.keywords,
    openGraph: {
      title: dict.access.meta.title,
      description: dict.access.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}access`,
      images: [
        {
          url: "/images/exterior_玄関.JPG",
          width: 1200,
          height: 630,
          alt: dict.access.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.access.meta.title,
      description: dict.access.meta.description,
      images: ["/images/exterior_玄関.JPG"],
    },
  };
}

export default async function Access({
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
            { name: lang === 'en' ? 'Access' : 'アクセス', url: `/${lang === 'en' ? 'en/' : ''}access` }
          ]}
        />
        <h1 className="section-title">{dict.access.title}</h1>
        
        <section className={accessStyles.accessSection}>
          <div className={accessStyles.accessImage}>
            <Image
              src="/images/exterior_玄関.JPG"
              alt={lang === 'en' ? "POLE POLE restaurant entrance - Welcoming entrance to the wood-fired pizza restaurant" : "薪窯Pizza POLE POLE玄関 - 薪窯ピザレストランへの温かい玄関"}
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className={accessStyles.accessContent}>
            <h2 className={accessStyles.sectionTitle}>{dict.access.heading}</h2>
            <div className={accessStyles.addressInfo}>
              <p><strong>{lang === 'en' ? 'Address:' : '住所:'}</strong></p>
              <p>{dict.access.address}</p>
              <p><strong>{lang === 'en' ? 'Business Hours:' : '営業時間:'}</strong> {dict.access.hours}</p>
            </div>
          </div>
        </section>

        <section className={accessStyles.accessSection}>
          <div className={accessStyles.accessContent}>
            <h2 className={accessStyles.sectionTitle}>{lang === 'en' ? 'Business Hours' : '営業時間'}</h2>
            <div className={accessStyles.hoursInfo}>
              <p><strong>{lang === 'en' ? 'Business Hours:' : '営業時間:'}</strong> {dict.access.hours}</p>
              <p><strong>{lang === 'en' ? 'Closed Days:' : '定休日:'}</strong> {dict.access.closed}</p>
              <p><strong>{lang === 'en' ? 'Parking:' : '駐車場:'}</strong> {dict.access.parking}{lang === 'en' ? ' spaces' : '台'}</p>
            </div>
          </div>
          <div className={accessStyles.accessImage}>
            <Image
              src="/images/OPEN.png"
              alt={lang === 'en' ? "Open sign - Restaurant is open for business" : "営業中看板 - レストランが営業中"}
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </section>

        <section className={accessStyles.accessSection}>
          <div className={accessStyles.accessImage}>
            <Image
              src="/images/exterior_全体.JPG"
              alt={lang === 'en' ? "POLE POLE restaurant exterior - Wood-fired pizza restaurant surrounded by nature" : "薪窯Pizza POLE POLE店舗外観 - 自然に囲まれた薪窯ピザレストラン"}
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className={accessStyles.accessContent}>
            <h2 className={accessStyles.sectionTitle}>{lang === 'en' ? 'Access' : 'アクセス'}</h2>
            <div className={accessStyles.transportInfo}>
              <p><strong>{lang === 'en' ? 'By Car:' : 'お車で:'}</strong></p>
              <p>{lang === 'en' ? '70-1 Taguchi, Saijo-cho, Higashihiroshima-shi, Hiroshima' : '東広島市西条町田口70-1'}</p>
              <p><strong>{lang === 'en' ? 'Parking:' : '駐車場:'}</strong> {lang === 'en' ? '5 spaces available' : '5台分'}</p>
            </div>
          </div>
        </section>

        <section className={accessStyles.ctaSection}>
          <h2 className={accessStyles.sectionTitle}>{lang === 'en' ? 'Let\'s meet at POLE POLE' : 'POLE POLEで会いましょう'}</h2>
          <p>{lang === 'en' ? 'With hot pizza baked in a wood-fired oven and a peaceful space.<br />We sincerely look forward to your visit.' : '薪窯で焼き上げるあつあつのPizzaと、やすらぎの空間をご用意して。<br />あなたのお越しを、心よりお待ちしています。'}</p>
          <div className={accessStyles.ctaButtons}>
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={accessStyles.button}>
              {lang === 'en' ? 'View Menu' : 'メニューを見る'}
            </Link>
            <Link href={`/${lang === 'en' ? 'en/' : ''}about`} className={accessStyles.button}>
              {lang === 'en' ? 'Our Story' : '私たちの想い'}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
