import { DemoPage } from '../../../components/landing/DemoPage'
import { servicesDepthConsultingDemo } from '../../../config/landings/services/depth-consulting'
import { servicesDepthConsultingPalette } from '../../../theme/palettes/services/depth-consulting'
import { ServicesDepthConsultingNavbar } from './Navbar'

export function ServicesDepthConsultingPage() {
  return (
    <DemoPage
      demo={servicesDepthConsultingDemo}
      palette={servicesDepthConsultingPalette}
      customNavbar={<ServicesDepthConsultingNavbar />}
    />
  )
}
