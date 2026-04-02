import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allDemos, getDemoPath, getNextDemo } from '../../config/landings'

export function CornerNextDemoButton() {
  const { pathname } = useLocation()
  const currentDemo = allDemos.find((demo) => getDemoPath(demo) === pathname) || allDemos[0]
  const [hovered, setHovered] = useState(false)

  const nextDemo = getNextDemo(currentDemo.id)

  return (
    <Link
      to={getDemoPath(nextDemo)}
      className={`fixed right-5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-48 h-48 rounded-full border text-4xl font-bold backdrop-blur transition-all duration-300 hover:scale-110 z-60 ${
        hovered ? 'opacity-100' : 'opacity-0'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--page-surface)',
        color: 'var(--page-text)',
        borderColor: 'var(--page-border)',
        boxShadow: 'var(--page-shadow)',
      }}
      aria-label={`Go to next demo: ${nextDemo.title}`}
    >
      →
    </Link>
  )
}