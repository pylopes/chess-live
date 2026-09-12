export function LoadingState() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" role="status" aria-live="polite">
      <span className="sr-only">Carregando streamers…</span>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex animate-pulse gap-3 rounded-xl border border-line bg-surface p-4"
        >
          <div className="flex w-20 flex-col items-center gap-2">
            <div className="size-16 rounded-full bg-line" />
            <div className="h-3 w-16 rounded bg-line" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2">
            <div className="h-8 rounded bg-line" />
            <div className="h-8 rounded bg-line" />
            <div className="h-4 w-20 rounded bg-line" />
          </div>
        </div>
      ))}
    </div>
  )
}
