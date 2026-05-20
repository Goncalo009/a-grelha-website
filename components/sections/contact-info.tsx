import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Flame, MessageCircle, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { LocationMap } from "@/components/sections/location-map";

const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Olá A Grelha, quero encomendar takeaway para levantar no restaurante."
)}`;
const compactAddressLine = `${siteConfig.address.street}, ${siteConfig.address.locality}`;

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
    detail: compactAddressLine,
    icon: Navigation,
    external: true,
  },
];

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
                <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.23em] text-brand-red">Morada e contacto direto</span>
                <span className="mt-1 block text-sm font-medium text-brand-black/64">Telefone, WhatsApp e direções num só lugar.</span>
              </p>
            </div>
          </div>
        </aside>

        <div className="contact-phone-panel mx-auto flex h-full w-full max-w-[470px] flex-col md:max-h-[720px] md:rounded-[40px] md:border md:border-white/70 md:bg-white/64 md:p-5 md:shadow-[0_28px_80px_rgba(28,28,28,0.13)]">
          <div className="contact-phone-content flex min-h-0 flex-1 flex-col md:rounded-[30px] md:bg-[#f7f4f0]/88 md:px-5 md:py-6 md:shadow-inner">
            <div className="text-center">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-brand-red">Contacto e localização</p>
              <h2 id="nap-title" className="mx-auto mt-[clamp(0.35rem,0.9svh,0.5rem)] max-w-[12ch] font-headline text-[clamp(1.85rem,8.3vw,2.35rem)] font-bold leading-[0.93] tracking-[-0.055em] text-brand-black md:mt-2 md:max-w-[10ch] md:text-[3.35rem]">
                A Grelha em Samora Correia.
              </h2>
              <p className="mx-auto mt-[clamp(0.45rem,1.1svh,0.75rem)] max-w-[28ch] text-[clamp(0.78rem,3.5vw,0.92rem)] font-medium leading-[1.32] text-brand-black/68 md:mt-3 md:text-[1.02rem] md:leading-[1.45]">
                Encomende por telefone ou WhatsApp e combine a hora de levantamento.
              </p>
            </div>

            <div
              id="localizacao"
              className="contact-map-shell relative block overflow-hidden rounded-[22px] bg-[#efe6da] shadow-[0_17px_38px_rgba(70,43,29,0.12)] md:mt-5"
            >
              <LocationMap className="contact-map--hide-static-address" />
            </div>

            <div className="mt-3 min-h-0 md:mt-4">
              <ContactActionCard />
            </div>
          </div>
        </div>

        <aside className="hidden h-full flex-col justify-center gap-9 py-7 md:flex">
          <div>
            <SectionLabel>Detalhe do mapa</SectionLabel>
            <div className="mt-7 overflow-hidden rounded-[25px] bg-[#efe6da] shadow-[0_22px_48px_rgba(70,43,29,0.13)]">
              <LocationMap compact />
            </div>
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
