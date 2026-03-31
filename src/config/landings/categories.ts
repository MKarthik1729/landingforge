import type { CategoryKey, StyleVariant } from './types'

export const categoryMeta: Record<
  CategoryKey,
  { label: string; description: string; anchor: string }
> = {
  manufacturing: {
    label: 'Manufacturing',
    description:
      'Industrial landing pages for RFQs, plant credibility, distributor programs, and factory storytelling.',
    anchor: 'manufacturing',
  },
  services: {
    label: 'Services',
    description:
      'High-conversion pages for booking, premium offers, transformation-led stories, and brand-heavy service firms.',
    anchor: 'services',
  },
  ecommerce: {
    label: 'Ecommerce',
    description:
      'Campaign pages for product launches, collections, hero SKUs, and immersive seasonal promotions.',
    anchor: 'ecommerce',
  },
  study: {
    label: 'Study',
    description:
      'Enrollment-first pages for courses, cohorts, instructors, tutoring, admissions, and exam-prep brands.',
    anchor: 'study',
  },
}

export const styleMeta: Record<
  StyleVariant,
  { label: string; description: string }
> = {
  card: {
    label: 'Cards',
    description: 'Structured grids, strong hierarchy, and modular proof sections.',
  },
  sections: {
    label: 'Sections',
    description: 'Full-width content bands and clean section flow without card framing.',
  },
  motion: {
    label: 'Motion',
    description:
      'Animated storytelling where both text and content blocks carry visible motion.',
  },
  interactive: {
    label: 'Interactive',
    description: 'Interaction-first layouts with tabs, focus states, and guided exploration.',
  },
}
