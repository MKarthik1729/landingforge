import { createPalette } from '../createPalette'

export const studyImmersiveAdmissionsPalette = createPalette({
  id: 'study-immersive-admissions',
  light: {
    background: '#eff6f5',
    backgroundAlt: '#dce9e7',
    surface: 'rgba(248, 255, 253, 0.76)',
    surfaceStrong: '#f7fffd',
    text: '#112421',
    textMuted: '#67807b',
    border: 'rgba(17, 36, 33, 0.1)',
    accent: '#0f766e',
    accentContrast: '#f2fffc',
    heroOverlay:
      'linear-gradient(135deg, rgba(8, 17, 16, 0.42), rgba(15, 118, 110, 0.18))',
    navbarBackground: 'rgba(247, 255, 253, 0.76)',
    navbarBorder: 'rgba(17, 36, 33, 0.1)',
    navbarText: '#112421',
    glow: 'rgba(15, 118, 110, 0.16)',
    shadow: '0 28px 90px rgba(17, 36, 33, 0.18)',
  },
  dark: {
    background: '#071412',
    backgroundAlt: '#112725',
    surface: 'rgba(10, 24, 22, 0.78)',
    surfaceStrong: '#173330',
    text: '#ebfffb',
    textMuted: '#aed2cb',
    border: 'rgba(235, 255, 251, 0.1)',
    accent: '#2dd4bf',
    accentContrast: '#09201d',
    heroOverlay:
      'linear-gradient(135deg, rgba(4, 8, 8, 0.56), rgba(45, 212, 191, 0.16))',
    navbarBackground: 'rgba(7, 20, 18, 0.72)',
    navbarBorder: 'rgba(235, 255, 251, 0.1)',
    navbarText: '#ebfffb',
    glow: 'rgba(45, 212, 191, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.48)',
  },
})
