import { useEffect, useState } from 'react'
import { worksData } from '../../entities/siteData'
import Reveal from '../../shared/ui/Reveal'

export default function WorksSection() {
  const { text, images } = worksData
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active, images.length])

  return (
    <section id="works" className="mx-auto max-w-[1000px] px-4 py-12 sm:px-6 lg:py-20">
      <Reveal>
        <h2 className="text-center text-2xl font-bold sm:text-3xl">Наши работы</h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-ink/80 sm:text-sm">
          {text}
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {images.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 100}>
            <button
              onClick={() => setActive(i)}
              className="group block aspect-[660/548] w-full overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Работа ${i + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 animate-fade"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActive((active - 1 + images.length) % images.length)
            }}
            className="absolute left-3 text-4xl text-white transition hover:text-brand sm:left-8"
            aria-label="Назад"
          >
            ‹
          </button>
          <img
            src={images[active]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl animate-pop"
          />
          <button
            onClick={(e) => {
              e.stopPropagation()
              setActive((active + 1) % images.length)
            }}
            className="absolute right-3 text-4xl text-white transition hover:text-brand sm:right-8"
            aria-label="Вперёд"
          >
            ›
          </button>
          <button
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 text-3xl text-white transition hover:rotate-90 hover:text-brand"
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
      )}
    </section>
  )
}