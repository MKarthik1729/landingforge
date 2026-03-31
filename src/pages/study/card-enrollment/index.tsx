import { DemoPage } from '../../../components/landing/DemoPage'
import { studyCardEnrollmentDemo } from '../../../config/landings/study/card-enrollment'
import { studyCardEnrollmentPalette } from '../../../theme/palettes/study/card-enrollment'
import { StudyCardEnrollmentNavbar } from './Navbar'

export function StudyCardEnrollmentPage() {
  return (
    <DemoPage
      demo={studyCardEnrollmentDemo}
      palette={studyCardEnrollmentPalette}
      customNavbar={<StudyCardEnrollmentNavbar />}
    />
  )
}
