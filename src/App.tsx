import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { HomePage } from './pages/home/HomePage'
import { NotFoundPage } from './pages/not-found/NotFoundPage'
import { EcommerceCardCollectionPage } from './pages/ecommerce/card-collection'
import { EcommerceDepthSignaturePage } from './pages/ecommerce/depth-signature'
import { EcommerceImmersiveSeasonalPage } from './pages/ecommerce/immersive-seasonal'
import { EcommerceMotionLaunchPage } from './pages/ecommerce/motion-launch'
import { ManufacturingCardRfqPage } from './pages/manufacturing/card-rfq'
import { ManufacturingDepthCertificationsPage } from './pages/manufacturing/depth-certifications'
import { ManufacturingImmersiveFactoryPage } from './pages/manufacturing/immersive-factory'
import { ManufacturingMotionProcessPage } from './pages/manufacturing/motion-process'
import { ServicesCardBookingPage } from './pages/services/card-booking'
import { ServicesDepthConsultingPage } from './pages/services/depth-consulting'
import { ServicesImmersiveBrandPage } from './pages/services/immersive-brand'
import { ServicesMotionTransformationPage } from './pages/services/motion-transformation'
import { StudyCardEnrollmentPage } from './pages/study/card-enrollment'
import { StudyDepthInstructorPage } from './pages/study/depth-instructor'
import { StudyImmersiveAdmissionsPage } from './pages/study/immersive-admissions'
import { StudyMotionCohortPage } from './pages/study/motion-cohort'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/manufacturing/card-rfq"
          element={<ManufacturingCardRfqPage />}
        />
        <Route
          path="/manufacturing/motion-process"
          element={<ManufacturingMotionProcessPage />}
        />
        <Route
          path="/manufacturing/depth-certifications"
          element={<ManufacturingDepthCertificationsPage />}
        />
        <Route
          path="/manufacturing/immersive-factory"
          element={<ManufacturingImmersiveFactoryPage />}
        />
        <Route path="/services/card-booking" element={<ServicesCardBookingPage />} />
        <Route
          path="/services/motion-transformation"
          element={<ServicesMotionTransformationPage />}
        />
        <Route
          path="/services/depth-consulting"
          element={<ServicesDepthConsultingPage />}
        />
        <Route
          path="/services/immersive-brand"
          element={<ServicesImmersiveBrandPage />}
        />
        <Route
          path="/ecommerce/card-collection"
          element={<EcommerceCardCollectionPage />}
        />
        <Route
          path="/ecommerce/motion-launch"
          element={<EcommerceMotionLaunchPage />}
        />
        <Route
          path="/ecommerce/depth-signature"
          element={<EcommerceDepthSignaturePage />}
        />
        <Route
          path="/ecommerce/immersive-seasonal"
          element={<EcommerceImmersiveSeasonalPage />}
        />
        <Route path="/study/card-enrollment" element={<StudyCardEnrollmentPage />} />
        <Route
          path="/study/motion-cohort"
          element={<StudyMotionCohortPage />}
        />
        <Route
          path="/study/depth-instructor"
          element={<StudyDepthInstructorPage />}
        />
        <Route
          path="/study/immersive-admissions"
          element={<StudyImmersiveAdmissionsPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
