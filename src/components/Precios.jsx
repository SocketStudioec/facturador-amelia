import { Check } from 'lucide-react'
import { PLANES, CONTACT } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

export default function Precios() {
  return (
    <section id="planes" className="bg-surface-warm py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Planes</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Un plan para cada etapa de tu negocio
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            Sin pago anticipado. Eliges según tu volumen de emisión y creces cuando lo necesites.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANES.map((plan) => (
            <StaggerItem key={plan.name}>
              <article
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.highlight
                    ? 'border-teal-300 bg-navy text-white shadow-float'
                    : 'border-surface-line bg-white shadow-soft'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-white">
                    Más elegido
                  </span>
                )}
                <h3 className={`font-display text-xl font-extrabold ${plan.highlight ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.highlight ? 'text-navy-100' : 'text-ink-muted'}`}>
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-teal-300' : 'text-teal-600'}`}
                      />
                      <span className={plan.highlight ? 'text-navy-100' : 'text-ink-soft'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Quiero el plan ${plan.name} de Amelia.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full text-center ${
                    plan.highlight ? 'btn-primary' : 'btn-dark'
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-ink-muted">
            ¿No sabes cuál elegir? Te ayudamos a estimar tu plan según tu volumen real de facturación.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
