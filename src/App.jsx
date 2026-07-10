import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Soluciones from './components/Soluciones'
import VideoPromo from './components/VideoPromo'
import ComboPromo from './components/ComboPromo'
import Beneficios from './components/Beneficios'
import Modulos from './components/Modulos'
import Destacados from './components/Destacados'
import Documentos from './components/Documentos'
import ComoFunciona from './components/ComoFunciona'
import Calculadora from './components/Calculadora'
import Plataformas from './components/Plataformas'
import Precios from './components/Precios'
import TrustBadges from './components/TrustBadges'
import Partners from './components/Partners'
import Testimonios from './components/Testimonios'
import FAQ from './components/FAQ'
import BegroupStrip from './components/BegroupStrip'
import CTA from './components/CTA'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#soluciones"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <VideoPromo />
        <Soluciones />
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
      </main>
      <Footer />
    </>
  )
}
