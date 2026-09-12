type PaginationProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  return (
    <nav className="mt-6 flex items-center justify-center gap-3" aria-label="Paginação">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-fg disabled:cursor-not-allowed disabled:opacity-40"
      >
        Anterior
      </button>
      <p className="text-sm text-muted">
        Página <span className="font-semibold text-fg">{page}</span> de {totalPages}
      </p>
      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-fg disabled:cursor-not-allowed disabled:opacity-40"
      >
        Próxima
      </button>
    </nav>
  )
}
