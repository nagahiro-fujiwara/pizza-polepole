import styles from "../page.module.css";

export default function Access() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>アクセス</h1>
        <p className={styles.catch}>
          〒739-0000 広島県東広島市西条町70-1<br />
        </p>
        <div style={{ margin: "24px 0", textAlign: "center" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.0000000000005!2d132.75000000000003!3d34.42000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa00000000001%3A0x0000000000000000!2z5bqD5bO25biC5p2x5Lqs6YO95aSn5a2m!5e0!3m2!1sja!2sjp!4v0000000000000!5m2!1sja!2sjp"
            width="350"
            height="250"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
          <div style={{ marginTop: 8 }}>
            <a
              href="https://maps.app.goo.gl/rNAfaBQu3xRG8Rw47"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7a6e00", fontWeight: 600, textDecoration: "underline", fontSize: "1.05rem" }}
            >
              Googleマップで開く
            </a>
          </div>
        </div>
        <ul style={{ padding: 0, listStyle: "none", maxWidth: 400 }}>
          <li>営業時間：11:00～15:00</li>
          <li>定休日：火・水</li>
          <li>駐車場あり（5台）</li>
        </ul>
      </main>
    </div>
  );
}
