import { CardDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { manufacturingCardRfqDemo } from '../../../config/landings/manufacturing/card-rfq'

export function ManufacturingCardRfqNavbar() {
  return (
    <CardDemoNavbar
      currentDemoId={manufacturingCardRfqDemo.id}
      title="RFQ cards"
      subtitle="Procurement-ready"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Capabilities', href: '#offer' },
        { label: 'Trust', href: '#proof' },
        { label: 'Quote CTA', href: '#contact' },
      ]}
    />
  )
}
