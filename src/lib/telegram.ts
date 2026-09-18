export async function getMembrosCanal(): Promise<number | null> {
  const token = import.meta.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.error('[telegram] TELEGRAM_BOT_TOKEN ausente em import.meta.env');
    return null;
  }
  console.error('[telegram] token length', token.length);

  try {
    const resp = await fetch(
      `https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=@int3ch`,
      { cache: 'no-store' }
    );
    const data = await resp.json();
    if (data.ok && typeof data.result === 'number') {
      return data.result;
    }
    console.error('[telegram] resposta inesperada da API', data);
  } catch (e) {
    console.error('[telegram] falha ao buscar contagem de membros', e);
  }
  return null;
}
