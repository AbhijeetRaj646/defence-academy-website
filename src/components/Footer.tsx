import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-yellow-500" />
              <div>
                <h3 className="text-xl font-bold">Elite Defence Academy</h3>
                <p className="text-sm text-blue-200">Excellence Through Discipline</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Preparing future officers for Indian Armed Forces with comprehensive training programs 
              and expert guidance for NDA, CDS, AFCAT, and SSB interviews.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-blue-200 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/gallery" className="text-blue-200 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-blue-200 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Our Courses</h4>
            <ul className="space-y-2">
              <li className="text-blue-200">NDA Foundation</li>
              <li className="text-blue-200">CDS Preparation</li>
              <li className="text-blue-200">AFCAT Training</li>
              <li className="text-blue-200">SSB Interview</li>
              <li className="text-blue-200">Physical Training</li>
              <li className="text-blue-200">Personality Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-1" />
                <p className="text-blue-200 text-sm">
                  123 Defence Colony<br />
                  New Delhi - 110024<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <a href="tel:+919876543210" className="text-blue-200 hover:text-white transition-colors">
                  +91-9876543210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <a href="mailto:info@defenceacademy.com" className="text-blue-200 hover:text-white transition-colors">
                  info@defenceacademy.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-200 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-200 hover:text-yellow-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-200 hover:text-yellow-500 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            &copy; 2024 Elite Defence Academy. All rights reserved. | Designed with Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;