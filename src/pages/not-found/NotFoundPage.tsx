import { Link } from 'react-router-dom'
import { SiteLayout } from '../../components/layout/SiteLayout'
import { homePalette } from '../../theme/palettes/home'

export function NotFoundPage() {
  return (
    <SiteLayout palette={homePalette} navbarMode="solid" title="Not found">
      <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <span
          className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]"
          style={{
            borderColor: 'var(--page-border)',
            backgroundColor: 'var(--page-surface)',
          }}
        >
          Page not found
        </span>
        <h1 className="mt-6 font-['Space_Grotesk',system-ui,sans-serif] text-5xl font-bold leading-none sm:text-6xl">
          That demo route doesn’t exist.
        </h1>
        <p
          className="mt-5 max-w-2xl text-base leading-8"
          style={{ color: 'var(--page-text-muted)' }}
        >
          Head back to the gallery to browse all 16 landing concepts and their
          category links.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold"
          style={{
            backgroundColor: 'var(--page-accent)',
            color: 'var(--page-accent-contrast)',
          }}
        >
          Return home
        </Link>
      </section>
    </SiteLayout>
  )
}
