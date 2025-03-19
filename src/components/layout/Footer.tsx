import * as React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-[#0F2A4A] to-[#1A365D] text-white">
      <div className="container mx-auto pt-16 pb-8 px-4">
        {/* Top accent line */}
        <div className="w-20 h-1 bg-[#D4AF37] mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              SHAGYAL ENTERPRISES
              <span className="ml-2 h-1 w-6 bg-[#D4AF37] inline-block"></span>
            </h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              17 years of excellence in retail and distribution across Bhutan. Leading the market with innovation and quality service.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.facebook.com/minisobhutanofficial/" className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300" aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
            </div>
          </div>
          
          {/* Our Brands */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Our Brands</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/brands/miniso" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Miniso (7 Stores)
                </Link>
              </li>
              <li>
                <Link href="/brands/focallure" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Focallure Beauty (3 Stores)
                </Link>
              </li>
              <li>
                <Link href="/brands/creamnest" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Creamnest Distribution
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                  Join Our Team
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#D4AF37]" />
                <span>
                  Main Office: Thimphu, Bhutan<br/>
                  Stores across: Thimphu, Paro, Phuentsholing, Gelephu, Wangduephodrang, Mongar
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#D4AF37]" />
                <span>+975 77454705</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#D4AF37]" />
                <span>shagyal2k@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SHAGYAL ENTERPRISES. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Family-owned businesses led by Kencho Wangdi and Tshering.
          </p>
        </div>
      </div>
    </footer>
  );
} 