import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-[10px] tracking-[0.35em] text-pr-red uppercase">
        About
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase sm:text-4xl">
        HighCaliberWorkz
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-zinc-400">
        <p>
          HighCaliberWorkz is street merch with NYC weight and Puerto Rican
          heat — dark charcoal, gold, and PR red. Industrial. Not pastel. Not
          SaaS.
        </p>
        <p>
          Site name stays HighCaliberWorkz / HighCaliberWorkz.com. Header:
          HIGH CALIBER WORKZ. Product titles and art labels use High Caliber
          or El Gordo Ninja only — never Workz or Budzz on the drops.
        </p>
        <p>
          Tees run through Printful. Figures through Shop3d. Trays parked with
          MunchMakers / My Rolling Tray until the art locks. Checkout on this
          shop is dry-run only — cart in localStorage, no charges.
        </p>
      </div>
      <Link
        to="/shop"
        className="mt-10 inline-block border border-gold px-6 py-3 text-xs font-bold tracking-[0.2em] text-gold uppercase hover:bg-gold hover:text-charcoal"
      >
        Enter the shop
      </Link>
    </div>
  )
}
