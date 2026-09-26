import type { APIRoute } from 'astro';
import shortLinks from '../../../data/short-links.json';

export const prerender = false;

// Le a lista direto do GitHub a cada clique (mesmo esquema das ofertas), pra
// links novos funcionarem assim que o commit sobe, sem esperar um deploy.
// Se o GitHub nao responder, cai pra copia embutida no ultimo deploy.
const URL_LINKS = 'https://raw.githubusercontent.com/gsilvanicholas/int3ch-site/master/data/short-links.json';

async function buscarLinks(): Promise<Record<string, string>> {
  try {
    const resp = await fetch(`${URL_LINKS}?t=${Date.now()}`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(4000),
    });
    if (resp.ok) return (await resp.json()) as Record<string, string>;
  } catch {
    // usa a copia embutida
  }
  return shortLinks as Record<string, string>;
}

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

export const GET: APIRoute = async ({ params, redirect }) => {
  const codigo = params.code;
  const links = await buscarLinks();
  const destino = codigo ? links[codigo] : undefined;

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
