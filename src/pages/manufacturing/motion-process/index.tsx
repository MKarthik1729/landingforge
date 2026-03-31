import { ManufacturingMotionProcessNavbar } from './Navbar'

export function ManufacturingMotionProcessPage() {
  return (
    <div className="bg-white text-gray-800">
      <ManufacturingMotionProcessNavbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Optimize Your Manufacturing Process
            </h1>
            <p className="text-lg mb-8">
              From raw materials to finished product, we've got you covered.
            </p>
            <div className="bg-gray-200 w-full md:w-2/3 mx-auto h-96 mb-8">
              {/* Animation Placeholder */}
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded">
              Get a Free Assessment
            </button>
          </div>
        </section>

        {/* Process Visualization Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Our Optimized Process
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-indigo-200 mx-auto rounded-full mb-4"></div>
                <h3 className="text-xl font-bold">Design</h3>
              </div>
              <div className="text-gray-400">{'->'}</div>
              <div className="text-center">
                <div className="w-24 h-24 bg-indigo-200 mx-auto rounded-full mb-4"></div>
                <h3 className="text-xl font-bold">Fabrication</h3>
              </div>
              <div className="text-gray-400">{'->'}</div>
              <div className="text-center">
                <div className="w-24 h-24 bg-indigo-200 mx-auto rounded-full mb-4"></div>
                <h3 className="text-xl font-bold">Assembly</h3>
              </div>
              <div className="text-gray-400">{'->'}</div>
              <div className="text-center">
                <div className="w-24 h-24 bg-indigo-200 mx-auto rounded-full mb-4"></div>
                <h3 className="text-xl font-bold">Quality Control</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://picsum.photos/800/600?random=22"
                  alt="Manufacturing"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Faster, Smarter, Better
                </h2>
                <ul className="text-lg space-y-4">
                  <li>Reduced cycle time by 30%</li>
                  <li>Improved accuracy and consistency</li>
                  <li>Significant cost savings</li>
                  <li>Real-time process monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">Case Study</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                How XYZ Corp Increased Production by 50%
              </h3>
              <p className="text-lg">
                By implementing our optimized process, XYZ Corp was able to
                dramatically increase their production output while maintaining
                the highest quality standards.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your Process?
            </h2>
            <p className="text-lg mb-8">
              Contact us today for a free assessment.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded">
              Get a Free Assessment
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
