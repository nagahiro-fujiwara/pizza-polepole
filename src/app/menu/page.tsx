import pageStyles from "../page.module.css";
import menuStyles from "./menu.module.css";
import Image from "next/image";

const menu = [
	{
		name: "マリナーラ",
		desc: "マリナーラは「船乗りの」という意味で\nその昔ナポリの船乗りにこよなく愛されたPizzaと言われています\nチーズは無く生地や素材の味が感じられます",
		price: "¥1,310",
		img: "/images/menu_マリナーラ.jpeg",
	},
	{
		name: "マルゲリータ",
		desc: "1889年マルゲリータ王妃のために作られ\n王妃が愛したと言われる有名なPizzaです\nイタリア国旗〈トマトソース(赤) モッツァレラ(白) バジル(緑)〉を表現していると言われています\n諸説ありますが素敵なエピソードですね",
		price: "¥1,850",
		img: "/images/menu_マルゲリータ.jpeg",
	},
	{
		name: "ブタバリータ",
		desc: "国産豚と海塩を使った自家製パンチェッタ(ベーコン)と\nモッツァレラをトマトソースがしっかりまとめた\nボリュームのあるPizzaです",
		price: "¥2,050",
		img: "/images/menu_ブタバリータ.jpeg",
	},
	{
		name: "ノリジャポーネ",
		desc: "自家製 伊勢湾産海苔ソース・えび・モッツァレラの\nあっさり和風Pizzaです\nしば漬けもいい仕事してます",
		price: "¥2,080",
		img: "/images/menu_ノリジャポーネ.jpeg",
	},
	{
		name: "クワトロフォルマッジ",
		desc: "濃厚な4種チーズPizzaを\n『自家製りんごペースト』でお楽しみください\nフォルマッジとはご存じの通り「チーズ」という意味で\nたんぱく質や脂質・ビタミン・ミネラルを豊富に含み\n疲労回復や高血圧の予防にも役立つそうですよ\nでも食べ過ぎにはご注意くださいね！",
		price: "¥2,290",
		img: "/images/menu_フォルマッジ.jpeg",
	},
	{
		name: "季節のPizza",
		desc: "自家製野菜や地元・国産の\n旬な素材を使ったPizzaです",
		price: "店内黒板をご覧ください",
		img: "/images/menu_れんこん.jpeg",
	},
];

export default function Menu() {
	return (
		<div className={`${pageStyles.page} page-container`}>
			<main className={pageStyles.main}>
				<h2 className="section-title">メニュー</h2>
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
				<h2 className="section-title">こだわり食材</h2>
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
				<h2 className="section-title">Pizza</h2>
				<div className={menuStyles.menuGrid}>
					{menu.map((item) => (
						<div key={item.name} className={menuStyles.menuCard}>
							<div className={menuStyles.menuImageContainer}>
								<Image
									src={item.img}
									alt={item.name}
									width={400}
									height={300}
									className={menuStyles.menuImg}
								/>
							</div>
							<div className={menuStyles.menuContent}>
								<h2 className={menuStyles.menuName}>{item.name}</h2>
								<p className={menuStyles.menuDesc}>{item.desc}</p>
								<div className={menuStyles.menuPrice}>{item.price}</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
