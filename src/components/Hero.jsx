import { motion } from 'framer-motion'
import { ShieldCheck, Apple, Play, Briefcase, Rocket, Building2 } from 'lucide-react'
import InvoiceMock from './InvoiceMock'
import { CONTACT, SEGMENTOS } from '../data'

const SEGMENT_ICONS = { Briefcase, Rocket, Building2 }

const easing = [0.16, 1, 0.3, 1]

export default function Hero() {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hola, quiero probar Amelia para facturar.')}`

  return (
    <section id="inicio" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Fondo: malla sutil + halo teal, sin gradient-text ni glass */}
      <div className="absolute inset-0 -z-10 grid-noise" aria-hidden="true" />
      <div
        className="absolute -top-40 right-[-10%] -z-10 h-[34rem] w-[34rem] rounded-full bg-teal-200/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-xl grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="inline-flex items-center gap-2 rounded-full border border-surface-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-soft shadow-soft"
          >
            <ShieldCheck size={14} className="text-teal-600" />
            Facturación autorizada por el SRI · un producto de Begroup
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.05 }}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-navy text-balance sm:text-6xl"
          >
            Factura, firma y cobra{' '}
            <span className="text-teal-600">en un solo lugar</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty"
          >
            Amelia reúne el facturador autorizado por el SRI, la firma electrónica y las
            herramientas de tu negocio en un solo sistema — desde web, iPhone y Android.
            Elige tu perfil y mira exactamente lo que necesitas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.15 }}
            className="mt-6 flex flex-wrap gap-2"
            role="group"
            aria-label="Elige tu perfil"
          >
            {SEGMENTOS.map((s) => {
              const Icon = SEGMENT_ICONS[s.icon]
              return (
                <a
                  key={s.id}
                  href="#soluciones"
                  onClick={() => window.dispatchEvent(new CustomEvent('amelia:segment', { detail: s.id }))}
                  className="inline-flex items-center gap-2 rounded-full border border-surface-line bg-white px-4 py-2 text-sm font-semibold text-navy shadow-soft transition-colors hover:border-teal-400 hover:text-teal-700"
                >
                  <Icon size={15} className="text-teal-600" aria-hidden="true" />
                  {s.label}
                </a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Probar gratis
            </a>
            <a href="#como-funciona" className="btn-ghost">
              Ver cómo funciona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-muted"
          >
            <span className="inline-flex items-center gap-2">
              <Apple size={16} className="text-navy" /> App Store
            </span>
            <span className="inline-flex items-center gap-2">
              <Play size={16} className="text-navy" /> Google Play
            </span>
            <span className="hidden h-4 w-px bg-surface-line sm:block" />
            <span>Sin pago anticipado · Soporte incluido</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <InvoiceMock />
        </motion.div>
      </div>
    </section>
  )
}
