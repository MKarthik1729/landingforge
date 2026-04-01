import { useState, useEffect } from 'react'
import { StudyDepthInstructorNavbar } from './Navbar'
import { SiteLayout } from '../../../components/layout/SiteLayout'
import { studyDepthInstructorPalette } from '../../../theme/palettes/study/depth-instructor'
import { studyDepthInstructorDemo } from '../../../config/landings/study/depth-instructor'

export function StudyDepthInstructorPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/study/depth-instructor/instructor.jpg',
      '/images/study/depth-instructor/video1.jpg',
      '/images/study/depth-instructor/video2.jpg',
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
  <SiteLayout
    palette={studyDepthInstructorPalette}
    navbarMode={studyDepthInstructorDemo.navbarMode}
    currentCategory={studyDepthInstructorDemo.category}
    title={studyDepthInstructorDemo.title}
    customNavbar={<StudyDepthInstructorNavbar />}
  >
        <div className="text-xl">Loading...</div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout
      palette={studyDepthInstructorPalette}
      navbarMode={studyDepthInstructorDemo.navbarMode}
      currentCategory={studyDepthInstructorDemo.category}
      title={studyDepthInstructorDemo.title}
      customNavbar={<StudyDepthInstructorNavbar />}
    >
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/images/study/depth-instructor/instructor.jpg"
                  alt="Instructor"
                  className="rounded-full mx-auto"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Dr. Evelyn Reed</h1>
                <p className="text-xl text-gray-600">
                  Professor of Astrophysics
                </p>
                <p className="text-lg italic mt-4">
                  "The universe is full of magical things patiently waiting for
                  our wits to grow sharper."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              Dr. Evelyn Reed is a passionate educator and researcher with over
              15 years of experience in the field of astrophysics. She is
              dedicated to making science accessible and exciting for everyone.
            </p>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold">Ph.D. in Astrophysics</h3>
                <p>from a prestigious university</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Author of "The Cosmos"</h3>
                <p>a best-selling book</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Recipient of the...</h3>
                <p>Nobel Prize</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Clips Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              In Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src="/images/study/depth-instructor/video1.jpg"
                  alt="Video 1"
                  className="rounded-lg"
                />
              </div>
              <div className="relative">
                <img
                  src="/images/study/depth-instructor/video2.jpg"
                  alt="Video 2"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-12">
              What Students Say
            </h2>
            <div className="space-y-8">
              <div className="testimonial">
                <p className="text-lg italic">
                  "Dr. Reed is an amazing instructor! She makes complex topics
                  easy to understand."
                </p>
                <p className="mt-4 font-bold">- A former student</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Learn from the Best
            </h2>
            <p className="text-lg mb-8">
              Enroll in Dr. Reed's course today.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded">
              Enroll Now
            </button>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
