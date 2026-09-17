export type Partner = {
  id: string
  name: string
  role: string
  description: string
  url?: string
  status: 'active' | 'parked'
}

export const partners: Partner[] = [
  {
    id: 'printful',
    name: 'Printful',
    role: 'Print-on-demand fulfillment',
    description:
      'Tee production and fulfillment. High Caliber, Freedom Weighs a Ton, Bash Bros, and Born for Adversity templates live in Printful.',
    url: 'https://www.printful.com',
    status: 'active',
  },
  {
    id: 'shop3d',
    name: 'Shop3d',
    role: '3D collectibles',
    description: 'El Gordo Ninja figure drops and 3D merch storefront.',
    url: 'https://shop3d.io',
    status: 'active',
  },
  {
    id: 'makeship',
    name: 'Makeship',
    role: 'Limited drops & crowdfunding',
    description: 'Campaign-style drops for special High Caliber / El Gordo Ninja runs.',
    url: 'https://www.makeship.com',
    status: 'active',
  },
  {
    id: 'munchmakers',
    name: 'MunchMakers',
    role: 'Rolling trays',
    description: 'Tray manufacturing partner — High Caliber rolling tray parked until artwork lock.',
    url: 'https://munchmakers.com',
    status: 'parked',
  },
  {
    id: 'gs-jj',
    name: 'GS-JJ',
    role: 'Pins & enamel',
    description: 'Custom pins and soft enamel for street drops.',
    url: 'https://www.gs-jj.com',
    status: 'active',
  },
  {
    id: 'my-rolling-tray',
    name: 'My Rolling Tray',
    role: 'Rolling trays',
    description: 'Alternate tray partner lane — parked alongside MunchMakers.',
    status: 'parked',
  },
]
