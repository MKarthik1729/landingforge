import { DemoPage } from '../../../components/landing/DemoPage'
import { manufacturingImmersiveFactoryDemo } from '../../../config/landings/manufacturing/immersive-factory'
import { manufacturingImmersiveFactoryPalette } from '../../../theme/palettes/manufacturing/immersive-factory'
import { ManufacturingImmersiveFactoryNavbar } from './Navbar'

export function ManufacturingImmersiveFactoryPage() {
  return (
    <DemoPage
      demo={manufacturingImmersiveFactoryDemo}
      palette={manufacturingImmersiveFactoryPalette}
      customNavbar={<ManufacturingImmersiveFactoryNavbar />}
    />
  )
}
