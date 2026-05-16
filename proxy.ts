import { NextResponse } from 'next/server'

export function proxy() {
  // Clone the response so we can modify headers
  const response = NextResponse.next()

  // 1. Prevenir Clickjacking (Iframes maliciosos)
  response.headers.set('X-Frame-Options', 'DENY')

  // 2. Prevenir MIME-Sniffing (Evita que browsers executem arquivos não-scripts como scripts)
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // 3. Referrer Policy (Controla que informação é enviada quando o usuário clica num link que sai do site)
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // 4. Strict-Transport-Security (Garante HTTPS sempre)
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')

  // 5. Content Security Policy (CSP) Básico
  // Impede injeção de scripts (XSS) que costumam criar páginas falsas ou redirecionamentos fantasma
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://*;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
  // Substitui as quebras de linha para formatar corretamente
  response.headers.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim())

  return response
}

export const config = {
  // Executa o middleware em todas as rotas (exceto estáticos e imagens)
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
