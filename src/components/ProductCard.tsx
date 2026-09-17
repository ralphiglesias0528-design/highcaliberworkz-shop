import { Link } from '@tanstack/react-router'
import type { Product } from '#/lib/catalog'
import { formatPrice } from '#/lib/catalog'

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0]
  const disabled = product.comingSoon || product.buyDisabled

  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden border border-white/10 bg-surface transition hover:border-gold/50"
    >
      <div className="relative aspect-square overflow-hidden bg-black">
        <img
          src={image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {disabled && (
          <span className="absolute top-3 left-3 bg-pr-red px-2 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
            Coming Soon
          </span>
        )}
        {product.colorLabel && (
          <span className="absolute right-3 bottom-3 border border-gold/40 bg-charcoal/80 px-2 py-0.5 text-[10px] tracking-widest text-gold uppercase">
            {product.colorLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-base tracking-wide text-zinc-100 uppercase">
          {product.name}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-zinc-500">{product.description}</p>
        <p className="text-sm font-semibold text-gold">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
