import { InteractiveDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { ecommerceDepthSignatureDemo } from '../../../config/landings/ecommerce/depth-signature'

export function EcommerceDepthSignatureNavbar() {
  return (
    <InteractiveDemoNavbar
      currentDemoId={ecommerceDepthSignatureDemo.id}
      title="Sections product"
      subtitle="Flagship SKU"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Product story', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Purchase CTA', href: '#contact' },
      ]}
    />
  )
}
