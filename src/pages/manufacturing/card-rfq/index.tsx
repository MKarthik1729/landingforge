import { DemoPage } from '../../../components/landing/DemoPage'
import { manufacturingCardRfqDemo } from '../../../config/landings/manufacturing/card-rfq'
import { manufacturingCardRfqPalette } from '../../../theme/palettes/manufacturing/card-rfq'
import { ManufacturingCardRfqNavbar } from './Navbar'

export function ManufacturingCardRfqPage() {
  return (
    <DemoPage
      demo={manufacturingCardRfqDemo}
      palette={manufacturingCardRfqPalette}
      customNavbar={<ManufacturingCardRfqNavbar />}
    />
  )
}
