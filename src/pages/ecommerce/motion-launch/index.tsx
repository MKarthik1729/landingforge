import { useState, useEffect } from 'react'
import { EcommerceMotionLaunchNavbar } from './Navbar'

export function EcommerceMotionLaunchPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/ecommerce/motion-launch/problem-solution.jpg',
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
    <div className="bg-black text-white">
      <EcommerceMotionLaunchNavbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-cyan-400">
              The Future is Now
            </h1>
            <p className="text-xl mb-8">
              Experience the next generation of technology.
            </p>
            <div className="bg-gray-800 w-full md:w-2/3 mx-auto h-96 mb-8">
              {/* Video Placeholder */}
            </div>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-8 rounded-full">
              Pre-Order Now
            </button>
          </div>
        </section>

        {/* Problem-Solution Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Tired of slow, outdated technology?
                </h2>
                <p className="text-lg">
                  Our new device is 10x faster and smarter than anything you've
                  ever used.
                </p>
              </div>
              <div>
                <img
                  src="/images/ecommerce/motion-launch/problem-solution.jpg"
                  alt="Frustrated user"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-800 mx-auto rounded-full mb-4">
                  {/* Animation Placeholder */}
                </div>
                <h3 className="text-xl font-bold mb-2">Step 1</h3>
                <p>Connect the device.</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-800 mx-auto rounded-full mb-4">
                  {/* Animation Placeholder */}
                </div>
                <h3 className="text-xl font-bold mb-2">Step 2</h3>
                <p>Install the software.</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-800 mx-auto rounded-full mb-4">
                  {/* Animation Placeholder */}
                </div>
                <h3 className="text-xl font-bold mb-2">Step 3</h3>
                <p>Enjoy the speed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Specifications
            </h2>
            <div className="max-w-2xl mx-auto">
              <ul className="grid grid-cols-2 gap-8">
                <li>Processor: Quantum Core</li>
                <li>RAM: 64GB DDR5</li>
                <li>Storage: 4TB NVMe SSD</li>
                <li>Connectivity: Wi-Fi 7</li>
                <li>Ports: Thunderbolt 5</li>
                <li>Battery: 24-hour</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pre-Order Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Don't Miss Out
            </h2>
            <p className="text-xl mb-8">
              Be one of the first to own the future.
            </p>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-8 rounded-full">
              Pre-Order Now
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
