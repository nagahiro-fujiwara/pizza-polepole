interface ImageSEOProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageSEO({
  src,
  alt,
  title,
  width,
  height,
  loading = "lazy",
  priority = false,
  sizes,
  className,
  style,
  ...props
}: ImageSEOProps) {
  // Generate structured data for the image
  const imageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": src.startsWith('/') ? `https://pizzapolepole.com${src}` : src,
    "name": title || alt,
    "description": alt,
    "contentUrl": src.startsWith('/') ? `https://pizzapolepole.com${src}` : src,
    ...(width && { "width": width }),
    ...(height && { "height": height }),
    "author": {
      "@type": "Organization",
      "name": "薪窯Pizza POLE POLE"
    },
    "copyrightHolder": {
      "@type": "Organization", 
      "name": "薪窯Pizza POLE POLE"
    }
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        loading={loading}
        sizes={sizes}
        className={className}
        style={style}
        {...props}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageStructuredData) }}
      />
    </>
  );
}
