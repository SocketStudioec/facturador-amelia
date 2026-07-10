import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV, CONTACT } from '../data'

export default function Header({ isHome = true, current = null }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const base = import.meta.env.BASE_URL

  // En subpáginas las anclas apuntan de vuelta a la landing.
  const hrefFor = (item) =>
    item.type === 'page' ? base + item.href : isHome ? item.href : base + item.href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hola, quiero probar Amelia para facturar.')}`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-surface-line/80 bg-surface/85 backdrop-blur-md'
          : 'border-b border-transparent bg-surface/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-xl flex h-[4.5rem] items-center justify-between gap-6">
        <a href={isHome ? '#inicio' : base} className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) => {
            const isCurrent = item.type === 'page' && current && item.href.startsWith(current)
            return (
              <a
                key={item.href}
                href={hrefFor(item)}
                aria-current={isCurrent ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                  isCurrent ? 'font-semibold text-teal-700' : 'text-ink-soft'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contacto" className="text-sm font-semibold text-ink hover:text-teal-700">
            Iniciar sesión
          </a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Hablar por WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-surface-line bg-white text-navy lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-surface-line bg-surface lg:hidden"
          >
            <nav className="container-xl flex flex-col gap-1 py-4" aria-label="Móvil">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={hrefFor(item)}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Hablar por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
