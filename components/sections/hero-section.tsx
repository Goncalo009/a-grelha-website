import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:grid md:grid-cols-2 items-center px-[5%] relative pt-32 md:pt-0 gap-8 overflow-hidden">
      {/* Background Decorative Grill Lines */}
      <div className="absolute top-[20%] right-[5%] flex gap-[15px] opacity-10 rotate-[15deg] z-0 pointer-events-none">
        <div className="w-[20px] h-[400px] bg-black rounded-[10px]" />
        <div className="w-[20px] h-[400px] bg-black rounded-[10px]" />
        <div className="w-[20px] h-[400px] bg-black rounded-[10px]" />
      </div>

      <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="font-headline text-[clamp(4rem,10vw,8rem)] text-brand-black -rotate-3 leading-[0.9] uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)] mb-2 inline-block">
          FLAME GRILLED<br />
          <span className="block text-brand-red">SOUL FILLED</span>
        </h1>
        <p className="text-xl font-[700] mb-8 max-w-[500px]">
          Authentic Portuguese chicken, marinated for 24 hours and fired over open charcoal. It's messy, it's spicy, and it's perfect.
        </p>
        
        <Link href="#menu" className="bg-brand-red text-white p-0 rounded-card inline-flex flex-col overflow-hidden shadow-depth no-underline transition-transform duration-200 max-w-[300px] mt-8 rotate-2 hover:rotate-0 hover:scale-105">
          <div className="px-8 py-6 font-headline text-4xl leading-[0.9]">
            ORDER<br />NOW
          </div>
          <div className="bg-brand-black text-white py-3 px-8 uppercase font-[800] text-base tracking-wider flex justify-between items-center text-left">
            <span>Pickup &amp; Delivery</span>
            <div className="flex gap-1">
              <div className="w-1 h-5 bg-white rounded-sm" />
              <div className="w-1 h-5 bg-white rounded-sm" />
              <div className="w-1 h-5 bg-white rounded-sm" />
            </div>
          </div>
        </Link>
      </div>

      {/* Visual / Rotating Food Plate */}
      <div className="relative flex justify-center items-center order-[-1] md:order-last z-10 w-full">
        <div className="relative w-[80vw] md:w-[120%] max-w-[700px] aspect-square rounded-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] rotate-[15deg] transition-transform duration-500 hover:rotate-[10deg] hover:scale-105 overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=1000&auto=format&fit=crop" 
            alt="Roast Chicken on Board" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
