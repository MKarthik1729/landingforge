import { defineDemo } from '../types'

export const studyCardEnrollmentDemo = defineDemo({
  id: 'study-card-enrollment',
  category: 'study',
  styleVariant: 'card',
  slug: 'card-enrollment',
  title: 'ScholarPath Enrollment Grid',
  summary: 'A structured enrollment page for programs, pricing clarity, and fast application intent.',
  paletteKey: 'study-card-enrollment',
  navbarMode: 'solid',
  interactiveKind: 'tabs',
  hero: {
    eyebrow: 'Enrollment-first study page',
    headline: 'Turn course options into a confident enrollment decision.',
    description:
      'This layout is designed for course platforms, coaching programs, and tutoring offers that need organized program selection before the form fill.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students reviewing program options together',
  },
  heroChips: ['Program cards', 'Enrollment clarity', 'Study offer comparison'],
  metrics: [
    { label: 'Tracks shown', value: '3 paths' },
    { label: 'CTA mode', value: 'Apply now' },
    { label: 'Best for', value: 'Programs' },
  ],
  interactive: {
    title: 'Help students compare learning paths without losing momentum.',
    description:
      'The interactive section lets visitors move between beginner, guided, and advanced paths while keeping the enrollment CTA nearby.',
    items: [
      {
        title: 'Starter track',
        label: 'Path 01',
        detail:
          'For first-time learners who need a low-friction entry point, clear outcomes, and manageable commitment expectations.',
      },
      {
        title: 'Mentored track',
        label: 'Path 02',
        detail:
          'Highlights community, live support, and direct feedback for students who want more structure and accountability.',
      },
      {
        title: 'Career track',
        label: 'Path 03',
        detail:
          'Frames the higher-intent option with stronger outcomes, project depth, and a clearer progression into application or placement goals.',
      },
    ],
  },
  sections: [
    {
      title: 'Program comparison clarity',
      body: 'Card-based structure helps students understand what changes by track, support level, and intensity without reading too much copy.',
    },
    {
      title: 'Enrollment-focused hierarchy',
      body: 'The page keeps applications and inquiry CTAs close to the decision points that matter most.',
    },
    {
      title: 'Trust for education buyers',
      body: 'Proof blocks can feature learner outcomes, instructor support, and curriculum clarity without overwhelming the page.',
    },
  ],
  checklist: [
    'Program cards visible before detailed curriculum copy',
    'Enrollment CTAs paired with program clarity and support cues',
    'Works for courses, tutoring, cohorts, and coaching offers',
    'Card system clearly distinct from immersive and motion variants',
  ],
  testimonial: {
    quote:
      'Students finally understood which program was for them without booking a call just to figure out the basics.',
    name: 'Nina Patel',
    role: 'Program Lead, ScholarPath',
  },
  contactCta: {
    label: 'Build an enrollment-first page',
    href: 'mailto:hello@landingforge.studio?subject=Enrollment%20Study%20Demo',
    note: 'Best when the key challenge is helping learners choose the right offer and commit quickly.',
  },
})
