export const clientSeoData = {
  business: {
    name: "A Grelha",
    legalOrPublicName: "A Grelha",
    type: ["Restaurant", "LocalBusiness"],
    category: "Churrasqueira / take-away",
    shortDescription:
      "Churrasqueira de proximidade em Samora Correia com frango no churrasco, grelhados no carvão, acompanhamentos de casa e takeaway por telefone.",
    serviceModel: "Take-away com encomenda/levantamento confirmado por telefone ou WhatsApp.",
    priceRange: "€€",
    cuisine: ["Portuguesa", "Churrasqueira", "Grelhados no carvão"],
  },
  nap: {
    street: "R. da Orquídia",
    locality: "Samora Correia",
    region: "Santarém",
    postalCode: "2136-083",
    country: "PT",
    displayAddress: "R. da Orquídia, 2136-083 Samora Correia",
    phone: "+351 924 114 604",
    phoneCompact: "924 114 604",
    email: "geral@a-grelha.pt",
  },
  geo: {
    latitude: 38.921387,
    longitude: -8.879094,
  },
  openingHours: {
    statusLabel: "Aberto de segunda a sábado",
    compactLabel: "Seg.–Sáb. 12:00–14:00 / 18:00–21:00",
    lunch: "12:00–14:00",
    dinner: "18:00–21:00",
    closedLabel: "Domingo fechado",
    note: "Confirme sempre por telefone ou WhatsApp antes de passar, porque a disponibilidade pode mudar durante o dia.",
    rows: [
      { days: "Segunda a sábado", hours: "12:00–14:00 / 18:00–21:00" },
      { days: "Domingo", hours: "Fechado" },
    ],
    schema: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "12:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "18:00",
        closes: "21:00",
      },
    ],
  },
  contact: {
    phoneHref: "tel:+351924114604",
    whatsappHref:
      "https://wa.me/351924114604?text=Ol%C3%A1%20A%20Grelha%2C%20quero%20encomendar%20takeaway%20e%20confirmar%20a%20hora%20de%20levantamento.",
    defaultWhatsappMessage: "Olá A Grelha, quero encomendar takeaway e confirmar a hora de levantamento.",
  },
  links: {
    website: "https://a-grelha.pt",
    instagram: "https://www.instagram.com/agrelha_takeaway/",
    facebook: "https://www.facebook.com/p/A-Grelha-do-porto-alto-100083930862067/",
    maps:
      "https://www.google.com/maps/search/?api=1&query=A%20Grelha%2C%20R.%20da%20Orqu%C3%ADdia%2C%202136-083%20Samora%20Correia%2C%20Portugal",
    googleReviews:
      "https://www.google.com/maps/search/?api=1&query=A%20Grelha%2C%20R.%20da%20Orqu%C3%ADdia%2C%202136-083%20Samora%20Correia%2C%20Portugal",
  },
  evidence: {
    hoursSources: [
      {
        source: "Restaurant Guru",
        url: "https://pt.restaurantguru.com/Take-way-A-grelha-Samora-Correia",
        observed: "Segunda a sábado 12:00–14:00 / 18:00–21:00; domingo fechado.",
      },
      {
        source: "BellaCiao.pt",
        url: "https://bellaciao.pt/restaurante/take-away-a-grelha/",
        observed: "Aberto de segunda-feira a sábado: almoço 12:00–14:00, jantar 18:00–21:00; encerrado domingo.",
      },
    ],
    napNote:
      "Agregadores externos divergem entre R. da Orquídia e R. do Rosmaninho; este site usa R. da Orquídia como NAP canónico para manter consistência com a ficha/links atuais do projeto.",
    lastReviewed: "2026-05-19",
  },
} as const;

export type ClientSeoData = typeof clientSeoData;
