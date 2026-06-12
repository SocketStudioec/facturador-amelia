import { ShieldCheck, PenTool, Lock, FileCheck2, BadgePercent } from 'lucide-react'
import Reveal from './Reveal'

const BADGES = [
  { icon: ShieldCheck, label: 'Autorizado por el SRI' },
  { icon: PenTool, label: 'Firma electrónica 1–5 años' },
  { icon: Lock, label: 'Datos cifrados' },
  { icon: FileCheck2, label: 'Conforme a la LOPDP' },
  { icon: BadgePercent, label: 'Sin pago anticipado ni permanencia' },
]

export default function TrustBadges() {
  return (
    <section aria-label="Garantías y confianza" className="border-y border-surface-line bg-white">
      <div className="container-xl py-8">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {BADGES.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-50 text-teal-600">
                <b.icon size={18} />
              </span>
              {b.label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
