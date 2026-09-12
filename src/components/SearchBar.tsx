type SearchBarProps = {
  query: string
  onQueryChange: (value: string) => void
  onRefresh: () => void
  loading: boolean
}

export function SearchBar({ query, onQueryChange, onRefresh, loading }: SearchBarProps) {
  return (
    <section className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="sr-only" htmlFor="streamer-search">
        Buscar streamer
      </label>
      <input
        id="streamer-search"
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Buscar streamer…"
        className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-fg outline-none placeholder:text-muted focus:border-accent"
      />
      <button
        type="button"
        onClick={onRefresh}
        disabled={loading}
        aria-busy={loading}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-chess px-4 py-2.5 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Atualizar
      </button>
    </section>
  )
}
