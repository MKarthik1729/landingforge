import { CardDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { servicesCardBookingDemo } from '../../../config/landings/services/card-booking'

export function ServicesCardBookingNavbar() {
  return (
    <CardDemoNavbar
      currentDemoId={servicesCardBookingDemo.id}
      title="Booking cards"
      subtitle="Service packages"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Packages', href: '#offer' },
        { label: 'Trust', href: '#proof' },
        { label: 'Book CTA', href: '#contact' },
      ]}
    />
  )
}
