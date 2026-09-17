import { Link, createFileRoute } from '@tanstack/react-router'
import { getShopTees, formatPrice } from '#/lib/catalog'
import { asset } from '#/lib/asset'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const tees = getShopTees().slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden border-b border-gold/20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs tracking-[0.35em] text-pr-red uppercase">
              HighCaliberWorkz.com
            </p>
            <h1 className="font-display mt-3 text-4xl leading-none tracking-wide text-gold uppercase sm:text-5xl lg:text-6xl">
              Street Weight.
              <br />
              <span className="text-zinc-100">Island Fire.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-zinc-400">
              Dark industrial merch for the ones who grind — High Caliber
              lockups, Freedom Weighs a Ton, Puerto Rico in the DNA. Not cute.
              Not SaaS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="border border-gold bg-gold px-6 py-3 text-xs font-bold tracking-[0.2em] text-charcoal uppercase transition hover:bg-transparent hover:text-gold"
              >
                Shop Tees
              </Link>
              <Link
                to="/character"
                className="border border-pr-red px-6 py-3 text-xs font-bold tracking-[0.2em] text-pr-red uppercase transition hover:bg-pr-red hover:text-white"
              >
                Meet El Gordo Ninja
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pr-red/20 via-transparent to-gold/20 blur-3xl" />
            <img
              src={asset('/images/high-caliber-lockup.png')}
              alt="High Caliber lockup"
              className="relative mx-auto max-h-[420px] w-auto border border-gold/30 object-contain shadow-[0_0_60px_rgba(201,162,39,0.15)]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-pr-red uppercase">
              Featured
            </p>
            <h2 className="font-display mt-1 text-2xl tracking-wide text-zinc-100 uppercase">
              Drop Rack
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs tracking-[0.2em] text-gold uppercase hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tees.map((p) => (
            <Link
              key={p.id}
              to="/shop/$slug"
              params={{ slug: p.slug }}
              className="group border border-white/10 bg-surface transition hover:border-gold/40"
            >
              <div className="aspect-square overflow-hidden bg-black">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm tracking-wide uppercase">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-gold">{formatPrice(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
