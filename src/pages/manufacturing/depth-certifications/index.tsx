import { DemoPage } from '../../../components/landing/DemoPage'
import { manufacturingDepthCertificationsDemo } from '../../../config/landings/manufacturing/depth-certifications'
import { manufacturingDepthCertificationsPalette } from '../../../theme/palettes/manufacturing/depth-certifications'
import { ManufacturingDepthCertificationsNavbar } from './Navbar'

export function ManufacturingDepthCertificationsPage() {
  return (
    <DemoPage
      demo={manufacturingDepthCertificationsDemo}
      palette={manufacturingDepthCertificationsPalette}
      customNavbar={<ManufacturingDepthCertificationsNavbar />}
    />
  )
}
