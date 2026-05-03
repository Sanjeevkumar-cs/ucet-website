import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Beaker, Users, Lightbulb } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: BookOpen,
      title: 'World-Class Academics',
      description: 'Cutting-edge curriculum designed by industry experts',
    },
    {
      icon: Beaker,
      title: 'Research Excellence',
      description: 'State-of-the-art laboratories and research facilities',
    },
    {
      icon: Users,
      title: 'Campus Life',
      description: 'Vibrant community with clubs, sports, and events',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Fostering entrepreneurship and creative thinking',
    },
  ];

  const programs = [
    {
      name: 'Computer Science',
      description: 'Master software development, AI, and cloud technologies',
      icon: '💻',
    },
    {
      name: 'Mechanical Engineering',
      description: 'Learn design, manufacturing, and mechanical systems',
      icon: '⚙️',
    },
    {
      name: 'Electrical Engineering',
      description: 'Explore power systems, electronics, and automation',
      icon: '⚡',
    },
    {
      name: 'Civil Engineering',
      description: 'Build infrastructure and shape the future',
      icon: '🏗️',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] bg-gradient-to-b from-primary/10 to-transparent overflow-hidden">
        <Image
          src="/ucet-building.jpg"
          alt="UCET Campus Building"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4">
            Engineering Tomorrow&apos;s Innovations
          </h1>
          <p className="text-lg md:text-xl text-blue-100 text-balance mb-8 max-w-2xl">
            University College of Engineering & Technology - Empowering students with excellence in education and research
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/admissions"
              className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link
              href="/academics"
              className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-fade-in">
        <div className="text-center mb-12 animate-in">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Excellence in Engineering Education
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive engineering education with world-class facilities, dedicated faculty, and industry partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 animate-in-delay-${index % 3}`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 scroll-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <div className="inline-block mb-3">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Disciplines</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Engineering Programs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose from diverse engineering disciplines tailored to shape your career and future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-300 border border-gray-200 transform hover:-translate-y-2 animate-in-delay-${index % 3}`}
              >
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{program.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{program.description}</p>
                <Link
                  href="/academics"
                  className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1 transition-colors duration-200"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-32 relative overflow-hidden scroll-fade-in">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Start Your Journey?</h2>
          <p className="text-blue-50 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through UCET&apos;s comprehensive engineering programs and achieved excellence in their fields
          </p>
          <Link
            href="/admissions"
            className="inline-block px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Begin Your Application
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '20+', label: 'Years of Excellence' },
            { value: '5000+', label: 'Alumni Network' },
            { value: '98%', label: 'Placement Rate' },
            { value: '50+', label: 'Industry Partners' },
          ].map((stat, index) => (
            <div key={index} className={`group text-center animate-in-delay-${index % 3}`}>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:from-primary/20 hover:to-accent/20">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
