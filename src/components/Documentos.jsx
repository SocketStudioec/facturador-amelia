import {
  FileText, FileMinus, FilePlus, ReceiptText, ShoppingBag, Truck,
} from 'lucide-react'
import { DOCUMENTOS } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

const ICONS = { FileText, FileMinus, FilePlus, ReceiptText, ShoppingBag, Truck }

export default function Documentos() {
  return (
    <section id="facturacion" className="py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Facturación electrónica</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Todos tus documentos del SRI, en un solo lugar
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            Amelia cubre el ciclo completo de facturación electrónica en Ecuador. Emite lo que tu
            negocio necesita sin cambiar de herramienta.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTOS.map((d) => {
            const Icon = ICONS[d.icon]
            return (
              <StaggerItem key={d.name}>
                <article className="group h-full rounded-3xl border border-surface-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.desc}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
