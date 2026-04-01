import { SiteLayout } from '../../components/layout/SiteLayout'
import { homePalette } from '../../theme/palettes/home'
import { demosByCategory, getDemoPath } from '../../config/landings'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ReliableImage } from '../../components/media/ReliableImage'
import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()
  const [currentIndices, setCurrentIndices] = useState<Record<string, number>>({
    manufacturing: 0,
    services: 0,
    ecommerce: 0,
    study: 0,
  });
  // const [showFeaturePopup, setShowFeaturePopup] = useState(true)

  // useEffect(() => {
  //   const popupTimer = window.setTimeout(() => setShowFeaturePopup(false), 11000)
  //   return () => {
  //     window.clearTimeout(popupTimer)
  //   }
  // }, [])

  useEffect(() => {
    const categories = Object.keys(demosByCategory) as (keyof typeof demosByCategory)[];
    const intervals = categories.map((category, index) => {
        return setInterval(() => {
            setCurrentIndices((prev) => ({
                ...prev,
                [category]: (prev[category] + 1) % demosByCategory[category].length,
            }));
        }, 5000 + index * 1250);
    });

    return () => {
        intervals.forEach(clearInterval);
    };
}, []);

  return (
    <SiteLayout
      palette={homePalette}
      navbarMode="solid"
      title="Design Agency"
    >
      <div style={{ backgroundColor: 'var(--page-bg)', color: 'var(--page-text)' }}>
        {/* {showFeaturePopup && (
          <div className="fixed top-4 right-4 z-[80] max-w-xs rounded-2xl border border-brand-300 bg-white/95 p-4 text-sm shadow-lg backdrop-blur transition-all duration-300 dark:border-slate-600 dark:bg-slate-900/90">
            <div className="flex items-start justify-between gap-2">
              <strong className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Quick tips
              </strong>
              <button
                onClick={() => setShowFeaturePopup(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                aria-label="Close popup"
              >
                ✕
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-xs">
              <li>Right-bottom: mode switch (dark/light) is always available.</li>
              <li>Top navbar: use the categories to browse demos.</li>
              <li>Next demo: the button on the right of demo navbars loads the next demo.</li>
            </ul>
          </div>
        )} */}
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Headline */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Modern Design for Modern Brands
              </h1>
              <p className="mt-4 text-lg" style={{ color: 'var(--page-text-muted)' }}>
                We build stunning websites that captivate your audience and drive results.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                <a href="#contact" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition-colors">
                  Get in Touch
                </a>
                <a href="#benefits" className="font-bold py-3 px-6 rounded-lg shadow-lg transition-colors" style={{ backgroundColor: 'var(--page-surface)', color: 'var(--page-accent)'}}>
                  Learn More
                </a>
                <a href="/services/immersive-brand" className="font-bold py-3 px-6 rounded-lg shadow-lg transition-colors" style={{ backgroundColor: 'var(--page-surface)', color: '#73af73'}}>
                  Browse Demos
                </a>
              </div>
            </div>

            {/* Right Side: Isometric Screen Mockups */}
            <div className="relative h-96 flex items-center justify-center">
                <div className="absolute w-64 h-40 rounded-lg shadow-2xl transform -rotate-6 translate-x-10 translate-y-10" style={{ backgroundColor: 'var(--page-surface)', transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }}>
                    <div className="h-4 rounded-t-lg" style={{ backgroundColor: 'var(--page-surface-strong)' }}></div>
                    <p className="p-4">Blog</p>
                </div>
                <div className="absolute w-80 h-48 rounded-lg shadow-2xl transform rotate-3 -translate-x-4" style={{ backgroundColor: 'var(--page-surface)', transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg) scale(1.1)' }}>
                    <div className="h-5 rounded-t-lg" style={{ backgroundColor: 'var(--page-surface-strong)' }}></div>
                    <p className="p-4">Agency Portfolio</p>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 opacity-20 rounded-lg"></div>
                </div>
                <div className="absolute w-72 h-44 rounded-lg shadow-2xl transform rotate-6 -translate-x-10 -translate-y-10" style={{ backgroundColor: 'var(--page-surface)', transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)' }}>
                     <div className="h-4 rounded-t-lg" style={{ backgroundColor: 'var(--page-surface-strong)' }}></div>
                    <p className="p-4">Corporate</p>
                </div>
                <div className="absolute bottom-0 right-20"
                onClick={() => navigate('/services/immersive-brand')}
                style={{ color: 'var(--page-text-muted)' }}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
            </div>
          </div>
        </section>

        {/* Demos Section */}
        <section id="demos" className="py-20" style={{ backgroundColor: 'var(--page-bg-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Our Work</h2>
              <p className="mt-2 text-lg" style={{ color: 'var(--page-text-muted)' }}>A selection of our finest landing pages.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(demosByCategory).map(([category, demos]) => {
                const demo = demos[currentIndices[category as keyof typeof currentIndices]];
                return (
                  <Link to={getDemoPath(demo)} key={demo.id} className="demo-card mb-16 block">
                    <h3 className="text-3xl font-bold mb-8 text-center">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    <div className="grid grid-cols-1 gap-8 items-center">
                      <div>
                        <ReliableImage src={demo.hero.image} alt={demo.hero.imageAlt} className="rounded-lg shadow-lg h-64 w-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{demo.title}</h4>
                        <p className="mt-2" style={{ color: 'var(--page-text-muted)' }}>{demo.summary}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20" style={{ backgroundColor: 'var(--page-bg)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Why Choose Us?</h2>
              <p className="mt-2 text-lg" style={{ color: 'var(--page-text-muted)' }}>We deliver results through our proven process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg text-center shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
                <div className="flex items-center justify-center h-16 w-16 bg-teal-500 text-white rounded-full mx-auto mb-4">
                  {/* Icon Placeholder */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold">Stunning Visuals</h3>
                <p className="mt-2" style={{ color: 'var(--page-text-muted)' }}>Eye-catching designs that leave a lasting impression.</p>
              </div>
              <div className="p-8 rounded-lg text-center shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
                <div className="flex items-center justify-center h-16 w-16 bg-teal-500 text-white rounded-full mx-auto mb-4">
                  {/* Icon Placeholder */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
                </div>
                <h3 className="text-2xl font-bold">User-Centric</h3>
                <p className="mt-2" style={{ color: 'var(--page-text-muted)' }}>Intuitive interfaces that are a joy to use.</p>
              </div>
              <div className="p-8 rounded-lg text-center shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
                <div className="flex items-center justify-center h-16 w-16 bg-teal-500 text-white rounded-full mx-auto mb-4">
                  {/* Icon Placeholder */}
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold">Conversion-Focused</h3>
                <p className="mt-2" style={{ color: 'var(--page-text-muted)' }}>Designs that are optimized to drive your business goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20" style={{ backgroundColor: 'var(--page-bg-alt)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Let's Create Something Amazing</h2>
              <p className="mt-2 text-lg" style={{ color: 'var(--page-text-muted)' }}>Fill out the form below to get started.</p>
            </div>
            <form className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block font-bold mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500" style={{ borderColor: 'var(--page-border)' }} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="block font-bold mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500" style={{ borderColor: 'var(--page-border)' }} />
                </div>
              </div>
              <div className="form-group mt-6">
                <label htmlFor="message" className="block font-bold mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500" style={{ borderColor: 'var(--page-border)' }}></textarea>
              </div>
              <div className="text-center mt-6">
                <button type="submit" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-600 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ backgroundColor: 'var(--page-bg)' }}>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center" style={{ color: 'var(--page-text-muted)' }}>&copy; 2026 Design Agency. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </SiteLayout>
  )
}
