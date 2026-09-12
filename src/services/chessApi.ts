import type { Streamer } from '../types/streamer'

const STREAMERS_URL = 'https://api.chess.com/pub/streamers'

export async function fetchStreamers(): Promise<Streamer[]> {
  const response = await fetch(STREAMERS_URL, {
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Falha ao carregar streamers (${response.status})`)
  }

  const data: unknown = await response.json()

  if (
    !data ||
    typeof data !== 'object' ||
    !Array.isArray((data as { streamers?: unknown }).streamers)
  ) {
    throw new Error('Resposta inválida da API')
  }

  return (data as { streamers: Streamer[] }).streamers
}
