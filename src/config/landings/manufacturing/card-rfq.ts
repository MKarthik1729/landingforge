import { defineDemo } from '../types'

export const manufacturingCardRfqDemo = defineDemo({
  id: 'manufacturing-card-rfq',
  category: 'manufacturing',
  styleVariant: 'card',
  slug: 'card-rfq',
  title: 'AxisForge RFQ System',
  summary: 'A structured RFQ page built for OEM buyers comparing capability, tolerances, and turnaround.',
  paletteKey: 'manufacturing-card-rfq',
  navbarMode: 'solid',
  interactiveKind: 'tabs',
  hero: {
    eyebrow: 'Industrial lead generation',
    headline: 'Shorten the distance from part spec to qualified quote request.',
    description:
      'This direction uses modular cards, procurement-focused proof, and fast-scanning content blocks to help buyers confirm fit without needing a sales call first.',
    image:
      '/images/landings/manufacturing-card-rfq-hero.jpg',
    imageAlt: 'Industrial engineer reviewing a large machine assembly',
  },
  heroChips: ['RFQ intake', 'Tolerance-first proof', 'Lead-routing clarity'],
  metrics: [
    { label: 'Quote-ready CTA', value: '3 clicks' },
    { label: 'Buyer proof points', value: '12 modules' },
    { label: 'Response expectation', value: '< 24 hrs' },
  ],
  interactive: {
    title: 'Switch between buyer priorities without losing context.',
    description:
      'Procurement teams do not all evaluate the same way. This card system lets them jump straight into tolerances, materials, or timelines from one interactive zone.',
    items: [
      {
        title: 'Tolerance package',
        label: 'Precision',
        detail:
          'Surface finish, repeatability, QA checkpoints, and capability ranges appear in a single comparison panel.',
      },
      {
        title: 'Material readiness',
        label: 'Supply',
        detail:
          'The interaction highlights stocked alloys, alternate materials, and lead-time differences for rush programs.',
      },
      {
        title: 'Program velocity',
        label: 'Timeline',
        detail:
          'Buyers can compare prototyping, pilot production, and scaled manufacturing lanes without opening separate pages.',
      },
    ],
  },
  sections: [
    {
      title: 'Capability cards',
      body: 'Each service family is broken into concise cards with the specs, certifications, and tolerances that matter during first review.',
    },
    {
      title: 'Risk reduction',
      body: 'The layout front-loads material traceability, QA cadence, and sample-part workflows so buyers see operational maturity early.',
    },
    {
      title: 'Faster routing',
      body: 'CTAs are paired with form expectations and response timing so engineering, sourcing, and vendor teams know exactly what happens next.',
    },
  ],
  checklist: [
    'RFQ CTA above the fold with expectations clearly stated',
    'Proof modules for tolerances, materials, and QA workflow',
    'Cards tuned for desktop procurement review and mobile follow-up',
    'Trust copy that feels operational, not generic marketing',
  ],
  testimonial: {
    quote:
      'It felt like a buyer had designed the page with us. Prospects arrived already understanding our process and constraints.',
    name: 'Jordan Keller',
    role: 'Commercial Director, AxisForge Components',
  },
  contactCta: {
    label: 'Request an RFQ-style page',
    href: 'mailto:mkarthik1729@gmail.com?subject=RFQ%20Landing%20Demo',
    note: 'Use this structure when the primary conversion is a quote request backed by hard technical credibility.',
  },
})
