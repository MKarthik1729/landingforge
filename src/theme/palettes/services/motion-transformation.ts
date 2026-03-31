import { createPalette } from '../createPalette'

export const servicesMotionTransformationPalette = createPalette({
  id: 'services-motion-transformation',
  light: {
    background: '#fff2f5',
    backgroundAlt: '#ffe2ea',
    surface: 'rgba(255, 250, 251, 0.84)',
    surfaceStrong: '#fff7f9',
    text: '#32111d',
    textMuted: '#8b5a69',
    border: 'rgba(50, 17, 29, 0.1)',
    accent: '#e11d48',
    accentContrast: '#fff6f8',
    heroOverlay:
      'linear-gradient(135deg, rgba(255, 242, 245, 0.14), rgba(225, 29, 72, 0.14))',
    navbarBackground: 'rgba(255, 247, 249, 0.82)',
    navbarBorder: 'rgba(50, 17, 29, 0.1)',
    navbarText: '#32111d',
    glow: 'rgba(225, 29, 72, 0.18)',
    shadow: '0 24px 80px rgba(74, 22, 41, 0.14)',
  },
  dark: {
    background: '#1a0a11',
    backgroundAlt: '#2f101d',
    surface: 'rgba(36, 14, 24, 0.88)',
    surfaceStrong: '#43172b',
    text: '#fff0f4',
    textMuted: '#f3b3c4',
    border: 'rgba(255, 240, 244, 0.1)',
    accent: '#fb7185',
    accentContrast: '#2a0d18',
    heroOverlay:
      'linear-gradient(135deg, rgba(26, 10, 17, 0.18), rgba(251, 113, 133, 0.16))',
    navbarBackground: 'rgba(26, 10, 17, 0.78)',
    navbarBorder: 'rgba(255, 240, 244, 0.1)',
    navbarText: '#fff0f4',
    glow: 'rgba(251, 113, 133, 0.22)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.45)',
  },
})
