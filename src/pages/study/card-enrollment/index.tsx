import { StudyCardEnrollmentNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { studyCardEnrollmentPalette } from '../../../theme/palettes/study/card-enrollment'
import { studyCardEnrollmentDemo } from '../../../config/landings/study/card-enrollment'
import { useUiStore } from '../../../stores/useUiStore'
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaBuilding, FaBookmark } from 'react-icons/fa'

const jobs = [
  { id: 1, title: "Senior React Developer", company: "FinTech Solutions", location: "New York, NY (Hybrid)", type: "Full-time", salary: "$130k - $160k", time: "Posted 2h ago" },
  { id: 2, title: "Product Designer", company: "Creative Studio", location: "Remote", type: "Contract", salary: "$80/hr", time: "Posted 5h ago" },
  { id: 3, title: "Backend Engineer", company: "DataSys Inc", location: "San Francisco, CA", type: "Full-time", salary: "$150k - $190k", time: "Posted 1d ago" },
  { id: 4, title: "Marketing Manager", company: "Growth Corp", location: "London, UK", type: "Full-time", salary: "£60k - £80k", time: "Posted 2d ago" },
  { id: 5, title: "DevOps Specialist", company: "CloudNet", location: "Remote", type: "Full-time", salary: "$140k - $170k", time: "Posted 3d ago" },
];

const categories = [
  { name: "Software Engineering", count: "340 Jobs" },
  { name: "Design & UX", count: "120 Jobs" },
  { name: "Marketing & Sales", count: "85 Jobs" },
  { name: "Product Management", count: "60 Jobs" },
  { name: "Finance & Accounting", count: "45 Jobs" },
  { name: "Human Resources", count: "30 Jobs" },
];

export function StudyCardEnrollmentPage() {
  const theme = useUiStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <SiteLayout
      palette={studyCardEnrollmentPalette}
      navbarMode={studyCardEnrollmentDemo.navbarMode}
      currentCategory={studyCardEnrollmentDemo.category}
      title={studyCardEnrollmentDemo.title}
      customNavbar={<StudyCardEnrollmentNavbar />}
    >
      <main className={`min-h-screen font-sans ${isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Hero Section */}
        <section className="relative bg-slate-900 py-32 border-b border-slate-800">
          <div className="absolute inset-0 overflow-hidden">
            <img src="/images/study/office-hero.jpg" alt="Office Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          </div>
          <div className="relative max-w-5xl mx-auto px-6 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Find the job that fits your life</h1>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Discover thousands of remote and local opportunities from top companies around the world.
            </p>
            <div className={`p-3 rounded-xl shadow-2xl flex flex-col md:flex-row gap-3 text-left ${isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>
              <div className="flex-1 flex items-center px-4 rounded-lg bg-transparent">
                <FaSearch className={isDark ? 'text-slate-500' : 'text-slate-400'} />
                <input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className={`w-full p-3 bg-transparent outline-none ${isDark ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`} 
                />
              </div>
              <div className={`hidden md:block w-px my-2 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
              <div className="flex-1 flex items-center px-4 rounded-lg bg-transparent">
                <FaMapMarkerAlt className={isDark ? 'text-slate-500' : 'text-slate-400'} />
                <input 
                  type="text" 
                  placeholder="City, state, or remote" 
                  className={`w-full p-3 bg-transparent outline-none ${isDark ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`} 
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </section>

        {/* Main Content: Filters and Job Listings */}
        <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4 tracking-tight">Job Type</h3>
              <div className="space-y-3">
                {['Full-time', 'Part-time', 'Contract', 'Freelance'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300 w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 tracking-tight">Location</h3>
              <div className="space-y-3">
                {['Remote', 'On-site', 'Hybrid'].map(loc => (
                  <label key={loc} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-slate-300 w-4 h-4 text-blue-600 focus:ring-blue-500" />
                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{loc}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Job Feed */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-end border-b pb-4 mb-6 border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold tracking-tight">Recommended Jobs</h2>
              <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Showing 5 of 12,402 results</span>
            </div>
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job.id} className={`p-6 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:border-blue-500 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 hover:shadow-sm'}`}>
                  <div className="flex gap-6 items-start">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 text-xl border ${isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                      <FaBuilding />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 hover:text-blue-500 cursor-pointer">{job.title}</h3>
                      <div className={`flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        <span className="flex items-center gap-1.5"><FaBuilding className="text-xs"/> {job.company}</span>
                        <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-xs"/> {job.location}</span>
                        <span className="flex items-center gap-1.5"><FaBriefcase className="text-xs"/> {job.type}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2.5 py-1 rounded font-semibold ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col items-center md:items-end justify-between gap-4 self-stretch md:self-auto">
                    <button className={`p-2.5 rounded-full border transition-colors ${isDark ? 'border-slate-700 text-slate-400 hover:bg-slate-800' : 'border-slate-200 text-slate-400 hover:bg-slate-50'}`}>
                      <FaBookmark />
                    </button>
                    <div className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {job.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Categories Grid */}
        <section className={`py-24 border-t border-b ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">Popular Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((cat, idx) => (
                <div key={idx} className={`p-6 rounded-xl border cursor-pointer transition-colors group ${isDark ? 'bg-slate-950 border-slate-800 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                  <p className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cat.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employer Call To Action */}
        <section className="py-32 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Are you an employer?</h2>
          <p className={`text-xl mb-10 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Reach thousands of highly qualified candidates. Post a job and find your next great hire today.
          </p>
          <button className={`font-bold py-4 px-12 rounded-lg transition-opacity hover:opacity-90 ${isDark ? 'bg-white text-slate-950' : 'bg-slate-900 text-white'}`}>
            Post a Job
          </button>
        </section>

      </main>
    </SiteLayout>
  )
}
