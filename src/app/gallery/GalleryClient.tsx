"use client";

import PizzaGallery from "../../components/PizzaGallery";
import Breadcrumb from "../../components/Breadcrumb";
import styles from "../page.module.css";

interface GalleryClientProps {
  dict: {
    gallery: {
      title: string;
      heading: string;
      description: string;
    };
  };
}

export default function GalleryClient({ dict }: GalleryClientProps) {
  return (
    <div className={`${styles.page} page-container`}>
      <main className={styles.main}>
        <Breadcrumb 
          items={[
            { name: 'ホーム', url: '/' },
            { name: 'ギャラリー', url: '/gallery' }
          ]}
        />
        <h1 className="section-title">{dict.gallery.title}</h1>
        <PizzaGallery />
      </main>
    </div>
  );
}
