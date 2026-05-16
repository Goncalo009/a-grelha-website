import Image from "next/image";
import Link from "next/link";

export function AboutStory() {
  return (
    <section id="sobre" className="px-4 py-24 md:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
      <div className="w-full bg-white p-3 pb-12 shadow-[12px_12px_0_#1f1b13] md:-rotate-2">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/stitch/home/polaroid.jpg"
            alt="Grelha a carvão com carne a assar"
            fill
            sizes="(min-width: 768px) 42vw, 92vw"
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <p className="font-extrabold uppercase tracking-[0.2em] text-brand-red">A casa</p>
        <h2 className="mt-3 font-headline text-6xl uppercase leading-[0.86] text-brand-black md:text-8xl">
          O cheiro a carvão não engana.
        </h2>
        <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-[#3b3327] md:text-xl">
          A Grelha é feita para a rotina real do Porto Alto: almoço rápido,
          jantar de família, frango para levar, febras, entremeada, sardinhas
          quando é época e aquele molho que pede pão à parte.
        </p>
        <p className="mt-4 max-w-2xl text-lg font-bold leading-relaxed text-[#5d3f3d]">
          Sem truques de cadeia. Só uma cozinha de proximidade, grelha quente e
          pratos pensados para sair bem à mesa ou na caixa de takeaway.
        </p>
        <Link
          href="/sobre"
          className="mt-8 inline-flex border-b-4 border-brand-red font-headline text-3xl uppercase text-brand-red hover:text-brand-black"
        >
          Conhecer a história
        </Link>
      </div>
      </div>
    </section>
  );
}
