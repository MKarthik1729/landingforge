import { SectionsDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { manufacturingDepthCertificationsDemo } from '../../../config/landings/manufacturing/depth-certifications'

export function ManufacturingDepthCertificationsNavbar() {
  return (
    <SectionsDemoNavbar
      currentDemoId={manufacturingDepthCertificationsDemo.id}
      title="Sections flow"
      subtitle="Compliance focus"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Standards', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Contact', href: '#contact' },
      ]}
    />
  )
}
