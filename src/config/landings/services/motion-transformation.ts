import { defineDemo } from '../types'

export const servicesMotionTransformationDemo = defineDemo({
  id: 'services-motion-transformation',
  category: 'services',
  styleVariant: 'motion',
  slug: 'motion-transformation',
  title: 'ShiftCraft Transformation Story',
  summary: 'A motion-first landing page for service brands that sell before-and-after outcomes and emotional change.',
  paletteKey: 'services-motion-transformation',
  navbarMode: 'hybrid',
  interactiveKind: 'timeline',
  hero: {
    eyebrow: 'Transformation-led storytelling',
    headline: 'Make the client journey feel like momentum, not just a list of deliverables.',
    description:
      'This page style is strongest when the service offer depends on visible transformation, trust in process, and emotionally resonant storytelling.',
    image: '/images/services/motion-transformation/hero.jpg',
    imageAlt: 'Service consultant walking clients through a transformation plan',
  },
  heroChips: ['Narrative flow', 'Animated reveal', 'Outcome-focused'],
  metrics: [
    { label: 'Story beats', value: '4 scenes' },
    { label: 'Emotion level', value: 'High' },
    { label: 'Best for', value: 'Transformations' },
  ],
  interactive: {
    title: 'A paced timeline that turns process into confidence.',
    description:
      'Instead of dumping steps all at once, the interaction moves through diagnosis, plan, transformation, and long-term support like a guided journey.',
    items: [
      {
        title: 'Discovery moment',
        label: 'Stage 01',
        detail:
          'This stage sets the challenge clearly so prospects feel seen before the service starts pitching the solution.',
      },
      {
        title: 'Guided transformation',
        label: 'Stage 02',
        detail:
          'The middle section uses motion and layered content to make the core service feel hands-on and progressive.',
      },
      {
        title: 'After-state confidence',
        label: 'Stage 03',
        detail:
          'The landing closes the loop with the new normal, social proof, and the feeling of a solved problem.',
      },
    ],
  },
  sections: [
    {
      title: 'Higher emotional clarity',
      body: 'Movement helps visitors understand what changes across the engagement and why the result is worth acting on.',
    },
    {
      title: 'Story before scope',
      body: 'This layout sells the transformation first, then grounds it in real process and trust signals.',
    },
    {
      title: 'Better fit for premium services',
      body: 'When the brand sells confidence, identity, or relief, the motion system helps the page feel more intentional and elevated.',
    },
  ],
  checklist: [
    'Transformation timeline immediately after hero',
    'Motion used to build narrative pacing rather than decoration',
    'Clear visual distinction from the booking-card version',
    'Support for testimonials and before/after proof',
  ],
  testimonial: {
    quote:
      'The movement helped clients feel our process, not just read it. That changed how premium the offer seemed.',
    name: 'Dana Reeves',
    role: 'Creative Director, ShiftCraft Studio',
  },
  contactCta: {
    label: 'Create a transformation-led page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Transformation%20Service%20Demo',
    note: 'Best for consulting, coaching, wellness, or service brands that sell a meaningful before-and-after outcome.',
  },
})
