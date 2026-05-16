import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <section id="contactos" className="grid min-h-[520px] md:grid-cols-2">
      <div className="order-last flex flex-col justify-center bg-brand-black p-8 text-white md:order-first md:p-16">
        <p className="font-extrabold uppercase tracking-[0.2em] text-brand-red">Contactos</p>
        <h2 className="mt-3 font-headline text-[3.8rem] uppercase leading-[0.9] text-white md:text-7xl">
          Levante quente no Porto Alto
        </h2>
        <dl className="mt-8 grid gap-5 text-lg font-bold">
          <div>
            <dt className="font-extrabold uppercase tracking-widest text-brand-red">Morada</dt>
            <dd>
              {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.locality}
            </dd>
          </div>
          <div>
            <dt className="font-extrabold uppercase tracking-widest text-brand-red">Horário</dt>
            <dd>{siteConfig.openingHoursLabel}</dd>
          </div>
          <div>
            <dt className="font-extrabold uppercase tracking-widest text-brand-red">Telefone</dt>
            <dd><a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`} className="underline decoration-brand-red decoration-4 underline-offset-4">{siteConfig.phone}</a></dd>
          </div>
        </dl>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/encomendas"
            className="inline-flex justify-center bg-brand-red px-6 py-4 font-headline text-2xl uppercase text-white shadow-[5px_5px_0_#000] transition-transform hover:-translate-y-1"
          >
            Encomendar
          </Link>
          <a
            href={siteConfig.links.maps}
            className="inline-flex justify-center border-4 border-white px-6 py-4 font-headline text-2xl uppercase text-white transition-transform hover:-translate-y-1"
          >
            Direções
          </a>
        </div>
      </div>

      <div className="relative min-h-[360px] overflow-hidden bg-[#ccc] md:min-h-full">
        <Image
          src="/stitch/contactos/map.jpg"
          alt="Mapa ilustrativo da zona de Porto Alto para encontrar A Grelha"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale contrast-125"
        />
        <div
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 bg-brand-red shadow-[0_0_0_10px_rgba(217,26,42,0.22)]"
          aria-hidden="true"
        >
          <span className="sr-only">A Grelha no Porto Alto</span>
        </div>
      </div>
    </section>
  );
}
