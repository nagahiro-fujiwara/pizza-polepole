import GalleryClient from "./GalleryClient";
import { getDictionary } from "../../get-dictionary";

export async function generateMetadata() {
  const dict = await getDictionary('ja');

  return {
    title: dict.gallery.meta.title,
    description: dict.gallery.meta.description,
    keywords: dict.gallery.meta.keywords,
    openGraph: {
      title: dict.gallery.meta.title,
      description: dict.gallery.meta.description,
      url: `https://pizzapolepole.com/gallery`,
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

export default async function GalleryPage() {
  const dict = await getDictionary('ja');

  return <GalleryClient dict={dict} />;
}
