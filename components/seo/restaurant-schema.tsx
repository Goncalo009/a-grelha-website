import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/config/seo";
import { clientSeoData } from "@/config/client-seo";

export function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: [absoluteUrl("/stitch/home/hero.jpg"), absoluteUrl("/stitch/menu/frango-piri-piri.jpg")],
    logo: absoluteUrl("/logo/a-grelha-logo.svg"),
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    hasMap: siteConfig.links.maps,
    priceRange: siteConfig.priceRange,
    servesCuisine: siteConfig.cuisine,
    openingHoursSpecification: clientSeoData.openingHours.schema,
    menu: absoluteUrl("/menu"),
    sameAs: [siteConfig.links.instagram, siteConfig.links.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
