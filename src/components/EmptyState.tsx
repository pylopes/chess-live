type EmptyStateProps = {
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-line bg-surface px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-fg">{title}</h2>
      <p className="mt-2 text-muted">{description}</p>
      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 rounded-lg bg-chess px-4 py-2 font-medium text-white hover:opacity-90"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  )
}
