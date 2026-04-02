import { StudyDepthInstructorNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { studyDepthInstructorPalette } from '../../../theme/palettes/study/depth-instructor'
import { studyDepthInstructorDemo } from '../../../config/landings/study/depth-instructor'
import { useUiStore } from '../../../stores/useUiStore'
import { FaGraduationCap, FaAward, FaBookOpen, FaPlayCircle, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa'

export function StudyDepthInstructorPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <SiteLayout
      palette={studyDepthInstructorPalette}
      navbarMode={studyDepthInstructorDemo.navbarMode}
      currentCategory={studyDepthInstructorDemo.category}
      title={studyDepthInstructorDemo.title}
      customNavbar={<StudyDepthInstructorNavbar />}
    >
      <main className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold tracking-wide uppercase ${isDark ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                <FaCheckCircle /> Accepting New Students
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Dr. Evelyn Reed
              </h1>
              <p className={`text-2xl font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Professor of Astrophysics & Data Science
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Specializing in making complex cosmic phenomena and advanced computational models accessible, practical, and deeply engaging for the next generation of scientists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-lg transition-colors shadow-sm">
                  View Masterclasses
                </button>
                <button className={`px-8 py-4 rounded-lg font-bold text-lg border transition-colors ${isDark ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-700'}`}>
                  Read Publications
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <img src="/images/study/depth-instructor/instructor.jpg" alt="Dr. Evelyn Reed" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
                    <p className="font-semibold mb-1 flex items-center gap-2">
                      <FaQuoteLeft className="text-emerald-400 opacity-50" />
                      The universe is waiting for our wits to grow sharper.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className={`py-24 border-y ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${isDark ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
                <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ph.D. in Astrophysics from MIT, with postdoctoral research at the Institute for Advanced Study.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${isDark ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                  <FaBookOpen />
                </div>
                <h3 className="text-xl font-bold mb-3">Published Author</h3>
                <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Author of the best-selling textbook "The Computational Cosmos", used in over 50 universities globally.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${isDark ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                  <FaAward />
                </div>
                <h3 className="text-xl font-bold mb-3">Award-Winning Educator</h3>
                <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Recipient of the National Science Teaching Award for innovation in digital learning environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses / Video Clips Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Featured Masterclasses</h2>
              <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Deep-dive video courses designed for rigorous academic study and practical application.
              </p>
            </div>
            <button className="mt-6 md:mt-0 text-emerald-600 font-bold hover:text-emerald-700">
              View full curriculum &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`group rounded-2xl overflow-hidden border ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'} shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
              <div className="aspect-video relative overflow-hidden">
                <img src="/images/study/depth-instructor/video1.jpg" alt="Stellar Dynamics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    <FaPlayCircle size={32} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-emerald-600 mb-2">12 Weeks • Advanced</div>
                <h3 className="text-xl font-bold mb-2">Stellar Dynamics & Evolution</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>An in-depth look at the life cycle of stars using computational physics models.</p>
              </div>
            </div>
            
            <div className={`group rounded-2xl overflow-hidden border ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'} shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
              <div className="aspect-video relative overflow-hidden">
                <img src="/images/study/depth-instructor/video2.jpg" alt="Data Science in Astronomy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    <FaPlayCircle size={32} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-emerald-600 mb-2">8 Weeks • Intermediate</div>
                <h3 className="text-xl font-bold mb-2">Data Science in Astronomy</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Learn how to process and analyze massive datasets from modern space telescopes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`py-24 border-t ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-16 tracking-tight">Student Perspectives</h2>
            <div className="space-y-12">
              <div className="flex flex-col items-center">
                <FaQuoteLeft className="text-4xl text-emerald-500/20 mb-6" />
                <p className="text-2xl font-medium leading-relaxed mb-8">
                  "Dr. Reed's ability to break down high-level astrophysics into rigorous yet comprehensible modules fundamentally changed the trajectory of my research career."
                </p>
                <div className="flex items-center gap-4 text-left">
                  <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                  <div>
                    <p className="font-bold">Michael T.</p>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Postdoctoral Fellow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to advance your expertise?</h2>
            <p className={`text-xl mb-10 max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Join a community of dedicated learners and gain access to comprehensive lectures, live Q&A sessions, and exclusive course materials.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-lg transition-colors shadow-md">
                Enroll in Masterclass
              </button>
              <button className={`w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-lg border transition-colors ${isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'}`}>
                Download Syllabus
              </button>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
