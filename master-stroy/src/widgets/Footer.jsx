import { footerData } from '../entities/siteData'

const telHref = (p) => `tel:${p.replace(/[^\d+]/g, '')}`

export default function Footer() {
  const { hours, phones, columns, copyright } = footerData

  return (
    <footer id="contacts" className="bg-white">
      <div className="h-10 bg-ink" />

      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-bold text-brand">Магазин</h4>
          <a href="#" className="text-xs transition hover:text-brand">Персональный раздел</a>
          <div className="flex items-center gap-3 text-xs">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>{hours}</span>
          </div>
          <div className="flex items-start gap-3 text-xs">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z" />
            </svg>
            <div className="flex flex-col gap-1">
              {phones.map((p) => (
                <a key={p} href={telHref(p)} className="transition hover:text-brand">{p}</a>
              ))}
            </div>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-brand">{col.title}</h4>
            {col.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="w-fit text-xs transition hover:translate-x-1 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <p className="pb-8 text-center text-xs">{copyright}</p>
    </footer>
  )
}