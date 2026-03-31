import { SectionsDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { studyDepthInstructorDemo } from '../../../config/landings/study/depth-instructor'

export function StudyDepthInstructorNavbar() {
  return (
    <SectionsDemoNavbar
      currentDemoId={studyDepthInstructorDemo.id}
      title="Sections authority"
      subtitle="Instructor trust"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Teaching', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Apply CTA', href: '#contact' },
      ]}
    />
  )
}
