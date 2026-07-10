import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, Rocket, Building2, Check, ArrowRight } from 'lucide-react'
import { SEGMENTOS, CONTACT } from '../data'
import ProductGrid from './ProductGrid'
import Reveal from './Reveal'

const easing = [0.16, 1, 0.3, 1]

const SEGMENT_ICONS = { Briefcase, Rocket, Building2 }

export default function Soluciones() {
  const [activeId, setActiveId] = useState(SEGMENTOS[0].id)
  const tabRefs = useRef([])
  const baseId = useId()

  useEffect(() => {
    function onSegmentEvent(event) {
      const id = event?.detail
      if (id && SEGMENTOS.some((s) => s.id === id)) {
        setActiveId(id)
      }
    }
    window.addEventListener('amelia:segment', onSegmentEvent)
    return () => window.removeEventListener('amelia:segment', onSegmentEvent)
  }, [])

  const activeIndex = SEGMENTOS.findIndex((s) => s.id === activeId)
  const seg = SEGMENTOS[activeIndex]

  function handleKeyDown(event, index) {
    let nextIndex = null
    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % SEGMENTOS.length
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + SEGMENTOS.length) % SEGMENTOS.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = SEGMENTOS.length - 1
    }

    if (nextIndex !== null) {
      event.preventDefault()
      const nextSeg = SEGMENTOS[nextIndex]
      setActiveId(nextSeg.id)
      tabRefs.current[nextIndex]?.focus()
    }
  }

  const tabId = (id) => `${baseId}-tab-${id}`
  const panelId = (id) => `${baseId}-panel-${id}`

  return (
    <section id="soluciones" className="bg-white py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Soluciones por perfil</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Dinos quién eres y te mostramos lo tuyo
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            Contadores, emprendedores y empresas usan Amelia de forma distinta. Elige tu perfil
            y arma el combo que te conviene.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-12">
          <div
            role="tablist"
            aria-label="Perfiles de Amelia"
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {SEGMENTOS.map((s, index) => {
              const Icon = SEGMENT_ICONS[s.icon]
              const isActive = s.id === activeId
              return (
                <button
                  key={s.id}
                  ref={(el) => { tabRefs.current[index] = el }}
                  role="tab"
                  type="button"
                  id={tabId(s.id)}
                  aria-selected={isActive}
                  aria-controls={panelId(s.id)}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(s.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={[
                    'flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
                    isActive
                      ? 'border-navy bg-navy text-white'
                      : 'border-surface-line bg-white text-navy hover:border-teal-300',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'grid h-10 w-10 flex-none place-items-center rounded-xl',
                      isActive ? 'bg-white/15 text-white' : 'bg-teal-50 text-teal-600',
                    ].join(' ')}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="font-display text-[15px] font-bold">{s.label}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={seg.id}
                id={panelId(seg.id)}
                role="tabpanel"
                aria-labelledby={tabId(seg.id)}
                tabIndex={0}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: easing }}
                className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10"
              >
                <div className="flex flex-col">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    {seg.headline}
                  </h3>
                  <p className="mt-3 text-ink-soft">{seg.desc}</p>

                  <ul className="mt-6 space-y-3">
                    {seg.beneficios.map((beneficio) => (
                      <li key={beneficio} className="flex items-start gap-2 text-sm text-ink-soft">
                        <Check size={18} className="mt-0.5 flex-none text-teal-600" aria-hidden="true" />
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(seg.waText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        {seg.cta}
                      </a>
                      <a
                        href={`${import.meta.env.BASE_URL}${seg.slug}/`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
                      >
                        Ver todo para {seg.title.toLowerCase()}
                        <ArrowRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                    <p className="mt-3 text-xs text-ink-soft">
                      Sin pago anticipado · Respuesta en minutos
                    </p>
                  </div>
                </div>

                <ProductGrid productos={seg.productos} columns="grid-cols-2" />
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}