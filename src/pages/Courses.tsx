import React, { useState, useMemo } from 'react';
import { Clock, Users, BookOpen, Target, Check, Star, Calendar, Award } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      title: "NDA Foundation Course",
      category: "nda",
      duration: "12 months",
      batchSize: "25 students",
      fee: "₹85,000",
      image: "https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg",
      description: "Comprehensive preparation for National Defence Academy entrance examination covering all subjects with equal emphasis on physical and mental development.",
      highlights: [
        "Complete syllabus coverage for NDA",
        "Mathematics and General Ability Test",
        "Physical fitness training",
        "Personality development sessions",
        "Regular mock tests and assessments",
        "Individual attention and mentoring"
      ],
      schedule: "Mon-Sat: 6:00 AM - 12:00 PM",
      nextBatch: "March 1, 2024"
    },
    {
      id: 2,
      title: "CDS Comprehensive Program",
      category: "cds",
      duration: "10 months",
      batchSize: "20 students",
      fee: "₹75,000",
      image: "https://images.pexels.com/photos/8926550/pexels-photo-8926550.jpeg",
      description: "Intensive training for Combined Defence Services examination with focus on English, General Knowledge, and Mathematics for all three academies.",
      highlights: [
        "English language proficiency",
        "General Knowledge and Current Affairs",
        "Elementary Mathematics",
        "Academy-specific preparation",
        "Weekly performance analysis",
        "Interview preparation guidance"
      ],
      schedule: "Mon-Sat: 7:00 AM - 1:00 PM",
      nextBatch: "March 15, 2024"
    },
    {
      id: 3,
      title: "AFCAT Specialized Training",
      category: "afcat",
      duration: "8 months",
      batchSize: "30 students",
      fee: "₹65,000",
      image: "https://images.pexels.com/photos/8926551/pexels-photo-8926551.jpeg",
      description: "Specialized preparation for Air Force Common Admission Test focusing on Verbal Ability, Numerical Ability, Reasoning, and Military Aptitude.",
      highlights: [
        "Verbal ability and comprehension",
        "Numerical ability and reasoning",
        "General awareness and military knowledge",
        "Aviation-specific topics",
        "Time management techniques",
        "Air Force culture orientation"
      ],
      schedule: "Mon-Fri: 8:00 AM - 2:00 PM",
      nextBatch: "April 1, 2024"
    },
    {
      id: 4,
      title: "SSB Interview Mastery",
      category: "ssb",
      duration: "3 months",
      batchSize: "15 students",
      fee: "₹45,000",
      image: "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg",
      description: "Intensive training for Services Selection Board interviews covering psychological tests, group discussions, personal interviews, and command tasks.",
      highlights: [
        "Psychological tests (TAT, WAT, SRT)",
        "Group discussions and planning exercises",
        "Individual interviews and lecturettes",
        "Command tasks and group exercises",
        "Personality development workshops",
        "Mock SSB interviews"
      ],
      schedule: "Weekend batches available",
      nextBatch: "March 10, 2024"
    },
    {
      id: 5,
      title: "Physical Fitness Program",
      category: "physical",
      duration: "6 months",
      batchSize: "40 students",
      fee: "₹25,000",
      image: "https://images.pexels.com/photos/8926553/pexels-photo-8926553.jpeg",
      description: "Complete physical conditioning program designed to meet defence services fitness standards with professional trainers and nutritional guidance.",
      highlights: [
        "Cardiovascular endurance training",
        "Strength and flexibility exercises",
        "Running and obstacle training",
        "Nutritional counseling",
        "Medical fitness monitoring",
        "Sports and team building activities"
      ],
      schedule: "Daily: 5:00 AM - 7:00 AM & 5:00 PM - 7:00 PM",
      nextBatch: "Ongoing admissions"
    },
    {
      id: 6,
      title: "Integrated Defence Course",
      category: "integrated",
      duration: "18 months",
      batchSize: "20 students",
      fee: "₹1,20,000",
      image: "https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg",
      description: "Complete integrated program covering all defence examinations with flexibility to appear for multiple exams and comprehensive personality development.",
      highlights: [
        "Multi-exam preparation (NDA, CDS, AFCAT)",
        "SSB interview training included",
        "Physical fitness program",
        "Personality development sessions",
        "Career counseling and guidance",
        "Alumni network support"
      ],
      schedule: "Mon-Sat: 6:00 AM - 2:00 PM",
      nextBatch: "February 15, 2024"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'nda', name: 'NDA' },
    { id: 'cds', name: 'CDS' },
    { id: 'afcat', name: 'AFCAT' },
    { id: 'ssb', name: 'SSB' },
    { id: 'physical', name: 'Physical Training' },
    { id: 'integrated', name: 'Integrated' }
  ];

  const filteredCourses = useMemo(() => (
    activeTab === 'all' ? courses : courses.filter(course => course.category === activeTab)
  ), [activeTab]);

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Latest and most relevant study materials prepared by experts"
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Limited students per batch for personalized attention"
    },
    {
      icon: Target,
      title: "Mock Tests",
      description: "Regular mock tests simulating actual exam conditions"
    },
    {
      icon: Award,
      title: "Expert Faculty",
      description: "Experienced military officers and subject specialists"
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Training Programs</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to prepare you for every aspect of defence entrance examinations
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Course Categories</h2>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === category.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>
                  
                  {/* Course Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Batch Size: {course.batchSize}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Next Batch: {course.nextBatch}</span>
                    </div>
                  </div>

                  {/* Course Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm">Course Highlights:</h4>
                    <ul className="space-y-1">
                      {course.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-600">
                          <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fee and CTA */}
                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-900">{course.fee}</span>
                      <span className="text-gray-600 text-sm ml-1">total fee</span>
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-4 py-2 rounded-lg transition-colors text-sm">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Our Courses Stand Out?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Proven Track Record</h3>
                    <p className="text-blue-200 text-sm">85% success rate with students consistently achieving top ranks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Expert Faculty</h3>
                    <p className="text-blue-200 text-sm">Retired military officers and subject specialists with extensive experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Holistic Development</h3>
                    <p className="text-blue-200 text-sm">Focus on both academic excellence and personality development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Learning</h3>
                    <p className="text-blue-200 text-sm">Multiple batch timings and weekend options available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Special Offers</h3>
              <div className="space-y-4">
                <div className="bg-yellow-500 text-blue-900 p-4 rounded-lg">
                  <h4 className="font-semibold">Early Bird Discount</h4>
                  <p className="text-sm">Get 15% off on course fees for enrollments before March 1st</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-semibold">Group Discount</h4>
                  <p className="text-sm text-blue-100">Special rates available for group enrollments of 3 or more students</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="font-semibold">Alumni Referral</h4>
                  <p className="text-sm text-blue-100">Get additional benefits through our alumni referral program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;