#!/bin/bash
# Script de setup automático do template

set -e

echo "🔧 A instalar dependências..."
npm install

echo "✅ Setup completo!"
echo ""
echo "🚀 Para começar:"
echo "   npm run dev"
echo ""
echo "📝 Lembra-te de editar:"
echo "   - config/site.ts (nome, URL, redes sociais)"
echo "   - config/seo.ts (metadados, og image)"
