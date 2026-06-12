import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'

/**
 * Mockup de producto construido en código (sin imágenes stock).
 * Representa la pantalla de emisión de una factura autorizada por el SRI.
 */
export default function InvoiceMock() {
  return (
    <div className="relative">
      {/* Ventana app */}
      <div className="overflow-hidden rounded-3xl border border-surface-line bg-white shadow-card">
        {/* Barra superior */}
        <div className="flex items-center gap-2 border-b border-surface-line bg-surface/70 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-coral/70" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-teal-300" />
          <span className="ml-3 font-mono text-xs text-ink-muted">amelia.ec · nueva factura</span>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Factura</p>
              <p className="mt-1 font-display text-lg font-bold text-navy">001-001-000004821</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
              <Check size={13} /> Autorizada SRI
            </span>
          </div>

          {/* Cliente */}
          <div className="mt-5 rounded-2xl bg-surface px-4 py-3">
            <p className="text-[0.7rem] uppercase tracking-wide text-ink-muted">Cliente</p>
            <p className="mt-0.5 text-sm font-semibold text-ink">Comercial Andina S.A.</p>
            <p className="font-mono text-xs text-ink-muted">RUC 1790012345001</p>
          </div>

          {/* Líneas */}
          <div className="mt-4 space-y-2">
            {[
              ['Servicio de consultoría', '1', '$120.00'],
              ['Licencia mensual', '2', '$58.00'],
            ].map(([item, qty, total]) => (
              <div key={item} className="flex items-center justify-between text-sm">
                <span className="text-ink-soft">{item}</span>
                <span className="flex items-center gap-4">
                  <span className="font-mono text-xs text-ink-muted">x{qty}</span>
                  <span className="font-semibold text-ink">{total}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-dashed border-surface-line pt-4">
            <div className="flex items-center justify-between text-sm text-ink-muted">
              <span>Subtotal</span><span className="font-mono">$178.00</span>
            </div>
            <div className="flex items-center justify-between text-sm text-ink-muted">
              <span>IVA 15%</span><span className="font-mono">$26.70</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-display text-base font-bold text-navy">Total</span>
              <span className="font-display text-xl font-extrabold text-teal-600">$204.70</span>
            </div>
          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-navy py-3 text-sm font-semibold text-white">
            <MessageCircle size={16} /> Enviar por WhatsApp
          </button>
        </div>
      </div>

      {/* Tarjeta flotante: estado de envío */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-surface-line bg-white px-4 py-3 shadow-float sm:flex"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-600">
          <Check size={18} />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-ink">Entregada al cliente</p>
          <p className="text-xs text-ink-muted">PDF + XML · hace 2 s</p>
        </div>
      </motion.div>
    </div>
  )
}
