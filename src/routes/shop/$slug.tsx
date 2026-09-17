import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { getProductBySlug, formatPrice } from '#/lib/catalog'
import { AddToCart } from '#/components/AddToCart'

export const Route = createFileRoute('/shop/$slug')({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug)
    if (!product) throw notFound()
    return { product }
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="font-display text-2xl text-gold uppercase">Not Found</h1>
      <Link to="/shop" className="mt-4 inline-block text-sm text-zinc-400 hover:text-gold">
        ← Back to shop
      </Link>
    </div>
  ),
})

function ProductPage() {
  const { product } = Route.useLoaderData()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link
        to="/shop"
        className="text-xs tracking-[0.2em] text-zinc-500 uppercase hover:text-gold"
      >
        ← Shop
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {product.images.map((src, i) => (
            <div
              key={src}
              className="overflow-hidden border border-white/10 bg-black"
            >
              <img
                src={src}
                alt={`${product.name} ${i === 0 ? 'primary' : `view ${i + 1}`}`}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] text-pr-red uppercase">
            {product.category}
            {product.colorLabel ? ` · ${product.colorLabel}` : ''}
          </p>
          <h1 className="font-display mt-2 text-3xl tracking-wide text-zinc-100 uppercase sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-gold">
            {formatPrice(product.price)}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-zinc-400">
            {product.description}
          </p>

          {product.tags && product.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <li
                  key={t}
                  className="border border-white/10 px-2 py-0.5 text-[10px] tracking-widest text-zinc-500 uppercase"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          {product.printfulTemplateId && (
            <p className="mt-4 text-xs text-zinc-600">
              Printful template: {product.printfulTemplateId}
            </p>
          )}

          <div className="mt-8">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
