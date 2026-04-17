'use client';

import { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function UpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const updates = [
    {
      id: 1,
      title: 'New AI Research Lab Inaugurated',
      category: 'research',
      date: 'April 10, 2026',
      excerpt: 'UCET launches state-of-the-art AI and Machine Learning research facility with cutting-edge computing infrastructure.',
      content: 'Our new AI Research Lab is equipped with GPUs, cloud computing resources, and collaboration spaces for advanced AI research.',
      image: '🔬',
    },
    {
      id: 2,
      title: 'Campus Placement Drive Successful',
      category: 'placement',
      date: 'April 8, 2026',
      excerpt: '98% of final year students successfully placed with leading tech companies and Fortune 500 organizations.',
      content: 'Over 50 companies participated in the placement drive, offering average packages of 8 LPA and above.',
      image: '📊',
    },
    {
      id: 3,
      title: 'Engineering Fest 2026 Announced',
      category: 'event',
      date: 'April 5, 2026',
      excerpt: 'Annual engineering festival featuring competitions, workshops, and exhibitions from top engineering colleges.',
      content: 'Registration opens with categories for code competitions, robotics, innovation challenges, and more.',
      image: '🎉',
    },
    {
      id: 4,
      title: 'Industry Collaboration: Microsoft Partnership',
      category: 'partnership',
      date: 'April 1, 2026',
      excerpt: 'UCET partners with Microsoft for internship programs and skill development workshops.',
      content: 'Students get access to Azure cloud credits and Microsoft certification programs at discounted rates.',
      image: '🤝',
    },
    {
      id: 5,
      title: 'International Student Exchange Program',
      category: 'academics',
      date: 'March 28, 2026',
      excerpt: 'UCET students accepted for semester abroad program at partner universities in USA and Europe.',
      content: 'Five UCET students have been selected for the prestigious exchange program for the upcoming academic year.',
      image: '🌍',
    },
    {
      id: 6,
      title: 'Smart City Innovation Challenge',
      category: 'event',
      date: 'March 25, 2026',
      excerpt: 'UCET hosts national level innovation challenge focused on smart city and sustainability solutions.',
      content: 'Teams compete for prize pool of 5 lakhs rupees with mentorship from industry experts.',
      image: '💡',
    },
    {
      id: 7,
      title: 'Faculty Achievement: Published Research Paper',
      category: 'research',
      date: 'March 20, 2026',
      excerpt: 'Prof. Dr. Rajesh Kumar\'s research on renewable energy published in international journal.',
      content: 'The paper on solar panel efficiency improvements has been accepted by IEEE Transactions.',
      image: '📝',
    },
    {
      id: 8,
      title: 'Alumni Success Story: IIT Graduate Joins Google',
      category: 'alumni',
      date: 'March 15, 2026',
      excerpt: 'UCET alumnus Priya Sharma joins Google as Senior Software Engineer in their AI division.',
      content: 'Priya completed her BTech at UCET and then went on to pursue advanced degrees at prestigious institutions.',
      image: '⭐',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Updates' },
    { value: 'academics', label: 'Academics' },
    { value: 'research', label: 'Research' },
    { value: 'event', label: 'Events' },
    { value: 'placement', label: 'Placements' },
    { value: 'partnership', label: 'Partnerships' },
    { value: 'alumni', label: 'Alumni' },
  ];

  const filteredUpdates = selectedCategory === 'all'
    ? updates
    : updates.filter(update => update.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">News & Updates</h1>
          <p className="text-xl text-gray-600">
            Stay informed about latest happenings at UCET
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Featured Image/Icon */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-5xl border-b border-gray-200">
                {update.image}
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  {update.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {update.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredUpdates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No updates in this category yet.</p>
          </div>
        )}
      </section>

      {/* Events Calendar Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
          <div className="space-y-4">
            {[
              { date: 'April 20, 2026', event: 'Tech Summit 2026', location: 'Main Auditorium' },
              { date: 'April 25, 2026', event: 'Alumni Meet 2026', location: 'Campus Grounds' },
              { date: 'May 1, 2026', event: 'Orientation for New Students', location: 'All Departments' },
              { date: 'May 10, 2026', event: 'Industry Guest Lecture Series', location: 'Seminar Hall' },
            ].map((event, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900">{event.event}</h3>
                  <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-600 mt-2">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="flex-shrink-0 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold text-sm">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
