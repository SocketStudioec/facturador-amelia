import {
  Repeat, ReceiptText, Wallet, Archive, Landmark, Gauge,
} from 'lucide-react'
import { DESTACADOS } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

const ICONS = { Repeat, ReceiptText, Wallet, Archive, Landmark, Gauge }

export default function Destacados({
  items = DESTACADOS,
  eyebrow = 'Funciones que enamoran',
  title = 'Las funciones que nadie más te da',
  desc = 'Amelia resuelve lo que el SRI exige y lo que tu negocio necesita para operar sin sorpresas: cobros recurrentes, reembolsos, respaldo documental y control de impuestos.',
}) {
  return (
    <section id="destacados" className="bg-surface-warm py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">{desc}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <StaggerItem key={item.name}>
                <article className="group flex h-full flex-col rounded-3xl border border-surface-line bg-white p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-teal-300">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}