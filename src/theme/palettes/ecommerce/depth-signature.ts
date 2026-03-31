import { createPalette } from '../createPalette'

export const ecommerceDepthSignaturePalette = createPalette({
  id: 'ecommerce-depth-signature',
  light: {
    background: '#f6f3ef',
    backgroundAlt: '#ece4da',
    surface: 'rgba(255, 252, 248, 0.84)',
    surfaceStrong: '#fffdfb',
    text: '#241a12',
    textMuted: '#776555',
    border: 'rgba(36, 26, 18, 0.1)',
    accent: '#8b5e34',
    accentContrast: '#fffaf5',
    heroOverlay:
      'linear-gradient(135deg, rgba(246, 243, 239, 0.14), rgba(139, 94, 52, 0.12))',
    navbarBackground: 'rgba(255, 251, 246, 0.82)',
    navbarBorder: 'rgba(36, 26, 18, 0.1)',
    navbarText: '#241a12',
    glow: 'rgba(139, 94, 52, 0.16)',
    shadow: '0 24px 80px rgba(36, 26, 18, 0.16)',
  },
  dark: {
    background: '#130d09',
    backgroundAlt: '#231810',
    surface: 'rgba(25, 18, 13, 0.88)',
    surfaceStrong: '#33251b',
    text: '#fff4eb',
    textMuted: '#dec0a5',
    border: 'rgba(255, 244, 235, 0.1)',
    accent: '#d6a677',
    accentContrast: '#21150d',
    heroOverlay:
      'linear-gradient(135deg, rgba(19, 13, 9, 0.18), rgba(214, 166, 119, 0.14))',
    navbarBackground: 'rgba(19, 13, 9, 0.8)',
    navbarBorder: 'rgba(255, 244, 235, 0.1)',
    navbarText: '#fff4eb',
    glow: 'rgba(214, 166, 119, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.46)',
  },
})
