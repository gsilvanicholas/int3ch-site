import type { APIRoute } from 'astro';

export const prerender = false;

function decodeBase64Url(encoded: string): string {
  const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4);
  return atob(padded);
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

  if (!/^https?:\/\//i.test(destino)) {
    return new Response('Link invalido: destino nao e uma URL http(s).', { status: 400 });
  }

  return redirect(destino, 302);
};
