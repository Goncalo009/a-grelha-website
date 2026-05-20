import Image from "next/image";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

const proofImages = [
  {
    src: "/stitch/home/hero.jpg",
    alt: "Frango no churrasco preparado na A Grelha",
  },
  {
    src: "/stitch/menu/chourico.jpg",
    alt: "Chouriço assado para entrada",
  },
  {
    src: "/stitch/home/polaroid.jpg",
    alt: "Grelha a carvão com comida a assar",
  },
];

export function ReviewQuote() {
  return (
    <section className="bg-brand-cream px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-white p-6 shadow-card ring-1 ring-brand-brown/10 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">Opiniões</p>
          <h2 className="mt-3 font-headline text-5xl leading-[0.98] tracking-[-0.035em] text-brand-black md:text-7xl">
            Opiniões de quem passa pela Grelha
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-brown">
            Para ler comentários atualizados de clientes, consulte a ficha da A Grelha no Google. Use também o mapa para confirmar o percurso antes de levantar a encomenda.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.links.maps}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-olive px-5 py-3 font-semibold text-white shadow-card"
            >
              <MapPin aria-hidden="true" size={18} />
              Ver no Google Maps
            </a>
            <a
              href={siteConfig.links.maps}
              className="inline-flex items-center justify-center rounded-full bg-brand-beige px-5 py-3 font-semibold text-brand-brown shadow-card hover:text-brand-red"
            >
              Abrir direções
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4" aria-label="Fotografias de comida da A Grelha">
          {proofImages.map((image, index) => (
            <div
              key={image.src}
              className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-brand-brown/10 shadow-card ring-1 ring-brand-brown/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 18vw, 30vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
