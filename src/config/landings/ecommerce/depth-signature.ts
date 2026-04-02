import { defineDemo } from '../types'

export const ecommerceDepthSignatureDemo = defineDemo({
  id: 'ecommerce-depth-signature',
  category: 'ecommerce',
  styleVariant: 'sections',
  slug: 'depth-signature',
  title: 'Atelier One Signature SKU',
  summary: 'A sections-led premium product landing page for a flagship SKU, built around materials and luxury conversion cues.',
  paletteKey: 'ecommerce-depth-signature',
  navbarMode: 'solid',
  interactiveKind: 'stack',
  hero: {
    eyebrow: 'Premium single-product page',
    headline: 'Give one hero product the kind of gravity that justifies the price.',
    description:
      'This direction is made for flagship products, premium materials, and commerce offers where perception is as important as product information.',
    image:
      '/images/ecommerce/depth-signature/hero.jpg',
    imageAlt: 'Premium single product showcased with dramatic lighting',
  },
  heroChips: ['Flagship SKU', 'Luxury depth', 'Premium conversion'],
  metrics: [
    { label: 'Offer focus', value: 'Single hero product' },
    { label: 'Visual feel', value: 'Premium' },
    { label: 'Buying mode', value: 'High intent' },
  ],
  interactive: {
    title: 'Stack product story, material detail, and proof in a premium sequence.',
    description:
      'The layered interaction keeps the product itself in focus while rotating attention between the strongest reasons to buy.',
    items: [
      {
        title: 'Material story',
        label: 'Layer 01',
        detail:
          'Lead with materials, sourcing, or craftsmanship when the product earns trust through how it is made.',
      },
      {
        title: 'Performance edge',
        label: 'Layer 02',
        detail:
          'Bring forward the practical reason the product outperforms alternatives without flattening it into a spec sheet.',
      },
      {
        title: 'Ownership feel',
        label: 'Layer 03',
        detail:
          'Close the experience on what it feels like to own the product, which is often what finally tips a premium purchase.',
      },
    ],
  },
  sections: [
    {
      title: 'Luxury visual weight',
      body: 'Long-form sections and tighter composition make the page feel less like retail and more like a flagship brand moment.',
    },
    {
      title: 'Focused product narrative',
      body: 'The layout is intentionally less busy so the shopper can stay with one central item and its strongest value signals.',
    },
    {
      title: 'Confidence-building CTA placement',
      body: 'Purchase actions are reinforced by premium proof, ownership cues, and material storytelling instead of hard-sell clutter.',
    },
  ],
  checklist: [
    'Flagship product receives clear visual dominance',
    'Layered interaction supports premium storytelling',
    'Shadow system clearly separates this from the launch-motion variant',
    'Designed for higher-value products and tighter catalog focus',
  ],
  testimonial: {
    quote:
      'The page made our hero product feel like the center of the brand, not just another item in a grid.',
    name: 'Leonie Park',
    role: 'Founder, Atelier One',
  },
  contactCta: {
    label: 'Design a flagship product page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Flagship%20Product%20Demo',
    note: 'Best when one premium product deserves a richer narrative and more elevated purchase context.',
  },
})
