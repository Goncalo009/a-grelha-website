import { siteConfig } from "@/config/site";

const menuItems = [
  { id: "frango", name: "Frango no Churrasco", price: 10.5 },
  { id: "meio-frango", name: "Meio Frango com Acompanhamento", price: 8.5 },
  { id: "churrasco-misto", name: "Churrasco Misto", price: 13.5 },
  { id: "febras", name: "Febras Grelhadas", price: 9.5 },
  { id: "entremeada", name: "Entremeada Grelhada", price: 10 },
  { id: "sardinhas", name: "Sardinhas Assadas", price: 8 },
  { id: "rissol", name: "Rissol da Casa", price: 1.8 },
  { id: "pudim", name: "Pudim de Ovos", price: 3.5 },
];

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const formatPrice = (value: number) => `${value.toFixed(2).replace(".", ",")} €`;

export function OrderForm() {
  return (
    <section className="mx-auto mt-12 max-w-4xl border-4 border-brand-black bg-[#fff8f2] p-4 shadow-[10px_10px_0_#1f1b13] md:p-8">
      <form className="grid gap-7" action={phoneHref}>
        <div>
          <h2 className="font-headline text-5xl uppercase leading-none text-brand-red">Detalhes do pedido</h2>
          <p className="mt-2 font-bold text-[#5d3f3d]">
            Marque os pratos, deixe notas para si e confirme por telefone. O total final e a hora de levantamento são confirmados pela equipa da A Grelha.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="order-name" className="mb-2 block font-extrabold uppercase tracking-widest text-brand-black">Nome</label>
            <input
              id="order-name"
              name="nome"
              autoComplete="name"
              className="w-full border-4 border-brand-black bg-white px-4 py-3 text-lg font-bold text-brand-black focus:outline-none focus:ring-4 focus:ring-brand-red"
            />
          </div>
          <div>
            <label htmlFor="order-phone" className="mb-2 block font-extrabold uppercase tracking-widest text-brand-black">Telefone</label>
            <input
              id="order-phone"
              name="telefone"
              autoComplete="tel"
              className="w-full border-4 border-brand-black bg-white px-4 py-3 text-lg font-bold text-brand-black focus:outline-none focus:ring-4 focus:ring-brand-red"
              type="tel"
            />
          </div>
        </div>

        <fieldset>
          <legend className="mb-3 block font-extrabold uppercase tracking-widest text-brand-black">Pratos</legend>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {menuItems.map((dish) => (
              <label
                key={dish.id}
                className="group grid cursor-pointer grid-cols-[auto_1fr] gap-3 border-4 border-brand-black bg-white p-4 text-brand-black transition-transform hover:-translate-y-0.5 has-[:checked]:border-brand-red has-[:checked]:bg-brand-red has-[:checked]:text-white"
              >
                <input
                  type="checkbox"
                  name="prato"
                  value={dish.name}
                  className="mt-1 size-5 accent-brand-red"
                />
                <span>
                  <span className="block font-headline text-3xl uppercase leading-none">{dish.name}</span>
                  <span className="mt-2 block font-extrabold">{formatPrice(dish.price)}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="order-notes" className="mb-2 block font-extrabold uppercase tracking-widest text-brand-black">Observações</label>
          <textarea
            id="order-notes"
            name="observacoes"
            className="min-h-32 w-full border-4 border-brand-black bg-white px-4 py-3 text-lg font-bold text-brand-black focus:outline-none focus:ring-4 focus:ring-brand-red"
            placeholder="Ex: levantar às 20:00, molho à parte, alergénios..."
          />
        </div>

        <div className="flex flex-col gap-4 border-t-4 border-brand-black pt-5 md:flex-row md:items-center md:justify-between">
          <p className="font-headline text-4xl uppercase text-brand-black md:text-5xl">
            Total confirmado <span className="text-brand-red">por telefone</span>
          </p>
          <a
            href={phoneHref}
            className="bg-brand-red px-8 py-5 text-center font-headline text-3xl uppercase text-white shadow-[6px_6px_0_#1f1b13] transition-transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-black"
          >
            Ligar para confirmar
          </a>
        </div>

        <p role="status" className="border-4 border-green-700 bg-green-100 p-4 font-extrabold text-green-900">
          Telefone direto: {siteConfig.phone}. Esta página não guarda dados pessoais; serve para organizar o pedido antes da chamada.
        </p>
      </form>
    </section>
  );
}
