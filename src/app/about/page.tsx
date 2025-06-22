import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>POLEPOLEへの想い</h1>
        <section
          className={styles.section}
          style={{
            maxWidth: 600,
            margin: "0 auto",
            background: "#e6f4ea",
            borderRadius: 16,
            padding: 24,
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              color: "#357a38",
              fontSize: "1.2rem",
              marginBottom: 12,
            }}
          >
            “POLE POLE” 「ゆっくりゆっくり」「ぼちぼちいこう」
          </h2>
          <p
            style={{
              whiteSpace: "pre-line",
              color: "#226c2a",
              lineHeight: 1.8,
            }}
          >
            変化が早く
            <br />
            不確実性が高まる現代を生きる
            <br />
            私たちの目まぐるしい日々は、
            <br />
            いろいろな事情で大切な時間が
            <br />
            犠牲になっています
            <br />
            もしかすると
            <br />
            このような環境を
            <br />
            自ら無意識に選んでいるかもしれません…
            <br />
            そんな日常で
            <br />
            変えたいと思うものを
            <br />
            変える勇気がほしいと願う一方
            <br />
            変えられないものを受け入れる勇気が
            <br />
            必要なときもあります
            <br />
            でもどちらの勇気を持てばいいか…
            <br />
            そんなとき“POLE POLE”の響きに身を委ね
            <br />
            自分のこころの声に耳をかたむけるひとときが
            <br />
            あってもいいのではないでしょうか
            <br />
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
        <section
          className={styles.section}
          style={{
            maxWidth: 500,
            margin: "0 auto",
            background: "#f7faf7",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <h2
            style={{
              color: "#357a38",
              fontSize: "1.1rem",
              marginBottom: 12,
            }}
          >
            店舗情報
          </h2>
          <table
            className={styles.table}
            style={{
              width: "100%",
              color: "#226c2a",
              fontSize: "1rem",
              borderCollapse: "separate",
              borderSpacing: "0 8px",
            }}
          >
            <tbody>
              <tr>
                <td>店舗名</td>
                <td>薪窯Pizza POLEPOLE</td>
              </tr>
              <tr>
                <td>営業日</td>
                <td>月・木・金・土・日</td>
              </tr>
              <tr>
                <td>営業時間</td>
                <td>11:00 - 15:00 (L.0. 14:30)</td>
              </tr>
              <tr>
                <td>定休日</td>
                <td>火・水</td>
              </tr>
              <tr>
                <td>座席・駐車場</td>
                <td>14席・5台</td>
              </tr>
              <tr>
                <td>所在地</td>
                <td>広島県東広島市西条町田口 XXX-X</td>
              </tr>
              <tr>
                <td>TEL</td>
                <td>XXX-XXX-XXXX</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
