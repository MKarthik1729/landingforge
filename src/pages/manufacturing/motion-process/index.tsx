import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ManufacturingMotionProcessNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { manufacturingMotionProcessPalette } from '../../../theme/palettes/manufacturing/motion-process'
import { manufacturingMotionProcessDemo } from '../../../config/landings/manufacturing/motion-process'
import { useUiStore } from '../../../stores/useUiStore'

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

export function ManufacturingMotionProcessPage() {
  const theme = useUiStore((state) => state.theme)
  const isDark = theme === 'dark'

  return (
    <SiteLayout
      palette={manufacturingMotionProcessPalette}
      navbarMode={manufacturingMotionProcessDemo.navbarMode}
      currentCategory={manufacturingMotionProcessDemo.category}
      title={manufacturingMotionProcessDemo.title}
      customNavbar={<ManufacturingMotionProcessNavbar />}
    >
      <main>
        {/* Hero Section - Cool Drinks Premium */}
        <motion.section
          className="relative py-24 overflow-hidden"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #1c0f07 0%, #2d1708 100%)'
              : 'linear-gradient(135deg, #fff6ef 0%, #ffe8d4 100%)',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.div variants={textVariants}>
                  <span
                    className="inline-block text-sm font-bold mb-4 px-4 py-2 rounded-full"
                    style={{
                      background: isDark ? 'rgba(251, 146, 60, 0.2)' : 'rgba(249, 115, 22, 0.15)',
                      color: isDark ? '#fb923c' : '#f97316',
                    }}
                  >
                    ✨ Premium Beverage Crafting
                  </span>
                </motion.div>

                <motion.h1
                  variants={textVariants}
                  className="text-5xl md:text-6xl font-bold mb-6"
                  style={{ color: isDark ? '#fff0e5' : '#2c1607' }}
                >
                  CoolBreeze Premium Beverages
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  className="text-xl mb-8"
                  style={{ color: isDark ? '#efb894' : '#7b5840' }}
                >
                  Where innovation meets taste. We craft premium cold beverages with cutting-edge
                  refrigeration technology and sustainable ingredients.
                </motion.p>

                <motion.div
                  variants={textVariants}
                  className="flex gap-4"
                >
                  <button
                    className="px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105"
                    style={{
                      background: isDark ? '#fb923c' : '#f97316',
                      color: isDark ? '#1c0f07' : '#fff6ef',
                    }}
                  >
                    Explore Our Line →
                  </button>
                  <button
                    className="px-8 py-3 rounded-lg font-bold border-2 transition-all hover:scale-105"
                    style={{
                      borderColor: isDark ? '#fb923c' : '#f97316',
                      color: isDark ? '#fb923c' : '#f97316',
                    }}
                  >
                    Schedule Tour
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/manufacturing/motion-process/hero.jpg"
                  alt="CoolBreeze Production Line"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Production Process Section */}
        <motion.section
          className="py-24"
          style={{
            background: isDark ? 'rgba(38, 22, 11, 0.4)' : 'rgba(240, 235, 225, 0.5)',
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
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: isDark ? '#fff0e5' : '#2c1607' }}
              >
                Our Production Journey
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="text-xl max-w-2xl mx-auto"
                style={{ color: isDark ? '#efb894' : '#7b5840' }}
              >
                From source to bottle, every step ensures premium quality and taste
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {[
                {
                  emoji: '💧',
                  title: 'Source Selection',
                  desc: 'Premium water from mountain springs',
                },
                {
                  emoji: '🍃',
                  title: 'Ingredient Prep',
                  desc: 'Natural flavors & organic extracts',
                },
                {
                  emoji: '❄️',
                  title: 'Advanced Cooling',
                  desc: 'Precision temperature control',
                },
                {
                  emoji: '⭐',
                  title: 'Quality Assurance',
                  desc: 'Lab-tested every batch',
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="text-center p-6 rounded-xl"
                  style={{
                    background: isDark
                      ? 'rgba(49, 29, 18, 0.6)'
                      : 'rgba(255, 252, 247, 0.8)',
                    border: isDark ? 'rgba(251, 146, 60, 0.2)' : 'rgba(249, 115, 22, 0.15)',
                    borderWidth: '1px',
                  }}
                >
                  <div className="text-4xl mb-4">{step.emoji}</div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: isDark ? '#fff0e5' : '#2c1607' }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: isDark ? '#efb894' : '#7b5840' }}>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Product Showcase Section */}
        <motion.section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/manufacturing/motion-process/process-1.jpg"
                  alt="Beverage Production"
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
                  style={{ color: isDark ? '#fff0e5' : '#2c1607' }}
                >
                  Signature Collections
                </motion.h2>

                {[
                  'CoolBreeze Citrus - Refreshing lemon & lime blend',
                  'Berry Chill - Mixed berry with antioxidants',
                  'Tropical Fusion - Mango, passion fruit, coconut',
                  'Mint Serenity - Cooling peppermint infusion',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-4 mb-4 p-3 rounded-lg"
                    style={{
                      background: isDark
                        ? 'rgba(49, 29, 18, 0.3)'
                        : 'rgba(249, 115, 22, 0.05)',
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">🥤</span>
                    <span style={{ color: isDark ? '#fff0e5' : '#2c1607' }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Technology & Sustainability */}
        <motion.section
          className="py-24"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #2d1708 0%, #1c0f07 100%)'
              : 'linear-gradient(135deg, #fff6ef 0%, #f0ebe1 100%)',
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Eco-Friendly Packaging',
                  image: '/images/manufacturing/motion-process/process-2.jpg',
                  desc: '100% recyclable biodegradable bottles',
                },
                {
                  title: 'Smart Refrigeration',
                  image: '/images/manufacturing/motion-process/process-3.jpg',
                  desc: 'AI-optimized temperature systems',
                },
                {
                  title: 'Zero Waste Process',
                  image: '/images/manufacturing/motion-process/products.jpg',
                  desc: 'Sustainable production methods',
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: isDark ? '#fff0e5' : '#2c1607' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{ color: isDark ? '#efb894' : '#7b5840' }}
                  >
                    {feature.desc}
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
              ? 'rgba(49, 29, 18, 0.5)'
              : 'rgba(249, 115, 22, 0.05)',
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
              style={{ color: isDark ? '#fff0e5' : '#2c1607' }}
            >
              Join Our Refreshing Revolution
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: isDark ? '#efb894' : '#7b5840' }}
            >
              Partner with us to bring premium cold beverages to your market. Discover our
              wholesale programs and distribution opportunities.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                style={{
                  background: isDark ? '#fb923c' : '#f97316',
                  color: isDark ? '#1c0f07' : '#fff6ef',
                }}
              >
                Get Wholesale Pricing
              </button>
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:scale-105"
                style={{
                  borderColor: isDark ? '#fb923c' : '#f97316',
                  color: isDark ? '#fb923c' : '#f97316',
                }}
              >
                Contact Sales Team
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </SiteLayout>
  )
}
