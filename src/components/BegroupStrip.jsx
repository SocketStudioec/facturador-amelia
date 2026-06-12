import Reveal from './Reveal'

const BEGROUP_LOGO = '/demo-aplicaciones/facturador-amelia/brand/begroup-logo.png'
const SRI_BADGE = '/demo-aplicaciones/facturador-amelia/brand/sri.png'

export default function BegroupStrip() {
  return (
    <section className="py-16">
      <div className="container-xl">
        <Reveal className="grid items-center gap-8 rounded-[2rem] border border-surface-line bg-white p-8 shadow-soft lg:grid-cols-[auto_1fr_auto] lg:p-10">
          <a
            href="https://begroupec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto lg:mx-0"
            aria-label="Begroup — Grupo Empresarial"
          >
            <img src={BEGROUP_LOGO} alt="Begroup · Grupo Empresarial" className="h-20 w-auto" loading="lazy" />
          </a>

          <div className="text-center lg:text-left">
            <p className="eyebrow justify-center lg:justify-start">Un producto de Begroup</p>
            <p className="mt-3 font-display text-xl font-bold text-navy text-balance sm:text-2xl">
              "Impulsamos a contadores y emprendedores con herramientas tecnológicas eficientes."
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Amelia es parte de Begroup · Grupo Empresarial: +5 años creando soluciones de
              facturación, firma electrónica y herramientas contables para el Ecuador.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl bg-surface px-5 py-4 lg:flex-col">
            <img src={SRI_BADGE} alt="" className="h-10 w-auto" loading="lazy" aria-hidden="true" />
            <span className="text-xs font-semibold text-ink-muted">Autorizado por el SRI</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
