import type { APIRoute } from 'astro';
import shortLinks from '../../../data/short-links.json';

export const prerender = false;

// mesma lista de dominios permitidos do /o.ts - defesa em profundidade, mesmo
// que quem escreve em data/short-links.json seja so a propria automacao
const DOMINIOS_PERMITIDOS = [
  'shope.ee', 'shopee.com.br', 's.shopee.com.br',
  's.click.aliexpress.com', 'aliexpress.com',
  'meli.la', 'mercadolivre.com', 'mercadolivre.com.br',
  'amazon.com.br', 'amazon.com',
  'int3ch.com.br',
];

function hostPermitido(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return DOMINIOS_PERMITIDOS.some((d) => h === d || h.endsWith(`.${d}`));
}

export const GET: APIRoute = ({ params, redirect }) => {
  const codigo = params.code;
  const destino = codigo ? (shortLinks as Record<string, string>)[codigo] : undefined;

  if (!destino) {
    return new Response('Link nao encontrado.', { status: 404 });
  }

  let destinoUrl: URL;
  try {
    destinoUrl = new URL(destino);
  } catch {
    return new Response('Link invalido.', { status: 400 });
  }

  if (!hostPermitido(destinoUrl.hostname)) {
    return new Response('Link invalido: dominio de destino nao permitido.', { status: 400 });
  }

  return redirect(destinoUrl.toString(), 302);
};
