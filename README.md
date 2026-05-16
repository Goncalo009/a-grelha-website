# 🏗️ Next.js 16 + React 19: Template para Escalabilidade e SEO

Template base optimizado para landing pages e SaaS com foco em performance, SEO e manutenibilidade.

## 🚀 Começar Rápido

```bash
# 1. Copia este template para novo projecto
cp -r template-website-react seu-novo-projecto

# 2. Instala dependências
cd seu-novo-projecto
npm install

# 3. Edita as configurações básicas
# - config/site.ts (nome, URL, redes sociais)
# - config/seo.ts (metadados, og image)

# 4. Corre em desenvolvimento
npm run dev
```

## 📂 Estrutura

- `app/` - Rotas e SEO (sitemap, robots)
- `components/` - UI e sections
- `config/` - Site config e SEO defaults
- `lib/` - Utilitários (cn, formatters)
- `styles/` - Tailwind + CSS variables
- `public/` - Imagens e favicon

## 🛠️ Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- shadcn/ui components
- FSD architecture (Feature-Sliced Design)

## 📝 Workflow

1. Cria sections em `components/sections/`
2. Usa components UI de `components/ui/`
3. Página principal em `app/(marketing)/page.tsx`
4. Configura metadados em `config/seo.ts`

## 🔧 Customização

- Cores/tema: `tailwind.config.ts` + `styles/globals.css`
- Fontes: edita `app/layout.tsx`
- SEO: `config/seo.ts` + `config/site.ts`

---

Desenvolvido para velocidade extrema e máxima indexação Google (Lighthouse 100).
