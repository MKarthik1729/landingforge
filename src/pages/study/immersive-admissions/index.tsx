import { DemoPage } from '../../../components/landing/DemoPage'
import { studyImmersiveAdmissionsDemo } from '../../../config/landings/study/immersive-admissions'
import { studyImmersiveAdmissionsPalette } from '../../../theme/palettes/study/immersive-admissions'
import { StudyImmersiveAdmissionsNavbar } from './Navbar'

export function StudyImmersiveAdmissionsPage() {
  return (
    <DemoPage
      demo={studyImmersiveAdmissionsDemo}
      palette={studyImmersiveAdmissionsPalette}
      customNavbar={<StudyImmersiveAdmissionsNavbar />}
    />
  )
}
