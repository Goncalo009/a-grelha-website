import Image from "next/image";
import Link from "next/link";

export function AboutStory() {
  return (
    <section id="about" className="py-32 px-[5%] flex flex-col md:grid md:grid-cols-[1.5fr_1fr] gap-16 items-center">
      <div className="bg-white p-4 pb-12 shadow-depth -rotate-3 w-full max-w-lg mx-auto md:order-last">
        <div className="relative aspect-[4/3] w-full">
          <Image 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop" 
            alt="Grilling Chicken" 
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-left md:order-first">
        <h2 className="font-headline text-6xl md:text-[4rem] text-brand-red mb-6 uppercase leading-[0.9]">
          BORN IN THE FIRES OF ALGARVE
        </h2>
        <p className="text-xl font-[600] mb-8 max-w-[60ch]">
          We don't do "mild." We do flavor. Our recipe has been passed down through three generations of grill masters in Portugal. We use only fresh birds, never frozen, and our secret Piri-Piri sauce is made fresh every morning.
        </p>
        <p className="text-xl font-[600] mb-8 max-w-[60ch]">
          It's not just food. It's a ritual. The charcoal, the heat, the smoke—it creates a crust you can't fake.
        </p>
        <Link href="#" className="font-[800] text-xl text-brand-red underline uppercase">
          READ OUR FULL STORY
        </Link>
      </div>
    </section>
  );
}
