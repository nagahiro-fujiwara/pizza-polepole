import pageStyles from "../page.module.css";
import accessStyles from "./access.module.css";
import Breadcrumb from "../../components/Breadcrumb";
import LocalBusinessStructuredData from "../../components/LocalBusinessStructuredData";
import { getDictionary } from "../../get-dictionary";

// Default to Japanese for static export
export async function generateMetadata() {
  const dict = await getDictionary('ja');

  return {
    title: dict.access.meta.title,
    description: dict.access.meta.description,
    keywords: dict.access.meta.keywords,
    openGraph: {
      title: dict.access.meta.title,
      description: dict.access.meta.description,
      url: `https://pizzapolepole.com/access`,
      images: [
        {
          url: "/images/Kama.jpg",
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
      images: ["/images/Kama.jpg"],
    },
  };
}

export default async function Access() {
  const dict = await getDictionary('ja');

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <Breadcrumb 
          items={[
            { name: 'ホーム', url: '/' },
            { name: 'アクセス', url: '/access' }
          ]}
        />
        <h1 className="section-title">{dict.access.title}</h1>

        <div className={accessStyles.accessContainer}>
          {/* Info and Map Section */}
          <div className={accessStyles.infoAndMapWrapper}>
            {/* Info Card */}
            <div className={accessStyles.card}>
              <h2 className={accessStyles.cardTitle}>{dict.access.heading}</h2>
              <ul className={accessStyles.infoList}>
                <li className={accessStyles.infoItem}>
                  <strong>住所</strong>
                  <span>
                    {dict.access.address}
                  </span>
                </li>
                <li className={accessStyles.infoItem}>
                  <strong>営業時間</strong>
                  <span>{dict.access.hours}</span>
                </li>
                <li className={accessStyles.infoItem}>
                  <strong>定休日</strong>
                  <span>{dict.access.closed}</span>
                </li>
                <li className={accessStyles.infoItem}>
                  <strong>駐車場</strong>
                  <span>{dict.access.parking}</span>
                </li>
              </ul>
            </div>

            {/* Map Card */}
            <div className={accessStyles.card}>
              <h2 className={accessStyles.cardTitle}>マップ</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2179.5039671157233!2d132.70018337444412!3d34.38873494673091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3550710d31cfc105%3A0x4cd18bdbeb206877!2z6Jaq56qvUElaWkEgUE9MRSBQT0xFKOODlOODg-ODhOOCoeODneODrOODneODrCk!5e1!3m2!1sja!2sjp!4v1750779198049!5m2!1sja!2sjp"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className={accessStyles.mapFrame}
              ></iframe>
              <div className={accessStyles.mapLink}>
                <a
                  href="https://www.google.com/maps/place/%E8%96%AA%E7%AA%AFPIZZA+POLE+POLE(%E3%83%94%E3%83%83%E3%83%84%E3%82%A1%E3%83%9D%E3%83%AC%E3%83%9D%E3%83%AC)/@34.3887349,132.7001834,500m/data=!3m1!1e3!4m6!3m5!1s0x3550710d31cfc105:0x4cd18bdbeb206877!8m2!3d34.3884934!4d132.7009879!16s%2Fg%2F11m6r9r_b9?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pageStyles.button}
                >
                  Googleマップで開く
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <LocalBusinessStructuredData 
        name="薪窯Pizza POLE POLE"
        description="広島県東広島市西条の自然に囲まれた一軒家で、本格的な薪窯Pizzaが楽しめるレストラン。こだわりの生地と地元の新鮮な食材を使った、焼きたての薪窯ピザを提供。"
        address={{
          streetAddress: "西条町田口70-1",
          addressLocality: "東広島市",
          addressRegion: "広島県",
          postalCode: "739-0036",
          addressCountry: "JP"
        }}
        phone="082-000-0000"
        email="info@pizzapolepole.com"
        url="https://pizzapolepole.com"
        openingHours={[
          "火曜日: 11:00-15:00",
          "水曜日: 11:00-15:00", 
          "木曜日: 11:00-15:00",
          "金曜日: 11:00-15:00",
          "土曜日: 11:00-15:00",
          "日曜日: 11:00-15:00"
        ]}
        priceRange="¥¥"
        cuisine={["ピザ", "イタリア料理", "カフェ"]}
        image="https://pizzapolepole.com/images/exterior_全体.JPG"
      />
    </div>
  );
}
