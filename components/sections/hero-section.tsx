import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#e3d9cc] px-4 py-14 md:px-6 md:py-20">
      <div className="absolute right-[6%] top-20 z-0 hidden rotate-[15deg] gap-4 opacity-10 md:flex" aria-hidden="true">
        <div className="h-[420px] w-5 bg-black" />
        <div className="h-[420px] w-5 bg-black" />
        <div className="h-[420px] w-5 bg-black" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-block -rotate-2 bg-[#fff8f2] px-4 py-2 font-extrabold uppercase tracking-[0.2em] text-brand-red shadow-[4px_4px_0_#1f1b13]">
            Churrasqueira no Porto Alto
          </p>
          <h1 className="font-headline text-[clamp(4.6rem,12vw,10rem)] uppercase leading-[0.82] text-brand-black">
            Carvão<br />
            <span className="text-brand-red">frango</span><br />
            mesa cheia
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-relaxed text-[#3b3327] md:text-xl lg:mx-0">
            A Grelha serve o clássico que se procura quando não há tempo para
            cozinhar: frango no churrasco, grelhados no carvão, acompanhamentos
            caseiros e encomendas prontas a levantar.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/encomendas"
              className="inline-flex items-center justify-center bg-brand-red px-7 py-5 font-headline text-3xl uppercase text-white shadow-[6px_6px_0_#1f1b13] transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              Encomendar
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center border-4 border-brand-black bg-[#fff8f2] px-7 py-5 font-headline text-3xl uppercase text-brand-black transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              Ver menu
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden border-8 border-white bg-[#fff8f2] shadow-[18px_18px_0_#1f1b13] lg:rotate-2">
          <Image
            src="/stitch/home/hero.jpg"
            alt="Frango no churrasco e grelhados preparados na A Grelha"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-brand-black/90 px-5 py-4 text-left text-white">
            <p className="font-headline text-3xl uppercase leading-none text-brand-red">Takeaway diário</p>
            <p className="mt-1 text-sm font-extrabold uppercase tracking-wider">Peça cedo para garantir o frango acabado de sair.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
