import { createPalette } from '../createPalette'

export const manufacturingMotionProcessPalette = createPalette({
  id: 'manufacturing-motion-process',
  light: {
    background: '#fff6ef',
    backgroundAlt: '#ffe8d4',
    surface: 'rgba(255, 252, 247, 0.84)',
    surfaceStrong: '#fffaf3',
    text: '#2c1607',
    textMuted: '#7b5840',
    border: 'rgba(44, 22, 7, 0.1)',
    accent: '#f97316',
    accentContrast: '#fff7ef',
    heroOverlay:
      'linear-gradient(135deg, rgba(255, 246, 239, 0.14), rgba(249, 115, 22, 0.14))',
    navbarBackground: 'rgba(255, 248, 241, 0.8)',
    navbarBorder: 'rgba(44, 22, 7, 0.1)',
    navbarText: '#2c1607',
    glow: 'rgba(249, 115, 22, 0.18)',
    shadow: '0 24px 80px rgba(95, 46, 12, 0.14)',
  },
  dark: {
    background: '#1c0f07',
    backgroundAlt: '#2d1708',
    surface: 'rgba(38, 22, 11, 0.88)',
    surfaceStrong: '#311d12',
    text: '#fff0e5',
    textMuted: '#efb894',
    border: 'rgba(255, 240, 229, 0.1)',
    accent: '#fb923c',
    accentContrast: '#2a1508',
    heroOverlay:
      'linear-gradient(135deg, rgba(28, 15, 7, 0.18), rgba(251, 146, 60, 0.16))',
    navbarBackground: 'rgba(28, 15, 7, 0.78)',
    navbarBorder: 'rgba(255, 240, 229, 0.1)',
    navbarText: '#fff0e5',
    glow: 'rgba(251, 146, 60, 0.22)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
