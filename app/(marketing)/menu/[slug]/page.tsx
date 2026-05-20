import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { absoluteUrl, generateMetadata as buildMetadata } from "@/config/seo";
import { OrderDrawer } from "@/components/forms/order-drawer";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { AppOrderBar } from "@/components/ui/app-order-bar";
import { AppScreen } from "@/components/ui/app-screen";
import { appMenuItems, getAppMenuItem } from "@/lib/app-menu";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return appMenuItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getAppMenuItem(slug);

  if (!item) {
    return buildMetadata({ title: "Produto não encontrado", path: "/menu" });
  }

  return buildMetadata({
    title: `${item.name} para takeaway`,
    description: `${item.description} Veja opções e confirme o pedido de ${item.name} por telefone ou WhatsApp na A Grelha.`,
    path: `/menu/${item.slug}`,
    image: item.image,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const item = getAppMenuItem(slug);

  if (!item) notFound();

  const itemSchema = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "@id": `${absoluteUrl(`/menu/${item.slug}`)}#menu-item`,
    name: item.name,
    description: item.description,
    image: absoluteUrl(item.image),
    url: absoluteUrl(`/menu/${item.slug}`),
    menuAddOn: item.unit === "kg" ? "Preço por kg; peso e preço final confirmados ao pedido." : "Preço por unidade/dose; disponibilidade confirmada ao pedido.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: item.priceValue.toFixed(2),
      description: item.unit === "kg" ? "Preço por kg; preço final confirmado pela equipa." : "Preço à unidade ou dose; confirmação por telefone ou WhatsApp.",
    },
  };

  return (
    <main id="conteudo" className="bg-[#f2f1ef]">
      <BreadcrumbSchema items={[{ name: "Menu takeaway", path: "/menu" }, { name: item.name, path: `/menu/${item.slug}` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemSchema) }} />
      <AppScreen>
        <article className="pb-40">
          <div className="relative h-[204px] overflow-hidden bg-[#1c1c1c]">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority
              sizes="430px"
              className={`object-cover ${item.imagePosition ?? "object-center"}`}
            />
            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="h-2 w-2 rounded-full border border-white/80 bg-transparent" />
              <span className="h-2 w-2 rounded-full border border-white/80 bg-transparent" />
              <span className="h-2 w-2 rounded-full border border-white/80 bg-transparent" />
            </div>
          </div>

          <div className="px-4 pt-3">
            <header className="grid grid-cols-[1fr_auto] items-start gap-4">
              <div>
                <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-[#c6452c]">
                  {item.category}
                </p>
                <h1 className="mt-1 text-[1.45rem] font-extrabold uppercase leading-none tracking-[-0.035em] text-[#1c1c1c]">
                  {item.name}
                </h1>
              </div>
              <p className="pt-5 text-[1rem] font-extrabold text-[#1c1c1c]">{item.price}</p>
            </header>

            <p className="mt-2 max-w-[30ch] text-[0.8rem] leading-[1.15rem] text-[#1c1c1c]/72">
              {item.description}
            </p>

            <div className="mt-4 h-px bg-[#e6e4e1]" />

            <section className="mt-4 rounded-[14px] bg-white p-4 shadow-[0_12px_28px_rgba(28,28,28,0.07)]" aria-labelledby="pedido-title">
              <h2 id="pedido-title" className="text-[0.7rem] font-extrabold uppercase tracking-[0.07em] text-[#1c1c1c]">
                Preparar pedido
              </h2>
              <p className="mt-2 text-[0.78rem] leading-5 text-[#1c1c1c]/68">
                Escolha {item.unit === "kg" ? "o peso" : "a quantidade"} e as unidades no painel de produto. O preço final é confirmado pela equipa antes de fechar.
              </p>
            </section>

            <div className="mt-4">
              <OrderDrawer variant="add" price={item.price} product={item} label="Escolher e adicionar" />
            </div>
          </div>
        </article>
        <AppOrderBar />
      </AppScreen>
    </main>
  );
}
