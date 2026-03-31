import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { ecommerceImmersiveSeasonalDemo } from '../../../config/landings/ecommerce/immersive-seasonal'

export function EcommerceImmersiveSeasonalNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={ecommerceImmersiveSeasonalDemo.id}
      title="Interactive campaign"
      subtitle="Seasonal edit"
      links={[
        { label: 'Hero', href: '#overview' },
        { label: 'Scenes', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Shop CTA', href: '#contact' },
      ]}
    />
  )
}
