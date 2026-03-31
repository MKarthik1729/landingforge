import { defineDemo } from '../types'

export const manufacturingDepthCertificationsDemo = defineDemo({
  id: 'manufacturing-depth-certifications',
  category: 'manufacturing',
  styleVariant: 'sections',
  slug: 'depth-certifications',
  title: 'NorthArc Compliance Stack',
  summary: 'A sections-led trust page that gives certifications, audit readiness, and supplier proof room to breathe.',
  paletteKey: 'manufacturing-depth-certifications',
  navbarMode: 'solid',
  interactiveKind: 'stack',
  hero: {
    eyebrow: 'Trust-led industrial positioning',
    headline: 'Make standards, audits, and compliance look like a strategic advantage.',
    description:
      'This direction uses layered panels, deep surfaces, and stacked trust modules to position a manufacturer as a serious, systems-driven partner.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Team reviewing industrial documentation and compliance materials',
  },
  heroChips: ['Certification-led', 'Deep surfaces', 'Premium B2B trust'],
  metrics: [
    { label: 'Trust stack', value: '5 layers' },
    { label: 'Audit proof', value: 'ISO + PPAP' },
    { label: 'Ideal buyer', value: 'Tier suppliers' },
  ],
  interactive: {
    title: 'A stacked interface that keeps the strongest credibility card in focus.',
    description:
      'Each layer in the interaction spotlights a different trust lever: certifications, traceability, documentation, or customer approvals.',
    items: [
      {
        title: 'Certification deck',
        label: 'Layer 01',
        detail:
          'ISO, sector approvals, and process standards are treated like premium assets rather than hidden footer badges.',
      },
      {
        title: 'Traceability layer',
        label: 'Layer 02',
        detail:
          'Material records, lot tracking, and documentation control sit together in a more tactile, executive-ready presentation.',
      },
      {
        title: 'Customer validation',
        label: 'Layer 03',
        detail:
          'The top card highlights audit history, quality retention, and account confidence signals that reduce perceived supplier risk.',
      },
    ],
  },
  sections: [
    {
      title: 'Premium trust system',
      body: 'The section-led flow tells the buyer this manufacturer has mature systems, not just machine capability.',
    },
    {
      title: 'Boardroom-ready proof',
      body: 'Content feels appropriate for procurement leadership, quality teams, and program managers reviewing supplier options side by side.',
    },
    {
      title: 'Stronger conversion context',
      body: 'The page supports “book a qualification call” or “request documentation” actions with more authority than a simple brochure layout.',
    },
  ],
  checklist: [
    'Layered shadow treatment distinct from the card and motion variants',
    'Credibility modules centered on standards, documentation, and approvals',
    'Visual density tuned for higher-value industrial programs',
    'CTA designed for serious qualification-stage conversations',
  ],
  testimonial: {
    quote:
      'The page made our certifications feel commercial, not just operational. That shifted how prospects evaluated us.',
    name: 'Priya Sethi',
    role: 'Head of Partnerships, NorthArc Precision',
  },
  contactCta: {
    label: 'Create a compliance-led page',
    href: 'mailto:hello@landingforge.studio?subject=Compliance%20Landing%20Demo',
    note: 'Use this when trust, standards, and enterprise readiness are the primary conversion drivers.',
  },
})
