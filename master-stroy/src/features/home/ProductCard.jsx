import { colorDots } from '../../entities/siteData'

export default function ProductCard({ product, onAdd }) {
  const { name, image, size, qty, colors, prices } = product

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:flex-row">
      <div className="flex flex-1 flex-col p-4">
        <div className="flex h-40 items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-3 text-sm font-bold">{name}</h3>
        <p className="mt-2 text-xs text-ink/70">Размер: {size}</p>
        <p className="text-xs text-ink/70">Количество: {qty}</p>
        <p className="text-xs text-ink/70">Цвета в наличии: {colors}</p>
        <div className="mt-2 flex gap-1.5">
          {colorDots.map((c) => (
            <span
              key={c}
              style={{ background: c }}
              className="h-3 w-3 rounded-sm transition hover:scale-125"
            />
          ))}
        </div>
      </div>

      <div className="relative flex flex-col gap-3 bg-panel p-5 pb-16 text-white sm:w-[45%]">
        {prices.map(([color, price]) => (
          <div key={color}>
            <p className="text-xs font-bold">{color}</p>
            <p className="text-[11px] text-white/70">{price}</p>
          </div>
        ))}
        <button
          onClick={() => onAdd(name)}
          aria-label={`Заказать ${name}`}
          className="absolute bottom-0 right-0 flex h-12 w-14 items-center justify-center rounded-tl-2xl bg-brand text-2xl text-white transition hover:bg-brand-dark active:scale-90"
        >
          +
        </button>
      </div>
    </article>
  )
}