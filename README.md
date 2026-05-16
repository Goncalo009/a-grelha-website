# A Grelha — Website

Website de apresentação e encomendas por telefone para **A Grelha**, churrasqueira/take-away no Porto Alto.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- `next/image` com assets locais

## Comandos

```bash
npm run dev          # desenvolvimento
npm run lint         # ESLint
npm run typecheck    # TypeScript sem emitir
npm run verify:links # valida rotas internas usadas em href
npm run build        # build de produção
npm run start        # servidor de produção local
```

## Estrutura principal

- `app/(marketing)/` — páginas públicas: home, menu, sobre, contactos, blog e encomendas
- `components/layout/` — navegação e rodapé
- `components/sections/` — secções reutilizadas na homepage
- `components/forms/order-form.tsx` — preparação de pedido para confirmação por telefone
- `components/seo/restaurant-schema.tsx` — JSON-LD Restaurant/LocalBusiness
- `config/site.ts` — domínio, morada, telefone, redes sociais e keywords locais
- `content/menu.json` — categorias e pratos apresentados no menu

## Notas de produção

A página de encomendas prepara um resumo e encaminha para chamada telefónica. Isto é deliberado: enquanto não houver integração real com email, POS, CRM ou base de dados, o site não deve fingir que uma encomenda foi recebida pelo balcão.

Antes de publicar, confirmar com o cliente:

- domínio final (`https://a-grelha.pt` está configurado por defeito);
- horário exato;
- morada/loja final e redes sociais;
- preços e disponibilidade dos pratos;
- fotografia final de marca, se houver.
