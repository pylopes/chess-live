export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-4 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          Dados fornecidos pela API pública oficial do{' '}
          <a
            href="https://www.chess.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-chess underline-offset-2 hover:underline"
          >
            Chess.com
          </a>
        </p>
        <p className="inline-flex items-center gap-2">
          Desenvolvido por Pablo Yuri
          <a
            href="https://github.com/pylopes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Pablo Yuri"
            className="text-fg hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c2-.1 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.9-5.2 6.9-9.7C22 6.6 17.5 2 12 2z" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  )
}
