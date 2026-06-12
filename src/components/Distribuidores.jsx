import { Handshake, TrendingUp, GraduationCap, Tag } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT } from '../data'

const VENTAJAS = [
  { icon: Tag, title: 'Precios preferenciales', desc: 'Sin pago anticipado ni mínimos de compra.' },
  { icon: GraduationCap, title: 'Capacitación incluida', desc: 'Soporte y entrenamiento para ti y tu cartera.' },
  { icon: TrendingUp, title: 'Incentivos por crecer', desc: 'Premios mensuales por tu desempeño en ventas.' },
  { icon: Handshake, title: 'Tu marca al frente', desc: 'Modo white-label: factura con tu identidad.' },
]

export default function Distribuidores() {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Quiero ser distribuidor de Amelia.')}`
  return (
    <section id="distribuidores" className="py-24 lg:py-28">
      <div className="container-xl">
        <div className="overflow-hidden rounded-[2rem] border border-surface-line bg-white shadow-card">
          <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-14">
            <Reveal>
              <span className="eyebrow">Para contadores y aliados</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
                Convierte la facturación en un nuevo ingreso
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
                Únete a la red de distribuidores de Begroup. Ofrece Amelia con tu propia marca,
                administra a tus clientes desde un panel y gana con cada cuenta activa.
              </p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                Unirme a la red
              </a>
            </Reveal>

            <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
              {VENTAJAS.map((v) => (
                <div key={v.title} className="rounded-2xl bg-surface p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600">
                    <v.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{v.desc}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
