import { DemoPage } from '../../../components/landing/DemoPage'
import { studyDepthInstructorDemo } from '../../../config/landings/study/depth-instructor'
import { studyDepthInstructorPalette } from '../../../theme/palettes/study/depth-instructor'
import { StudyDepthInstructorNavbar } from './Navbar'

export function StudyDepthInstructorPage() {
  return (
    <DemoPage
      demo={studyDepthInstructorDemo}
      palette={studyDepthInstructorPalette}
      customNavbar={<StudyDepthInstructorNavbar />}
    />
  )
}
