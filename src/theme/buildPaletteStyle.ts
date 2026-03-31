import type { CSSProperties } from 'react'
import type { ThemeMode } from '../stores/useUiStore'
import type { PaletteDefinition, PaletteTokens } from './palettes/types'

export function getPaletteTokens(
  palette: PaletteDefinition,
  theme: ThemeMode,
): PaletteTokens {
  return palette[theme]
}

export function buildPaletteStyle(
  palette: PaletteDefinition,
  theme: ThemeMode,
): CSSProperties {
  const tokens = getPaletteTokens(palette, theme)

  return {
    '--page-bg': tokens.background,
    '--page-bg-alt': tokens.backgroundAlt,
    '--page-surface': tokens.surface,
    '--page-surface-strong': tokens.surfaceStrong,
    '--page-text': tokens.text,
    '--page-text-muted': tokens.textMuted,
    '--page-border': tokens.border,
    '--page-accent': tokens.accent,
    '--page-accent-contrast': tokens.accentContrast,
    '--page-hero-overlay': tokens.heroOverlay,
    '--page-navbar-bg': tokens.navbarBackground,
    '--page-navbar-border': tokens.navbarBorder,
    '--page-navbar-text': tokens.navbarText,
    '--page-glow': tokens.glow,
    '--page-shadow': tokens.shadow,
  } as CSSProperties
}
