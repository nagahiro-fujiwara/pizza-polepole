import Script from 'next/script';

interface RestaurantStructuredDataProps {
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

export default function RestaurantStructuredData({
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
}: RestaurantStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": name,
    "description": description,
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
    "image": image,
    "priceRange": priceRange,
    "servesCuisine": cuisine,
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(': ')[0],
      "opens": hours.split(': ')[1]?.split('-')[0],
      "closes": hours.split(': ')[1]?.split('-')[1]
    })),
    "hasMenu": `${url}/menu`,
    "acceptsReservations": "False",
    "paymentAccepted": "Cash",
    "currenciesAccepted": "JPY",
    "smokingAllowed": "False",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <Script
      id="restaurant-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
