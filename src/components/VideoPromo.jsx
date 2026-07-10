import { useState } from 'react'
import { Play } from 'lucide-react'
import { VIDEO } from '../data'
import Reveal from './Reveal'

export default function VideoPromo() {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(VIDEO.youtubeId)

  return (
    <section id="video" className="bg-white py-24 lg:py-28">
      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{VIDEO.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            {VIDEO.title}
          </h2>
          <p className="mt-4 text-lg text-ink-soft text-pretty">{VIDEO.desc}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl border border-surface-line shadow-float">
            {hasVideo && playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO.youtubeId}?autoplay=1`}
                title={VIDEO.title}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : hasVideo ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group grid h-full w-full place-items-center gap-6 bg-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                aria-label={`Ver el video: ${VIDEO.title}`}
              >
                <span className="rounded-2xl bg-white px-5 py-3 shadow-soft">
                  <img
                    src={`${import.meta.env.BASE_URL}brand/amelia-logo.png`}
                    alt="Amelia"
                    className="h-10"
                  />
                </span>
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-500 text-white transition-transform group-hover:scale-105">
                  <Play size={26} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white">Ver el video</span>
              </button>
            ) : (
              <a
                href={VIDEO.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid h-full w-full place-items-center gap-6 bg-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                <span className="rounded-2xl bg-white px-5 py-3 shadow-soft">
                  <img
                    src={`${import.meta.env.BASE_URL}brand/amelia-logo.png`}
                    alt="Amelia"
                    className="h-10"
                  />
                </span>
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-500 text-white transition-transform group-hover:scale-105">
                  <Play size={26} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-white">
                  Muy pronto: mira los videos de Begroup
                </span>
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}