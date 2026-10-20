import { useState } from 'react'
import { headerData } from '../entities/siteData'
import OrderModal from '../features/home/OrderModal'

const telHref = (p) => `tel:${p.replace(/[^\d+]/g, '')}`

const PinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z" />
  </svg>
)

export default function Header() {
  const { logo, address, hours, phones, nav } = headerData
  const [open, setOpen] = useState(false)
  const [callback, setCallback] = useState(false)

  return (
    <header className="sticky top-0 z-40 shadow-md">
      {/* Верхняя полоса */}
      <div className="hidden bg-ink text-white lg:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-3 text-[11px]">
          <div className="flex items-center gap-3">
            <PinIcon />
            <span className="max-w-[170px] leading-snug">{address}</span>
          </div>
          <span className="h-8 w-px bg-white/30" />
          <div className="flex items-center gap-3">
            <ClockIcon />
            <span className="max-w-[110px] leading-snug">{hours}</span>
          </div>
          <span className="h-8 w-px bg-white/30" />
          <div className="flex items-center gap-3">
            <PhoneIcon />
            <div className="flex flex-col leading-snug">
              {phones.slice(0, 2).map((p) => (
                <a key={p} href={telHref(p)} className="transition hover:text-brand">{p}</a>
              ))}
            </div>
            <a href={telHref(phones[2])} className="ml-2 transition hover:text-brand">{phones[2]}</a>
          </div>
          <button
            onClick={() => setCallback(true)}
            className="rounded-full bg-white px-8 py-3 text-xs font-bold text-ink transition hover:bg-brand hover:text-white active:scale-95"
          >
            Заказать звонок
          </button>
        </div>
      </div>

      {/* Основное меню */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="shrink-0">
            <img src={logo} alt="Мастер Строй" className="h-10 w-auto sm:h-12" />
          </a>

          <nav className="hidden items-center gap-6 text-[11px] font-bold lg:flex xl:gap-8">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative py-1 transition hover:text-brand after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-ink transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-ink transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Мобильное меню */}
        <div
          className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${open ? 'max-h-[500px] border-t border-ink/10' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col px-4 py-3">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/5 py-3 text-sm font-semibold transition hover:pl-2 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <a href={telHref(phones[0])} className="py-3 text-sm font-bold text-brand">{phones[0]}</a>
            <button
              onClick={() => {
                setOpen(false)
                setCallback(true)
              }}
              className="mb-2 rounded-full bg-brand py-3 text-sm font-semibold text-white active:scale-95"
            >
              Заказать звонок
            </button>
          </nav>
        </div>
      </div>

      {callback && <OrderModal title="Заказать звонок" onClose={() => setCallback(false)} />}
    </header>
  )
}