"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import galleryStyles from "./gallery.module.css";

const allImages = [
  { src: "/images/exterior_open.JPG", alt: "OPENの看板" },
  { src: "/images/exterior_のれん.JPG", alt: "店舗のれん" },
  { src: "/images/exterior_のれん2.JPG", alt: "店舗のれん" },
  { src: "/images/exterior_イス.JPG", alt: "店外の椅子" },
  { src: "/images/exterior_イス2.JPG", alt: "店外の椅子" },
  { src: "/images/exterior_イス3.JPG", alt: "店外の椅子" },
  { src: "/images/exterior_ボード.JPG", alt: "ウェルカムボード" },
  { src: "/images/exterior_ポスト.JPG", alt: "ポスト" },
  { src: "/images/exterior_全体.JPG", alt: "店舗全体" },
  { src: "/images/exterior_煙突.JPG", alt: "煙突" },
  { src: "/images/exterior_玄関.JPG", alt: "店舗玄関" },
  { src: "/images/exterior_玄関2.JPG", alt: "店舗玄関" },
  { src: "/images/exterior_空撮1.JPG", alt: "店舗空撮" },
  { src: "/images/exterior_空撮2.JPG", alt: "店舗空撮" },
  { src: "/images/exteror_玄関3.JPG", alt: "店舗玄関" },
  { src: "/images/interior_counter.JPG", alt: "カウンター席" },
  { src: "/images/interior_びん.JPG", alt: "店内の瓶" },
  { src: "/images/interior_レジ.JPG", alt: "レジ" },
  { src: "/images/interior_布.JPG", alt: "店内の布" },
  { src: "/images/interior_席1.JPG", alt: "店内の席" },
  { src: "/images/interior_景色.JPG", alt: "窓からの景色" },
  { src: "/images/interior_花.JPG", alt: "店内の花" },
  { src: "/images/interior_釜.JPG", alt: "薪窯" },
  { src: "/images/interior_釜2.JPG", alt: "薪窯" },
  { src: "/images/interior_釜3.JPG", alt: "薪窯" },
  { src: "/images/interior_釜4.JPG", alt: "薪窯" },
  { src: "/images/Kama.jpg", alt: "薪窯" },
  { src: "/images/menu_れんこん.jpeg", alt: "れんこんのピザ" },
  { src: "/images/menu_ノリジャポーネ.jpeg", alt: "ノリジャポーネ" },
  { src: "/images/menu_フォルマッジ.jpeg", alt: "クワトロフォルマッジ" },
  { src: "/images/menu_ブタバリータ.jpeg", alt: "ブタバリータ" },
  { src: "/images/menu_マリナーラ.jpeg", alt: "マリナーラ" },
  { src: "/images/menu_マルゲリータ.jpeg", alt: "マルゲリータ" },
  { src: "/images/menu_レモン.jpeg", alt: "レモンのピザ" },
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
          POLE POLEの店内の様子や、薪窯で焼き上げたピザの写真をお楽しみください。
          <br />
          ゆっくりとした時間が流れる空間を感じていただけたら嬉しいです。
        </p>
        <div className={galleryStyles.galleryGrid}>
          {allImages.map((image, index) => (
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
