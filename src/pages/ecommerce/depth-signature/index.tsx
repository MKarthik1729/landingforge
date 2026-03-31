import { DemoPage } from '../../../components/landing/DemoPage'
import { ecommerceDepthSignatureDemo } from '../../../config/landings/ecommerce/depth-signature'
import { ecommerceDepthSignaturePalette } from '../../../theme/palettes/ecommerce/depth-signature'
import { EcommerceDepthSignatureNavbar } from './Navbar'

export function EcommerceDepthSignaturePage() {
  return (
    <DemoPage
      demo={ecommerceDepthSignatureDemo}
      palette={ecommerceDepthSignaturePalette}
      customNavbar={<EcommerceDepthSignatureNavbar />}
    />
  )
}
