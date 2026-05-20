import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ChevronRight,
  Flame,
  MessageCircle,
  ShoppingCart,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { absoluteUrl, generateMetadata } from "@/config/seo";
import { clientSeoData } from "@/config/client-seo";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { AboutSnapController } from "@/components/sections/about-snap-controller";

export const metadata: Metadata = generateMetadata({
  title: "Sobre a churrasqueira A Grelha",
  description:
    "Conheça a A Grelha: churrasqueira e take-away em Samora Correia com pedidos pelo site, WhatsApp ou telefone, grelhados no carvão e levantamento no balcão.",
  path: "/sobre",
  image: "/stitch/sobre/about-hero-flame.webp",
});

const whatsappHref = clientSeoData.contact.whatsappHref;
const reviewsHref = clientSeoData.links.googleReviews;

const aboutFaqs = [
  {
    question: "Quem é a A Grelha?",
    answer: `${clientSeoData.business.name} é uma ${clientSeoData.business.category.toLowerCase()} em ${clientSeoData.nap.locality}, focada em frango no churrasco, grelhados no carvão, acompanhamentos e pedidos para levantamento.`,
  },
  {
    question: "Como faço uma encomenda?",
    answer:
      "Pode adicionar produtos ao pedido no site e enviar a mensagem gerada por WhatsApp. Se preferir, também pode ligar diretamente para confirmar o pedido.",
  },
  {
    question: "O pedido fica logo confirmado no site?",
    answer:
      "Não. O carrinho organiza a mensagem, mas disponibilidade, peso, preço final e hora de levantamento são confirmados pela equipa por WhatsApp ou telefone.",
  },
  {
    question: "Onde levanto o pedido?",
    answer: `O levantamento é no balcão em ${clientSeoData.nap.displayAddress}. Confirme sempre a hora antes de passar.`,
  },
  {
    question: "Posso deixar feedback depois?",
    answer:
      "Sim. Depois do levantamento, uma opinião no Google ajuda uma casa local a ser encontrada por mais pessoas da zona.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/sobre")}#faq`,
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const processSteps = [
  {
    icon: ShoppingCart,
    eyebrow: "01",
    title: "Escolhe no site",
    text: "Adiciona os produtos ao pedido: frango, grelhados, acompanhamentos ou combos.",
  },
  {
    icon: MessageCircle,
    eyebrow: "02",
    title: "Envia ou liga",
    text: "O carrinho prepara a mensagem de WhatsApp. Se for mais rápido, liga diretamente.",
  },
  {
    icon: Flame,
    eyebrow: "03",
    title: "Vai para a grelha",
    text: "A equipa confirma disponibilidade, peso, preço final e hora antes de preparar.",
  },
  {
    icon: Star,
    eyebrow: "04",
    title: "Levanta e avalia",
    text: "Recolhes no balcão e podes deixar uma opinião para ajudar a casa local.",
  },
];

function BackgroundImage({ src, priority = false, className = "object-cover" }: { src: string; priority?: boolean; className?: string }) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      fill
      priority={priority}
      sizes="100vw"
      className={className}
    />
  );
}

export default function SobrePage() {
  return (
    <main id="conteudo" className="about-mobile-snap relative bg-[#14100d] text-white">
      <BreadcrumbSchema items={[{ name: "Sobre", path: "/sobre" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section id="historia" className="about-snap-section about-hero-section relative isolate overflow-hidden">
        <BackgroundImage src="/stitch/sobre/about-hero-flame.webp" priority className="object-cover object-[58%_50%]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(229,88,45,0.20),transparent_34%),linear-gradient(90deg,rgba(12,9,7,0.90)_0%,rgba(12,9,7,0.56)_48%,rgba(12,9,7,0.18)_100%),linear-gradient(180deg,rgba(12,9,7,0.08)_0%,rgba(12,9,7,0.24)_52%,rgba(12,9,7,0.74)_100%)]" />
        <div className="relative z-10 flex h-full items-end px-4 pb-[clamp(1.15rem,3.2svh,1.75rem)] pt-4">
          <div className="about-reveal w-full max-w-[21.5rem]">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/38 bg-black/18 px-3 py-2 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md">
              <Flame aria-hidden="true" size={14} strokeWidth={1.9} />
              Quem é a A Grelha
            </p>
            <h1 className="mt-4 max-w-[9.4ch] font-headline text-[clamp(2.95rem,12.7vw,4.55rem)] leading-[0.84] tracking-[-0.06em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.30)]">
              Uma casa de grelha, não uma cadeia.
            </h1>
            <p className="mt-4 max-w-[20.5rem] text-[0.96rem] font-semibold leading-[1.48] text-white/86">
              Churrasqueira de bairro em Samora Correia. Frango no churrasco, grelhados no carvão e acompanhamentos feitos para levar para casa.
            </p>
            <div className="mt-5 grid gap-3">
              <a href="#processo" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand-red px-5 text-[0.82rem] font-extrabold text-white shadow-[0_18px_42px_rgba(198,69,44,0.34)] transition active:scale-[0.985]">
                Conhecer a história
                <ChevronRight aria-hidden="true" size={17} className="transition group-hover:translate-x-0.5" />
              </a>
              <Link href="/menu" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/48 bg-black/16 px-5 text-[0.82rem] font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition active:scale-[0.985]">
                Ver menu
                <UtensilsCrossed aria-hidden="true" size={17} />
              </Link>
            </div>
            <a href="#processo" className="mt-5 flex flex-col items-center gap-1.5 text-center text-[0.64rem] font-semibold text-white/58">
              <span className="about-scroll-cue flex h-8 w-8 items-center justify-center rounded-full border border-white/28 bg-black/18 backdrop-blur-md">
                <ArrowDown aria-hidden="true" size={14} />
              </span>
              Deslize para explorar
            </a>
          </div>
        </div>
      </section>

      <section id="processo" className="about-snap-section about-process-section relative isolate overflow-hidden bg-[#f3e8db] text-brand-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(198,69,44,0.14),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(207,155,74,0.26),transparent_36%)]" />
        <div className="relative z-10 flex h-full flex-col justify-center px-4 py-[clamp(1.35rem,3.8svh,2rem)]">
          <div className="about-reveal">
            <p className="inline-flex rounded-full bg-brand-red px-3.5 py-2 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white shadow-card">
              Como funciona
            </p>
            <h2 className="mt-3 max-w-[9ch] font-headline text-[clamp(2.55rem,11vw,4rem)] leading-[0.86] tracking-[-0.055em] text-brand-black">
              Do carrinho ao carvão.
            </h2>
            <p className="mt-3 max-w-[20.5rem] text-[0.9rem] font-bold leading-[1.42] text-brand-brown">
              O site organiza o pedido e prepara a mensagem. A equipa confirma tudo antes de meter na grelha.
            </p>
          </div>

          <div className="relative mt-4 grid gap-2 pl-1">
            <span className="absolute bottom-9 left-[1.43rem] top-9 w-px bg-gradient-to-b from-brand-red/20 via-brand-red/22 to-transparent" aria-hidden="true" />
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="about-motion-item relative grid grid-cols-[2.35rem_1fr] gap-2.5 rounded-[1rem] border border-brand-brown/10 bg-white/76 p-2.5 shadow-[0_16px_34px_rgba(70,43,29,0.095)] backdrop-blur"
                  style={{ animationDelay: `${120 + index * 70}ms` }}
                >
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff5ee] text-brand-red shadow-[0_8px_20px_rgba(198,69,44,0.10),inset_0_1px_0_rgba(255,255,255,0.85)]">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.9} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-brand-red/78">{step.eyebrow}</span>
                      <span className="h-px flex-1 bg-brand-brown/10" />
                    </div>
                    <h3 className="mt-0.5 text-[0.98rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-black">{step.title}</h3>
                    <p className="mt-0.5 text-[0.74rem] font-semibold leading-[1.34] text-brand-brown/78">{step.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="about-snap-section about-faq-section relative isolate overflow-hidden bg-[#fff8f2] text-brand-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(198,69,44,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.62),rgba(243,232,219,0.92))]" />
        <div className="relative z-10 flex h-full flex-col justify-center px-4 py-5">
          <div className="about-reveal">
            <p className="inline-flex rounded-full bg-brand-red px-3 py-2 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white shadow-card">
              FAQs
            </p>
            <h2 className="mt-3 max-w-[9ch] font-headline text-[clamp(2.6rem,11vw,4.05rem)] leading-[0.86] tracking-[-0.055em] text-brand-black">
              Perguntas rápidas.
            </h2>
          </div>

          <div className="mt-4 grid gap-2.5">
            {aboutFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="about-motion-item group rounded-[1.05rem] border border-brand-brown/10 bg-white/88 shadow-[0_14px_30px_rgba(70,43,29,0.09)] backdrop-blur"
                style={{ animationDelay: `${120 + index * 55}ms` }}
              >
                <summary className="grid min-h-12 cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-3 px-3.5 py-3 text-[0.9rem] font-extrabold leading-tight text-brand-black marker:hidden">
                  {faq.question}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff3ec] text-brand-red transition group-open:rotate-90">
                    <ChevronRight aria-hidden="true" size={15} />
                  </span>
                </summary>
                <p className="px-3.5 pb-3.5 text-[0.82rem] font-semibold leading-[1.48] text-brand-brown/82">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <a href={reviewsHref} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-black px-3 text-[0.76rem] font-extrabold text-white shadow-card">
              <Star aria-hidden="true" size={15} />
              Deixar opinião
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#35bd55] px-3 text-[0.76rem] font-extrabold text-white shadow-[0_16px_34px_rgba(53,189,85,0.22)]">
              <MessageCircle aria-hidden="true" size={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <AboutSnapController />
    </main>
  );
}
