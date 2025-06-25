import pageStyles from "../page.module.css";
import menuStyles from "./menu.module.css";
import Image from "next/image";

export const metadata = {
	title: "メニュー | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・ランチ・カフェ",
	description:
		"西条・東広島で人気の薪窯ピザPOLEPOLEのメニュー。地元食材・自家製生地・ナポリピザ・季節のおすすめも。ランチやカフェ利用にも最適。",
	keywords: [
		"西条",
		"東広島",
		"ピザ",
		"メニュー",
		"ランチ",
		"カフェ",
		"ナポリピザ",
		"地元食材",
		"季節限定",
		"おしゃれ",
		"人気",
		"POLEPOLE",
		"ポレポレ",
		"pizza",
		"lunch",
		"cafe",
		"gourmet",
		"restaurant",
	],
	openGraph: {
		title: "メニュー | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・ランチ・カフェ",
		description:
			"西条・東広島で人気の薪窯ピザPOLEPOLEのメニュー。地元食材・自家製生地・ナポリピザ・季節のおすすめも。ランチやカフェ利用にも最適。",
		url: "https://pizzapolepole.com/menu",
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
		title: "メニュー | 薪窯ピザ POLEPOLE - 西条・東広島のピザ・ランチ・カフェ",
		description:
			"西条・東広島で人気の薪窯ピザPOLEPOLEのメニュー。地元食材・自家製生地・ナポリピザ・季節のおすすめも。ランチやカフェ利用にも最適。",
		images: ["/images/Kama.jpg"],
	},
};

const menu = [
	{
		name: "マリナーラ",
		desc: "マリナーラは「船乗りの」という意味でその昔ナポリの船乗りにこよなく愛されたPizzaと言われています。チーズは無く生地や素材の味が感じられます。",
		price: "¥1,310",
		img: "/images/menu_マリナーラ.jpeg",
	},
	{
		name: "マルゲリータ",
		desc: "1889年マルゲリータ王妃のために作られ王妃が愛したと言われる有名なPizzaです。イタリア国旗〈トマトソース(赤) モッツァレラ(白) バジル(緑)〉を表現していると言われています。諸説ありますが素敵なエピソードですね。",
		price: "¥1,850",
		img: "/images/menu_マルゲリータ.jpeg",
	},
	{
		name: "ブタバリータ",
		desc: "国産豚と海塩を使った自家製パンチェッタ(ベーコン)とモッツァレラをトマトソースがしっかりまとめたボリュームのあるPizzaです。",
		price: "¥2,050",
		img: "/images/menu_ブタバリータ.jpeg",
	},
	{
		name: "ノリジャポーネ",
		desc: "自家製 伊勢湾産海苔ソース・えび・モッツァレラのあっさり和風Pizzaです。しば漬けもいい仕事してます。",
		price: "¥2,080",
		img: "/images/menu_ノリジャポーネ.jpeg",
	},
	{
		name: "クワトロフォルマッジ",
		desc: "濃厚な4種チーズPizzaを『自家製りんごペースト』でお楽しみください。フォルマッジとはご存じの通り「チーズ」という意味で、たんぱく質や脂質・ビタミン・ミネラルを豊富に含み、疲労回復や高血圧の予防にも役立つそうですよ。でも食べ過ぎにはご注意くださいね！",
		price: "¥2,290",
		img: "/images/menu_フォルマッジ.jpeg",
	},
	{
		name: "季節のPizza",
		desc: "自家製野菜や地元・国産の旬な素材を使ったPizzaです。",
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
								<p className={menuStyles.menuDesc}>
									{item.desc.split("\n\n").map((para, i) => (
										<span key={i}>
											{para.split("\n").map((line, j) => (
												<>
													{line}
													{j < para.split("\n").length - 1 && ' '}
												</>
											))}
											<br />
										</span>
									))}
								</p>
								<div className={menuStyles.menuPrice}>{item.price}</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
