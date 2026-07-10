import { Sparkles, X } from 'lucide-react'
import { CONTACT } from '../data'

export default function AnnouncementBar({ onClose }) {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hola, quiero información del Combo Promo Amelia.')}`
  return (
    <div className="relative z-[60] bg-navy text-white">
      <div className="container-xl flex h-10 items-center justify-center gap-2 text-center text-xs sm:text-sm">
        <Sparkles size={14} className="hidden shrink-0 text-teal-300 sm:block" aria-hidden="true" />
        <p className="truncate">
          <span className="font-semibold">Combo Promo Amelia:</span> arma tu combo según tu perfil
          con capacitación{' '}
          <span className="font-semibold text-teal-300">sin costo</span>.
        </p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 font-semibold text-teal-300 underline-offset-2 hover:underline sm:inline"
        >
          Aprovechar →
        </a>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar aviso"
          className="absolute right-3 grid h-6 w-6 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
