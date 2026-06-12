const MARK = '/demo-aplicaciones/facturador-amelia/brand/amelia-mark.png'

/**
 * Marca Amelia — monograma oficial + wordmark "amelia" con bajada "Plataforma contable".
 * `tone`: 'light' para fondos oscuros, 'dark' para fondos claros.
 */
export default function Logo({ tone = 'dark', withTagline = true, className = '' }) {
  const word = tone === 'light' ? '#FFFFFF' : '#1B2559'
  const tag = tone === 'light' ? 'rgba(255,255,255,0.65)' : '#6B729A'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={MARK}
        alt="Amelia"
        width="32"
        height="32"
        className="h-8 w-8 shrink-0"
        loading="eager"
        decoding="async"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.3rem] font-bold tracking-tight" style={{ color: word }}>
          amelia
        </span>
        {withTagline && (
          <span
            className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em]"
            style={{ color: tag }}
          >
            Plataforma contable
          </span>
        )}
      </span>
    </span>
  )
}
