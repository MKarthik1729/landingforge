import { defineDemo } from '../types'

export const ecommerceCardCollectionDemo = defineDemo({
  id: 'ecommerce-card-collection',
  category: 'ecommerce',
  styleVariant: 'card',
  slug: 'card-collection',
  title: 'Threadline Collection Grid',
  summary: 'A card-driven ecommerce landing page for curated collections, fast product scanning, and strong sale architecture.',
  paletteKey: 'ecommerce-card-collection',
  navbarMode: 'solid',
  interactiveKind: 'tabs',
  hero: {
    eyebrow: 'Collection-first commerce',
    headline: 'Make the shopfront feel editorial, clean, and easy to buy from.',
    description:
      'This direction is built for curated drops, seasonal edits, and collection-first brands that need visual order without losing conversion momentum.',
    image:
      '/images/sports/hero.jpg',
    imageAlt: 'Curated ecommerce collection with apparel and accessories',
  },
  heroChips: ['Collection cards', 'Fast scan', 'Sale-ready structure'],
  metrics: [
    { label: 'Collection rows', value: '4 modules' },
    { label: 'Decision speed', value: 'Quick' },
    { label: 'Use case', value: 'Seasonal edit' },
  ],
  interactive: {
    title: 'Switch product curation angles without leaving the page flow.',
    description:
      'The card interaction lets shoppers explore featured collections by category, occasion, or price point while staying anchored to the same hero story.',
    items: [
      {
        title: 'New arrivals',
        label: 'Edit 01',
        detail:
          'Lead with the freshest drop, then surface supporting product cards designed for quick browse-to-cart movement.',
      },
      {
        title: 'Best sellers',
        label: 'Edit 02',
        detail:
          'Shift the visual proof to products shoppers already trust, making it easier to reduce hesitation and improve confidence.',
      },
      {
        title: 'Limited run',
        label: 'Edit 03',
        detail:
          'Create urgency around a curated capsule while still preserving structure, spacing, and readability.',
      },
    ],
  },
  sections: [
    {
      title: 'Editorial card rhythm',
      body: 'Cards are used to make browsing feel styled and intentional instead of crowded like a marketplace grid.',
    },
    {
      title: 'Conversion-friendly hierarchy',
      body: 'The page keeps CTA visibility high while allowing room for product curation, trust cues, and category browsing.',
    },
    {
      title: 'Adaptable for sale moments',
      body: 'Because the system is modular, it can support launches, category pushes, and timed promotions with minimal layout change.',
    },
  ],
  checklist: [
    'Collection navigation embedded into the hero flow',
    'Product curation optimized for both mobile and desktop',
    'Card system distinct from service and manufacturing variants',
    'Strong room for merchandising, reviews, and urgency',
  ],
  testimonial: {
    quote:
      'It gave our drop pages structure without making them feel cold. The products finally felt curated.',
    name: 'Mia Calder',
    role: 'Brand Lead, Threadline Goods',
  },
  contactCta: {
    label: 'Build a collection-first ecommerce page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Collection%20Ecommerce%20Demo',
    note: 'Best for brands that want category and collection storytelling without losing purchase clarity.',
  },
})
