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

/** Shop apparel — tees + matching hoodies. Stay Blessed through Clock In. Square Up. */
export const products: Product[] = [
  {
    id: 'stay-blessed',
    slug: 'stay-blessed',
    name: 'Stay Blessed Tee',
    description:
      'Faith. Family. Hustle. Progress. Everyday armor for the ones grinding with purpose — street-ready cut. Bella+Canvas 3001 Soft Cream via Printful.',
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
    printfulTemplateId: '107633376',
  },
  {
    id: 'snacks-plans',
    slug: 'snacks-plans',
    name: 'Snacks, Plans & Takeovers Tee',
    description:
      'Fuel up, map it out, then take the block. Late nights and bigger moves. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/snacks-plans-front.png'),
      asset('/images/snacks-plans-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    printfulTemplateId: '107633470',
  },
  {
    id: 'pr-dna',
    slug: 'pr-dna',
    name: 'Puerto Rico In My DNA Tee',
    description:
      'Island blood, city streets. For the ones who carry Boricua DNA wherever they go. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/pr-dna-front.png'),
      asset('/images/pr-dna-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'White',
    sizes: [...TEE_SIZES],
    category: 'tee',
    printfulTemplateId: '107633575',
  },
  {
    id: 'freedom-weighs-a-ton',
    slug: 'freedom-weighs-a-ton',
    name: 'Freedom Weighs a Ton Tee',
    description:
      'Freedom Weighs a Ton — full front art and High Caliber logo at the nape. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/freedom-weighs-front-shirt.png'),
      asset('/images/freedom-weighs-back-nape.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    printfulTemplateId: '107633202',
  },
  {
    id: 'bash-bros',
    slug: 'bash-bros',
    name: 'Bash Bros Tee',
    description:
      'Iron sharpens iron. Spotter energy — Bash Bros full back art, left-chest High Caliber logo, Proverbs 27:17. Bella+Canvas 3001 via Printful.',
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
      'A friend loves at all times, and a brother is born for a time of adversity. Ninja and bull on the skyline — full back art, left-chest High Caliber logo, Proverbs 17:17. Bella+Canvas 3001 via Printful.',
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
    printfulTemplateId: '107633038',
  },

  {
    id: 'clock-in-square-up',
    slug: 'clock-in-square-up',
    name: 'Clock In. Square Up. Tee',
    description:
      'El Gordo Ninja MMA cage — CLOCK IN. SQUARE UP. Full back art, left-chest High Caliber circular logo with PR flag. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/clock-in-back.png'),
      asset('/images/clock-in-front.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['combat', 'el-gordo', 'mma', 'cage', 'high-caliber', 'clock-in'],
  },

  {
    id: 'bori-ninja-tee',
    slug: 'bori-ninja-tee',
    name: 'Bori Ninja Tee',
    description:
      'Boricua pride that hits like a water cannon. El Gordo Ninja on the rock with the Bori crown, High Caliber belt and PR flag headband — front art, High Caliber Logo at the top of the back. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/bori-ninja-front.png'),
      asset('/images/bori-ninja-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['el-gordo', 'boricua', 'water', 'high-caliber', 'bori'],
  },
  {
    id: 'tiburon-ninja-tee',
    slug: 'tiburon-ninja-tee',
    name: 'Tiburón Ninja Tee',
    description:
      'Tiburón Ninja — shark-headed El Gordo with the PR flag headband, karambits and shark-face kicks, straight off the San Juan waterfront. Front art, High Caliber Logo at the top of the back. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/tiburon-ninja-front.png'),
      asset('/images/tiburon-ninja-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['el-gordo', 'boricua', 'shark', 'high-caliber', 'bori'],
  },
  {
    id: 'vejigante-ninja-tee',
    slug: 'vejigante-ninja-tee',
    name: 'Vejigante Ninja Tee',
    description:
      'El Gordo in red, white and blue with the vejigante spirit at his back — Boricua tradition, High Caliber energy. Front art, High Caliber Logo at the top of the back. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/vejigante-ninja-front.png'),
      asset('/images/vejigante-ninja-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['el-gordo', 'boricua', 'vejigante', 'high-caliber', 'bori'],
  },
  {
    id: 'high-caliber-classic-tee',
    slug: 'high-caliber-classic-tee',
    name: 'High Caliber Classic Tee',
    description:
      'Clean and simple — gold High Caliber left-chest hit up front, the High Caliber Logo (El Gordo Ninja on the PR flag badge) at the top of the back. Bella+Canvas 3001 via Printful.',
    price: 39.99,
    images: [
      asset('/images/high-caliber-classic-front.png'),
      asset('/images/high-caliber-classic-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...TEE_SIZES],
    category: 'tee',
    tags: ['high-caliber', 'classic', 'el-gordo', 'boricua'],
  },

  // --- Hoodies (same artwork as matching tees; hoodie silhouette mockups) ---
  {
    id: 'stay-blessed-hoodie',
    slug: 'stay-blessed-hoodie',
    name: 'Stay Blessed Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Stay Blessed tee — faith, family, hustle, progress — on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large back art + left-chest logo. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/stay-blessed-hoodie-back.png'),
      asset('/images/stay-blessed-hoodie-front.png'),
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
      'Same El Gordo / High Caliber artwork as the Snacks, Plans & Takeovers tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Front chest lettering + full back art. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/snacks-plans-hoodie-front.png'),
      asset('/images/snacks-plans-hoodie-back.png'),
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
      'Same El Gordo / High Caliber artwork as the Puerto Rico In My DNA tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large front art + High Caliber nape logo on back. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/pr-dna-hoodie-front.png'),
      asset('/images/pr-dna-hoodie-back.png'),
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
      'Same El Gordo / High Caliber artwork as the Freedom Weighs a Ton tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large front art + High Caliber nape logo on back. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/freedom-weighs-hoodie-front.png'),
      asset('/images/freedom-weighs-hoodie-back.png'),
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
      'Bash Bros on a heavy hoodie — Proverbs 27:17 / iron sharpens iron. Full original back art + left-chest High Caliber logo. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/bash-bros-hoodie-back.png'),
      asset('/images/bash-bros-hoodie-front.png'),
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
      'Same El Gordo / High Caliber artwork as the Born for Adversity tee — Proverbs 17:17 — on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large back art + left-chest logo. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/born-for-adversity-hoodie-back.png'),
      asset('/images/born-for-adversity-hoodie-front.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['brotherhood', 'faith', 'friends', 'proverbs'],
  },
  {
    id: 'clock-in-square-up-hoodie',
    slug: 'clock-in-square-up-hoodie',
    name: 'Clock In. Square Up. Hoodie',
    description:
      'Same El Gordo Ninja MMA cage artwork as the Clock In. Square Up. tee — CLOCK IN. SQUARE UP. — on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large back art + left-chest High Caliber logo. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/clock-in-hoodie-back.png'),
      asset('/images/clock-in-hoodie-front.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['combat', 'el-gordo', 'mma', 'cage', 'high-caliber', 'clock-in'],
  },
  {
    id: 'bori-ninja-hoodie',
    slug: 'bori-ninja-hoodie',
    name: 'Bori Ninja Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Bori Ninja Tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large front art + High Caliber Logo at the top of the back. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/bori-ninja-hoodie-front.png'),
      asset('/images/bori-ninja-hoodie-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['el-gordo', 'boricua', 'water', 'high-caliber', 'bori'],
  },
  {
    id: 'tiburon-ninja-hoodie',
    slug: 'tiburon-ninja-hoodie',
    name: 'Tiburón Ninja Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Tiburón Ninja Tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large front art + High Caliber Logo at the top of the back. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/tiburon-ninja-hoodie-front.png'),
      asset('/images/tiburon-ninja-hoodie-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['el-gordo', 'boricua', 'shark', 'high-caliber', 'bori'],
  },
  {
    id: 'vejigante-ninja-hoodie',
    slug: 'vejigante-ninja-hoodie',
    name: 'Vejigante Ninja Hoodie',
    description:
      'Same El Gordo / High Caliber artwork as the Vejigante Ninja Tee on a Gildan-style heavy blend hoodie via Printful (Gildan 18500). Large front art + High Caliber Logo at the top of the back. Pick your blank color.',
    price: 59.99,
    images: [
      asset('/images/vejigante-ninja-hoodie-front.png'),
      asset('/images/vejigante-ninja-hoodie-back.png'),
    ],
    colors: [...GARMENT_COLORS],
    colorLabel: 'Black',
    sizes: [...HOODIE_SIZES],
    category: 'hoodie',
    tags: ['el-gordo', 'boricua', 'vejigante', 'high-caliber', 'bori'],
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
