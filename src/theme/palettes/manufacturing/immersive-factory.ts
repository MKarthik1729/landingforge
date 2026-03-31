import { createPalette } from '../createPalette'

export const manufacturingImmersiveFactoryPalette = createPalette({
  id: 'manufacturing-immersive-factory',
  light: {
    background: '#f8f4ea',
    backgroundAlt: '#efe5cc',
    surface: 'rgba(255, 252, 244, 0.72)',
    surfaceStrong: '#fff9ee',
    text: '#23180a',
    textMuted: '#796046',
    border: 'rgba(35, 24, 10, 0.12)',
    accent: '#d97706',
    accentContrast: '#fff8ec',
    heroOverlay:
      'linear-gradient(135deg, rgba(35, 24, 10, 0.42), rgba(217, 119, 6, 0.2))',
    navbarBackground: 'rgba(255, 248, 236, 0.76)',
    navbarBorder: 'rgba(35, 24, 10, 0.12)',
    navbarText: '#23180a',
    glow: 'rgba(217, 119, 6, 0.18)',
    shadow: '0 28px 90px rgba(35, 24, 10, 0.18)',
  },
  dark: {
    background: '#120c06',
    backgroundAlt: '#221707',
    surface: 'rgba(24, 17, 8, 0.76)',
    surfaceStrong: '#2a1d0d',
    text: '#fff4e5',
    textMuted: '#ddb88a',
    border: 'rgba(255, 244, 229, 0.1)',
    accent: '#f59e0b',
    accentContrast: '#1d1206',
    heroOverlay:
      'linear-gradient(135deg, rgba(7, 5, 3, 0.56), rgba(245, 158, 11, 0.16))',
    navbarBackground: 'rgba(18, 12, 6, 0.72)',
    navbarBorder: 'rgba(255, 244, 229, 0.1)',
    navbarText: '#fff4e5',
    glow: 'rgba(245, 158, 11, 0.22)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.48)',
  },
})
