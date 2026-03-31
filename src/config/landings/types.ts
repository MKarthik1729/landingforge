export type CategoryKey =
  | 'manufacturing'
  | 'services'
  | 'ecommerce'
  | 'study'

export type StyleVariant = 'card' | 'sections' | 'motion' | 'interactive'

export type NavbarMode = 'solid' | 'transparent' | 'hybrid'

export type InteractiveKind = 'tabs' | 'timeline' | 'stack' | 'spotlight'

export type DemoStat = {
  label: string
  value: string
}

export type DemoSection = {
  title: string
  body: string
}

export type DemoInteractiveItem = {
  title: string
  label: string
  detail: string
}

export type DemoTestimonial = {
  quote: string
  name: string
  role: string
}

export type DemoCta = {
  label: string
  href: string
  note: string
}

export type DemoDefinition = {
  id: string
  category: CategoryKey
  styleVariant: StyleVariant
  slug: string
  title: string
  summary: string
  paletteKey: string
  navbarMode: NavbarMode
  interactiveKind: InteractiveKind
  hero: {
    eyebrow: string
    headline: string
    description: string
    image: string
    imageAlt: string
  }
  heroChips: string[]
  metrics: DemoStat[]
  interactive: {
    title: string
    description: string
    items: DemoInteractiveItem[]
  }
  sections: DemoSection[]
  checklist: string[]
  testimonial: DemoTestimonial
  contactCta: DemoCta
}

export function defineDemo(demo: DemoDefinition) {
  return demo
}
