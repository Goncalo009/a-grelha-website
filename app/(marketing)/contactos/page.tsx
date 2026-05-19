import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  Leaf,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { absoluteUrl, generateMetadata } from "@/config/seo";
import { clientSeoData } from "@/config/client-seo";
import { siteConfig } from "@/config/site";
import { AppScreen } from "@/components/ui/app-screen";
import { ContactSnapController } from "@/components/sections/contact-snap-controller";
import { LocationMap } from "@/components/sections/location-map";

export const metadata: Metadata = generateMetadata({
  title: "Contactos, localização e FAQs",
  description:
    "Contactos da A Grelha: telefone, WhatsApp, direções, morada de levantamento em Samora Correia e respostas rápidas antes de encomendar.",
  path: "/contactos",
  image: "/stitch/contactos/map.jpg",
});

const phoneHref = clientSeoData.contact.phoneHref;
const whatsappHref = clientSeoData.contact.whatsappHref;
const directionsHref = "#localizacao";
const addressLine = clientSeoData.nap.displayAddress;

const contactActions = [
  {
    href: whatsappHref,
    label: "WhatsApp",
    detail: "Mensagem",
    icon: MessageCircle,
    tone: "green",
    external: true,
  },
  {
    href: phoneHref,
    label: "Ligar",
    detail: clientSeoData.nap.phoneCompact,
    icon: Phone,
    tone: "red",
    external: false,
  },
  {
    href: directionsHref,
    label: "Direções",
    detail: "Mapa",
    icon: Navigation,
    tone: "red",
    external: false,
  },
];

const locationActions = [
  {
    href: siteConfig.links.maps,
    label: "Abrir direções",
    detail: "Navegue até nós",
    icon: Navigation,
    external: true,
  },
  {
    href: whatsappHref,
    label: "Pedir por WhatsApp",
    detail: "Fale connosco",
    icon: MessageCircle,
    external: true,
    green: true,
  },
  {
    href: phoneHref,
    label: "Ligar agora",
    detail: siteConfig.phone,
    icon: Phone,
  },
];

const scheduleRows = [
  {
    icon: Clock3,
    label: clientSeoData.openingHours.statusLabel,
    value: clientSeoData.openingHours.compactLabel,
    note: clientSeoData.openingHours.closedLabel,
  },
  {
    icon: BriefcaseBusiness,
    label: "Take-away",
    value: "Encomende antes de passar",
    note: "Levantamento no balcão",
  },
];

const faqs = [
  {
    question: "Como faço uma encomenda para levantar?",
    answer:
      "Pode ligar para a A Grelha ou enviar mensagem por WhatsApp. Diga o que pretende encomendar e combine a hora de levantamento no restaurante. O pedido fica confirmado diretamente por telefone ou mensagem.",
  },
  {
    question: "Onde fica a A Grelha?",
    answer: `A A Grelha fica em ${addressLine}. Nesta página pode abrir direções no mapa e navegar diretamente até ao ponto de levantamento.`,
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer: `A A Grelha está aberta de segunda a sábado no almoço (${clientSeoData.openingHours.lunch}) e jantar (${clientSeoData.openingHours.dinner}). Domingo está fechada. Confirme por telefone ou WhatsApp antes de passar.`,
  },
  {
    question: "Posso pagar ou concluir a encomenda online?",
    answer:
      "Neste momento o site ajuda a escolher e iniciar o contacto, mas a confirmação final da encomenda é feita com a equipa da A Grelha por telefone ou WhatsApp.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/contactos")}#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function ContactQuickButton({ action }: { action: (typeof contactActions)[number] }) {
  const Icon = action.icon;
  const isGreen = action.tone === "green";

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className="group flex min-h-[82px] flex-col items-center justify-center gap-2 rounded-[20px] border border-[#eadfd5] bg-[#fffdf9]/88 px-2.5 text-center shadow-[0_14px_30px_rgba(70,43,29,0.08)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(70,43,29,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c6452c]"
    >
      <span
        className={
          isGreen
            ? "flex h-9 w-9 items-center justify-center rounded-full bg-[#35bd55] text-white shadow-[0_10px_22px_rgba(53,189,85,0.22)]"
            : "flex h-9 w-9 items-center justify-center rounded-full bg-[#d94832] text-white shadow-[0_10px_22px_rgba(217,72,50,0.22)]"
        }
      >
        <Icon aria-hidden="true" size={20} strokeWidth={2.05} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.8rem] font-extrabold leading-tight tracking-[-0.035em] text-[#25211e] min-[390px]:text-[0.84rem]">{action.label}</span>
        <span className="mt-0.5 block truncate text-[0.6rem] font-semibold leading-tight text-[#25211e]/62 min-[390px]:text-[0.64rem]">{action.detail}</span>
      </span>
    </a>
  );
}

function LocationActionRow({ action }: { action: (typeof locationActions)[number] }) {
  const Icon = action.icon;

  return (
    <a
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noreferrer" : undefined}
      className="group grid min-h-[62px] grid-cols-[46px_1fr_auto] items-center gap-3 border-t border-[#eadfd5] px-4 transition duration-200 first:border-t-0 hover:bg-[#fff3ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#c6452c]"
    >
      <span
        className={
          action.green
            ? "flex h-10 w-10 items-center justify-center rounded-full bg-[#35bd55] text-white shadow-[0_10px_22px_rgba(53,189,85,0.2)]"
            : "flex h-10 w-10 items-center justify-center rounded-full bg-[#d94832] text-white shadow-[0_10px_22px_rgba(217,72,50,0.22)]"
        }
      >
        <Icon aria-hidden="true" size={22} strokeWidth={2} />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.88rem] font-extrabold leading-tight tracking-[-0.02em] text-[#25211e]">{action.label}</span>
        <span className="mt-0.5 block truncate text-[0.72rem] font-semibold leading-tight text-[#25211e]/58">{action.detail}</span>
      </span>
      <ChevronRight aria-hidden="true" size={20} strokeWidth={1.8} className="text-[#d94832] transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function FaqSchemaScript() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />;
}

export default function ContactosPage() {
  return (
    <main id="conteudo" className="bg-[#f2f1ef]">
      <FaqSchemaScript />
      <ContactSnapController />
      <AppScreen className="bg-[#fbfaf7]">
        <div className="contact-mobile-snap relative px-4 pb-[calc(var(--ag-mobile-action-bar-h)+1.25rem)] pt-0 md:px-5 md:pt-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_4%,rgba(217,72,50,0.06),transparent_32%),radial-gradient(circle_at_86%_30%,rgba(238,230,218,0.62),transparent_34%)]" />

          <div className="relative md:space-y-10">
            <section id="contactos-rapidos" aria-labelledby="contactos-title" className="contact-snap-section contact-hero-section scroll-mt-20">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#d94832]">Contactos</p>
              <div className="mt-2 flex items-end justify-between gap-5 min-[390px]:mt-3">
                <div>
                  <h1 id="contactos-title" className="max-w-[13ch] font-headline text-[clamp(1.78rem,8vw,2.22rem)] font-bold leading-[0.92] tracking-[-0.055em] text-[#25211e]">
                    Horários e contactos<span className="text-[#d94832]">.</span>
                  </h1>
                  <p className="mt-2 max-w-[29ch] text-[0.82rem] font-medium leading-[1.35] text-[#25211e]/66 min-[390px]:mt-3 min-[390px]:text-[0.9rem]">
                    Confirme antes de vir e combine a hora de levantamento.
                  </p>
                </div>
                <span className="mb-3 hidden h-10 w-10 rotate-[-18deg] items-center justify-center text-[#d94832]/58 min-[390px]:flex" aria-hidden="true">
                  <Leaf size={30} strokeWidth={1.55} />
                </span>
              </div>

              <div className="mt-3 overflow-hidden rounded-[22px] border border-[#eadfd5] bg-[#fffdf9]/88 shadow-[0_16px_34px_rgba(70,43,29,0.08)] backdrop-blur min-[390px]:mt-4">
                <div className="px-4 pb-2 pt-4 min-[390px]:px-5 min-[390px]:pt-5">
                  <h2 className="text-[0.92rem] font-extrabold tracking-[-0.015em] text-[#d94832]">Horário de funcionamento</h2>
                </div>
                <div className="grid gap-2 px-4 pb-4 min-[390px]:px-5 min-[390px]:pb-5">
                  {scheduleRows.map((row) => {
                    const Icon = row.icon;

                    return (
                      <div key={row.label} className="grid grid-cols-[34px_1fr] items-start gap-3 rounded-[16px] bg-[#f8f0e8]/74 px-3.5 py-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#25211e]/10 bg-[#fffdf9]/80 text-[#25211e]/70">
                          <Icon aria-hidden="true" size={18} strokeWidth={1.85} />
                        </span>
                        <span>
                          <span className="block text-[0.78rem] font-extrabold leading-tight text-[#25211e]/72">{row.label}</span>
                          <span className="mt-1 block text-[0.86rem] font-extrabold leading-tight tracking-[-0.025em] text-[#25211e]">{row.value}</span>
                          <span className="mt-1 block text-[0.68rem] font-semibold leading-tight text-[#25211e]/54">{row.note}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2.5 min-[390px]:mt-4 min-[390px]:gap-3">
                {contactActions.map((action) => (
                  <ContactQuickButton key={action.label} action={action} />
                ))}
              </div>
            </section>

            <section id="localizacao" aria-labelledby="localizacao-title" className="contact-snap-section contact-location-section scroll-mt-20">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#d94832]">Localização</p>
              <h2 id="localizacao-title" className="mt-3 max-w-[13ch] font-headline text-[2.16rem] font-bold leading-[0.92] tracking-[-0.055em] text-[#25211e]">
                A Grelha em Samora Correia<span className="text-[#d94832]">.</span>
              </h2>

              <div className="relative mt-6 overflow-hidden rounded-[22px] border border-[#eadfd5] bg-[#efe6da] shadow-[0_18px_42px_rgba(70,43,29,0.12)]">
                <LocationMap compact className="contact-map--hide-static-address h-[258px] min-h-[258px]" />
                <div className="absolute inset-x-3 bottom-3 grid grid-cols-[38px_1fr] items-center gap-3 rounded-[18px] border border-white/70 bg-[#fffdf9]/94 px-4 py-3 shadow-[0_14px_32px_rgba(70,43,29,0.14)] backdrop-blur">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full text-[#d94832]">
                    <MapPin aria-hidden="true" size={26} strokeWidth={1.9} />
                  </span>
                  <address className="not-italic text-[0.82rem] font-semibold leading-5 text-[#25211e]/78">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.postalCode} {siteConfig.address.locality}
                  </address>
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-[22px] border border-[#eadfd5] bg-[#fffdf9]/90 shadow-[0_16px_34px_rgba(70,43,29,0.08)] backdrop-blur">
                {locationActions.map((action) => (
                  <LocationActionRow key={action.label} action={action} />
                ))}
              </div>

              <div className="contact-location-note mt-4 grid grid-cols-[44px_1fr] items-center gap-3 rounded-[18px] border border-[#eadfd5] bg-[#f6eadc] px-4 py-3 shadow-[0_12px_28px_rgba(70,43,29,0.08)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#25211e]/12 bg-[#fffdf9]/60 text-[#25211e]">
                  <BriefcaseBusiness aria-hidden="true" size={22} strokeWidth={1.85} />
                </span>
                <p>
                  <span className="block text-[0.86rem] font-extrabold tracking-[-0.02em] text-[#25211e]">Take-away disponível</span>
                  <span className="mt-0.5 block text-[0.72rem] font-semibold leading-4 text-[#25211e]/60">
                    Faça a sua encomenda e levante no balcão.
                  </span>
                </p>
              </div>
            </section>

            <section id="faq" aria-labelledby="faq-title" className="contact-snap-section contact-faq-section scroll-mt-20 pb-2">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#d94832]">FAQs</p>
              <h2 id="faq-title" className="mt-3 font-headline text-[2rem] font-bold leading-[0.94] tracking-[-0.055em] text-[#25211e]">
                Perguntas rápidas antes de encomendar<span className="text-[#d94832]">.</span>
              </h2>

              <div className="mt-5 grid gap-3">
                {faqs.map((faq, index) => (
                  <article key={faq.question} className="rounded-[20px] border border-[#eadfd5] bg-[#fffdf9]/88 p-4 shadow-[0_12px_28px_rgba(70,43,29,0.07)] backdrop-blur">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff3ec] text-[0.72rem] font-extrabold text-[#d94832]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[0.92rem] font-extrabold leading-snug tracking-[-0.02em] text-[#25211e]">{faq.question}</h3>
                        <p className="mt-2 text-[0.82rem] font-medium leading-5 text-[#25211e]/66">{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </AppScreen>
    </main>
  );
}
