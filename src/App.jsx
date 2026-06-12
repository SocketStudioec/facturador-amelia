import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Documentos from './components/Documentos'
import Beneficios from './components/Beneficios'
import ComoFunciona from './components/ComoFunciona'
import Plataformas from './components/Plataformas'
import Precios from './components/Precios'
import Distribuidores from './components/Distribuidores'
import Testimonios from './components/Testimonios'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#producto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Documentos />
        <Beneficios />
        <ComoFunciona />
        <Plataformas />
        <Precios />
        <Distribuidores />
        <Testimonios />
        <FAQ />
        <CTA />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
