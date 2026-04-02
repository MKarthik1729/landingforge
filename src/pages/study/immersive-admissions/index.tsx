import { StudyImmersiveAdmissionsNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { studyImmersiveAdmissionsPalette } from '../../../theme/palettes/study/immersive-admissions'
import { studyImmersiveAdmissionsDemo } from '../../../config/landings/study/immersive-admissions'
import { useUiStore } from '../../../stores/useUiStore'
import { motion, type Variants } from "framer-motion";
import { FaBell, FaGraduationCap, FaBriefcase, FaBuilding, FaArrowRight, FaChartLine } from "react-icons/fa";

// Subtle, professional animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export function StudyImmersiveAdmissionsPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <SiteLayout
      palette={studyImmersiveAdmissionsPalette}
      navbarMode={studyImmersiveAdmissionsDemo.navbarMode}
      currentCategory={studyImmersiveAdmissionsDemo.category}
      title={studyImmersiveAdmissionsDemo.title}
      customNavbar={<StudyImmersiveAdmissionsNavbar />}
    >
      <main className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Official Notifications Banner */}
        <div className={`px-4 py-3 text-sm font-medium flex flex-col sm:flex-row items-center justify-center gap-3 border-b ${isDark ? 'bg-blue-950/40 border-blue-900/50 text-blue-200' : 'bg-blue-50 border-blue-100 text-blue-900'}`}>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-white animate-pulse">
              <FaBell size={10} />
            </span>
            <strong className="tracking-wide uppercase text-xs text-red-600 dark:text-red-400">Important Update</strong>
          </div>
          <p className="text-center">The Early Decision application deadline for Fall 2026 is approaching. Submit your materials by November 15th.</p>
          <a href="#apply" className="underline hover:opacity-80 font-bold whitespace-nowrap">View Admissions Timeline</a>
        </div>

        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/study/immersive-admissions/hero.jpg" alt="University Campus" className="w-full h-full object-cover" />
            <div className={`absolute inset-0 ${isDark ? 'bg-slate-950/80' : 'bg-slate-900/60'}`}></div>
          </div>
          
          <motion.div 
            className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8"
            initial="hidden" animate="visible" variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-block border border-white/30 backdrop-blur-md bg-white/10 px-6 py-2 rounded-full text-white font-semibold uppercase tracking-widest text-sm mb-4">
              Veritas University
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
              A Legacy of <br /><span className="italic font-light">Global Leadership.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of innovators, scholars, and creators through rigorous academics and immersive real-world experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-blue-700 hover:bg-blue-800 text-white rounded-sm font-bold text-lg transition-colors shadow-xl flex items-center justify-center gap-3">
                Begin Application <FaArrowRight size={14} />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-100 text-slate-900 rounded-sm font-bold text-lg transition-colors shadow-xl">
                Request Information
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Institutional Stats */}
        <section className={`border-b ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x border-slate-200 dark:divide-slate-800">
              {[
                { stat: "1842", label: "Year Founded" },
                { stat: "14:1", label: "Student to Faculty Ratio" },
                { stat: "Top 20", label: "National Ranking" },
                { stat: "120+", label: "Academic Programs" },
              ].map((item, idx) => (
                <div key={idx} className="text-center px-4">
                  <div className={`text-4xl font-serif font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{item.stat}</div>
                  <div className={`text-sm uppercase tracking-wider font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Excellence & Heritage */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="space-y-8">
              <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-serif leading-tight">Shaping intellects and advancing research for over a century.</motion.h2>
              <motion.p variants={fadeUp} className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                At Veritas University, we do more than impart knowledge—we instill a profound sense of inquiry and intellectual rigor. Our esteemed faculty members are leading experts in their fields, dedicated to bringing cutting-edge research directly into the classroom.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-4 pt-4">
                {[
                  "Comprehensive global exchange programs in 40+ countries.",
                  "Over $120M in annual funded research opportunities.",
                  "State-of-the-art libraries and research laboratories."
                ].map((point, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-4">
                    <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white ${isDark ? 'bg-blue-600' : 'bg-blue-700'}`}>✓</div>
                    <span className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <div className={`p-4 rounded-sm shadow-2xl ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                <img src="/images/study/immersive-admissions/students.jpg" alt="Students studying" className="w-full h-auto object-cover rounded-sm" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Career Outcomes & Placements */}
        <section className={`py-24 border-y ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-serif mb-6">Exceptional Career Outcomes</h2>
              <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Our dedicated Career Services team ensures that a Veritas degree translates into long-term professional success and leadership in top global organizations.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: FaChartLine, title: "96% Placement Rate", text: "Of our graduates are employed or in graduate school within six months." },
                { icon: FaBriefcase, title: "$88,500 Avg. Salary", text: "Starting salary for recent graduates, significantly above national averages." },
                { icon: FaBuilding, title: "500+ Hiring Partners", text: "Direct recruitment pipelines with Fortune 500 companies and top NGOs." },
              ].map((item, idx) => (
                <div key={idx} className={`p-10 rounded-sm border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'} hover:-translate-y-1 transition-transform duration-300 shadow-sm`}>
                  <div className={`w-14 h-14 mb-6 flex items-center justify-center text-2xl rounded-sm ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                    <item.icon />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distinguished Faculty */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif mb-6">Learn from the Best</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Our faculty comprises Nobel Laureates, Pulitzer Prize winners, and leading industry innovators dedicated to your intellectual growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Dr. Eleanor Vance", role: "Dean, College of Sciences", img: "faculty1.jpg" },
              { name: "Prof. Marcus Thorne", role: "Chair, School of Business", img: "faculty2.jpg" },
              { name: "Dr. Sarah Jenkins", role: "Director of Global Studies", img: "faculty3.jpg" },
            ].map((faculty, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-slate-200 dark:bg-slate-800">
                  <img src={`/images/study/immersive-admissions/${faculty.img}`} alt={faculty.name} className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <h4 className="text-2xl font-bold mb-1">{faculty.name}</h4>
                <p className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{faculty.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application CTA */}
        <section className="relative py-32 bg-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: "url('/images/study/immersive-admissions/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-8">
            <FaGraduationCap className="mx-auto text-blue-300 text-6xl mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Ready to take the next step?</h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Applications for the Fall 2026 academic year are now open. Join a community of scholars determined to make a difference.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 bg-white text-blue-900 rounded-sm font-bold text-lg transition-transform transform hover:scale-105 shadow-xl">
                Start Your Application
              </button>
              <button className="px-10 py-5 border-2 border-white/40 hover:border-white text-white rounded-sm font-bold text-lg transition-all backdrop-blur-sm">
                Review Requirements
              </button>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
