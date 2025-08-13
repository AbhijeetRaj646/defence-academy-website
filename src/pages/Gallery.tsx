import React, { useState } from 'react';
import { Play, X, Image as ImageIcon, Video, Users, Award } from 'lucide-react';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'training',
      src: 'https://images.pexels.com/photos/8926555/pexels-photo-8926555.jpeg',
      title: 'Physical Training Session',
      description: 'Students during morning PT session'
    },
    {
      id: 2,
      type: 'image',
      category: 'classroom',
      src: 'https://images.pexels.com/photos/8926556/pexels-photo-8926556.jpeg',
      title: 'Mathematics Class',
      description: 'Interactive mathematics session for NDA preparation'
    },
    {
      id: 3,
      type: 'image',
      category: 'events',
      src: 'https://images.pexels.com/photos/8926557/pexels-photo-8926557.jpeg',
      title: 'Graduation Ceremony',
      description: 'Successful candidates celebrating their achievement'
    },
    {
      id: 4,
      type: 'image',
      category: 'training',
      src: 'https://images.pexels.com/photos/8926558/pexels-photo-8926558.jpeg',
      title: 'Obstacle Course Training',
      description: 'Students practicing on the obstacle course'
    },
    {
      id: 5,
      type: 'image',
      category: 'classroom',
      src: 'https://images.pexels.com/photos/8926559/pexels-photo-8926559.jpeg',
      title: 'Group Discussion',
      description: 'SSB interview preparation session'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      src: 'https://images.pexels.com/photos/8926560/pexels-photo-8926560.jpeg',
      title: 'Awards Ceremony',
      description: 'Recognizing top performers'
    },
    {
      id: 7,
      type: 'image',
      category: 'facility',
      src: 'https://images.pexels.com/photos/8926561/pexels-photo-8926561.jpeg',
      title: 'Academy Building',
      description: 'Main academic block of the academy'
    },
    {
      id: 8,
      type: 'image',
      category: 'facility',
      src: 'https://images.pexels.com/photos/8926562/pexels-photo-8926562.jpeg',
      title: 'Library',
      description: 'Well-equipped library with defense-related resources'
    },
    {
      id: 9,
      type: 'image',
      category: 'training',
      src: 'https://images.pexels.com/photos/8926563/pexels-photo-8926563.jpeg',
      title: 'Parade Practice',
      description: 'Students practicing drill and parade'
    },
    {
      id: 10,
      type: 'image',
      category: 'events',
      src: 'https://images.pexels.com/photos/8926564/pexels-photo-8926564.jpeg',
      title: 'Guest Lecture',
      description: 'Inspiring lecture by a decorated officer'
    },
    {
      id: 11,
      type: 'image',
      category: 'classroom',
      src: 'https://images.pexels.com/photos/8926565/pexels-photo-8926565.jpeg',
      title: 'Mock Interview',
      description: 'SSB interview simulation session'
    },
    {
      id: 12,
      type: 'image',
      category: 'facility',
      src: 'https://images.pexels.com/photos/8926566/pexels-photo-8926566.jpeg',
      title: 'Sports Ground',
      description: 'Multi-purpose sports facility for physical training'
    }
  ];

  const filters = [
    { id: 'all', name: 'All', icon: ImageIcon },
    { id: 'training', name: 'Training', icon: Users },
    { id: 'classroom', name: 'Classroom', icon: Award },
    { id: 'events', name: 'Events', icon: Award },
    { id: 'facility', name: 'Facilities', icon: ImageIcon }
  ];

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  const openModal = (item: any) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Explore our training facilities, student activities, and memorable moments from Elite Defence Academy
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">Training Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
              <div className="text-gray-600">Event Highlights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Video Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                <filter.icon className="h-4 w-4" />
                <span>{filter.name}</span>
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer group"
                onClick={() => openModal(item)}
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Videos</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Watch our training programs, success stories, and facility tours
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors">
                <div className="relative">
                  <img
                    src={`https://images.pexels.com/photos/892649${video}/pexels-photo-892649${video}.jpeg`}
                    alt={`Video ${video}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer">
                    <Play className="h-16 w-16 text-white hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Academy Tour Video {video}</h3>
                  <p className="text-blue-200 text-sm">Get a virtual tour of our facilities and training programs</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedMedia.src}
              alt={selectedMedia.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white p-6 rounded-lg mt-4">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-600">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Want to Be Part of Our Success Story?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful candidates who have achieved their dreams of serving the nation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Schedule a Visit
            </button>
            <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;