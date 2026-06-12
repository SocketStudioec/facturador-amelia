import { STATS } from '../data'
import Reveal from './Reveal'

export default function TrustBar() {
  return (
    <section aria-label="Cifras clave" className="border-y border-surface-line bg-white">
      <div className="container-xl grid grid-cols-2 divide-x divide-surface-line lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className="flex flex-col items-center gap-1 px-4 py-8 text-center"
          >
            <span className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              {s.value}
            </span>
            <span className="max-w-[12rem] text-sm leading-snug text-ink-muted">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
