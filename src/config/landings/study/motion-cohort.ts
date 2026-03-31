import { defineDemo } from '../types'

export const studyMotionCohortDemo = defineDemo({
  id: 'study-motion-cohort',
  category: 'study',
  styleVariant: 'motion',
  slug: 'motion-cohort',
  title: 'CohortFlow Learning Journey',
  summary: 'A motion-led page that turns cohort progression and student momentum into the core selling point.',
  paletteKey: 'study-motion-cohort',
  navbarMode: 'hybrid',
  interactiveKind: 'timeline',
  hero: {
    eyebrow: 'Cohort journey storytelling',
    headline: 'Sell the learning journey as a guided, energizing experience.',
    description:
      'This concept is ideal for cohort-based learning, bootcamps, or coaching programs that rely on momentum, community, and progression.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Learning cohort in an active classroom and mentoring setting',
  },
  heroChips: ['Cohort momentum', 'Progress storytelling', 'Animated pacing'],
  metrics: [
    { label: 'Journey stages', value: '4 phases' },
    { label: 'Energy', value: 'High motion' },
    { label: 'Best for', value: 'Bootcamps' },
  ],
  interactive: {
    title: 'Move prospects through the cohort journey step by step.',
    description:
      'The interaction shows how the program begins, how students are supported, and where the outcome leads, making the promise feel more believable.',
    items: [
      {
        title: 'Orientation start',
        label: 'Stage 01',
        detail:
          'Set expectations, welcome energy, and the first milestone so prospects understand how the program starts and what support exists from day one.',
      },
      {
        title: 'Project sprint',
        label: 'Stage 02',
        detail:
          'Use motion to communicate activity, accountability, and student progression while the cohort is in the middle of its strongest learning phase.',
      },
      {
        title: 'Outcome handoff',
        label: 'Stage 03',
        detail:
          'Close on portfolio, placement, exam readiness, or confidence outcomes so the enrollment decision feels future-facing.',
      },
    ],
  },
  sections: [
    {
      title: 'Narrative progression',
      body: 'Rather than listing lessons, the page makes the educational experience feel active and directional from the first scene.',
    },
    {
      title: 'Community signal',
      body: 'Movement and sequencing help imply peer momentum, mentorship, and guided structure without needing a complex app preview.',
    },
    {
      title: 'High-intent enrollment support',
      body: 'The CTA system works well when students need to feel the program experience before they commit.',
    },
  ],
  checklist: [
    'Timeline interaction positioned directly after hero',
    'Motion reinforces cohort progression instead of flashy decoration',
    'Strong fit for bootcamps, guided courses, and live programs',
    'Reduced-motion fallback maintained',
  ],
  testimonial: {
    quote:
      'The motion made the program feel alive. Prospective students could imagine themselves moving through it.',
    name: 'Victor Lang',
    role: 'Admissions Lead, CohortFlow Academy',
  },
  contactCta: {
    label: 'Create a cohort-journey page',
    href: 'mailto:hello@landingforge.studio?subject=Cohort%20Journey%20Demo',
    note: 'Perfect for programs that sell momentum, mentorship, and guided progress.',
  },
})
