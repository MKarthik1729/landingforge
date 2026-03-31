import { defineDemo } from '../types'

export const studyDepthInstructorDemo = defineDemo({
  id: 'study-depth-instructor',
  category: 'study',
  styleVariant: 'sections',
  slug: 'depth-instructor',
  title: 'MentorProof Instructor Page',
  summary: 'A sections-led landing page that builds trust around teaching quality, credibility, and student outcomes.',
  paletteKey: 'study-depth-instructor',
  navbarMode: 'solid',
  interactiveKind: 'stack',
  hero: {
    eyebrow: 'Instructor-led credibility',
    headline: 'When trust in the teacher matters most, the page should feel grounded and credible.',
    description:
      'This direction is best for instructor-led programs, exam-prep brands, and authority-based education offers that depend on confidence in the mentor.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Experienced instructor teaching students in a focused setting',
  },
  heroChips: ['Instructor authority', 'Proof depth', 'Outcome trust'],
  metrics: [
    { label: 'Trust style', value: 'Premium depth' },
    { label: 'Offer type', value: 'Instructor-led' },
    { label: 'Primary CTA', value: 'Book consult' },
  ],
  interactive: {
    title: 'Keep the strongest trust card in front while students explore proof.',
    description:
      'The stacked interaction rotates between instructor authority, curriculum seriousness, and student results in a more premium layout.',
    items: [
      {
        title: 'Instructor authority',
        label: 'Layer 01',
        detail:
          'Center experience, credentials, and teaching philosophy when the educator is the main reason students buy.',
      },
      {
        title: 'Method clarity',
        label: 'Layer 02',
        detail:
          'Explain how teaching works, why it is effective, and what level of rigor students should expect.',
      },
      {
        title: 'Student outcomes',
        label: 'Layer 03',
        detail:
          'Bring forward success proof, confidence gains, and the practical outcomes that justify enrollment or inquiry.',
      },
    ],
  },
  sections: [
    {
      title: 'Instructor-forward design',
      body: 'The layout frames the teacher, coach, or academic lead as a premium differentiator rather than a supporting detail.',
    },
    {
      title: 'More serious study tone',
      body: 'Longer, quieter sections help the page feel more rigorous and credible, which suits exam-prep and higher-trust offers.',
    },
    {
      title: 'Qualification-focused CTA',
      body: 'The structure works well for discovery calls, advisement, interviews, or advanced program applications.',
    },
  ],
  checklist: [
    'Layered trust interaction distinct from the card enrollment version',
    'Instructor credibility visible before long curriculum detail',
    'Designed for premium or rigorous education offers',
    'Strong contrast and readability across both themes',
  ],
  testimonial: {
    quote:
      'The site finally reflected the seriousness of the program and the trust students place in our teaching.',
    name: 'Grace Holloway',
    role: 'Lead Instructor, MentorProof Institute',
  },
  contactCta: {
    label: 'Design an instructor-led page',
    href: 'mailto:hello@landingforge.studio?subject=Instructor%20Landing%20Demo',
    note: 'Use this when educator credibility and trust carry most of the conversion weight.',
  },
})
