// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: trocar pelo dominio definitivo assim que ele existir
  site: 'https://int3ch.com.br',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});