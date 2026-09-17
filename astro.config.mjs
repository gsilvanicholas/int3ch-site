// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: trocar pelo dominio definitivo quando comprar um
  site: 'https://int3ch-site.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});