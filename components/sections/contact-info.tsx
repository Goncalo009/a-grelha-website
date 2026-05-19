import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Flame, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Olá A Grelha, quero encomendar takeaway para levantar no restaurante."
)}`;

const actionRows = [
  {
    href: whatsappHref,
    label: "Pedir por WhatsApp",
    detail: "Contacto direto para encomendas",
    icon: MessageCircle,
    external: true,
  },
  {
    href: phoneHref,
    label: "Ligar agora",
    detail: siteConfig.phone,
    icon: Phone,
  },
  {
    href: siteConfig.links.maps,
    label: "Abrir direções",
    detail: "Rua do Rosmaninho, Porto Alto",
    icon: Navigation,
    external: true,
  },
];

function MapIllustration({ compact = false }: { compact?: boolean }) {
  const roads = [
    "M-20 116 C 88 84, 164 54, 278 20 C 360 -4, 430 -14, 528 -38",
    "M-26 178 C 85 154, 186 146, 300 106 C 394 73, 456 48, 548 32",
    "M-10 248 C 88 222, 168 210, 260 182 C 354 154, 438 124, 540 112",
    "M-12 328 C 93 304, 190 286, 292 244 C 382 207, 452 188, 546 172",
    "M-16 418 C 94 365, 180 345, 270 310 C 358 276, 442 250, 540 224",
    "M88 -34 C 134 64, 166 145, 198 244 C 226 334, 260 392, 302 500",
    "M184 -30 C 210 60, 232 142, 262 222 C 300 326, 346 400, 392 512",
    "M290 -28 C 292 76, 302 158, 326 248 C 350 342, 382 426, 432 518",
    "M396 -24 C 374 78, 370 164, 386 252 C 404 348, 426 430, 452 522",
    "M-18 62 L 538 456",
    "M8 502 C 112 438, 210 384, 314 318 C 404 260, 474 214, 548 162",
    "M58 -24 C 138 66, 226 152, 342 228 C 418 278, 472 326, 540 386",
    "M-18 290 C 78 288, 158 300, 252 332 C 340 362, 418 388, 536 390",
    "M-18 370 C 82 338, 166 320, 260 292 C 346 266, 434 236, 540 202",
  ];

  return (
    <div className={compact ? "contact-map contact-map--compact" : "contact-map"} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 430" preserveAspectRatio="none">
        <defs>
          <filter id="map-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.1" floodColor="#a7a39c" floodOpacity="0.18" />
          </filter>
        </defs>
        <rect width="520" height="430" fill="#f3eee6" />
        <path d="M74 0 C100 36, 104 72, 90 104 C82 124, 92 142, 120 150 C142 156, 152 174, 142 198 C128 232, 132 264, 170 290" fill="none" stroke="#d8e5ef" strokeWidth="16" strokeLinecap="round" opacity="0.95" />
        <g filter="url(#map-soft-shadow)" fill="none" strokeLinecap="round">
          {roads.map((d, index) => (
            <path key={index} d={d} stroke="#ffffff" strokeWidth={index % 4 === 0 ? 7 : 4.8} />
          ))}
          <path d="M-20 410 C 108 354, 202 330, 306 330 C 396 330, 464 344, 546 362" stroke="#ffffff" strokeWidth="12" />
          <path d="M-18 86 C 78 128, 168 164, 270 202 C 368 238, 446 286, 548 344" stroke="#ffffff" strokeWidth="6" />
        </g>
        <g fill="none" stroke="#ddd8d0" strokeWidth="1.15" opacity="0.9">
          <path d="M18 138 L504 28" />
          <path d="M0 232 L520 72" />
          <path d="M116 0 L480 430" />
          <path d="M232 0 L318 430" />
          <path d="M0 338 L520 278" />
          <path d="M344 0 L78 430" />
        </g>
      </svg>
      <span className="contact-map-label contact-map-label--porto">Porto Alto</span>
      <span className="contact-map-label contact-map-label--rua">Rua do Rosmaninho</span>
      <span className="contact-map-road-badge">MS14</span>
      <span className="contact-map-pin" />
    </div>
  );
}

function ActionRow({ action }: { action: (typeof actionRows)[number] }) {
  const Icon = action.icon;

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className="contact-action-row group"
    >
      <span className="contact-action-icon">
        <Icon aria-hidden="true" size={27} strokeWidth={1.95} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.92rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-black md:text-[0.98rem]">
          {action.label}
        </span>
        <span className="mt-1 block truncate text-[0.78rem] font-medium leading-tight text-brand-black/68 md:text-[0.82rem]">
          {action.detail}
        </span>
      </span>
      <ArrowRight
        aria-hidden="true"
        size={24}
        strokeWidth={1.7}
        className="text-brand-red transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  );
}

function ContactActionCard({ detail = false }: { detail?: boolean }) {
  return (
    <div className={detail ? "contact-action-card contact-action-card--detail" : "contact-action-card"}>
      {actionRows.map((action) => (
        <ActionRow key={action.label} action={action} />
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.23em] text-brand-black">
      <span>{children}</span>
      <span className="h-px flex-1 bg-brand-brown/16" />
    </div>
  );
}

export function ContactInfo() {
  const addressLine = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.locality}`;

  return (
    <section id="contactos" className="ag-contact-section relative isolate bg-[#f7f4f0] text-brand-black" aria-labelledby="nap-title">
      <div className="noise-overlay absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_16%,rgba(238,230,218,0.86),transparent_35%),radial-gradient(circle_at_74%_72%,rgba(217,72,50,0.07),transparent_28%)]" />

      <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-1 items-center gap-5 px-4 py-3 md:grid-cols-[0.86fr_1.02fr_0.9fr] md:gap-8 md:px-8 lg:px-11">
        <aside className="hidden h-full flex-col justify-between py-7 md:flex">
          <div>
            <Image src="/logo/a-grelha-logo.svg" alt="A Grelha" width={668} height={132} className="h-auto w-[172px]" />
            <h2 className="mt-11 max-w-[9ch] font-headline text-[clamp(3.35rem,4.8vw,5.75rem)] font-bold leading-[0.91] tracking-[-0.055em] text-brand-black">
              Contacto & Localização
            </h2>
            <p className="mt-5 text-[0.7rem] font-extrabold uppercase tracking-[0.35em] text-brand-red">
              Ponto de levantamento
            </p>
            <p className="mt-7 max-w-[27ch] text-[1.02rem] font-medium leading-7 text-brand-black/68">
              Um ecrã direto para saber onde estamos, pedir por WhatsApp, ligar e abrir direções.
            </p>
          </div>

          <div className="space-y-5 border-t border-brand-brown/14 pt-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-brand-brown/10 bg-white/56 shadow-[0_12px_30px_rgba(70,43,29,0.08)]">
                <Flame aria-hidden="true" size={23} strokeWidth={1.75} className="text-brand-red" />
              </span>
              <p>
                <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.23em] text-brand-red">Brasa que fala por si</span>
                <span className="mt-1 block text-sm font-medium text-brand-black/64">Sabor de verdade. Feedbacks reais.</span>
              </p>
            </div>
          </div>
        </aside>

        <div className="contact-phone-panel mx-auto flex h-full w-full max-w-[470px] flex-col md:max-h-[720px] md:rounded-[40px] md:border md:border-white/70 md:bg-white/64 md:p-5 md:shadow-[0_28px_80px_rgba(28,28,28,0.13)]">
          <div className="contact-phone-content flex min-h-0 flex-1 flex-col md:rounded-[30px] md:bg-[#f7f4f0]/88 md:px-5 md:py-6 md:shadow-inner">
            <div className="text-center">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-brand-red">Contacto e localização</p>
              <h2 id="nap-title" className="mx-auto mt-2 max-w-[10ch] font-headline text-[clamp(2.42rem,10.5vw,3.55rem)] font-bold leading-[0.91] tracking-[-0.055em] text-brand-black md:text-[3.35rem]">
                A Grelha no Porto Alto.
              </h2>
              <p className="mx-auto mt-3 max-w-[28ch] text-[0.96rem] font-medium leading-[1.45] text-brand-black/68 md:text-[1.02rem]">
                Encomende por telefone ou WhatsApp e combine a hora de levantamento.
              </p>
            </div>

            <a
              id="localizacao"
              href={siteConfig.links.maps}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir direções para A Grelha no Google Maps"
              className="contact-map-shell group relative mt-4 block overflow-hidden rounded-[22px] bg-[#efe6da] shadow-[0_17px_38px_rgba(70,43,29,0.12)] outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4f0] md:mt-5"
            >
              <MapIllustration />
              <address className="contact-address-card not-italic">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center text-brand-red">
                  <MapPin aria-hidden="true" size={31} strokeWidth={1.7} />
                </span>
                <span className="min-w-0 text-left">
                  <strong className="block text-[0.98rem] font-extrabold leading-tight text-brand-black">{siteConfig.name}</strong>
                  <span className="mt-1 block text-[0.86rem] font-medium leading-snug text-brand-black/78">{addressLine}</span>
                </span>
              </address>
            </a>

            <div className="mt-3 min-h-0 md:mt-4">
              <ContactActionCard />
            </div>
          </div>
        </div>

        <aside className="hidden h-full flex-col justify-center gap-9 py-7 md:flex">
          <div>
            <SectionLabel>Detalhe do mapa</SectionLabel>
            <a
              href={siteConfig.links.maps}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir localização da A Grelha"
              className="mt-7 block overflow-hidden rounded-[25px] bg-[#efe6da] shadow-[0_22px_48px_rgba(70,43,29,0.13)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              <MapIllustration compact />
            </a>
          </div>

          <div>
            <SectionLabel>Detalhe do action card</SectionLabel>
            <div className="mt-6">
              <ContactActionCard detail />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
