import pageStyles from "../page.module.css";
import accessStyles from "./access.module.css";

export const metadata = {
  title: "アクセス | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ・ランチ",
  description:
    "薪窯ピザPOLEPOLEへのアクセス方法・地図・駐車場案内。西条・東広島でピザ・カフェ・ランチをお探しなら。",
  keywords: [
    "西条",
    "東広島",
    "ピザ",
    "アクセス",
    "カフェ",
    "ランチ",
    "駐車場",
    "地図",
    "POLEPOLE",
    "ポレポレ",
    "pizza",
    "lunch",
    "cafe",
    "gourmet",
    "restaurant",
    "access",
  ],
  openGraph: {
    title: "アクセス | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ・ランチ",
    description:
      "薪窯ピザPOLEPOLEへのアクセス方法・地図・駐車場案内。西条・東広島でピザ・カフェ・ランチをお探しなら。",
    url: "https://pizzapolepole.com/access",
    images: [
      {
        url: "/images/Kama.jpg",
        width: 1200,
        height: 630,
        alt: "薪窯Pizza POLEPOLEの薪窯",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "アクセス | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・カフェ・ランチ",
    description:
      "薪窯ピザPOLEPOLEへのアクセス方法・地図・駐車場案内。西条・東広島でピザ・カフェ・ランチをお探しなら。",
    images: ["/images/Kama.jpg"],
  },
};

export default function Access() {
  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <h1 className="section-title">アクセス</h1>

        <div className={accessStyles.accessContainer}>
          {/* Info and Map Section */}
          <div className={accessStyles.infoAndMapWrapper}>
            {/* Info Card */}
            <div className={accessStyles.card}>
              <h2 className={accessStyles.cardTitle}>店舗情報</h2>
              <ul className={accessStyles.infoList}>
                <li className={accessStyles.infoItem}>
                  <strong>住所</strong>
                  <span>
                    〒739-0036
                    <br />
                    広島県東広島市西条町田口70-1
                  </span>
                </li>
                <li className={accessStyles.infoItem}>
                  <strong>営業時間</strong>
                  <span>11:00-15:00 (L.O. 14:30)</span>
                </li>
                <li className={accessStyles.infoItem}>
                  <strong>定休日</strong>
                  <span>火曜日・水曜日</span>
                </li>
                <li className={accessStyles.infoItem}>
                  <strong>駐車場</strong>
                  <span>5台</span>
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
    </div>
  );
}
