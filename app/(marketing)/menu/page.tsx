import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import menu from "@/content/menu.json";
import { generateMetadata } from "@/config/seo";

export const metadata: Metadata = generateMetadata({
  title: "Menu de grelhados e takeaway",
  description:
    "Veja o menu da A Grelha no Porto Alto: entradas, frango no churrasco, grelhados no carvão, pratos portugueses e sobremesas caseiras.",
  path: "/menu",
  image: "/stitch/menu/frango-piri-piri.jpg",
});

const categoryImages: Record<string, string> = {
  entradas: "/stitch/menu/azeitonas.jpg",
  pratos: "/stitch/menu/frango-piri-piri.jpg",
  grelhadas: "/stitch/home/whole-bird.jpg",
  sobremesas: "/stitch/menu/rissos.jpg",
};

export default function MenuPage() {
  return (
    <main id="conteudo" className="bg-[#e3d9cc]">
      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="inline-block -rotate-2 bg-white px-4 py-2 font-extrabold uppercase tracking-[0.2em] text-brand-red shadow-[4px_4px_0_#1f1b13]">
              Menu para mesa e takeaway
            </p>
            <h1 className="mt-6 font-headline text-[clamp(5rem,13vw,11rem)] uppercase leading-[0.82] text-brand-black">
              Da grelha para a mesa
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-[#3b3327] md:text-xl">
              Pratos simples, feitos no carvão, com acompanhamentos de casa.
              Os preços podem variar em loja conforme época e disponibilidade.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/encomendas" className="bg-brand-red px-7 py-5 text-center font-headline text-3xl uppercase text-white shadow-[6px_6px_0_#1f1b13]">
                Encomendar
              </Link>
              <Link href="/contactos" className="border-4 border-brand-black bg-[#fff8f2] px-7 py-5 text-center font-headline text-3xl uppercase text-brand-black">
                Horários
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-8 border-white bg-white shadow-[16px_16px_0_#1f1b13] lg:rotate-2">
            <Image
              src="/stitch/menu/frango-piri-piri.jpg"
              alt="Frango piri-piri da A Grelha"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <nav aria-label="Categorias do menu" className="sticky top-[84px] z-30 border-y-4 border-brand-black bg-[#fff8f2] px-4 py-3 md:px-6">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
          {menu.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 bg-brand-black px-4 py-2 font-extrabold uppercase tracking-widest text-white hover:bg-brand-red focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <section className="px-4 py-16 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-14">
          {menu.categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-36">
              <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
                <div>
                  <div className="relative aspect-square overflow-hidden bg-white p-3 shadow-[10px_10px_0_#1f1b13]">
                    <Image
                      src={categoryImages[category.id]}
                      alt={`${category.name} da A Grelha`}
                      fill
                      sizes="(min-width: 1024px) 28vw, 92vw"
                      className="object-cover p-3"
                    />
                  </div>
                  <h2 className="mt-8 font-headline text-6xl uppercase leading-none text-brand-red md:text-7xl">
                    {category.name}
                  </h2>
                  <p className="mt-2 font-bold text-[#5d3f3d]">{category.description}</p>
                </div>

                <div className="grid content-start gap-4">
                  {category.dishes.map((dish) => (
                    <article key={dish.id} className="grid gap-3 border-4 border-brand-black bg-[#fff8f2] p-5 shadow-[6px_6px_0_rgba(31,27,19,0.18)] sm:grid-cols-[1fr_auto]">
                      <div>
                        <h3 className="font-headline text-3xl uppercase leading-none text-brand-black md:text-4xl">
                          {dish.name}
                        </h3>
                        <p className="mt-2 font-bold leading-relaxed text-[#5d3f3d]">{dish.description}</p>
                      </div>
                      <p className="font-headline text-4xl text-brand-red">{dish.price.toFixed(2).replace(".", ",")} €</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
