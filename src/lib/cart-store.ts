import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  productId: string
  slug: string
  name: string
  price: number
  image: string
  size?: string
  color?: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (productId: string, size?: string, color?: string) => void
  updateQuantity: (
    productId: string,
    quantity: number,
    size?: string,
    color?: string,
  ) => void
  clearCart: () => void
  itemCount: () => number
  subtotal: () => number
}

function sameLine(
  a: CartItem,
  productId: string,
  size?: string,
  color?: string,
) {
  return a.productId === productId && a.size === size && a.color === color
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const qty = item.quantity ?? 1
        set((state) => {
          const existing = state.items.find((i) =>
            sameLine(i, item.productId, item.size, item.color),
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                sameLine(i, item.productId, item.size, item.color)
                  ? { ...i, quantity: i.quantity + qty }
                  : i,
              ),
            }
          }
          return {
            items: [...state.items, { ...item, quantity: qty }],
          }
        })
      },
      removeItem: (productId, size, color) =>
        set((state) => ({
          items: state.items.filter((i) => !sameLine(i, productId, size, color)),
        })),
      updateQuantity: (productId, quantity, size, color) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => !sameLine(i, productId, size, color))
              : state.items.map((i) =>
                  sameLine(i, productId, size, color)
                    ? { ...i, quantity }
                    : i,
                ),
        })),
      clearCart: () => set({ items: [] }),
      itemCount: () => get().items.reduce((n, i) => n + i.quantity, 0),
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: 'hcw-cart',
    },
  ),
)
