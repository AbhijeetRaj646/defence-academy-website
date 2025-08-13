import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Elite Defence Academy",
        "123 Defence Colony",
        "New Delhi - 110024, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Primary: +91-9876543210",
        "Secondary: +91-9876543211",
        "Landline: 011-12345678"
      ]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "info@defenceacademy.com",
        "admissions@defenceacademy.com",
        "support@defenceacademy.com"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Saturday: 8:00 AM - 8:00 PM",
        "Sunday: 9:00 AM - 6:00 PM",
        "Emergency: 24/7 Available"
      ]
    }
  ];

  const branches = [
    {
      name: "Main Campus - Delhi",
      address: "123 Defence Colony, New Delhi - 110024",
      phone: "+91-9876543210",
      email: "delhi@defenceacademy.com"
    },
    {
      name: "Branch - Mumbai",
      address: "456 Military Road, Mumbai - 400001",
      phone: "+91-9876543211",
      email: "mumbai@defenceacademy.com"
    },
    {
      name: "Branch - Bangalore",
      address: "789 Cantonment Area, Bangalore - 560001",
      phone: "+91-9876543212",
      email: "bangalore@defenceacademy.com"
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us to start your journey towards a successful career in defence services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help you with any questions about our courses, admissions, or career guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                <info.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a course</option>
                      <option value="nda">NDA Foundation</option>
                      <option value="cds">CDS Preparation</option>
                      <option value="afcat">AFCAT Training</option>
                      <option value="ssb">SSB Interview</option>
                      <option value="integrated">Integrated Course</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Quick Contact */}
            <div className="space-y-8">
              {/* Google Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Google Map</p>
                    <p className="text-sm text-gray-500">123 Defence Colony, New Delhi</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Main Campus Location</h4>
                  <p className="text-gray-600 text-sm">
                    Easily accessible by metro and bus. Parking available on premises.
                  </p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Quick Contact</h4>
                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Call Now: +91-9876543210</span>
                  </a>
                  
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">WhatsApp Chat</span>
                  </a>
                  
                  <a
                    href="mailto:info@defenceacademy.com"
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">Email Us</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Branches</h2>
            <p className="text-gray-600">Visit any of our conveniently located branches across India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{branch.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{branch.address}</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{branch.phone}</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>{branch.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions from prospective students and parents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">What is the admission process?</h3>
              <p className="text-gray-600 text-sm">Visit our campus, take the entrance test, and complete the enrollment process with required documents.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Do you provide study materials?</h3>
              <p className="text-gray-600 text-sm">Yes, comprehensive study materials, books, and online resources are included in all course packages.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">What is the batch size?</h3>
              <p className="text-gray-600 text-sm">We maintain small batch sizes (15-30 students) to ensure personalized attention and effective learning.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Are there any scholarships available?</h3>
              <p className="text-gray-600 text-sm">Yes, merit-based scholarships and financial assistance programs are available for deserving candidates.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;