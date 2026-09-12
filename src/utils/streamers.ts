import type { Streamer } from '../types/streamer'

export const PAGE_SIZE = 12

export function sortStreamers(streamers: Streamer[]): Streamer[] {
  return [...streamers].sort((a, b) => {
    if (a.is_live !== b.is_live) return a.is_live ? -1 : 1
    return a.username.localeCompare(b.username, 'pt-BR', { sensitivity: 'base' })
  })
}

export function filterByUsername(streamers: Streamer[], query: string): Streamer[] {
  const term = query.trim().toLowerCase()
  if (!term) return streamers
  return streamers.filter((streamer) => streamer.username.toLowerCase().includes(term))
}

export function countLive(streamers: Streamer[]): number {
  return streamers.filter((streamer) => streamer.is_live).length
}
