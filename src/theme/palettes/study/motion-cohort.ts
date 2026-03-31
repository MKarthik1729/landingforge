import { createPalette } from '../createPalette'

export const studyMotionCohortPalette = createPalette({
  id: 'study-motion-cohort',
  light: {
    background: '#eefbf7',
    backgroundAlt: '#daf5ec',
    surface: 'rgba(249, 255, 252, 0.84)',
    surfaceStrong: '#f7fffb',
    text: '#12281f',
    textMuted: '#617a72',
    border: 'rgba(18, 40, 31, 0.1)',
    accent: '#10b981',
    accentContrast: '#f2fff9',
    heroOverlay:
      'linear-gradient(135deg, rgba(238, 251, 247, 0.14), rgba(16, 185, 129, 0.12))',
    navbarBackground: 'rgba(245, 255, 250, 0.82)',
    navbarBorder: 'rgba(18, 40, 31, 0.1)',
    navbarText: '#12281f',
    glow: 'rgba(16, 185, 129, 0.16)',
    shadow: '0 24px 80px rgba(18, 40, 31, 0.14)',
  },
  dark: {
    background: '#071913',
    backgroundAlt: '#0f2a1f',
    surface: 'rgba(10, 31, 23, 0.88)',
    surfaceStrong: '#143b2c',
    text: '#eafff7',
    textMuted: '#acd4c6',
    border: 'rgba(234, 255, 247, 0.1)',
    accent: '#34d399',
    accentContrast: '#082018',
    heroOverlay:
      'linear-gradient(135deg, rgba(7, 25, 19, 0.18), rgba(52, 211, 153, 0.14))',
    navbarBackground: 'rgba(7, 25, 19, 0.8)',
    navbarBorder: 'rgba(234, 255, 247, 0.1)',
    navbarText: '#eafff7',
    glow: 'rgba(52, 211, 153, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
