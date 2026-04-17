import { Book, Users, Microscope, Award } from 'lucide-react';
import InteractiveCalendar from '@/components/InteractiveCalendar';

export const metadata = {
  title: 'Academics - UCET Engineering Programs',
  description: 'Explore our engineering programs including Computer Science, Mechanical, Electrical, and Civil Engineering.',
};

export default function AcademicsPage() {
  const calendarEvents = [
    { date: 5, type: 'holiday' as const, label: 'Republic Day' },
    { date: 6, type: 'holiday' as const },
    { date: 7, type: 'holiday' as const },
    { date: 8, type: 'working' as const },
    { date: 15, type: 'event' as const, label: 'Mid-Semester' },
    { date: 26, type: 'holiday' as const, label: 'Holi Break' },
    { date: 27, type: 'holiday' as const },
    { date: 28, type: 'holiday' as const },
    { date: 15, type: 'event' as const, label: 'Exam Week' },
  ];
  const programs = [
    {
      id: 1,
      name: 'Computer Science & Engineering',
      duration: '4 Years',
      icon: '💻',
      overview: 'Master modern programming, software development, artificial intelligence, and cloud computing.',
      highlights: [
        'Machine Learning & AI',
        'Cloud Computing',
        'Web Development',
        'Cybersecurity',
        'Data Science',
      ],
      specializations: [
        'AI and Machine Learning',
        'Cloud & DevOps',
        'Full Stack Development',
      ],
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      duration: '4 Years',
      icon: '⚙️',
      overview: 'Learn mechanical design, manufacturing, thermodynamics, and industrial automation.',
      highlights: [
        'CAD & Modeling',
        'Manufacturing Processes',
        'Thermodynamics',
        'Robotics & Automation',
        'Engine Design',
      ],
      specializations: [
        'Automotive Engineering',
        'Manufacturing Engineering',
        'Thermal Engineering',
      ],
    },
    {
      id: 3,
      name: 'Electrical Engineering',
      duration: '4 Years',
      icon: '⚡',
      overview: 'Study power systems, electronics, control systems, and electrical machines.',
      highlights: [
        'Power Systems',
        'Electronics',
        'Control Systems',
        'Power Generation',
        'Smart Grids',
      ],
      specializations: [
        'Power Electronics',
        'Renewable Energy',
        'High Voltage Engineering',
      ],
    },
    {
      id: 4,
      name: 'Civil Engineering',
      duration: '4 Years',
      icon: '🏗️',
      overview: 'Design and build infrastructure projects including buildings, roads, and bridges.',
      highlights: [
        'Structural Design',
        'Construction Management',
        'Geotechnical Engineering',
        'Water Resources',
        'Smart Cities',
      ],
      specializations: [
        'Structural Engineering',
        'Transportation Engineering',
        'Environmental Engineering',
      ],
    },
  ];

  const features = [
    {
      icon: Book,
      title: 'Modern Curriculum',
      description: 'Industry-aligned curriculum updated regularly to match current technological trends',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Experienced educators and researchers with PhDs and industry experience',
    },
    {
      icon: Microscope,
      title: 'Research Facilities',
      description: 'State-of-the-art laboratories and research centers for hands-on learning',
    },
    {
      icon: Award,
      title: 'Industry Partnerships',
      description: 'Collaborations with leading companies for internships and placements',
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-transparent py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Academic Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">Our Engineering Programs</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Comprehensive engineering education across diverse disciplines with world-class faculty and cutting-edge facilities
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={`group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 animate-in-delay-${index % 3}`}>
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-fade-in">
        <div className="mb-12 animate-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Planning Tool</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Academic Calendar</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Stay organized with our interactive academic calendar showing holidays, working days, and important events
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <InteractiveCalendar events={calendarEvents} />
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">i</span>
                Important Dates
              </h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 text-sm">Semester Start</div>
                  <div className="text-gray-600 text-xs">January 1, 2024</div>
                </li>
                <li className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 text-sm">Mid-Semester Exam</div>
                  <div className="text-gray-600 text-xs">February 15, 2024</div>
                </li>
                <li className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-gray-900 text-sm">End Semester Exam</div>
                  <div className="text-gray-600 text-xs">April 20, 2024</div>
                </li>
                <li>
                  <div className="font-semibold text-gray-900 text-sm">Summer Break</div>
                  <div className="text-gray-600 text-xs">May 1 - July 31, 2024</div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-xl p-6 border border-red-200">
              <h4 className="font-bold text-red-900 mb-3 text-sm">Holidays & Breaks</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Republic Day (Jan 26)</li>
                <li>• Holi Break (Mar 26-28)</li>
                <li>• Summer Break (May-Jul)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Program Offerings</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Engineering Disciplines</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Four comprehensive engineering programs designed to build industry-ready professionals with cutting-edge skills
            </p>
          </div>
          <div className="space-y-8">
            {programs.map((program, programIndex) => (
              <div key={program.id} className={`group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 animate-in-delay-${programIndex % 3}`}>
                <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-transparent group-hover:from-primary/5">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{program.icon}</div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                          <p className="text-gray-600">{program.overview}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-primary">{program.duration}</div>
                          <div className="text-xs text-gray-500">Program Duration</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Key Subjects</h4>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Specializations</h4>
                      <ul className="space-y-2">
                        {program.specializations.map((spec, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Requirement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-fade-in">
        <div className="mb-12 animate-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Enrollment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Admission Requirements</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Clear eligibility criteria and streamlined application process for aspiring engineering students
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3">
                {[
                  '12th pass with Physics and Mathematics',
                  'JEE Main/Advanced qualifying score',
                  'Minimum 50% aggregate in 12th (general category)',
                  'Valid entrance exam score',
                ].map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-gray-600">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application Process</h3>
              <ol className="space-y-3">
                {[
                  'Register and create account on admissions portal',
                  'Fill application form with required details',
                  'Upload qualifying exam score',
                  'Submit application fee',
                  'Receive admission confirmation',
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
