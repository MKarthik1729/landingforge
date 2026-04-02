import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { categoryMeta } from '../../config/landings/categories'
import type { CategoryKey, NavbarMode } from '../../config/landings/types'
import { siteConfig } from '../../config/site'
import { useUiStore } from '../../stores/useUiStore'
import { cn } from '../../lib/cn'
import { demosByCategory, getDemoPath } from '../../config/landings'

type NavbarProps = {
  navbarMode: NavbarMode
  currentCategory?: CategoryKey
  title?: string
}

const navItems = [
  { label: 'Home', href: '/', match: 'home' },
  { label: categoryMeta.services.label, href: '/#services', match: 'services' },
  { label: categoryMeta.study.label, href: '/#study', match: 'study' },
  {
    label: categoryMeta.ecommerce.label,
    href: '/#ecommerce',
    match: 'ecommerce',
  },
  {
    label: categoryMeta.manufacturing.label,
    href: '/#manufacturing',
    match: 'manufacturing',
  },
  { label: 'Contact', href: '/#contact', match: 'contact' },
] as const

export function Navbar({
  navbarMode,
  currentCategory,
  title,
}: NavbarProps) {
  const { pathname } = useLocation()
  const mobileNavOpen = useUiStore((state) => state.mobileNavOpen)
  const setMobileNavOpen = useUiStore((state) => state.setMobileNavOpen)
  const [isHovered, setIsHovered] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname, setMobileNavOpen])

  useEffect(() => {
    if (isHovered) {
      setIsVisible(true)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    } else {
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(false)
      }, 2500)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isHovered])

  const transparentAtTop = navbarMode !== 'solid' && !mobileNavOpen

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(true)
  }

  return (
    <header
      className={cn(
        'absolute top-0 z-50 w-full px-4 pt-4 sm:px-6 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-auto mx-auto max-w-7xl rounded-full border transition-all duration-300"
        style={{
          backgroundColor: transparentAtTop
            ? 'rgba(0, 0, 0, 0.2)'
            : 'var(--page-navbar-bg)',
          borderColor: transparentAtTop
            ? 'transparent'
            : 'var(--page-navbar-border)',
          color: 'var(--page-navbar-text)',
          boxShadow: transparentAtTop ? 'none' : 'var(--page-shadow)',
          backdropFilter: transparentAtTop ? 'none' : 'blur(18px)',
        }}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              to="/"
              className="truncate font-['Space_Grotesk',system-ui,sans-serif] text-lg font-bold tracking-tight"
            >
              {siteConfig.brand}
            </Link>
            {title ? (
              <span
                className="hidden rounded-full border px-3 py-1 text-xs font-semibold lg:inline-flex"
                style={{
                  borderColor: 'var(--page-border)',
                  backgroundColor: 'var(--page-glow)',
                }}
              >
                {title}
              </span>
            ) : null}
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive =
                (item.match === 'home' && pathname === '/') ||
                (item.match !== 'home' && item.match === currentCategory)

              const isCategory = item.match in demosByCategory;

              if (isCategory) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.match)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: isActive ? 'var(--page-glow)' : 'transparent',
                      }}
                    >
                      {item.label}
                    </a>
                    {openDropdown === item.match && (
                      <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg" style={{ backgroundColor: 'var(--page-surface)'}}>
                        {demosByCategory[item.match as keyof typeof demosByCategory].map((demo) => (
                          <Link
                            key={demo.id}
                            to={getDemoPath(demo)}
                            className="block px-4 py-2 text-sm"
                            style={{ color: 'var(--page-text)' }}
                          >
                            {demo.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: isActive ? 'var(--page-glow)' : 'transparent',
                  }}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.primaryCta.href}
              className="hidden rounded-full px-4 py-2 text-sm font-semibold sm:inline-flex"
              style={{
                backgroundColor: 'var(--page-accent)',
                color: 'var(--page-accent-contrast)',
              }}
            >
              {siteConfig.primaryCta.label}
            </a>

            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: transparentAtTop
                  ? 'var(--page-glow)'
                  : 'var(--page-surface)',
              }}
              aria-label="Toggle menu"
            >
              <span className="space-y-1.5">
                <span
                  className="block h-0.5 w-5 rounded-full"
                  style={{ backgroundColor: 'var(--page-text)' }}
                />
                <span
                  className="block h-0.5 w-5 rounded-full"
                  style={{ backgroundColor: 'var(--page-text)' }}
                />
              </span>
            </button>
          </div>
        </div>

        {mobileNavOpen ? (
          <div
            className="border-t px-5 pb-5 pt-4 lg:hidden"
            style={{ borderColor: 'var(--page-border)' }}
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                 <div key={item.label}>
                 <a
                   href={item.href}
                   className="rounded-2xl border px-4 py-3 text-sm font-medium"
                   style={{
                     borderColor: 'var(--page-border)',
                     backgroundColor: 'var(--page-surface)',
                   }}
                 >
                   {item.label}
                 </a>
                 {item.match in demosByCategory && (
                   <div className="mt-2 w-full rounded-md shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
                     {demosByCategory[item.match as keyof typeof demosByCategory].map((demo) => (
                       <Link
                         key={demo.id}
                         to={getDemoPath(demo)}
                         className="block px-4 py-2 text-sm"
                         style={{ color: 'var(--page-text)' }}
                       >
                         {demo.title}
                       </Link>
                     ))}
                   </div>
                 )}
               </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
