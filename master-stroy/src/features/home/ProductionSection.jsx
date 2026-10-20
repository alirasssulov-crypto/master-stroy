import { productionData } from '../../entities/siteData'
import Reveal from '../../shared/ui/Reveal'

export default function ProductionSection() {
  const { logo, features, videoUrl } = productionData

  return (
    <section id="production" className="bg-ink px-4 py-12 text-white sm:px-8 lg:py-20">
      <Reveal>
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">О производстве</h2>
      </Reveal>

      <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="flex flex-col items-center gap-6 lg:items-start">
          <img src={logo} alt="Мастер Строй" className="w-48 rounded-full bg-white/90 p-1" />
          <ul className="flex flex-col gap-5">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-4 transition hover:translate-x-2">
                <img src={f.icon} alt="" className="h-12 w-12 shrink-0 object-contain" />
                <span className="text-sm text-white/90">{f.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              src={videoUrl}
              title="О производстве"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}