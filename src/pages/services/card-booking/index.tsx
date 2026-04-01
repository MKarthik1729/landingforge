import { ServicesCardBookingNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { servicesCardBookingPalette } from '../../../theme/palettes/services/card-booking'
import { servicesCardBookingDemo } from '../../../config/landings/services/card-booking'

export function ServicesCardBookingPage() {
  return (
  <SiteLayout
    palette={servicesCardBookingPalette}
    navbarMode={servicesCardBookingDemo.navbarMode}
    currentCategory={servicesCardBookingDemo.category}
    title={servicesCardBookingDemo.title}
    customNavbar={<ServicesCardBookingNavbar />}
  >
      <main>
        {/* Hero Section */}
        <section className="bg-blue-100 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Book Your Next Appointment with Ease
            </h1>
            <p className="text-lg mb-8">
              Simple, fast, and convenient booking for all our services.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded">
              Book Now
            </button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Choose a Service</h3>
                <p>
                  Browse our wide range of services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. Select a Time</h3>
                <p>
                  Pick a date and time that works for you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Confirm Booking</h3>
                <p>
                  Get instant confirmation of your appointment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4">Service 1</h3>
                <p className="mb-4">
                  Description of service 1.
                </p>
                <p className="font-bold text-lg">$50</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4">Service 2</h3>
                <p className="mb-4">
                  Description of service 2.
                </p>
                <p className="font-bold text-lg">$75</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-4">Service 3</h3>
                <p className="mb-4">
                  Description of service 3.
                </p>
                <p className="font-bold text-lg">$100</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">
              What Our Customers Say
            </h2>
            <div className="space-y-8">
              <div className="testimonial">
                <p className="text-lg italic">
                  "The booking process was so easy and convenient. I'll
                  definitely be using this service again!"
                </p>
                <p className="mt-4 font-bold">- Jane D.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-12 text-center">
          <div className="container mx-auto">
            <p>&copy; 2026 Your Company. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </SiteLayout>
  )
}
