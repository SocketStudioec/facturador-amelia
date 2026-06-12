import { useState, useMemo } from 'react'
import { Calculator, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT } from '../data'

const IVA = 0.15

const RET_IVA = [
  { label: 'Sin retención IVA', value: 0 },
  { label: '30% (bienes)', value: 0.30 },
  { label: '70% (servicios)', value: 0.70 },
  { label: '100%', value: 1 },
]

const RET_RENTA = [
  { label: 'Sin retención renta', value: 0 },
  { label: '1% (bienes)', value: 0.01 },
  { label: '2% (servicios)', value: 0.02 },
  { label: '8% (honorarios)', value: 0.08 },
  { label: '10% (profesionales)', value: 0.10 },
]

const money = (n) =>
  n.toLocaleString('es-EC', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })

export default function Calculadora() {
  const [base, setBase] = useState('100')
  const [retIva, setRetIva] = useState(0)
  const [retRenta, setRetRenta] = useState(0)

  const r = useMemo(() => {
    const b = Math.max(0, parseFloat(base) || 0)
    const iva = b * IVA
    const total = b + iva
    const rIva = iva * retIva
    const rRenta = b * retRenta
    return { b, iva, total, rIva, rRenta, recibir: total - rIva - rRenta }
  }, [base, retIva, retRenta])

  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    `Hola, calculé una factura de ${money(r.b)} (IVA ${money(r.iva)}, total ${money(r.total)}). Quiero emitirla con Amelia.`,
  )}`

  const selectCls =
    'w-full appearance-none rounded-xl border border-surface-line bg-surface px-4 py-2.5 text-sm font-medium text-ink focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 transition'

  return (
    <section id="calculadora" className="bg-surface-warm py-24 lg:py-28">
      <div className="container-xl grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="eyebrow">
            <Calculator size={14} /> Herramienta gratis
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Calcula tu IVA y retenciones en segundos
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
            Pon el valor de tu venta y mira el IVA (15%), las retenciones y cuánto recibes. Sin
            registrarte. Cuando quieras emitir la factura de verdad, Amelia lo hace por ti.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            <li>· IVA vigente en Ecuador (15%)</li>
            <li>· Retención de IVA y de renta más usadas</li>
            <li>· Valor neto a recibir, al instante</li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-surface-line bg-white p-7 shadow-card sm:p-8">
            <label htmlFor="calc-base" className="mb-1.5 block text-sm font-semibold text-ink">
              Valor de la venta (subtotal)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-display text-lg font-bold text-ink-muted">$</span>
              <input
                id="calc-base"
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                value={base}
                onChange={(e) => setBase(e.target.value)}
                className="w-full rounded-xl border border-surface-line bg-surface py-3 pl-9 pr-4 font-display text-lg font-bold text-navy focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="calc-retiva" className="mb-1.5 block text-sm font-semibold text-ink">
                  Retención IVA
                </label>
                <select id="calc-retiva" className={selectCls} value={retIva}
                  onChange={(e) => setRetIva(parseFloat(e.target.value))}>
                  {RET_IVA.map((o) => <option key={o.label} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="calc-retrenta" className="mb-1.5 block text-sm font-semibold text-ink">
                  Retención renta
                </label>
                <select id="calc-retrenta" className={selectCls} value={retRenta}
                  onChange={(e) => setRetRenta(parseFloat(e.target.value))}>
                  {RET_RENTA.map((o) => <option key={o.label} value={o.value}>{o.label}</option>)}
                </select>
              </div>
            </div>

            <dl className="mt-6 space-y-2.5 border-t border-dashed border-surface-line pt-5">
              <div className="flex items-center justify-between text-sm text-ink-soft">
                <dt>Subtotal</dt><dd className="font-mono">{money(r.b)}</dd>
              </div>
              <div className="flex items-center justify-between text-sm text-ink-soft">
                <dt>IVA 15%</dt><dd className="font-mono">{money(r.iva)}</dd>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-ink">
                <dt>Total facturado</dt><dd className="font-mono">{money(r.total)}</dd>
              </div>
              {r.rIva > 0 && (
                <div className="flex items-center justify-between text-sm text-coral">
                  <dt>− Retención IVA</dt><dd className="font-mono">−{money(r.rIva)}</dd>
                </div>
              )}
              {r.rRenta > 0 && (
                <div className="flex items-center justify-between text-sm text-coral">
                  <dt>− Retención renta</dt><dd className="font-mono">−{money(r.rRenta)}</dd>
                </div>
              )}
              <div className="mt-1 flex items-center justify-between rounded-2xl bg-teal-50 px-4 py-3">
                <dt className="font-display text-base font-bold text-navy">Recibes</dt>
                <dd className="font-display text-xl font-extrabold text-teal-600">{money(r.recibir)}</dd>
              </div>
            </dl>

            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full">
              Emitir esta factura con Amelia <ArrowRight size={16} />
            </a>
            <p className="mt-3 text-center text-xs text-ink-muted">
              Cálculo referencial. Las retenciones dependen del tipo de contribuyente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
