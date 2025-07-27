export interface LocalBusinessStructuredDataProps {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email: string;
  url: string;
  openingHours: string[];
  priceRange: string;
  cuisine: string[];
  image: string;
}

export default function LocalBusinessStructuredData({
  name,
  description,
  address,
  phone,
  email,
  url,
  openingHours,
  priceRange,
  cuisine,
  image
}: LocalBusinessStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": name,
    "description": description,
    "image": [image],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "telephone": phone,
    "email": email,
    "url": url,
    "openingHours": openingHours,
    "priceRange": priceRange,
    "servesCuisine": cuisine,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.4281",
      "longitude": "132.7441"
    },
    "acceptsReservations": "True",
    "hasMenu": `${url}/menu`,
    "paymentAccepted": "現金, クレジットカード",
    "currenciesAccepted": "JPY"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
