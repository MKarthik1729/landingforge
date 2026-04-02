import { defineDemo } from '../types'

export const ecommerceMotionLaunchDemo = defineDemo({
  id: 'ecommerce-motion-launch',
  category: 'ecommerce',
  styleVariant: 'motion',
  slug: 'motion-launch',
  title: 'NovaDrop Launch Pulse',
  summary: 'A bold launch page with motion-driven reveals for waitlists, timed drops, and campaign-led product releases.',
  paletteKey: 'ecommerce-motion-launch',
  navbarMode: 'hybrid',
  interactiveKind: 'timeline',
  hero: {
    eyebrow: 'Launch campaign momentum',
    headline: 'Make the product drop feel like an event instead of a listing.',
    description:
      'This motion-led direction is designed for countdowns, product launches, high-energy sale windows, and collection drops with hype.',
    image:
      '/images/ecommerce/motion-launch/hero.jpg',
    imageAlt: 'Stylized ecommerce launch campaign with products and dramatic lighting',
  },
  heroChips: ['Launch energy', 'Animated reveal', 'Drop campaign flow'],
  metrics: [
    { label: 'Campaign mode', value: 'Launch' },
    { label: 'Motion level', value: 'High' },
    { label: 'Goal', value: 'Waitlist + buy' },
  ],
  interactive: {
    title: 'Build anticipation through a staged reveal sequence.',
    description:
      'The interaction helps the page move through teaser, feature reveal, and release urgency without asking the shopper to navigate away.',
    items: [
      {
        title: 'Teaser mode',
        label: 'Stage 01',
        detail:
          'Start by creating intrigue around the product story and timing before exposing the full catalog or offer details.',
      },
      {
        title: 'Feature reveal',
        label: 'Stage 02',
        detail:
          'Introduce the most differentiated product details in a more cinematic, animated layout so the launch feels elevated.',
      },
      {
        title: 'Release push',
        label: 'Stage 03',
        detail:
          'Close on urgency, launch timing, and the clearest path to join the waitlist or purchase while momentum is highest.',
      },
    ],
  },
  sections: [
    {
      title: 'Campaign pacing',
      body: 'Motion controls the tempo of the landing page, making it feel more like a launch campaign than a static product detail page.',
    },
    {
      title: 'Hype without clutter',
      body: 'The page stays expressive and high-energy while still preserving enough structure for pricing, features, and trust.',
    },
    {
      title: 'Launch-ready CTA hierarchy',
      body: 'CTAs can shift from join-the-list to shop-the-drop based on campaign timing without rebuilding the entire page.',
    },
  ],
  checklist: [
    'Motion scene directly below hero to reinforce launch momentum',
    'Strong visual separation from the card collection version',
    'Count-down or timed release content fits naturally into the structure',
    'Reduced-motion fallback remains intact',
  ],
  testimonial: {
    quote:
      'It felt like a brand campaign page, not a temporary promo banner stretched into a layout.',
    name: 'Kai Moreno',
    role: 'Growth Lead, NovaDrop',
  },
  contactCta: {
    label: 'Create a launch campaign page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Launch%20Campaign%20Demo',
    note: 'Ideal for drops, timed campaigns, and product moments that rely on anticipation and energy.',
  },
})
