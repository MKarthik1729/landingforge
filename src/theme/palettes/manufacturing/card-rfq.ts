import { createPalette } from '../createPalette'

export const manufacturingCardRfqPalette = createPalette({
  id: 'manufacturing-card-rfq',
  light: {
    background: '#f3f6f8',
    backgroundAlt: '#e7eef2',
    surface: 'rgba(255, 255, 255, 0.84)',
    surfaceStrong: '#ffffff',
    text: '#102330',
    textMuted: '#5f7482',
    border: 'rgba(16, 35, 48, 0.12)',
    accent: '#0e7490',
    accentContrast: '#f8feff',
    heroOverlay:
      'linear-gradient(135deg, rgba(243, 246, 248, 0.16), rgba(14, 116, 144, 0.1))',
    navbarBackground: 'rgba(243, 246, 248, 0.84)',
    navbarBorder: 'rgba(16, 35, 48, 0.12)',
    navbarText: '#102330',
    glow: 'rgba(14, 116, 144, 0.18)',
    shadow: '0 24px 80px rgba(16, 35, 48, 0.14)',
  },
  dark: {
    background: '#06161f',
    backgroundAlt: '#0d2632',
    surface: 'rgba(10, 28, 37, 0.86)',
    surfaceStrong: '#10212b',
    text: '#edf8fb',
    textMuted: '#9cc0ce',
    border: 'rgba(237, 248, 251, 0.11)',
    accent: '#22d3ee',
    accentContrast: '#05202a',
    heroOverlay:
      'linear-gradient(135deg, rgba(6, 22, 31, 0.18), rgba(34, 211, 238, 0.14))',
    navbarBackground: 'rgba(6, 22, 31, 0.78)',
    navbarBorder: 'rgba(237, 248, 251, 0.1)',
    navbarText: '#edf8fb',
    glow: 'rgba(34, 211, 238, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.42)',
  },
})
