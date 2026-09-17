import { Link } from '@tanstack/react-router'
import { useCartStore } from '#/lib/cart-store'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/character', label: 'Character' },
  { to: '/partners', label: 'Partners' },
  { to: '/about', label: 'About' },
] as const

export function Header() {
  const itemCount = useCartStore((s) => s.items.reduce((n, i) => n + i.quantity, 0))

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg tracking-[0.18em] text-gold uppercase sm:text-xl">
            HIGH CALIBER WORKZ
          </span>
          <span className="mt-0.5 text-[10px] tracking-[0.35em] text-pr-red uppercase">
            NYC · PR · STREET
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs font-semibold tracking-[0.2em] text-zinc-300 uppercase transition hover:text-gold [&.active]:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 border border-gold/40 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-gold uppercase transition hover:bg-gold hover:text-charcoal"
        >
          Cart
          {itemCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-pr-red px-1 text-[10px] text-white">
              {itemCount}
            </span>
          )}
        </Link>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-t border-white/5 px-4 py-2 md:hidden">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="shrink-0 text-[10px] font-semibold tracking-[0.18em] text-zinc-400 uppercase [&.active]:text-gold"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
