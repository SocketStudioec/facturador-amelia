import { Check } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TrustBar from '../components/TrustBar'
import ProductGrid from '../components/ProductGrid'
import Destacados from '../components/Destacados'
import ComboPromo from '../components/ComboPromo'
import ComoFunciona from '../components/ComoFunciona'
import CTA from '../components/CTA'
import Contacto from '../components/Contacto'
import Reveal from '../components/Reveal'
import { SEGMENTOS, CONTACT, TESTIMONIOS, DESTACADOS } from '../data'

export default function SegmentPage({ slug }) {
  const seg = SEGMENTOS.find((s) => s.id === slug)

  if (!seg) {
    return null
  }

  const testimonio = TESTIMONIOS[seg.testimonioIndex]
  const destacadosItems = DESTACADOS.filter((d) => seg.destacadosNombres.includes(d.name))

  return (
    <>
      <Header isHome={false} current={slug} />

      <main>
        <section className="pb-16 pt-16 lg:pt-24">
          <div className="container-xl max-w-3xl">
            <Reveal>
              <a href={import.meta.env.BASE_URL} className="text-sm font-semibold text-teal-700">
                ← Volver al inicio
              </a>
              <span className="eyebrow mt-6 block">Amelia para {seg.title}</span>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-navy text-balance sm:text-5xl">
                {seg.headline}
              </h1>
              <p className="mt-4 text-lg text-ink-soft text-pretty">{seg.desc}</p>

              <ul className="mt-6 space-y-3">
                {seg.beneficios.map((beneficio) => (
                  <li key={beneficio} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check size={18} className="mt-0.5 flex-none text-teal-600" aria-hidden="true" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(seg.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {seg.cta}
                </a>
                <a href="#combo" className="btn-ghost">
                  Ver el combo
                </a>
              </div>

              <p className="mt-4 text-sm text-ink-muted">{seg.heroNote}</p>
            </Reveal>
          </div>
        </section>

        <TrustBar />

        <section id="para-ti" className="bg-surface-warm py-24 lg:py-28">
          <div className="container-xl">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Pensado para ti</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
                Lo que más te conviene de Amelia
              </h2>
              <p className="mt-4 text-lg text-ink-soft text-pretty">
                Una selección de productos de Amelia pensada para {seg.sustantivo}.
              </p>
            </Reveal>

            <div className="mt-12">
              <ProductGrid productos={seg.productos} columns="sm:grid-cols-2 lg:grid-cols-3" />
            </div>

            <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-ink-soft">
                Módulos recomendados para tu perfil:
              </span>
              {seg.modulosNombres.map((nombre) => (
                <span
                  key={nombre}
                  className="rounded-full border border-surface-line bg-white px-4 py-2 text-sm font-medium text-ink-soft"
                >
                  {nombre}
                </span>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}#modulos`}
                className="text-sm font-semibold text-teal-700"
              >
                ver todos los módulos →
              </a>
            </Reveal>
          </div>
        </section>

        <Destacados
          items={destacadosItems}
          eyebrow="Funciones clave"
          title={`Funciones que ${seg.sustantivo} aprovecha desde el día uno`}
          desc="Incluidas en tu combo y listas desde el primer día, sin módulos ocultos ni costos extra."
        />

        <ComboPromo only={seg.comboId} />

        <section className="bg-white py-24 lg:py-28">
          <div className="container-xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <blockquote>
                <p className="font-display text-xl text-navy text-balance">
                  “{testimonio.quote}”
                </p>
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-ink-muted">{testimonio.name}</p>
              <p className="text-sm text-ink-muted">{testimonio.role}</p>
            </Reveal>
          </div>
        </section>

        <ComoFunciona />

        <CTA />

        <Contacto />
      </main>

      <Footer />
    </>
  )
}