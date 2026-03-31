import { DemoPage } from '../../../components/landing/DemoPage'
import { servicesCardBookingDemo } from '../../../config/landings/services/card-booking'
import { servicesCardBookingPalette } from '../../../theme/palettes/services/card-booking'
import { ServicesCardBookingNavbar } from './Navbar'

export function ServicesCardBookingPage() {
  return (
    <DemoPage
      demo={servicesCardBookingDemo}
      palette={servicesCardBookingPalette}
      customNavbar={<ServicesCardBookingNavbar />}
    />
  )
}
