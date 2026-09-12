import { useCallback, useMemo, useState } from 'react'
import { EmptyState } from './components/EmptyState'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LoadingState } from './components/LoadingState'
import { Pagination } from './components/Pagination'
import { SearchBar } from './components/SearchBar'
import { StreamerGrid } from './components/StreamerGrid'
import { useInfiniteScroll } from './hooks/useInfiniteScroll'
import { useMediaQuery } from './hooks/useMediaQuery'
import { useStreamers } from './hooks/useStreamers'
import { useTheme } from './hooks/useTheme'
import { countLive, filterByUsername, PAGE_SIZE, sortStreamers } from './utils/streamers'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { streamers, status, error, reload } = useStreamers()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const liveCount = useMemo(() => countLive(streamers), [streamers])

  const filtered = useMemo(
    () => filterByUsername(sortStreamers(streamers), query),
    [streamers, query],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  const displayed = isDesktop
    ? filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    : filtered.slice(0, visibleCount)

  const canLoadMore = !isDesktop && status === 'success' && visibleCount < filtered.length

  const loadMore = useCallback(() => {
    setVisibleCount((current) => current + PAGE_SIZE)
  }, [])

  const sentinelRef = useInfiniteScroll(loadMore, {
    enabled: canLoadMore,
    refreshKey: visibleCount,
  })

  function handleQueryChange(value: string) {
    setQuery(value)
    setPage(1)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <div className="flex min-h-svh flex-col bg-bg text-fg">
      <Header liveCount={liveCount} theme={theme} onToggleTheme={toggleTheme} />

      <main className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-6">
        <SearchBar
          query={query}
          onQueryChange={handleQueryChange}
          onRefresh={reload}
          loading={status === 'loading'}
        />

        <section className="mt-6" aria-labelledby="streamers-heading">
          <h2 id="streamers-heading" className="sr-only">
            Lista de streamers
          </h2>

          {status === 'loading' ? <LoadingState /> : null}

          {status === 'error' ? (
            <EmptyState
              title="Não foi possível carregar os streamers"
              description={error ?? 'Tente novamente em instantes.'}
              actionLabel="Tentar novamente"
              onAction={reload}
            />
          ) : null}

          {status === 'success' && filtered.length === 0 ? (
            <EmptyState
              title="Nenhum streamer encontrado"
              description="Ajuste a busca ou atualize a lista."
            />
          ) : null}

          {status === 'success' && filtered.length > 0 ? (
            <>
              <StreamerGrid streamers={displayed} />
              {isDesktop ? (
                <Pagination page={currentPage} totalPages={totalPages} onPageChange={setPage} />
              ) : (
                <div ref={sentinelRef} className="h-8" aria-hidden="true" />
              )}
            </>
          ) : null}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
