import { useState, useEffect } from 'react'
import { EcommerceCardCollectionNavbar } from './Navbar'

export function EcommerceCardCollectionPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/landings/ecommerce-card-collection-01.jpg',
      '/images/landings/ecommerce-card-collection-02.jpg',
      '/images/landings/ecommerce-card-collection-03.jpg',
      '/images/landings/ecommerce-card-collection-04.jpg',
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
    <div className="bg-white text-gray-800">
      <EcommerceCardCollectionNavbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-100 py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">The Card Collection</h1>
            <p className="text-xl mb-8">
              Discover our exclusive collection of beautifully designed cards.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="feature">
                <h3 className="text-xl font-bold mb-2">Unique Designs</h3>
                <p>
                  Each card is crafted with love by our talented designers.
                </p>
              </div>
              <div className="feature">
                <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                <p>
                  We use only the finest materials for a luxurious feel.
                </p>
              </div>
              <div className="feature">
                <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                <p>
                  Get your cards delivered to your doorstep in no time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/images/landings/ecommerce-card-collection-01.jpg"
                  alt="Card 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">Card Name 1</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/images/landings/ecommerce-card-collection-02.jpg"
                  alt="Card 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">Card Name 2</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/images/landings/ecommerce-card-collection-03.jpg"
                  alt="Card 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">Card Name 3</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/images/landings/ecommerce-card-collection-04.jpg"
                  alt="Card 4"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">Card Name 4</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to find the perfect card?
            </h2>
            <p className="text-xl mb-8">
              Browse our collection and find the perfect card for any occasion.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Browse Now
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
