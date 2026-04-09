import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { manufacturingMotionProcessDemo } from '../../../config/landings/manufacturing/motion-process'

export function ManufacturingMotionProcessNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={manufacturingMotionProcessDemo.id}
      title="Process motion"
      subtitle="Factory story"
      links={[
        { label: 'Start', href: '#overview' },
        { label: 'Flow', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'CTA', href: '#contact' },
      ]}
    />
  )
}
