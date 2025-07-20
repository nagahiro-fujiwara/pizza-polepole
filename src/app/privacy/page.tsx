import pageStyles from "../page.module.css";
import privacyStyles from "./privacy.module.css";
import { getDictionary } from "../../get-dictionary";

export async function generateMetadata() {
  const dict = await getDictionary('ja');

  return {
    title: dict.privacy.meta.title,
    description: dict.privacy.meta.description,
    keywords: dict.privacy.meta.keywords,
    openGraph: {
      title: dict.privacy.meta.title,
      description: dict.privacy.meta.description,
      url: `https://pizzapolepole.com/privacy`,
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

export default async function Privacy() {
  const dict = await getDictionary('ja');
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
            <p className={privacyStyles.enactmentDate}>
              {dict.privacy.enactmentDate}
              <br />
              {dict.privacy.companyName}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
