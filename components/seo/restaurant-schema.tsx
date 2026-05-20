import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/config/seo";
import { clientSeoData } from "@/config/client-seo";

export function RestaurantSchema() {
  const restaurantId = `${siteConfig.url}/#restaurant`;
  const websiteId = `${siteConfig.url}/#website`;
  const sameAs = [siteConfig.links.instagram, siteConfig.links.facebook].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.title,
        url: siteConfig.url,
        inLanguage: "pt-PT",
        publisher: {
          "@id": restaurantId,
        },
      },
      {
        "@type": ["Restaurant", "LocalBusiness"],
        "@id": restaurantId,
        name: siteConfig.name,
        legalName: clientSeoData.business.legalOrPublicName,
        url: siteConfig.url,
        description: siteConfig.description,
        image: [absoluteUrl("/stitch/home/hero.jpg"), absoluteUrl("/stitch/menu/frango-piri-piri.jpg")],
        logo: absoluteUrl("/logo/a-grelha-logo.svg"),
        telephone: siteConfig.phone,
        email: siteConfig.email,
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
        areaServed: ["Samora Correia", "Porto Alto", "Benavente"],
        knowsAbout: ["frango no churrasco", "grelhados no carvão", "takeaway", "churrasqueira portuguesa"],
        sameAs,
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
