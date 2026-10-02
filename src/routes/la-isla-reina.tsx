import { Link, createFileRoute } from '@tanstack/react-router'
import { LA_ISLA_REINA, getCollectionProducts } from '#/lib/catalog'
import { ProductCard } from '#/components/ProductCard'

export const Route = createFileRoute('/la-isla-reina')({
  component: LaIslaReinaPage,
  head: () => ({
    meta: [
      { title: `${LA_ISLA_REINA.name} — High Caliber` },
      { name: 'description', content: LA_ISLA_REINA.tagline },
    ],
  }),
})

function LaIslaReinaPage() {
  const items = getCollectionProducts(LA_ISLA_REINA.slug)
  const crops = items.filter((p) => p.category === 'crop-top')
  const hoodies = items.filter((p) => p.category === 'hoodie')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link
        to="/shop"
        className="text-xs tracking-[0.2em] text-zinc-500 uppercase hover:text-gold"
      >
        ← Shop
      </Link>

      <div className="relative mt-6 mb-10 overflow-hidden border-b border-gold/20 pb-8">
        <div className="pointer-events-none absolute -top-10 right-0 h-48 w-72 bg-gradient-to-tr from-pr-red/25 via-transparent to-gold/20 blur-3xl" />
        <p className="text-[10px] tracking-[0.35em] text-pr-red uppercase">
          Collection · Crop Tops &amp; Hoodie
        </p>
        <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase sm:text-5xl">
          {LA_ISLA_REINA.name}
        </h1>
        <p className="font-display mt-3 text-lg tracking-wide text-zinc-100 uppercase sm:text-xl">
          {LA_ISLA_REINA.tagline}
        </p>
        <p className="mt-4 max-w-xl text-sm text-zinc-500">
          The queen of the island — El Morro, the PR flag and crown sneakers.
          {` ${crops.length} black cotton crop tops (XS–XL) and ${hoodies.length} black pullover hoodie (S–2XL).`}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
