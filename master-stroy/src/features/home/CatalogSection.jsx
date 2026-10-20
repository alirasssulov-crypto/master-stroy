import { catalogData } from '../../entities/siteData'
import Reveal from '../../shared/ui/Reveal'

export default function CatalogSection({ onOrder }) {
  return (
    <section id="catalog" className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:py-20">
      <Reveal>
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">Каталог продукции</h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {catalogData.map((item, i) => (
          <Reveal key={item.id} delay={(i % 4) * 100}>
            <button
              onClick={() => onOrder(item.name)}
              className="group flex h-full w-full flex-col items-center justify-between gap-3 rounded-3xl bg-white p-4 shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_14px_35px_rgba(217,106,43,0.35)] active:scale-95"
            >
              <div className="flex h-28 items-center justify-center sm:h-32">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full object-contain transition duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-bold transition group-hover:text-brand">{item.name}</span>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <a
          href="#top"
          className="rounded-full bg-brand px-10 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-95"
        >
          Больше товаров
        </a>
      </Reveal>
    </section>
  )
}