import { DemoPage } from '../../../components/landing/DemoPage'
import { ecommerceMotionLaunchDemo } from '../../../config/landings/ecommerce/motion-launch'
import { ecommerceMotionLaunchPalette } from '../../../theme/palettes/ecommerce/motion-launch'
import { EcommerceMotionLaunchNavbar } from './Navbar'

export function EcommerceMotionLaunchPage() {
  return (
    <DemoPage
      demo={ecommerceMotionLaunchDemo}
      palette={ecommerceMotionLaunchPalette}
      customNavbar={<EcommerceMotionLaunchNavbar />}
    />
  )
}
