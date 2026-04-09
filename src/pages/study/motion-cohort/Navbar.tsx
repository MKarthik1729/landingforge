import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { studyMotionCohortDemo } from '../../../config/landings/study/motion-cohort'

export function StudyMotionCohortNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={studyMotionCohortDemo.id}
      title="Cohort motion"
      subtitle="Learning journey"
      links={[
        { label: 'Journey', href: '#overview' },
        { label: 'Stages', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Enroll CTA', href: '#contact' },
      ]}
    />
  )
}
