import pageStyles from "../../page.module.css";
import galleryStyles from "../../gallery/gallery.module.css";
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
    title: dict.gallery.meta.title,
    description: dict.gallery.meta.description,
    keywords: dict.gallery.meta.keywords,
    openGraph: {
      title: dict.gallery.meta.title,
      description: dict.gallery.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}gallery`,
      images: [
        {
          url: "/images/interior_景色.JPG",
          width: 1200,
          height: 630,
          alt: dict.gallery.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.gallery.meta.title,
      description: dict.gallery.meta.description,
      images: ["/images/interior_景色.JPG"],
    },
  };
}

const galleryImages = [
  {
    src: "/images/interior_景色.JPG",
    alt: "Interior view from POLE POLE restaurant",
    altJa: "薪窯Pizza POLE POLEの店内から見た景色"
  },
  {
    src: "/images/interior_釜.JPG",
    alt: "Wood-fired oven interior",
    altJa: "薪窯の内部"
  },
  {
    src: "/images/interior_席1.JPG",
    alt: "Indoor dining tables",
    altJa: "店内のテーブル席"
  },
  {
    src: "/images/exterior_全体.JPG",
    alt: "POLE POLE restaurant exterior",
    altJa: "薪窯Pizza POLE POLE店舗外観"
  },
  {
    src: "/images/exterior_イス.JPG",
    alt: "Outdoor seating area",
    altJa: "屋外席"
  },
  {
    src: "/images/menu_マルゲリータ.jpeg",
    alt: "Authentic Margherita pizza",
    altJa: "本格マルゲリータピザ"
  },
  {
    src: "/images/menu_フォルマッジ.jpeg",
    alt: "Four-cheese Quattro Formaggi pizza",
    altJa: "4種チーズのクワトロフォルマッジピザ"
  },
  {
    src: "/images/menu_マリナーラ.jpeg",
    alt: "Marinara pizza",
    altJa: "マリナーラピザ"
  }
];

export default async function Gallery({
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
            { name: lang === 'en' ? 'Gallery' : 'ギャラリー', url: `/${lang === 'en' ? 'en/' : ''}gallery` }
          ]}
        />
        <h1 className="section-title">{dict.gallery.title}</h1>
        
        <section className={galleryStyles.gallerySection}>
          <p className={galleryStyles.galleryDescription}>
            {dict.gallery.heading}
          </p>
          
          <div className={galleryStyles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div key={index} className={galleryStyles.galleryItem}>
                <Image
                  src={image.src}
                  alt={lang === 'en' ? image.alt : image.altJa}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  className={galleryStyles.galleryImage}
                />
              </div>
            ))}
          </div>
        </section>

        <section className={galleryStyles.ctaSection}>
          <h2 className={galleryStyles.sectionTitle}>{lang === 'en' ? 'Let\'s meet at POLE POLE' : 'POLE POLEで会いましょう'}</h2>
          <p>{lang === 'en' ? 'With hot pizza baked in a wood-fired oven and a peaceful space.<br />We sincerely look forward to your visit.' : '薪窯で焼き上げるあつあつのPizzaと、やすらぎの空間をご用意して。<br />あなたのお越しを、心よりお待ちしています。'}</p>
          <div className={galleryStyles.ctaButtons}>
            <Link href={`/${lang === 'en' ? 'en/' : ''}menu`} className={galleryStyles.button}>
              {lang === 'en' ? 'View Menu' : 'メニューを見る'}
            </Link>
            <Link href={`/${lang === 'en' ? 'en/' : ''}access`} className={galleryStyles.button}>
              {lang === 'en' ? 'Access' : 'アクセス'}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
