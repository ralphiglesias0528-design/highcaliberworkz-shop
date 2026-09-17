import { Link, createFileRoute } from '@tanstack/react-router'
import { formatPrice } from '#/lib/catalog'
import { useCartStore } from '#/lib/cart-store'

export const Route = createFileRoute('/cart')({ component: CartPage })

function CartPage() {
  const items = useCartStore((s) => s.items)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const removeItem = useCartStore((s) => s.removeItem)
  const subtotal = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  )

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-3xl tracking-wide text-gold uppercase">
        Cart
      </h1>

      {items.length === 0 ? (
        <div className="mt-10 border border-dashed border-white/15 p-10 text-center">
          <p className="text-zinc-500">Cart is empty.</p>
          <Link
            to="/shop"
            className="mt-4 inline-block text-sm tracking-widest text-gold uppercase hover:underline"
          >
            Browse shop →
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-8 divide-y divide-white/10 border border-white/10">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.size}-${item.color}`}
                className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover border border-white/10"
                />
                <div className="flex-1">
                  <Link
                    to="/shop/$slug"
                    params={{ slug: item.slug }}
                    className="font-display text-sm tracking-wide uppercase hover:text-gold"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-xs text-zinc-500">
                    {[item.color, item.size].filter(Boolean).join(' · ')}
                  </p>
                  <p className="mt-1 text-sm text-gold">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="h-8 w-8 border border-white/20 text-zinc-300 hover:border-gold"
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.quantity - 1,
                        item.size,
                        item.color,
                      )
                    }
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    className="h-8 w-8 border border-white/20 text-zinc-300 hover:border-gold"
                    onClick={() =>
                      updateQuantity(
                        item.productId,
                        item.quantity + 1,
                        item.size,
                        item.color,
                      )
                    }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="ml-2 text-xs text-pr-red hover:underline"
                    onClick={() =>
                      removeItem(item.productId, item.size, item.color)
                    }
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-end gap-4 border-t border-gold/20 pt-6">
            <p className="text-lg">
              Subtotal:{' '}
              <span className="font-semibold text-gold">
                {formatPrice(subtotal)}
              </span>
            </p>
            <Link
              to="/checkout"
              className="border border-gold bg-gold px-8 py-3 text-xs font-bold tracking-[0.2em] text-charcoal uppercase transition hover:bg-transparent hover:text-gold"
            >
              Checkout (dry-run)
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
