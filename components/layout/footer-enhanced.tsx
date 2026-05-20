import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Flame,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Olá A Grelha, quero encomendar takeaway para levantar no restaurante."
)}`;
const mailHref = `mailto:${siteConfig.email}`;

const footerLinks = [
  { href: "/menu", label: "Cardápio" },
  { href: "/encomendas", label: "Encomendas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contactos", label: "Contactos" },
];

const foodTags = ["Frango no churrasco", "Grelhados no carvão", "Take-away", "Acompanhamentos"];

export default function FooterEnhanced() {
  return (
    <footer className="relative z-20 overflow-hidden bg-brand-black text-brand-cream">
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-brand-red blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-brand-gold blur-3xl" />
      </div>
      <div className="noise-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1260px] px-5 pb-28 pt-12 md:px-6 md:pb-12 md:pt-14">
        <div className="grid gap-11 border-b border-brand-white/10 pb-10 text-center lg:grid-cols-[1.22fr_0.72fr_0.95fr] lg:gap-14 lg:text-left">
          <div className="mx-auto flex max-w-[38rem] flex-col items-center lg:mx-0 lg:items-start">
            <p className="text-[0.66rem] font-extrabold uppercase tracking-[0.24em] text-brand-red">
              Churrasqueira · Samora Correia
            </p>
            <Link
              href="/"
              aria-label="A Grelha - voltar ao início"
              className="ag-wordmark mt-5 text-[clamp(2.35rem,14vw,5.65rem)] text-brand-cream transition hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:text-[clamp(2.35rem,5.8vw,5.65rem)]"
            >
              A Grelha
            </Link>
            <p className="mt-5 max-w-[36rem] text-balance text-[clamp(1.25rem,7vw,2rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-brand-white md:mt-6 md:text-[clamp(1.25rem,2.1vw,2rem)]">
              Brasa simples, comida direta e pedidos combinados sem complicar.
            </p>
            <p className="mt-5 max-w-[31rem] text-sm leading-6 text-brand-cream/74">
              Frango no churrasco, grelhados e acompanhamentos para levar. Ligue antes de passar para confirmar disponibilidade e hora de levantamento.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {foodTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-white/12 bg-brand-white/[0.04] px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.1em] text-brand-cream/72"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Links de rodapé" className="mx-auto w-full max-w-xs lg:mx-0 lg:pt-9">
            <p className="mb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-brand-red">Explorar</p>
            <div className="grid gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-11 items-center justify-center gap-2 border-b border-brand-white/10 py-2 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-brand-cream/82 transition hover:border-brand-red/60 hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:justify-between md:text-left"
                >
                  {link.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={15}
                    className="text-brand-red opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </nav>

          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:pt-9">
            <p className="mb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-brand-red">Contactos</p>
            <address className="not-italic">
              <a
                href={siteConfig.links.maps}
                className="group flex flex-col items-center gap-2 border-b border-brand-white/10 pb-4 text-center text-brand-cream/76 transition hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red sm:flex-row sm:justify-center sm:gap-3 lg:items-start lg:justify-start lg:text-left"
              >
                <MapPin aria-hidden="true" size={19} className="shrink-0 text-brand-red sm:mt-1" />
                <span className="text-sm leading-6">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.postalCode} {siteConfig.address.locality}, {siteConfig.address.region}
                </span>
              </a>

              <div className="grid border-b border-brand-white/10 py-4">
                <a
                  href={phoneHref}
                  className="flex min-h-11 items-center justify-center gap-3 text-sm font-semibold text-brand-cream/86 transition hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:justify-start"
                >
                  <Phone aria-hidden="true" size={18} className="shrink-0 text-brand-red" />
                  <span className="whitespace-nowrap">{siteConfig.phone}</span>
                </a>
                <a
                  href={mailHref}
                  className="flex min-h-11 items-center justify-center gap-3 text-sm font-semibold text-brand-cream/86 transition hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red lg:justify-start"
                >
                  <Mail aria-hidden="true" size={18} className="shrink-0 text-brand-red" />
                  <span className="whitespace-nowrap">{siteConfig.email}</span>
                </a>
              </div>
            </address>

            <p className="mt-4 text-center text-xs leading-5 text-brand-cream/58 lg:text-left">{siteConfig.openingHoursLabel}</p>

            <div className="mx-auto mt-6 grid max-w-xs gap-3 sm:max-w-none sm:grid-cols-2 lg:mx-0 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={whatsappHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-5 text-[0.68rem] font-extrabold uppercase tracking-[0.09em] text-white shadow-[0_14px_30px_rgba(201,71,38,0.22)] transition hover:bg-[#b73c20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <MessageCircle aria-hidden="true" size={17} />
                WhatsApp
              </a>
              <a
                href={siteConfig.links.maps}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-brand-white/16 bg-brand-white/[0.04] px-5 text-[0.68rem] font-extrabold uppercase tracking-[0.09em] text-brand-cream transition hover:border-brand-red/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
              >
                <MapPin aria-hidden="true" size={17} />
                Mapa
              </a>
            </div>
          </div>
        </div>

        <div className="grid justify-items-center gap-5 pt-6 text-center text-xs text-brand-cream/52 md:grid-cols-[1fr_auto_1fr] md:items-center md:justify-items-stretch md:text-left">
          <p className="max-w-[24rem] leading-5 md:max-w-none">© {new Date().getFullYear()} {siteConfig.name}. Preços e disponibilidade sujeitos a confirmação.</p>

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-red/70" aria-hidden="true" />
            <Flame aria-hidden="true" size={15} className="text-brand-red" />
            <span className="h-px w-8 bg-brand-red/70" aria-hidden="true" />
          </div>

          <div className="flex items-center justify-center gap-4 md:justify-end">
            <a
              href={siteConfig.links.instagram}
              aria-label="Instagram da A Grelha"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-white/10 text-brand-cream/68 transition hover:border-brand-red/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              <Instagram aria-hidden="true" size={18} />
            </a>
            <a
              href={siteConfig.links.facebook}
              aria-label="Facebook da A Grelha"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-white/10 text-brand-cream/68 transition hover:border-brand-red/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              <Facebook aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
