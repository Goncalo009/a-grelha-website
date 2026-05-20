import { Phone } from "lucide-react";
import menuData from "@/content/menu.json";
import { siteConfig } from "@/config/site";
import { formatMenuPrice } from "@/lib/app-menu";
import type { MenuData } from "@/types/menu";

const menu = menuData as MenuData;

const featuredOrderNames = [
  "Frango",
  "Picanha",
  "Maminha",
  "Coração da Alcatra",
  "Entrecosto",
  "Batata Frita",
  "Arroz Branco",
  "Azeitonas",
];

const allDishes = menu.categories.flatMap((category) => category.dishes);
const orderItems = featuredOrderNames.flatMap((name) => {
  const dish = allDishes.find((item) => item.name === name);
  return dish ? [dish] : [];
});

const phoneHref = `tel:${siteConfig.phone.replaceAll(" ", "")}`;

export function OrderForm() {
  return (
    <section className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-brand-cream p-5 shadow-warm ring-1 ring-brand-brown/10 md:p-8">
      <div className="grid gap-7">
        <div>
          <h2 className="font-headline text-5xl leading-none tracking-[-0.035em] text-brand-black md:text-6xl">Lista para a chamada</h2>
          <p className="mt-3 leading-relaxed text-brand-brown">
            Marque produtos e escreva notas apenas para se orientar. Esta página não envia nem guarda dados; a confirmação acontece ao ligar para a A Grelha.
          </p>
        </div>

        <fieldset>
          <legend className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">Produtos de referência</legend>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {orderItems.map((dish) => (
              <label
                key={dish.id}
                className="group grid cursor-pointer grid-cols-[auto_1fr] gap-3 rounded-[1.25rem] bg-white p-4 text-brand-black shadow-card ring-1 ring-brand-brown/10 transition-colors has-[:checked]:bg-brand-red has-[:checked]:text-white"
              >
                <input
                  type="checkbox"
                  name="produto"
                  value={dish.name}
                  className="mt-1 size-5 accent-brand-red"
                />
                <span>
                  <span className="block font-headline text-2xl leading-tight md:text-3xl">{dish.name}</span>
                  <span className="mt-1 block text-sm font-semibold text-brand-red group-has-[:checked]:text-white">{formatMenuPrice(dish)}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="order-name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">Nome para a chamada</label>
            <input
              id="order-name"
              name="nome"
              autoComplete="name"
              className="w-full rounded-2xl border border-brand-brown/15 bg-white px-4 py-3 text-lg text-brand-black shadow-card focus:outline-none focus:ring-2 focus:ring-brand-red"
              placeholder="O seu nome"
            />
          </div>
          <div>
            <label htmlFor="order-phone" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">Telefone</label>
            <input
              id="order-phone"
              name="telefone"
              autoComplete="tel"
              className="w-full rounded-2xl border border-brand-brown/15 bg-white px-4 py-3 text-lg text-brand-black shadow-card focus:outline-none focus:ring-2 focus:ring-brand-red"
              type="tel"
              placeholder={siteConfig.phone}
            />
          </div>
        </div>

        <div>
          <label htmlFor="order-notes" className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-brand-red">Notas para dizer ao telefone</label>
          <textarea
            id="order-notes"
            name="observacoes"
            className="min-h-32 w-full rounded-2xl border border-brand-brown/15 bg-white px-4 py-3 text-lg text-brand-black shadow-card focus:outline-none focus:ring-2 focus:ring-brand-red"
            placeholder="Ex.: quantidade/peso, piri-piri à parte, hora pretendida, alergénios..."
          />
        </div>

        <div className="flex flex-col gap-4 rounded-[1.5rem] bg-brand-beige p-5 md:flex-row md:items-center md:justify-between">
          <p className="font-headline text-3xl leading-tight text-brand-black md:text-4xl">
            Preço final, peso e hora confirmados por telefone.
          </p>
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-4 font-semibold text-white shadow-warm focus:outline-none focus:ring-2 focus:ring-brand-black"
          >
            <Phone aria-hidden="true" size={20} />
            Ligar para confirmar
          </a>
        </div>

        <p role="note" className="rounded-2xl bg-white px-4 py-3 text-sm text-brand-brown shadow-card ring-1 ring-brand-brown/10">
          Telefone direto: {siteConfig.phone}. Fora das entradas, os preços apresentados são por kg; confirme sempre o peso e a disponibilidade ao ligar.
        </p>
      </div>
    </section>
  );
}
