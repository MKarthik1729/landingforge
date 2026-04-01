import { useState, useEffect } from 'react'
import { ManufacturingCardRfqNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { manufacturingCardRfqPalette } from '../../../theme/palettes/manufacturing/card-rfq'
import { manufacturingCardRfqDemo } from '../../../config/landings/manufacturing/card-rfq'

export function ManufacturingCardRfqPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/manufacturing/card-rfq/manufacturing-process.jpg',
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
  <SiteLayout
    palette={manufacturingCardRfqPalette}
    navbarMode={manufacturingCardRfqDemo.navbarMode}
    currentCategory={manufacturingCardRfqDemo.category}
    title={manufacturingCardRfqDemo.title}
    customNavbar={<ManufacturingCardRfqNavbar />}
  >
        <div className="text-xl">Loading...</div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout
      palette={manufacturingCardRfqPalette}
      navbarMode={manufacturingCardRfqDemo.navbarMode}
      currentCategory={manufacturingCardRfqDemo.category}
      title={manufacturingCardRfqDemo.title}
      customNavbar={<ManufacturingCardRfqNavbar />}
    >
      <main>
        {/* Hero Section */}
        <section className="bg-white py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Streamline Your Manufacturing Procurement
            </h1>
            <p className="text-lg mb-8">
              Get competitive quotes from our network of trusted suppliers.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">
              Request a Quote
            </button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Submit Your RFQ</h3>
                <p>
                  Provide your project details and specifications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. Receive Quotes</h3>
                <p>
                  Get multiple quotes from qualified suppliers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Choose Your Supplier</h3>
                <p>
                  Select the best quote and start your project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/images/manufacturing/card-rfq/manufacturing-process.jpg"
                  alt="Manufacturing Process"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Why Choose Our Platform?
                </h2>
                <ul className="text-lg space-y-4">
                  <li>Access to a wide network of suppliers</li>
                  <li>Competitive pricing and transparent process</li>
                  <li>Quality assurance and on-time delivery</li>
                  <li>Dedicated support team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-gray-500 font-bold text-2xl">Partner 1</div>
              <div className="text-gray-500 font-bold text-2xl">Partner 2</div>
              <div className="text-gray-500 font-bold text-2xl">Partner 3</div>
              <div className="text-gray-500 font-bold text-2xl">Partner 4</div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
