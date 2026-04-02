import { ServicesCardBookingNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { servicesCardBookingPalette } from '../../../theme/palettes/services/card-booking'
import { servicesCardBookingDemo } from '../../../config/landings/services/card-booking'
import { useUiStore } from '../../../stores/useUiStore'

import { motion, type Variants } from "framer-motion";
import { FaPaintBrush, FaShippingFast, FaCheckCircle } from "react-icons/fa";

// Framer Motion animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export function ServicesCardBookingPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
  <SiteLayout
    palette={servicesCardBookingPalette}
    navbarMode={servicesCardBookingDemo.navbarMode}
    currentCategory={servicesCardBookingDemo.category}
    title={servicesCardBookingDemo.title}
    customNavbar={<ServicesCardBookingNavbar />}
  >
      <main className={`min-h-screen transition-colors duration-300 font-sans overflow-hidden ${isDark ? 'bg-neutral-950 text-neutral-50' : 'bg-neutral-50 text-neutral-900'}`}>
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Design Your <span className={isDark ? "text-indigo-400" : "text-indigo-600"}>Perfect</span> Space & Gear
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-lg lg:text-xl leading-relaxed max-w-2xl ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              From personalized water bottles to bespoke wallpapers and custom pillows. Bring your unique ideas to life with our premium printing services.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-transform transform hover:-translate-y-1 shadow-lg shadow-indigo-600/30">
                Start Designing
              </button>
              <button className={`px-8 py-4 border rounded-full font-semibold transition-transform transform hover:-translate-y-1 shadow-sm ${isDark ? 'bg-neutral-900 border-neutral-800 hover:bg-neutral-800 text-neutral-50' : 'bg-white border-neutral-200 hover:bg-neutral-100 text-neutral-900'}`}>
                View Catalog
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="/images/custom-products/bottle.jpg" 
                alt="Customized Water Bottle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Custom Water Bottles</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16 space-y-4"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold">Limitless Customization</motion.h2>
              <motion.p variants={fadeInUp} className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Explore our wide range of products ready to be adorned with your artwork, photos, or branding.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                { title: "Plush Pillows", desc: "Cozy, vibrant, and uniquely yours. Perfect for living rooms and gifts.", img: "pillow.jpg" },
                { title: "Wallpapers", desc: "Transform any room with high-resolution, custom-printed wall coverings.", img: "wallpaper.jpg" },
                { title: "Ceramic Mugs", desc: "Start your morning right with a mug featuring your favorite memories.", img: "mug.jpg" },
              ].map((item, index) => (
                <motion.div key={index} variants={popIn} className="group cursor-pointer flex flex-col">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square mb-6">
                    <img src={`/images/custom-products/${item.img}`} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${isDark ? 'group-hover:text-indigo-400' : 'group-hover:text-indigo-600'}`}>{item.title}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`py-24 transition-colors duration-300 ${isDark ? 'bg-neutral-950' : 'bg-indigo-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: FaPaintBrush, title: "Premium Print Quality", text: "We use state-of-the-art printing tech to ensure colors are vibrant and long-lasting." },
                { icon: FaShippingFast, title: "Fast Global Shipping", text: "Your custom designs are produced and shipped rapidly to your doorstep worldwide." },
                { icon: FaCheckCircle, title: "100% Satisfaction", text: "If you aren't completely thrilled with your custom product, we'll make it right." },
              ].map((feature, idx) => (
                <motion.div key={idx} variants={fadeInUp} className={`p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-shadow border ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-100'}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${isDark ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                  <p className={`leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden flex items-center justify-center">
          <div className={`absolute -top-32 -bottom-32 left-0 right-0 skew-y-3 transform origin-bottom-left transition-colors duration-300 ${isDark ? 'bg-indigo-900' : 'bg-indigo-600'}`}></div>
          <motion.div className="relative z-10 max-w-3xl px-6 text-center text-white space-y-8" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <h2 className="text-4xl lg:text-6xl font-black">Ready to Create?</h2>
            <p className="text-xl text-indigo-100 font-medium">Join over 10,000 happy customers who have transformed their ideas into reality.</p>
            <button className={`mt-8 px-10 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-2xl ${isDark ? 'bg-neutral-900 text-indigo-400 hover:bg-neutral-800' : 'bg-white text-indigo-600 hover:bg-neutral-100'}`}>Design Your First Product</button>
          </motion.div>
        </section>
      </main>
    </SiteLayout>
  )
}
