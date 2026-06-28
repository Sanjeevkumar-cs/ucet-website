'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We&apos;d love to hear from you. Get in touch with us anytime.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: MapPin,
              title: 'Address',
              details: ['University Campus', 'Hazaribag, Jharkhand 825301', 'India'],
            },
            {
              icon: Phone,
              title: 'Phone',
              details: ['+91 1234 567 890', '+91 1234 567 891', 'Mon - Sat, 9am to 6pm'],
            },
            {
              icon: Mail,
              title: 'Email',
              details: ['info@ucet.edu.in', 'admissions@ucet.edu.in', 'support@ucet.edu.in'],
            },
            {
              icon: Clock,
              title: 'Office Hours',
              details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Closed on Sundays'],
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <Icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Send us a Message</h2>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">Thank you for your message! We will contact you soon.</p>
            </div>
          )}

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="academics">Academic Programs</option>
                    <option value="facilities">Facilities & Campus</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message here..."
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Department Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              dept: 'Computer Science',
              contact: 'Dr. Anil Kumar',
              email: 'cse@ucet.edu.in',
              phone: '+91 9876 543210',
            },
            {
              dept: 'Mechanical Engineering',
              contact: 'Prof. Rajesh Singh',
              email: 'mech@ucet.edu.in',
              phone: '+91 9876 543211',
            },
            {
              dept: 'Electrical Engineering',
              contact: 'Dr. Priya Sharma',
              email: 'eee@ucet.edu.in',
              phone: '+91 9876 543212',
            },
            {
              dept: 'Civil Engineering',
              contact: 'Prof. Vikram Patel',
              email: 'civil@ucet.edu.in',
              phone: '+91 9876 543213',
            },
          ].map((dept, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{dept.dept}</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-gray-900">HOD:</span>
                  <span className="text-gray-600"> {dept.contact}</span>
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Email:</span>
                  <a href={`mailto:${dept.email}`} className="text-primary hover:text-accent">
                    {' '}{dept.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Phone:</span>
                  <a href={`tel:${dept.phone}`} className="text-primary hover:text-accent">
                    {' '}{dept.phone}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
