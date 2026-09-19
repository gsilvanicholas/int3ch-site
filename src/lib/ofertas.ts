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

const URL_MANUAL = 'https://raw.githubusercontent.com/gsilvanicholas/int3ch-site/master/data/manual-ofertas.json';
const URL_AUTOMATICO = 'https://raw.githubusercontent.com/gsilvanicholas/int3ch-site/master/data/ofertas.json';

async function buscarFonte(url: string): Promise<Oferta[]> {
  try {
    const resp = await fetch(url, { cache: 'no-store' });
    if (resp.ok) return (await resp.json()) as Oferta[];
  } catch {
    // ignora fonte indisponivel, segue com as demais
  }
  return [];
}

export async function getOfertas(): Promise<Oferta[]> {
  // manuais primeiro (mais recente primeiro dentro da lista): curadoria direta do
  // canal, prioridade sobre o feed automatico
  const [manuais, automaticas] = await Promise.all([buscarFonte(URL_MANUAL), buscarFonte(URL_AUTOMATICO)]);
  return [...manuais, ...automaticas];
}

// Mistura as ofertas manuais mais recentes com as do feed automatico (que se
// renova a cada ciclo do bot), pra secoes de destaque nao ficarem sempre com
// o mesmo conjunto parado.
export async function getOfertasRecentes(qtdManual: number, qtdAutomatico: number): Promise<Oferta[]> {
  const [manuais, automaticas] = await Promise.all([buscarFonte(URL_MANUAL), buscarFonte(URL_AUTOMATICO)]);
  return [...manuais.slice(0, qtdManual), ...automaticas.slice(0, qtdAutomatico)];
}

// Igual getOfertasRecentes, mas tambem devolve o total real disponivel (manuais +
// automaticas) - usado pra estatisticas na home, que nao podem mostrar so o
// tamanho da amostra como se fosse o total de ofertas do site.
export async function getOfertasRecentesComTotal(
  qtdManual: number,
  qtdAutomatico: number
): Promise<{ amostra: Oferta[]; total: number }> {
  const [manuais, automaticas] = await Promise.all([buscarFonte(URL_MANUAL), buscarFonte(URL_AUTOMATICO)]);
  return {
    amostra: [...manuais.slice(0, qtdManual), ...automaticas.slice(0, qtdAutomatico)],
    total: manuais.length + automaticas.length,
  };
}

export function filtrarPorTermos(ofertas: Oferta[], termos: string[], limite = 6, excluir: string[] = []): Oferta[] {
  const termosNormalizados = termos.map((t) => t.toLowerCase());
  const excluirNormalizados = excluir.map((t) => t.toLowerCase());
  return ofertas
    .filter((o) => {
      const titulo = o.titulo.toLowerCase();
      if (excluirNormalizados.some((t) => titulo.includes(t))) return false;
      return termosNormalizados.some((t) => titulo.includes(t));
    })
    .slice(0, limite);
}
