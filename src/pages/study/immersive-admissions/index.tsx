import { StudyImmersiveAdmissionsNavbar } from './Navbar'

export function StudyImmersiveAdmissionsPage() {
  return (
    <div className="bg-white text-gray-800">
      <StudyImmersiveAdmissionsNavbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Our University!
            </h1>
            <p className="text-lg mb-8">
              Your future starts here.
            </p>
            <div className="bg-gray-200 w-full md:w-2/3 mx-auto h-96 mb-8">
              {/* Video Placeholder */}
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded">
              Apply Now
            </button>
          </div>
        </section>

        {/* Virtual Campus Tour Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Virtual Campus Tour
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src="https://picsum.photos/800/600?random=34"
                alt="Campus 1"
                className="rounded-lg"
              />
              <img
                src="https://picsum.photos/800/600?random=35"
                alt="Campus 2"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Meet Students and Faculty Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Our Community
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <img
                  src="https://picsum.photos/200/200?random=36"
                  alt="Student 1"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">Student Name</h3>
              </div>
              <div className="text-center">
                <img
                  src="https://picsum.photos/200/200?random=37"
                  alt="Faculty 1"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">Faculty Name</h3>
              </div>
              <div className="text-center">
                <img
                  src="https://picsum.photos/200/200?random=38"
                  alt="Student 2"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">Student Name</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Programs and Majors Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Programs & Majors
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full">
                Computer Science
              </span>
              <span className="bg-white px-4 py-2 rounded-full">
                Business
              </span>
              <span className="bg-white px-4 py-2 rounded-full">
                Engineering
              </span>
              <span className="bg-white px-4 py-2 rounded-full">
                Arts & Humanities
              </span>
            </div>
          </div>
        </section>

        {/* Admissions Process Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Admissions Process
            </h2>
            <ol className="list-decimal list-inside text-lg space-y-4">
              <li>Submit your online application.</li>
              <li>Send your transcripts and test scores.</li>
              <li>Receive your admission decision.</li>
            </ol>
            <div className="text-center mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Download Checklist
              </button>
            </div>
          </div>
        </section>

        {/* Live Chat Section */}
        <section className="py-20 bg-gray-100 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Have a question?
            </h2>
            <p className="text-lg mb-8">
              Chat with a current student or admissions counselor.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded">
              Start Chat
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
