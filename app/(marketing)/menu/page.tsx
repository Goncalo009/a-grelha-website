import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, ShoppingBag } from "lucide-react";
import { absoluteUrl, generateMetadata } from "@/config/seo";
import { OrderDrawer } from "@/components/forms/order-drawer";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { AppScreen } from "@/components/ui/app-screen";
import {
  appMenuGroups,
  menuAllergens,
  menuCouvert,
  menuNotes,
  type AppMenuGroup,
  type AppMenuItem,
} from "@/lib/app-menu";

export const metadata: Metadata = generateMetadata({
  title: "Menu takeaway em Samora Correia",
  description:
    "Veja entradas, grelhados por kg, combos com preço por dose e acompanhamentos da A Grelha. Confirme disponibilidade por telefone ou WhatsApp.",
  path: "/menu",
  image: "/stitch/menu/frango-piri-piri.jpg",
});

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${absoluteUrl("/menu")}#menu`,
  name: "Menu takeaway da A Grelha",
  url: absoluteUrl("/menu"),
  inLanguage: "pt-PT",
  hasMenuSection: appMenuGroups.map((category) => ({
    "@type": "MenuSection",
    name: category.name,
    description: category.description,
    hasMenuItem: category.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      image: absoluteUrl(item.image),
      url: absoluteUrl(`/menu/${item.slug}`),
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: item.priceValue.toFixed(2),
        description: item.unit === "kg" ? "Preço por kg; preço final confirmado ao pedido." : "Preço por unidade ou dose; disponibilidade confirmada ao pedido.",
      },
    })),
  })),
};

function categoryLabel(category: AppMenuGroup) {
  return category.name.split("/")[0]?.trim() || category.name;
}

function categoryTabLabel(category: AppMenuGroup) {
  const label = categoryLabel(category);
  if (label === "Combos") return "Combos";
  return label === "Acompanhamentos" ? "Acomp." : label;
}

function MenuCard({ item }: { item: AppMenuItem }) {
  const priceNote = item.categoryId === "combos" ? "Preço dose" : item.unit === "kg" ? "Preço/kg" : "Preço un.";

  return (
    <article className="relative grid min-h-[96px] grid-cols-[34%_1fr] overflow-hidden rounded-[15px] border border-[#e7ded6] bg-white shadow-[0_8px_22px_rgba(54,35,23,0.06)] focus-within:ring-2 focus-within:ring-[#c6452c]/35">
      <div className="relative min-h-[96px] overflow-hidden bg-[#ede8e1]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 430px) 34vw, 146px"
          className={`object-cover ${item.imagePosition ?? "object-center"}`}
        />
      </div>

      <div className="grid min-w-0 grid-cols-[1fr_auto] gap-2.5 px-3.5 py-3">
        <div className="min-w-0">
          <div className="flex items-start gap-1.5">
            <h2 className="line-clamp-2 text-[0.82rem] font-extrabold uppercase leading-[1.08] tracking-[-0.01em] text-[#141414]">
              {item.name}
            </h2>
            {item.orderOnly ? (
              <span className="mt-0.5 shrink-0 rounded-full bg-[#fff3ec] px-1.5 py-0.5 text-[0.48rem] font-extrabold uppercase tracking-[0.08em] text-[#c6452c]">
                3 dias
              </span>
            ) : null}
          </div>
          <p className="mt-1.5 line-clamp-2 max-w-[20ch] text-[0.72rem] leading-[1.05rem] text-[#1c1c1c]/68">
            {item.description}
          </p>
          <div className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <p className="text-[0.92rem] font-extrabold leading-none text-[#141414]">{item.price}</p>
            <p className="text-[0.62rem] leading-none text-[#1c1c1c]/54">{priceNote}</p>
          </div>
        </div>

        <div className="flex items-end pb-0.5">
          <OrderDrawer
            variant="quick-add"
            product={item}
            quickIcon="cart"
            className="shrink-0"
          />
        </div>
      </div>
    </article>
  );
}

export default function MenuPage() {
  return (
    <main id="conteudo" className="bg-[#f2f1ef]">
      <BreadcrumbSchema items={[{ name: "Menu takeaway", path: "/menu" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
      <AppScreen className="overflow-visible bg-[#fbfaf7]">
        <h1 className="sr-only">Menu takeaway da A Grelha</h1>

        <div className="flex items-center justify-center gap-2 px-4 py-3 text-[0.84rem] font-semibold tracking-[-0.02em] text-[#1c1c1c]/78">
          <ShoppingBag aria-hidden="true" size={16} strokeWidth={1.7} />
          <span>Take-away</span>
          <span className="h-1 w-1 rounded-full bg-[#c6452c]" aria-hidden="true" />
          <span>Porto Alto</span>
        </div>

        <nav
          aria-label="Categorias do menu"
          className="sticky top-[var(--ag-mobile-sticky-top)] z-30 border-y border-[#e7ded6] bg-[#fbfaf7]/98 px-3 py-2 shadow-[0_10px_22px_rgba(54,35,23,0.08)] backdrop-blur"
        >
          <div className="grid grid-cols-4 gap-2">
            {appMenuGroups.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex min-h-10 min-w-0 items-center justify-center rounded-[13px] border border-[#e7ded6] bg-white px-2 text-center text-[0.74rem] font-bold tracking-[-0.02em] text-[#141414] shadow-[0_6px_14px_rgba(54,35,23,0.045)] transition hover:border-[#c6452c]/45 hover:text-[#c6452c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6452c]"
              >
                {categoryTabLabel(category)}
              </a>
            ))}
          </div>
        </nav>

        <div className="px-4 pb-[var(--ag-mobile-page-end-pad-lg)] pt-5">
          <div className="grid gap-7">
            {appMenuGroups.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-[var(--ag-mobile-menu-scroll-mt)]">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-[1.55rem] font-extrabold leading-none tracking-[-0.04em] text-[#141414]">
                      {categoryLabel(category)}
                    </h2>
                    {category.description ? (
                      <p className="mt-2 text-[0.84rem] leading-5 tracking-[-0.015em] text-[#1c1c1c]/64">
                        {category.description}
                      </p>
                    ) : null}
                  </div>
                  <Leaf aria-hidden="true" className="mt-0.5 h-7 w-7 shrink-0 text-[#df7c6b]/72" strokeWidth={1.55} />
                </div>

                <div className="grid gap-3">
                  {category.items.map((item) => (
                    <MenuCard key={item.slug} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-7 rounded-[16px] border border-[#e7ded6] bg-white p-4 text-[#1c1c1c] shadow-[0_10px_24px_rgba(54,35,23,0.06)]">
            <h2 className="text-[0.76rem] font-extrabold uppercase tracking-[0.08em] text-[#141414]">
              Informação legal
            </h2>
            <div className="mt-3 grid gap-3 text-[0.74rem] leading-5 text-[#1c1c1c]/68">
              {menuNotes.map((note) => (
                <p key={note.reference}>
                  <strong className="text-[#c6452c]">{note.reference}</strong> {note.text}
                </p>
              ))}
              {menuAllergens ? (
                <p>
                  <strong className="text-[#141414]">{menuAllergens.title}: </strong>
                  {menuAllergens.text}
                </p>
              ) : null}
              {menuCouvert ? (
                <div className="grid gap-2">
                  <p>
                    <strong className="text-[#141414]">{menuCouvert.title}: </strong>
                    {menuCouvert.text}
                  </p>
                  <p>{menuCouvert.definition}</p>
                  <p>{menuCouvert.legislation}</p>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </AppScreen>
    </main>
  );
}
