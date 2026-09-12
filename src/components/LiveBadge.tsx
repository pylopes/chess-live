type LiveBadgeProps = {
  isLive: boolean
}

export function LiveBadge({ isLive }: LiveBadgeProps) {
  if (isLive) {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-chess">
        <span className="live-dot size-2.5 rounded-full bg-chess" aria-hidden="true" />
        AO VIVO
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-500">
      <span className="size-2.5 rounded-full bg-red-500" aria-hidden="true" />
      OFFLINE
    </span>
  )
}
