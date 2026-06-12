import { PASOS } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">En cuatro pasos</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            De cero a tu primera factura autorizada
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            Sin instalaciones complicadas. Configuras una vez y emites siempre.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((p, i) => (
            <StaggerItem key={p.step}>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-extrabold text-teal-200">{p.step}</span>
                  {i < PASOS.length - 1 && (
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-surface-line to-transparent lg:block" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
