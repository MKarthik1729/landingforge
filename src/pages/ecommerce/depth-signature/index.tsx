import { useState, useEffect } from 'react'
import { EcommerceDepthSignatureNavbar } from './Navbar'

export function EcommerceDepthSignaturePage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/ecommerce/depth-signature/hero.jpg',
      '/images/ecommerce/depth-signature/product.jpg',
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
    <div className="bg-stone-100 text-stone-800">
      <EcommerceDepthSignatureNavbar />
      <main>
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center text-white"
          style={{ backgroundImage: 'url(/images/ecommerce/depth-signature/hero.jpg)' }}
        >
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-serif mb-4">The Signature Line</h1>
            <p className="text-2xl font-light">
              Exquisite craftsmanship for the discerning individual.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif mb-8">Our Story</h2>
            <p className="text-lg leading-relaxed">
              We believe in the power of craftsmanship. Each piece in our
              Signature Line is meticulously crafted by master artisans, using
              only the finest materials. Our passion for quality and attention

              to detail is evident in every stitch, every cut, and every
              crease.
            </p>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/images/ecommerce/depth-signature/product.jpg"
                  alt="Product Detail"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-serif mb-8">
                  Uncompromising Quality
                </h2>
                <ul className="text-lg space-y-4">
                  <li>Finest Italian Leather</li>
                  <li>Hand-stitched detailing</li>
                  <li>Solid brass hardware</li>
                  <li>Limited production run</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-serif mb-12">What Our Clients Say</h2>
            <div className="space-y-12">
              <div className="testimonial">
                <p className="text-xl italic">
                  "The quality is simply outstanding. You can feel the
                  craftsmanship in every detail."
                </p>
                <p className="mt-4 font-bold">- A. Customer</p>
              </div>
              <div className="testimonial">
                <p className="text-xl italic">
                  "A truly timeless piece. I will cherish it for years to
                  come."
                </p>
                <p className="mt-4 font-bold">- B. Client</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-stone-800 text-white py-12 text-center">
          <div className="container mx-auto">
            <p>&copy; 2026 The Signature Line. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
