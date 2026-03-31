import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDemoPath } from '../../config/landings'
import { styleMeta } from '../../config/landings/categories'
import type { DemoDefinition } from '../../config/landings/types'
import { ReliableImage } from '../media/ReliableImage'
import {
  categoryTones,
  getInteractionLabel,
  getPreferredDemoIndex,
} from './showcaseShared'

type CategorySpotlightProps = {
  anchor: string
  label: string
  description: string
  demos: readonly DemoDefinition[]
}

export function CategorySpotlight({
  anchor,
  label,
  description,
  demos,
}: CategorySpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(() =>
    getPreferredDemoIndex(demos),
  )

  useEffect(() => {
    setActiveIndex(getPreferredDemoIndex(demos))
  }, [demos])

  if (demos.length === 0) {
    return null
  }

  const activeDemo = demos[activeIndex] ?? demos[0]
  const tone = categoryTones[activeDemo.category]
  const styleLabels = Array.from(
    new Set(demos.map((demo) => styleMeta[demo.styleVariant].label)),
  )

  return (
    <section id={anchor} className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-start">
        <div className="xl:sticky xl:top-28">
          <p
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: 'var(--page-text-muted)' }}
          >
            {label}
          </p>
          <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold leading-tight sm:text-[2.75rem]">
            Show the range without showing everything at once.
          </h2>
          <p
            className="mt-4 text-base leading-8"
            style={{ color: 'var(--page-text-muted)' }}
          >
            {description}
          </p>

          <div
            className="mt-6 rounded-[28px] border p-5"
            style={{ borderColor: tone.border }}
          >
            <p
              className="text-xs uppercase tracking-[0.28em]"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Focused browsing
            </p>
            <p className="mt-3 text-4xl font-bold">{demos.length}</p>
            <p
              className="mt-3 text-sm leading-7"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Visitors can swap between distinct directions while the layout
              keeps a single large visual in view.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {styleLabels.map((styleLabel) => (
              <span
                key={styleLabel}
                className="rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ borderColor: 'var(--page-border)' }}
              >
                {styleLabel}
              </span>
            ))}
          </div>
        </div>

        <div
          className="rounded-[38px] border p-4 sm:p-5"
          style={{
            borderColor: 'var(--page-border)',
            backgroundColor: 'var(--page-surface)',
            boxShadow: 'var(--page-shadow)',
          }}
        >
          <article
            key={activeDemo.id}
            className="home-spotlight-card overflow-hidden rounded-[30px] border"
            style={{
              borderColor: tone.border,
              backgroundColor: 'var(--page-surfaceStrong)',
            }}
          >
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_360px]">
              <Link
                to={getDemoPath(activeDemo)}
                className="group relative block min-h-[380px] overflow-hidden"
                aria-label={`Open ${activeDemo.title} demo`}
              >
                <ReliableImage
                  src={activeDemo.hero.image}
                  alt={activeDemo.hero.imageAlt}
                  loading="lazy"
                  className="home-image-pan absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/28 to-black/12" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at top left, ${tone.glow}, transparent 46%)`,
                  }}
                />

                <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                  <div className="mb-auto flex justify-end">
                    <span className="rounded-full border border-white/16 bg-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/92 backdrop-blur-sm transition duration-300 group-hover:bg-white/16">
                      Open demo
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                      {styleMeta[activeDemo.styleVariant].label}
                    </span>
                    <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/86 backdrop-blur-sm">
                      {getInteractionLabel(activeDemo.interactiveKind)}
                    </span>
                  </div>
                  <h3 className="mt-4 max-w-2xl font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {activeDemo.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                    {activeDemo.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeDemo.heroChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="p-6 sm:p-7">
                <p
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  Active concept
                </p>
                <h4 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold leading-tight">
                  {activeDemo.hero.headline}
                </h4>
                <p
                  className="mt-4 text-sm leading-7"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  {activeDemo.hero.description}
                </p>

                <div
                  className="mt-6 rounded-[26px] border p-4"
                  style={{ borderColor: tone.border }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.28em]"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    {activeDemo.interactive.title}
                  </p>
                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    {activeDemo.interactive.description}
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  {activeDemo.interactive.items.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border p-4"
                      style={{ borderColor: 'var(--page-border)' }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold">{item.title}</p>
                        <span
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{ backgroundColor: tone.glow }}
                        >
                          {item.label ||
                            `Step ${(index + 1).toString().padStart(2, '0')}`}
                        </span>
                      </div>
                      <p
                        className="mt-2 text-sm leading-7"
                        style={{ color: 'var(--page-text-muted)' }}
                      >
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={getDemoPath(activeDemo)}
                    className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
                    style={{
                      backgroundColor: 'var(--page-accent)',
                      color: 'var(--page-accent-contrast)',
                    }}
                  >
                    View this demo
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
                    style={{
                      borderColor: 'var(--page-border)',
                      backgroundColor: 'var(--page-surface)',
                    }}
                  >
                    Adapt it for a client
                  </a>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {demos.map((demo, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={demo.id}
                  type="button"
                  className="group rounded-[24px] border p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(40,29,20,0.14)]"
                  style={{
                    borderColor: isActive ? tone.border : 'var(--page-border)',
                    backgroundColor: isActive
                      ? 'var(--page-surfaceStrong)'
                      : 'var(--page-surface)',
                    boxShadow: isActive ? `0 18px 50px ${tone.glow}` : 'none',
                  }}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                >
                  <div className="overflow-hidden rounded-[18px]">
                    <ReliableImage
                      src={demo.hero.image}
                      alt=""
                      loading="lazy"
                      className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{ color: 'var(--page-text-muted)' }}
                    >
                      {styleMeta[demo.styleVariant].label}
                    </p>
                    <span
                      className="text-xs"
                      style={{ color: 'var(--page-text-muted)' }}
                    >
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h5 className="mt-2 font-['Space_Grotesk',system-ui,sans-serif] text-xl font-bold">
                    {demo.title}
                  </h5>
                  <p
                    className="mt-2 text-sm leading-7"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    {demo.heroChips.slice(0, 2).join(' / ')}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
