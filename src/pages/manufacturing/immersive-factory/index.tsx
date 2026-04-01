import { useState, useEffect } from 'react'
import { ManufacturingImmersiveFactoryNavbar } from './Navbar'

export function ManufacturingImmersiveFactoryPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/manufacturing/immersive-factory/hero.jpg',
      '/images/manufacturing/immersive-factory/factory-area-1.jpg',
      '/images/manufacturing/immersive-factory/factory-area-2.jpg',
      '/images/manufacturing/immersive-factory/factory-area-3.jpg',
      '/images/manufacturing/immersive-factory/factory-workers.jpg',
    ];

    const loadImages = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(loadImages).then(() => setImagesLoaded(true));
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white">
      <ManufacturingImmersiveFactoryNavbar />
      <main>
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: 'url(/images/manufacturing/immersive-factory/hero.jpg)',
          }}
        >
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to the Factory of the Future
            </h1>
            <p className="text-xl mb-8">
              Experience the power of Industry 4.0.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded">
              Schedule a Demo
            </button>
          </div>
        </section>

        {/* Key Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Key Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-2">IoT & Big Data</h3>
                <p>
                  Real-time data from connected devices for actionable
                  insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
                <p>
                  Predictive maintenance and process optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Robotics & Automation</h3>
                <p>
                  Increased efficiency and improved safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Virtual Tour
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img
                src="/images/manufacturing/immersive-factory/factory-area-1.jpg"
                alt="Factory Area 1"
                className="rounded-lg"
              />
              <img
                src="/images/manufacturing/immersive-factory/factory-area-2.jpg"
                alt="Factory Area 2"
                className="rounded-lg"
              />
              <img
                src="/images/manufacturing/immersive-factory/factory-area-3.jpg"
                alt="Factory Area 3"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Benefits of the Immersive Factory
                </h2>
                <ul className="text-lg space-y-4">
                  <li>Increased efficiency and productivity</li>
                  <li>Predictive maintenance and reduced downtime</li>
                  <li>Improved safety and working conditions</li>
                  <li>Enhanced quality control</li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/manufacturing/immersive-factory/factory-workers.jpg"
                  alt="Factory workers"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-800 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Ready to transform your manufacturing?
            </h2>
            <p className="text-xl mb-8">
              Schedule a demo with one of our experts.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded">
              Schedule a Demo
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
