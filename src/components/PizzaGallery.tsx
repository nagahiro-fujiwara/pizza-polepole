'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PizzaGallery.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface PizzaCategory {
  id: string;
  name: string;
  emoji: string;
  images: GalleryImage[];
}

const pizzaCategories: PizzaCategory[] = [
  {
    id: 'exterior',
    name: '外観',
    emoji: '🏠',
    images: [
      { src: '/images/exterior_全体.JPG', alt: '店舗外観全体', title: 'ポレポレ外観' },
      { src: '/images/exterior_空撮1.JPG', alt: '空撮写真1', title: '空から見たポレポレ' },
      { src: '/images/exterior_玄関.JPG', alt: '玄関', title: '温かい玄関' },
      { src: '/images/exterior_のれん.JPG', alt: 'のれん', title: 'ポレポレののれん' },
      { src: '/images/exterior_煙突.JPG', alt: '煙突', title: '薪窯の煙突' },
      { src: '/images/exterior_イス2.JPG', alt: '石のベンチ', title: '石のベンチ' },
      { src: '/images/exterior_ボード.JPG', alt: 'ウェルカムボード', title: 'ウェルカムボード' },
      { src: '/images/exterior_ポスト.JPG', alt: 'ポスト', title: 'かわいいポスト' }
    ]
  },
  {
    id: 'interior',
    name: '内装',
    emoji: '🪑',
    images: [
      { src: '/images/interior_釜.JPG', alt: '薪窯', title: '本格薪窯' },
      { src: '/images/interior_釜2.JPG', alt: '薪窯2', title: '薪窯の中' },
      { src: '/images/interior_counter.JPG', alt: 'カウンター', title: 'カウンター席' },
      { src: '/images/interior_席1.JPG', alt: '店内の席', title: '店内の席' },
      { src: '/images/interior_景色.JPG', alt: '窓からの景色', title: '窓からの景色' },
      { src: '/images/interior_花.JPG', alt: '店内の花', title: '季節の花' },
      { src: '/images/interior_レジ.JPG', alt: 'レジ', title: 'レジカウンター' },
      { src: '/images/Kama.jpg', alt: '薪窯', title: '薪窯全体' }
    ]
  },
  {
    id: 'food',
    name: '料理',
    emoji: '🍕',
    images: [
      { src: '/images/menu_マルゲリータ.jpeg', alt: 'マルゲリータ', title: 'マルゲリータ' },
      { src: '/images/menu_マリナーラ.jpeg', alt: 'マリナーラ', title: 'マリナーラ' },
      { src: '/images/menu_フォルマッジ.jpeg', alt: 'フォルマッジ', title: 'フォルマッジ' },
      { src: '/images/menu_ブタバリータ.jpeg', alt: 'ブタバリータ', title: 'ブタバリータ' },
      { src: '/images/menu_レモン.jpeg', alt: 'レモンピザ', title: 'レモンピザ' },
      { src: '/images/menu_れんこん.jpeg', alt: 'れんこんピザ', title: 'れんこんピザ' },
      { src: '/images/menu_ノリジャポーネ.jpeg', alt: 'ノリジャポーネ', title: 'ノリジャポーネ' },
      { src: '/images/August_seasonal_pizza.png', alt: '8月の季節のピザ', title: '季節のピザ' }
    ]
  },
  {
    id: 'story',
    name: 'イベント・物語',
    emoji: '📖',
    images: [
      { src: '/images/窯の火入れ.png', alt: '窯の火入れ', title: '窯の火入れ' },
      { src: '/images/開店のお知らせ.png', alt: '開店のお知らせ', title: '開店の日' },
      { src: '/images/ピザの日.png', alt: 'ピザの日', title: 'ピザの日' },
      { src: '/images/田植え2024.png', alt: '田植え', title: '田植えの季節' },
      { src: '/images/地鎮祭.png', alt: '地鎮祭', title: '地鎮祭' },
      { src: '/images/基礎工事.png', alt: '基礎工事', title: '基礎工事' },
      { src: '/images/上棟.png', alt: '上棟', title: '上棟式' },
      { src: '/images/薪窯制作.png', alt: '薪窯制作', title: '薪窯制作' }
    ]
  }
];

export default function PizzaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('exterior');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const currentCategory = pizzaCategories.find(cat => cat.id === selectedCategory);
  const currentImages = currentCategory?.images || [];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      {/* カテゴリタブ */}
      <div className={styles.categoryTabs}>
        {pizzaCategories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryTab} ${
              selectedCategory === category.id ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* ピザギャラリー */}
      <div className={styles.pizzaContainer}>
        <div className={styles.pizza}>
          {/* 中央のロゴ */}
          <div className={styles.pizzaCenter}>
            <Image
              src="/images/Logo1.png"
              alt="ポレポレロゴ"
              width={80}
              height={80}
              className={styles.centerLogo}
            />
          </div>

          {/* ピザスライス */}
          {currentImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`${styles.pizzaSlice} ${styles[`slice${index + 1}`]}`}
              onClick={() => openLightbox(image)}
            >
              <div className={styles.sliceContent}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.sliceImage}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ライトボックス */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              ← 戻る
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className={styles.lightboxImage}
              style={{ objectFit: 'contain' }}
            />
            <div className={styles.lightboxInfo}>
              <h3>{selectedImage.title}</h3>
              <p>{currentCategory?.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
