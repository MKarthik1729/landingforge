import { Link } from 'react-router-dom'
import { categoryMeta } from '../../config/landings/categories'
import { getDemoPath, getNextDemo } from '../../config/landings'
import { siteConfig } from '../../config/site'

export type DemoNavbarVariantProps = {
  currentDemoId: string
  title: string
  subtitle: string
  links: Array<{ label: string; href: string }>
}

function BrandLockup({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="min-w-0">
      <Link
        to="/"
        className="truncate font-['Space_Grotesk',system-ui,sans-serif] text-lg font-bold"
      >
        {siteConfig.brand}
      </Link>
      <p className="truncate text-xs" style={{ color: 'var(--page-text-muted)' }}>
        {title} / {subtitle}
      </p>
    </div>
  )
}

function NextDemoLink({
  currentDemoId,
  compact = false,
}: {
  currentDemoId: string
  compact?: boolean
}) {
  const nextDemo = getNextDemo(currentDemoId)

  return (
    <Link
      to={getDemoPath(nextDemo)}
      className={
        compact
          ? 'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold'
          : 'inline-flex min-w-[196px] flex-col rounded-2xl border px-4 py-3 text-left'
      }
      style={{
        borderColor: 'var(--page-border)',
        backgroundColor: compact ? 'var(--page-surface)' : 'var(--page-surfaceStrong)',
      }}
    >
      <span
        className="text-[10px] uppercase tracking-[0.22em]"
        style={{ color: 'var(--page-text-muted)' }}
      >
        Next demo
      </span>
      <span className={compact ? '' : 'mt-1 text-sm font-semibold'}>
        {nextDemo.title}
      </span>
      {!compact ? (
        <span className="mt-1 text-xs" style={{ color: 'var(--page-text-muted)' }}>
          {categoryMeta[nextDemo.category].label}
        </span>
      ) : null}
    </Link>
  )
}

export function CardDemoNavbar({
  currentDemoId,
  title,
  subtitle,
  links,
}: DemoNavbarVariantProps) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[28px] border px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between"
        style={{
          backgroundColor: 'var(--page-navbar-bg)',
          borderColor: 'var(--page-navbar-border)',
          color: 'var(--page-navbar-text)',
          boxShadow: 'var(--page-shadow)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <BrandLockup title={title} subtitle={subtitle} />
        <nav className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: 'var(--page-glow)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-3">
          <NextDemoLink currentDemoId={currentDemoId} compact />
        </div>
      </div>
    </header>
  )
}

export function SectionsDemoNavbar({
  currentDemoId,
  title,
  subtitle,
  links,
}: DemoNavbarVariantProps) {
  return (
    <header
      className="sticky top-0 z-50 border-b px-4 py-4 sm:px-6"
      style={{
        borderColor: 'var(--page-border)',
        backgroundColor: 'color-mix(in srgb, var(--page-bg) 92%, transparent)',
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <BrandLockup title={title} subtitle={subtitle} />
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b pb-1"
              style={{ borderColor: 'var(--page-accent)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-4">
          <NextDemoLink currentDemoId={currentDemoId} compact />
        </div>
      </div>
    </header>
  )
}

export function MotionDemoNavbar({
  currentDemoId,
  title,
  subtitle,
  links,
}: DemoNavbarVariantProps) {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className="mx-auto max-w-7xl rounded-[28px] border px-5 py-4 sm:px-6"
        style={{
          borderColor: 'var(--page-navbar-border)',
          background:
            'linear-gradient(90deg, var(--page-navbar-bg), color-mix(in srgb, var(--page-glow) 24%, var(--page-navbar-bg)))',
          color: 'var(--page-navbar-text)',
          boxShadow: 'var(--page-shadow)',
          backdropFilter: 'blur(18px)',
        }}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <BrandLockup title={title} subtitle={subtitle} />
            <span
              className="motion-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ backgroundColor: 'var(--page-glow)' }}
            >
              Motion live
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  index % 2 === 0
                    ? 'motion-copy text-sm font-medium'
                    : 'motion-word text-sm font-medium'
                }
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <NextDemoLink currentDemoId={currentDemoId} compact />
          </div>
        </div>
      </div>
    </header>
  )
}

export function InteractiveDemoNavbar({
  currentDemoId,
  title,
  subtitle,
  links,
}: DemoNavbarVariantProps) {
  return (
    <header className="pointer-events-none sticky top-4 z-50 px-4 sm:px-6">
      <div
        className="pointer-events-auto mx-auto max-w-7xl overflow-x-auto rounded-full border px-4 py-3 sm:px-5"
        style={{
          borderColor: 'var(--page-navbar-border)',
          background:
            'radial-gradient(circle at top right, var(--page-glow), transparent 30%), color-mix(in srgb, var(--page-navbar-bg) 72%, transparent)',
          color: 'var(--page-navbar-text)',
          boxShadow: 'var(--page-shadow)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex min-w-max items-center gap-3 whitespace-nowrap">
          <div className="min-w-0 pr-2">
            <Link
              to="/"
              className="font-['Space_Grotesk',system-ui,sans-serif] text-lg font-bold"
            >
              {siteConfig.brand}
            </Link>
            <span
              className="ml-3 hidden text-xs sm:inline"
              style={{ color: 'var(--page-text-muted)' }}
            >
              {title} / {subtitle}
            </span>
          </div>

          <nav
            className="flex items-center gap-2 rounded-full border px-2 py-1"
            style={{
              borderColor: 'var(--page-border)',
              backgroundColor:
                'color-mix(in srgb, var(--page-surface) 78%, transparent)',
            }}
          >
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor:
                    index === 0
                      ? 'var(--page-glow)'
                      : 'color-mix(in srgb, var(--page-surfaceStrong) 78%, transparent)',
                  border: '1px solid var(--page-border)',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 pl-1">
            <NextDemoLink currentDemoId={currentDemoId} compact />
          </div>
        </div>
      </div>
    </header>
  )
}
