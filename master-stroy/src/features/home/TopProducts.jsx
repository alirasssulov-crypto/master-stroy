import { products } from '../../entities/siteData'
import Reveal from '../../shared/ui/Reveal'
import ProductCard from './ProductCard'

export default function TopProducts({ onOrder }) {
  return (
    <section id="top" className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:py-20">
      <Reveal>
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">Топ товаров</h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 120}>
            <ProductCard product={p} onAdd={onOrder} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <a
          href="#catalog"
          className="rounded-full bg-brand px-10 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark active:scale-95"
        >
          Больше товаров
        </a>
      </Reveal>
    </section>
  )
}