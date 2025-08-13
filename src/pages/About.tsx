import React from 'react';
import { Shield, Target, Award, Users, BookOpen, Clock, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const faculty = [
    {
      name: "Col. Rajesh Kumar (Retd.)",
      position: "Director & Head of Training",
      experience: "25 years",
      specialization: "NDA & CDS Strategy",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
    },
    {
      name: "Maj. Priya Sharma (Retd.)",
      position: "SSB Training Expert",
      experience: "15 years",
      specialization: "Psychology & Interview Skills",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    },
    {
      name: "Dr. Amit Singh",
      position: "Mathematics Faculty",
      experience: "12 years",
      specialization: "Advanced Mathematics",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Discipline",
      description: "Instilling military discipline and values in every aspect of training"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for perfection in preparation and results"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Maintaining highest standards of honesty and ethics"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Developing leadership qualities for future officers"
    }
  ];

  const achievements = [
    "500+ students successfully trained and commissioned",
    "85% average success rate across all courses",
    "Top rankers in NDA, CDS, and AFCAT examinations",
    "Partnerships with leading educational institutions",
    "Alumni serving in all three wings of Armed Forces",
    "Recognition from Defence Ministry for excellence"
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Our Academy</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dedicated to shaping future leaders of the Indian Armed Forces through excellence in training and character development
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive, disciplined, and result-oriented training that transforms 
                aspiring candidates into confident leaders ready to serve the nation. We are committed 
                to maintaining the highest standards of education while instilling values of courage, 
                integrity, and dedication.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Experienced military faculty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Personalized attention in small batches</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Comprehensive study materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Regular mock tests and assessments</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the premier defence coaching institute in India, known for our 
                excellence in training, exceptional success rates, and the quality of officers we 
                produce. We envision creating a community of disciplined, capable, and patriotic 
                leaders who will serve the nation with distinction.
              </p>
              <img
                src="https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg"
                alt="Training facility"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide our training methodology and institutional culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <value.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Expert Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from experienced military officers and subject matter experts who understand the demands of defence services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center">
                      <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>{member.experience} Experience</span>
                    </p>
                    <p className="flex items-center">
                      <BookOpen className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>{member.specialization}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Our Achievements</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Over the years, Elite Defence Academy has established itself as a leader in defence 
                training, with a track record of excellence that speaks for itself.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-yellow-500 mt-1" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-900 mb-2">85%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-900 mb-2">12+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-gray-600">Officers Commissioned</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;