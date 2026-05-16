import Image from "next/image";

const MENU_ITEMS = [
  {
    title: "WHOLE BIRD",
    description: "Spatchcocked and grilled to perfection. Served with lemon & herb or extra hot piri-piri.",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1000&auto=format&fit=crop",
    alt: "Whole Chicken"
  },
  {
    title: "FIRE WINGS",
    description: "12 Wings tossed in our signature \"Volcano\" glaze. Not for the faint of heart.",
    price: "$16.50",
    image: "https://images.unsplash.com/photo-1527477396000-64ca9c0016d3?q=80&w=1000&auto=format&fit=crop",
    alt: "Spicy Wings"
  },
  {
    title: "LISBON BOWL",
    description: "Pulled grilled breast over spicy rice, charred corn, and macho peas.",
    price: "$18.00",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1000&auto=format&fit=crop",
    alt: "Chicken Bowl"
  }
];

export function FeaturedMenu() {
  return (
    <section id="menu" className="py-24 px-[5%] text-center">
      <h2 className="font-headline text-[5rem] mb-16 rotate-1 uppercase leading-[0.9] text-brand-black">
        HIGHLIGHT DISHES
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
        {MENU_ITEMS.map((item, index) => (
          <div key={index} className="flex flex-col rounded-card overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-[10px] relative">
            <div className="h-[300px] relative bg-[#ddd]">
              <Image 
                src={item.image} 
                alt={item.alt} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="bg-brand-red text-white p-6 text-left flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-3xl mb-2 uppercase">{item.title}</h3>
                <p className="font-body text-[0.9rem] opacity-90 mb-4">{item.description}</p>
              </div>
            </div>
            <div className="bg-brand-black text-white p-4 font-headline text-2xl text-right">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}