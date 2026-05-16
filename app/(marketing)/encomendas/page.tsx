import { Metadata } from "next";
import { OrderForm } from "@/components/forms/order-form";
import { generateMetadata } from "@/config/seo";

export const metadata: Metadata = generateMetadata({
  title: "Encomendas online",
  description:
    "Faça a sua encomenda online na A Grelha. Escolha frango no churrasco, grelhados e acompanhamentos para levantar no Porto Alto.",
  path: "/encomendas",
  image: "/stitch/home/whole-bird.jpg",
});

export default function EncomendasPage() {
  return (
    <main id="conteudo" className="bg-[#e3d9cc] px-4 py-14 md:px-6 md:py-20">
      <section className="mx-auto max-w-5xl text-center">
        <p className="inline-block -rotate-2 bg-white px-4 py-2 font-extrabold uppercase tracking-[0.2em] text-brand-red shadow-[4px_4px_0_#1f1b13]">
          Takeaway
        </p>
        <h1 className="mt-6 font-headline text-[clamp(4.5rem,11vw,9rem)] uppercase leading-[0.82] text-brand-black">
          Faça a sua encomenda
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-relaxed text-[#3b3327]">
          Envie o pedido e a equipa confirma por telefone. Para entregas,
          horários especiais ou alergénios, use o campo de observações.
        </p>
      </section>
      <OrderForm />
    </main>
  );
}
