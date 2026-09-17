import { useState } from 'react'
import type { Product } from '#/lib/catalog'
import { useCartStore } from '#/lib/cart-store'

export function AddToCart({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem)
  const [size, setSize] = useState(product.sizes?.[2] ?? product.sizes?.[0] ?? '')
  const [color, setColor] = useState(product.colors?.[0] ?? '')
  const [added, setAdded] = useState(false)

  if (product.buyDisabled || product.comingSoon) {
    return (
      <button
        type="button"
        disabled
        className="w-full cursor-not-allowed border border-zinc-700 bg-zinc-800 px-6 py-3 text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase"
      >
        Coming Soon
      </button>
    )
  }

  if (product.externalUrl) {
    return (
      <a
        href={product.externalUrl}
        target="_blank"
        rel="noreferrer"
        className="block w-full border border-gold bg-gold px-6 py-3 text-center text-sm font-bold tracking-[0.2em] text-charcoal uppercase transition hover:bg-transparent hover:text-gold"
      >
        Buy on Shop3d
      </a>
    )
  }

  return (
    <div className="space-y-4">
      {product.colors && product.colors.length > 0 && (
        <div>
          <label className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
            Color
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`border px-3 py-1.5 text-xs tracking-wider uppercase ${
                  color === c
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/20 text-zinc-400 hover:border-gold/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes && product.sizes.length > 0 && (
        <div>
          <label className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
            Size
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={`min-w-12 border px-3 py-1.5 text-xs tracking-wider uppercase ${
                  size === s
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/20 text-zinc-400 hover:border-gold/40'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          addItem({
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size: size || undefined,
            color: color || undefined,
          })
          setAdded(true)
          setTimeout(() => setAdded(false), 1600)
        }}
        className="w-full border border-pr-red bg-pr-red px-6 py-3 text-sm font-bold tracking-[0.2em] text-white uppercase transition hover:bg-transparent hover:text-pr-red"
      >
        {added ? 'Added ✓' : 'Add to Cart'}
      </button>
    </div>
  )
}
