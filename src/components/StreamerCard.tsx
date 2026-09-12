import type { Streamer } from '../types/streamer'
import { LiveBadge } from './LiveBadge'

type StreamerCardProps = {
  streamer: Streamer
}

export function StreamerCard({ streamer }: StreamerCardProps) {
  const initial = streamer.username.slice(0, 1).toUpperCase()

  return (
    <article className="flex gap-3 rounded-xl border border-line bg-surface p-4 transition hover:border-accent">
      <div className="flex w-24 shrink-0 flex-col items-center gap-2">
        {streamer.avatar ? (
          <img
            src={streamer.avatar}
            alt={streamer.username}
            className="size-16 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex size-16 items-center justify-center rounded-full bg-chess text-lg font-semibold text-white"
            aria-hidden="true"
          >
            {initial}
          </div>
        )}
        <p className="w-full truncate text-center text-sm font-medium text-fg" title={streamer.username}>
          {streamer.username}
        </p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
        {streamer.twitch_url ? (
          <a
            href={streamer.twitch_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-twitch px-3 py-2 text-center text-sm font-medium text-white hover:opacity-90"
          >
            Assistir
          </a>
        ) : null}
        <a
          href={streamer.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-chess px-3 py-2 text-center text-sm font-medium text-white hover:opacity-90"
        >
          Chess.com
        </a>
        <LiveBadge isLive={streamer.is_live} />
      </div>
    </article>
  )
}
