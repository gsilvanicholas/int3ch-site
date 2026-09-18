export interface Oferta {
  id?: string;
  titulo: string;
  preco: string;
  precoOriginal?: string;
  desconto?: number;
  imagem?: string;
  link: string;
  cupom?: string;
}

const FONTES = [
  'https://raw.githubusercontent.com/gsilvanicholas/int3ch-site/master/data/manual-ofertas.json',
  'https://raw.githubusercontent.com/gsilvanicholas/int3ch-site/master/data/ofertas.json',
];

export async function getOfertas(): Promise<Oferta[]> {
  const resultados = await Promise.all(
    FONTES.map(async (url) => {
      try {
        const resp = await fetch(url, { cache: 'no-store' });
        if (resp.ok) return (await resp.json()) as Oferta[];
      } catch {
        // ignora fonte indisponivel, segue com as demais
      }
      return [] as Oferta[];
    })
  );
  // manuais primeiro: curadoria direta do canal, prioridade sobre o feed automatico
  return resultados.flat();
}
