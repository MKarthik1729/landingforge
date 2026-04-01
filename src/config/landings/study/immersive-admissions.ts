import { defineDemo } from '../types'

export const studyImmersiveAdmissionsDemo = defineDemo({
  id: 'study-immersive-admissions',
  category: 'study',
  styleVariant: 'interactive',
  slug: 'immersive-admissions',
  title: 'CampusLight Admissions Story',
  summary: 'An interactive admissions page for schools, academies, or flagship education brands that need atmosphere and aspiration.',
  paletteKey: 'study-immersive-admissions',
  navbarMode: 'transparent',
  interactiveKind: 'spotlight',
  hero: {
    eyebrow: 'Admissions-style experience',
    headline: 'Sell the promise of the learning environment, not just the syllabus.',
    description:
      'This full-image concept is suited to schools, academies, or standout education brands where environment, aspiration, and identity matter deeply.',
    image:
      '/images/landings/study-immersive-admissions-hero.jpg',
    imageAlt: 'Campus-style educational environment with students walking outdoors',
  },
  heroChips: ['Admissions feel', 'Environment-led', 'Immersive story'],
  metrics: [
    { label: 'Format', value: 'Admissions' },
    { label: 'Image usage', value: 'High' },
    { label: 'CTA mode', value: 'Apply / visit' },
  ],
  interactive: {
    title: 'Guide prospects through the campus or learning environment one scene at a time.',
    description:
      'The spotlight interaction can frame academics, student life, and outcomes as a guided admissions story instead of a generic brochure.',
    items: [
      {
        title: 'Learning environment',
        label: 'Scene 01',
        detail:
          'Show the physical or digital environment where students learn so visitors feel the atmosphere and standard immediately.',
      },
      {
        title: 'Student experience',
        label: 'Scene 02',
        detail:
          'Bring community, support, and mentorship into focus to make the program feel human and memorable.',
      },
      {
        title: 'Future pathway',
        label: 'Scene 03',
        detail:
          'Close on the next chapter students can step into after choosing the institution, program, or admissions path.',
      },
    ],
  },
  sections: [
    {
      title: 'Aspirational storytelling',
      body: 'This format helps the institution sell identity, environment, and belonging in a way structured card layouts cannot.',
    },
    {
      title: 'Admissions-friendly flow',
      body: 'The page supports apply-now, schedule-a-visit, and speak-to-admissions CTAs inside a more emotionally resonant structure.',
    },
    {
      title: 'Memorable first impression',
      body: 'For schools and branded education experiences, the immersive direction creates stronger recall and perceived value.',
    },
  ],
  checklist: [
    'Transparent navbar aligns with the hero imagery',
    'Spotlight interaction remains in the same global page position',
    'Atmosphere and readability balanced across both themes',
    'Distinct interactive alternative to more structured study layouts',
  ],
  testimonial: {
    quote:
      'It finally felt like an admissions experience instead of a static information page.',
    name: 'Helena Brooks',
    role: 'Marketing Director, CampusLight Academy',
  },
  contactCta: {
    label: 'Create an interactive admissions page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Admissions%20Landing%20Demo',
    note: 'Best when atmosphere, belonging, and the educational environment help drive applications.',
  },
})
