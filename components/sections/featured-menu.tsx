import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3, Flame, Leaf } from "lucide-react";
import { OrderDrawer, type OrderDrawerProduct } from "@/components/forms/order-drawer";
import menuData from "@/content/menu.json";
import { formatMenuPrice } from "@/lib/app-menu";
import type { Dish, MenuData } from "@/types/menu";

const menu = menuData as MenuData;
const allDishes = menu.categories.flatMap((category) => category.dishes);
const dishFor = (name: string) => allDishes.find((dish) => dish.name === name);
const formatFavoritePrice = (dish?: Dish) => (dish ? formatMenuPrice(dish) : "Sob consulta");

const favorites = [
  {
    id: "picanha",
    name: "Picanha",
    dishName: "Picanha",
    description: "Preço por kg, cortada e preparada para levar.",
    image: "/stitch/home/hero.jpg",
    alt: "Carne grelhada no carvão",
    position: "object-[50%_58%]",
  },
  {
    id: "frango",
    name: "Frango",
    dishName: "Frango",
    description: "Churrasco clássico, com peso confirmado ao pedido.",
    image: "/stitch/home/whole-bird.jpg",
    alt: "Frango assado no churrasco",
    position: "object-[54%_53%]",
  },
  {
    id: "acompanhamentos",
    name: "Acompanhamentos",
    dishName: "Arroz Branco",
    description: "Arroz, batata, saladas e opções para completar.",
    prefix: "desde ",
    image: "/stitch/menu/chourico.jpg",
    alt: "Acompanhamentos para grelhados",
    position: "object-[50%_50%]",
  },
];

const benefits = [
  {
    icon: Flame,
    title: "Grelhados no carvão",
    text: "Frango, picanha e outros cortes preparados para levar.",
  },
  {
    icon: Clock3,
    title: "Hora combinada",
    text: "Ligue/WhatsApp e combine a hora de levantamento.",
  },
  {
    icon: Leaf,
    title: "Disponibilidade confirmada",
    text: "Preço final, peso e hora são acertados antes do levantamento.",
  },
];

function favoriteProduct(item: (typeof favorites)[number], dish?: Dish): OrderDrawerProduct {
  const price = `${item.prefix ?? ""}${formatFavoritePrice(dish)}`;

  return {
    name: item.name,
    description: item.description,
    detail: dish?.unit === "kg" ? "Preço por kg" : "Preço à unidade",
    price,
    priceValue: dish?.price,
    image: item.image,
    alt: item.alt,
    unit: dish?.unit ?? "kg",
    imagePosition: item.position,
  };
}

export function FeaturedMenu() {
  return (
    <section
      id="menu"
      className="ag-featured-menu-section !justify-start overflow-hidden bg-brand-cream px-0 pb-0 pt-2 md:justify-center md:overflow-visible md:pb-0 md:pt-10"
    >
      <div className="mx-auto flex h-full w-full max-w-[430px] flex-col justify-between px-4 md:h-auto md:max-w-[1260px] md:justify-start md:px-6">
        <header className="mx-auto max-w-[310px] text-center md:mb-8 md:max-w-none">
          <h2 className="font-headline text-[clamp(1.55rem,7.6vw,1.9rem)] font-bold leading-none tracking-[-0.045em] text-brand-black md:text-[2.75rem]">
            Os Favoritos
          </h2>
          <span className="mx-auto mt-1.5 block h-0.5 w-8 rounded-full bg-brand-red" aria-hidden="true" />
          <p className="mx-auto mt-1 max-w-[29ch] text-[clamp(0.58rem,2.65vw,0.68rem)] font-semibold leading-[1.25] text-brand-black/68 md:text-sm md:leading-5">
            Escolhas que fazem sucesso na grelha. Peça rápido, levante sem demora.
          </p>
        </header>

        <div className="grid gap-1.5 md:grid-cols-3 md:gap-5">
          {favorites.map((item, index) => {
            const dish = dishFor(item.dishName);
            const price = formatFavoritePrice(dish);
            const product = favoriteProduct(item, dish);

            return (
              <article
                key={item.id}
                className="ag-favorite-card grid min-h-[clamp(5.8rem,15.7svh,7.35rem)] grid-cols-[39%_1fr] overflow-hidden rounded-[13px] border border-[#eadfd5] bg-brand-white shadow-[0_10px_22px_rgba(70,43,29,0.11)] md:relative md:block md:min-h-0 md:rounded-[18px] md:transition md:duration-200 hover:md:-translate-y-1 hover:md:shadow-[0_22px_54px_rgba(70,43,29,0.16)]"
              >
                <div className="ag-favorite-media relative min-h-[clamp(5.8rem,15.7svh,7.35rem)] overflow-hidden bg-brand-brown/10 md:aspect-[1.55/1] md:min-h-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 40vw"
                    className={`object-cover ${item.position}`}
                  />
                </div>
                <div className="flex min-w-0 flex-col px-2.5 py-2 md:min-h-[150px] md:p-5">
                  <div className="flex min-w-0 items-start justify-between gap-1.5">
                    <h3 className="min-w-0 truncate font-headline text-[clamp(0.86rem,4.45vw,1rem)] font-bold leading-[1.02] tracking-[-0.035em] text-brand-black md:text-[1.35rem]">
                      {item.name}
                    </h3>
                    <span className="mt-0.5 shrink-0 rounded-full bg-[#fff3ec] px-1.5 py-0.5 text-[0.43rem] font-extrabold uppercase leading-none tracking-[0.03em] text-brand-red">
                      🔥 Top {index + 1}
                    </span>
                  </div>

                  <p data-favorite-description className="mt-1 line-clamp-2 max-w-[20ch] text-[0.58rem] font-semibold leading-[0.78rem] text-brand-black/68 md:max-w-[25ch] md:text-[0.78rem] md:leading-5">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-2 pt-1">
                    <p className="min-w-0 text-[clamp(0.62rem,3.05vw,0.7rem)] font-extrabold uppercase leading-none tracking-[0.01em] text-brand-red md:text-[0.82rem]">
                      {item.prefix ? <span>{item.prefix}</span> : null}
                      <span>{price}</span>
                    </p>

                    <OrderDrawer
                      variant="quick-add"
                      product={product}
                      className="h-7 w-12 shrink-0 touch-manipulation rounded-[8px] bg-brand-red text-white shadow-[0_8px_18px_rgba(198,69,44,0.22)] hover:bg-[#b73c20] md:h-8 md:w-14"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <Link
          href="/menu"
          className="mt-1.5 flex min-h-9 w-full items-center justify-center gap-3 rounded-[8px] bg-brand-red px-5 text-[0.64rem] font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_10px_22px_rgba(198,69,44,0.2)] transition hover:bg-[#b73c20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:mx-auto md:mt-7 md:min-h-10 md:max-w-[360px] md:text-[0.68rem]"
        >
          Ver cardápio completo
          <ArrowRight aria-hidden="true" size={16} />
        </Link>

        <div className="ag-menu-benefits mt-2.5 grid grid-cols-3 gap-2 text-brand-black md:mt-8 md:gap-10">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="min-w-0 text-center md:grid md:grid-cols-[52px_1fr] md:gap-4 md:text-left">
                <Icon aria-hidden="true" size={16} strokeWidth={1.55} className="mx-auto mb-1 text-brand-black/78 md:mx-0 md:mb-0 md:mt-1 md:h-[38px] md:w-[38px]" />
                <div className="min-w-0">
                  <h3 className="ag-menu-benefit-title text-[0.52rem] font-extrabold leading-[0.62rem] tracking-[-0.02em] text-brand-black md:text-[0.7rem] md:leading-4 md:tracking-[0.04em]">
                    {item.title}
                  </h3>
                  <p className="ag-menu-benefit-copy mx-auto mt-0.5 max-w-none text-[0.5rem] font-semibold leading-[0.66rem] text-brand-black/70 md:mx-0 md:mt-2 md:max-w-[24ch] md:text-[0.76rem] md:leading-5">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
