import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { categoryMeta, styleMeta } from '../../config/landings/categories'
import type { DemoDefinition } from '../../config/landings/types'
import type { PaletteDefinition } from '../../theme/palettes/types'
import { SiteLayout } from '../layout/SiteLayout'
import { ReliableImage } from '../media/ReliableImage'

type DemoPageProps = {
  demo: DemoDefinition
  palette: PaletteDefinition
  customNavbar?: ReactNode
}

export function DemoPage({ demo, palette, customNavbar }: DemoPageProps) {
  const content = (() => {
    switch (demo.styleVariant) {
      case 'card':
        return <CardVariant demo={demo} />
      case 'sections':
        return <SectionsVariant demo={demo} />
      case 'motion':
        return <MotionVariant demo={demo} />
      case 'interactive':
        return <InteractiveVariant demo={demo} />
      default:
        return null
    }
  })()

  return (
    <SiteLayout
      palette={palette}
      navbarMode={demo.navbarMode}
      currentCategory={demo.category}
      title={demo.title}
      customNavbar={customNavbar}
    >
      {content}
    </SiteLayout>
  )
}

function HeroActions({ demo, subtle }: { demo: DemoDefinition; subtle?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={demo.contactCta.href}
        className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
        style={{
          backgroundColor: subtle ? 'var(--page-surface)' : 'var(--page-accent)',
          color: subtle ? 'var(--page-text)' : 'var(--page-accent-contrast)',
          border: subtle ? '1px solid var(--page-border)' : 'none',
        }}
      >
        {demo.contactCta.label}
      </a>
      <Link
        to="/"
        className="inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
        style={{
          borderColor: 'var(--page-border)',
          backgroundColor: subtle ? 'transparent' : 'var(--page-surface)',
        }}
      >
        Back to gallery
      </Link>
    </div>
  )
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-xs uppercase tracking-[0.28em]"
      style={{ color: 'var(--page-text-muted)' }}
    >
      {children}
    </p>
  )
}

function TestimonialQuote({ demo }: { demo: DemoDefinition }) {
  return (
    <>
      <blockquote className="max-w-3xl font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold leading-tight">
        "{demo.testimonial.quote}"
      </blockquote>
      <p className="mt-5 text-sm font-semibold">
        {demo.testimonial.name}
        <span
          className="ml-2 font-normal"
          style={{ color: 'var(--page-text-muted)' }}
        >
          {demo.testimonial.role}
        </span>
      </p>
    </>
  )
}

function CardVariant({ demo }: { demo: DemoDefinition }) {
  return (
    <>
      <section id="overview" className="mx-auto max-w-6xl px-6 pb-12 pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_430px] lg:items-center">
          <div>
            <span
              className="inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ backgroundColor: 'var(--page-glow)' }}
            >
              {categoryMeta[demo.category].label} / {styleMeta.card.label}
            </span>
            <h1 className="mt-6 font-['Space_Grotesk',system-ui,sans-serif] text-5xl font-bold leading-none sm:text-6xl">
              {demo.hero.headline}
            </h1>
            <p
              className="mt-5 max-w-2xl text-base leading-8"
              style={{ color: 'var(--page-text-muted)' }}
            >
              {demo.hero.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {demo.heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surface)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <HeroActions demo={demo} />
            </div>
          </div>
          <div
            className="rounded-[34px] border p-5"
            style={{
              borderColor: 'var(--page-border)',
              backgroundColor: 'var(--page-surface)',
              boxShadow: 'var(--page-shadow)',
            }}
          >
            <ReliableImage
              src={demo.hero.image}
              alt={demo.hero.imageAlt}
              className="h-[360px] w-full rounded-[28px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {demo.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border p-5"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surface)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <SectionEyebrow>{metric.label}</SectionEyebrow>
              <p className="mt-2 text-2xl font-bold">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="offer" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 max-w-3xl">
          <SectionEyebrow>Card-based offer layout</SectionEyebrow>
          <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
            Modular content blocks make this the most structured of the four systems.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {demo.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[28px] border p-6"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surface)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <h3 className="font-['Space_Grotesk',system-ui,sans-serif] text-xl font-bold">
                {section.title}
              </h3>
              <p
                className="mt-3 text-sm leading-7"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-6xl px-6 py-12">
        <div
          className="rounded-[32px] border p-6 sm:p-8"
          style={{
            borderColor: 'var(--page-border)',
            backgroundColor: 'var(--page-surfaceStrong)',
            boxShadow: 'var(--page-shadow)',
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="grid gap-3">
              {demo.checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border px-4 py-4 text-sm"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surface)',
                  }}
                >
                  <span
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                    style={{
                      backgroundColor: 'var(--page-accent)',
                      color: 'var(--page-accent-contrast)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <SectionEyebrow>Client voice</SectionEyebrow>
              <div className="mt-4">
                <TestimonialQuote demo={demo} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <div
          className="rounded-[34px] border px-8 py-10"
          style={{
            borderColor: 'var(--page-border)',
            background:
              'linear-gradient(135deg, var(--page-glow), transparent 62%), var(--page-surfaceStrong)',
            boxShadow: 'var(--page-shadow)',
          }}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Ready to adapt this direction?</SectionEyebrow>
              <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
                Use the card system when clarity and quick comparison matter more than visual experimentation.
              </h2>
            </div>
            <a
              href={demo.contactCta.href}
              className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
              style={{
                backgroundColor: 'var(--page-accent)',
                color: 'var(--page-accent-contrast)',
              }}
            >
              {demo.contactCta.label}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function SectionsVariant({ demo }: { demo: DemoDefinition }) {
  const featuredSection = demo.sections[0]
  const featuredChip = demo.heroChips[0]

  return (
    <>
      <section id="overview" className="mx-auto max-w-6xl px-6 pb-16 pt-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
          <div>
            <SectionEyebrow>
              {categoryMeta[demo.category].label} / {styleMeta.sections.label}
            </SectionEyebrow>
            <h1 className="mt-5 font-['Space_Grotesk',system-ui,sans-serif] text-5xl font-bold leading-none sm:text-6xl">
              {demo.hero.headline}
            </h1>
            <p
              className="mt-6 max-w-3xl text-lg leading-8"
              style={{ color: 'var(--page-text-muted)' }}
            >
              {demo.hero.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {demo.heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surface)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <HeroActions demo={demo} subtle />
            </div>
          </div>

          <div className="space-y-5">
            <div
              className="overflow-hidden rounded-[34px] border p-3"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surface)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <ReliableImage
                src={demo.hero.image}
                alt={demo.hero.imageAlt}
                className="h-[320px] w-full rounded-[28px] object-cover"
                loading="eager"
              />
              <div className="grid gap-4 px-2 pb-2 pt-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div>
                  <SectionEyebrow>{demo.hero.eyebrow}</SectionEyebrow>
                  <p className="mt-2 font-['Space_Grotesk',system-ui,sans-serif] text-2xl font-bold">
                    {featuredSection?.title ?? demo.title}
                  </p>
                </div>
                {featuredChip ? (
                  <span
                    className="inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      borderColor: 'var(--page-border)',
                      backgroundColor: 'var(--page-surfaceStrong)',
                    }}
                  >
                    {featuredChip}
                  </span>
                ) : null}
              </div>
            </div>

            {demo.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[26px] border p-5"
                style={{
                  borderColor: 'var(--page-border)',
                  backgroundColor: 'var(--page-surface)',
                  boxShadow: 'var(--page-shadow)',
                }}
              >
                <SectionEyebrow>{metric.label}</SectionEyebrow>
                <p className="mt-2 text-3xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="mx-auto max-w-6xl px-6 py-4">
        {demo.sections.map((section, index) => (
          <div
            key={section.title}
            className="grid gap-8 border-t py-10 lg:grid-cols-[120px_minmax(0,1fr)_220px]"
            style={{ borderColor: 'var(--page-border)' }}
          >
            <p className="text-2xl font-bold" style={{ color: 'var(--page-accent)' }}>
              {String(index + 1).padStart(2, '0')}
            </p>
            <div>
              <h2 className="font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
                {section.title}
              </h2>
              <p
                className="mt-4 max-w-3xl text-base leading-8"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {section.body}
              </p>
            </div>
            <p className="text-sm leading-7" style={{ color: 'var(--page-text-muted)' }}>
              {demo.heroChips[index] ?? demo.heroChips[0]}
            </p>
          </div>
        ))}
      </section>

      <section id="proof" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 border-y py-10 lg:grid-cols-[minmax(0,1fr)_340px]" style={{ borderColor: 'var(--page-border)' }}>
          <div className="space-y-4">
            <SectionEyebrow>Why this sections layout works</SectionEyebrow>
            {demo.checklist.map((item) => (
              <div key={item} className="flex gap-4 border-b pb-4" style={{ borderColor: 'var(--page-border)' }}>
                <span className="font-bold" style={{ color: 'var(--page-accent)' }}>
                  /
                </span>
                <p className="text-sm leading-7">{item}</p>
              </div>
            ))}
          </div>
          <div className="self-end">
            <TestimonialQuote demo={demo} />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <div className="border-t pt-8" style={{ borderColor: 'var(--page-border)' }}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Section-led design</SectionEyebrow>
              <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
                This version removes the card-heavy feel and leans on full-width section rhythm instead.
              </h2>
            </div>
            <a
              href={demo.contactCta.href}
              className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
              style={{
                backgroundColor: 'var(--page-accent)',
                color: 'var(--page-accent-contrast)',
              }}
            >
              {demo.contactCta.label}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function MotionVariant({ demo }: { demo: DemoDefinition }) {
  const leadMetric = demo.metrics[0]
  const motionPreview = demo.interactive.items[0]

  return (
    <>
      <section id="overview" className="relative overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0">
          <div className="animate-drift absolute -left-20 top-10 h-48 w-48 rounded-full" style={{ backgroundColor: 'var(--page-glow)' }} />
          <div className="animate-float absolute right-10 top-12 h-56 w-56 rounded-full" style={{ backgroundColor: 'var(--page-glow)' }} />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <div>
              <SectionEyebrow>
                {categoryMeta[demo.category].label} / {styleMeta.motion.label}
              </SectionEyebrow>
              <h1 className="mt-6 max-w-5xl font-['Space_Grotesk',system-ui,sans-serif] text-5xl font-bold leading-none sm:text-6xl">
                {demo.hero.headline.split(' ').map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className={index % 2 === 0 ? 'motion-word' : 'motion-word motion-word-delay'}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p
                className="motion-copy mt-6 max-w-3xl text-lg leading-8"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {demo.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {demo.heroChips.map((chip) => (
                  <span
                    key={chip}
                    className="motion-chip rounded-full px-4 py-2 text-sm font-semibold"
                    style={{ backgroundColor: 'var(--page-glow)' }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <HeroActions demo={demo} />
              </div>
            </div>

            <div className="relative">
              {leadMetric ? (
                <div
                  className="motion-panel animate-rise absolute -left-6 top-10 z-10 hidden max-w-[220px] rounded-[24px] border p-4 xl:block"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surfaceStrong)',
                    boxShadow: 'var(--page-shadow)',
                  }}
                >
                  <SectionEyebrow>{leadMetric.label}</SectionEyebrow>
                  <p className="mt-2 text-2xl font-bold">{leadMetric.value}</p>
                  <p
                    className="mt-3 text-sm leading-6"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    {demo.hero.eyebrow}
                  </p>
                </div>
              ) : null}

              <div
                className="relative overflow-hidden rounded-[34px] border p-3"
                style={{
                  borderColor: 'var(--page-border)',
                  backgroundColor: 'var(--page-surface)',
                  boxShadow: 'var(--page-shadow)',
                }}
              >
                <ReliableImage
                  src={demo.hero.image}
                  alt={demo.hero.imageAlt}
                  className="h-[420px] w-full rounded-[28px] object-cover"
                  loading="eager"
                />
                <div
                  className="pointer-events-none absolute inset-3 rounded-[28px]"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.7))',
                  }}
                />
                {motionPreview ? (
                  <div
                    className="absolute inset-x-7 bottom-7 rounded-[24px] border px-5 py-4"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.18)',
                      backgroundColor: 'rgba(15, 23, 42, 0.58)',
                      backdropFilter: 'blur(14px)',
                    }}
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                      {motionPreview.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {motionPreview.title}
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/78">
                      {motionPreview.detail}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            {demo.sections.map((section, index) => (
              <div
                key={section.title}
                className="motion-panel border-b pb-6"
                style={{ borderColor: 'var(--page-border)' }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="motion-step text-4xl font-bold"
                    style={{ color: 'var(--page-accent)' }}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
                      {section.title}
                    </h2>
                    <p
                      className="mt-3 text-base leading-8"
                      style={{ color: 'var(--page-text-muted)' }}
                    >
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            {demo.metrics.map((metric) => (
              <div key={metric.label} className="border-l pl-4" style={{ borderColor: 'var(--page-accent)' }}>
                <SectionEyebrow>{metric.label}</SectionEyebrow>
                <p className="mt-2 text-3xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-4">
            {demo.checklist.map((item) => (
              <div key={item} className="motion-copy border-b pb-4" style={{ borderColor: 'var(--page-border)' }}>
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-[30px] border p-8" style={{ borderColor: 'var(--page-border)', backgroundColor: 'var(--page-surface)', boxShadow: 'var(--page-shadow)' }}>
            <SectionEyebrow>Motion should move the copy too</SectionEyebrow>
            <div className="mt-4">
              <TestimonialQuote demo={demo} />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <div className="rounded-[32px] border p-8" style={{ borderColor: 'var(--page-border)', backgroundColor: 'var(--page-surfaceStrong)', boxShadow: 'var(--page-shadow)' }}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Motion-led landing page</SectionEyebrow>
              <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
                Here the motion is carried by headline words, copy, chips, and section rhythm, not just floating backgrounds.
              </h2>
            </div>
            <a
              href={demo.contactCta.href}
              className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
              style={{
                backgroundColor: 'var(--page-accent)',
                color: 'var(--page-accent-contrast)',
              }}
            >
              {demo.contactCta.label}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function InteractiveVariant({ demo }: { demo: DemoDefinition }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem =
    demo.interactive.items[activeIndex] ?? demo.interactive.items[0]

  return (
    <>
      <section
        id="overview"
        className="relative overflow-hidden px-6 pb-20 pt-24"
      >
        <ReliableImage
          src={demo.hero.image}
          alt={demo.hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: 'var(--page-hero-overlay)' }} />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>
              {categoryMeta[demo.category].label} / {styleMeta.interactive.label}
            </SectionEyebrow>
            <h1 className="mt-6 font-['Space_Grotesk',system-ui,sans-serif] text-5xl font-bold leading-none sm:text-7xl">
              {demo.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8" style={{ color: 'var(--page-text-muted)' }}>
              {demo.hero.description}
            </p>
            <div className="mt-8">
              <HeroActions demo={demo} subtle />
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="mx-auto max-w-6xl px-6 py-12">
        <div
          className="rounded-[34px] border p-6 sm:p-8"
          style={{
            borderColor: 'var(--page-border)',
            backgroundColor: 'var(--page-surface)',
            boxShadow: 'var(--page-shadow)',
          }}
        >
          <SectionEyebrow>Interactive-first section</SectionEyebrow>
          <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
            {demo.interactive.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7" style={{ color: 'var(--page-text-muted)' }}>
            {demo.interactive.description}
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="grid gap-3">
              {demo.interactive.items.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="rounded-3xl border px-5 py-4 text-left transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    borderColor:
                      index === activeIndex ? 'var(--page-accent)' : 'var(--page-border)',
                    backgroundColor:
                      index === activeIndex
                        ? 'var(--page-glow)'
                        : 'var(--page-surfaceStrong)',
                  }}
                >
                  <SectionEyebrow>{item.label}</SectionEyebrow>
                  <p className="mt-2 text-lg font-semibold">{item.title}</p>
                </button>
              ))}
            </div>
            <div
              className="rounded-[30px] border p-8"
              style={{
                borderColor: 'var(--page-border)',
                background:
                  'radial-gradient(circle at top right, var(--page-glow), transparent 36%), var(--page-surfaceStrong)',
              }}
            >
              <SectionEyebrow>{activeItem.label}</SectionEyebrow>
              <h3 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold">
                {activeItem.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8" style={{ color: 'var(--page-text-muted)' }}>
                {activeItem.detail}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {demo.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border p-4" style={{ borderColor: 'var(--page-border)' }}>
                    <SectionEyebrow>{metric.label}</SectionEyebrow>
                    <p className="mt-2 text-xl font-bold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            {demo.sections.map((section) => (
              <div key={section.title} className="border-b pb-6" style={{ borderColor: 'var(--page-border)' }}>
                <h2 className="font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-8" style={{ color: 'var(--page-text-muted)' }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {demo.checklist.map((item) => (
              <div key={item} className="rounded-2xl border px-4 py-4 text-sm" style={{ borderColor: 'var(--page-border)', backgroundColor: 'var(--page-surface)' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <TestimonialQuote demo={demo} />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-8">
        <div className="rounded-[32px] border p-8" style={{ borderColor: 'var(--page-border)', backgroundColor: 'var(--page-surfaceStrong)', boxShadow: 'var(--page-shadow)' }}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Interactive landing page</SectionEyebrow>
              <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold">
                This design puts the interaction itself at the center instead of treating it like a small extra widget.
              </h2>
            </div>
            <a
              href={demo.contactCta.href}
              className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
              style={{
                backgroundColor: 'var(--page-accent)',
                color: 'var(--page-accent-contrast)',
              }}
            >
              {demo.contactCta.label}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
