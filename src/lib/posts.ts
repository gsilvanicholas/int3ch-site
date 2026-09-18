import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const agora = new Date();
  const posts = await getCollection('blog', (post) => post.data.pubDate <= agora);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function coverClara(cover: string): string {
  return cover.replace(/-cover\.svg$/, '-cover-light.svg');
}
