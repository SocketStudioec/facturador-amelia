import { Sparkles, Check } from 'lucide-react'
import { COMBOS, CONTACT } from '../data'
import Reveal, { Stagger, StaggerItem } from './Reveal'

export default function ComboPromo({ only = null }) {
  const items = only ? COMBOS.items.filter((c) => c.id === only) : COMBOS.items
  return (
    <section id="combo" className="bg-navy-950 py-24 text-white lg:py-28">
      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-teal-200">
            <Sparkles size={16} aria-hidden="true" />
            {COMBOS.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-5xl">
            {only ? items[0]?.name : COMBOS.title}
          </h2>
          <p className="mt-4 text-lg text-navy-100/80 text-pretty">{COMBOS.desc}</p>
        </Reveal>

        <Stagger className={only ? 'mx-auto mt-12 max-w-md' : 'mt-12 grid gap-5 lg:grid-cols-3'}>
          {items.map((item) => {
            const isHighlight = only ? true : item.highlight
            const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(item.waText)}`
            return (
              <StaggerItem key={item.id}>
                <article
                  className={
                    isHighlight
                      ? 'relative flex h-full flex-col rounded-3xl border border-white/10 bg-white p-7 text-navy shadow-float'
                      : 'relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-white'
                  }
                >
                  {!only && item.highlight && (
                    <span className="absolute -top-3 left-7 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white">
                      El más pedido
                    </span>
                  )}

                  <h3 className={isHighlight ? 'font-display text-xl font-bold text-navy' : 'font-display text-xl font-bold text-white'}>
                    {item.name}
                  </h3>
                  <p className={isHighlight ? 'mt-1 text-sm text-ink-soft' : 'mt-1 text-sm text-navy-100/75'}>
                    {item.para}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2">
                    {item.incluye.map((linea) => (
                      <li key={linea} className="flex items-start gap-2 text-sm">
                        <Check
                          size={16}
                          className={isHighlight ? 'mt-0.5 shrink-0 text-teal-600' : 'mt-0.5 shrink-0 text-teal-400'}
                          aria-hidden="true"
                        />
                        <span className={isHighlight ? 'text-navy' : 'text-navy-100/90'}>{linea}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={
                      isHighlight
                        ? 'mt-5 border-t border-surface-line pt-5 text-sm leading-relaxed text-ink-soft'
                        : 'mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-navy-100/75'
                    }
                  >
                    {item.beneficio}
                  </p>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      isHighlight
                        ? 'btn-primary mt-6 w-full text-center'
                        : 'mt-6 w-full rounded-xl border border-white/20 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10'
                    }
                  >
                    {item.cta}
                  </a>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-navy-100/60">
            El precio del combo se confirma por WhatsApp según tu caso · Sin pago anticipado · Capacitación incluida
          </p>
        </Reveal>
      </div>
    </section>
  )
}