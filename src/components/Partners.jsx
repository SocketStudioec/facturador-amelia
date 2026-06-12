import {
  Tag, ShieldOff, GraduationCap, Headset, Gift, Globe, Check, TrendingUp,
} from 'lucide-react'
import Reveal, { Stagger, StaggerItem } from './Reveal'
import { PARTNERS, CONTACT } from '../data'

const ICONS = { Tag, ShieldOff, GraduationCap, Headset, Gift, Globe }

export default function Partners() {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Quiero registrarme como partner de Begroup / Amelia.')}`
  return (
    <section id="partners" className="bg-navy py-24 text-white lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-teal-300">Programa de Partners · Begroup</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Vende con el respaldo de Begroup y define tu margen
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy-100 text-pretty">
            {PARTNERS.pitch}
          </p>
        </Reveal>

        {/* Ventajas */}
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.ventajas.map((v) => {
            const Icon = ICONS[v.icon]
            return (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-teal-400/40 hover:bg-white/[0.07]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500/15 text-teal-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-100">{v.desc}</p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>

        {/* Incentivo + pasos + requisitos */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-3xl border border-teal-400/30 bg-teal-500/10 p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-bold text-teal-200">
              <TrendingUp size={14} /> Ingreso real
            </span>
            <p className="mt-4 font-display text-xl font-bold leading-snug text-white text-balance">
              {PARTNERS.incentivo}
            </p>
            <p className="mt-3 text-sm text-navy-100">
              Sin cuota mensual, sin costo de activación y sin compra obligatoria. Empiezas con solo
              tu cédula y tu WhatsApp.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
              Quiero registrarme
            </a>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.05} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-display text-base font-bold text-teal-300">Cómo empezar</h3>
              <ol className="mt-4 space-y-3">
                {PARTNERS.pasos.map((p, i) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-navy-100">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-display text-base font-bold text-teal-300">Solo necesitas</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {PARTNERS.requisitos.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-sm text-navy-100">
                    <Check size={15} className="shrink-0 text-teal-300" /> {r}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-navy-100/70">Sin RUC ni experiencia previa.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
