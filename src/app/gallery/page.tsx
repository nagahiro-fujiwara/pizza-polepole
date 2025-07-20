import GalleryClient from "./GalleryClient";
import { getDictionary } from "../../get-dictionary";

interface GalleryPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ searchParams }: GalleryPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as 'ja' | 'en') || 'ja';
  const dict = await getDictionary(lang);

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

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = (resolvedSearchParams.lang as 'ja' | 'en') || 'ja';
  const dict = await getDictionary(lang);

  return <GalleryClient dict={dict} />;
}
