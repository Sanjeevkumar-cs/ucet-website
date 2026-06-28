import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About UCET - University College of Engineering & Technology',
  description: 'Learn about UCET\'s mission, vision, history, and commitment to engineering excellence.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">About UCET</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Shaping the future of engineering education with innovation, excellence, and commitment to student success
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">Mission & Vision</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">M</span>
                  Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class engineering education that empowers students with technical knowledge, practical skills, and ethical values to become innovative leaders and problem solvers in their respective fields.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white text-sm">V</span>
                  Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a premier institution of engineering excellence recognized globally for advancing knowledge, fostering innovation, and developing engineers who contribute meaningfully to society and industry.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-in-delay-1">
            <Image
              src="/ucet-building.jpg"
              alt="UCET Campus"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 md:py-24 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Foundation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Our Core Values</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Principles that guide every decision and action at UCET
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Excellence', description: 'Commitment to highest standards in education and research' },
              { title: 'Integrity', description: 'Ethical conduct in all academic and professional endeavors' },
              { title: 'Innovation', description: 'Encouraging creative thinking and technological advancement' },
              { title: 'Inclusivity', description: 'Welcoming diversity and providing equal opportunities to all' },
            ].map((value, index) => (
              <div key={index} className={`group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 animate-in-delay-${index % 3}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-fade-in">
        <div className="mb-12 animate-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Timeline</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Our Journey Through Time</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Two decades of building excellence in engineering education
          </p>
        </div>
        <div className="space-y-8">
          {[
            { year: '2005', title: 'Foundation Year', description: 'UCET was established to provide quality engineering education in Hazaribag' },
            { year: '2010', title: 'Accreditation', description: 'Received institutional accreditation and recognition from engineering bodies' },
            { year: '2015', title: 'Expansion Phase', description: 'Expanded to include new departments and modern research facilities' },
            { year: '2020', title: 'Digital Transformation', description: 'Successfully transitioned to digital learning and virtual classrooms' },
            { year: '2025', title: 'Global Recognition', description: 'Recognized among top engineering colleges in the region' },
          ].map((milestone, index) => (
            <div key={index} className={`flex gap-6 animate-in-delay-${index % 3}`}>
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  {milestone.year.substring(2)}
                </div>
              </div>
              <div className="flex-grow bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-gray-50 py-16 md:py-24 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Recognition</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Accreditations & Recognition</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Proudly recognized by leading national and international accreditation bodies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'AICTE Approved', description: 'All India Council for Technical Education', icon: '🏛️' },
              { name: 'ISO Certified', description: 'International Standards Organization certification', icon: '✓' },
              { name: 'Industry Recognized', description: 'Accredited by leading engineering bodies', icon: '⭐' },
            ].map((accred, index) => (
              <div key={index} className={`group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:border-accent/50 transition-all duration-300 text-center transform hover:-translate-y-1 animate-in-delay-${index % 3}`}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{accred.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{accred.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{accred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
