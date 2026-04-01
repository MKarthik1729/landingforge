import { useState, useEffect } from 'react'
import { StudyMotionCohortNavbar } from './Navbar'

export function StudyMotionCohortPage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      '/images/study/motion-cohort/hero.jpg',
      '/images/study/motion-cohort/participant1.jpg',
      '/images/study/motion-cohort/participant2.jpg',
      '/images/study/motion-cohort/participant3.jpg',
      '/images/study/motion-cohort/participant4.jpg',
      '/images/study/motion-cohort/gallery1.jpg',
      '/images/study/motion-cohort/gallery2.jpg',
      '/images/study/motion-cohort/gallery3.jpg',
      '/images/study/motion-cohort/gallery4.jpg',
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
    <div className="bg-white text-gray-800">
      <StudyMotionCohortNavbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Learn and Grow Together
            </h1>
            <p className="text-lg mb-8">
              Join our next cohort and accelerate your learning journey.
            </p>
            <img
              src="/images/study/motion-cohort/hero.jpg"
              alt="Cohort"
              className="mx-auto mb-8 rounded-lg"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded">
              Join the Next Cohort
            </button>
          </div>
        </section>

        {/* Cohort-Based Learning Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">
              The Power of Cohort-Based Learning
            </h2>
            <p className="text-lg leading-relaxed">
              Learn from your peers, build a strong network, and stay
              motivated. Our cohort-based model ensures that you are not
              learning alone.
            </p>
          </div>
        </section>

        {/* Meet the Cohort Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet the Cohort
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <img
                  src="/images/study/motion-cohort/participant1.jpg"
                  alt="Participant 1"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">Participant 1</h3>
              </div>
              <div className="text-center">
                <img
                  src="/images/study/motion-cohort/participant2.jpg"
                  alt="Participant 2"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">Participant 2</h3>
              </div>
              <div className="text-center">
                <img
                  src="/images/study/motion-cohort/participant3.jpg"
                  alt="Participant 3"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">Participant 3</h3>
              </div>
              <div className="text-center">
                <img
                  src="/images/study/motion-cohort/participant4.jpg"
                  alt="Participant 4"
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-bold">Participant 4</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Cohort's Journey Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              The Cohort's Journey
            </h2>
            <div className="text-center">
              <p>Timeline of key milestones and projects.</p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                src="/images/study/motion-cohort/gallery1.jpg"
                className="rounded-lg"
                alt="Gallery 1"
              />
              <img
                src="/images/study/motion-cohort/gallery2.jpg"
                className="rounded-lg"
                alt="Gallery 2"
              />
              <img
                src="/images/study/motion-cohort/gallery3.jpg"
                className="rounded-lg"
                alt="Gallery 3"
              />
              <img
                src="/images/study/motion-cohort/gallery4.jpg"
                className="rounded-lg"
                alt="Gallery 4"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Join the Next Cohort
            </h2>
            <p className="text-lg mb-8">
              Starts on May 1st. Only 5 spots left!
            </p>
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded">
              Apply Now
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
