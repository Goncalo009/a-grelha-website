import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Desativa o header X-Powered-By (não contar ao mundo que usamos Next.js - Segurança por obscuridade)
  poweredByHeader: false,

  // Define imagens de domínios externos autorizados (Evita hospedar/carregar assets maliciosos)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      // Não use wildcards (**) indiscriminadamente aqui!
    ],
  },
  
  // Exemplo de como forçar redirecionamentos absolutos e seguros
  async redirects() {
    return [
      // Proteção de rotas sensíveis (se o sistema for puramente headless/marketing)
      // {
      //   source: '/admin',
      //   destination: '/',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
