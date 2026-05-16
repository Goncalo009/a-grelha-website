import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generateMetadata({
  title: "Contactos e horários",
  description:
    "Contactos, horário, direções e encomendas da A Grelha, churrasqueira no Porto Alto.",
  path: "/contactos",
  image: "/stitch/contactos/map.jpg",
});

export default function ContactosPage() {
  return (
    <main id="conteudo" className="bg-[#e3d9cc]">
      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-block -rotate-2 bg-white px-4 py-2 font-extrabold uppercase tracking-[0.2em] text-brand-red shadow-[4px_4px_0_#1f1b13]">
              Contactos
            </p>
            <h1 className="mt-6 font-headline text-[clamp(5rem,13vw,11rem)] uppercase leading-[0.82] text-brand-black">
              Onde está a grelha
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-[#3b3327] md:text-xl">
              Ligue para confirmar disponibilidade, faça a sua encomenda online
              ou abra direções para encontrar a A Grelha no Porto Alto.
            </p>
          </div>

          <div className="border-4 border-brand-black bg-[#fff8f2] p-6 shadow-[10px_10px_0_#1f1b13]">
            <address className="grid gap-6 not-italic">
              <div>
                <h2 className="font-headline text-4xl uppercase text-brand-red">Morada</h2>
                <p className="mt-2 text-xl font-bold text-brand-black">
                  {siteConfig.address.street}
                </p>
                <p className="mt-1 font-bold text-[#5d3f3d]">
                  {siteConfig.address.postalCode} {siteConfig.address.locality}, {siteConfig.address.region}
                </p>
              </div>
              <div>
                <h2 className="font-headline text-4xl uppercase text-brand-red">Horário</h2>
                <p className="mt-2 text-xl font-bold text-brand-black">{siteConfig.openingHoursLabel}</p>
              </div>
              <div>
                <h2 className="font-headline text-4xl uppercase text-brand-red">Telefone</h2>
                <a className="mt-2 inline-block text-xl font-extrabold text-brand-black underline decoration-brand-red decoration-4 underline-offset-4" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
                  {siteConfig.phone}
                </a>
              </div>
            </address>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link href="/encomendas" className="bg-brand-red px-6 py-4 text-center font-headline text-2xl uppercase text-white shadow-[5px_5px_0_#1f1b13]">
                Encomendar
              </Link>
              <a href={siteConfig.links.maps} className="border-4 border-brand-black bg-white px-6 py-4 text-center font-headline text-2xl uppercase text-brand-black">
                Direções
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid min-h-[520px] md:grid-cols-2">
        <div className="relative min-h-[360px] bg-white">
          <Image
            src="/stitch/contactos/map.jpg"
            alt="Mapa ilustrativo da zona de Porto Alto"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale contrast-125"
          />
        </div>
        <div className="relative min-h-[360px] bg-white">
          <Image
            src="/stitch/contactos/polaroid.jpg"
            alt="Prato de grelhados servido na A Grelha"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
