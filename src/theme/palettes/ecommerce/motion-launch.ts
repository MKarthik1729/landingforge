import { createPalette } from '../createPalette'

export const ecommerceMotionLaunchPalette = createPalette({
  id: 'ecommerce-motion-launch',
  light: {
    background: '#fff4ec',
    backgroundAlt: '#ffe3d3',
    surface: 'rgba(255, 250, 245, 0.84)',
    surfaceStrong: '#fff7f1',
    text: '#33180a',
    textMuted: '#8a5f48',
    border: 'rgba(51, 24, 10, 0.1)',
    accent: '#f97316',
    accentContrast: '#fff7f0',
    heroOverlay:
      'linear-gradient(135deg, rgba(255, 244, 236, 0.14), rgba(249, 115, 22, 0.14))',
    navbarBackground: 'rgba(255, 248, 242, 0.8)',
    navbarBorder: 'rgba(51, 24, 10, 0.1)',
    navbarText: '#33180a',
    glow: 'rgba(249, 115, 22, 0.18)',
    shadow: '0 24px 80px rgba(51, 24, 10, 0.14)',
  },
  dark: {
    background: '#1b0f08',
    backgroundAlt: '#301607',
    surface: 'rgba(38, 21, 10, 0.88)',
    surfaceStrong: '#442612',
    text: '#fff1e7',
    textMuted: '#efb48d',
    border: 'rgba(255, 241, 231, 0.1)',
    accent: '#fb923c',
    accentContrast: '#2d1708',
    heroOverlay:
      'linear-gradient(135deg, rgba(27, 15, 8, 0.18), rgba(251, 146, 60, 0.16))',
    navbarBackground: 'rgba(27, 15, 8, 0.78)',
    navbarBorder: 'rgba(255, 241, 231, 0.1)',
    navbarText: '#fff1e7',
    glow: 'rgba(251, 146, 60, 0.22)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
