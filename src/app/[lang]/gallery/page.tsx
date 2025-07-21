import GalleryClient from "../../gallery/GalleryClient";
import { getDictionary } from "../../../get-dictionary";

interface GalleryPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'ja' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: GalleryPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return {
    title: dict.gallery.meta.title,
    description: dict.gallery.meta.description,
    keywords: dict.gallery.meta.keywords,
    openGraph: {
      title: dict.gallery.meta.title,
      description: dict.gallery.meta.description,
      url: `https://pizzapolepole.com/${lang === 'en' ? 'en/' : ''}gallery`,
      images: [
        {
          url: "/images/Kama.jpg",
          width: 1200,
          height: 630,
          alt: dict.gallery.meta.imageAlt,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.gallery.meta.title,
      description: dict.gallery.meta.description,
      images: ["/images/Kama.jpg"],
    },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'ja' | 'en');

  return <GalleryClient dict={dict} />;
}
