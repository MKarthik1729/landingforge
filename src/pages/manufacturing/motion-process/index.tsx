import { DemoPage } from '../../../components/landing/DemoPage'
import { manufacturingMotionProcessDemo } from '../../../config/landings/manufacturing/motion-process'
import { manufacturingMotionProcessPalette } from '../../../theme/palettes/manufacturing/motion-process'
import { ManufacturingMotionProcessNavbar } from './Navbar'

export function ManufacturingMotionProcessPage() {
  return (
    <DemoPage
      demo={manufacturingMotionProcessDemo}
      palette={manufacturingMotionProcessPalette}
      customNavbar={<ManufacturingMotionProcessNavbar />}
    />
  )
}
