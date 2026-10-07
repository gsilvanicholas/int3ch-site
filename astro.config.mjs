// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

const SITE = 'https://int3ch.com.br';

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
  'placa-video-usada',
  'selo-80-plus-fonte',
  'vida-util-ssd',
  '144hz-vs-240hz',
  'overclock-vale-a-pena',
  'm2-vs-sata-ssd',
  'mini-pc-gamer-vale-a-pena',
  '8gb-vram-suficiente-2026',
];

// Noticias tambem sao SSR (mesmo motivo do blog) - mesma lista manual.
// Atualizar ao adicionar noticias novas.
const NOTICIAS = [
  'adobe-premiere-gratis-android',
  'oculos-com-ia-privacidade',
  'lian-li-edge-hub-adv-gpu',
  'minisforum-atomman-g1-pro-mini-pc-gamer',
  'steam-setembro-2026-rtx-5070-32gb-ram',
];

// Guias (funis) tambem sao SSR - mesma lista manual. Atualizar ao adicionar
// guias novos em src/pages/funis/*.astro.
const GUIAS = [
  'placa-de-video',
  'processador',
  'placa-mae',
  'monitores-gamer',
  'mouses-gamer',
  'memoria-ram',
  'ssd',
  'fonte',
  'teclado',
  'gabinete',
  'headset-gamer',
  'cooler',
  'controle',
];

// https://astro.build/config
export default defineConfig({
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
        `${SITE}/noticias`,
        ...NOTICIAS.map((slug) => `${SITE}/noticias/${slug}`),
        `${SITE}/ofertas`,
        ...GUIAS.map((slug) => `${SITE}/funis/${slug}`),
      ],
    }),
  ],
  adapter: vercel()
});