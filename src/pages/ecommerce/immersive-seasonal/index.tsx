import { DemoPage } from '../../../components/landing/DemoPage'
import { ecommerceImmersiveSeasonalDemo } from '../../../config/landings/ecommerce/immersive-seasonal'
import { ecommerceImmersiveSeasonalPalette } from '../../../theme/palettes/ecommerce/immersive-seasonal'
import { EcommerceImmersiveSeasonalNavbar } from './Navbar'

export function EcommerceImmersiveSeasonalPage() {
  return (
    <DemoPage
      demo={ecommerceImmersiveSeasonalDemo}
      palette={ecommerceImmersiveSeasonalPalette}
      customNavbar={<EcommerceImmersiveSeasonalNavbar />}
    />
  )
}
