import { defineDemo } from '../types'

export const manufacturingMotionProcessDemo = defineDemo({
  id: 'manufacturing-motion-process',
  category: 'manufacturing',
  styleVariant: 'motion',
  slug: 'motion-process',
  title: 'PulseLine Process Story',
  summary: 'A motion-led page that turns the production journey into a high-confidence narrative for industrial buyers.',
  paletteKey: 'manufacturing-motion-process',
  navbarMode: 'hybrid',
  interactiveKind: 'timeline',
  hero: {
    eyebrow: 'Production storytelling',
    headline: 'Show how the line moves, not just what the factory sells.',
    description:
      'This concept leans on motion, sequential reveals, and animated process blocks to make manufacturing feel understandable, polished, and dependable.',
    image:
      '/images/landings/manufacturing-motion-process-hero.jpg',
    imageAlt: 'Manufacturing line with workers and equipment in motion',
  },
  heroChips: ['Process narrative', 'Animated proof', 'Operations transparency'],
  metrics: [
    { label: 'Hero scenes', value: '4 layers' },
    { label: 'Process steps', value: '6 stage story' },
    { label: 'Visual tempo', value: 'High motion' },
  ],
  interactive: {
    title: 'A production timeline that feels alive instead of static.',
    description:
      'The core interaction maps sourcing, machining, inspection, assembly, and dispatch into one animated sequence so buyers understand where reliability comes from.',
    items: [
      {
        title: 'Material intake',
        label: 'Stage 01',
        detail:
          'Incoming stock, vendor QA, and job handoff are shown as the opening movement to build trust around the starting point.',
      },
      {
        title: 'Line execution',
        label: 'Stage 02',
        detail:
          'Operators, cells, and process controls step forward with layered motion so the page feels active and engineered.',
      },
      {
        title: 'Inspection release',
        label: 'Stage 03',
        detail:
          'The sequence closes on QA, pack-out, and release criteria to show what protects downstream delivery.',
      },
    ],
  },
  sections: [
    {
      title: 'Animated credibility',
      body: 'Proof is introduced in a paced sequence, helping visitors understand process depth without confronting a wall of text.',
    },
    {
      title: 'Operational rhythm',
      body: 'Motion is used to suggest flow, throughput, and control rather than decorative effects, which keeps the aesthetic aligned with industrial buyers.',
    },
    {
      title: 'Faster narrative retention',
      body: 'The page gives sales teams a stronger “show, don’t tell” system when explaining why a production process deserves trust.',
    },
  ],
  checklist: [
    'Animated timeline positioned immediately after the hero',
    'Motion that reinforces production flow rather than distracting from it',
    'CTAs anchored to plant visit, quote, and technical review actions',
    'Reduced-motion fallback maintained for accessibility',
  ],
  testimonial: {
    quote:
      'The animated flow gave buyers a mental model of how we work before the first meeting even happened.',
    name: 'Alyssa Navarro',
    role: 'VP of Growth, PulseLine Manufacturing',
  },
  contactCta: {
    label: 'Build a motion-led process page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Motion%20Manufacturing%20Demo',
    note: 'Best fit when the sale depends on showing process sophistication and execution discipline.',
  },
})
