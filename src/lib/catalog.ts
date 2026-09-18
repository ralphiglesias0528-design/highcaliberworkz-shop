import { asset } from '#/lib/asset'

export type ProductCategory = 'tee' | 'hoodie' | 'figure' | 'accessory'

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

/** S–5XL — Printful Gildan 5000 / 18500 range. */
export const TEE_SIZES = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'] as const
export const HOODIE_SIZES = TEE_SIZES

/**
 * Classic Gildan palette carried on Printful for Gildan 5000 (tee)
 * and Gildan 18500 (hoodie) blanks — streetwear staples only.
 */
export const GARMENT_COLORS = [
  'Black',
  'White',
  'Navy',
  'Sport Grey',
  'Sand',
  'Red',
  'Forest Green',
  'Charcoal',
] as const

/** Shop apparel — tees + matching hoodies. Stay Blessed through Born for Adversity. */
export const products: Product[] = [
  {
    id: 'stay-blessed',
    slug: 'stay-blessed',
    name: 'Stay Blessed Tee',
    description:
      'Faith. Family. Hustle. Progress. Everyday armor for the ones grinding with purpose — street-ready cut. Gildan 5000-style heavy cotton via Printful; pick your blank color.',
    price: 39.99,
    images: [
      asset('/images/stay-blessed-front.png'),
      asset('/images/stay-blessed-back.png'),
    ],
    colors: [...GARMENT_COLORS],
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
      'Fuel up, map it out, then take the block. Late nights and bigger moves. Gildan 5000-style heavy cotton via Printful; pick your blank color.',
    price: 39.99,
    images: [
      asset('/images/snacks-plans-front.png'),
      asset('/images/snacks-plans-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
  },
  {
    id: 'pr-dna',
    slug: 'pr-dna',
    name: 'Puerto Rico In My DNA Tee',
    description:
      'Island blood, city streets. For the ones who carry Boricua DNA wherever they go. Gildan 5000-style heavy cotton via Printful; pick your blank color.',
    price: 39.99,
    images: [
      asset('/images/pr-dna-front.png'),
      asset('/images/pr-dna-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'White',
    sizes: [...TEE_SIZES],
    category: 'tee',
  },
  {
    id: 'freedom-weighs-a-ton',
    slug: 'freedom-weighs-a-ton',
    name: 'Freedom Weighs a Ton Tee',
    description:
      'Freedom Weighs a Ton — full front art and High Caliber logo at the nape. Gildan 5000-style heavy cotton via Printful; pick your blank color.',
    price: 39.99,
    images: [
      asset('/images/freedom-weighs-front-shirt.png'),
      asset('/images/freedom-weighs-back-nape.png'),
      asset('/images/freedom-weighs-shirt.png'),
      asset('/images/freedom-weighs-back-shirt.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    printfulTemplateId: '107574313',
  },
  {
    id: 'bash-bros',
    slug: 'bash-bros',
    name: 'Bash Bros Tee',
    description:
      'Iron sharpens iron. Spotter energy — Bash Bros full back art, left-chest High Caliber logo, Proverbs 27:17. Gildan 5000-style via Printful; pick your blank color.',
    price: 39.99,
    images: [
      asset('/images/bash-bros-front.png'),
      asset('/images/bash-bros-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['iron', 'brotherhood', 'faith', 'proverbs'],
    printfulTemplateId: '107631980',
  },
  {
    id: 'born-for-adversity',
    slug: 'born-for-adversity',
    name: 'Born for Adversity Tee',
    description:
      'A friend loves at all times, and a brother is born for a time of adversity. Ninja and bull on the skyline — full back art, left-chest High Caliber logo, Proverbs 17:17. Gildan 5000-style via Printful; pick your blank color.',
    price: 39.99,
    images: [
      asset('/images/born-for-adversity-front.png'),
      asset('/images/born-for-adversity-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['brotherhood', 'faith', 'friends', 'proverbs'],
    printfulTemplateId: '107599661',
  },

  // --- Hoodies (same artwork as matching tees; tee mockups until hoodie mocks land) ---
  {
    id: 'stay-blessed-hoodie',
    slug: 'stay-blessed-hoodie',
    name: 'Stay Blessed Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Stay Blessed tee — faith, family, hustle, progress — on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Images show the tee print for now; hoodie mockups coming later. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/stay-blessed-front.png'),
      asset('/images/stay-blessed-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Sand',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['faith', 'family', 'hustle', 'progress'],
  },
  {
    id: 'snacks-plans-hoodie',
    slug: 'snacks-plans-hoodie',
    name: 'Snacks, Plans & Takeovers Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Snacks, Plans & Takeovers tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Images show the tee print for now; hoodie mockups coming later. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/snacks-plans-front.png'),
      asset('/images/snacks-plans-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
  },
  {
    id: 'pr-dna-hoodie',
    slug: 'pr-dna-hoodie',
    name: 'Puerto Rico In My DNA Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Puerto Rico In My DNA tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Images show the tee print for now; hoodie mockups coming later. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/pr-dna-front.png'),
      asset('/images/pr-dna-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'White',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
  },
  {
    id: 'freedom-weighs-a-ton-hoodie',
    slug: 'freedom-weighs-a-ton-hoodie',
    name: 'Freedom Weighs a Ton Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Freedom Weighs a Ton tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Images show the tee print for now; hoodie mockups coming later. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/freedom-weighs-front-shirt.png'),
      asset('/images/freedom-weighs-back-nape.png'),
      asset('/images/freedom-weighs-shirt.png'),
      asset('/images/freedom-weighs-back-shirt.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
  },
  {
    id: 'bash-bros-hoodie',
    slug: 'bash-bros-hoodie',
    name: 'Bash Bros Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Bash Bros tee — Proverbs 27:17 / iron sharpens iron — on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Images show the tee print for now; hoodie mockups coming later. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/bash-bros-front.png'),
      asset('/images/bash-bros-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['iron', 'brotherhood', 'faith', 'proverbs'],
  },
  {
    id: 'born-for-adversity-hoodie',
    slug: 'born-for-adversity-hoodie',
    name: 'Born for Adversity Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Born for Adversity tee — Proverbs 17:17 — on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Images show the tee print for now; hoodie mockups coming later. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/born-for-adversity-front.png'),
      asset('/images/born-for-adversity-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['brotherhood', 'faith', 'friends', 'proverbs'],
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
    // No unique tray mockup found — use HC print art (cannabis motif) as distinct brand placeholder.
    images: [asset('/images/high-caliber-print-art.png')],
    category: 'accessory',
    comingSoon: true,
    buyDisabled: true,
  },
]

export function getShopTees(): Product[] {
  return products.filter((p) => p.category === 'tee')
}

export function getShopHoodies(): Product[] {
  return products.filter((p) => p.category === 'hoodie')
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
