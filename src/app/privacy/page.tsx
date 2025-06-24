import pageStyles from "../page.module.css";
import privacyStyles from "./privacy.module.css";

export default function Privacy() {
  return (
    <div className={pageStyles.page}>
      <main className={pageStyles.main}>
        <h1 className={pageStyles.sectionTitle}>プライバシーポリシー</h1>
        <div className={privacyStyles.privacyContainer}>
          <div className={privacyStyles.policyCard}>
            <p>
              薪窯Pizza POLEPOLE（以下「当店」）は、お客様の個人情報を取得・保存・利用することはありません。
              <br />
              本サイトは、個人情報の入力や送信を必要とする機能（お問い合わせフォーム等）を設けておりません。
            </p>
            <h2>1. 個人情報の取得について</h2>
            <p>
              当店は、本サイトを通じてお客様の個人情報を取得することはありません。
            </p>
            <h2>2. 個人情報の利用目的</h2>
            <p>
              個人情報の取得・利用は一切行いません。
            </p>
            <h2>3. 個人情報の第三者提供</h2>
            <p>
              当店は、個人情報を第三者に提供することはありません。
            </p>
            <h2>4. アクセス解析・Cookie等について</h2>
            <p>
              本サイトでは、サービス向上のためアクセス解析ツールを利用する場合がありますが、個人を特定する情報の取得は行いません。
            </p>
            <h2>5. プライバシーポリシーの変更</h2>
            <p>
              本ポリシーの内容は、必要に応じて予告なく改定する場合があります。
            </p>
            <h2>6. お問い合わせ</h2>
            <p>
              プライバシーポリシーに関するご質問は、店頭にてご確認ください。
            </p>
            <p className={privacyStyles.enactmentDate}>
              制定日：2025年6月24日
              <br />
              薪窯Pizza POLEPOLE
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
