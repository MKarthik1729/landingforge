import { createPalette } from '../createPalette'

export const studyDepthInstructorPalette = createPalette({
  id: 'study-depth-instructor',
  light: {
    background: '#f7f4ef',
    backgroundAlt: '#ece6db',
    surface: 'rgba(255, 252, 247, 0.84)',
    surfaceStrong: '#fffdf9',
    text: '#241d14',
    textMuted: '#78695a',
    border: 'rgba(36, 29, 20, 0.1)',
    accent: '#b7791f',
    accentContrast: '#fff9f1',
    heroOverlay:
      'linear-gradient(135deg, rgba(247, 244, 239, 0.14), rgba(183, 121, 31, 0.12))',
    navbarBackground: 'rgba(255, 251, 246, 0.82)',
    navbarBorder: 'rgba(36, 29, 20, 0.1)',
    navbarText: '#241d14',
    glow: 'rgba(183, 121, 31, 0.16)',
    shadow: '0 24px 80px rgba(36, 29, 20, 0.15)',
  },
  dark: {
    background: '#120e08',
    backgroundAlt: '#22180d',
    surface: 'rgba(24, 18, 11, 0.88)',
    surfaceStrong: '#312316',
    text: '#fff6ea',
    textMuted: '#dcc6a8',
    border: 'rgba(255, 246, 234, 0.1)',
    accent: '#f6ad55',
    accentContrast: '#221408',
    heroOverlay:
      'linear-gradient(135deg, rgba(18, 14, 8, 0.18), rgba(246, 173, 85, 0.14))',
    navbarBackground: 'rgba(18, 14, 8, 0.8)',
    navbarBorder: 'rgba(255, 246, 234, 0.1)',
    navbarText: '#fff6ea',
    glow: 'rgba(246, 173, 85, 0.2)',
    shadow: '0 30px 90px rgba(0, 0, 0, 0.44)',
  },
})
