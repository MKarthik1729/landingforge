import { createPalette } from '../createPalette'

export const ecommerceImmersiveSeasonalPalette = createPalette({
  id: 'ecommerce-immersive-seasonal',
  light: {
    background: '#fdf3e9',
    backgroundAlt: '#f6deca',
    surface: 'rgba(255, 248, 241, 0.76)',
    surfaceStrong: '#fff8f0',
    text: '#2d1508',
    textMuted: '#91684d',
    border: 'rgba(45, 21, 8, 0.1)',
    accent: '#ea580c',
    accentContrast: '#fff8f2',
    heroOverlay:
      'linear-gradient(135deg, rgba(16, 8, 4, 0.4), rgba(234, 88, 12, 0.18))',
    navbarBackground: 'rgba(255, 248, 240, 0.76)',
    navbarBorder: 'rgba(45, 21, 8, 0.1)',
    navbarText: '#2d1508',
    glow: 'rgba(234, 88, 12, 0.18)',
    shadow: '0 28px 90px rgba(45, 21, 8, 0.18)',
  },
  dark: {
    background: '#160b05',
    backgroundAlt: '#2b1408',
    surface: 'rgba(26, 13, 7, 0.78)',
    surfaceStrong: '#351a0d',
    text: '#fff1e6',
    textMuted: '#efc0a0',
    border: 'rgba(255, 241, 230, 0.1)',
    accent: '#fb923c',
    accentContrast: '#271106',
    heroOverlay:
      'linear-gradient(135deg, rgba(6, 3, 2, 0.56), rgba(251, 146, 60, 0.16))',
    navbarBackground: 'rgba(22, 11, 5, 0.72)',
    navbarBorder: 'rgba(255, 241, 230, 0.1)',
    navbarText: '#fff1e6',
    glow: 'rgba(251, 146, 60, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.48)',
  },
})
