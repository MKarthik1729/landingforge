import { CardDemoNavbar } from '../../../components/layout/DemoNavbarVariants'
import { ecommerceCardCollectionDemo } from '../../../config/landings/ecommerce/card-collection'

export function EcommerceCardCollectionNavbar() {
  return (
    <CardDemoNavbar
      currentDemoId={ecommerceCardCollectionDemo.id}
      title="Collection cards"
      subtitle="Curated shopping"
      links={[
        { label: 'Overview', href: '#overview' },
        { label: 'Collections', href: '#offer' },
        { label: 'Proof', href: '#proof' },
        { label: 'Shop CTA', href: '#contact' },
      ]}
    />
  )
}
