import { defineDemo } from '../types'

export const servicesImmersiveBrandDemo = defineDemo({
  id: 'services-immersive-brand',
  category: 'services',
  styleVariant: 'interactive',
  slug: 'immersive-brand',
  title: 'Oakline Comfort Collection',
  summary:
    'An immersive furniture landing page for handcrafted wood works, showcasing beds, chairs, and sofas with comfort-led storytelling.',
  paletteKey: 'services-immersive-brand',
  navbarMode: 'transparent',
  interactiveKind: 'spotlight',
  hero: {
    eyebrow: 'Comfort-first woodwork experience',
    headline: 'Show handcrafted furniture as a lived-in comfort story.',
    description:
      'This concept turns a single-product showcase into a fuller brand experience for beds, chairs, sofas, and other wood-crafted pieces that need warmth and visual depth.',
    image: '/images/immersive-brand/sofa.jpg',
    imageAlt: 'Warm living room with sofa and wood-crafted furniture',
  },
  heroChips: ['Beds', 'Chairs', 'Sofas'],
  metrics: [
    { label: 'Product focus', value: 'Beds, chairs, sofas' },
    { label: 'Material story', value: 'Solid wood comfort' },
    { label: 'Page style', value: 'Immersive showcase' },
  ],
  interactive: {
    title: 'Guide attention through the furniture range one product world at a time.',
    description:
      'The interactive zone can spotlight bedroom pieces, seating collections, and living-room comfort without collapsing everything into one generic gallery.',
    items: [
      {
        title: 'Bedroom calm',
        label: 'Scene 01',
        detail:
          'Lead with warm bed imagery and reassuring copy that frames the collection around comfort, finish quality, and rest.',
      },
      {
        title: 'Sculpted seating',
        label: 'Scene 02',
        detail:
          'Use chair-focused visuals and dimensions to help visitors understand how each piece balances form, support, and material detail.',
      },
      {
        title: 'Living-room warmth',
        label: 'Scene 03',
        detail:
          'Close with sofas and shared-space imagery so the page lands on warmth, hospitality, and everyday comfort.',
      },
    ],
  },
  sections: [
    {
      title: 'Furniture-first storytelling',
      body: 'The page now moves across beds, chairs, and sofas instead of relying on one hero product, which makes the range feel broader and more intentional.',
    },
    {
      title: 'Local image reliability',
      body: 'Product visuals are referenced from local assets so the page can render the key furniture imagery consistently and quickly.',
    },
    {
      title: 'Studio-ready closing section',
      body: 'The ending now explains the website studio, the services offered, and how immersive pages can be adapted for furniture and design brands.',
    },
  ],
  checklist: [
    'Local bed, chair, and sofa images are used across the page instead of one remote hero alone',
    'The route now includes multiple product-led sections with clear content hierarchy',
    'Wood-toned styling keeps the page aligned with handcrafted furniture and comfort',
    'The final section explains the studio and its services for creating sites and pages',
  ],
  testimonial: {
    quote:
      'The new page finally shows our beds, chairs, and sofas as one complete brand story instead of isolated product shots.',
    name: 'Amelia Hart',
    role: 'Founder, Oakline Living',
  },
  contactCta: {
    label: 'Build a comfort-led furniture site',
    href: 'mailto:mkarthik1729@gmail.com?subject=Furniture%20Landing%20Page',
    note: 'Ideal for woodwork and furniture brands that need product visuals, atmosphere, and stronger page storytelling.',
  },
})
