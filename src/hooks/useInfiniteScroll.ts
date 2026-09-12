import { useEffect, useRef } from 'react'

type Options = {
  enabled?: boolean
  refreshKey?: number
}

export function useInfiniteScroll(
  onLoadMore: () => void,
  { enabled = true, refreshKey = 0 }: Options = {},
) {
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!enabled) return

    const node = sentinelRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) onLoadMore()
      },
      { rootMargin: '160px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [enabled, onLoadMore, refreshKey])

  return sentinelRef
}
