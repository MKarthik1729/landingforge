import { EcommerceCardCollectionNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { ecommerceCardCollectionPalette } from '../../../theme/palettes/ecommerce/card-collection'
import { ecommerceCardCollectionDemo } from '../../../config/landings/ecommerce/card-collection'
import { useUiStore } from '../../../stores/useUiStore'

import { motion, type Variants } from "framer-motion";
import { FaShoppingCart, FaStar, FaShippingFast, FaUndo, FaShieldAlt, FaArrowRight } from "react-icons/fa";

// Framer Motion Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardPop: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const products = [
  { name: "Aero Glide Runners", price: "₹1290.00", img: "shoes.jpg", tag: "New Arrival", rating: 4.8, reviews: 124 },
  { name: "All-Weather Track Jacket", price: "₹890.00", img: "jacket.jpg", tag: "Bestseller", rating: 4.9, reviews: 312 },
  { name: "Pro Series Duffle Bag", price: "₹550.00", img: "bag.jpg", tag: "", rating: 4.7, reviews: 89 },
  { name: "EcoGrip Yoga Mat", price: "₹350.00", img: "mat.jpg", tag: "", rating: 4.6, reviews: 201 },
  { name: "Hex Dumbbell Set (20lb)", price: "₹1100.00", img: "dumbbells.jpg", tag: "Heavy", rating: 4.9, reviews: 56 },
  { name: "Insulated Sport Flask", price: "₹250.00", img: "bottle.jpg", tag: "", rating: 4.8, reviews: 443 },
];

export function EcommerceCardCollectionPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <SiteLayout
      palette={ecommerceCardCollectionPalette}
      navbarMode={ecommerceCardCollectionDemo.navbarMode}
      currentCategory={ecommerceCardCollectionDemo.category}
      title={ecommerceCardCollectionDemo.title}
      customNavbar={<EcommerceCardCollectionNavbar />}
    >
      <main className={`min-h-screen transition-colors duration-500 font-sans overflow-hidden ${isDark ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'}`}>
        
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 space-y-8 z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-wider ${isDark ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-emerald-200 bg-emerald-50 text-emerald-600'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Spring Collection Live
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl lg:text-8xl font-black tracking-tighter leading-[1.05]">
              Perform At <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Your Peak.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-xl lg:text-2xl leading-relaxed max-w-xl font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Engineered for athletes, designed for everyday. Discover premium activewear and equipment that moves with you.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl shadow-emerald-500/30 flex items-center gap-3">
                Shop The Collection <FaArrowRight />
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group">
              <img src="/images/sports/hero.jpg" alt="Athlete training" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </section>

        {/* Trust Badges Section */}
        <section className={`py-12 border-y ${isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaShippingFast, title: "Free Global Shipping", desc: "On all orders over $100" },
              { icon: FaUndo, title: "30-Day Free Returns", desc: "No questions asked" },
              { icon: FaShieldAlt, title: "2-Year Warranty", desc: "Guaranteed durability" },
            ].map((badge, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-4 justify-center md:justify-start">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${isDark ? 'bg-zinc-800 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                  <badge.icon />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{badge.title}</h4>
                  <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-4">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black">Featured Gear</motion.h2>
              <motion.p variants={fadeInUp} className={`text-lg max-w-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Tested by pros, built for everyone. Upgrade your loadout.</motion.p>
            </div>
            <motion.button variants={fadeInUp} className="text-emerald-500 font-bold hover:text-emerald-600 flex items-center gap-2 group">
              View All Products <span className="transform transition-transform group-hover:translate-x-1"><FaArrowRight /></span>
            </motion.button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {products.map((product, idx) => (
              <motion.div key={idx} variants={cardPop} className="group relative flex flex-col">
                <div className={`relative aspect-square rounded-[2rem] overflow-hidden mb-6 ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                  {product.tag && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white text-zinc-900 rounded-full shadow-sm">
                      {product.tag}
                    </div>
                  )}
                  <img src={`/images/sports/${product.img}`} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Overlay Add to Cart */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-8 py-4 bg-emerald-500 text-white rounded-full font-bold shadow-lg flex items-center gap-3 hover:bg-emerald-600">
                      <FaShoppingCart /> Add To Cart
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 px-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold truncate pr-4">{product.name}</h3>
                    <span className="text-xl font-black text-emerald-500">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-yellow-500">
                    <FaStar />
                    <span className={`font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{product.rating}</span>
                    <span className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>({product.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Categories / Call to Action Section */}
        <section className={`py-32 ${isDark ? 'bg-zinc-900' : 'bg-emerald-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className={`rounded-[3rem] p-10 md:p-20 text-center flex flex-col items-center relative overflow-hidden ${isDark ? 'bg-emerald-900 text-white' : 'bg-emerald-600 text-white'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="absolute inset-0 bg-[url('/images/sports/hero.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 space-y-8 max-w-3xl">
                <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tight">Join the Elite.</motion.h2>
                <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-medium text-emerald-100">
                  Subscribe to our newsletter to get early access to new drops, exclusive member discounts, and pro training tips.
                </motion.p>
                <motion.div variants={cardPop} className="flex flex-col sm:flex-row w-full max-w-lg mx-auto gap-4 pt-6">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-5 rounded-full text-zinc-900 focus:outline-none focus:ring-4 focus:ring-emerald-300" />
                  <button className="px-8 py-5 bg-zinc-900 text-white hover:bg-zinc-800 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl">Subscribe</button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
