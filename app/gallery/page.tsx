'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['all', 'campus', 'events', 'facilities', 'students'];

  const galleryImages = [
    // Campus
    { id: 1, src: '/ucet-building.jpg', alt: 'UCET Main Building', category: 'campus', title: 'Main Campus Building' },
    { id: 2, src: '/ucet-building.jpg', alt: 'Campus Grounds', category: 'campus', title: 'Campus Grounds' },
    { id: 3, src: '/ucet-building.jpg', alt: 'Library Building', category: 'campus', title: 'Modern Library' },
    { id: 4, src: '/ucet-building.jpg', alt: 'Student Hostels', category: 'campus', title: 'Student Accommodation' },
    // Events
    { id: 5, src: '/ucet-building.jpg', alt: 'Annual Fest', category: 'events', title: 'Engineering Fest 2025' },
    { id: 6, src: '/ucet-building.jpg', alt: 'Convocation', category: 'events', title: 'Annual Convocation' },
    { id: 7, src: '/ucet-building.jpg', alt: 'Sports Day', category: 'events', title: 'Inter-College Sports' },
    { id: 8, src: '/ucet-building.jpg', alt: 'Guest Lecture', category: 'events', title: 'Industry Guest Lecture' },
    // Facilities
    { id: 9, src: '/ucet-building.jpg', alt: 'Computer Lab', category: 'facilities', title: 'Advanced Computing Lab' },
    { id: 10, src: '/ucet-building.jpg', alt: 'Robotics Lab', category: 'facilities', title: 'Robotics & AI Lab' },
    { id: 11, src: '/ucet-building.jpg', alt: 'Workshop', category: 'facilities', title: 'Engineering Workshop' },
    { id: 12, src: '/ucet-building.jpg', alt: 'Cafeteria', category: 'facilities', title: 'Campus Cafeteria' },
    // Students
    { id: 13, src: '/ucet-building.jpg', alt: 'Student Group', category: 'students', title: 'Student Activities' },
    { id: 14, src: '/ucet-building.jpg', alt: 'Club Meeting', category: 'students', title: 'Club Activities' },
    { id: 15, src: '/ucet-building.jpg', alt: 'Workshop Session', category: 'students', title: 'Skill Development' },
    { id: 16, src: '/ucet-building.jpg', alt: 'Student Projects', category: 'students', title: 'Project Showcase' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">
            Explore the vibrant campus life at UCET
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 py-8 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {[
              { value: 'all', label: 'All' },
              { value: 'campus', label: 'Campus' },
              { value: 'events', label: 'Events' },
              { value: 'facilities', label: 'Facilities' },
              { value: 'students', label: 'Students' },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className="group relative h-64 overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-center px-4">
                  {image.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Campus Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏢', title: 'Modern Infrastructure', description: 'State-of-the-art facilities and labs' },
              { icon: '🌳', title: 'Beautiful Campus', description: 'Sprawling green campus with modern architecture' },
              { icon: '🤝', title: 'Vibrant Community', description: 'Active student clubs and cultural activities' },
            ].map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
