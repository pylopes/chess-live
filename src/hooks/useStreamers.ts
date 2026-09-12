import { useCallback, useEffect, useState } from 'react'
import { fetchStreamers } from '../services/chessApi'
import type { FetchStatus, Streamer } from '../types/streamer'

export function useStreamers() {
  const [streamers, setStreamers] = useState<Streamer[]>([])
  const [status, setStatus] = useState<FetchStatus>('loading')
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    setStatus('loading')
    setError(null)

    try {
      const data = await fetchStreamers()
      setStreamers(data)
      setStatus('success')
    } catch (err) {
      setStreamers([])
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Não foi possível carregar os streamers.')
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    fetchStreamers()
      .then((data) => {
        if (cancelled) return
        setStreamers(data)
        setStatus('success')
      })
      .catch((err: unknown) => {
        if (cancelled) return
        setStreamers([])
        setStatus('error')
        setError(err instanceof Error ? err.message : 'Não foi possível carregar os streamers.')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { streamers, status, error, reload: load }
}
