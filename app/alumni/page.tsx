import { Award, Briefcase, Users, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Alumni Network - UCET',
  description: 'Connect with UCET alumni network and explore success stories from our graduates.',
};

export default function AlumniPage() {
  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      batch: '2018',
      position: 'Senior Software Engineer',
      company: 'Google',
      bio: 'Leading AI initiatives at Google Cloud. Published research on machine learning optimization.',
      achievement: 'First UCET student to lead Google Cloud AI team',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      batch: '2015',
      position: 'CTO',
      company: 'TechStartup India',
      bio: 'Founded a successful SaaS startup with 50+ employees. Focus on automation solutions.',
      achievement: 'Raised $5M Series A funding',
    },
    {
      id: 3,
      name: 'Anjali Verma',
      batch: '2020',
      position: 'Structural Engineer',
      company: 'L&T Infrastructure',
      bio: 'Working on landmark infrastructure projects across India.',
      achievement: 'Appointed as Senior Engineer after 2 years',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      batch: '2017',
      position: 'Design Engineer',
      company: 'Mahindra & Mahindra',
      bio: 'Leading mechanical design for electric vehicle projects.',
      achievement: 'Multiple patent applications in automotive domain',
    },
    {
      id: 5,
      name: 'Deepa Nair',
      batch: '2019',
      position: 'Data Science Lead',
      company: 'Amazon',
      bio: 'Building recommendation systems at Amazon. Managing team of 8 engineers.',
      achievement: 'Promoted to Lead in 3 years',
    },
    {
      id: 6,
      name: 'Arjun Patel',
      batch: '2016',
      position: 'Founder & CEO',
      company: 'Green Energy Solutions',
      bio: 'Working on renewable energy solutions for rural areas.',
      achievement: 'CSR award winner and social entrepreneur',
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Alumni Network</h1>
          <p className="text-xl text-gray-600">
            Connecting successful UCET graduates across the globe
          </p>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '5000+', label: 'Active Alumni' },
            { icon: Briefcase, value: '500+', label: 'Companies Hiring' },
            { icon: TrendingUp, value: '98%', label: 'Placement Rate' },
            { icon: Award, value: '50+', label: 'Global Countries' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Alumni Network */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Alumni Community</h2>
            <p className="text-lg text-gray-600 mb-6">
              UCET alumni have established themselves as leaders, innovators, and entrepreneurs across diverse industries worldwide. Our alumni network provides continuous support for professional development and networking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: 'Networking Events', desc: 'Regular alumni meets and networking sessions' },
                { title: 'Mentorship Program', desc: 'Experienced alumni mentor current students' },
                { title: 'Career Support', desc: 'Job opportunities and career guidance' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Alumni Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-32 bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <div className="text-5xl">👨‍💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                <div className="text-sm text-primary font-semibold mt-1">Batch of {story.batch}</div>
                <div className="text-sm text-gray-600 mt-2">
                  <p className="font-semibold">{story.position}</p>
                  <p>{story.company}</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">{story.bio}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-accent">✨ {story.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Directory */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Alumni</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="search" className="block text-sm font-semibold text-gray-900 mb-2">
                  Search by Name or Company
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search alumni..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="batch" className="block text-sm font-semibold text-gray-900 mb-2">
                    Graduation Year
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>All Years</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-semibold text-gray-900 mb-2">
                    Department
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>All Departments</option>
                    <option>Computer Science</option>
                    <option>Mechanical</option>
                    <option>Electrical</option>
                    <option>Civil</option>
                  </select>
                </div>
              </div>
              <button className="w-full px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Search Alumni
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Alumni Events</h2>
        <div className="space-y-4">
          {[
            { event: 'Alumni Reunion 2026', date: 'May 15, 2026', location: 'Campus Auditorium' },
            { event: 'Networking Breakfast', date: 'May 22, 2026', location: 'Virtual' },
            { event: 'Career Fair for Graduates', date: 'June 5, 2026', location: 'Campus Grounds' },
            { event: 'Mentorship Kickoff', date: 'June 12, 2026', location: 'Virtual' },
          ].map((event, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-gray-900">{event.event}</h3>
                <p className="text-sm text-gray-600 mt-1">{event.date} • {event.location}</p>
              </div>
              <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold text-sm">
                Register
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
