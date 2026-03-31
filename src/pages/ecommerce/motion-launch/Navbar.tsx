import { MotionDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { ecommerceMotionLaunchDemo } from '../../../config/landings/ecommerce/motion-launch'

export function EcommerceMotionLaunchNavbar() {
  return (
    <MotionDemoNavbar
      currentDemoId={ecommerceMotionLaunchDemo.id}
      title="Launch motion"
      subtitle="Drop campaign"
      links={[
        { label: 'Launch', href: '#overview' },
        { label: 'Reveal', href: '#offer' },
        { label: 'Trust', href: '#proof' },
        { label: 'Buy CTA', href: '#contact' },
      ]}
    />
  )
}
