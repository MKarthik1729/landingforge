import { createPalette } from '../createPalette'

export const manufacturingDepthCertificationsPalette = createPalette({
  id: 'manufacturing-depth-certifications',
  light: {
    background: '#f1f7f3',
    backgroundAlt: '#e4efe8',
    surface: 'rgba(252, 255, 253, 0.84)',
    surfaceStrong: '#ffffff',
    text: '#0d2116',
    textMuted: '#5f7269',
    border: 'rgba(13, 33, 22, 0.11)',
    accent: '#15803d',
    accentContrast: '#f6fff8',
    heroOverlay:
      'linear-gradient(135deg, rgba(241, 247, 243, 0.12), rgba(21, 128, 61, 0.12))',
    navbarBackground: 'rgba(247, 252, 249, 0.82)',
    navbarBorder: 'rgba(13, 33, 22, 0.11)',
    navbarText: '#0d2116',
    glow: 'rgba(21, 128, 61, 0.16)',
    shadow: '0 24px 80px rgba(13, 33, 22, 0.14)',
  },
  dark: {
    background: '#08140d',
    backgroundAlt: '#112118',
    surface: 'rgba(13, 28, 20, 0.86)',
    surfaceStrong: '#14261b',
    text: '#edf8f0',
    textMuted: '#a7c7b1',
    border: 'rgba(237, 248, 240, 0.1)',
    accent: '#22c55e',
    accentContrast: '#08140d',
    heroOverlay:
      'linear-gradient(135deg, rgba(8, 20, 13, 0.18), rgba(34, 197, 94, 0.14))',
    navbarBackground: 'rgba(8, 20, 13, 0.8)',
    navbarBorder: 'rgba(237, 248, 240, 0.1)',
    navbarText: '#edf8f0',
    glow: 'rgba(34, 197, 94, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.42)',
  },
})
