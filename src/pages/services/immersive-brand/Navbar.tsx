import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { servicesImmersiveBrandDemo } from '../../../config/landings/services/immersive-brand'

export function ServicesImmersiveBrandNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={servicesImmersiveBrandDemo.id}
      title="Wood comfort"
      subtitle="Beds, chairs, sofas"
      links={[
        { label: 'Hero', href: '#overview' },
        { label: 'Collection', href: '#collections' },
        { label: 'Comfort', href: '#comfort' },
        { label: 'Studio', href: '#contact' },
      ]}
    />
  )
}
