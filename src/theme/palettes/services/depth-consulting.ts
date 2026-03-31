import { createPalette } from '../createPalette'

export const servicesDepthConsultingPalette = createPalette({
  id: 'services-depth-consulting',
  light: {
    background: '#eef7f6',
    backgroundAlt: '#dfefec',
    surface: 'rgba(251, 255, 254, 0.84)',
    surfaceStrong: '#ffffff',
    text: '#0f2623',
    textMuted: '#607774',
    border: 'rgba(15, 38, 35, 0.11)',
    accent: '#0f766e',
    accentContrast: '#f3fffd',
    heroOverlay:
      'linear-gradient(135deg, rgba(238, 247, 246, 0.14), rgba(15, 118, 110, 0.12))',
    navbarBackground: 'rgba(246, 251, 250, 0.82)',
    navbarBorder: 'rgba(15, 38, 35, 0.11)',
    navbarText: '#0f2623',
    glow: 'rgba(15, 118, 110, 0.16)',
    shadow: '0 24px 80px rgba(15, 38, 35, 0.15)',
  },
  dark: {
    background: '#081414',
    backgroundAlt: '#102626',
    surface: 'rgba(12, 28, 28, 0.88)',
    surfaceStrong: '#153333',
    text: '#eaf9f7',
    textMuted: '#a9cbc6',
    border: 'rgba(234, 249, 247, 0.1)',
    accent: '#2dd4bf',
    accentContrast: '#06211f',
    heroOverlay:
      'linear-gradient(135deg, rgba(8, 20, 20, 0.18), rgba(45, 212, 191, 0.14))',
    navbarBackground: 'rgba(8, 20, 20, 0.8)',
    navbarBorder: 'rgba(234, 249, 247, 0.1)',
    navbarText: '#eaf9f7',
    glow: 'rgba(45, 212, 191, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
