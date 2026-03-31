import { MotionDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { servicesMotionTransformationDemo } from '../../../config/landings/services/motion-transformation'

export function ServicesMotionTransformationNavbar() {
  return (
    <MotionDemoNavbar
      currentDemoId={servicesMotionTransformationDemo.id}
      title="Transformation motion"
      subtitle="Story-first"
      links={[
        { label: 'Story', href: '#overview' },
        { label: 'Journey', href: '#offer' },
        { label: 'Results', href: '#proof' },
        { label: 'Contact', href: '#contact' },
      ]}
    />
  )
}
