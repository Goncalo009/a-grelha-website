import Image from "next/image";
import Link from "next/link";

export function ContactInfo() {
  return (
    <section id="location" className="min-h-[500px] flex flex-col md:grid md:grid-cols-2">
      <div className="bg-brand-black text-white p-8 md:p-16 flex flex-col justify-center order-last md:order-first">
        <h2 className="font-headline text-[3rem] text-brand-red mb-6 uppercase leading-[0.9]">
          FIND THE FIRE
        </h2>
        
        <div className="mb-6 text-[1.2rem] flex items-center gap-4">
          <strong className="font-[800]">ADDRESS:</strong> 124 Charred Oak Ave, Food District
        </div>
        <div className="mb-6 text-[1.2rem] flex items-center gap-4">
          <strong className="font-[800]">HOURS:</strong> Mon-Sun: 11am - Late
        </div>
        <div className="mb-6 text-[1.2rem] flex items-center gap-4">
          <strong className="font-[800]">PHONE:</strong> (555) 019-2834
        </div>
        
        <br />
        <Link 
          href="#" 
          className="bg-brand-red text-white p-0 rounded-card inline-flex flex-col overflow-hidden shadow-depth decoration-none transition-transform duration-200 self-start hover:scale-105"
        >
          <div className="text-[1.5rem] px-6 py-4 font-headline uppercase leading-[0.9]">
            GET DIRECTIONS
          </div>
          <div className="bg-brand-black text-white px-6 py-2 uppercase font-[800] text-sm tracking-wider flex justify-between items-center text-left">
            <span>GO TO MAPS</span>
          </div>
        </Link>
      </div>

      <div className="bg-[#ccc] relative overflow-hidden h-[400px] md:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
          alt="Map" 
          fill
          className="object-cover grayscale contrast-125"
        />
      </div>
    </section>
  );
}

