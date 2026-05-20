import Image from "next/image";
import Link from "next/link";
import { Flame, MessageCircle, Phone, Timer } from "lucide-react";
import { siteConfig } from "@/config/site";

const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;
const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Olá A Grelha, quero encomendar takeaway para levantar no restaurante."
)}`;
const heroVideoSources = [
  { src: "/stitch/home/hero-loop.webm", type: "video/webm" },
  { src: "/stitch/home/hero-loop.mp4", type: "video/mp4" },
];

const highlights = [
  {
    icon: Flame,
    title: "Take-away",
    text: "peça e levante",
  },
  {
    icon: Timer,
    title: "Recolha",
    text: "combine a hora",
  },
];

export function HeroSection() {
  return (
    <section className="ag-hero relative isolate overflow-hidden bg-brand-black text-white md:bg-brand-cream md:text-brand-black md:min-h-[620px]">
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/stitch/home/whole-bird.jpg"
        >
          {heroVideoSources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,123,58,0.08),transparent_36%),linear-gradient(180deg,rgba(10,8,6,0.18)_0%,rgba(10,8,6,0.48)_50%,rgba(10,8,6,0.82)_100%)]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.08]" />
      </div>

      <div className="ag-hero-media relative hidden aspect-[2.42/1] w-full overflow-hidden md:absolute md:inset-y-0 md:right-0 md:block md:aspect-auto">
        <Image
          src="/stitch/home/whole-bird.jpg"
          alt="Frango no churrasco e grelhados preparados na A Grelha"
          fill
          priority
          sizes="(min-width: 768px) 65vw, 100vw"
          className="object-cover object-[50%_50%] md:object-[55%_52%]"
        />
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-brand-cream via-brand-cream/34 to-transparent md:block"
          aria-hidden="true"
        />
      </div>

      <div className="ag-hero-copy relative z-10 flex min-h-[var(--ag-mobile-section-h)] flex-col items-center justify-center px-5 py-8 text-center md:h-full md:min-h-0 md:items-start md:px-0 md:pb-0 md:pt-[clamp(72px,12vh,130px)] md:text-left">
        <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-white/82 backdrop-blur md:hidden">
          Churrasqueira · Samora Correia
        </p>

        <h1 className="text-balance text-[2.45rem] font-extrabold leading-[0.94] tracking-[-0.045em] text-white md:font-headline md:text-[clamp(3.3rem,5.2vw,6.2rem)] md:font-bold md:leading-[0.92] md:tracking-[-0.045em] md:text-brand-black">
          <span className="block md:hidden">Brasa forte.</span>
          <span className="block md:hidden">Churrasco</span>
          <span className="block text-[#ff704c] md:hidden">para levar.</span>
          <span className="hidden md:block">Brasa.</span>
          <span className="hidden whitespace-nowrap md:block">Sabor. Tradição.</span>
          <em className="hidden font-normal italic text-brand-red md:block">A Grelha.</em>
        </h1>

        <p className="mx-auto mt-3 max-w-[29ch] text-[0.93rem] font-semibold leading-[1.45] text-white/84 md:mx-0 md:mt-[clamp(14px,1.45vw,22px)] md:max-w-[38ch] md:text-[clamp(0.84rem,1.06vw,1.04rem)] md:font-normal md:leading-[1.5] md:text-brand-brown">
          A Grelha é uma churrasqueira e take-away em Samora Correia. Encomende por telefone ou WhatsApp e levante no restaurante.
        </p>

        <div className="mt-6 flex w-full max-w-[320px] flex-col gap-3 md:mt-[clamp(18px,2vw,30px)] md:max-w-none md:flex-row md:gap-4">
          <Link
            href="/menu"
            className="inline-flex h-12 w-full items-center justify-center rounded-[16px] bg-white px-5 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-brand-black shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition hover:bg-[#f2f1ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
          >
            Ver menu
          </Link>
          <a
            href={phoneHref}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[16px] bg-brand-red px-5 text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_16px_34px_rgba(198,69,44,0.28)] transition hover:bg-[#b73c20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
          >
            Ligar agora
            <Phone aria-hidden="true" size={15} />
          </a>
          <a
            href={whatsappHref}
            className="hidden h-[clamp(38px,3.1vw,46px)] items-center justify-center gap-2 rounded-[3px] bg-brand-red px-[clamp(20px,2.15vw,34px)] text-[0.64rem] font-extrabold uppercase tracking-[0.075em] text-white shadow-[0_12px_24px_rgba(201,71,38,0.22)] transition hover:bg-[#b73c20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:inline-flex"
          >
            Encomendar por WhatsApp
            <MessageCircle aria-hidden="true" size={15} />
          </a>
          <Link
            href="/menu"
            className="hidden h-[clamp(38px,3.1vw,46px)] items-center justify-center rounded-[3px] border border-brand-black/35 bg-brand-white/72 px-[clamp(20px,2.15vw,34px)] text-[0.64rem] font-extrabold uppercase tracking-[0.075em] text-brand-black transition hover:border-brand-red hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:inline-flex"
          >
            Ver cardápio
          </Link>
        </div>

        <div className="ag-hero-highlights mt-auto hidden grid-cols-2 md:grid">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="min-w-0">
                <div className="flex items-center gap-4 text-brand-black">
                  <Icon aria-hidden="true" size={28} strokeWidth={2} className="shrink-0" />
                  <span className="h-px w-full bg-brand-black/30" />
                </div>
                <h2 className="mt-3 text-[0.62rem] font-extrabold uppercase leading-[1.15] tracking-[0.06em] text-brand-black">
                  {item.title}
                </h2>
                <p className="mt-1 text-[0.64rem] leading-[1.45] text-brand-black/74">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="ag-hero-float absolute z-20 hidden rounded-[9px] border border-brand-brown/12 bg-brand-white p-[clamp(10px,1.05vw,15px)] shadow-[0_15px_42px_rgba(55,33,23,0.18)] lg:block">
        <div className="grid grid-cols-[clamp(92px,11vw,160px)_1fr] items-center gap-[clamp(14px,1.8vw,26px)]">
          <div className="relative aspect-[1.28/1] overflow-hidden rounded-[6px] bg-brand-brown/10">
            <Image
              src="/stitch/home/hero.jpg"
              alt="Grelhado no carvão com chama viva"
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="font-headline text-[clamp(1rem,1.55vw,1.6rem)] font-bold uppercase leading-none tracking-[-0.01em] text-brand-black">
              Combo Grelha
            </p>
            <p className="mt-2 text-[clamp(0.66rem,0.84vw,0.84rem)] leading-[1.35] text-brand-brown">
              Picanha ou frango com batata frita, em doses para 1 ou 2 pessoas.
            </p>
            <div className="mt-[clamp(10px,1.3vw,18px)] flex items-center justify-between gap-4">
              <p className="font-headline text-[clamp(0.95rem,1.35vw,1.35rem)] font-bold text-brand-red">desde 8,00 €</p>
              <Link
                href="/menu#combos"
                className="inline-flex h-[clamp(31px,2.8vw,40px)] items-center justify-center rounded-[3px] bg-brand-red px-[clamp(17px,2.1vw,32px)] text-[0.58rem] font-extrabold uppercase tracking-[0.075em] text-white transition hover:bg-[#b73c20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
              >
                Ver combos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
