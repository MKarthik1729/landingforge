import { defineDemo } from '../types'

export const servicesCardBookingDemo = defineDemo({
  id: 'services-card-booking',
  category: 'services',
  styleVariant: 'card',
  slug: 'card-booking',
  title: 'FieldSpan Booking Grid',
  summary: 'A service page designed around packages, booking windows, and clear local conversion paths.',
  paletteKey: 'services-card-booking',
  navbarMode: 'solid',
  interactiveKind: 'tabs',
  hero: {
    eyebrow: 'Booking-first service page',
    headline: 'Turn service options into a clean, confidence-building booking flow.',
    description:
      'This direction is built for local and regional service brands that need comparison-friendly packages, quick trust signals, and a strong book-now CTA.',
    image: '/images/services/card-booking/hero.jpg',
    imageAlt: 'Service professional speaking with a client at a work site',
  },
  heroChips: ['Package cards', 'Fast booking', 'Local trust cues'],
  metrics: [
    { label: 'Decision paths', value: '3 packages' },
    { label: 'Booking intent', value: 'High' },
    { label: 'Best for', value: 'Local leads' },
  ],
  interactive: {
    title: 'A service comparison area that keeps packages easy to choose.',
    description:
      'Visitors can switch between service tiers, add-ons, and urgency windows without losing the feel of a simple booking journey.',
    items: [
      {
        title: 'Starter visit',
        label: 'Core',
        detail:
          'Ideal for first-time buyers who want a clear entry point, transparent scope, and a low-friction booking decision.',
      },
      {
        title: 'Priority response',
        label: 'Urgent',
        detail:
          'Shows response-time advantages, scheduling priority, and the higher-value support clients get when speed matters.',
      },
      {
        title: 'Care plan',
        label: 'Recurring',
        detail:
          'Frames recurring work as a more dependable, relationship-based offer with better long-term value.',
      },
    ],
  },
  sections: [
    {
      title: 'Package clarity',
      body: 'Card-first design gives visitors a quick sense of what is included, what changes by tier, and which option matches their urgency.',
    },
    {
      title: 'Local trust system',
      body: 'The layout leaves room for reviews, service radius, guarantees, and response expectations without becoming crowded.',
    },
    {
      title: 'Frictionless conversion',
      body: 'The experience is tuned to push users toward booking or requesting a callback with minimal hesitation.',
    },
  ],
  checklist: [
    'Package cards visible before any long-form explanation',
    'Local proof blocks placed near the booking decision',
    'Strong mobile legibility for service shoppers on the go',
    'Clear CTA hierarchy for book now vs request callback',
  ],
  testimonial: {
    quote:
      'Customers stopped asking what the difference was between our plans. The page answered it visually.',
    name: 'Erin Walsh',
    role: 'Founder, FieldSpan Home Services',
  },
  contactCta: {
    label: 'Request a booking-first service page',
    href: 'mailto:mkarthik1729@gmail.com?subject=Service%20Booking%20Demo',
    note: 'Great for local or regional services that convert best when choices are simple and visible.',
  },
})
