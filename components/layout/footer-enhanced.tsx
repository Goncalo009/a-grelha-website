"use client";

import Link from "next/link";

export default function FooterEnhanced() {
  return (
    <footer className="w-full flex flex-col items-center gap-8 px-10 pt-20 pb-10 bg-[#1f1b13] border-t-8 border-double border-[#d91a2a]/30 relative z-20">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        <Link className="font-body font-extrabold uppercase tracking-widest text-stone-500 hover:text-[#d91a2a] transition-all" href="/sobre">A NOSSA HISTÓRIA</Link>
        <Link className="font-body font-extrabold uppercase tracking-widest text-stone-500 hover:text-[#d91a2a] transition-all" href="/menu">THE GRILL MENU</Link>
        <Link className="font-body font-extrabold uppercase tracking-widest text-stone-500 hover:text-[#d91a2a] transition-all" href="/contactos">RESERVE</Link>
        <a className="font-body font-extrabold uppercase tracking-widest text-stone-500 hover:text-[#d91a2a] transition-all" href="#">INSTAGRAM</a>
      </div>
      <div className="font-headline text-[15vw] text-[#d91a2a] opacity-10 leading-none select-none">FOGO &amp; BRASA</div>
      <p className="font-body font-extrabold uppercase tracking-widest text-[#e3d9cc] text-center text-sm md:text-base">
        © {new Date().getFullYear()} FOGO &amp; BRASA | ESTABLISHED IN FIRE
      </p>
    </footer>
  );
}
