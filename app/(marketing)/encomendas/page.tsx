import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { OrderForm } from "@/components/forms/order-form";
import { generateMetadata } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = generateMetadata({
  title: "Preparar pedido por telefone",
  description:
    "Prepare a sua lista para pedir por telefone na A Grelha. Consulte pratos, notas e ligue para confirmar disponibilidade e levantamento em Samora Correia.",
  path: "/encomendas",
  image: "/stitch/home/whole-bird.jpg",
});

const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;

export default function EncomendasPage() {
  return (
    <main id="conteudo" className="bg-brand-cream px-4 py-14 md:px-6 md:py-20 soft-food-gradient">
      <BreadcrumbSchema items={[{ name: "Encomendas", path: "/encomendas" }]} />
      <section className="mx-auto max-w-5xl text-center">
        <p className="inline-flex rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-brand-red shadow-card ring-1 ring-brand-brown/10">
          Preparar pedido
        </p>
        <h1 className="mt-5 font-headline text-[clamp(3rem,8vw,7rem)] leading-[0.96] tracking-[-0.04em] text-brand-black">
          A encomenda é confirmada por telefone.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-brown md:text-xl">
          Esta página serve para organizar o que quer pedir antes da chamada. A equipa confirma disponibilidade, preço final e hora de levantamento pelo telefone.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-4 font-semibold text-white shadow-warm">
            <Phone aria-hidden="true" size={20} />
            Ligar {siteConfig.phone}
          </a>
          <Link href="/menu" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-brand-brown shadow-card ring-1 ring-brand-brown/10 hover:text-brand-red">
            Ver menu completo
          </Link>
        </div>
      </section>
      <OrderForm />
    </main>
  );
}
