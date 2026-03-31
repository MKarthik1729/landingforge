import { DemoPage } from '../../../components/landing/DemoPage'
import { studyMotionCohortDemo } from '../../../config/landings/study/motion-cohort'
import { studyMotionCohortPalette } from '../../../theme/palettes/study/motion-cohort'
import { StudyMotionCohortNavbar } from './Navbar'

export function StudyMotionCohortPage() {
  return (
    <DemoPage
      demo={studyMotionCohortDemo}
      palette={studyMotionCohortPalette}
      customNavbar={<StudyMotionCohortNavbar />}
    />
  )
}
