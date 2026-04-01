import { ManufacturingDepthCertificationsNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { manufacturingDepthCertificationsPalette } from '../../../theme/palettes/manufacturing/depth-certifications'
import { manufacturingDepthCertificationsDemo } from '../../../config/landings/manufacturing/depth-certifications'

export function ManufacturingDepthCertificationsPage() {
  return (
  <SiteLayout
    palette={manufacturingDepthCertificationsPalette}
    navbarMode={manufacturingDepthCertificationsDemo.navbarMode}
    currentCategory={manufacturingDepthCertificationsDemo.category}
    title={manufacturingDepthCertificationsDemo.title}
    customNavbar={<ManufacturingDepthCertificationsNavbar />}
  >
      <main>
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Achieve Manufacturing Excellence with Our Certifications
            </h1>
            <p className="text-lg mb-8">
              Demonstrate your commitment to quality and compliance.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded">
              Get Certified
            </button>
          </div>
        </section>

        {/* Importance of Certifications Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Certifications Matter
            </h2>
            <p className="text-lg leading-relaxed">
              In today's competitive market, manufacturing certifications are
              essential to build trust with your customers, ensure product
              quality, and comply with industry regulations. They open doors
              to new markets and partnerships.
            </p>
          </div>
        </section>

        {/* Certifications Offered Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Certifications We Offer
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-white mx-auto rounded-full mb-4 flex items-center justify-center font-bold">
                  ISO 9001
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white mx-auto rounded-full mb-4 flex items-center justify-center font-bold">
                  AS9100
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white mx-auto rounded-full mb-4 flex items-center justify-center font-bold">
                  ISO 13485
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-white mx-auto rounded-full mb-4 flex items-center justify-center font-bold">
                  IATF 16949
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Application</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. Audit</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Certification</h3>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">4. Surveillance</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">
              What Our Clients Say
            </h2>
            <div className="space-y-8">
              <div className="testimonial">
                <p className="text-lg italic">
                  "The certification process was smooth and professional. It
                  has significantly improved our business."
                </p>
                <p className="mt-4 font-bold">- CEO, ABC Manufacturing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Get Certified?
            </h2>
            <p className="text-lg mb-8">
              Contact us today to start your certification journey.
            </p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
