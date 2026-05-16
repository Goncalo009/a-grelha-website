import Image from "next/image";

export default function MenuPage() {
  return (
    <>
      {/* Navigation Drawer (Local menu navigation) */}
      <aside className="fixed inset-y-0 left-0 z-[60] flex flex-col bg-[#f7ecdf] w-80 h-full border-r-8 border-[#1f1b13] -translate-x-full lg:translate-x-0 hidden lg:flex pt-32">
        <div className="p-8">
          <h2 className="text-4xl font-black text-[#b0001a] font-headline mb-12">THE HEARTH</h2>
          <nav className="flex flex-col gap-2">
            <a className="bg-[#b0001a] text-[#e3d9cc] p-4 -rotate-2 scale-105 font-headline uppercase text-xl flex items-center gap-4" href="#grill">
              <span className="material-symbols-outlined">outdoor_grill</span> THE GRILL
            </a>
            <a className="text-[#1f1b13] p-4 hover:bg-[#1f1b13]/5 font-headline uppercase text-xl flex items-center gap-4 hover:pl-8 transition-all duration-200" href="#drinks">
              <span className="material-symbols-outlined">local_bar</span> DRINKS
            </a>
            <a className="text-[#1f1b13] p-4 hover:bg-[#1f1b13]/5 font-headline uppercase text-xl flex items-center gap-4 hover:pl-8 transition-all duration-200" href="#sides">
              <span className="material-symbols-outlined">restaurant_menu</span> SIDES
            </a>
            <a className="text-[#1f1b13] p-4 hover:bg-[#1f1b13]/5 font-headline uppercase text-xl flex items-center gap-4 hover:pl-8 transition-all duration-200" href="#sweets">
              <span className="material-symbols-outlined">icecream</span> SWEETS
            </a>
          </nav>
        </div>
      </aside>

      <main className="relative z-10 pt-32 pb-24 lg:pl-80 min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-12 mb-20">
          <div className="relative">
            <h2 className="font-headline text-[12vw] leading-[0.85] uppercase tracking-tighter mb-4 -rotate-2 origin-left text-[#1f1b13]">
              ESTABLISHED<br/><span className="text-[#b0001a]">IN FIRE</span>
            </h2>
            <div className="absolute -right-4 top-0 w-32 h-32 bg-[#936600] text-[#fff0df] flex items-center justify-center rotate-8 font-headline text-2xl p-4 text-center border-4 border-[#1f1b13] shadow-xl hover:rotate-0 transition-transform duration-300">
              NEW SMOKEHOUSE
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 mt-20 items-end">
            <div className="w-full md:w-1/2 bg-white p-3 pb-12 shadow-[0_10px_30px_-10px_rgba(31,27,19,0.2)] rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                className="w-full h-96 object-cover grayscale contrast-125 brightness-90" 
                alt="Smoked meat cuts on a wooden platter" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNCw7BOu9O_PVYSdJ5aBva4yZrcQI0p3gSVBSwHQbZPTxmlsghkvNZhHkLzGVXaBkZPLqE-C58Lzpz_3tUxm04CMvUi13w1YRFlDvmGWYsQl-B35MGYB4RtWP__wsF6Q969QtCcKyHLOqo5MnNLLHE9vypwbLTLAREReTmKZNN2vnt9c38Xu4wBkkaZAJK3hGKJAbadDx2Uq-UOWh1Qfg4ToY-zzduRxAKTKVEes4No_k0-hjw_F8dcebAFSMy8oB0FyFyRn5Z7oU"
              />
            </div>
            <div className="w-full md:w-1/3 mb-12">
              <div className="h-1 bg-[#1f1b13] bg-opacity-20 w-full mb-3"></div>
              <div className="h-1 bg-[#1f1b13] bg-opacity-20 w-full mb-3"></div>
              <div className="h-1 bg-[#1f1b13] bg-opacity-20 w-full mb-3"></div>
              <p className="font-bold text-xl leading-relaxed mt-6">
                WE COOK WITH ANCIENT KNOWLEDGE. NO GAS. NO ELECTRICITY. ONLY WOOD, CHARCOAL, AND THE PRIMAL WILL TO FEED.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="px-6 md:px-12 mt-32" id="grill">
          <div className="flex justify-between items-baseline mb-16 border-b-8 border-[#1f1b13] pb-4">
            <h3 className="font-headline text-6xl uppercase text-[#1f1b13]">THE GRILL</h3>
            <span className="font-headline text-2xl text-[#b0001a]">DAILY CUTS</span>
          </div>
          <div className="space-y-32 relative">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center group">
              <div className="relative w-full md:w-5/12 z-20">
                <div className="bg-white p-3 pb-12 shadow-[0_10px_30px_-10px_rgba(31,27,19,0.2)] -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <img 
                    className="w-full h-[400px] object-cover" 
                    alt="Whole roasted chicken with herbs" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdkjDuzliw4NDLECD1PyTjoRkqFiaiArPY62r1yjrMMKHDjvLRkEjlydq-BerTjW_cuJ9KxhbR0i8w-ZxCZJh3c7xR4LwUcu_Zn9AB8mzLOlgoWB1FkdS1ScZs6lA47mRMYo2_SIk-c5uKG1N7ztNqagPGIpEg8K60m1s-3bRythfNMu1O3vQijL_2X-AvnZ8fE5IZJbteUwICq-AUtghRsAjMcF2cRX1lksYQqu5SzC783zcy_fMnH924cDVSdt9hrMIePJHi3iU"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 md:-ml-20 md:mt-20 z-30">
                <div className="bg-[#fff8f2] p-8 border-4 border-[#1f1b13] shadow-[12px_12px_0px_0px_rgba(31,27,19,1)]">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline text-7xl uppercase leading-none text-[#1f1b13]">WHOLE BIRD</h4>
                    <span className="font-headline text-4xl text-[#b0001a]">$24.00</span>
                  </div>
                  <p className="text-xl font-extrabold uppercase mb-6 max-w-md text-[#5d3f3d]">FLAMED-KISSED POULTRY, SMOKED FOR 6 HOURS OVER HICKORY. SERVED WITH CHARRED LEMON.</p>
                  <button className="bg-[#1f1b13] text-[#fff8f2] font-headline uppercase px-8 py-3 text-xl hover:-translate-y-1 active:scale-95 transition-all">ADD TO HEARTH</button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center group">
              <div className="relative w-full md:w-5/12 z-20">
                <div className="bg-white p-3 pb-12 shadow-[0_10px_30px_-10px_rgba(31,27,19,0.2)] rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <img 
                    className="w-full h-[400px] object-cover" 
                    alt="Spicy fire-grilled chicken wings" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACoMC-q--qhtktcXXS7d3iIKncASvoJQitc4LA3ulj3U7_PEpzVNOJt8Twr_95Bp9vF0X4El2Zq_TKrbxy_TIDeILoJB61qtYND6_Lwgq3d5oKFRu9hMDtVT8I3BHWvbmwo-h5TGkyII7yDLr8MA94M_52vgbXLLAg8tLt-9C-FpjhsiAHynNn5tAJlam2KezuIXOiE7r_q9ccALHYxJQV_1e3eTcr367hf_S_zbdDl51znCT6Dtz-xg6HmCfb1xBcOob1XhcTQNs"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 md:-mr-20 md:mb-20 z-30">
                <div className="bg-[#d91a2a] p-8 border-4 border-[#1f1b13] shadow-[-12px_12px_0px_0px_rgba(31,27,19,1)]">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline text-7xl uppercase leading-none text-[#ffefed]">FIRE WINGS</h4>
                    <span className="font-headline text-4xl text-[#1f1b13]">$16.50</span>
                  </div>
                  <p className="text-xl font-extrabold uppercase mb-6 max-w-md text-[#ffefed]">12 PIECES OF PURE ADRENALINE. COATED IN OUR BRASA RUB AND GLAZED WITH BOURBON CHILI.</p>
                  <button className="bg-[#1f1b13] text-[#fff8f2] font-headline uppercase px-8 py-3 text-xl hover:-translate-y-1 active:scale-95 transition-all">ORDER HEAT</button>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center group">
              <div className="relative w-full md:w-5/12 z-20">
                <div className="bg-white p-3 pb-12 shadow-[0_10px_30px_-10px_rgba(31,27,19,0.2)] -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  <img 
                    className="w-full h-[400px] object-cover" 
                    alt="Grilled vegetable and meat bowl" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATnGY95sl4bG1U5pLWWopf7_gXm6aVhYFDy0QS2xygTrSqXaL-sa4xauVjRm1C5NxFlhNtU7kN8tgCgO3k94r4t-QNJkjq62NcJ4-pE-tyKD_EQXFNimT_NS3oOv2Fn4IbfoB0JaNq4AtOMX4KkTb4MW7rLvOJJpfkKVFm8UJYk6ThqY5wnkS8MX-SewSk6GUID3pOD2Ffc2ZqMRgnsbSApdoR1U0jOblnex8V19HSN7B7xAKgagmRUnT_d9LWmtR1cXvnBUAxrk4"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 md:-ml-20 md:mt-10 z-30">
                <div className="bg-[#f1e7d9] p-8 border-4 border-[#1f1b13] shadow-[12px_12px_0px_0px_rgba(31,27,19,1)]">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-headline text-7xl uppercase leading-none text-[#1f1b13]">LISBON BOWL</h4>
                    <span className="font-headline text-4xl text-[#b0001a]">$18.00</span>
                  </div>
                  <p className="text-xl font-extrabold uppercase mb-6 max-w-md text-[#5d3f3d]">ROASTED ROOTS, SMOKED KALE, PICKLED ONION, AND YOUR CHOICE OF CHARRED PROTEIN.</p>
                  <button className="bg-[#1f1b13] text-[#fff8f2] font-headline uppercase px-8 py-3 text-xl hover:-translate-y-1 active:scale-95 transition-all">SELECT BASE</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secret Sauces Section */}
        <section className="px-6 md:px-12 mt-48 mb-32">
          <div className="relative py-20 px-8 border-8 border-double border-[#b0001a]/40 flex flex-col items-center">
            <div className="absolute -top-12 bg-[#e3d9cc] px-6">
              <div className="w-48 h-48 rounded-full border-8 border-[#b0001a] flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-help">
                <span className="font-headline text-3xl text-[#b0001a] text-center leading-none">MOLHOS<br/>SECRETOS</span>
              </div>
            </div>
            
            <h3 className="font-headline text-4xl mb-12 text-center tracking-widest mt-12 text-[#1f1b13]">THE LIQUID FIRE CABINET</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-[#b0001a] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <h5 className="font-headline text-2xl uppercase mb-2 text-[#1f1b13]">PIRI-PIRI X</h5>
                <div className="h-1 bg-[#1f1b13] bg-opacity-20 w-12 mx-auto mb-3"></div>
                <p className="font-bold uppercase text-sm text-[#5d3f3d]">AUTHENTIC HEAT FROM THE OLD WORLD. AGED 30 DAYS.</p>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-[#b0001a] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>opacity</span>
                <h5 className="font-headline text-2xl uppercase mb-2 text-[#1f1b13]">SMOKED BOURBON</h5>
                <div className="h-1 bg-[#1f1b13] bg-opacity-20 w-12 mx-auto mb-3"></div>
                <p className="font-bold uppercase text-sm text-[#5d3f3d]">OAK BARREL SWEETNESS WITH A DEEP CHARCOAL FINISH.</p>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-[#b0001a] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <h5 className="font-headline text-2xl uppercase mb-2 text-[#1f1b13]">HERB CHIMICHURRI</h5>
                <div className="h-1 bg-[#1f1b13] bg-opacity-20 w-12 mx-auto mb-3"></div>
                <p className="font-bold uppercase text-sm text-[#5d3f3d]">BRIGHT, ACIDIC, AND PUNCHY. THE PERFECT MEAT PARTNER.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
