import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT } from '../data'

export default function CTA() {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Quiero empezar a facturar con Amelia.')}`
  return (
    <section className="py-20">
      <div className="container-xl">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-teal-600 px-8 py-14 text-center text-white sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 60%, #fff 1px, transparent 1px)',
              backgroundSize: '38px 38px, 52px 52px',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-[2.6rem]">
              Tu próxima factura puede salir hoy
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-teal-50/90 text-pretty sm:text-lg">
              Sin pago anticipado, con soporte y capacitación. Activa Amelia y emite desde el primer día.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex bg-white px-7 py-3.5 text-teal-700 shadow-float hover:bg-teal-50"
              >
                Probar gratis <ArrowRight size={18} />
              </a>
              <a
                href="#planes"
                className="btn border border-white/40 px-7 py-3.5 text-white hover:bg-white/10"
              >
                Ver planes
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
