import pageStyles from "../page.module.css";
import menuStyles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import { getDictionary } from "../../get-dictionary";

export async function generateMetadata() {
  const dict = await getDictionary('ja');

  return {
    title: dict.menu.meta.title,
    description: dict.menu.meta.description,
    keywords: dict.menu.meta.keywords,
    openGraph: {
      title: dict.menu.meta.title,
      description: dict.menu.meta.description,
      url: `https://pizzapolepole.com/menu`,
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

export default async function Menu() {
  const dict = await getDictionary('ja');

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <Breadcrumb 
          items={[
            { name: 'ホーム', url: '/' },
            { name: 'メニュー', url: '/menu' }
          ]}
        />
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
              img.name === item.name
            );
            
            // Check if this is the seasonal pizza item
            const isSeasonalPizza = item.name === "季節のPizza";
            
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
                  {isSeasonalPizza && (
                    <div style={{ 
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      textAlign: "center"
                    }}>
                      <Link 
                        href="/blog/2025-07-26-seasonal-august" 
                        style={{ 
                          color: "#8b4513", 
                          textDecoration: "none",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.5rem 1rem",
                          backgroundColor: "#fff",
                          border: "1px solid #8b4513",
                          borderRadius: "20px",
                          boxShadow: "0 2px 4px rgba(139, 69, 19, 0.1)"
                        }}
                      >
                        🍕 8月はこちら
                      </Link>
                    </div>
                  )}
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
