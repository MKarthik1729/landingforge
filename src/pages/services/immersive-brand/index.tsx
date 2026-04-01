import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { ReliableImage } from '../../../components/media/ReliableImage'
import { servicesImmersiveBrandDemo } from '../../../config/landings/services/immersive-brand'
import { siteConfig } from '../../../config/site'
import { servicesImmersiveBrandPalette } from '../../../theme/palettes/services/immersive-brand'
import { ServicesImmersiveBrandNavbar } from './Navbar'

const productStories = [
  {
    id: 'beds',
    eyebrow: 'Bedroom comfort',
    title: 'Beds that pair calm silhouettes with strong wood framing.',
    description:
      'Our bed collection is shaped around warm timber tones, inviting headboards, and proportions that make the room feel quieter the moment you step in.',
    image: '/images/immersive-brand/bed.jpg',
    imageAlt: 'A wooden bed in a calm bedroom',
    details: [
      'Solid wood bed frames with clean joinery and durable finish options.',
      'Comfort-led styling that supports premium mattresses, layered linens, and restful bedrooms.',
      'Layouts designed to help furniture buyers picture the piece in a lived-in room, not just a catalog grid.',
    ],
  },
  {
    id: 'chairs',
    eyebrow: 'Lounge and dining',
    title: 'Chairs built to feel sculptural, supportive, and easy to place.',
    description:
      'From accent chairs to dining silhouettes, the range focuses on tactile materials, thoughtful proportions, and visual lightness that still feels grounded in craftsmanship.',
    image: '/images/immersive-brand/chair.jpg',
    imageAlt: 'A wooden chair in a minimal interior',
    details: [
      'Wood tones and upholstery palettes that work across modern, rustic, and boutique interiors.',
      'Photography blocks sized for product storytelling, dimension callouts, and finish variations.',
      'Comfort-forward copy that sells the way the chair feels, not just the way it looks.',
    ],
  },
  {
    id: 'sofas',
    eyebrow: 'Shared living',
    title: 'Sofas that bring softness into handcrafted wooden spaces.',
    description:
      'Our sofa direction combines grounded wood accents with deep seating, layered textiles, and room scenes that communicate warmth, ease, and everyday luxury.',
    image: '/images/immersive-brand/sofa.jpg',
    imageAlt: 'A warm living room with a sofa and wooden details',
    details: [
      'Hero-friendly visuals for modular sofas, custom seating, and living-room centerpieces.',
      'Story sections that connect timber finishes, fabrics, and room ambience in a single scroll.',
      'Comfort messaging that helps visitors imagine hosting, resting, and living with the product.',
    ],
  },
] as const

const studioServices = [
  'Landing pages for furniture launches, seasonal collections, and featured products.',
  'Full websites for studios, custom woodworkers, interior brands, and comfort-led retailers.',
  'High-conversion service pages for consultations, bespoke orders, and showroom visits.',
] as const

export function ServicesImmersiveBrandPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/immersive-brand/bed.jpg',
      '/images/immersive-brand/chair.jpg',
      '/images/immersive-brand/sofa.jpg',
    ];

    const loadImages = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(loadImages).then(() => setImagesLoaded(true));
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <SiteLayout
      palette={servicesImmersiveBrandPalette}
      navbarMode={servicesImmersiveBrandDemo.navbarMode}
      currentCategory={servicesImmersiveBrandDemo.category}
      title={servicesImmersiveBrandDemo.title}
      customNavbar={<ServicesImmersiveBrandNavbar />}
    >
      <section id="overview" className="relative overflow-hidden px-6 pb-20 pt-28">
        <div
          className="absolute inset-x-0 top-0 h-[520px]"
          style={{
            background:
              'radial-gradient(circle at top left, var(--page-glow), transparent 42%), linear-gradient(180deg, color-mix(in srgb, var(--page-bg-alt) 84%, transparent), transparent)',
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,560px)] lg:items-center">
          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-[0.34em]"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Solid wood comfort collection
            </p>
            <h1 className="mt-6 font-['Space_Grotesk',system-ui,sans-serif] text-5xl font-bold leading-none sm:text-7xl">
              Wood works that feel warm, restful, and ready to live with.
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-8"
              style={{ color: 'var(--page-text-muted)' }}
            >
              This immersive furniture page now showcases the full comfort range
              across beds, chairs, and sofas with dedicated imagery, richer
              product storytelling, and a clearer path into the brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {servicesImmersiveBrandDemo.heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surface)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#collections"
                className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: 'var(--page-accent)',
                  color: 'var(--page-accent-contrast)',
                }}
              >
                Explore the collection
              </a>
              <a
                href={servicesImmersiveBrandDemo.contactCta.href}
                className="inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
                style={{
                  borderColor: 'var(--page-border)',
                  backgroundColor: 'var(--page-surfaceStrong)',
                }}
              >
                Start a furniture site
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {servicesImmersiveBrandDemo.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[24px] border p-4"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surface)',
                    boxShadow: 'var(--page-shadow)',
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.24em]"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    {metric.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article
              className="sm:col-span-2 overflow-hidden rounded-[34px] border p-3"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surface)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <ReliableImage
                src="/images/immersive-brand/sofa.jpg"
                alt="Warm sofa styling in a wood-toned living space"
                loading="eager"
                className="h-[330px] w-full rounded-[28px] object-cover"
              />
            </article>

            <article
              className="overflow-hidden rounded-[30px] border p-3"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surface)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <ReliableImage
                src="/images/immersive-brand/bed.jpg"
                alt="Wooden bed detail for bedroom styling"
                className="h-[220px] w-full rounded-[24px] object-cover"
              />
            </article>

            <article
              className="overflow-hidden rounded-[30px] border p-3"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surface)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <ReliableImage
                src="/images/immersive-brand/chair.jpg"
                alt="Accent chair styled for a premium interior"
                className="h-[220px] w-full rounded-[24px] object-cover"
              />
            </article>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Product range
            </p>
            <h2 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold">
              Three comfort-led sections, each with its own image and story.
            </h2>
            <p
              className="mt-4 text-base leading-8"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Instead of showing one product in isolation, this page now guides
              visitors through the furniture range with separate sections for
              beds, chairs, and sofas.
            </p>
          </div>
          <div
            className="rounded-full border px-5 py-3 text-sm font-semibold"
            style={{
              borderColor: 'var(--page-border)',
              backgroundColor: 'var(--page-surface)',
            }}
          >
            Respectful image loading with local assets
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {productStories.map((story) => (
            <article
              key={story.id}
              className="overflow-hidden rounded-[30px] border p-4"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surface)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <ReliableImage
                src={story.image}
                alt={story.imageAlt}
                className="h-60 w-full rounded-[24px] object-cover"
              />
              <p
                className="mt-5 text-xs uppercase tracking-[0.28em]"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {story.eyebrow}
              </p>
              <h3 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-2xl font-bold">
                {story.title}
              </h3>
              <p
                className="mt-3 text-sm leading-7"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {story.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="comfort" className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8">
          {productStories.map((story, index) => (
            <article
              key={story.id}
              className="grid gap-6 overflow-hidden rounded-[34px] border p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'var(--page-surfaceStrong)',
                boxShadow: 'var(--page-shadow)',
              }}
            >
              <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                <ReliableImage
                  src={story.image}
                  alt={story.imageAlt}
                  className="h-full min-h-[340px] w-full rounded-[28px] object-cover"
                />
              </div>

              <div
                className={`flex flex-col justify-center rounded-[28px] border px-6 py-7 sm:px-8 ${
                  index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'
                }`}
                style={{
                  borderColor: 'var(--page-border)',
                  background:
                    'radial-gradient(circle at top right, var(--page-glow), transparent 35%), var(--page-surface)',
                }}
              >
                <p
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  {story.eyebrow}
                </p>
                <h3 className="mt-4 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold sm:text-4xl">
                  {story.title}
                </h3>
                <p
                  className="mt-4 text-base leading-8"
                  style={{ color: 'var(--page-text-muted)' }}
                >
                  {story.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {story.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl border px-4 py-4 text-sm leading-7"
                      style={{
                        borderColor: 'var(--page-border)',
                        backgroundColor: 'color-mix(in srgb, var(--page-surfaceStrong) 78%, transparent)',
                      }}
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div
            className="rounded-[34px] border p-6 sm:p-8"
            style={{
              borderColor: 'var(--page-border)',
              backgroundColor: 'var(--page-surface)',
              boxShadow: 'var(--page-shadow)',
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Why the page feels broader now
            </p>
            <div className="mt-6 grid gap-4">
              {servicesImmersiveBrandDemo.checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[22px] border px-4 py-4"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surfaceStrong)',
                  }}
                >
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: 'var(--page-accent)',
                      color: 'var(--page-accent-contrast)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="rounded-[34px] border p-6 sm:p-8"
            style={{
              borderColor: 'var(--page-border)',
              background:
                'radial-gradient(circle at top right, var(--page-glow), transparent 32%), var(--page-surfaceStrong)',
              boxShadow: 'var(--page-shadow)',
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: 'var(--page-text-muted)' }}
            >
              Client voice
            </p>
            <blockquote className="mt-4 font-['Space_Grotesk',system-ui,sans-serif] text-3xl font-bold leading-tight">
              "{servicesImmersiveBrandDemo.testimonial.quote}"
            </blockquote>
            <p className="mt-5 text-sm font-semibold">
              {servicesImmersiveBrandDemo.testimonial.name}
              <span
                className="ml-2 font-normal"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {servicesImmersiveBrandDemo.testimonial.role}
              </span>
            </p>
          </aside>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-6">
        <div
          className="rounded-[36px] border p-6 sm:p-8 lg:p-10"
          style={{
            borderColor: 'var(--page-border)',
            background:
              'linear-gradient(135deg, color-mix(in srgb, var(--page-bg-alt) 74%, var(--page-surfaceStrong)) 0%, var(--page-surfaceStrong) 100%)',
            boxShadow: 'var(--page-shadow)',
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: 'var(--page-text-muted)' }}
              >
                About {siteConfig.brand}
              </p>
              <h2 className="mt-4 font-['Space_Grotesk',system-ui,sans-serif] text-4xl font-bold leading-tight">
                We create sites and pages that help brands sell with clarity,
                atmosphere, and trust.
              </h2>
              <p
                className="mt-4 max-w-3xl text-base leading-8"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {siteConfig.brand} designs immersive landing pages, product-led
                websites, and conversion-focused brand experiences for businesses
                that need more than a basic brochure page. For furniture, decor,
                and woodwork brands, that means pairing strong visuals with
                better storytelling, cleaner structure, and pages that make the
                products feel tangible online.
              </p>

              <div className="mt-6 grid gap-3">
                {studioServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border px-4 py-4 text-sm leading-7"
                    style={{
                      borderColor: 'var(--page-border)',
                      backgroundColor: 'var(--page-surface)',
                    }}
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.primaryCta.href}
                  className="inline-flex rounded-full px-5 py-3 text-sm font-semibold"
                  style={{
                    backgroundColor: 'var(--page-accent)',
                    color: 'var(--page-accent-contrast)',
                  }}
                >
                  {siteConfig.primaryCta.label}
                </a>
                <Link
                  to="/"
                  className="inline-flex rounded-full border px-5 py-3 text-sm font-semibold"
                  style={{
                    borderColor: 'var(--page-border)',
                    backgroundColor: 'var(--page-surfaceStrong)',
                  }}
                >
                  Back to gallery
                </Link>
              </div>
            </div>

            <div
              className="rounded-[28px] border p-6"
              style={{
                borderColor: 'var(--page-border)',
                backgroundColor: 'color-mix(in srgb, var(--page-surface) 80%, transparent)',
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.28em]"
                style={{ color: 'var(--page-text-muted)' }}
              >
                Studio snapshot
              </p>
              <h3 className="mt-3 font-['Space_Grotesk',system-ui,sans-serif] text-2xl font-bold">
                Built for pages that need visual weight and clear conversion.
              </h3>
              <p
                className="mt-4 text-sm leading-7"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {siteConfig.headline}
              </p>
              <div className="mt-6 grid gap-3">
                <div
                  className="rounded-2xl border px-4 py-4"
                  style={{ borderColor: 'var(--page-border)' }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.24em]"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    Email
                  </p>
                  <p className="mt-2 text-sm font-semibold">{siteConfig.contact.email}</p>
                </div>
                <div
                  className="rounded-2xl border px-4 py-4"
                  style={{ borderColor: 'var(--page-border)' }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.24em]"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    Phone
                  </p>
                  <p className="mt-2 text-sm font-semibold">{siteConfig.contact.phone}</p>
                </div>
                <div
                  className="rounded-2xl border px-4 py-4"
                  style={{ borderColor: 'var(--page-border)' }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.24em]"
                    style={{ color: 'var(--page-text-muted)' }}
                  >
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold">{siteConfig.contact.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
