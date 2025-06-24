import pageStyles from "../page.module.css";
import accessStyles from "./access.module.css";

export default function Access() {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <h1 className={pageStyles.sectionTitle}>アクセス</h1>
        <div className={accessStyles.accessContainer}>
          <div className={accessStyles.infoCard}>
            <h2>店舗情報</h2>
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
          <div className={accessStyles.mapCard}>
            <h2>マップ</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.823979139282!2d132.7694025762358!3d34.4571899969439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9e1e05f43943%3A0x5c26c28a5a73e5d!2s70-1%20Taguchi%2C%20Saij%C5%8Dch%C5%8D%2C%20Higashihiroshima%2C%20Hiroshima%20739-0036%2C%20Japan!5e0!3m2!1sen!2sus!4v1716886621772!5m2!1sen!2sus"
              className={accessStyles.mapFrame}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
            <div className={accessStyles.mapLink}>
              <a
                href="https://maps.app.goo.gl/Lp8a4g5b2v6bZ9bY8"
                target="_blank"
                rel="noopener noreferrer"
                className={pageStyles.button}
              >
                Googleマップで開く
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
