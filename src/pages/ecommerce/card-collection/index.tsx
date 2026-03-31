import { DemoPage } from '../../../components/landing/DemoPage'
import { ecommerceCardCollectionDemo } from '../../../config/landings/ecommerce/card-collection'
import { ecommerceCardCollectionPalette } from '../../../theme/palettes/ecommerce/card-collection'
import { EcommerceCardCollectionNavbar } from './Navbar'

export function EcommerceCardCollectionPage() {
  return (
    <DemoPage
      demo={ecommerceCardCollectionDemo}
      palette={ecommerceCardCollectionPalette}
      customNavbar={<EcommerceCardCollectionNavbar />}
    />
  )
}
