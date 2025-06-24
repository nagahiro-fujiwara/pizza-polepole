import pageStyles from "../page.module.css";
import aboutStyles from "./about.module.css";

export default function About() {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <h1 className={pageStyles.sectionTitle}>POLEPOLEへの想い</h1>
        <div className={aboutStyles.aboutContainer}>
          <section className={aboutStyles.philosophyCard}>
            <h2>“POLE POLE” 「ゆっくりゆっくり」「ぼちぼちいこう」</h2>
            <p>
              変化が早く
              <br />
              不確実性が高まる現代を生きる
              <br />
              私たちの目まぐるしい日々は、
              <br />
              いろいろな事情で大切な時間が
              <br />
              犠牲になっています
            </p>
            <p>
              もしかすると
              <br />
              このような環境を
              <br />
              自ら無意識に選んでいるかもしれません…
            </p>
            <p>
              そんな日常で
              <br />
              変えたいと思うものを
              <br />
              変える勇気がほしいと願う一方
              <br />
              変えられないものを受け入れる勇気が
              <br />
              必要なときもあります
            </p>
            <p>
              でもどちらの勇気を持てばいいか…
              <br />
              そんなとき“POLE POLE”の響きに身を委ね
              <br />
              自分のこころの声に耳をかたむけるひとときが
              <br />
              あってもいいのではないでしょうか
            </p>
            <p>
              そんな場所になればいいな
              <br />
              道が常にあなたの前にありますように
              <br />
              風がいつもあなたの背中を押してくれますように
              <br />
              ぼちぼちいきましょう
              <br />
              POLE POLE
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
