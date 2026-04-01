import { defineDemo } from '../types'

export const manufacturingImmersiveFactoryDemo = defineDemo({
  id: 'manufacturing-immersive-factory',
  category: 'manufacturing',
  styleVariant: 'interactive',
  slug: 'immersive-factory',
  title: 'FoundryView Plant Experience',
  summary: 'An interactive factory-tour page for plant capability, equipment, and global partnerships.',
  paletteKey: 'manufacturing-immersive-factory',
  navbarMode: 'transparent',
  interactiveKind: 'spotlight',
  hero: {
    eyebrow: 'Immersive factory experience',
    headline: 'Turn the plant tour into a cinematic sales asset.',
    description:
      'This variant uses image-driven storytelling, environmental overlays, and interactive focus states to make the facility feel tangible before a visit is ever booked.',
    image:
      '/images/landings/manufacturing-immersive-factory-hero.jpg',
    imageAlt: 'Wide industrial factory floor with machinery and lighting',
  },
  heroChips: ['Full-bleed imagery', 'Interactive hotspots', 'Plant-tour energy'],
  metrics: [
    { label: 'Visual format', value: 'Immersive' },
    { label: 'Hotspot stories', value: '3 focus zones' },
    { label: 'CTA intent', value: 'Schedule a visit' },
  ],
  interactive: {
    title: 'Let visitors explore the plant through focused story zones.',
    description:
      'The same interaction slot becomes a guided tour, moving attention between equipment, capacity, and dispatch capability without needing a complex product configurator.',
    items: [
      {
        title: 'Machining hall',
        label: 'Zone 01',
        detail:
          'Highlight the most impressive line or equipment bank with one clear story about throughput, precision, and program fit.',
      },
      {
        title: 'Quality lab',
        label: 'Zone 02',
        detail:
          'Bring metrology, validation, and release processes forward to show how the plant protects consistency.',
      },
      {
        title: 'Dispatch network',
        label: 'Zone 03',
        detail:
          'Use the third spotlight to connect factory strength with delivery reliability and global customer support.',
      },
    ],
  },
  sections: [
    {
      title: 'Image-first authority',
      body: 'The factory becomes the interface, helping prospects feel scale, cleanliness, and infrastructure in a single glance.',
    },
    {
      title: 'High-impact storytelling',
      body: 'Compared with card-based layouts, this direction trades density for atmosphere, making it ideal for flagship manufacturing brands.',
    },
    {
      title: 'Visit-ready CTA flow',
      body: 'The landing page naturally supports actions like scheduling a plant visit, requesting a capability deck, or opening a distributor conversation.',
    },
  ],
  checklist: [
    'Transparent navbar on hero that settles into a solid state on scroll',
    'Interactive spotlight area placed immediately after the hero',
    'Heavy use of background imagery balanced by readable overlays',
    'Distinct interactive feel while still using the shared layout system',
  ],
  testimonial: {
    quote:
      'It felt less like reading a landing page and more like stepping into our facility online.',
    name: 'Marcus Yin',
    role: 'Global Sales Lead, FoundryView Systems',
  },
  contactCta: {
    label: 'Design an immersive plant page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Immersive%20Plant%20Demo',
    note: 'Best when the visual impression of the plant itself helps close trust and differentiation.',
  },
})
