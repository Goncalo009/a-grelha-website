import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateMetadata } from "@/config/seo";

export const metadata: Metadata = generateMetadata({
  title: "Sobre a churrasqueira",
  description:
    "Conheça a A Grelha, churrasqueira de proximidade no Porto Alto focada em carvão, frango no churrasco, grelhados e takeaway.",
  path: "/sobre",
  image: "/stitch/sobre/hero-bg.jpg",
});

export default function SobrePage() {
  return (
    <main id="conteudo" className="bg-[#e3d9cc]">
      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative order-last aspect-[4/5] overflow-hidden border-8 border-white bg-white shadow-[16px_16px_0_#1f1b13] lg:order-first lg:-rotate-2">
            <Image
              src="/stitch/sobre/hero-bg.jpg"
              alt="Ambiente de churrasqueira tradicional com grelha acesa"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="inline-block -rotate-2 bg-white px-4 py-2 font-extrabold uppercase tracking-[0.2em] text-brand-red shadow-[4px_4px_0_#1f1b13]">
              A nossa história
            </p>
            <h1 className="mt-6 font-headline text-[clamp(5rem,12vw,10rem)] uppercase leading-[0.82] text-brand-black">
              Uma casa com cheiro a carvão
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-[#3b3327] md:text-xl">
              A Grelha nasceu para servir comida portuguesa sem complicar:
              produtos frescos, lume forte, tempero direto e atendimento de
              vizinhança. É o sítio para comer sem cerimónia ou levar o jantar
              pronto para casa.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f2] px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            {
              title: "Carvão primeiro",
              text: "A grelha manda no ritmo: calor certo, viragem à mão e carne descansada antes de sair.",
              image: "/stitch/sobre/polaroid-ritual.jpg",
              alt: "Ritual de preparação na grelha",
            },
            {
              title: "Pratos conhecidos",
              text: "Frango, entremeada, bife, sardinhas e entradas que pertencem à mesa portuguesa.",
              image: "/stitch/sobre/polaroid-meat.jpg",
              alt: "Carne grelhada sobre carvão",
            },
            {
              title: "Para a família",
              text: "Doses pensadas para partilhar, encomendas para levantar e serviço sem floreados.",
              image: "/stitch/sobre/polaroid-family.jpg",
              alt: "Refeição familiar com grelhados",
            },
          ].map((item) => (
            <article key={item.title} className="bg-white p-3 pb-8 shadow-[10px_10px_0_rgba(31,27,19,0.18)]">
              <div className="relative aspect-square">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 30vw, 92vw" className="object-cover" />
              </div>
              <h2 className="mt-6 font-headline text-4xl uppercase leading-none text-brand-red">{item.title}</h2>
              <p className="mt-3 font-bold leading-relaxed text-[#5d3f3d]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 text-center md:px-6">
        <h2 className="mx-auto max-w-4xl font-headline text-5xl uppercase leading-none text-brand-black md:text-8xl">
          O carvão acende cedo. O resto chega à mesa.
        </h2>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/menu" className="bg-brand-red px-7 py-5 font-headline text-3xl uppercase text-white shadow-[6px_6px_0_#1f1b13]">
            Ver menu
          </Link>
          <Link href="/contactos" className="border-4 border-brand-black bg-[#fff8f2] px-7 py-5 font-headline text-3xl uppercase text-brand-black">
            Visitar
          </Link>
        </div>
      </section>
    </main>
  );
}
