import { defineDemo } from '../types'

export const servicesDepthConsultingDemo = defineDemo({
  id: 'services-depth-consulting',
  category: 'services',
  styleVariant: 'sections',
  slug: 'depth-consulting',
  title: 'SummitTier Advisory',
  summary: 'A sections-led premium consulting page that frames a high-ticket service offer without card-heavy layouts.',
  paletteKey: 'services-depth-consulting',
  navbarMode: 'solid',
  interactiveKind: 'stack',
  hero: {
    eyebrow: 'Premium consulting offer',
    headline: 'When the offer is expensive, the interface needs to feel expensive too.',
    description:
      'This direction positions the service as high-value and strategic through deeper surfaces, slower pacing, and a tighter emphasis on authority.',
    image: '/images/services/depth-consulting/hero.jpg',
    imageAlt: 'Executive consulting team in a premium boardroom environment',
  },
  heroChips: ['Premium surfaces', 'Authority cues', 'High-ticket CTA'],
  metrics: [
    { label: 'Offer value', value: 'Enterprise' },
    { label: 'Visual depth', value: 'Layered' },
    { label: 'CTA goal', value: 'Book consult' },
  ],
  interactive: {
    title: 'Layer the offer so the strongest authority points stay in focus.',
    description:
      'The stacked interaction lets visitors move between the offer, methodology, and outcomes while keeping the premium tone intact.',
    items: [
      {
        title: 'Advisory scope',
        label: 'Layer 01',
        detail:
          'Lead with what is covered, how leadership is involved, and the strategic outcomes the engagement is designed to create.',
      },
      {
        title: 'Delivery model',
        label: 'Layer 02',
        detail:
          'Use this layer to show workshops, leadership sessions, and operating cadence without flattening the offer into a checklist.',
      },
      {
        title: 'Client impact',
        label: 'Layer 03',
        detail:
          'Close the stack on measurable gains, executive trust, and the kind of transformation that justifies the fee.',
      },
    ],
  },
  sections: [
    {
      title: 'Premium visual tone',
      body: 'Shadow and depth make the service feel more substantial, which matters when the page is supporting a serious buying decision.',
    },
    {
      title: 'Authority-first content',
      body: 'The layout prioritizes methods, case depth, and executive credibility rather than superficial lifestyle messaging.',
    },
    {
      title: 'Consultation-driven conversion',
      body: 'Everything points toward a qualification call rather than a casual lead capture form.',
    },
  ],
  checklist: [
    'Sections flow clearly distinct from the card layout',
    'Strong space for founder authority and methodology',
    'CTA aimed at serious buyers, not low-intent clickers',
    'Readable in both light and dark without losing depth cues',
  ],
  testimonial: {
    quote:
      'It gave our advisory offer the visual weight it was missing. The page finally matched our positioning.',
    name: 'Omar Bennett',
    role: 'Managing Partner, SummitTier Advisory',
  },
  contactCta: {
    label: 'Design a premium consulting page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Consulting%20Landing%20Demo',
    note: 'Ideal when the offer is strategic, expensive, and needs stronger authority than a standard service page.',
  },
})
