import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="px-8 md:px-16 py-8 flex justify-between items-center absolute top-0 left-0 w-full z-[100] bg-transparent">
      <Link href="/">
        <div className="font-headline text-2xl md:text-3xl text-brand-red bg-white px-4 py-2 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform cursor-pointer">
          FOGO
        </div>
      </Link>
      <nav className="hidden md:flex gap-8 items-center">
        <Link href="/sobre" className="text-brand-black font-[800] uppercase text-lg tracking-widest hover:text-brand-red transition-colors duration-200">
          Story
        </Link>
        <Link href="/menu" className="text-brand-black font-[800] uppercase text-lg tracking-widest hover:text-brand-red transition-colors duration-200">
          Menu
        </Link>
        <Link href="/contactos" className="text-brand-black font-[800] uppercase text-lg tracking-widest hover:text-brand-red transition-colors duration-200">
          Contact
        </Link>
      </nav>
    </header>
  );
}
