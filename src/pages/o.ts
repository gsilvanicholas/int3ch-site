import type { APIRoute } from 'astro';

export const prerender = false;

function decodeBase64Url(encoded: string): string {
  const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
  return atob(padded);
}

// Sem essa lista, /o?u=<qualquer-coisa-em-base64> vira um "open redirect": qualquer
// pessoa pode disfarçar um link malicioso atrás do dominio int3ch.com.br, o que
// pode inclusive fazer o dominio ser sinalizado por antivirus/verificadores de link
// do Telegram e WhatsApp. So os dominios das lojas/parceiros que a gente realmente usa.
const DOMINIOS_PERMITIDOS = [
  'shope.ee', 'shopee.com.br', 's.shopee.com.br',
  's.click.aliexpress.com', 'aliexpress.com',
  'meli.la', 'mercadolivre.com', 'mercadolivre.com.br',
  'int3ch.com.br',
];

function hostPermitido(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return DOMINIOS_PERMITIDOS.some((d) => h === d || h.endsWith(`.${d}`));
}

export const GET: APIRoute = ({ url, redirect }) => {
  const encoded = url.searchParams.get('u');
  if (!encoded) {
    return new Response('Link invalido: parametro "u" ausente.', { status: 400 });
  }

  let destino: string;
  try {
    destino = decodeBase64Url(encoded);
  } catch {
    return new Response('Link invalido: nao foi possivel decodificar.', { status: 400 });
  }

  let destinoUrl: URL;
  try {
    destinoUrl = new URL(destino);
  } catch {
    return new Response('Link invalido: destino nao e uma URL valida.', { status: 400 });
  }

  if (!/^https?:$/i.test(destinoUrl.protocol)) {
    return new Response('Link invalido: destino nao e uma URL http(s).', { status: 400 });
  }

  if (!hostPermitido(destinoUrl.hostname)) {
    return new Response('Link invalido: dominio de destino nao permitido.', { status: 400 });
  }

  return redirect(destinoUrl.toString(), 302);
};
