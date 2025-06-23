import styles from "../page.module.css";
import Image from "next/image";

const menu = [
  {
    name: "マリナーラ",
    desc: "マリナーラは「船乗りの」という意味で\nその昔ナポリの船乗りにこよなく愛されたピッツァと言われています\nチーズは無く生地や素材の味が感じられます",
    price: "¥1,310",
    img: "/images/menu1_Malinala.jpg",
  },
  {
    name: "マルゲリータ",
    desc: "1889年マルゲリータ王妃のために作られ\n王妃が愛したと言われる有名なピッツァです\nイタリア国旗〈トマトソース(赤) モッツァレラ(白) バジル(緑)〉を表現していると言われています\n諸説ありますが素敵なエピソードですね",
    price: "¥1,850",
    img: "/images/menu2_Margherita.jpg",
  },
  {
    name: "ブタバリータ",
    desc: "国産豚と海塩を使った自家製パンチェッタ(ベーコン)と\nモッツァレラをトマトソースがしっかりまとめた\nボリュームのあるピッツァです",
    price: "¥2,050",
    img: "/images/menu3_Butabarita.jpg",
  },
  {
    name: "ノリジャポーネ",
    desc: "自家製 伊勢湾産海苔ソース・えび・モッツァレラの\nあっさり和風ピッツァです\nしば漬けもいい仕事してます",
    price: "¥2,080",
    img: "/images/menu4_Norijapone.jpg",
  },
  {
    name: "クワトロフォルマッジ",
    desc: "濃厚な4種チーズピッツァを\n『自家製りんごペースト』でお楽しみください\nフォルマッジとはご存じの通り「チーズ」という意味で\nたんぱく質や脂質・ビタミン・ミネラルを豊富に含み\n疲労回復や高血圧の予防にも役立つそうですよ\nでも食べ過ぎにはご注意くださいね！",
    price: "¥2,290",
    img: "/images/menu5_Quwtrofolmadge.jpg",
  },
  {
    name: "季節のPizza",
    desc: "自家製野菜や地元・国産の\n旬な素材を使ったピッツァです",
    price: "店内黒板をご覧ください",
    img: "/images/menu6_Seasonal.jpg",
  },
];

export default function Menu() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>メニュー</h1>
        <div className={styles.menuGrid}>
          {menu.map((item) => (
            <div key={item.name} className={styles.menuCard}>
              <Image
                src={item.img}
                alt={item.name}
                width={180}
                height={120}
                className={styles.menuImg}
              />
              <div className={styles.menuName}>{item.name}</div>
              <div className={styles.menuDesc}>{item.desc}</div>
              <div className={styles.menuPrice}>{item.price}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
