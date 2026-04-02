import { useRef } from 'react'
import { EcommerceMotionLaunchNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { ecommerceMotionLaunchPalette } from '../../../theme/palettes/ecommerce/motion-launch'
import { ecommerceMotionLaunchDemo } from '../../../config/landings/ecommerce/motion-launch'
import { useUiStore } from '../../../stores/useUiStore'
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { FaMobileAlt, FaLaptop, FaHeadphones, FaCamera, FaBatteryFull, FaWifi } from "react-icons/fa";

// --- Advanced Framer Motion Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -80, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 80, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

// --- Reusable Parallax Component ---
const ParallaxSection = ({ image, children, isDark }: { image: string; children: React.ReactNode; isDark: boolean }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // Move the background image slightly opposite to the scroll direction for parallax depth
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden px-6 py-24">
      {/* Extended height and top offset prevent background edge bleeding during parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
        <img src={image} alt="Tech Background" className="w-full h-full object-cover" />
      </motion.div>
      {/* Dynamic Overlay for Text Readability */}
      <div className={`absolute inset-0 z-10 ${isDark ? 'bg-neutral-950/75' : 'bg-slate-50/75'} backdrop-blur-[4px] transition-colors duration-500`} />
      <div className="relative z-20 w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export function EcommerceMotionLaunchPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <SiteLayout
      palette={ecommerceMotionLaunchPalette}
      navbarMode={ecommerceMotionLaunchDemo.navbarMode}
      currentCategory={ecommerceMotionLaunchDemo.category}
      title={ecommerceMotionLaunchDemo.title}
      customNavbar={<EcommerceMotionLaunchNavbar />}
    >
      <main className={`transition-colors duration-500 font-sans ${isDark ? 'text-white bg-neutral-950' : 'text-slate-900 bg-slate-50'}`}>
        
        {/* Ecosystem Hero Section */}
        <ParallaxSection image="/images/ecommerce/motion-launch/hero.jpg" isDark={isDark}>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-4xl mx-auto space-y-8">
            <motion.div variants={slideUp} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-wider ${isDark ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' : 'border-cyan-200 bg-cyan-50 text-cyan-600'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              New Collection 2026
            </motion.div>
            
            <motion.h1 variants={slideUp} className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05]">
              The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tech Ecosystem.</span>
            </motion.h1>
            
            <motion.p variants={slideUp} className={`text-xl md:text-3xl font-medium ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
              Seamlessly integrated. Powerfully advanced. Discover the next generation of electronic devices designed to expand your reality.
            </motion.p>
            
            <motion.div variants={slideUp} className="pt-8">
              <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl shadow-cyan-500/30">
                Explore the Lineup
              </button>
            </motion.div>
          </motion.div>
        </ParallaxSection>

        {/* Smartphone Section */}
        <ParallaxSection image="/images/ecommerce/motion-launch/mobile.jpg" isDark={isDark}>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div variants={slideInLeft} className={`w-full p-10 md:p-14 rounded-[3rem] backdrop-blur-xl border shadow-2xl ${isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white/60 border-white'}`}>
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center text-3xl mb-8">
                <FaMobileAlt />
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">X-Pro Smartphone</h2>
              <p className={`text-xl mb-10 leading-relaxed font-medium ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
                Capture your world in cinematic 8K. The new X-Pro features an aerospace-grade titanium body and the most advanced camera system ever placed in a mobile device.
              </p>
              <ul className="space-y-6">
                {[
                  { icon: FaCamera, text: "Triple 108MP Sensor Array" },
                  { icon: FaBatteryFull, text: "72-Hour Intelligent Battery" },
                  { icon: FaWifi, text: "Hyper-Fast Wi-Fi 7 Connectivity" },
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-5 text-xl font-bold">
                    <feature.icon className="text-cyan-500 text-2xl" /> {feature.text}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={slideInRight} className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
              <img src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80" alt="Smartphone View" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </ParallaxSection>

        {/* Laptop Section */}
        <ParallaxSection image="/images/ecommerce/motion-launch/laptop.jpg" isDark={isDark}>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div variants={slideInLeft} className="relative order-2 lg:order-1 h-[350px] md:h-[500px] lg:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
              <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80" alt="Laptop View" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div variants={slideInRight} className={`order-1 lg:order-2 w-full p-10 md:p-14 rounded-[3rem] backdrop-blur-xl border shadow-2xl ${isDark ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white/60 border-white'}`}>
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center text-3xl mb-8">
                <FaLaptop />
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">Blade Book Ultra</h2>
              <p className={`text-xl mb-10 leading-relaxed font-medium ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
                Desktop performance. Featherweight design. Engineered with our groundbreaking M-Class Silicon, it cuts through heavy workloads with complete silence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { val: "64GB", label: "Unified Memory" },
                   { val: "4TB", label: "NVMe SSD" },
                   { val: "120Hz", label: "ProMotion XDR" },
                   { val: "14 hrs", label: "Battery Life" },
                 ].map((stat, idx) => (
                   <div key={idx} className={`p-6 rounded-[2rem] border ${isDark ? 'bg-neutral-950/50 border-neutral-800' : 'bg-white/80 border-slate-100'}`}>
                     <div className="text-3xl font-black text-cyan-500">{stat.val}</div>
                     <div className={`text-sm font-bold uppercase tracking-wider mt-2 ${isDark ? 'text-neutral-400' : 'text-slate-600'}`}>{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>
          </motion.div>
        </ParallaxSection>

        {/* Headset & Pre-Order Section */}
        <ParallaxSection image="/images/ecommerce/motion-launch/headset.jpg" isDark={isDark}>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <motion.div variants={slideUp} className="w-20 h-20 mx-auto rounded-[2rem] bg-cyan-500/20 text-cyan-500 flex items-center justify-center text-4xl mb-8">
              <FaHeadphones />
            </motion.div>
            <motion.h2 variants={slideUp} className="text-5xl md:text-7xl font-black mb-6">Immersive Sound.</motion.h2>
            <motion.p variants={slideUp} className={`text-xl md:text-3xl mb-12 font-medium ${isDark ? 'text-neutral-300' : 'text-slate-700'}`}>
              Experience the world's most advanced Active Noise Cancellation with the Sonic ANC Headphones. Hear what matters. Block the rest.
            </motion.p>
            <motion.div variants={slideUp} className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-bold text-xl transition-transform transform hover:scale-105 shadow-2xl shadow-cyan-500/30">
                Pre-Order Now
              </button>
              <button className={`w-full sm:w-auto px-12 py-5 border-2 rounded-full font-bold text-xl transition-all transform hover:scale-105 backdrop-blur-sm ${isDark ? 'border-neutral-700 hover:bg-neutral-800 text-white' : 'border-slate-300 hover:bg-white text-slate-900'}`}>
                Compare Models
              </button>
            </motion.div>
          </motion.div>
        </ParallaxSection>
      </main>
    </SiteLayout>
  )
}
