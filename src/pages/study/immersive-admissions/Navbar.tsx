import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { studyImmersiveAdmissionsDemo } from '../../../config/landings/study/immersive-admissions'

export function StudyImmersiveAdmissionsNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={studyImmersiveAdmissionsDemo.id}
      title="Interactive admissions"
      subtitle="Campus story"
      links={[
        { label: 'Hero', href: '#overview' },
        { label: 'Explore', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Apply CTA', href: '#contact' },
      ]}
    />
  )
}
