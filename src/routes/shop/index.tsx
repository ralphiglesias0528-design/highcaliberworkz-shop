import { createFileRoute } from '@tanstack/react-router'
import { getShopTees, optionalProducts } from '#/lib/catalog'
import { ProductCard } from '#/components/ProductCard'

export const Route = createFileRoute('/shop/')({ component: ShopPage })

function ShopPage() {
  const tees = getShopTees()
  const extras = optionalProducts

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 border-b border-gold/20 pb-6">
        <p className="text-[10px] tracking-[0.35em] text-pr-red uppercase">
          Merch
        </p>
        <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase sm:text-4xl">
          Shop
        </h1>
        <p className="mt-3 max-w-xl text-sm text-zinc-500">
          Seven tees. No fluff. High Caliber and El Gordo Ninja art only —
          never Workz lettering on the drops.
        </p>
      </div>

      <h2 className="mb-4 text-xs tracking-[0.25em] text-zinc-500 uppercase">
        Tees ({tees.length})
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tees.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h2 className="mt-14 mb-4 text-xs tracking-[0.25em] text-zinc-500 uppercase">
        More
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {extras.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
