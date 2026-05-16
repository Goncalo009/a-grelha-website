import Link from "next/link";
import Image from "next/image";

const MENU_ITEMS = [
  {
    title: "Frango piri-piri",
    description: "Assado no carvão, pincelado no fim e cortado para levar sem perder suco.",
    price: "10,50 €",
    image: "/stitch/menu/frango-piri-piri.jpg",
    alt: "Frango piri-piri no churrasco"
  },
  {
    title: "Chouriço assado",
    description: "Entrada de balcão, lume vivo e fatias para dividir antes do prato principal.",
    price: "6,50 €",
    image: "/stitch/menu/chourico.jpg",
    alt: "Chouriço assado"
  },
  {
    title: "Rissóis da casa",
    description: "Crocantes, quentes e bons para começar enquanto a grelha faz o resto.",
    price: "1,80 €",
    image: "/stitch/menu/rissos.jpg",
    alt: "Rissóis caseiros"
  }
];

export function FeaturedMenu() {
  return (
    <section id="menu" className="bg-brand-black px-4 py-24 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="font-extrabold uppercase tracking-[0.2em] text-brand-red">Mais pedidos</p>
          <h2 className="mt-3 font-headline text-6xl uppercase leading-[0.86] md:text-8xl">
            Sai da grelha
          </h2>
        </div>
        <Link href="/menu" className="self-start bg-white px-6 py-4 font-headline text-2xl uppercase text-brand-black shadow-[5px_5px_0_#d91a2a] hover:-translate-y-1 md:self-auto">
          Menu completo
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {MENU_ITEMS.map((item) => (
          <article key={item.title} className="relative flex flex-col bg-[#fff8f2] text-brand-black shadow-[10px_10px_0_rgba(217,26,42,0.55)] transition-transform duration-300 hover:-translate-y-1">
            <div className="relative aspect-[4/3] bg-[#ddd]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 30vw, 92vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-headline text-4xl uppercase leading-none">{item.title}</h3>
              <p className="mt-3 flex-1 text-base font-bold leading-relaxed text-[#5d3f3d]">{item.description}</p>
              <p className="mt-5 font-headline text-3xl text-brand-red">{item.price}</p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
