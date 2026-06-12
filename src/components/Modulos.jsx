import {
  FileText, BookOpen, Boxes, Wallet, ShoppingCart, Users,
  Landmark, Repeat, BarChart3,
} from 'lucide-react'
import { MODULOS } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

const ICONS = {
  FileText, BookOpen, Boxes, Wallet, ShoppingCart, Users, Landmark, Repeat, BarChart3,
}

export default function Modulos() {
  return (
    <section id="modulos" className="py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Una sola plataforma</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Todo tu negocio, en módulos que conversan entre sí
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            Amelia no es solo un facturador: es la plataforma contable que conecta tu facturación con
            tu contabilidad, inventario, cartera y nómina. Lo que registras una vez, sirve en todo.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-surface-line bg-surface-line sm:grid-cols-2 lg:grid-cols-3">
          {MODULOS.map((m) => {
            const Icon = ICONS[m.icon]
            return (
              <StaggerItem key={m.name}>
                <article className="group h-full bg-white p-7 transition-colors duration-300 hover:bg-surface-warm">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.desc}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
