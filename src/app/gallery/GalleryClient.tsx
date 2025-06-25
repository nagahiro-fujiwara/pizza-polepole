"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import galleryStyles from "./gallery.module.css";

const images = [
  { src: "/images/interior_釜.JPG", alt: "薪窯" },
  { src: "/images/exterior_玄関.JPG", alt: "店舗外観" },
  { src: "/images/exterior_のれん.JPG", alt: "店舗のれん" },
  { src: "/images/interior_席1.JPG", alt: "店内の様子" },
  { src: "/images/menu_マルゲリータ.jpeg", alt: "マルゲリータ" },
  { src: "/images/menu_フォルマッジ.jpeg", alt: "クワトロフォルマッジ" },
  { src: "/images/menu_ブタバリータ.jpeg", alt: "ブタバリータ" },
  { src: "/images/menu_ノリジャポーネ.jpeg", alt: "ノリジャポーネ" },
  { src: "/images/interior_釜2.JPG", alt: "薪窯" },
  { src: "/images/exterior_空撮1.JPG", alt: "店舗空撮" },
  { src: "/images/menu_マリナーラ.jpeg", alt: "マリナーラ" },
  { src: "/images/menu_れんこん.jpeg", alt: "れんこんのピザ" },
  { src: "/images/exterior_イス.JPG", alt: "店外の椅子" },
  { src: "/images/interior_花.JPG", alt: "店内の装飾" },
  { src: "/images/menu_レモン.jpeg", alt: "レモンのピザ" },
  { src: "/images/exterior_ボード.JPG", alt: "ウェルカムボード" },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`${styles.page} page-container`}>
      <main className={`${styles.main} text-center`}>
        <h1 className="section-title">ギャラリー</h1>
        <p className={galleryStyles.description}>
          POLEPOLEの店内の様子や、薪窯で焼き上げたピザの写真をお楽しみください。
          <br />
          ゆっくりとした時間が流れる空間を感じていただけたら嬉しいです。
        </p>
        <div className={galleryStyles.galleryGrid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={galleryStyles.galleryItem}
              onClick={() => openLightbox(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className={galleryStyles.galleryImage}
              />
            </div>
          ))}
        </div>
      </main>

      {selectedImage && (
        <div className={galleryStyles.lightbox} onClick={closeLightbox}>
          <button
            className={galleryStyles.closeButton}
            onClick={closeLightbox}
          >
            &times;
          </button>
          <div className={galleryStyles.lightboxContent}>
            <Image
              src={selectedImage}
              alt="拡大画像"
              fill
              style={{ objectFit: "contain" }}
              className={galleryStyles.lightboxImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
