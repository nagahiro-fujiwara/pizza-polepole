import pageStyles from "../../page.module.css";
import privacyStyles from "../../privacy/privacy.module.css";
import { getDictionary } from "../../../get-dictionary";

interface PrivacyPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return {
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
    keywords: dict.privacy.meta.keywords,
    openGraph: {
      title: dict.privacy.meta.title,
      description: dict.privacy.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}privacy`,
      images: [
        {
          url: "/images/Kama.jpg",
          width: 1200,
          height: 630,
          alt: dict.privacy.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.privacy.meta.title,
      description: dict.privacy.meta.description,
      images: ["/images/Kama.jpg"],
    },
  };
}

export default async function Privacy({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');
  return (
    <div className={`${pageStyles.page} page-container`}>
      <main className={pageStyles.main}>
        <h1 className="section-title">{dict.privacy.title}</h1>
        <div className={privacyStyles.privacyContainer}>
          <div className={privacyStyles.policyCard}>
            <p>
              {dict.privacy.introduction}
            </p>
            <h2>{dict.privacy.section1.title}</h2>
            <p>
              {dict.privacy.section1.content}
            </p>
            <h2>{dict.privacy.section2.title}</h2>
            <p>
              {dict.privacy.section2.content}
            </p>
            <h2>{dict.privacy.section3.title}</h2>
            <p>
              {dict.privacy.section3.content}
            </p>
            <h2>{dict.privacy.section4.title}</h2>
            <p>
              {dict.privacy.section4.content}
            </p>
            <h2>{dict.privacy.section5.title}</h2>
            <p>
              {dict.privacy.section5.content}
            </p>
            <h2>{dict.privacy.section6.title}</h2>
            <p>
              {dict.privacy.section6.content}
            </p>
            <p className={privacyStyles.lastUpdated}>
              {dict.privacy.enactmentDate}
            </p>
            <p className={privacyStyles.companyName}>
              {dict.privacy.companyName}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
