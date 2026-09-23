import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedNoticias(): Promise<CollectionEntry<'noticias'>[]> {
  const agora = new Date();
  const noticias = await getCollection('noticias', (n) => n.data.pubDate <= agora);
  return noticias.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
