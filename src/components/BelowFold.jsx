// Secciones bajo el fold de la landing, agrupadas en un solo chunk lazy
// (una sola petición extra: el servidor sirve HTTP/1.1).
import ComboPromo from './ComboPromo'
import Modulos from './Modulos'
import Destacados from './Destacados'
import Beneficios from './Beneficios'
import Documentos from './Documentos'
import ComoFunciona from './ComoFunciona'
import Calculadora from './Calculadora'
import Plataformas from './Plataformas'
import Precios from './Precios'
import TrustBadges from './TrustBadges'
import Partners from './Partners'
import Testimonios from './Testimonios'
import FAQ from './FAQ'
import BegroupStrip from './BegroupStrip'
import CTA from './CTA'
import Contacto from './Contacto'

export default function BelowFold() {
  return (
    <>
      <ComboPromo />
      <Modulos />
      <Destacados />
      <Beneficios />
      <Documentos />
      <ComoFunciona />
      <Calculadora />
      <Plataformas />
      <Precios />
      <TrustBadges />
      <Partners />
      <Testimonios />
      <FAQ />
      <BegroupStrip />
      <CTA />
      <Contacto />
    </>
  )
}
