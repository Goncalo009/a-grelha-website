'use client';

import Image from 'next/image';
import { Anton, Open_Sans, Epilogue } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const epilogue = Epilogue({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
});

export default function BlogPage() {
  return (
    <div className="min-h-screen relative bg-surface-dim font-body text-on-background overflow-x-hidden">
      <style>{`
        selection {
          background-color: #d91a2a;
          color: #fff;
        }
      `}</style>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:ital,wght@0,700;0,800;1,700;1,800&family=Epilogue:wght@400;700;900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        body {
          background-color: #e3d9cc;
          color: #1f1b13;
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          opacity: 0.06;
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        .grill-mark {
          height: 4px;
          background-color: #916f6c;
          opacity: 0.2;
          width: 100%;
          margin-bottom: 0.7rem;
        }

        .font-headline {
          font-family: 'Anton', sans-serif;
        }

        .font-body, .font-label {
          font-family: 'Open Sans', sans-serif;
        }

        .font-epilogue {
          font-family: 'Epilogue', sans-serif;
        }

        /* Color utilities */
        .bg-surface-dim { background-color: #e3d9cc; }
        .bg-surface-container-lowest { background-color: #ffffff; }
        .bg-surface-container-low { background-color: #fdf2e5; }
        .bg-surface-container { background-color: #f7ecdf; }
        .bg-surface-container-high { background-color: #f1e7d9; }
        .bg-surface-container-highest { background-color: #ebe1d4; }
        .bg-surface-bright { background-color: #fff8f2; }
        .bg-surface-variant { background-color: #ebe1d4; }
        .text-on-background { color: #1f1b13; }
        .text-on-surface { color: #1f1b13; }
        .text-on-surface-variant { color: #5d3f3d; }
        .bg-primary { background-color: #d91a2a; }
        .text-primary { color: #d91a2a; }
        .bg-primary-container { background-color: #ffdad6; }
        .text-on-primary { color: #ffffff; }
        .bg-on-primary { background-color: #410004; }
        .bg-on-primary-fixed { background-color: #410004; }
        .text-on-primary-fixed { color: #410004; }
        .bg-on-primary-fixed-variant { background-color: #930014; }
        .text-on-primary-container { color: #410004; }
        .bg-secondary { background-color: #5f5e5e; }
        .text-on-secondary { color: #ffffff; }
        .bg-secondary-container { background-color: #e5e2e1; }
        .bg-secondary-fixed { background-color: #e5e2e1; }
        .bg-secondary-fixed-dim { background-color: #c9c6c5; }
        .text-on-secondary-container { color: #656464; }
        .text-on-secondary-fixed { color: #1c1b1b; }
        .text-on-secondary-fixed-variant { color: #474646; }
        .bg-tertiary { background-color: #744f00; }
        .text-on-tertiary { color: #ffffff; }
        .bg-tertiary-container { background-color: #936600; }
        .text-on-tertiary-container { color: #281900; }
        .bg-tertiary-fixed { background-color: #ffdeac; }
        .bg-tertiary-fixed-dim { background-color: #ffba38; }
        .text-on-tertiary-fixed { color: #281900; }
        .text-on-tertiary-fixed-variant { color: #604100; }
        .bg-error { background-color: #ba1a1a; }
        .text-on-error { color: #ffffff; }
        .bg-error-container { background-color: #ffdad6; }
        .text-on-error-container { color: #93000a; }
        .bg-outline { background-color: #916f6c; }
        .border-outline { border-color: #916f6c; }
        .border-primary { border-color: #d91a2a; }
        .border-on-background { border-color: #1f1b13; }
        .bg-on-background { background-color: #1f1b13; }
        .text-surface-dim { color: #e3d9cc; }
      `}</style>

      {/* Noise background */}
      <div className="bg-noise"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-surface-dim border-b-4 border-[rgba(31,27,19,0.2)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-background cursor-pointer hover:scale-110 transition-transform">menu</span>
          <div className="inline-flex items-center justify-center w-10 h-10 border-4 border-primary text-xl font-black text-primary">F</div>
          <h1 className="font-headline uppercase leading-none tracking-tighter text-primary text-2xl md:text-3xl">FOGO &amp; BRASA</h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-on-background font-bold hover:-translate-y-1 transition-transform duration-100 uppercase tracking-widest text-sm" href="#">Story</a>
          <a className="text-primary font-black uppercase tracking-widest text-sm border-b-2 border-primary" href="#">Menu</a>
          <a className="text-on-background font-bold hover:-translate-y-1 transition-transform duration-100 uppercase tracking-widest text-sm" href="#">Find Us</a>
        </nav>
        <button className="bg-on-background text-surface-dim px-6 py-2 font-headline uppercase text-lg hover:-translate-y-1 active:scale-95 transition-all hidden sm:block">RESERVE</button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="font-headline text-8xl md:text-9xl uppercase leading-[0.8] tracking-tighter text-on-background -rotate-2 origin-left">
              GRILL<br/><span className="text-primary italic">TALES</span>
            </h2>
            <div className="mt-8 flex flex-col gap-1">
              <div className="grill-mark"></div>
              <div className="grill-mark w-3/4"></div>
            </div>
          </div>
          <div className="md:w-1/3">
            <p className="font-body font-extrabold text-xl uppercase tracking-tight leading-none text-on-surface-variant">
              NOTES FROM THE COALS. TECHNIQUES, TASTES, AND THE TRADITION OF LIVE FIRE.
            </p>
          </div>
        </div>

        {/* Blog Feed: Bento-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Featured Card */}
          <article className="md:col-span-8 flex flex-col group">
            <div className="relative bg-surface-container-lowest p-6 pt-6 pb-12 shadow-[12px_12px_0px_rgba(31,27,19,0.05)] rotate-1 transition-transform group-hover:rotate-0 duration-300">
              <div className="absolute top-8 left-8 z-20 bg-tertiary-container text-on-tertiary-container px-4 py-2 font-headline text-2xl rotate-[8deg] uppercase tracking-tighter">
                Recipe
              </div>
              <div className="aspect-video w-full overflow-hidden mb-8 bg-surface-container-highest relative">
                <Image
                  alt="Perfectly grilled piri-piri chicken on a charcoal grill"
                  src="/stitch/blog/featured-recipe.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-headline text-5xl md:text-6xl uppercase leading-none mb-4 group-hover:text-primary transition-colors">
                The Secret to Perfect Piri-Piri
              </h3>
              <p className="font-body font-bold text-lg text-on-surface-variant max-w-2xl mb-6">
                It’s not just about the heat; it’s about the char. We reveal the three-stage basting technique passed down through generations of Pitmasters.
              </p>
              <button className="self-start bg-primary-container text-on-primary px-8 py-4 font-headline text-xl uppercase tracking-widest hover:-translate-y-1 transition-transform active:scale-95">
                READ THE STORY
              </button>
            </div>
          </article>

          {/* Secondary Cards Column */}
          <div className="md:col-span-4 flex flex-col gap-12">
            {/* Card 2 */}
            <article className="flex flex-col group">
              <div className="bg-surface-container-high p-4 pt-4 pb-10 shadow-[8px_8px_0px_rgba(31,27,19,0.05)] -rotate-2 transition-transform group-hover:rotate-0 duration-300 relative">
                <div className="absolute top-6 left-6 z-20 bg-on-background text-surface px-3 py-1 font-headline text-lg rotate-[8deg] uppercase tracking-tighter">
                  pairing
                </div>
                <div className="aspect-square w-full overflow-hidden mb-6 bg-surface-container-highest relative">
                  <Image
                    alt="Red wine being poured next to a ribeye steak"
                    src="/stitch/blog/wine-pairing.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-headline text-3xl uppercase leading-none mb-3">
                  Wine Pairing for Grilled Meat
                </h3>
                <p className="font-body font-bold text-sm text-on-surface-variant mb-4">
                  Tannins and smoke: how to find the perfect Douro red to cut through the richness of our Picanha.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="flex flex-col group">
              <div className="bg-surface-container-high p-4 pt-4 pb-10 shadow-[8px_8px_0px_rgba(31,27,19,0.05)] rotate-3 transition-transform group-hover:rotate-0 duration-300 relative">
                <div className="absolute top-6 left-6 z-20 bg-primary text-white px-3 py-1 font-headline text-lg rotate-[8deg] uppercase tracking-tighter">
                  News
                </div>
                <div className="aspect-square w-full overflow-hidden mb-6 bg-surface-container-highest relative">
                  <Image
                    alt="Interior of a rustic restaurant with open kitchen"
                    src="/stitch/blog/new-location.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-headline text-3xl uppercase leading-none mb-3">
                  Our New Location in Porto
                </h3>
                <p className="font-body font-bold text-sm text-on-surface-variant mb-4">
                  Fogo expands to the coast. Bringing the brutalist grill to the streets of Ribeira this autumn.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Pagination / Load More */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <div className="grill-mark max-w-xs"></div>
          <button className="bg-on-background text-surface px-12 py-5 font-headline text-2xl uppercase tracking-widest hover:-translate-y-2 transition-transform active:scale-95 shadow-xl">
            KEEP FEEDING THE FIRE
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-10 flex flex-col md:flex-row justify-between items-start gap-12 bg-on-background border-t-[12px] border-primary relative z-10">
        <div className="flex flex-col gap-6">
          <span className="text-surface-dim font-headline text-4xl uppercase tracking-tighter">FOGO &amp; BRASA</span>
          <p className="text-primary font-body font-extrabold text-sm tracking-widest uppercase max-w-xs">
            © 2024 FOGO &amp; BRASA. THE BRUTALIST CHURRASCARIA. ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-surface-dim opacity-60 font-black text-xs uppercase tracking-[0.2em]">Quick Links</span>
            <a className="text-surface-dim opacity-80 font-bold hover:text-white transition-colors uppercase text-sm tracking-wider" href="#">LOCATIONS</a>
            <a className="text-surface-dim opacity-80 font-bold hover:text-white transition-colors uppercase text-sm tracking-wider" href="#">CAREERS</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-surface-dim opacity-60 font-black text-xs uppercase tracking-[0.2em]">Follow</span>
            <a className="text-surface-dim opacity-80 font-bold hover:text-white transition-colors uppercase text-sm tracking-wider" href="#">INSTAGRAM</a>
            <a className="text-surface-dim opacity-80 font-bold hover:text-white transition-colors uppercase text-sm tracking-wider" href="#">FACEBOOK</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-surface-dim opacity-60 font-black text-xs uppercase tracking-[0.2em]">Newsletter</span>
          <div className="flex">
            <input className="bg-transparent border-none border-b-4 border-primary text-white font-bold p-2 focus:ring-0 w-full placeholder:text-surface-dim/30" placeholder="EMAIL ADDRESS" type="email" />
            <button className="text-primary p-2 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </footer>
      </div>
    );
}
