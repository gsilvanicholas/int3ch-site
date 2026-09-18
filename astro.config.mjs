// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

const SITE = 'https://int3ch-site.vercel.app';

// A home e as paginas de blog viraram SSR (para o agendamento de posts funcionar
// sem precisar de redeploy a cada lancamento), entao o sitemap nao as descobre
// sozinho - por isso a lista manual abaixo. Atualizar ao adicionar posts novos.
const POSTS_BLOG = [
  'gargalo-cpu-gpu',
  'ssd-nvme-vale-a-pena',
  'sinais-de-anuncio-fake',
  'quanta-ram-preciso',
  'como-calcular-fonte',
  'air-cooler-ou-water-cooler',
  'ddr4-vs-ddr5',
  'switches-teclado-mecanico',
  'hdmi-2-0-vs-2-1',
  'pc-superaquecendo',
  'nvme-gen3-vs-gen4',
];

// https://astro.build/config
export default defineConfig({
  // TODO: trocar pelo dominio definitivo quando comprar um
  site: SITE,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      customPages: [
        SITE,
        `${SITE}/blog`,
        ...POSTS_BLOG.map((slug) => `${SITE}/blog/${slug}`),
        `${SITE}/ofertas`,
        `${SITE}/top5`,
        `${SITE}/funis/placa-de-video`,
        `${SITE}/funis/processador`,
        `${SITE}/funis/placa-mae`,
        `${SITE}/funis/monitores-gamer`,
        `${SITE}/funis/mouses-gamer`,
      ],
    }),
  ],
  adapter: vercel()
});