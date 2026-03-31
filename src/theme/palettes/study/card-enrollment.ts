import { createPalette } from '../createPalette'

export const studyCardEnrollmentPalette = createPalette({
  id: 'study-card-enrollment',
  light: {
    background: '#f4f7ff',
    backgroundAlt: '#e7edff',
    surface: 'rgba(255, 255, 255, 0.84)',
    surfaceStrong: '#ffffff',
    text: '#17243f',
    textMuted: '#627292',
    border: 'rgba(23, 36, 63, 0.1)',
    accent: '#4f46e5',
    accentContrast: '#f8f9ff',
    heroOverlay:
      'linear-gradient(135deg, rgba(244, 247, 255, 0.14), rgba(79, 70, 229, 0.12))',
    navbarBackground: 'rgba(247, 249, 255, 0.82)',
    navbarBorder: 'rgba(23, 36, 63, 0.1)',
    navbarText: '#17243f',
    glow: 'rgba(79, 70, 229, 0.16)',
    shadow: '0 24px 80px rgba(23, 36, 63, 0.14)',
  },
  dark: {
    background: '#0c1226',
    backgroundAlt: '#151d3c',
    surface: 'rgba(15, 25, 49, 0.88)',
    surfaceStrong: '#1b2950',
    text: '#eef1ff',
    textMuted: '#b2bcdf',
    border: 'rgba(238, 241, 255, 0.1)',
    accent: '#818cf8',
    accentContrast: '#0c1226',
    heroOverlay:
      'linear-gradient(135deg, rgba(12, 18, 38, 0.18), rgba(129, 140, 248, 0.14))',
    navbarBackground: 'rgba(12, 18, 38, 0.8)',
    navbarBorder: 'rgba(238, 241, 255, 0.1)',
    navbarText: '#eef1ff',
    glow: 'rgba(129, 140, 248, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
