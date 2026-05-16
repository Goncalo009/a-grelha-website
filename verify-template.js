#!/usr/bin/env node
// Quick sanity check for template structure
const fs = require('fs');
const path = require('path');

const templateDir = process.argv[2] || '.';
const required = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'postcss.config.mjs',
  'components.json',
  'app/layout.tsx',
  'app/(marketing)/page.tsx',
  'components/ui/button.tsx',
  'components/sections/hero-section.tsx',
  'lib/utils.ts',
  'config/site.ts',
  'config/seo.ts',
  'styles/globals.css',
  'middleware.ts',
  'next.config.ts',
];

console.log('🔍 A verificar estrutura do template...\n');

let missing = [];
for (const file of required) {
  const fullPath = path.join(templateDir, file);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} (em falta)`);
    missing.push(file);
  }
}

if (missing.length > 0) {
  console.log('\n❌ Faltam ficheiros:'); // PT-PT
  process.exit(1);
} else {
  console.log('\n✅ Template completo e pronto a usar!');
  process.exit(0);
}
