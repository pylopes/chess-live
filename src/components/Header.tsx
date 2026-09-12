import { ThemeToggle } from './ThemeToggle'

type HeaderProps = {
  liveCount: number
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Header({ liveCount, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-3 px-4 py-3">
        <a href="/" className="flex items-center gap-2 text-fg no-underline">
          <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
            <rect width="32" height="32" rx="6" className="fill-chess" />
            <path
              className="fill-white"
              d="M16 5c-1.4 0-2.6.8-3.2 2H10l.8 2.2C9.6 10.4 9 12 9 13.8c0 2.2 1.4 4 3.4 4.8L11 26h10l-1.4-7.4c2-.8 3.4-2.6 3.4-4.8 0-1.8-.6-3.4-1.8-4.6L22 7h-2.8C18.6 5.8 17.4 5 16 5zm0 2.2c.7 0 1.3.4 1.6 1.1h-3.2c.3-.7.9-1.1 1.6-1.1zM12.2 11h7.6c.8.7 1.2 1.6 1.2 2.8 0 1.8-1.4 3.2-3.2 3.2h-3.6c-1.8 0-3.2-1.4-3.2-3.2 0-1.2.4-2.1 1.2-2.8z"
            />
          </svg>
          <h1 className="text-lg font-semibold tracking-tight sm:text-xl">Chess.Live</h1>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <p
            className="inline-flex items-center gap-2 rounded-lg border border-line px-2.5 py-1.5 text-sm text-fg"
            aria-live="polite"
          >
            <span className="live-dot size-2.5 rounded-full bg-chess" aria-hidden="true" />
            <span className="hidden sm:inline">Ao vivo</span>
            <strong>{liveCount}</strong>
          </p>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
