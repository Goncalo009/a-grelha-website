export function ReviewQuote() {
  return (
    <section className="relative overflow-hidden bg-brand-red px-4 py-24 text-center text-white md:px-6">
      <div className="absolute inset-0 noise-overlay opacity-[0.15]" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <blockquote className="font-headline text-[clamp(2.4rem,6vw,5.5rem)] uppercase leading-[0.95]">
          “Frango bem tostado, batata a sério e serviço rápido. É daqueles sítios que resolvem o jantar.”
        </blockquote>
        <p className="mt-8 inline-block border-t-4 border-white pt-4 text-sm font-extrabold uppercase tracking-[0.2em] md:text-base">
          Cliente local, Porto Alto
        </p>
      </div>
    </section>
  );
}
