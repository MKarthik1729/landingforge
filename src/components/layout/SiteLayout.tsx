import { useEffect, type ReactNode } from 'react'
import type { CategoryKey, NavbarMode } from '../../config/landings/types'
import { useUiStore } from '../../stores/useUiStore'
import { buildPaletteStyle, getPaletteTokens } from '../../theme/buildPaletteStyle'
import type { PaletteDefinition } from '../../theme/palettes/types'
import { Navbar } from './Navbar'
import { ThemeToggle } from './ThemeToggle'
import { CornerNextDemoButton } from './CornerNextDemoButton'

type SiteLayoutProps = {
  palette: PaletteDefinition
  navbarMode: NavbarMode
  currentCategory?: CategoryKey
  title?: string
  customNavbar?: ReactNode
  children: ReactNode
}

export function SiteLayout({
  palette,
  navbarMode,
  currentCategory,
  title,
  customNavbar,
  children,
}: SiteLayoutProps) {
  const theme = useUiStore((state) => state.theme)
  const styles = buildPaletteStyle(palette, theme)
  const tokens = getPaletteTokens(palette, theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.body.style.backgroundColor = tokens.background
    document.body.style.color = tokens.text
  }, [theme, tokens.background, tokens.text])

  return (
    <div className="min-h-screen transition-colors duration-300" style={styles}>
      <div
        className="relative min-h-screen overflow-x-hidden"
        style={{ backgroundColor: 'var(--page-bg)', color: 'var(--page-text)' }}
      >
        {customNavbar ?? (
          <Navbar
            navbarMode={navbarMode}
            currentCategory={currentCategory}
            title={title}
          />
        )}
        <main>{children}</main>
        <ThemeToggle />
        <CornerNextDemoButton />
      </div>
    </div>
  )
}
