import { clientSeoData } from "./client-seo";

export const siteConfig = {
  name: clientSeoData.business.name,
  title: "A Grelha — Churrasqueira em Samora Correia",
  description: clientSeoData.business.shortDescription,
  url: clientSeoData.links.website,
  ogImage: "/stitch/home/hero.jpg",
  locale: "pt_PT",
  address: {
    street: clientSeoData.nap.street,
    locality: clientSeoData.nap.locality,
    region: clientSeoData.nap.region,
    postalCode: clientSeoData.nap.postalCode,
    country: clientSeoData.nap.country,
  },
  coordinates: {
    latitude: clientSeoData.geo.latitude,
    longitude: clientSeoData.geo.longitude,
  },
  phone: clientSeoData.nap.phone,
  email: clientSeoData.nap.email,
  openingHoursLabel: clientSeoData.openingHours.note,
  priceRange: clientSeoData.business.priceRange,
  cuisine: clientSeoData.business.cuisine,
  links: {
    instagram: clientSeoData.links.instagram,
    facebook: clientSeoData.links.facebook,
    maps: clientSeoData.links.maps,
    googleReviews: clientSeoData.links.googleReviews,
  },
  creator: { name: clientSeoData.business.name, email: clientSeoData.nap.email },
  keywords: [
    "A Grelha Samora Correia",
    "churrasqueira Samora Correia",
    "restaurante Samora Correia",
    "frango no churrasco Samora Correia",
    "grelhados no carvão",
    "takeaway Samora Correia",
    "sardinhas assadas",
  ],
};

export const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/menu", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/encomendas", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/contactos", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sobre", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.5, changeFrequency: "monthly" as const },
];
