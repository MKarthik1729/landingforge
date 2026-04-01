import { StudyCardEnrollmentNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { studyCardEnrollmentPalette } from '../../../theme/palettes/study/card-enrollment'
import { studyCardEnrollmentDemo } from '../../../config/landings/study/card-enrollment'

export function StudyCardEnrollmentPage() {
  return (
  <SiteLayout
    palette={studyCardEnrollmentPalette}
    navbarMode={studyCardEnrollmentDemo.navbarMode}
    currentCategory={studyCardEnrollmentDemo.category}
    title={studyCardEnrollmentDemo.title}
    customNavbar={<StudyCardEnrollmentNavbar />}
  >
      <main>
        {/* Hero Section */}
        <section className="bg-blue-800 text-white py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Start Your Learning Journey Today
            </h1>
            <p className="text-lg mb-8">
              Join our program and gain the skills you need to succeed.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded">
              Enroll Now
            </button>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Program Overview
            </h2>
            <div className="text-lg text-center">
              <p>Duration: 12 Weeks</p>
              <p>Format: Online</p>
              <p>
                Key Outcomes: Proficiency in..., Ability to..., etc.
              </p>
            </div>
          </div>
        </section>

        {/* What You Will Learn Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You Will Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
              </ul>
              <ul className="space-y-4">
                <li>Topic 4</li>
                <li>Topic 5</li>
                <li>Topic 6</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Instructor Profiles Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Your Instructors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="text-center">
                <img
                  src="/images/study/card-enrollment/instructor-1.jpg"
                  alt="Instructor 1"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p>Lead Instructor</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/study/card-enrollment/instructor-2.jpg"
                  alt="Instructor 2"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">John Smith</h3>
                <p>Assistant Instructor</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tuition & Financial Aid Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              Tuition & Financial Aid
            </h2>
            <p className="text-lg">
              Tuition: $5,000. Financial aid is available for qualified
              students.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Question 1?</h3>
                <p>Answer to question 1.</p>
              </div>
              <div>
                <h3 className="font-bold">Question 2?</h3>
                <p>Answer to question 2.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Form Section */}
        <section className="py-20 bg-blue-800 text-white">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Enroll Now
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full py-3 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
