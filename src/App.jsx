import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Beneficios from './components/Beneficios'
import Modulos from './components/Modulos'
import Documentos from './components/Documentos'
import ComoFunciona from './components/ComoFunciona'
import Plataformas from './components/Plataformas'
import Precios from './components/Precios'
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
        href="#plataforma"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Beneficios />
        <Modulos />
        <Documentos />
        <ComoFunciona />
        <Plataformas />
        <Precios />
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
