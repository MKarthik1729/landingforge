import { DemoPage } from '../../../components/landing/DemoPage'
import { servicesMotionTransformationDemo } from '../../../config/landings/services/motion-transformation'
import { servicesMotionTransformationPalette } from '../../../theme/palettes/services/motion-transformation'
import { ServicesMotionTransformationNavbar } from './Navbar'

export function ServicesMotionTransformationPage() {
  return (
    <DemoPage
      demo={servicesMotionTransformationDemo}
      palette={servicesMotionTransformationPalette}
      customNavbar={<ServicesMotionTransformationNavbar />}
    />
  )
}
