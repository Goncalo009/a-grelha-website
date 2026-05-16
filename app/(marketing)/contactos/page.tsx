import Image from "next/image";

export default function ContactosPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 relative min-h-screen">
      {/* Massive Headline */}
      <div className="relative z-10 mb-32">
        <h1 className="font-headline text-[12vw] md:text-[15vw] leading-[0.85] uppercase -rotate-3 tracking-tighter text-[#1f1b13] select-none">
          FIND THE<br/>FIRE
        </h1>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Address and Hours */}
        <div className="lg:col-span-5 space-y-24 order-2 lg:order-1">
          {/* Address Section */}
          <div className="flex items-start gap-8">
            <div className="flex flex-col text-5xl md:text-7xl font-headline leading-none text-[#b0001a]">
              <span>A</span>
              <span>V</span>
              <span>E</span>
            </div>
            <div className="border-l-8 border-[#1f1b13] pl-8">
              <p className="font-headline text-6xl md:text-8xl leading-none uppercase">124</p>
              <p className="font-body text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#1f1b13]">Charred Oak</p>
            </div>
          </div>

          {/* Hours Section */}
          <div className="relative pt-12">
            <div className="absolute -top-4 left-0 bg-[#936600] text-white px-4 py-1 rotate-3 font-headline uppercase tracking-widest text-xl">
              OPEN HEAT
            </div>
            <h3 className="font-headline text-5xl md:text-6xl uppercase leading-none mb-6 text-[#1f1b13]">THE COALS BURN DAILY</h3>
            <div className="ml-12 border-l-4 border-[#916f6c] p-6 space-y-4">
              <p className="font-body font-extrabold text-2xl uppercase tracking-widest text-[#5d3f3d]">Mon-Sun</p>
              <p className="font-headline text-5xl text-[#b0001a]">11AM — LATE</p>
            </div>
          </div>

          {/* Grill Marks Decoration */}
          <div className="w-48">
            <div className="h-1 bg-[#916f6c] bg-opacity-20 w-full mb-3"></div>
            <div className="h-1 bg-[#916f6c] bg-opacity-20 w-full mb-3"></div>
            <div className="h-1 bg-[#916f6c] bg-opacity-20 w-full mb-3"></div>
            <div className="h-1 bg-[#916f6c] bg-opacity-20 w-full mb-3"></div>
          </div>
        </div>

        {/* Reservation Form */}
        <div className="lg:col-span-7 order-1 lg:order-2 bg-[#f1e7d9] p-8 md:p-12 relative shadow-2xl">
          <div className="absolute -top-10 right-10 w-48 h-64 bg-white p-3 shadow-xl rotate-3 hidden md:block">
            <img 
              alt="Roaring wood fire" 
              className="w-full h-48 object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDadn9YdPL51u4HoiIvnRQjYRTGGeb4_HvLFz0ZYY8uQqOLHKeuEYUTugI9sQ0WvNws1oemptRjO79YLsycdHJBGTqL8cbc3jKJkwhLXQTIdlvYfeZ8xOF7KbLuIBABAqV1Q2ESbUMH8XLGtxN2gGzJMEqjmah3CozhjhFdsa8uB_WOSg_Duz9HZOYRB_GgJTXRcYm9e8b9qSPp-NIgRC_lmSmkoN1dmcbZwBFkBtIOSp1Cd12m48ZkRwrXw2IBRY1Lm6KrvYoodu8"
            />
            <div className="pt-4 text-center font-headline text-[#1f1b13] uppercase tracking-tighter text-sm">
              PROOF OF HEAT
            </div>
          </div>

          <h2 className="font-headline text-6xl md:text-7xl uppercase mb-12 leading-[0.9] text-[#1f1b13]">
            STOKE THE<br/>HEARTH
          </h2>

          <form action="#" className="space-y-12">
            <div className="group">
              <label className="block font-body font-extrabold uppercase tracking-widest text-sm mb-2 opacity-60 text-[#1f1b13]">
                IDENTIFICATION / NAME
              </label>
              <input 
                className="w-full bg-transparent border-t-0 border-x-0 border-b-[8px] border-[#1f1b13] p-4 font-headline text-4xl uppercase placeholder:opacity-20 transition-all duration-200 focus:outline-none focus:border-b-[#d91a2a] text-[#1f1b13]" 
                placeholder="WHO HUNTS?" 
                type="text"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group">
                <label className="block font-body font-extrabold uppercase tracking-widest text-sm mb-2 opacity-60 text-[#1f1b13]">
                  PARTY SIZE
                </label>
                <input 
                  className="w-full bg-transparent border-t-0 border-x-0 border-b-[8px] border-[#1f1b13] p-4 font-headline text-4xl uppercase placeholder:opacity-20 transition-all duration-200 focus:outline-none focus:border-b-[#d91a2a] text-[#1f1b13]" 
                  placeholder="GUESTS" 
                  type="number"
                />
              </div>
              <div className="group">
                <label className="block font-body font-extrabold uppercase tracking-widest text-sm mb-2 opacity-60 text-[#1f1b13]">
                  ARRIVAL DATE
                </label>
                <input 
                  className="w-full bg-transparent border-t-0 border-x-0 border-b-[8px] border-[#1f1b13] p-4 font-headline text-4xl uppercase transition-all duration-200 focus:outline-none focus:border-b-[#d91a2a] text-[#1f1b13]" 
                  type="date"
                />
              </div>
            </div>

            <div className="group">
              <label className="block font-body font-extrabold uppercase tracking-widest text-sm mb-2 opacity-60 text-[#1f1b13]">
                DESIRED TIME
              </label>
              <input 
                className="w-full bg-transparent border-t-0 border-x-0 border-b-[8px] border-[#1f1b13] p-4 font-headline text-4xl uppercase transition-all duration-200 focus:outline-none focus:border-b-[#d91a2a] text-[#1f1b13]" 
                type="time"
              />
            </div>

            <button 
              className="w-full bg-[#d91a2a] text-white py-8 font-headline text-4xl uppercase tracking-widest hover:-translate-y-2 active:scale-95 transition-all duration-150" 
              type="submit"
            >
              CLAIM YOUR SPOT
            </button>
          </form>
        </div>
      </div>

      {/* Polaroid Gallery - Asymmetric Floating */}
      <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 pb-32">
        <div className="bg-white p-2 shadow-lg -rotate-6 transition-transform hover:rotate-0">
          <img 
            alt="Grilled Meat" 
            className="aspect-square object-cover grayscale brightness-75" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYUrDUVx7ucxpooVIeVj4dGcW1mt0QEoxGteBXXXdImIz-dOlZSZ-k8WK8gR4mH0Ieyx1gpWj4XNTOWT7l4fo6l1A3gsc6p8AhJ1wSY6-NSIPMe1VMoE7g_jpEIzR0S1aJJ4S_gAmXK4NQqGXQNEtgWS5XzqMj8jp2Qb2FOzJnexFg1GDixjZh7SUKUfcvg8Kz2VuazzYVY8hZR5OnEzO-tQ9_eDsjyAbF0d3KyhJGwC0J56EX3nG6By1h1w7oLRdm_auW-ucyXEc"
          />
        </div>
        <div className="bg-white p-2 shadow-lg rotate-12 mt-12 transition-transform hover:rotate-0">
          <img 
            alt="Steak" 
            className="aspect-square object-cover grayscale contrast-125" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiz7gJrtihh0Spcj70DCNoMycyslZqPZiiXmD7aDuzyJGwBclsg8CBZdO7VzOJcxpKpUNKnIFTKvyrsI9ILlOInVXG4muk-GfSABi2gpbANktVZla3v877R7lGxrlQ1shDWdCH_ebwuvJdYBfDub1Yq9H1Ol4w_sqPugbSLw_Nu0a37Ur0g-6Fl-NuhUyYoIzse1qmj5n3jH5WNdvYBARsKpCLffDKsqqBXnm17FgxtFEKlo_7eaEnRsrC5tcfuXM-ddXfIRxNFe0"
          />
        </div>
        <div className="bg-white p-2 shadow-lg -rotate-3 transition-transform hover:rotate-0">
          <img 
            alt="Restaurant Interior" 
            className="aspect-square object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfEvre99eSHza0cz8JOK2HtStBrDx6DcJeTFPVhCqEYAYjaBzizlgD34bEmhY6ncjwQzy0SHhy-l62tyn9gg2ZTO-xH2YTRq1Xc085495tJfpVNDlwPZ1R7ypSpmvR3CwMmsYU-mPa3XbDFiy9ltuLB44YjG3vhupvc7bfKvEqUFGiCsu771Dres9MGpJ9sHQ3-akUqgGRcq1oAjXvP_lSDIIjMDfxRXVuXH2ULe8-iK58c9Vcfpvljh1D4OyIz3iRXHlil4EpDwY"
          />
        </div>
        <div className="bg-white p-2 shadow-lg rotate-2 mt-8 transition-transform hover:rotate-0">
          <img 
            alt="Chef with knife" 
            className="aspect-square object-cover grayscale brightness-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3e0QIOuH9vBd-VvvmS6BNQVIrGjQ6pOhQxKafZ3tTYCZqZZsdXP-GLIuXwHuhXqwGBVBuqCFWl4BM2JOhNX26iBZuPE6sO-CQ9Ubl1fXxQvVCemmuYrv3YyoYjlza0BV4LHaJ-unRxFpdqq9PE9L5xgi7K-7wBqyHtm4e0CdsNVpcaPmuQiGm7xi9f2ljUZdf7MdLzN1sVTZeY5wjHrTvHlbSJJySE7L1Tdn-y5xsoh2irVNItiimzasbzzi1O3QZCPgwUhgGbNo"
          />
        </div>
      </div>
    </main>
  );
}
