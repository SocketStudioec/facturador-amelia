import { Quote } from 'lucide-react'
import { TESTIMONIOS } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

export default function Testimonios() {
  return (
    <section className="bg-surface-warm py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Quienes ya facturan con Amelia</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Negocios reales, menos papeleo
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIOS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-surface-line bg-white p-8 shadow-soft">
                <Quote size={28} className="text-teal-300" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink-soft">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-surface-line pt-5">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full bg-navy font-display text-sm font-bold text-teal-300"
                    aria-hidden="true"
                  >
                    {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-navy">{t.name}</span>
                    <span className="block text-xs text-ink-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
