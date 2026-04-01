import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ManufacturingDepthCertificationsNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { manufacturingDepthCertificationsPalette } from '../../../theme/palettes/manufacturing/depth-certifications'
import { manufacturingDepthCertificationsDemo } from '../../../config/landings/manufacturing/depth-certifications'
import { useUiStore } from '../../../stores/useUiStore'

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const popVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export function ManufacturingDepthCertificationsPage() {
  const theme = useUiStore((state) => state.theme)
  const isDark = theme === 'dark'

  return (
    <SiteLayout
      palette={manufacturingDepthCertificationsPalette}
      navbarMode={manufacturingDepthCertificationsDemo.navbarMode}
      currentCategory={manufacturingDepthCertificationsDemo.category}
      title={manufacturingDepthCertificationsDemo.title}
      customNavbar={<ManufacturingDepthCertificationsNavbar />}
    >
      <main>
        {/* Hero Section - Playful Yet Professional */}
        <motion.section
          className="relative py-24 overflow-hidden"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #2a1708 0%, #0d2116 100%)'
              : 'linear-gradient(135deg, #fef9e7 0%, #f0ebe1 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-10 right-10 w-32 h-32 rounded-full"
              style={{
                background: isDark
                  ? 'radial-gradient(circle, #15803d, transparent)'
                  : 'radial-gradient(circle, #d97706, transparent)',
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.div variants={popVariants}>
                  <span
                    className="inline-block text-sm font-bold mb-4 px-4 py-2 rounded-full"
                    style={{
                      background: isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(217, 119, 6, 0.15)',
                      color: isDark ? '#22c55e' : '#d97706',
                    }}
                  >
                    🎨 World-Class Toy Manufacturing
                  </span>
                </motion.div>

                <motion.h1
                  variants={textVariants}
                  className="text-5xl md:text-6xl font-bold mb-6"
                  style={{ color: isDark ? '#edf8f0' : '#0d2116' }}
                >
                  PlaySafe Toys
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  className="text-xl mb-6"
                  style={{ color: isDark ? '#a7c7b1' : '#5f7269' }}
                >
                  Certified excellence in toy manufacturing. Every product tested to the highest
                  safety standards and designed to spark joy and imagination.
                </motion.p>

                <motion.div
                  variants={textVariants}
                  className="space-y-3 mb-8"
                >
                  {[
                    'ASTM F963 Certified',
                    'ISO 8124 Compliant',
                    'CE Marked Safety',
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      variants={popVariants}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xl">✓</span>
                      <span style={{ color: isDark ? '#edf8f0' : '#0d2116' }}>
                        {cert}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  variants={textVariants}
                  className="px-8 py-4 rounded-lg font-bold transition-all hover:scale-105"
                  style={{
                    background: isDark ? '#22c55e' : '#15803d',
                    color: isDark ? '#08140d' : '#ffffff',
                  }}
                >
                  Request Product Catalog
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/manufacturing/depth-certifications/hero.jpg"
                  alt="PlaySafe Manufacturing Facility"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Certification Stack Section */}
        <motion.section className="py-24">
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
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: isDark ? '#edf8f0' : '#0d2116' }}
              >
                Our Quality & Safety Stack
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="text-xl max-w-2xl mx-auto"
                style={{ color: isDark ? '#a7c7b1' : '#5f7269' }}
              >
                Rigorous certifications ensuring every toy meets global safety standards
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {[
                  { emoji: '🛡️', title: 'Safety Testing', desc: 'Toxicity & Material Analysis' },
                  { emoji: '⭐', title: 'Quality Control', desc: '100% Batch Inspection' },
                  { emoji: '⚡', title: 'Performance', desc: 'Durability & Wear Testing' },
                  { emoji: '👶', title: 'Child Safety', desc: 'Age-Appropriate Design' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={popVariants}
                    className="p-6 rounded-xl flex items-start gap-4"
                    style={{
                      background: isDark
                        ? 'rgba(34, 197, 94, 0.1)'
                        : 'rgba(217, 119, 6, 0.08)',
                      border: isDark
                        ? '1px solid rgba(34, 197, 94, 0.2)'
                        : '1px solid rgba(217, 119, 6, 0.2)',
                    }}
                  >
                    <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                    <div>
                      <h3
                        className="font-bold text-lg mb-1"
                        style={{ color: isDark ? '#edf8f0' : '#0d2116' }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: isDark ? '#a7c7b1' : '#5f7269' }}>
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
              >
                <img
                  src="/images/manufacturing/depth-certifications/process-2.jpg"
                  alt="Quality Testing Lab"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Product Lines Showcase */}
        <motion.section
          className="py-24"
          style={{
            background: isDark ? 'rgba(34, 197, 94, 0.05)' : 'rgba(217, 119, 6, 0.05)',
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
                className="text-4xl font-bold mb-4"
                style={{ color: isDark ? '#edf8f0' : '#0d2116' }}
              >
                PlaySafe Collections
              </motion.h2>
              <motion.p
                variants={textVariants}
                style={{ color: isDark ? '#a7c7b1' : '#5f7269' }}
              >
                Handcrafted toys for every age group
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
                  name: 'Infant Wonder',
                  image: '/images/manufacturing/depth-certifications/hero.jpg',
                  desc: '0-12 months: Sensory development toys',
                },
                {
                  name: 'Toddler Builders',
                  image: '/images/manufacturing/depth-certifications/process-2.jpg',
                  desc: '1-3 years: Building & learning sets',
                },
                {
                  name: 'Adventure Plus',
                  image: '/images/manufacturing/depth-certifications/process-1.jpg',
                  desc: '3+ years: Educational & action toys',
                },
              ].map((collection, idx) => (
                <motion.div
                  key={idx}
                  variants={popVariants}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: isDark ? '#edf8f0' : '#0d2116' }}
                  >
                    {collection.name}
                  </h3>
                  <p style={{ color: isDark ? '#a7c7b1' : '#5f7269' }}>
                    {collection.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Sustainability Section */}
        <motion.section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/manufacturing/depth-certifications/hero.jpg"
                  alt="Sustainable Materials"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.h2
                  variants={textVariants}
                  className="text-4xl font-bold mb-6"
                  style={{ color: isDark ? '#edf8f0' : '#0d2116' }}
                >
                  Eco-Conscious Manufacturing
                </motion.h2>

                <motion.p
                  variants={textVariants}
                  className="text-lg mb-6"
                  style={{ color: isDark ? '#a7c7b1' : '#5f7269' }}
                >
                  We're committed to sustainable toy production that protects both children
                  and our planet.
                </motion.p>

                {[
                  'Non-toxic, biodegradable materials',
                  'FSC-certified sustainable wood',
                  'Water-based, lead-free paints',
                  'Zero-waste manufacturing process',
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={popVariants}
                    className="flex items-center gap-3 mb-4"
                  >
                    <span className="text-2xl">♻️</span>
                    <span
                      style={{
                        color: isDark ? '#edf8f0' : '#0d2116',
                      }}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-24 text-center"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #1a2e1f 0%, #0d2116 100%)'
              : 'linear-gradient(135deg, #fef9e7 0%, #e4efe8 100%)',
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
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: isDark ? '#edf8f0' : '#0d2116' }}
            >
              Bring Safe Joy to Children Worldwide
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: isDark ? '#a7c7b1' : '#5f7269' }}
            >
              Partner with PlaySafe for certified, safe, and delightful toys. Request our full
              certification documentation and wholesale rates.
            </motion.p>
            <motion.div variants={textVariants} className="flex gap-4 justify-center flex-wrap">
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                style={{
                  background: isDark ? '#22c55e' : '#15803d',
                  color: isDark ? '#08140d' : '#ffffff',
                }}
              >
                Download Certifications
              </button>
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:scale-105"
                style={{
                  borderColor: isDark ? '#22c55e' : '#15803d',
                  color: isDark ? '#22c55e' : '#15803d',
                }}
              >
                Schedule Quality Audit
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </SiteLayout>
  )
}
