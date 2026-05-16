import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="pt-24 pb-32 overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
        <p className="font-headline text-[#b0001a] text-2xl mb-2 tracking-widest bg-[#ffefed] inline-block px-4 py-1 -rotate-2 uppercase">
          A NOSSA HISTÓRIA
        </p>
        <h1 className="font-headline text-7xl md:text-[12rem] leading-[0.85] uppercase tracking-tighter mb-8 break-words text-[#1f1b13]">
          BORN IN <br /> THE FIRES <br /> OF ALGARVE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 md:pt-12">
            <p className="text-xl md:text-2xl font-extrabold leading-tight mb-6">
              Everything starts with the wood. Holm oak and almond branches, hand-gathered from the rugged hills of the Algarve. 
            </p>
            <div className="h-1 bg-[#916f6c] bg-opacity-20 w-full my-3"></div>
            <div className="h-1 bg-[#916f6c] bg-opacity-20 w-full my-3"></div>
            <div className="h-1 bg-[#916f6c] bg-opacity-20 w-full my-3"></div>
          </div>
          <div className="md:col-span-7 relative flex justify-center md:justify-end">
            {/* Overlapping Polaroid 1 */}
            <div className="bg-white p-3 pb-12 shadow-[0_12px_32px_rgba(31,27,19,0.08)] rotate-[-2deg] w-72 md:w-96 z-10 hover:rotate-0 transition-transform duration-500">
              <img 
                alt="Rustic grill with intense orange fire coals" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-500 aspect-square object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDADVH_TV6V8tm7RcCC7Z14E6eITzTM3nEUJ5gmgeyGYytBjpKHXXAhefl2BbAgg3_aHf2nk7kQH9FOdLxvzQVg5cPVNAdii6VfM_aP9pXo_UFX7ottMr_0bvKo_PVCzUnrtIC8gPp6MQn_D0lXK1cDO4GM5aMDfGrdzSuP4LgC5hsW6rrKRPT5Vy3FfAZXtDF_1OnuGIwEZfyJ7Poetx-vm-6ZZTrEZzhM7dmXJ-DnwqJZDmw1yUM_SPkE-DtnRj7xhYu9mVPV5d0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Wood Ritual Section */}
      <section className="bg-[#fff8f2] py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6 flex flex-col justify-center order-2 md:order-1">
            <h2 className="font-headline text-6xl md:text-8xl uppercase leading-[0.9] mb-8 text-[#b0001a] -rotate-1 origin-left">
              O RITUAL
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="text-lg font-extrabold text-[#1f1b13]">
                We don't use gas. We don't use electric grills. We use FOGO. The wood is seasoned by the Atlantic breeze for six months before it ever touches a spark.
              </p>
              <p className="text-lg font-bold text-[#5d3f3d]">
                It’s a patience that borders on obsession. The temperature isn't controlled by a dial, but by the placement of each branch, the height of the grate, and the intuition of the Master Parrillero.
              </p>
              <button className="bg-[#d91a2a] text-[#ffefed] px-8 py-4 font-headline text-2xl uppercase tracking-wider hover:-translate-y-1 transition-transform active:scale-95 border-b-4 border-[#1f1b13]">
                VER O MENU
              </button>
            </div>
          </div>
          <div className="md:col-span-6 relative order-1 md:order-2">
            <div className="bg-white p-3 pb-12 shadow-2xl rotate-[1.5deg] w-64 md:w-80 absolute -top-12 right-0 md:right-12 z-20 hover:rotate-0 transition-transform duration-500">
              <img 
                alt="Close up of stacked seasoned firewood logs" 
                className="w-full aspect-square object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1T4mnWB8hgwowaynUXDvR9KvI9p3dTsW7rf_iQIKV-c7H5kzlAJeXsBCN2olXASxINdT7GtIC_Dvy7axy5okxXtQ1lm8rp_KAHBMqE8LUtQzdJZX9dA5nZfWC-ywU6C45zKs6uazcuJ4nQrk69XK_KAARQ3QeF-mQuDJ6RMN49WlASmd0mDpsEgar6kcdcs3uAF0Y_8R5_Jjo2hbE3xZ0mBQlkyXcGb3rC_p4ewcTsGVttdq9w1a3VGKosylsAM3_MMmgr3bxnkk"
              />
            </div>
            <div className="md:h-[500px] w-full bg-[#f7ecdf] flex items-end p-8 border-4 border-[#1f1b13]">
              <span className="font-headline text-[15rem] text-[#5d3f3d] opacity-5 leading-none select-none">
                WOOD
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Spice & Flavor */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
          <h2 className="font-headline text-7xl md:text-9xl uppercase leading-none text-[#1f1b13]">
            O TEMPERO
          </h2>
          <div className="h-4 w-full bg-[#1f1b13] opacity-10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="bg-[#b0001a] text-white w-12 h-12 flex items-center justify-center font-headline text-2xl rotate-3">
              01
            </div>
            <h3 className="font-headline text-3xl uppercase text-[#1f1b13]">SAL MARINHO</h3>
            <p className="font-bold text-[#1f1b13]">
              Harvested from the salt pans of Tavira. Only the largest crystals touch our Picanha, drawing out the depth of the dry-aged fat.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-[#936600] text-[#fff0df] w-12 h-12 flex items-center justify-center font-headline text-2xl -rotate-6">
              02
            </div>
            <h3 className="font-headline text-3xl uppercase text-[#1f1b13]">PIRI-PIRI</h3>
            <p className="font-bold text-[#1f1b13]">
              Infused with house-grown peppers and aged olive oil. A slow burn that respects the meat while igniting the soul.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-[#1f1b13] text-[#fff8f2] w-12 h-12 flex items-center justify-center font-headline text-2xl rotate-12">
              03
            </div>
            <h3 className="font-headline text-3xl uppercase text-[#1f1b13]">FUMO</h3>
            <p className="font-bold text-[#1f1b13]">
              The smoke is the third ingredient. It wraps around every cut like a dark, savory velvet.
            </p>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="bg-[#1f1b13] text-[#fff8f2] py-24 px-6 border-y-[12px] border-[#d91a2a]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-headline text-7xl md:text-9xl uppercase mb-12 text-[#b0001a] rotate-[-1deg]">
            A FAMÍLIA
          </h2>
          <div className="relative w-full max-w-4xl mb-16">
            <div className="bg-white p-3 pb-12 shadow-[0_12px_32px_rgba(31,27,19,0.08)] rotate-[-1deg] text-[#1f1b13] w-full">
              <img 
                alt="Large family sitting at a long rustic table laughing" 
                className="w-full aspect-[16/9] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZvruFmnjmdO6VLIqgqV7gPLsvMnZMutbO5PVY_-SRi_ysDe1gHd2CkQ1_2zeL7NQ-cIp3J8gDO7fllCatPpI_-7sK0DF3jMo57TIsvzqqWYVZZvEtA-0bglIqArD777VtLA_cFdD9rQkJ2FsW7kdPErOqL-_1Yw8xlTZ5wg3BZ1GlJN2yAFF22eb3wXGCmG-fwcUG-hav7gW3Yme35i2FrF1ZiC7Ghs2swRITmc7PhjLRoDt5mL_9wlYQ_MUEAQNBECRDjCWfrvE"
              />
            </div>
          </div>
          <div className="max-w-2xl">
            <p className="text-2xl font-extrabold italic mb-8">
              "Eating is a sacred act of defiance against a world that is moving too fast. We invite you to sit, wait for the coals, and remember what it means to be human."
            </p>
            <p className="font-headline text-xl tracking-[0.2em] uppercase opacity-60">
              — FOUNDERS, THE COSTA FAMILY
            </p>
          </div>
        </div>
      </section>

      {/* Quote/Callout */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-headline text-5xl md:text-8xl uppercase tracking-tighter max-w-4xl mx-auto text-[#1f1b13]">
          WHERE THERE IS <span className="text-[#b0001a] italic">FOGO</span>, THERE IS <span className="text-[#b0001a] underline decoration-8 underline-offset-8">BRASA</span>.
        </h2>
      </section>
    </main>
  );
}
