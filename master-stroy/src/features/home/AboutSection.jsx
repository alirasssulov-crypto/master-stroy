import { aboutData } from '../../entities/siteData'
import Reveal from '../../shared/ui/Reveal'

export default function AboutSection({ onOrder }) {
  const { image, title, subtitle, paragraphs, company } = aboutData

  return (
    <section id="about" className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        <Reveal className="h-64 overflow-hidden sm:h-80 md:h-auto">
          <img
            src={image}
            alt="О нас"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-5 px-5 py-10 sm:px-10 lg:px-16 lg:py-16">
          <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
          <h3 className="text-base font-bold sm:text-lg lg:text-xl">{subtitle}</h3>
          <div className="flex flex-col gap-4 text-xs leading-relaxed text-white/80 sm:text-sm">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>{company}</p>
          </div>
          <button
            onClick={() => onOrder('Консультация / заказ')}
            className="mt-2 w-fit rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-95"
          >
            Приобрести
          </button>
        </Reveal>
      </div>
    </section>
  )
}