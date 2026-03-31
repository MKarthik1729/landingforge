import { ServicesMotionTransformationNavbar } from './Navbar'

export function ServicesMotionTransformationPage() {
  return (
    <div className="bg-white text-gray-800">
      <ServicesMotionTransformationNavbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Transform Your Life, Transform Your Business
            </h1>
            <p className="text-lg mb-8">
              Unlock your true potential and achieve extraordinary results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://picsum.photos/600/400?random=25"
                  alt="Before"
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-bold mt-4">Before</h3>
              </div>
              <div>
                <img
                  src="https://picsum.photos/600/400?random=26"
                  alt="After"
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-bold mt-4">After</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Story of Transformation Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              A Journey of a Thousand Miles...
            </h2>
            <p className="text-lg leading-relaxed">
              ...begins with a single step. We are here to guide you on your
              journey of transformation, providing you with the tools,
              support, and inspiration you need to succeed.
            </p>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Discovery</h3>
                <p>
                  We start by understanding your goals and challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. Strategy</h3>
                <p>
                  We develop a customized roadmap for your success.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Implementation</h3>
                <p>
                  We work with you to implement the plan and track progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Real People, Real Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src="https://picsum.photos/600/400?random=27"
                  alt="Testimonial 1"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-800 p-4 rounded-full">
                    Play
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/600/400?random=28"
                  alt="Testimonial 2"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-800 p-4 rounded-full">
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-lg mb-8">
              Your new life is just a click away.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-8 rounded">
              Start Your Journey
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
