import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { studyCardEnrollmentDemo } from '../../../config/landings/study/card-enrollment'

export function StudyCardEnrollmentNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={studyCardEnrollmentDemo.id}
      title="Enrollment cards"
      subtitle="Program selection"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Programs', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Apply CTA', href: '#contact' },
      ]}
    />
  )
}
