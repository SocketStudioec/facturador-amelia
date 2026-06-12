import {
  Zap, Send, Smartphone, BadgeCheck, BarChart3, Headset,
} from 'lucide-react'
import { BENEFICIOS } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

const ICONS = { Zap, Send, Smartphone, BadgeCheck, BarChart3, Headset }

export default function Beneficios() {
  return (
    <section id="producto" className="bg-surface-warm py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Por qué Amelia</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Hecho para facturar rápido y sin fricción
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            Menos clics, menos errores y cero saltos entre programas. Lo que tu negocio necesita para
            cumplir con el SRI sin perder tiempo.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((b) => {
            const Icon = ICONS[b.icon]
            return (
              <StaggerItem key={b.title}>
                <article className="flex h-full flex-col rounded-3xl border border-surface-line bg-white p-7 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-teal-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.desc}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
