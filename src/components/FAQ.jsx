import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQ as ITEMS } from '../data'
import Reveal from './Reveal'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-24 lg:py-28">
      <div className="container-xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Lo que necesitas saber antes de empezar
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">
            ¿Te queda una duda? Escríbenos y te respondemos en minutos.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="divide-y divide-surface-line border-y border-surface-line">
            {ITEMS.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-navy sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-surface-line text-teal-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-teal-50' : ''
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-ink-soft">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
