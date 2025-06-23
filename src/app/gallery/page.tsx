import styles from "../page.module.css";
import Image from "next/image";

const images = [
  "/images/Kama.jpg",
  "/images/menu1_Malinala.jpg",
  "/images/menu2_Margherita.jpg",
  "/images/menu3_Butabarita.jpg",
  "/images/menu4_Norijapone.jpg",
  "/images/menu5_Quwtrofolmadge.jpg",
  "/images/menu6_Seasonal.jpg",
];

function shuffle(arr: string[]) {
  return arr
    .map((v) => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

export default function Gallery() {
  const shuffled = shuffle(images);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>ギャラリー</h1>
        <div className={styles.galleryGrid}>
          {shuffled.map((src, i) => (
            <div className={styles.galleryCard} key={src}>
              <Image
                src={src}
                alt={`ギャラリー画像${i + 1}`}
                width={320}
                height={220}
                className={styles.galleryImg}
                style={{ borderRadius: 16, boxShadow: "0 2px 12px rgba(53,122,56,0.10)" }}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
