import { createPalette } from '../createPalette'

export const ecommerceCardCollectionPalette = createPalette({
  id: 'ecommerce-card-collection',
  light: {
    background: '#f7f5f0',
    backgroundAlt: '#efeadf',
    surface: 'rgba(255, 253, 247, 0.84)',
    surfaceStrong: '#fffdf9',
    text: '#241b11',
    textMuted: '#746557',
    border: 'rgba(36, 27, 17, 0.1)',
    accent: '#c0841a',
    accentContrast: '#fffaf1',
    heroOverlay:
      'linear-gradient(135deg, rgba(247, 245, 240, 0.16), rgba(192, 132, 26, 0.12))',
    navbarBackground: 'rgba(255, 252, 246, 0.82)',
    navbarBorder: 'rgba(36, 27, 17, 0.1)',
    navbarText: '#241b11',
    glow: 'rgba(192, 132, 26, 0.16)',
    shadow: '0 24px 80px rgba(36, 27, 17, 0.14)',
  },
  dark: {
    background: '#141009',
    backgroundAlt: '#241c0d',
    surface: 'rgba(28, 22, 13, 0.86)',
    surfaceStrong: '#342918',
    text: '#fff6e8',
    textMuted: '#ddc39b',
    border: 'rgba(255, 246, 232, 0.1)',
    accent: '#fbbf24',
    accentContrast: '#241707',
    heroOverlay:
      'linear-gradient(135deg, rgba(20, 16, 9, 0.18), rgba(251, 191, 36, 0.14))',
    navbarBackground: 'rgba(20, 16, 9, 0.78)',
    navbarBorder: 'rgba(255, 246, 232, 0.1)',
    navbarText: '#fff6e8',
    glow: 'rgba(251, 191, 36, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
