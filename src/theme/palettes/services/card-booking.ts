import { createPalette } from '../createPalette'

export const servicesCardBookingPalette = createPalette({
  id: 'services-card-booking',
  light: {
    background: '#f2f7ff',
    backgroundAlt: '#e7efff',
    surface: 'rgba(255, 255, 255, 0.84)',
    surfaceStrong: '#ffffff',
    text: '#132238',
    textMuted: '#607189',
    border: 'rgba(19, 34, 56, 0.11)',
    accent: '#2563eb',
    accentContrast: '#f8fbff',
    heroOverlay:
      'linear-gradient(135deg, rgba(242, 247, 255, 0.16), rgba(37, 99, 235, 0.12))',
    navbarBackground: 'rgba(246, 249, 255, 0.82)',
    navbarBorder: 'rgba(19, 34, 56, 0.11)',
    navbarText: '#132238',
    glow: 'rgba(37, 99, 235, 0.18)',
    shadow: '0 24px 80px rgba(19, 34, 56, 0.14)',
  },
  dark: {
    background: '#081222',
    backgroundAlt: '#12203b',
    surface: 'rgba(11, 24, 45, 0.86)',
    surfaceStrong: '#152947',
    text: '#eef4ff',
    textMuted: '#a6bedf',
    border: 'rgba(238, 244, 255, 0.1)',
    accent: '#60a5fa',
    accentContrast: '#081222',
    heroOverlay:
      'linear-gradient(135deg, rgba(8, 18, 34, 0.18), rgba(96, 165, 250, 0.16))',
    navbarBackground: 'rgba(8, 18, 34, 0.78)',
    navbarBorder: 'rgba(238, 244, 255, 0.1)',
    navbarText: '#eef4ff',
    glow: 'rgba(96, 165, 250, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
