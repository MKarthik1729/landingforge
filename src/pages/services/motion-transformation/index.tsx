import { ServicesMotionTransformationNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { servicesMotionTransformationPalette } from '../../../theme/palettes/services/motion-transformation'
import { servicesMotionTransformationDemo } from '../../../config/landings/services/motion-transformation'
import { useUiStore } from '../../../stores/useUiStore'

import { motion, type Variants } from "framer-motion";
import { FaBroom, FaWrench, FaHandSparkles , FaClipboardCheck, FaTools } from "react-icons/fa";

// Heavy Animation Variants
const staggerContainer : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const slowRevealY : Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

const imageScaleReveal : Variants = {
  hidden: { opacity: 0, scale: 1.15, filter: "blur(10px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.4, ease: "easeOut" } },
};

export function ServicesMotionTransformationPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <SiteLayout
      palette={servicesMotionTransformationPalette}
      navbarMode={servicesMotionTransformationDemo.navbarMode}
      currentCategory={servicesMotionTransformationDemo.category}
      title={servicesMotionTransformationDemo.title}
      customNavbar={<ServicesMotionTransformationNavbar />}
    >
      <main className={`transition-colors duration-500 font-sans overflow-hidden ${isDark ? 'bg-neutral-950 text-neutral-50' : 'bg-stone-50 text-stone-900'}`}>
        
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageScaleReveal}
            className="absolute inset-0 z-0"
          >
            <div className={`absolute inset-0 z-10 ${isDark ? 'bg-neutral-950/70' : 'bg-white/50'} backdrop-blur-sm transition-colors duration-500`}></div>
            <img 
              src="/images/home-services/clean-hero.jpg" 
              alt="Pristine Living Room" 
              className="w-full h-full object-cover" 
            />
          </motion.div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div variants={slowRevealY} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'border-neutral-700 bg-neutral-800/50' : 'border-stone-300 bg-white/50'} backdrop-blur-md`}>
                <FaHandSparkles  className="text-amber-500" />
                <span className="text-sm font-semibold uppercase tracking-wider">Premium Home Care</span>
              </motion.div>
              <motion.h1 variants={slowRevealY} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                Restore The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Harmony</span> Of Your Home
              </motion.h1>
              <motion.p variants={slowRevealY} className={`text-lg md:text-2xl max-w-2xl mx-auto font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                Expert deep cleaning and precision repair services tailored to bring comfort and functionality back to your living space.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Heavy Services Grid */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-12">
                <motion.div variants={slowRevealY} className="space-y-6">
                  <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Services That Elevate Your Everyday</h2>
                  <p className={`text-xl ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>From eradicating stubborn grime to fixing that leaking sink, our comprehensive care approach ensures every corner shines and works perfectly.</p>
                </motion.div>
                
                <div className="space-y-8">
                  {[
                    { icon: FaBroom, title: "Deep Interior Cleaning", text: "We sanitize, scrub, and polish your home top-to-bottom." },
                    { icon: FaWrench, title: "Expert Appliance Repair", text: "Fast, reliable fixes for your essential household machines." },
                    { icon: FaClipboardCheck, title: "Move-In & Move-Out Prep", text: "Turn-key ready spaces designed to take the stress out of moving." },
                  ].map((item, idx) => (
                    <motion.div key={idx} variants={slowRevealY} className={`flex gap-6 items-start p-6 rounded-3xl ${isDark ? 'bg-neutral-900/50 hover:bg-neutral-900' : 'bg-white hover:shadow-xl'} transition-all duration-300 border border-transparent ${isDark ? 'hover:border-neutral-800' : 'hover:border-stone-100'}`}>
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-2xl">
                        <item.icon />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className={isDark ? 'text-neutral-400' : 'text-stone-600'}>{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Images Column */}
              <div className="grid grid-cols-2 gap-6 relative h-[800px]">
                <motion.div variants={slowRevealY} className="col-span-1 space-y-6 pt-12">
                  <div className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                    <img src="/images/home-services/repair.jpg" alt="Home Repair" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h4 className="absolute bottom-6 left-6 text-white text-xl font-bold">Fast Repairs</h4>
                  </div>
                  <div className={`w-full h-[250px] rounded-[2rem] p-8 flex flex-col justify-between ${isDark ? 'bg-neutral-800' : 'bg-amber-100'}`}>
                    <FaTools className={`text-4xl ${isDark ? 'text-amber-500' : 'text-amber-700'}`} />
                    <p className={`text-2xl font-bold ${isDark ? 'text-neutral-100' : 'text-amber-900'}`}>100% Satisfaction Guaranteed</p>
                  </div>
                </motion.div>
                <motion.div variants={slowRevealY} className="col-span-1 space-y-6">
                  <div className="w-full h-[300px] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                    <img src="/images/home-services/window-clean.jpg" alt="Window Cleaning" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h4 className="absolute bottom-6 left-6 text-white text-xl font-bold">Exterior Washing</h4>
                  </div>
                  <div className="w-full h-[450px] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                    <img src="/images/home-services/deep-clean.jpg" alt="Deep Kitchen Clean" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h4 className="absolute bottom-6 left-6 text-white text-xl font-bold">Deep Cleaning</h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0 bg-gradient-to-br from-amber-600 to-orange-700"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={slowRevealY} className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready For A Spotless Space?</motion.h2>
            <motion.p variants={slowRevealY} className="text-2xl text-amber-100 font-medium mb-12 max-w-2xl mx-auto">
              Schedule your first service today and see the transformation for yourself. 
            </motion.p>
            <motion.button variants={slowRevealY} className={`px-12 py-6 rounded-full font-extrabold text-xl tracking-wide transition-transform transform hover:scale-105 shadow-2xl ${isDark ? 'bg-neutral-950 text-white' : 'bg-white text-orange-700'}`}>
              Book a Consultation
            </motion.button>
          </motion.div>
        </section>
      </main>
    </SiteLayout>
  )
}
