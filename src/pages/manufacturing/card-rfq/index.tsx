import { motion } from 'framer-motion'
import { ManufacturingCardRfqNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { manufacturingCardRfqPalette } from '../../../theme/palettes/manufacturing/card-rfq'
import { manufacturingCardRfqDemo } from '../../../config/landings/manufacturing/card-rfq'
import { useUiStore } from '../../../stores/useUiStore'

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { y: -10, transition: { duration: 0.3 } },
}

export function ManufacturingCardRfqPage() {
  const theme = useUiStore((state) => state.theme)
  const isDark = theme === 'dark'

  return (
    <SiteLayout
      palette={manufacturingCardRfqPalette}
      navbarMode={manufacturingCardRfqDemo.navbarMode}
      currentCategory={manufacturingCardRfqDemo.category}
      title={manufacturingCardRfqDemo.title}
      customNavbar={<ManufacturingCardRfqNavbar />}
    >
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative py-24 overflow-hidden"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #06161f 0%, #0d2632 100%)'
              : 'linear-gradient(135deg, #f3f6f8 0%, #e7eef2 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-20 right-20 w-40 h-40"
              style={{
                background: isDark
                  ? 'radial-gradient(circle, #22d3ee, transparent)'
                  : 'radial-gradient(circle, #0e7490, transparent)',
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
                <motion.span
                  variants={textVariants}
                  className="inline-block text-sm font-bold mb-4 px-4 py-2 rounded-full"
                  style={{
                    background: isDark ? 'rgba(34, 211, 238, 0.2)' : 'rgba(14, 116, 144, 0.15)',
                    color: isDark ? '#22d3ee' : '#0e7490',
                  }}
                >
                  ⚡ Advanced Component Manufacturing
                </motion.span>

                <motion.h1
                  variants={textVariants}
                  className="text-5xl md:text-6xl font-bold mb-6"
                  style={{ color: isDark ? '#edf8fb' : '#102330' }}
                >
                  TechCore Electronics
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  className="text-xl mb-6"
                  style={{ color: isDark ? '#9cc0ce' : '#5f7482' }}
                >
                  Precision-engineered computer components and semiconductors for global tech leaders.
                </motion.p>

                <motion.div
                  variants={textVariants}
                  className="flex flex-wrap gap-3 mb-8"
                >
                  {['ISO 9001', 'CE Marked', 'RoHS Compliant'].map((cert, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-sm font-semibold"
                      style={{
                        background: isDark
                          ? 'rgba(34, 211, 238, 0.15)'
                          : 'rgba(14, 116, 144, 0.1)',
                        color: isDark ? '#22d3ee' : '#0e7490',
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </motion.div>

                <motion.button
                  variants={textVariants}
                  className="px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center gap-2"
                  style={{
                    background: isDark ? '#22d3ee' : '#0e7490',
                    color: isDark ? '#06161f' : '#ffffff',
                  }}
                >
                  Submit RFQ →
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/manufacturing/card-rfq/manufacturing-process.jpg"
                  alt="Modern Electronics Manufacturing"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* RFQ Process Section */}
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
                className="text-5xl font-bold mb-4"
                style={{ color: isDark ? '#edf8fb' : '#102330' }}
              >
                Quick RFQ Process
              </motion.h2>
              <motion.p
                variants={textVariants}
                className="text-xl max-w-2xl mx-auto"
                style={{ color: isDark ? '#9cc0ce' : '#5f7482' }}
              >
                From specification to quote in minutes
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
                { step: '01', title: 'Submit Specs', desc: 'Share component requirements' },
                { step: '02', title: 'Instant Match', desc: 'AI matches with suppliers' },
                { step: '03', title: 'Get Quotes', desc: 'Multiple competitive quotes' },
                { step: '04', title: 'Place Order', desc: 'Secure your best terms' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover="hover"
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: isDark
                      ? 'rgba(13, 38, 50, 0.6)'
                      : 'rgba(231, 239, 242, 0.5)',
                    border: isDark
                      ? '1px solid rgba(34, 211, 238, 0.2)'
                      : '1px solid rgba(14, 116, 144, 0.15)',
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-3"
                    style={{ color: isDark ? '#22d3ee' : '#0e7490' }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: isDark ? '#edf8fb' : '#102330' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: isDark ? '#9cc0ce' : '#5f7482' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Component Categories */}
        <motion.section
          className="py-24"
          style={{
            background: isDark ? 'rgba(34, 211, 238, 0.05)' : 'rgba(14, 116, 144, 0.05)',
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
                style={{ color: isDark ? '#edf8fb' : '#102330' }}
              >
                What We Manufacture
              </motion.h2>
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
                  emoji: '🔌',
                  name: 'Processors & Chips',
                  desc: 'High-performance semiconductors',
                },
                {
                  emoji: '⚡',
                  name: 'Power Components',
                  desc: 'Efficient voltage regulation',
                },
                {
                  emoji: '🛡️',
                  name: 'Circuit Boards',
                  desc: 'Custom PCB assembly',
                },
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover="hover"
                  className="p-8 rounded-2xl"
                  style={{
                    background: isDark
                      ? 'rgba(16, 35, 48, 0.6)'
                      : 'rgba(255, 255, 255, 0.84)',
                    border: isDark
                      ? '1px solid rgba(34, 211, 238, 0.15)'
                      : '1px solid rgba(14, 116, 144, 0.12)',
                  }}
                >
                  <div className="text-5xl mb-6">{category.emoji}</div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: isDark ? '#edf8fb' : '#102330' }}
                  >
                    {category.name}
                  </h3>
                  <p style={{ color: isDark ? '#9cc0ce' : '#5f7482' }}>
                    {category.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Quality & Certification */}
        <motion.section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/manufacturing/card-rfq/process-1.jpg"
                  alt="Quality Testing"
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
                  className="text-5xl font-bold mb-8"
                  style={{ color: isDark ? '#edf8fb' : '#102330' }}
                >
                  Industry-Leading Quality
                </motion.h2>

                {[
                  'Advanced testing facilities',
                  '100% component inspection',
                  'Environmental compliance',
                  'Traceability & documentation',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    className="flex items-center gap-4 mb-6 p-3 rounded-lg"
                    style={{
                      background: isDark
                        ? 'rgba(34, 211, 238, 0.1)'
                        : 'rgba(14, 116, 144, 0.08)',
                    }}
                  >
                    <span className="flex-shrink-0 text-2xl">✓</span>
                    <span
                      style={{
                        color: isDark ? '#edf8fb' : '#102330',
                      }}
                    >
                      {item}
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
              ? 'linear-gradient(135deg, #0d2632 0%, #06161f 100%)'
              : 'linear-gradient(135deg, #e7eef2 0%, #f3f6f8 100%)',
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
              style={{ color: isDark ? '#edf8fb' : '#102330' }}
            >
              Ready to Source Components?
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: isDark ? '#9cc0ce' : '#5f7482' }}
            >
              Get instant quotes from qualified manufacturers. No hidden costs, transparent
              pricing, and fast turnaround.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center gap-2"
                style={{
                  background: isDark ? '#22d3ee' : '#0e7490',
                  color: isDark ? '#06161f' : '#ffffff',
                }}
              >
                Submit RFQ Now →
              </button>
              <button
                className="px-10 py-4 rounded-lg font-bold text-lg border-2 transition-all hover:scale-105"
                style={{
                  borderColor: isDark ? '#22d3ee' : '#0e7490',
                  color: isDark ? '#22d3ee' : '#0e7490',
                }}
              >
                Talk to Sales
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </SiteLayout>
  )
}
