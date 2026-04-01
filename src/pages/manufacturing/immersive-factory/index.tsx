import { motion } from 'framer-motion'
import { ManufacturingImmersiveFactoryNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { manufacturingImmersiveFactoryPalette } from '../../../theme/palettes/manufacturing/immersive-factory'
import { manufacturingImmersiveFactoryDemo } from '../../../config/landings/manufacturing/immersive-factory'
import { useUiStore } from '../../../stores/useUiStore'

import type { Variants } from 'framer-motion'

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}

export function ManufacturingImmersiveFactoryPage() {
  const theme = useUiStore((state) => state.theme)
  const isDark = theme === 'dark'

  return (
    <SiteLayout
      palette={manufacturingImmersiveFactoryPalette}
      navbarMode={manufacturingImmersiveFactoryDemo.navbarMode}
      currentCategory={manufacturingImmersiveFactoryDemo.category}
      title={manufacturingImmersiveFactoryDemo.title}
      customNavbar={<ManufacturingImmersiveFactoryNavbar />}
    >
      <main>
        {/* Hero Section - Immersive */}
        <motion.section
          className="relative h-screen overflow-hidden flex items-center"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #0a1628 0%, #1a2e42 100%)'
              : 'linear-gradient(135deg, #f0f4f8 0%, #dbe5f0 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill={isDark ? 'rgba(77, 163, 255, 0.1)' : 'rgba(0, 102, 204, 0.1)'}
                animate={{ r: [80, 100, 80] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.circle
                cx="1100"
                cy="500"
                r="100"
                fill={isDark ? 'rgba(77, 163, 255, 0.1)' : 'rgba(0, 102, 204, 0.1)'}
                animate={{ r: [100, 130, 100] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl"
            >
              <motion.span
                variants={textVariants}
                className="inline-block text-sm font-bold mb-4 px-4 py-2 rounded-full"
                style={{
                  background: isDark ? 'rgba(77, 163, 255, 0.2)' : 'rgba(0, 102, 204, 0.15)',
                  color: isDark ? '#4da3ff' : '#0066cc',
                }}
              >
                🏭 Advanced Automotive Manufacturing
              </motion.span>

              <motion.h1
                variants={textVariants}
                className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}
              >
                ProDrive Automotive
              </motion.h1>

              <motion.p
                variants={textVariants}
                className="text-2xl mb-8"
                style={{ color: isDark ? '#94a9bf' : '#475569' }}
              >
                Precision-engineered vehicles manufactured with cutting-edge robotics and
                AI-powered quality systems.
              </motion.p>

              <motion.div
                variants={textVariants}
                className="flex gap-4 flex-wrap"
              >
                <button
                  className="px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                  style={{
                    background: isDark ? '#4da3ff' : '#0066cc',
                    color: isDark ? '#0a1628' : '#ffffff',
                  }}
                >
                  Explore Factory
                </button>
                <button
                  className="px-10 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:scale-105"
                  style={{
                    borderColor: isDark ? '#4da3ff' : '#0066cc',
                    color: isDark ? '#4da3ff' : '#0066cc',
                  }}
                >
                  Virtual Tour
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Production Capacity Section */}
        <motion.section
          className="py-24"
          style={{
            background: isDark
              ? 'rgba(77, 163, 255, 0.05)'
              : 'rgba(0, 102, 204, 0.05)',
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2
                variants={textVariants}
                className="text-5xl font-bold mb-4"
                style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}
              >
                Production Excellence
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="text-xl max-w-2xl mx-auto"
                style={{ color: isDark ? '#94a9bf' : '#475569' }}
              >
                State-of-the-art manufacturing with 150,000+ vehicles produced annually
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { emoji: '⚡', label: 'Annual Production', value: '150K+ Units', color: '#0066cc' },
                { emoji: '📊', label: 'Quality Check', value: '99.97% Pass Rate', color: '#0066cc' },
                { emoji: '🚀', label: 'Innovation', value: 'AI-Powered Systems', color: '#0066cc' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={slideInVariants}
                  className="p-8 rounded-2xl text-center"
                  style={{
                    background: isDark
                      ? 'rgba(31, 58, 82, 0.6)'
                      : 'rgba(219, 229, 240, 0.6)',
                    border: isDark
                      ? '1px solid rgba(77, 163, 255, 0.2)'
                      : '1px solid rgba(0, 102, 204, 0.2)',
                  }}
                >
                  <div className="text-5xl mb-4">{stat.emoji}</div>
                  <div className="text-sm font-semibold mb-2" style={{ color: isDark ? '#94a9bf' : '#475569' }}>
                    {stat.label}
                  </div>
                  <div className="text-3xl font-bold" style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}>
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Manufacturing Process */}
        <motion.section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.h2
                  variants={textVariants}
                  className="text-5xl font-bold mb-8"
                  style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}
                >
                  Intelligent Manufacturing
                </motion.h2>

                {[
                  { emoji: '🤖', title: 'AI-Powered QC', desc: 'Real-time defect detection' },
                  { emoji: '⚙️', title: 'Robotic Assembly', desc: 'Precision welding & assembly' },
                  { emoji: '🛡️', title: 'Safety Systems', desc: 'Advanced collision avoidance' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={slideInVariants}
                    className="flex gap-4 mb-8 p-4 rounded-lg"
                    style={{
                      background: isDark
                        ? 'rgba(77, 163, 255, 0.1)'
                        : 'rgba(0, 102, 204, 0.08)',
                    }}
                  >
                    <div className="text-4xl flex-shrink-0">{item.emoji}</div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-1"
                        style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: isDark ? '#94a9bf' : '#475569' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/manufacturing/immersive-factory/factory-workers.jpg"
                  alt="Advanced Manufacturing"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Facility Gallery */}
        <motion.section
          className="py-24"
          style={{
            background: isDark ? 'rgba(77, 163, 255, 0.03)' : 'rgba(0, 102, 204, 0.03)',
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <motion.h2
                variants={textVariants}
                className="text-5xl font-bold mb-4"
                style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}
              >
                Facility Showcase
              </motion.h2>
              <motion.p
                variants={textVariants}
                style={{ color: isDark ? '#94a9bf' : '#475569' }}
              >
                Tour our world-class manufacturing centers
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Assembly Hall',
                  image: '/images/manufacturing/immersive-factory/factory-area-1.jpg',
                  desc: 'Precision robotic assembly & welding',
                },
                {
                  title: 'Quality Lab',
                  image: '/images/manufacturing/immersive-factory/factory-area-2.jpg',
                  desc: 'AI-powered testing & inspection',
                },
                {
                  title: 'Paint Shop',
                  image: '/images/manufacturing/immersive-factory/factory-area-3.jpg',
                  desc: 'Advanced coating & finishing',
                },
              ].map((facility, idx) => (
                <motion.div
                  key={idx}
                  variants={slideInVariants}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 h-72">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      <span className="text-white font-bold text-lg">Explore →</span>
                    </div>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}
                  >
                    {facility.title}
                  </h3>
                  <p style={{ color: isDark ? '#94a9bf' : '#475569' }}>
                    {facility.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-24 text-center"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #0d2632 0%, #1a3a52 100%)'
              : 'linear-gradient(135deg, #dbe5f0 0%, #f0f4f8 100%)',
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="container mx-auto px-4"
          >
            <motion.h2
              variants={textVariants}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: isDark ? '#e8f0f8' : '#0f2a47' }}
            >
              Experience the Future of Automotive
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: isDark ? '#94a9bf' : '#475569' }}
            >
              Schedule a virtual tour or visit our facility to discover how ProDrive is
              revolutionizing automotive manufacturing.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                style={{
                  background: isDark ? '#4da3ff' : '#0066cc',
                  color: isDark ? '#0a1628' : '#ffffff',
                }}
              >
                Book Factory Visit
              </button>
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:scale-105"
                style={{
                  borderColor: isDark ? '#4da3ff' : '#0066cc',
                  color: isDark ? '#4da3ff' : '#0066cc',
                }}
              >
                Virtual Tour Now
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </SiteLayout>
  )
}
