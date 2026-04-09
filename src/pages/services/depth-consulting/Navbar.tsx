import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { servicesDepthConsultingDemo } from '../../../config/landings/services/depth-consulting'

export function ServicesDepthConsultingNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={servicesDepthConsultingDemo.id}
      title="Sections consulting"
      subtitle="Premium offer"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Offer', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Consult CTA', href: '#contact' },
      ]}
    />
  )
}
