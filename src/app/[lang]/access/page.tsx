import { getDictionary } from "../../../get-dictionary";
import pageStyles from "../../page.module.css";
import accessStyles from "../../access/access.module.css";

interface AccessPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: AccessPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return {
    title: dict.access.meta.title,
    description: dict.access.meta.description,
    keywords: dict.access.meta.keywords,
    openGraph: {
      title: dict.access.meta.title,
      description: dict.access.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}access`,
      images: [
        {
          url: "/images/Kama.jpg",
          width: 1200,
          height: 630,
          alt: dict.access.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.access.meta.title,
      description: dict.access.meta.description,
      images: ["/images/Kama.jpg"],
    },
  };
}

export default async function Access({ params }: AccessPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <h1 className="section-title">{dict.access.title}</h1>
        <div className={accessStyles.accessContainer}>
          <div className={accessStyles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8234567890123!2d132.7123456789!3d34.4123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI0JzQ0LjQiTiAxMzLCsDQyJzQ0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={accessStyles.infoSection}>
            <div className={accessStyles.infoCard}>
              <h2>{dict.access.heading}</h2>
              <p className={accessStyles.address}>{dict.access.address}</p>
              <p>{dict.access.hours}</p>
              <p>{dict.access.closed}</p>
              <p>{dict.access.parking}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
