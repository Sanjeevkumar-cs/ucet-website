'use client';

import { useState } from 'react';
import { Calendar, FileText, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    qualifyingExam: '',
    examScore: '',
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
    // In a real app, this would send to a backend API
    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      program: '',
      qualifyingExam: '',
      examScore: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const importantDates = [
    { event: 'Application Window Opens', date: 'January 2026' },
    { event: 'Application Deadline', date: 'April 30, 2026' },
    { event: 'Merit List Publication', date: 'May 15, 2026' },
    { event: 'Counseling Process', date: 'May 20 - June 10, 2026' },
    { event: 'Seat Allocation', date: 'June 15, 2026' },
    { event: 'Classes Begin', date: 'July 20, 2026' },
  ];

  const faqs = [
    {
      question: 'What are the eligibility criteria for admission?',
      answer: 'You must have passed 12th with Physics and Mathematics, have a valid JEE Main/Advanced score, and meet the minimum aggregate requirements set by the college.',
    },
    {
      question: 'What is the selection process?',
      answer: 'Admission is based on merit of JEE Main/Advanced scores. Eligible candidates are called for counseling where they can choose their preferred program based on available seats and merit rank.',
    },
    {
      question: 'Can I apply for multiple programs?',
      answer: 'Yes, you can express preference for multiple programs during counseling. Seats are allocated based on your choice order and merit rank.',
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fee details vary by program and category. Please contact the admissions office or visit our website for detailed fee structure information.',
    },
    {
      question: 'Are scholarships available?',
      answer: 'Yes, UCET offers merit-based and need-based scholarships. Details about scholarship schemes are provided during the admission process.',
    },
    {
      question: 'What documents are required for admission?',
      answer: 'Required documents include 10th and 12th certificates, JEE score card, valid ID proof, passport-sized photos, and caste certificate (if applicable).',
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Admissions</h1>
          <p className="text-xl text-gray-600">
            Join UCET and transform your engineering career
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Important Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {importantDates.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.event}</h3>
                  <p className="text-primary font-semibold">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">General Requirements</h3>
              <ul className="space-y-4">
                {[
                  'Passed 12th from recognized board',
                  'Physics and Mathematics as main subjects',
                  'Minimum 50% aggregate (General)',
                  'Minimum 45% aggregate (SC/ST/OBC)',
                  'Valid JEE Main/Advanced score',
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <ul className="space-y-4">
                {[
                  '10th and 12th mark sheets',
                  'JEE score card',
                  'Valid government ID proof',
                  'Passport-sized photographs (4-6)',
                  'Caste certificate (if applicable)',
                  'PWD certificate (if applicable)',
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Inquiry Form</h2>
        
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-semibold">Thank you for your inquiry! We will contact you soon.</p>
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your full name"
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Program *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a program</option>
                  <option value="cse">Computer Science & Engineering</option>
                  <option value="me">Mechanical Engineering</option>
                  <option value="ee">Electrical Engineering</option>
                  <option value="ce">Civil Engineering</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="qualifyingExam" className="block text-sm font-semibold text-gray-900 mb-2">
                  Qualifying Exam
                </label>
                <select
                  id="qualifyingExam"
                  name="qualifyingExam"
                  value={formData.qualifyingExam}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select exam</option>
                  <option value="jee-main">JEE Main</option>
                  <option value="jee-advanced">JEE Advanced</option>
                  <option value="sat">SAT</option>
                </select>
              </div>
              <div>
                <label htmlFor="examScore" className="block text-sm font-semibold text-gray-900 mb-2">
                  Exam Score/Rank
                </label>
                <input
                  type="text"
                  id="examScore"
                  name="examScore"
                  value={formData.examScore}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your score/rank"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Any questions or additional information"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-100">
                  <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
