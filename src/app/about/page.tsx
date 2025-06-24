import pageStyles from "../page.module.css";
import aboutStyles from "./about.module.css";

export default function About() {
  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={`${pageStyles.main} text-center`}>
        <h1 className="section-title">POLEPOLEへの想い</h1>
        <div className={aboutStyles.aboutContainer}>
          <section className={aboutStyles.philosophyCard}>
            <h2>
              “POLE POLE” <br />「ゆっくりゆっくり」「ぼちぼちいこう」
            </h2>
            <p>
              変化が早く、不確実性が高まる現代。
              <br />
              私たちの目まぐるしい日々では、
              <br />
              大切な時間がつい後回しにされがちです。
            </p>
            <p>
              そんな日常から少しだけ離れて、
              <br />
              自分のこころの声に耳をかたむけるひとときが
              <br />
              あってもいいのではないでしょうか。
            </p>
            <p>
              POLEPOLEが、そんなやすらぎの場所に
              <br />
              なれたらと願っています。
            </p>
            <p>
              道が常にあなたの前にありますように。
              <br />
              風がいつもあなたの背中を押してくれますように。
              <br />
              <br />
              ぼちぼちいきましょう、POLE POLE。
            </p>
          </section>
          <section className={aboutStyles.infoCard}>
            <h2>店舗情報</h2>
            <ul className={aboutStyles.infoList}>
              <li className={aboutStyles.infoItem}>
                <strong>店舗名</strong>
                <span>薪窯Pizza POLEPOLE</span>
              </li>
              <li className={aboutStyles.infoItem}>
                <strong>住所</strong>
                <span>〒739-0036<br />広島県東広島市西条町田口70-1</span>
              </li>
              <li className={aboutStyles.infoItem}>
                <strong>営業時間</strong>
                <span>11:00-15:00 (L.O. 14:30)</span>
              </li>
              <li className={aboutStyles.infoItem}>
                <strong>定休日</strong>
                <span>火曜日・水曜日</span>
              </li>
              <li className={aboutStyles.infoItem}>
                <strong>駐車場</strong>
                <span>5台</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
