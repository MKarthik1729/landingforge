import { createPalette } from '../createPalette'

export const servicesImmersiveBrandPalette = createPalette({
  id: 'services-immersive-brand',
  light: {
    background: '#f6efe6',
    backgroundAlt: '#e6d4bf',
    surface: 'rgba(255, 251, 246, 0.78)',
    surfaceStrong: '#fff8f0',
    text: '#2f2015',
    textMuted: '#80624d',
    border: 'rgba(47, 32, 21, 0.11)',
    accent: '#8a5a34',
    accentContrast: '#fff8f0',
    heroOverlay:
      'linear-gradient(135deg, rgba(30, 19, 12, 0.5), rgba(138, 90, 52, 0.2))',
    navbarBackground: 'rgba(255, 248, 240, 0.76)',
    navbarBorder: 'rgba(47, 32, 21, 0.11)',
    navbarText: '#2f2015',
    glow: 'rgba(171, 127, 85, 0.24)',
    shadow: '0 28px 90px rgba(47, 32, 21, 0.16)',
  },
  dark: {
    background: '#18110d',
    backgroundAlt: '#2f2119',
    surface: 'rgba(27, 19, 14, 0.82)',
    surfaceStrong: '#3b2a20',
    text: '#f8efe5',
    textMuted: '#d0b29a',
    border: 'rgba(248, 239, 229, 0.11)',
    accent: '#c78f63',
    accentContrast: '#24160f',
    heroOverlay:
      'linear-gradient(135deg, rgba(9, 6, 4, 0.6), rgba(199, 143, 99, 0.18))',
    navbarBackground: 'rgba(24, 17, 13, 0.72)',
    navbarBorder: 'rgba(248, 239, 229, 0.11)',
    navbarText: '#f8efe5',
    glow: 'rgba(199, 143, 99, 0.18)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.46)',
  },
})
