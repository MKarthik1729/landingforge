import { motion, type Variants } from 'framer-motion'
import { ManufacturingCardRfqNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { manufacturingCardRfqPalette } from '../../../theme/palettes/manufacturing/card-rfq'
import { manufacturingCardRfqDemo } from '../../../config/landings/manufacturing/card-rfq'
import { useUiStore } from '../../../stores/useUiStore'
import { FaMicrochip, FaMemory, FaCogs, FaServer, FaIndustry, FaClipboardCheck, FaShippingFast, FaCheckCircle, FaArrowRight, FaFileContract } from 'react-icons/fa'

const textVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } },
};

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
      <main className={`min-h-screen transition-colors duration-500 font-sans overflow-hidden ${isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Hero Section */}
        <motion.section
          className="relative min-h-[90vh] py-32 flex items-center overflow-hidden border-b border-cyan-900/20"
        >
          <div className="absolute inset-0 z-0">
            <img src="/images/manufacturing/card-rfq/hero-bg.jpg" alt="Circuit Background" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 backdrop-blur-md transition-colors duration-500 ${isDark ? 'bg-slate-950/85' : 'bg-slate-50/90'}`}></div>
            <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-cyan-900/20' : 'from-cyan-500/10'} to-transparent`}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-8"
              >
                <motion.div variants={textVariants} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-wider ${isDark ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' : 'border-cyan-600/20 bg-cyan-50 text-cyan-700'}`}>
                  <FaIndustry className="text-lg" /> Global Semiconductor Foundry
                </motion.div>

                <motion.h1 variants={textVariants} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                  Precision in Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Nanometer.</span>
                </motion.h1>

                <motion.p variants={textVariants} className={`text-xl md:text-2xl leading-relaxed font-medium max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Enterprise-grade computer components, custom PCB assembly, and advanced semiconductor manufacturing for the world's most demanding tech leaders.
                </motion.p>

                <motion.div
                  variants={textVariants}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  {['ISO 9001:2015', 'Class 100 Cleanrooms', 'RoHS Compliant'].map((cert, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border ${isDark ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-white/80 border-slate-200 text-slate-700'} backdrop-blur-sm`}
                    >
                      <FaCheckCircle className="text-cyan-500" />
                      {cert}
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={textVariants} className="pt-6">
                  <button className={`px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-3 shadow-xl ${isDark ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20' : 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-cyan-700/20'}`}>
                    Start Your RFQ <FaArrowRight />
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative hidden lg:block h-[600px]"
              >
                <div className={`absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border ${isDark ? 'border-slate-800' : 'border-white'} ring-1 ring-black/5`}>
                  <img
                    src="/images/manufacturing/card-rfq/facility.jpg"
                    alt="Modern Electronics Manufacturing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <FaServer className="text-3xl text-cyan-400" />
                      <h3 className="text-xl font-bold">Automated Assembly</h3>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">State-of-the-art robotic pick-and-place systems ensuring 99.99% placement accuracy.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* RFQ Process Section */}
        <motion.section className={`py-32 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center mb-20"
            >
              <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Streamlined Quoting Engine</motion.h2>
              <motion.p variants={textVariants} className={`text-xl md:text-2xl max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Our digital procurement platform transforms complex bill-of-materials into accurate, actionable quotes in under 24 hours.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: FaFileContract, title: 'Upload BOM', desc: 'Securely upload your CAD files and bill of materials.' },
                { icon: FaCogs, title: 'DFM Analysis', desc: 'Automated design-for-manufacturing checks run instantly.' },
                { icon: FaClipboardCheck, title: 'Firm Quote', desc: 'Receive a guaranteed quote with lead times and volume tiers.' },
                { icon: FaShippingFast, title: 'Production', desc: 'Track your order from fabrication through to global delivery.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`p-8 rounded-[2rem] border transition-shadow hover:shadow-2xl ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${isDark ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                    <item.icon />
                  </div>
                  <div className="text-sm font-bold tracking-widest text-cyan-500 mb-2 uppercase">Step 0{idx + 1}</div>
                  <h3 className="font-bold text-2xl mb-4">{item.title}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Component Categories */}
        <motion.section className="py-32 border-b border-cyan-900/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mb-16 md:flex md:items-end justify-between gap-8"
            >
              <div className="max-w-2xl">
                <motion.h2 variants={textVariants} className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Core Manufacturing Capabilities</motion.h2>
                <motion.p variants={textVariants} className={`text-xl font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>We operate multiple fabrication lines tailored to distinct levels of component complexity and volume requirements.</motion.p>
              </div>
              <motion.button variants={textVariants} className="mt-8 md:mt-0 text-cyan-500 font-bold hover:text-cyan-600 flex items-center gap-2 group whitespace-nowrap">
                Download Equipment List <span className="transform transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
              </motion.button>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-10"
            >
              {[
                {
                  icon: FaMicrochip,
                  name: 'Microprocessors',
                  desc: 'Advanced node fabrication from 5nm down to 3nm architectures for computing and mobile.',
                  img: 'cpu.jpg'
                },
                {
                  icon: FaMemory,
                  name: 'Memory Modules',
                  desc: 'High-density DRAM and NAND flash assemblies with rigorous burn-in testing protocols.',
                  img: 'memory.jpg'
                },
                {
                  icon: FaCogs,
                  name: 'Circuit Boards',
                  desc: 'Multilayer HDI PCB fabrication and high-speed SMT assembly with automated optical inspection.',
                  img: 'board.jpg'
                },
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="group relative flex flex-col"
                >
                  <div className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 ${isDark ? 'bg-slate-900' : 'bg-slate-200'}`}>
                    <img src={`/images/manufacturing/card-rfq/${category.img}`} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-slate-950/40' : 'from-slate-900 via-slate-900/30'} to-transparent opacity-80`}></div>
                    <div className="absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl text-white border border-white/20">
                      <category.icon />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{category.name}</h3>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{category.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Facility & Quality Assurance */}
        <motion.section className={`py-32 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className={`aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border ${isDark ? 'border-slate-800' : 'border-slate-300'}`}>
                  <img
                    src="/images/manufacturing/card-rfq/board.jpg"
                    alt="Quality Testing and PCB Analysis"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stat Card */}
                <div className={`absolute -right-8 bottom-16 p-8 rounded-3xl shadow-2xl border backdrop-blur-xl ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/90 border-slate-100'}`}>
                  <div className="text-5xl font-black text-cyan-500 mb-2">99.98%</div>
                  <div className={`font-bold tracking-wider uppercase text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>First-Pass Yield Rate</div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  Zero Defect Philosophy.
                </motion.h2>
                <motion.p variants={textVariants} className={`text-xl leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Quality isn't inspected into the product; it's engineered into the process. Our cleanrooms and testing protocols exceed military and aerospace specifications.
                </motion.p>
                
                <div className="space-y-6">
                  {[
                    { title: 'Automated Optical Inspection', desc: '3D AOI machines scan every solder joint and component placement.' },
                    { title: 'In-Circuit & Functional Testing', desc: 'Rigorous electrical verification ensures logic behaves exactly as designed.' },
                    { title: 'Environmental Stress Screening', desc: 'Thermal cycling and vibration tests simulate decades of harsh operation.' },
                    { title: 'Complete Traceability', desc: 'Blockchain-backed component tracking down to the individual resistor level.' },
                  ].map((item, i) => (
                    <motion.div key={i} variants={textVariants} className="flex gap-5">
                      <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
                        <FaCheckCircle />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                        <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="relative py-32 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/manufacturing/card-rfq/cta-bg.jpg" alt="Global Network" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-cyan-950/90 mix-blend-multiply' : 'bg-cyan-900/90 mix-blend-multiply'}`}></div>
          </div>
          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={textVariants} className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Secure Your Supply Chain.
            </motion.h2>
            <motion.p variants={textVariants} className="text-xl md:text-3xl font-medium text-cyan-100 mb-12 leading-relaxed">
              Submit your BOM today and receive a comprehensive manufacturing proposal and timeline within 24 hours.
            </motion.p>
            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-white text-cyan-900 hover:bg-slate-100 rounded-full font-bold text-xl transition-transform transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                Upload BOM <FaArrowRight />
              </button>
              <button className="px-12 py-5 border-2 border-white/30 hover:border-white text-white rounded-full font-bold text-xl transition-all transform hover:scale-105 backdrop-blur-sm">
                Contact Engineering
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </SiteLayout>
  )
}
