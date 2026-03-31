import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDemoPath } from '../../config/landings'
import { categoryMeta, styleMeta } from '../../config/landings/categories'
import type { DemoDefinition } from '../../config/landings/types'
import { ReliableImage } from '../media/ReliableImage'
import {
  categoryTones,
  getInteractionLabel,
  getPreferredDemoIndex,
} from './showcaseShared'

type FeaturedDemoShowcaseProps = {
  demos: readonly DemoDefinition[]
  cycleMs?: number
}

export function FeaturedDemoShowcase({
  demos,
  cycleMs = 5600,
}: FeaturedDemoShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(() =>
    getPreferredDemoIndex(demos),
  )
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setActiveIndex(getPreferredDemoIndex(demos))
  }, [demos])

  useEffect(() => {
    if (demos.length < 2 || isPaused) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % demos.length)
    }, cycleMs)

    return () => window.clearInterval(intervalId)
  }, [cycleMs, demos.length, isPaused])

  if (demos.length === 0) {
    return null
  }

  const activeDemo = demos[activeIndex] ?? demos[0]
  const activeTone = categoryTones[activeDemo.category]

  const moveTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + demos.length) % demos.length)
  }

  return (
    <section
      className="overflow-hidden rounded-[38px] border p-4 sm:p-5"
      style={{
        borderColor: 'var(--page-border)',
        backgroundColor: 'var(--page-surface)',
        boxShadow: 'var(--page-shadow)',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
        <article
          key={activeDemo.id}
          className="home-spotlight-card home-border-glow min-w-0 overflow-hidden rounded-[30px] border"
          style={{
            borderColor: activeTone.border,
            backgroundColor: 'var(--page-surfaceStrong)',
          }}
        >
          <div className="relative min-h-[560px]">
            <ReliableImage
              src={activeDemo.hero.image}
              alt={activeDemo.hero.imageAlt}
              className="home-image-pan absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(14, 11, 9, 0.1) 0%, rgba(14, 11, 9, 0.28) 36%, rgba(14, 11, 9, 0.78) 100%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at top left, ${activeTone.glow}, transparent 48%)`,
              }}
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/14 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                    {categoryMeta[activeDemo.category].label}
                  </span>
                  <span className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/88 backdrop-blur-sm">
                    {styleMeta[activeDemo.styleVariant].label}
                  </span>
                </div>
                <div className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/76 backdrop-blur-sm">
                  {isPaused ? 'Paused while hovering' : 'Auto-rotating showcase'}
                </div>
              </div>

              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/78">
                  {activeDemo.hero.eyebrow}
                </p>
                <h2 className="mt-4 font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {activeDemo.hero.headline}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/78">
                  {activeDemo.hero.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeDemo.heroChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/86 backdrop-blur-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {activeDemo.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[24px] border border-white/14 bg-black/18 p-4 backdrop-blur-sm"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-white/58">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={getDemoPath(activeDemo)}
                    className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
                    style={{
                      backgroundColor: '#fff7ef',
                      color: '#140f0b',
                    }}
                  >
                    Open this demo
                  </Link>
                  <a
                    href={`#${activeDemo.category}`}
                    className="inline-flex rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white/88 backdrop-blur-sm"
                  >
                    Browse {categoryMeta[activeDemo.category].label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="min-w-0 grid gap-3">
          <div
            className="min-w-0 rounded-[28px] border p-4"
            style={{
              borderColor: 'var(--page-border)',
              backgroundColor: 'var(--page-surfaceStrong)',
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.28em]"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Featured rail
            </p>
            <h3 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-2xl font-bold">
              One strong direction at a time.
            </h3>
            <p
              className="mt-3 text-sm leading-7"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Each card swaps imagery, proof points, and interaction style so
              visitors focus on a single story instead of scanning a flat grid.
            </p>
          </div>

          {demos.map((demo, index) => {
            const isActive = index === activeIndex
            const tone = categoryTones[demo.category]

            return (
              <button
                key={demo.id}
                type="button"
                className="group min-w-0 w-full rounded-[26px] border p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(38,28,20,0.14)]"
                style={{
                  borderColor: isActive ? tone.border : 'var(--page-border)',
                  backgroundColor: isActive
                    ? 'var(--page-surfaceStrong)'
                    : 'var(--page-surface)',
                  boxShadow: isActive
                    ? `0 18px 50px ${tone.glow}`
                    : 'none',
                }}
                onClick={() => moveTo(index)}
                aria-pressed={isActive}
              >
                <div className="flex gap-3">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px]">
                    <ReliableImage
                      src={demo.hero.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p
                        className="text-[11px] uppercase tracking-[0.28em]"
                        style={{ color: 'var(--page-text-muted)' }}
                      >
                        {categoryMeta[demo.category].label}
                      </p>
                      <span
                        className="text-xs"
                        style={{ color: 'var(--page-text-muted)' }}
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <h4 className="mt-2 truncate font-['Space_Grotesk',system-ui,sans-serif] text-lg font-semibold">
                      {demo.title}
                    </h4>
                    <p
                      className="mt-1 text-sm"
                      style={{ color: 'var(--page-text-muted)' }}
                    >
                      {getInteractionLabel(demo.interactiveKind)}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ backgroundColor: tone.glow }}
                      >
                        {styleMeta[demo.styleVariant].label}
                      </span>
                      <span
                        className="rounded-full border px-3 py-1 text-xs"
                        style={{ borderColor: 'var(--page-border)' }}
                      >
                        {demo.heroChips[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-3 h-1 overflow-hidden rounded-full"
                  style={{ backgroundColor: 'var(--page-glow)' }}
                >
                  <div
                    key={`${demo.id}-${isActive ? 'active' : 'idle'}`}
                    className={isActive ? 'home-progress-bar h-full w-full' : ''}
                    style={{
                      backgroundColor: tone.accent,
                      animationDuration: `${cycleMs}ms`,
                    }}
                  />
                </div>
              </button>
            )
          })}

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              className="rounded-full border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surfaceStrong)',
              }}
              onClick={() => moveTo(activeIndex - 1)}
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-full px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                backgroundColor: 'var(--page-accent)',
                color: 'var(--page-accent-contrast)',
              }}
              onClick={() => moveTo(activeIndex + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
