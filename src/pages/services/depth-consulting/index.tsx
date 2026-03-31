import { ServicesDepthConsultingNavbar } from './Navbar'

export function ServicesDepthConsultingPage() {
  return (
    <div className="bg-white text-gray-800">
      <ServicesDepthConsultingNavbar />
      <main>
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  Unlock Your Business's Potential
                </h1>
                <p className="text-lg mb-8">
                  Expert consulting for transformative growth.
                </p>
                <button className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded">
                  Schedule a Consultation
                </button>
              </div>
              <div>
                <img
                  src="https://picsum.photos/600/400?random=23"
                  alt="Consultant"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problems We Solve Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              Are you facing these challenges?
            </h2>
            <ul className="text-lg space-y-4">
              <li>Stagnant growth and declining profits</li>
              <li>Inefficient processes and operations</li>
              <li>Lack of a clear strategic direction</li>
              <li>Difficulty adapting to market changes</li>
            </ul>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Our Areas of Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Operations</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Finance</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Marketing</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  200% ROI for a Tech Startup
                </h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  50% Cost Reduction for a Manufacturer
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Consultant Bio Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://picsum.photos/400/400?random=24"
                  alt="Lead Consultant"
                  className="rounded-full mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Meet Your Consultant
                </h2>
                <p className="text-lg">
                  John Doe is a seasoned consultant with over 20 years of
                  experience helping businesses achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-8 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
