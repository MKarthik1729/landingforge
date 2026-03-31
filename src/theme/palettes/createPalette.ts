import type { PaletteDefinition, PaletteTokens } from './types'

type PaletteInput = {
  id: string
  light: PaletteTokens
  dark: PaletteTokens
}

export function createPalette(input: PaletteInput): PaletteDefinition {
  return input
}
