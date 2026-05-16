import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FooterEnhanced() {
  return (
    <footer className="relative z-20 border-t-[12px] border-brand-red bg-[#1f1b13] px-4 py-14 text-[#fff8f2] md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-headline text-6xl uppercase leading-none text-brand-red md:text-7xl">
            A Grelha
          </p>
          <p className="mt-4 max-w-md text-base font-bold leading-relaxed text-[#e3d9cc]">
            Churrasqueira de bairro no Porto Alto: carvão aceso, frango no ponto,
            grelhados feitos sem pressa e encomendas preparadas para levantar.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/encomendas"
              className="inline-flex items-center gap-2 bg-brand-red px-5 py-3 font-headline text-xl uppercase text-white shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <ShoppingBag aria-hidden="true" size={19} />
              Encomendar
            </Link>
            <a
              href={siteConfig.links.maps}
              className="inline-flex items-center gap-2 border-4 border-[#e3d9cc] px-5 py-3 font-extrabold uppercase tracking-wider text-[#e3d9cc] transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <MapPin aria-hidden="true" size={18} />
              Direções
            </a>
          </div>
        </div>

        <nav aria-label="Links de rodapé" className="grid content-start gap-3">
          <p className="font-headline text-2xl uppercase text-brand-red">Navegação</p>
          <Link className="font-extrabold uppercase tracking-widest text-[#e3d9cc] hover:text-white" href="/menu">
            Menu
          </Link>
          <Link className="font-extrabold uppercase tracking-widest text-[#e3d9cc] hover:text-white" href="/sobre">
            A nossa história
          </Link>
          <Link className="font-extrabold uppercase tracking-widest text-[#e3d9cc] hover:text-white" href="/contactos">
            Contactos
          </Link>
          <Link className="font-extrabold uppercase tracking-widest text-[#e3d9cc] hover:text-white" href="/blog">
            Notas da grelha
          </Link>
        </nav>

        <address className="not-italic">
          <p className="font-headline text-2xl uppercase text-brand-red">Porto Alto</p>
          <p className="mt-3 font-bold text-[#e3d9cc]">{siteConfig.address.locality}, {siteConfig.address.region}</p>
          <p className="mt-2 font-bold text-[#e3d9cc]">{siteConfig.openingHoursLabel}</p>
          <a className="mt-4 inline-flex items-center gap-2 font-extrabold text-white hover:text-brand-red" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
            <Phone aria-hidden="true" size={18} />
            {siteConfig.phone}
          </a>
          <div className="mt-5 flex gap-4">
            <a href={siteConfig.links.instagram} aria-label="Instagram da A Grelha" className="text-[#e3d9cc] hover:text-white">
              <Instagram aria-hidden="true" />
            </a>
            <a href={siteConfig.links.facebook} aria-label="Facebook da A Grelha" className="text-[#e3d9cc] hover:text-white">
              <Facebook aria-hidden="true" />
            </a>
          </div>
        </address>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-[#e3d9cc]/70">
        © {new Date().getFullYear()} A Grelha. Informação sujeita a confirmação em loja.
      </p>
    </footer>
  );
}
