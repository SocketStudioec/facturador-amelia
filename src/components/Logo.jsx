/**
 * Marca Amelia — monograma geométrico "A" + wordmark.
 * `tone`: 'light' para fondos oscuros, 'dark' para fondos claros.
 */
export default function Logo({ tone = 'dark', className = '' }) {
  const word = tone === 'light' ? '#FFFFFF' : '#0A2540'
  const dot = '#0FB5A6'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <rect width="34" height="34" rx="9" fill="#0A2540" />
        <path
          d="M11 24L16.4 10.2C16.62 9.64 17.4 9.64 17.62 10.2L23 24"
          stroke="#0FB5A6"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M13.4 19.4H20.6" stroke="#5EE6D6" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span
        className="font-display text-[1.35rem] font-extrabold tracking-tight"
        style={{ color: word }}
      >
        amelia
        <span style={{ color: dot }}>.</span>
      </span>
    </span>
  )
}
