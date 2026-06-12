import { useState } from 'react'
import { MessageCircle, Mail, Send } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT } from '../data'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const texto = `Hola, soy ${form.nombre}.%0A${form.mensaje || 'Quiero más información sobre Amelia.'}%0A%0ACorreo: ${form.email}%0ATeléfono: ${form.telefono}`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${texto}`, '_blank', 'noopener')
    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-surface-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/30 transition'

  return (
    <section id="contacto" className="bg-surface-warm py-24 lg:py-28">
      <div className="container-xl grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Hablemos</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Empieza a facturar hoy con Amelia
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft text-pretty">
            Déjanos tus datos y un asesor te guía para activar tu cuenta y emitir tu primer
            comprobante. Sin compromiso.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-surface-line bg-white p-4 transition-colors hover:border-teal-200"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600">
                <MessageCircle size={20} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-navy">WhatsApp</span>
                <span className="block text-sm text-ink-muted">{CONTACT.whatsappLabel}</span>
              </span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 rounded-2xl border border-surface-line bg-white p-4 transition-colors hover:border-teal-200"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600">
                <Mail size={20} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-navy">Correo</span>
                <span className="block text-sm text-ink-muted">{CONTACT.email}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-surface-line bg-white p-7 shadow-soft sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-ink">
                  Nombre
                </label>
                <input id="nombre" type="text" required value={form.nombre} onChange={update('nombre')}
                  className={field} placeholder="Tu nombre y apellido" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                  Correo
                </label>
                <input id="email" type="email" required value={form.email} onChange={update('email')}
                  className={field} placeholder="tucorreo@ejemplo.com" autoComplete="email" />
              </div>
              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-ink">
                  Teléfono
                </label>
                <input id="telefono" type="tel" value={form.telefono} onChange={update('telefono')}
                  className={field} placeholder="09 0000 0000" autoComplete="tel" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold text-ink">
                  ¿En qué te ayudamos?
                </label>
                <textarea id="mensaje" rows={4} value={form.mensaje} onChange={update('mensaje')}
                  className={`${field} resize-none`} placeholder="Cuéntanos sobre tu negocio o tu duda" />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              <Send size={16} /> Enviar por WhatsApp
            </button>
            {sent && (
              <p className="mt-3 text-center text-sm font-medium text-teal-700" role="status">
                Abrimos WhatsApp con tu mensaje. ¡Gracias por escribirnos!
              </p>
            )}
            <p className="mt-3 text-center text-xs text-ink-muted">
              Al enviar aceptas ser contactado por un asesor de Amelia.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
