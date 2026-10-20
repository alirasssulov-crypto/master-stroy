import { heroData } from '../../entities/siteData'

export default function HeroSection() {
  const { image, title, text } = heroData

  return (
    <section
      className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center px-4 py-16 text-center text-white sm:min-h-[520px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-5">
        <h1 className="animate-fade-up text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p
          style={{ animationDelay: '200ms' }}
          className="animate-fade-up text-xs leading-relaxed text-white/85 sm:text-sm"
        >
          {text}
        </p>
        <a
          href="#catalog"
          style={{ animationDelay: '400ms' }}
          className="animate-fade-up rounded-full bg-brand px-12 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:bg-brand-dark active:scale-95"
        >
          Каталог
        </a>
      </div>
    </section>
  )
}