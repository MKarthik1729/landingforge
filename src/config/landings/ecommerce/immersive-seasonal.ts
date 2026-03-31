import { defineDemo } from '../types'

export const ecommerceImmersiveSeasonalDemo = defineDemo({
  id: 'ecommerce-immersive-seasonal',
  category: 'ecommerce',
  styleVariant: 'interactive',
  slug: 'immersive-seasonal',
  title: 'Solstice Seasonal World',
  summary: 'An interactive campaign page for seasonal edits, lifestyle storytelling, and high-impact visual merchandising.',
  paletteKey: 'ecommerce-immersive-seasonal',
  navbarMode: 'transparent',
  interactiveKind: 'spotlight',
  hero: {
    eyebrow: 'Lifestyle-led campaign page',
    headline: 'Sell the season, not just the SKU.',
    description:
      'This full-image direction is designed for holiday edits, seasonal releases, and brand moments where atmosphere and mood matter as much as the product.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Lifestyle ecommerce campaign imagery for a seasonal collection',
  },
  heroChips: ['Campaign atmosphere', 'Lifestyle imagery', 'Immersive merchandising'],
  metrics: [
    { label: 'Format', value: 'Seasonal campaign' },
    { label: 'Image weight', value: 'High' },
    { label: 'CTA goal', value: 'Shop the edit' },
  ],
  interactive: {
    title: 'Move shoppers through the campaign world one scene at a time.',
    description:
      'The interactive slot becomes a seasonal merchandising story, helping visitors understand the collection through styled focus areas rather than plain product cards.',
    items: [
      {
        title: 'Hero mood',
        label: 'Scene 01',
        detail:
          'Start with the season’s emotional hook so the shopper understands the tone, styling direction, and aspiration quickly.',
      },
      {
        title: 'Styled essentials',
        label: 'Scene 02',
        detail:
          'Use the second focus area to connect mood to purchasable product groups and move the visitor from inspiration to action.',
      },
      {
        title: 'Shop the finale',
        label: 'Scene 03',
        detail:
          'Finish on a stronger shop-now moment with urgency or inventory cues once the atmosphere has already done the heavy lifting.',
      },
    ],
  },
  sections: [
    {
      title: 'Campaign over catalog',
      body: 'The page prioritizes mood, lifestyle composition, and thematic merchandising instead of acting like a simple category page.',
    },
    {
      title: 'Visual memorability',
      body: 'The immersive format is ideal when the brand wants to own a moment, season, or collection theme in a more cinematic way.',
    },
    {
      title: 'Integrated commerce path',
      body: 'Even with heavier imagery, the structure still gives clear routes into shopping, product discovery, and timed offer CTAs.',
    },
  ],
  checklist: [
    'Transparent navbar aligned with the campaign hero treatment',
    'Spotlight interaction appears in the same location as other variants',
    'Full-bleed imagery remains readable in both light and dark modes',
    'Distinct interactive feel without abandoning commerce clarity',
  ],
  testimonial: {
    quote:
      'It made our seasonal campaign feel like an online editorial spread that still converted.',
    name: 'Jules Mercer',
    role: 'Creative Director, Solstice Supply',
  },
  contactCta: {
    label: 'Build an interactive campaign page',
    href: 'mailto:hello@landingforge.studio?subject=Immersive%20Campaign%20Demo',
    note: 'Perfect for seasonal edits, hero campaigns, and lifestyle-led merchandising pushes.',
  },
})
