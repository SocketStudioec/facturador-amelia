import { Suspense, lazy, useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import VideoPromo from './components/VideoPromo'
import Footer from './components/Footer'

// Todo lo que está bajo el fold se carga en un solo chunk diferido.
const BelowFold = lazy(() => import('./components/BelowFold'))

export default function App() {
  const [showBar, setShowBar] = useState(true)

  return (
    <>
      <a
        href="#video"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      {showBar && <AnnouncementBar onClose={() => setShowBar(false)} />}
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <VideoPromo />
        <Suspense fallback={null}>
          <BelowFold />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
