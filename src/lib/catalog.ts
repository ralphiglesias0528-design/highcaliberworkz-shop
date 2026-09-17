import { asset } from '#/lib/asset'

export type ProductCategory = 'tee' | 'figure' | 'accessory'

export type Product = {
  id: string
  slug: string
  name: string
  description: string
  price: number
  images: string[]
  colors?: string[]
  sizes?: string[]
  category: ProductCategory
  colorLabel?: string
  tags?: string[]
  printfulTemplateId?: string
  externalUrl?: string
  comingSoon?: boolean
  buyDisabled?: boolean
}

export const TEE_SIZES = ['S', 'M', 'L', 'XL', '2XL'] as const

/** Shop tees only — Stay Blessed through Freedom Weighs a Ton. */
export const products: Product[] = [
  {
    id: 'stay-blessed',
    slug: 'stay-blessed',
    name: 'Stay Blessed Tee',
    description:
      'Faith. Family. Hustle. Progress. Everyday armor for the ones grinding with purpose — street-ready cut, sand drop.',
    price: 38,
    images: [asset('/images/high-caliber-lockup.png')],
    colors: ['Sand'],
    colorLabel: 'Sand',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['faith', 'family', 'hustle', 'progress'],
  },
  {
    id: 'snacks-plans',
    slug: 'snacks-plans',
    name: 'Snacks, Plans & Takeovers Tee',
    description:
      'Fuel up, map it out, then take the block. Black tee for late nights and bigger moves.',
    price: 38,
    images: [asset('/images/tee-front.png')],
    colors: ['Black'],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
  },
  {
    id: 'high-caliber',
    slug: 'high-caliber',
    name: 'High Caliber Tee',
    description:
      'The lockup. No fluff — just High Caliber energy on a black tee. Printful template ready.',
    price: 41,
    images: [asset('/images/tee-front.png'), asset('/images/lockup-front.png'), asset('/images/high-caliber-lockup.png')],
    colors: ['Black'],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    printfulTemplateId: '107569047',
  },
  {
    id: 'pr-dna',
    slug: 'pr-dna',
    name: 'Puerto Rico In My DNA Tee',
    description:
      'Island blood, city streets. White tee for the ones who carry Boricua DNA wherever they go.',
    price: 38,
    images: [asset('/images/high-caliber-lockup.png')],
    colors: ['White'],
    colorLabel: 'White',
    sizes: [...TEE_SIZES],
    category: 'tee',
  },
  {
    id: 'freedom-weighs-a-ton',
    slug: 'freedom-weighs-a-ton',
    name: 'Freedom Weighs a Ton Tee',
    description:
      'Heavy truth on the back. Freedom Weighs a Ton — black tee with full back art. Printful template ready.',
    price: 43,
    images: [asset('/images/freedom-weighs-back.png'), asset('/images/freedom-weighs-mockup.png')],
    colors: ['Black'],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    printfulTemplateId: '107574313',
  },
]

export const optionalProducts: Product[] = [
  {
    id: 'el-gordo-figure',
    slug: 'el-gordo-figure',
    name: 'El Gordo Ninja Figure',
    description:
      'El Gordo Ninja — collectible figure. Grab it on Shop3d when drops go live.',
    price: 54,
    images: [asset('/images/el-gordo-figure-sheet.png')],
    category: 'figure',
    externalUrl: 'https://shop3d.io',
  },
  {
    id: 'rolling-tray',
    slug: 'rolling-tray',
    name: 'Rolling Tray',
    description:
      'High Caliber rolling tray — parked with MunchMakers / My Rolling Tray partners. Coming soon.',
    price: 34,
    images: [asset('/images/high-caliber-lockup.png')],
    category: 'accessory',
    comingSoon: true,
    buyDisabled: true,
  },
]

export function getShopTees(): Product[] {
  return products.filter((p) => p.category === 'tee')
}

export function getProductBySlug(slug: string): Product | undefined {
  return (
    products.find((p) => p.slug === slug) ??
    optionalProducts.find((p) => p.slug === slug)
  )
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}
