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
  servicesMotionTransformationDemo,  
  servicesDepthConsultingDemo,  
  servicesImmersiveBrandDemo, //good
  studyCardEnrollmentDemo,
  studyMotionCohortDemo,
  studyDepthInstructorDemo,
  studyImmersiveAdmissionsDemo,
  servicesCardBookingDemo,
  ecommerceCardCollectionDemo,
  ecommerceMotionLaunchDemo, 
  ecommerceDepthSignatureDemo, // okok
  ecommerceImmersiveSeasonalDemo, //okok
  manufacturingCardRfqDemo,
  manufacturingMotionProcessDemo,
  manufacturingDepthCertificationsDemo,
  manufacturingImmersiveFactoryDemo,  //good
] as const

export const demosByCategory = {
  study: [
    studyCardEnrollmentDemo,
    studyMotionCohortDemo,
    studyDepthInstructorDemo,
    studyImmersiveAdmissionsDemo,
  ],
  services: [
    servicesMotionTransformationDemo,
    servicesDepthConsultingDemo,
    servicesCardBookingDemo,
    servicesImmersiveBrandDemo,
  ],
  manufacturing: [
    manufacturingCardRfqDemo,
    manufacturingMotionProcessDemo,
    manufacturingDepthCertificationsDemo,
    manufacturingImmersiveFactoryDemo,
  ],
  ecommerce: [
    ecommerceCardCollectionDemo,
    ecommerceMotionLaunchDemo,
    ecommerceDepthSignatureDemo,
    ecommerceImmersiveSeasonalDemo,
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
