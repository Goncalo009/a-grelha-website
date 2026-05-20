import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, generateMetadata } from "@/config/seo";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = generateMetadata({
  title: "Notas da grelha",
  description:
    "Notas curtas da A Grelha sobre carvão, piri-piri, acompanhamentos e tradição de churrasqueira portuguesa.",
  path: "/blog",
  image: "/stitch/blog/featured-recipe.jpg",
});

const posts = [
  {
    tag: "Molho",
    title: "Piri-piri que aquece sem tapar o frango",
    text: "O molho certo realça a pele tostada, não esconde o sabor do carvão. Na A Grelha, o picante entra no fim.",
    image: "/stitch/blog/featured-recipe.jpg",
    alt: "Frango piri-piri acabado de grelhar",
  },
  {
    tag: "Vinho",
    title: "Tintos simples para febras e entremeada",
    text: "Para carne de porco no carvão, escolha vinho com fruta e frescura. A gordura agradece acidez.",
    image: "/stitch/blog/wine-pairing.jpg",
    alt: "Vinho tinto junto a prato de carne",
  },
  {
    tag: "Casa",
    title: "Como encomendar melhor ao fim de semana",
    text: "Em dias de movimento, encomendar cedo ajuda a apanhar o frango no ponto e evita espera no balcão.",
    image: "/stitch/blog/new-location.jpg",
    alt: "Interior de restaurante com balcão",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${absoluteUrl("/blog")}#blog`,
  name: "Notas da grelha",
  url: absoluteUrl("/blog"),
  inLanguage: "pt-PT",
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.text,
    image: absoluteUrl(post.image),
  })),
};

export default function BlogPage() {
  return (
    <main id="conteudo" className="bg-[#e3d9cc]">
      <BreadcrumbSchema items={[{ name: "Blog", path: "/blog" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block -rotate-2 bg-white px-4 py-2 font-extrabold uppercase tracking-[0.2em] text-brand-red shadow-[4px_4px_0_#1f1b13]">
            Notas da grelha
          </p>
          <h1 className="mt-6 max-w-5xl font-headline text-[clamp(5rem,13vw,11rem)] uppercase leading-[0.82] text-brand-black">
            Conversas de carvão
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-[#3b3327] md:text-xl">
            Pequenas notas sobre grelhados, encomendas e hábitos de mesa. Sem
            prometer revista gourmet: só aquilo que ajuda a comer melhor.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="bg-[#fff8f2] p-3 pb-8 shadow-[10px_10px_0_rgba(31,27,19,0.18)]">
              <div className="relative aspect-[4/3]">
                <Image src={post.image} alt={post.alt} fill sizes="(min-width: 768px) 30vw, 92vw" className="object-cover" />
              </div>
              <p className="mt-5 inline-block bg-brand-red px-3 py-1 font-extrabold uppercase tracking-widest text-white">
                {post.tag}
              </p>
              <h2 className="mt-4 font-headline text-4xl uppercase leading-none text-brand-black">{post.title}</h2>
              <p className="mt-3 font-bold leading-relaxed text-[#5d3f3d]">{post.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-black px-4 py-16 text-center text-white md:px-6">
        <h2 className="font-headline text-5xl uppercase leading-none md:text-7xl">Quer jantar resolvido?</h2>
        <Link href="/encomendas" className="mt-8 inline-block bg-brand-red px-7 py-5 font-headline text-3xl uppercase text-white shadow-[6px_6px_0_#000]">
          Fazer encomenda
        </Link>
      </section>
    </main>
  );
}
