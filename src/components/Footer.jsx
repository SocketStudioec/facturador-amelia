import Logo from './Logo'
import { NAV, SOCIAL, CONTACT } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-xl py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-100">
              Amelia es el facturador electrónico de {CONTACT.company}: emite y envía tus comprobantes
              autorizados por el SRI desde cualquier dispositivo.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-navy-100 transition-colors hover:border-teal-400/50 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegación del pie">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal-300">
              Producto
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-navy-100 transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal-300">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-100">
              <li>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp · {CONTACT.whatsappLabel}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
              </li>
              <li>
                <a href="https://begroupec.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  begroupec.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-navy-100 sm:flex-row">
          <p>© {year} {CONTACT.company}. Amelia® — facturación electrónica para Ecuador.</p>
          <p className="text-navy-100/70">
            Diseño y desarrollo ·{' '}
            <a href="https://socket-studio.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-300 hover:text-white">
              Socket Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
