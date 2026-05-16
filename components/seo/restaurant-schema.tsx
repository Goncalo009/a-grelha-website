import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/config/seo";

export function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: [absoluteUrl("/stitch/home/hero.jpg"), absoluteUrl("/stitch/menu/frango-piri-piri.jpg")],
    logo: absoluteUrl("/stitch/home/hero.jpg"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    servesCuisine: siteConfig.cuisine,
    menu: absoluteUrl("/menu"),
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [siteConfig.links.instagram, siteConfig.links.facebook],
    potentialAction: {
      "@type": "OrderAction",
      target: absoluteUrl("/encomendas"),
      deliveryMethod: "https://schema.org/OnSitePickup",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
