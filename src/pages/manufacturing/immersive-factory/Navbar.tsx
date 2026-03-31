import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { manufacturingImmersiveFactoryDemo } from '../../../config/landings/manufacturing/immersive-factory'

export function ManufacturingImmersiveFactoryNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={manufacturingImmersiveFactoryDemo.id}
      title="Interactive plant"
      subtitle="Factory tour"
      links={[
        { label: 'Hero', href: '#overview' },
        { label: 'Explore', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Visit CTA', href: '#contact' },
      ]}
    />
  )
}
