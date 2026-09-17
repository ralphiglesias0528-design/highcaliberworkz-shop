import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/20 bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">
            HighCaliberWorkz
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Dark industrial merch from the street — NYC grit, Puerto Rican fire.
            HighCaliberWorkz.com
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-pr-red uppercase">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            <li>
              <Link to="/shop" className="hover:text-gold">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/character" className="hover:text-gold">
                El Gordo Ninja
              </Link>
            </li>
            <li>
              <Link to="/partners" className="hover:text-gold">
                Partners
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-pr-red uppercase">Note</p>
          <p className="mt-3 text-sm text-zinc-500">
            Checkout is dry-run only — no charges. Cart saves in your browser.
            Merch art is High Caliber / El Gordo Ninja only.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-[10px] tracking-[0.25em] text-zinc-600 uppercase">
        © {new Date().getFullYear()} HighCaliberWorkz · Built different
      </div>
    </footer>
  )
}
