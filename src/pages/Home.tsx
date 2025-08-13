import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Users, Trophy, Star, ChevronRight, BookOpen, Award, Clock } from 'lucide-react';

const Home = () => {
  const courses = [
    {
      title: "NDA Foundation",
      description: "Complete preparation for National Defence Academy entrance exam",
      duration: "12 months",
      image: "https://images.pexels.com/photos/8926543/pexels-photo-8926543.jpeg"
    },
    {
      title: "CDS Preparation",
      description: "Comprehensive training for Combined Defence Services examination",
      duration: "10 months",
      image: "https://images.pexels.com/photos/8926544/pexels-photo-8926544.jpeg"
    },
    {
      title: "AFCAT Training",
      description: "Air Force Common Admission Test preparation with flying colors",
      duration: "8 months",
      image: "https://images.pexels.com/photos/8926542/pexels-photo-8926542.jpeg"
    },
    {
      title: "SSB Interview",
      description: "Personality development and interview skills for defence services",
      duration: "3 months",
      image: "https://images.pexels.com/photos/8926545/pexels-photo-8926545.jpeg"
    }
  ];

  const testimonials = [
    {
      name: "Captain Rahul Sharma",
      course: "NDA 2023",
      message: "Elite Defence Academy shaped my dream into reality. The disciplined training and expert guidance helped me clear NDA with flying colors.",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    },
    {
      name: "Lieutenant Priya Singh",
      course: "CDS 2023",
      message: "The comprehensive curriculum and dedicated faculty made my CDS preparation smooth and successful. Forever grateful!",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Flying Officer Amit Kumar",
      course: "AFCAT 2022",
      message: "The academy's systematic approach and personalized attention helped me achieve my goal of joining the Air Force.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    }
  ];

  const achievements = [
    { number: "500+", label: "Students Trained" },
    { number: "85%", label: "Success Rate" },
    { number: "12+", label: "Years Experience" },
    { number: "50+", label: "Officers Commissioned" }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Forge Your <span className="text-yellow-500">Destiny</span> in Defence
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Transform your aspirations into achievements with India's premier defence coaching academy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  to="/courses"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 text-center"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8926547/pexels-photo-8926547.jpeg"
                alt="Defence Training"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-900 p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm font-semibold">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg"
                alt="Academy Building"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
                Building Future Leaders Since 2010
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Elite Defence Academy stands as a beacon of excellence in defence preparation, 
                molding young minds into disciplined officers ready to serve the nation. Our 
                comprehensive training programs, experienced faculty, and proven methodology 
                have successfully guided hundreds of students to their dream careers in the 
                Indian Armed Forces.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-yellow-500" />
                  <span className="font-semibold text-gray-800">Expert Faculty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-yellow-500" />
                  <span className="font-semibold text-gray-800">Focused Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-yellow-500" />
                  <span className="font-semibold text-gray-800">Small Batches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  <span className="font-semibold text-gray-800">Proven Results</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors"
              >
                Learn More About Us
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive courses designed to prepare you for every aspect of defence entrance examinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{course.duration}</span>
                    </div>
                    <Link
                      to="/courses"
                      className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our successful students who are now proudly serving the nation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who chose Elite Defence Academy for their career transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Enroll Now
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Call Now: +91-9876543210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;