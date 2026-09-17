import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { formatPrice } from '#/lib/catalog'
import { useCartStore } from '#/lib/cart-store'

export const Route = createFileRoute('/checkout')({ component: CheckoutPage })

function CheckoutPage() {
  const items = useCartStore((s) => s.items)
  const subtotal = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  )
  const clearCart = useCartStore((s) => s.clearCart)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl text-gold uppercase">
          Dry-Run Complete
        </h1>
        <p className="mt-4 text-zinc-400">
          Order summary recorded locally. No payment was taken. No charges.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block border border-gold px-6 py-3 text-xs tracking-[0.2em] text-gold uppercase hover:bg-gold hover:text-charcoal"
        >
          Back to shop
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="font-display text-2xl text-gold uppercase">Checkout</h1>
        <p className="mt-4 text-zinc-500">Nothing to check out.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold">
          Shop →
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <p className="text-[10px] tracking-[0.3em] text-pr-red uppercase">
        No charges · dry-run
      </p>
      <h1 className="font-display mt-2 text-3xl tracking-wide text-gold uppercase">
        Checkout
      </h1>
      <p className="mt-3 text-sm text-zinc-500">
        Review your order. This is a dry-run — submitting clears the cart and
        shows a confirmation. No payment processor, no money moved.
      </p>

      <ul className="mt-8 divide-y divide-white/10 border border-white/10">
        {items.map((item) => (
          <li
            key={`${item.productId}-${item.size}-${item.color}`}
            className="flex justify-between gap-4 p-4 text-sm"
          >
            <div>
              <p className="font-medium text-zinc-200">{item.name}</p>
              <p className="text-xs text-zinc-500">
                {[item.color, item.size, `×${item.quantity}`]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            </div>
            <p className="text-gold">
              {formatPrice(item.price * item.quantity)}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-gold/20 pt-4">
        <span className="text-zinc-400">Subtotal</span>
        <span className="text-xl font-semibold text-gold">
          {formatPrice(subtotal)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => {
          clearCart()
          setSubmitted(true)
        }}
        className="mt-8 w-full border border-pr-red bg-pr-red px-6 py-3 text-sm font-bold tracking-[0.2em] text-white uppercase transition hover:bg-transparent hover:text-pr-red"
      >
        Place dry-run order
      </button>
    </div>
  )
}
