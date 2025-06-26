import Image from 'next/image';
import Link from 'next/link';
import styles from './FeatureSection.module.css';

type FeatureSectionProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonLink?: string; // linkUrl -> buttonLink
  buttonLabel?: string; // linkText -> buttonLabel
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonLink,
  buttonLabel,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {buttonLink && buttonLabel && (
          <div className={styles.buttonWrapper}>
            <Link href={buttonLink} className={styles.button}>
              {buttonLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
