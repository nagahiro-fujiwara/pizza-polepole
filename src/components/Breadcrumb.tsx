import Link from 'next/link';
import Script from 'next/script';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // 構造化データ作成
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <>
      <nav className={styles.breadcrumb} aria-label="パンくずリスト">
        <ol className={styles.breadcrumbList}>
          {items.map((item, index) => (
            <li key={index} className={styles.breadcrumbItem}>
              {index < items.length - 1 ? (
                <>
                  <Link href={item.url} className={styles.breadcrumbLink}>
                    {item.name}
                  </Link>
                  <span className={styles.separator}> &gt; </span>
                </>
              ) : (
                <span className={styles.currentPage}>{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}
