"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";

const images = [
  { src: "/images/menu1_Malinala.jpg", alt: "マリナーラ" },
  { src: "/images/menu2_Margherita.jpg", alt: "マルゲリータ" },
  { src: "/images/menu3_Butabarita.jpg", alt: "豚バラと長ネギのピザ" },
  { src: "/images/menu4_Norijapone.jpg", alt: "海苔と大葉の和風ピザ" },
  { src: "/images/menu5_Quwtrofolmadge.jpg", alt: "クアトロフォルマッジ" },
  { src: "/images/menu6_Seasonal.jpg", alt: "季節のピザ" },
  { src: "/images/Kama.jpg", alt: "薪窯" },
  // Add more images as needed
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>ギャラリー</h1>
        <p className={styles.description}>
          POLEPOLEの雰囲気や自慢のピザをご覧ください。
        </p>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => openLightbox(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </main>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <span className={styles.closeButton}>&times;</span>
          <div className={styles.lightboxContent}>
            <Image
              src={selectedImage}
              alt="拡大画像"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
