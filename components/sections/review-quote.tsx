export function ReviewQuote() {
  return (
    <section className="py-32 px-[5%] bg-brand-red text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.15]"></div>
      <div className="relative z-10">
        <div className="font-headline text-[clamp(2rem,5vw,4rem)] leading-[1.1] max-w-[1000px] mx-auto mb-8 uppercase">
          "The best damn chicken I've had since my trip to Lisbon in '98. The skin is crispy, the meat falls off the bone."
        </div>
        <div className="font-[700] text-[1.2rem] tracking-[2px] uppercase border-t-4 border-white inline-block pt-4">
          Marco D. — Local Guide
        </div>
      </div>
    </section>
  );
}
