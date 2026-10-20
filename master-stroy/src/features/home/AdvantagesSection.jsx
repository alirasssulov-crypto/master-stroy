import { advantages } from '../../entities/siteData'
import Reveal from '../../shared/ui/Reveal'

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="bg-ink px-4 py-12 sm:px-8 lg:py-20">
      <Reveal>
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          Наши преимущества
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-[1100px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 120}>
            <div className="flex h-full flex-col gap-3 rounded-3xl bg-white p-6 text-ink transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(217,106,43,0.35)]">
              <img src={a.icon} alt="" className="h-16 w-16 object-contain" />
              <h3 className="text-sm font-bold">{a.title}</h3>
              <p className="text-xs leading-relaxed text-ink/70">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}