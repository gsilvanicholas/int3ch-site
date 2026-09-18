export async function getMembrosCanal(): Promise<number | null> {
  const token = import.meta.env.TELEGRAM_BOT_TOKEN;
  if (!token) return null;

  try {
    const resp = await fetch(
      `https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=@int3ch`,
      { cache: 'no-store' }
    );
    const data = await resp.json();
    if (data.ok && typeof data.result === 'number') {
      return data.result;
    }
  } catch {
    // segue sem o numero se a API do Telegram falhar
  }
  return null;
}
