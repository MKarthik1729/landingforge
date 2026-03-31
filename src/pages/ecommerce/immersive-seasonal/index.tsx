import { EcommerceImmersiveSeasonalNavbar } from './Navbar'

export function EcommerceImmersiveSeasonalPage() {
  return (
    <div className="bg-gray-900 text-white">
      <EcommerceImmersiveSeasonalNavbar />
      <main>
        {/* Hero Section */}
        <section
          className="h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/1920/1080?random=7)',
          }}
        >
          <div className="container mx-auto text-center">
            <h1 className="text-6xl font-bold mb-4">Winter Collection</h1>
            <p className="text-2xl mb-8">
              Discover the magic of the season.
            </p>
            <div className="text-4xl font-bold">
              <span>10d 5h 23m 12s</span>
            </div>
          </div>
        </section>

        {/* Collection Showcase Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Collection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src="https://picsum.photos/800/600?random=8"
                  alt="Collection Item 1"
                  className="rounded-lg"
                />
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/800/600?random=9"
                  alt="Collection Item 2"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Get the Look Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Get the Look</h2>
                <div className="space-y-4">
                  <p>Cozy Knit Sweater - $89</p>
                  <p>Winter Scarf - $39</p>
                  <p>Leather Boots - $149</p>
                </div>
                <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Shop This Look
                </button>
              </div>
              <div>
                <img
                  src="https://picsum.photos/800/600?random=10"
                  alt="Styled Outfit"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Feed Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">#WinterCollection</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                src="https://picsum.photos/400/400?random=11"
                alt="Social Media Post 1"
                className="rounded-lg"
              />
              <img
                src="https://picsum.photos/400/400?random=12"
                alt="Social Media Post 2"
                className="rounded-lg"
              />
              <img
                src="https://picsum.photos/400/400?random=13"
                alt="Social Media Post 3"
                className="rounded-lg"
              />
              <img
                src="https://picsum.photos/400/400?random=14"
                alt="Social Media Post 4"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 py-12 text-center">
          <div className="container mx-auto">
            <p className="mb-4">
              Sign up for our newsletter to get exclusive offers.
            </p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white py-2 px-4 rounded-l"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
