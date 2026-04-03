import { WelcomePopup } from '../../components/home/WelcomePopup'
import { SiteLayout } from '../../components/layout/SiteLayout'
import { homePalette } from '../../theme/palettes/home'
import { demosByCategory, getDemoPath } from '../../config/landings'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ReliableImage } from '../../components/media/ReliableImage'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaPalette, FaUserCheck, FaChartLine, FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa'

export function HomePage() {
  const navigate = useNavigate()
  const [currentIndices, setCurrentIndices] = useState<Record<string, number>>({
    manufacturing: 0,
    services: 0,
    ecommerce: 0,
    study: 0,
  });

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
        <WelcomePopup />
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
                <a href="#benefits" className="font-bold py-3 px-6 rounded-lg shadow-lg transition-colors" style={{ backgroundColor: 'var(--page-surface)', color: 'var(--page-accent)' }}>
                  Learn More
                </a>
                <a href="/services/motion-transformation" className="font-bold py-3 px-6 rounded-lg shadow-lg transition-colors" style={{ backgroundColor: 'var(--page-surface)', color: '#73af73' }}>
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
                onClick={() => navigate('/services/motion-transformation')}
                style={{ color: 'var(--page-text-muted)' }}>
                <FaArrowRight className="w-8 h-8 cursor-pointer hover:text-teal-500 transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* Demos Section */}
        <section id="demos" className="py-20" style={{ backgroundColor: 'var(--page-bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Demo sites</h2>
              <p className="mt-2 text-lg" style={{ color: 'var(--page-text-muted)' }}>Explore Landing Pages We Can Create for You</p>
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
        <section id="benefits" className="py-20" style={{ backgroundColor: 'var(--page-bg)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Why Choose Us?</h2>
              <p className="mt-2 text-lg" style={{ color: 'var(--page-text-muted)' }}>We deliver results through our proven process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg text-center shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
                <div className="flex items-center justify-center h-16 w-16 bg-teal-500 text-white rounded-full mx-auto mb-4">
                  <FaPalette className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Stunning Visuals</h3>
                <p className="mt-2" style={{ color: 'var(--page-text-muted)' }}>Eye-catching designs that leave a lasting impression.</p>
              </div>
              <div className="p-8 rounded-lg text-center shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
                <div className="flex items-center justify-center h-16 w-16 bg-teal-500 text-white rounded-full mx-auto mb-4">
                  <FaUserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">User-Centric</h3>
                <p className="mt-2" style={{ color: 'var(--page-text-muted)' }}>Intuitive interfaces that are a joy to use.</p>
              </div>
              <div className="p-8 rounded-lg text-center shadow-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
                <div className="flex items-center justify-center h-16 w-16 bg-teal-500 text-white rounded-full mx-auto mb-4">
                  <FaChartLine className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Conversion-Focused</h3>
                <p className="mt-2" style={{ color: 'var(--page-text-muted)' }}>Designs that are optimized to drive your business goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="py-20" style={{ backgroundColor: 'var(--page-bg-alt)' }}>
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
        </section> */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg-alt)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl shadow-xl overflow-hidden" style={{ backgroundColor: 'var(--page-surface)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Half - About / Intro */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing</h2>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--page-text-muted)' }}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                    Whether you need a modern landing page or a full-scale web application, let's build it together.
                  </p>
                </div>
                
                {/* Right Half - Contact Info */}
                <div className="p-10 md:p-16 flex flex-col justify-center" style={{ backgroundColor: 'var(--page-bg)' }}>
                  <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                  <div className="space-y-8">
                    <a href="mailto:mkarthik1729@gmail.com" className="flex items-center group">
                      <FaEnvelope className="text-4xl mr-6 text-teal-500 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--page-text-muted)' }}>Email</p>
                        <p className="text-xl font-medium group-hover:text-teal-500 transition-colors">mkarthik1729@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="tel:+917671859776" className="flex items-center group">
                      <FaPhoneAlt className="text-4xl mr-6 text-teal-500 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--page-text-muted)' }}>Phone</p>
                        <p className="text-xl font-medium group-hover:text-teal-500 transition-colors">+91 76718 59776</p>
                      </div>
                    </a>
                    
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="flex items-center group">
                      <FaLinkedin className="text-4xl mr-6 text-teal-500 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--page-text-muted)' }}>LinkedIn</p>
                        <p className="text-xl font-medium group-hover:text-teal-500 transition-colors">Connect with me</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
