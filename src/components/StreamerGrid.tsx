import type { Streamer } from '../types/streamer'
import { StreamerCard } from './StreamerCard'

type StreamerGridProps = {
  streamers: Streamer[]
}

export function StreamerGrid({ streamers }: StreamerGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {streamers.map((streamer) => (
        <StreamerCard key={streamer.username} streamer={streamer} />
      ))}
    </div>
  )
}
