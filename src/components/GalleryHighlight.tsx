import Image from 'next/image';
import Link from 'next/link';
import styles from './GalleryHighlight.module.css';

const galleryImages = [
  { src: '/images/menu1_Malinala.jpg', alt: 'マリナーラ' },
  { src: '/images/menu3_Butabarita.jpg', alt: 'ブタバリータ' },
  { src: '/images/menu4_Norijapone.jpg', alt: 'ノリジャポーネ' },
  { src: '/images/Kama.jpg', alt: '薪窯' },
];

const GalleryHighlight = () => {
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.sectionTitle}>Our Gallery</h2>
      <p className={styles.sectionSubtitle}>
        店内の雰囲気や自慢のピザをご覧ください。
      </p>
      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className={styles.galleryImage}
            />
            <div className={styles.overlay}>
              <p className={styles.imageTitle}>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.galleryLink}>
        <Link href="/gallery" className={styles.button}>
          ギャラリーをもっと見る
        </Link>
      </div>
    </section>
  );
};

export default GalleryHighlight;
