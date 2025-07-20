"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import galleryStyles from "./gallery.module.css";

interface GalleryClientProps {
  dict: {
    gallery: {
      title: string;
      heading: string;
      description: string;
    };
  };
}

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
  { src: "/images/interior_counter.JPG", alt: "カウンター席" },
  { src: "/images/interior_レジ.JPG", alt: "レジ" },
  { src: "/images/interior_席1.JPG", alt: "店内の席" },
  { src: "/images/interior_景色.JPG", alt: "窓からの景色" },
  { src: "/images/interior_花.JPG", alt: "店内の花" },
  { src: "/images/interior_釜.JPG", alt: "薪窯" },
  { src: "/images/interior_釜2.JPG", alt: "薪窯" },
  { src: "/images/interior_釜3.JPG", alt: "薪窯" },
  { src: "/images/interior_釜4.JPG", alt: "薪窯" },
  { src: "/images/Kama.jpg", alt: "薪窯" },
  { src: "/images/menu_マルゲリータ.jpeg", alt: "マルゲリータ" },
  { src: "/images/menu_マリナーラ.jpeg", alt: "マリナーラ" },
];

export default function GalleryClient({ dict }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`${styles.page} page-container`}>
      <main className={styles.main}>
        <h1 className="section-title">{dict.gallery.title}</h1>
        
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
                fill
                className={galleryStyles.galleryImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className={galleryStyles.lightbox} onClick={closeLightbox}>
            <div className={galleryStyles.lightboxContent}>
              <Image
                src={selectedImage}
                alt="拡大画像"
                fill
                className={galleryStyles.lightboxImage}
                style={{ objectFit: 'contain' }}
              />
              <button
                className={galleryStyles.closeButton}
                onClick={closeLightbox}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
