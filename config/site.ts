export const siteConfig = {
  name: "A Grelha",
  title: "A Grelha — Churrasqueira no Porto Alto",
  description:
    "Churrasqueira tradicional no Porto Alto com frango no churrasco, grelhados no carvão, petiscos portugueses, takeaway e encomendas.",
  url: "https://a-grelha.pt",
  ogImage: "/stitch/home/hero.jpg",
  locale: "pt_PT",
  address: {
    street: "Rua do Rosmaninho, Lote 2, Loja Dta",
    locality: "Porto Alto",
    region: "Santarém",
    postalCode: "2135-085",
    country: "PT",
  },
  phone: "+351 924 114 604",
  email: "geral@a-grelha.pt",
  openingHoursLabel: "Todos os dias: confirmar horário por telefone antes de levantar",
  priceRange: "€€",
  cuisine: ["Portuguesa", "Churrasqueira", "Grelhados no carvão"],
  links: {
    instagram: "https://www.instagram.com/agrelha_takeaway/",
    facebook: "https://www.facebook.com/p/A-Grelha-do-porto-alto-100083930862067/",
    maps: "https://www.google.com/maps/search/?api=1&query=A%20Grelha%20Rua%20do%20Rosmaninho%20Lote%202%20Porto%20Alto",
  },
  creator: { name: "A Grelha", email: "geral@a-grelha.pt" },
  keywords: [
    "A Grelha Porto Alto",
    "churrasqueira Porto Alto",
    "restaurante Porto Alto",
    "frango no churrasco Porto Alto",
    "grelhados no carvão",
    "takeaway Porto Alto",
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
