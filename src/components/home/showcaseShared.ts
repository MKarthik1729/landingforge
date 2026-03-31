import type {
  CategoryKey,
  DemoDefinition,
  InteractiveKind,
} from '../../config/landings/types'

export const categoryTones: Record<
  CategoryKey,
  { glow: string; border: string; accent: string }
> = {
  manufacturing: {
    glow: 'rgba(47, 125, 89, 0.18)',
    border: 'rgba(47, 125, 89, 0.28)',
    accent: '#2f7d59',
  },
  services: {
    glow: 'rgba(200, 113, 58, 0.18)',
    border: 'rgba(200, 113, 58, 0.28)',
    accent: '#c8713a',
  },
  ecommerce: {
    glow: 'rgba(186, 92, 49, 0.18)',
    border: 'rgba(186, 92, 49, 0.28)',
    accent: '#ba5c31',
  },
  study: {
    glow: 'rgba(71, 114, 196, 0.18)',
    border: 'rgba(71, 114, 196, 0.28)',
    accent: '#4772c4',
  },
}

const interactionLabels: Record<InteractiveKind, string> = {
  tabs: 'Tabbed flow',
  timeline: 'Timeline motion',
  stack: 'Stacked cards',
  spotlight: 'Spotlight reveal',
}

export function getPreferredDemoIndex(demos: readonly DemoDefinition[]) {
  const interactiveIndex = demos.findIndex(
    (demo) => demo.styleVariant === 'interactive',
  )

  if (interactiveIndex !== -1) {
    return interactiveIndex
  }

  const motionIndex = demos.findIndex((demo) => demo.styleVariant === 'motion')

  return motionIndex !== -1 ? motionIndex : 0
}

export function getInteractionLabel(kind: InteractiveKind) {
  return interactionLabels[kind]
}
