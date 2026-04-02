import { ServicesDepthConsultingNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { servicesDepthConsultingPalette } from '../../../theme/palettes/services/depth-consulting'
import { servicesDepthConsultingDemo } from '../../../config/landings/services/depth-consulting'
import { useUiStore } from '../../../stores/useUiStore'

import { motion, type Variants } from "framer-motion";
import { FaStethoscope, FaBrain, FaRegCalendarCheck, FaMapMarkerAlt, FaPhoneAlt, FaUserMd } from "react-icons/fa";

// Framer Motion Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const slideInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const slowPopIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function ServicesDepthConsultingPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <SiteLayout
      palette={servicesDepthConsultingPalette}
      navbarMode={servicesDepthConsultingDemo.navbarMode}
      currentCategory={servicesDepthConsultingDemo.category}
      title={servicesDepthConsultingDemo.title}
      customNavbar={<ServicesDepthConsultingNavbar />}
    >
      <main className={`transition-colors duration-500 font-sans overflow-hidden ${isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 space-y-8 z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={slideInUp} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold tracking-wide uppercase ${isDark ? 'border-slate-800 bg-slate-900 text-slate-300' : 'border-slate-200 bg-white text-slate-600'}`}>
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Central Medical & Therapy Clinic</span>
            </motion.div>
            
            <motion.h1 variants={slideInUp} className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Expert Care. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">One Location.</span>
            </motion.h1>
            
            <motion.p variants={slideInUp} className={`text-lg lg:text-2xl leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              From world-class psychological therapy to general medical consulting. Book a call today and take the first step towards better health.
            </motion.p>
            
            <motion.div variants={slideInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/25">
                <FaPhoneAlt />
                Book a Call Now
              </button>
              <button className={`flex items-center justify-center gap-3 px-8 py-5 rounded-full font-bold text-lg transition-transform transform hover:scale-105 border ${isDark ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-white' : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-900 shadow-sm'}`}>
                <FaRegCalendarCheck />
                View Availability
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full relative"
            initial="hidden"
            animate="visible"
            variants={slowPopIn}
          >
            <div className="relative aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/consulting/hero.jpg" 
                alt="Doctor consulting with a patient" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white">
                  <p className="font-semibold text-lg mb-1">Dr. Sarah Jenkins</p>
                  <p className="text-slate-200 text-sm">Lead Clinical Psychologist</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services / Booking Categories */}
        <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <motion.h2 variants={slideInUp} className="text-4xl lg:text-5xl font-bold">Comprehensive Care</motion.h2>
              <motion.p variants={slideInUp} className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We house specialists across multiple disciplines to ensure you get the exact help you need, exactly when you need it.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: FaBrain, title: "Psychology & Therapy", desc: "Navigate life's challenges with certified clinical psychologists and therapists." },
                { icon: FaStethoscope, title: "General Practice", desc: "Comprehensive health checkups, diagnostics, and everyday medical care." },
                { icon: FaUserMd, title: "Specialist Consulting", desc: "Deep-dive consultations with specialized medical experts and dieticians." },
              ].map((service, idx) => (
                <motion.div key={idx} variants={slideInUp} className={`p-10 rounded-[2.5rem] transition-all hover:-translate-y-2 ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:shadow-xl'}`}>
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-500 flex items-center justify-center rounded-2xl mb-8 text-3xl">
                    <service.icon />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className={`mb-8 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{service.desc}</p>
                  <button className="text-blue-500 font-semibold hover:text-blue-600 flex items-center gap-2 group">
                    Book Appointment <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Clinic / Professionals Image Grid */}
        <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <motion.div variants={slowPopIn} className="col-span-1 h-full rounded-[2rem] overflow-hidden">
                <img src="/images/consulting/portrait.jpg" alt="Friendly therapist" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
                <motion.div variants={slideInLeft} className="row-span-1 rounded-[2rem] overflow-hidden">
                  <img src="/images/consulting/office.jpg" alt="Comfortable clinic room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
                <motion.div variants={slideInUp} className="row-span-1 rounded-[2rem] overflow-hidden">
                  <img src="/images/consulting/booking.jpg" alt="Online booking concept" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              </div>
            </div>
            
            <motion.div variants={staggerContainer} className="space-y-8 lg:pl-12">
              <motion.h2 variants={slideInUp} className="text-4xl lg:text-5xl font-bold leading-tight">
                A modern, calming environment designed for your comfort.
              </motion.h2>
              <motion.p variants={slideInUp} className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Located in the heart of the city, our facility combines cutting-edge medical technology with warm, confidential spaces for therapy. 
                We believe that the environment is just as important as the consultation itself.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4 pt-4">
                {['No wait times with pre-booked calls', 'Private, soundproofed consulting rooms', 'Multi-disciplinary team on site'].map((text, i) => (
                  <motion.li key={i} variants={slideInLeft} className="flex items-center gap-4 text-lg font-medium">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center flex-shrink-0">✓</div>
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Booking CTA Section */}
        <section className={`py-32 relative overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-blue-600'}`}>
          <div className="absolute inset-0 bg-[url('/images/consulting/office.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={slideInUp} className="text-5xl md:text-6xl font-black text-white tracking-tight">
              Ready to take the next step?
            </motion.h2>
            <motion.p variants={slideInUp} className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto">
              Schedule a 15-minute introductory call or book a full consultation instantly online.
            </motion.p>
            <motion.div variants={slowPopIn} className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 hover:bg-slate-100 rounded-full font-bold text-xl transition-transform transform hover:scale-105 shadow-2xl">
                Schedule a Call
              </button>
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 hover:border-white text-white rounded-full font-bold text-xl transition-all transform hover:scale-105 backdrop-blur-sm">
                Find Our Clinic
              </button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </SiteLayout>
  )
}
