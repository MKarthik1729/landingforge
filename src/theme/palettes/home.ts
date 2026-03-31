import { createPalette } from './createPalette'

export const homePalette = createPalette({
  id: 'home',
  light: {
    background: '#f4efe8',
    backgroundAlt: '#fff8f1',
    surface: 'rgba(255, 252, 247, 0.82)',
    surfaceStrong: '#fffdf8',
    text: '#211b15',
    textMuted: '#6d5f53',
    border: 'rgba(67, 49, 34, 0.12)',
    accent: '#ba5c31',
    accentContrast: '#fff8f1',
    heroOverlay:
      'linear-gradient(135deg, rgba(255, 248, 241, 0.12), rgba(33, 27, 21, 0.06))',
    navbarBackground: 'rgba(255, 251, 246, 0.84)',
    navbarBorder: 'rgba(67, 49, 34, 0.12)',
    navbarText: '#211b15',
    glow: 'rgba(186, 92, 49, 0.18)',
    shadow: '0 24px 80px rgba(61, 43, 29, 0.16)',
  },
  dark: {
    background: '#120f0b',
    backgroundAlt: '#1a1510',
    surface: 'rgba(27, 21, 16, 0.88)',
    surfaceStrong: '#201912',
    text: '#f5ede5',
    textMuted: '#c6b29d',
    border: 'rgba(255, 240, 223, 0.12)',
    accent: '#ff9c68',
    accentContrast: '#1a120b',
    heroOverlay:
      'linear-gradient(135deg, rgba(18, 15, 11, 0.12), rgba(255, 156, 104, 0.18))',
    navbarBackground: 'rgba(18, 15, 11, 0.8)',
    navbarBorder: 'rgba(255, 240, 223, 0.12)',
    navbarText: '#f5ede5',
    glow: 'rgba(255, 156, 104, 0.24)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.45)',
  },
})
