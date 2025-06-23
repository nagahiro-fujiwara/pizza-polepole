import Image from 'next/image';
import Link from 'next/link';
import styles from './MenuHighlight.module.css';

const highlightedMenu = [
    {
        name: "マルゲリータ",
        desc: "王妃が愛したイタリアンカラーの定番ピッツァ。",
        price: "¥1,850",
        img: "/images/menu2_Margherita.jpg",
        href: "/menu#マルゲリータ"
    },
    {
        name: "クワトロフォルマッジ",
        desc: "4種の濃厚チーズと自家製りんごペーストのハーモニー。",
        price: "¥2,290",
        img: "/images/menu5_Quwtrofolmadge.jpg",
        href: "/menu#クワトロフォルマッジ"
    },
    {
        name: "ブタバリータ",
        desc: "自家製パンチェッタが決め手のボリューム満点ピッツァ。",
        price: "¥2,050",
        img: "/images/menu3_Butabarita.jpg",
        href: "/menu#ブタバリータ"
    },
];

const MenuHighlight = () => {
    return (
        <section className={styles.menuHighlightSection}>
            <h2 className={styles.sectionTitle}>おすすめメニュー</h2>
            <div className={styles.highlightGrid}>
                {highlightedMenu.map((item) => (
                    <div key={item.name} className={styles.highlightCard}>
                        <Image src={item.img} alt={item.name} width={400} height={300} className={styles.highlightImg} />
                        <div className={styles.cardContent}>
                            <h3 className={styles.itemName}>{item.name}</h3>
                            <p className={styles.itemDesc}>{item.desc}</p>
                            <p className={styles.itemPrice}>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.fullMenuLink}>
                <Link href="/menu" className={styles.button}>
                    全てのメニューを見る
                </Link>
            </div>
        </section>
    );
};

export default MenuHighlight;
