export type PaletteTokens = {
  background: string
  backgroundAlt: string
  surface: string
  surfaceStrong: string
  text: string
  textMuted: string
  border: string
  accent: string
  accentContrast: string
  heroOverlay: string
  navbarBackground: string
  navbarBorder: string
  navbarText: string
  glow: string
  shadow: string
}

export type PaletteDefinition = {
  id: string
  light: PaletteTokens
  dark: PaletteTokens
}
