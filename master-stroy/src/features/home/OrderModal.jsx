import { useEffect, useState } from 'react'

export default function OrderModal({ product, title = 'Оформить заказ', onClose }) {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || form.phone.replace(/\D/g, '').length < 10) return
    console.log('Заявка:', { ...form, product })
    setSent(true)
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fade"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 animate-pop"
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 text-2xl leading-none text-ink/60 transition hover:rotate-90 hover:text-brand"
        >
          ×
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <p className="text-xl font-bold">Заявка отправлена!</p>
            <p className="mt-2 text-sm text-ink/70">Мы скоро свяжемся с вами.</p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">{title}</h3>
            {product && <p className="text-sm font-semibold text-brand">{product}</p>}
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl border border-ink/20 px-4 py-3 text-sm outline-none transition focus:border-brand"
            />
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-xl border border-ink/20 px-4 py-3 text-sm outline-none transition focus:border-brand"
            />
            <button
              type="submit"
              className="rounded-full bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-dark active:scale-95"
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  )
}