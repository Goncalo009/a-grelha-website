import { siteConfig } from "@/config/site";

export function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name.split(" — ")[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Principal, 123",
      addressLocality: "Porto Alto",
      postalCode: "2610-000",
      addressCountry: "PT",
    },
    telephone: "+351 000 000 000",
    openingHours: [
      "Tu-Fr 12:00-15:00",
      "Tu-Fr 19:00-23:00",
      "Sa-Su 12:00-23:00",
    ],
    servesCuisine: ["Portuguese", "Churrasqueira"],
    priceRange: "$$",
    menu: `${siteConfig.url}/menu`,
    image: `${siteConfig.url}/images/hero.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
