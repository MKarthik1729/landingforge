import { ecommerceCardCollectionDemo } from './ecommerce/card-collection'
import { ecommerceDepthSignatureDemo } from './ecommerce/depth-signature'
import { ecommerceImmersiveSeasonalDemo } from './ecommerce/immersive-seasonal'
import { ecommerceMotionLaunchDemo } from './ecommerce/motion-launch'
import { manufacturingCardRfqDemo } from './manufacturing/card-rfq'
import { manufacturingDepthCertificationsDemo } from './manufacturing/depth-certifications'
import { manufacturingImmersiveFactoryDemo } from './manufacturing/immersive-factory'
import { manufacturingMotionProcessDemo } from './manufacturing/motion-process'
import { servicesCardBookingDemo } from './services/card-booking'
import { servicesDepthConsultingDemo } from './services/depth-consulting'
import { servicesImmersiveBrandDemo } from './services/immersive-brand'
import { servicesMotionTransformationDemo } from './services/motion-transformation'
import { studyCardEnrollmentDemo } from './study/card-enrollment'
import { studyDepthInstructorDemo } from './study/depth-instructor'
import { studyImmersiveAdmissionsDemo } from './study/immersive-admissions'
import { studyMotionCohortDemo } from './study/motion-cohort'

export const allDemos = [
  // manufacturingCardRfqDemo,
  // manufacturingMotionProcessDemo,
  // manufacturingDepthCertificationsDemo,
  manufacturingImmersiveFactoryDemo,  //good
  // servicesCardBookingDemo,
  servicesMotionTransformationDemo,  // okok
  // servicesDepthConsultingDemo,  // first change need to make and simpleones
  servicesImmersiveBrandDemo, //good
  // ecommerceCardCollectionDemo,
  // ecommerceMotionLaunchDemo, 
  ecommerceDepthSignatureDemo, // okok
  ecommerceImmersiveSeasonalDemo, //okok
  // studyCardEnrollmentDemo,
  studyMotionCohortDemo,
  studyDepthInstructorDemo,
  studyImmersiveAdmissionsDemo,
] as const

export const demosByCategory = {
  manufacturing: [
    manufacturingCardRfqDemo,
    manufacturingMotionProcessDemo,
    manufacturingDepthCertificationsDemo,
    manufacturingImmersiveFactoryDemo,
  ],
  services: [
    servicesCardBookingDemo,
    servicesMotionTransformationDemo,
    servicesDepthConsultingDemo,
    servicesImmersiveBrandDemo,
  ],
  ecommerce: [
    ecommerceCardCollectionDemo,
    ecommerceMotionLaunchDemo,
    ecommerceDepthSignatureDemo,
    ecommerceImmersiveSeasonalDemo,
  ],
  study: [
    studyCardEnrollmentDemo,
    studyMotionCohortDemo,
    studyDepthInstructorDemo,
    studyImmersiveAdmissionsDemo,
  ],
} as const

export function getDemoPath(demo: { category: string; slug: string }) {
  return `/${demo.category}/${demo.slug}`
}

export function getNextDemo(currentDemoId: string) {
  const currentIndex = allDemos.findIndex((demo) => demo.id === currentDemoId)

  if (currentIndex === -1) {
    return allDemos[0]
  }

  return allDemos[(currentIndex + 1) % allDemos.length]
}
