import pageStyles from "../../page.module.css";
import menuStyles from "../../menu/menu.module.css";
import Image from "next/image";
import { getDictionary } from "../../../get-dictionary";

interface MenuPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: MenuPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return {
    title: dict.menu.meta.title,
    description: dict.menu.meta.description,
    keywords: dict.menu.meta.keywords,
    openGraph: {
      title: dict.menu.meta.title,
      description: dict.menu.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}menu`,
      images: [
        {
          url: "/images/Kama.jpg",
          width: 1200,
          height: 630,
          alt: dict.menu.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.menu.meta.title,
      description: dict.menu.meta.description,
      images: ["/images/Kama.jpg"],
    },
  };
}

const menuImages = [
  { name: "マリナーラ", src: "/images/menu_マリナーラ.jpeg", alt: "マリナーラピザ" },
  { name: "マルゲリータ", src: "/images/menu_マルゲリータ.jpeg", alt: "マルゲリータピザ" },
  { name: "ブタバリータ", src: "/images/menu_ブタバリータ.jpeg", alt: "ブタバリータピザ" },
  { name: "ノリジャポーネ", src: "/images/menu_ノリジャポーネ.jpeg", alt: "ノリジャポーネピザ" },
  { name: "フォルマッジ", src: "/images/menu_フォルマッジ.jpeg", alt: "フォルマッジピザ" },
  { name: "れんこん", src: "/images/menu_れんこん.jpeg", alt: "れんこんピザ" },
  { name: "レモン", src: "/images/menu_レモン.jpeg", alt: "レモンピザ" },
];

export default async function Menu({ params }: MenuPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <h1 className="section-title">{dict.menu.title}</h1>
        <div className={menuStyles.menuContainer}>
          <div className={menuStyles.menuDescription}>
            <p>{dict.menu.description}</p>
          </div>

        <div className={menuStyles.menuGrid}>
          {dict.menu.items.map((item: { name: string; desc: string; price: string }, index: number) => {
            const imageData = menuImages.find(img => {
              if (lang === 'ja') {
                return img.name === item.name;
              } else {
                // Map English names to Japanese image names
                const nameMapping: { [key: string]: string } = {
                  'Marinara': 'マリナーラ',
                  'Margherita': 'マルゲリータ',
                  'Porcetta Varieta': 'ブタバリータ',
                  'Nori Japone': 'ノリジャポーネ',
                  'Quattro Formaggi': 'フォルマッジ',
                  'Seasonal Pizza': 'れんこん' // Use lotus root image as example for seasonal
                };
                return img.name === nameMapping[item.name];
              }
            });
            
            return (
              <div key={index} className={menuStyles.menuCard}>
                {imageData && (
                  <div className={menuStyles.imageContainer}>
                    <Image
                      src={imageData.src}
                      alt={imageData.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className={menuStyles.menuInfo}>
                  <h3 className={menuStyles.menuName}>{item.name}</h3>
                  <p className={menuStyles.menuDesc}>{item.desc}</p>
                  <span className={menuStyles.menuPrice}>{item.price}</span>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </main>
    </div>
  );
}
