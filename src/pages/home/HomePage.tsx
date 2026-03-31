import { CategorySpotlight } from '../../components/home'
import { ReliableImage } from '../../components/media/ReliableImage'
import { SiteLayout } from '../../components/layout/SiteLayout'
import { allDemos, demosByCategory } from '../../config/landings'
import { categoryMeta } from '../../config/landings/categories'
import { siteConfig } from '../../config/site'
import { useUiStore } from '../../stores/useUiStore'
import { homePalette } from '../../theme/palettes/home'

export function HomePage() {
  const theme = useUiStore((state) => state.theme)
  const categoryOrder = Object.keys(demosByCategory) as Array<
    keyof typeof demosByCategory
  >
  const darkHeroBackgroundDemo =
    allDemos.find((demo) => demo.id === 'services-motion-transformation') ??
    allDemos[0]
  const lightHeroBackgroundDemo =
    allDemos.find((demo) => demo.id === 'services-card-booking') ??
    allDemos[0]
  const isDarkTheme = theme === 'dark'
  const heroBackgroundDemo = isDarkTheme
    ? darkHeroBackgroundDemo
    : lightHeroBackgroundDemo
  const motionDrivenCount = allDemos.filter(
    (demo) =>
      demo.styleVariant === 'motion' || demo.styleVariant === 'interactive',
  ).length
  const spotlightStats = [
    { label: 'Website concepts', value: allDemos.length.toString() },
    { label: 'Industry styles', value: categoryOrder.length.toString() },
    { label: 'Motion-led builds', value: motionDrivenCount.toString() },
  ]
  const heroHighlights = [
    'Custom website direction',
    'Premium UI and visuals',
    'Built to convert visitors',
  ]
  const contactDemo =
    allDemos.find((demo) => demo.id === 'services-immersive-brand') ??
    allDemos[0]

  return (
    <SiteLayout
      palette={homePalette}
      navbarMode="solid"
      title="Website design studio"
    >
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ReliableImage
            src={heroBackgroundDemo.hero.image}
            alt=""
            aria-hidden="true"
            loading="eager"
            className="home-image-pan absolute inset-0 h-full w-full scale-[1.06] object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: isDarkTheme
                ? 'linear-gradient(135deg, rgba(12, 9, 7, 0.82) 0%, rgba(12, 9, 7, 0.58) 44%, rgba(12, 9, 7, 0.76) 100%)'
                : 'linear-gradient(135deg, rgba(255, 248, 241, 0.72) 0%, rgba(255, 252, 247, 0.48) 42%, rgba(244, 239, 232, 0.84) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: isDarkTheme
                ? 'radial-gradient(circle at top right, rgba(186, 92, 49, 0.32), transparent 32%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.1), transparent 34%)'
                : 'radial-gradient(circle at top right, rgba(186, 92, 49, 0.22), transparent 34%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.42), transparent 30%)',
            }}
          />
        </div>
        <div
          className="home-orb absolute -left-16 top-24 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--page-glow)' }}
        />
        <div
          className="home-orb absolute right-0 top-52 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--page-glow)', animationDelay: '1.8s' }}
        />

        <div className="mx-auto max-w-6xl px-6 pb-18 pt-28">
          <div
            className="relative z-10 max-w-4xl rounded-[40px] border p-7 backdrop-blur-sm sm:p-10"
            style={{
              borderColor: isDarkTheme
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(67, 49, 34, 0.12)',
              backgroundColor: isDarkTheme
                ? 'rgba(0, 0, 0, 0.18)'
                : 'rgba(255, 252, 247, 0.54)',
              boxShadow: isDarkTheme
                ? '0 28px 90px rgba(0, 0, 0, 0.32)'
                : '0 28px 90px rgba(61, 43, 29, 0.18)',
            }}
          >
            <span
              className="home-hero-reveal inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{
                animationDelay: '80ms',
                borderColor: isDarkTheme
                  ? 'rgba(255, 255, 255, 0.14)'
                  : 'rgba(67, 49, 34, 0.12)',
                backgroundColor: isDarkTheme
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 252, 247, 0.72)',
                color: isDarkTheme ? '#fff' : 'var(--page-text)',
              }}
            >
              Websites built for first impressions, trust, and conversions
            </span>
            <h1
              className="home-hero-reveal mt-6 max-w-4xl font-['Space_Grotesk',system-ui,sans-serif] text-5xl font-bold leading-[0.94] sm:text-7xl"
              style={{
                animationDelay: '160ms',
                color: isDarkTheme ? '#fff' : 'var(--page-text)',
              }}
            >
              {siteConfig.headline}
            </h1>
            <p
              className="home-hero-reveal mt-6 max-w-3xl text-lg leading-8"
              style={{
                animationDelay: '220ms',
                color: isDarkTheme
                  ? 'rgba(255, 255, 255, 0.78)'
                  : 'var(--page-text-muted)',
              }}
            >
              {siteConfig.subheadline}
            </p>
            <div
              className="home-hero-reveal mt-6 flex flex-wrap gap-2"
              style={{ animationDelay: '300ms' }}
            >
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-4 py-2 text-sm backdrop-blur-sm"
                  style={{
                    borderColor: isDarkTheme
                      ? 'rgba(255, 255, 255, 0.14)'
                      : 'rgba(67, 49, 34, 0.12)',
                    backgroundColor: isDarkTheme
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 252, 247, 0.7)',
                    color: isDarkTheme
                      ? 'rgba(255, 255, 255, 0.88)'
                      : 'var(--page-text)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div
              className="home-hero-reveal mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: '380ms' }}
            >
              <a
                href={siteConfig.primaryCta.href}
                className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: 'var(--page-accent)',
                  color: 'var(--page-accent-contrast)',
                }}
              >
                {siteConfig.primaryCta.label}
              </a>
              <a
                href="#manufacturing"
                className="inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
                style={{
                  borderColor: isDarkTheme
                    ? 'rgba(255, 255, 255, 0.16)'
                    : 'rgba(67, 49, 34, 0.12)',
                  backgroundColor: isDarkTheme
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'rgba(255, 252, 247, 0.72)',
                  color: isDarkTheme ? '#fff' : 'var(--page-text)',
                }}
              >
                Browse industry examples
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {spotlightStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="home-hero-reveal rounded-[26px] border p-5"
                  style={{
                    animationDelay: `${460 + index * 120}ms`,
                    borderColor: isDarkTheme
                      ? 'rgba(255, 255, 255, 0.14)'
                      : 'rgba(67, 49, 34, 0.12)',
                    backgroundColor: isDarkTheme
                      ? 'rgba(15, 11, 8, 0.34)'
                      : 'rgba(255, 252, 247, 0.68)',
                    boxShadow: isDarkTheme
                      ? '0 18px 50px rgba(0, 0, 0, 0.22)'
                      : '0 18px 50px rgba(61, 43, 29, 0.14)',
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.26em]"
                    style={{
                      color: isDarkTheme
                        ? 'rgba(255, 255, 255, 0.6)'
                        : 'var(--page-text-muted)',
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold"
                    style={{ color: isDarkTheme ? '#fff' : 'var(--page-text)' }}
                  >
                    {stat.value.padStart(2, '0')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-2 pt-4">
        <div
          className="rounded-[34px] border px-6 py-6 sm:px-8"
          style={{
            borderColor: 'var(--page-border)',
            backgroundColor: 'var(--page-surface)',
            boxShadow: 'var(--page-shadow)',
          }}
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div>
              <p
                className="text-xs uppercase tracking-[0.28em]"
                style={{ color: 'var(--page-text-muted)' }}
              >
                Why this works
              </p>
              <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold leading-tight">
                We build websites that feel memorable at first glance and clear
                at every next step.
              </h2>
            </div>
            <p
              className="text-sm leading-8"
              style={{ color: 'var(--page-text-muted)' }}
            >
              The industry sections below let clients review different visual
              directions, layouts, and interaction styles. They show how we can
              tailor an extraordinary website around your brand, offer, and
              conversion goal.
            </p>
          </div>
        </div>
      </section>

      {categoryOrder.map((category) => {
        const info = categoryMeta[category]

        return (
          <CategorySpotlight
            key={category}
            anchor={info.anchor}
            label={info.label}
            description={info.description}
            demos={demosByCategory[category]}
          />
        )
      })}

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div
          className="rounded-[38px] border p-5 sm:p-6"
          style={{
            borderColor: 'var(--page-border)',
            backgroundColor: 'var(--page-surface)',
            boxShadow: 'var(--page-shadow)',
          }}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_360px]">
            <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/12">
              <ReliableImage
                src={contactDemo.hero.image}
                alt={contactDemo.hero.imageAlt}
                loading="lazy"
                className="home-image-pan absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/42 to-black/12" />
              <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-white/72">
                  Built for client conversations
                </p>
                <h2 className="mt-3 max-w-2xl font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold leading-tight text-white">
                  Need one of these directions adapted for a real brand?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                  These demos are designed to show range without losing
                  structure. Share the brand, offer, and conversion goal, and
                  we can tune one of these systems into a launch-ready page.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <a
                href={siteConfig.primaryCta.href}
                className="rounded-[28px] px-5 py-4 text-sm font-semibold"
                style={{
                  backgroundColor: 'var(--page-accent)',
                  color: 'var(--page-accent-contrast)',
                }}
              >
                {siteConfig.primaryCta.label}
              </a>
              <a
                href={siteConfig.contactHref}
                className="rounded-[28px] border px-5 py-4 text-sm font-semibold"
                style={{
                  borderColor: 'var(--page-border)',
                  backgroundColor: 'var(--page-surfaceStrong)',
                }}
              >
                {siteConfig.contact.email}
              </a>
              <div
                className="rounded-[28px] border px-5 py-4 text-sm"
                style={{
                  borderColor: 'var(--page-border)',
                  backgroundColor: 'var(--page-surfaceStrong)',
                }}
              >
                {siteConfig.contact.phone} / {siteConfig.contact.location}
              </div>
              <div
                className="rounded-[28px] border px-5 py-4"
                style={{
                  borderColor: 'var(--page-border)',
                  backgroundColor: 'var(--page-surfaceStrong)',
                }}
              >
                <p
                  className="text-xs uppercase tracking-[0.28em]"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  Current inspiration
                </p>
                <p className="mt-2 font-['Space_Grotesk',system-ui,sans-serif] text-2xl font-bold">
                  {contactDemo.title}
                </p>
                <p
                  className="mt-2 text-sm leading-7"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  {contactDemo.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
