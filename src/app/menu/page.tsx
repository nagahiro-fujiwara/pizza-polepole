import pageStyles from "../page.module.css";
import menuStyles from "./menu.module.css";
import Image from "next/image";
import { getDictionary } from "../../get-dictionary";

interface MenuPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ searchParams }: MenuPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as 'ja' | 'en') || 'ja';
  const dict = await getDictionary(lang);

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
  {
    name: "マリナーラ",
    img: "/images/menu_マリナーラ.jpeg",
  },
  {
    name: "マルゲリータ",
    img: "/images/menu_マルゲリータ.jpeg",
  },
  {
    name: "ブタバリータ",
    img: "/images/menu_ブタバリータ.jpeg",
  },
  {
    name: "ノリジャポーネ",
    img: "/images/menu_ノリジャポーネ.jpeg",
  },
  {
    name: "クワトロフォルマッジ",
    img: "/images/menu_フォルマッジ.jpeg",
  },
  {
    name: "季節のPizza",
    img: "/images/menu_れんこん.jpeg",
  },
];

export default async function Menu({ searchParams }: MenuPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as 'ja' | 'en') || 'ja';
  const dict = await getDictionary(lang);

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <h1 className="section-title">{dict.menu.title}</h1>
        <div className={menuStyles.menuGrid} style={{ marginBottom: "2rem" }}>
          <div className={menuStyles.menuImageWrapper}>
            <Image
              src="/images/menu1.png"
              alt="メニュー表1"
              width={800}
              height={1132}
            />
          </div>
          <div className={menuStyles.menuImageWrapper}>
            <Image
              src="/images/menu2.png"
              alt="メニュー表2"
              width={800}
              height={1132}
            />
          </div>
        </div>
        <h2 className="section-title">{dict.menu.ingredients}</h2>
        <div className={menuStyles.menuGrid} style={{ marginBottom: "2rem" }}>
          <div className={menuStyles.menuImageWrapper}>
            <Image
              src="/images/menu_こだわり.png"
              alt="こだわり1"
              width={320}
              height={220}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
          <div className={menuStyles.menuImageWrapper}>
            <Image
              src="/images/menu_こだわり2.png"
              alt="こだわり2"
              width={320}
              height={220}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
        <h2 className="section-title">{dict.menu.pizza}</h2>
        <div className={menuStyles.menuGrid}>
          {dict.menu.items.map((item: { name: string; desc: string; price: string }, index: number) => {
            const imageData = menuImages.find(img => 
              (lang === 'ja' && img.name === item.name) ||
              (lang === 'en' && (
                (item.name === 'Marinara' && img.name === 'マリナーラ') ||
                (item.name === 'Margherita' && img.name === 'マルゲリータ') ||
                (item.name === 'Porcetta Varieta' && img.name === 'ブタバリータ') ||
                (item.name === 'Nori Japone' && img.name === 'ノリジャポーネ') ||
                (item.name === 'Quattro Formaggi' && img.name === 'クワトロフォルマッジ') ||
                (item.name === 'Seasonal Pizza' && img.name === '季節のPizza')
              ))
            );
            
            return (
              <div key={index} className={menuStyles.menuCard}>
                <div className={menuStyles.menuImageContainer}>
                  <Image
                    src={imageData?.img || "/images/menu_れんこん.jpeg"}
                    alt={item.name}
                    width={400}
                    height={300}
                    className={menuStyles.menuImg}
                  />
                </div>
                <div className={menuStyles.menuContent}>
                  <h2 className={menuStyles.menuName}>{item.name}</h2>
                  <p className={menuStyles.menuDesc}>
                    {item.desc.split("\n\n").map((para: string, i: number) => (
                      <span key={i}>
                        {para.split("\n").join(" ")}
                        <br />
                      </span>
                    ))}
                  </p>
                  <div className={menuStyles.menuPrice}>{item.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
