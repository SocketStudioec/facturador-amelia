import { Globe, Apple, Smartphone, Monitor } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT } from '../data'

const PLATAFORMAS = [
  { icon: Globe, name: 'Web', detail: 'Desde cualquier navegador' },
  { icon: Apple, name: 'iPhone & iPad', detail: 'App en App Store' },
  { icon: Smartphone, name: 'Android', detail: 'App en Google Play' },
  { icon: Monitor, name: 'Mac', detail: 'Compatible con macOS' },
]

export default function Plataformas() {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Quiero usar Amelia en mis dispositivos.')}`
  return (
    <section className="bg-navy py-24 text-white lg:py-28">
      <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow text-teal-300">Una cuenta, todos tus dispositivos</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Empieza en la oficina, termina en la calle
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-navy-100 text-pretty">
            Tus comprobantes se sincronizan entre web, iOS, Android y Mac. Factura en el mostrador,
            en una entrega o desde casa — siempre con la misma información.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
            Crear mi cuenta
          </a>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
          {PLATAFORMAS.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-teal-400/40 hover:bg-white/[0.07]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-500/15 text-teal-300">
                <p.icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-navy-100">{p.detail}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
