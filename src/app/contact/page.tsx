import * as React from 'react';
import { Metadata } from 'next';
import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

// Placeholder image - replace with actual image later
const CONTACT_HERO = '/images/placeholder-contact-hero.jpg';

export const metadata: Metadata = {
  title: 'Contact Us | CC BHUTAN',
  description: 'Get in touch with CC BHUTAN. Contact our team for inquiries about our retail stores, distribution services, or career opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <PageTitle 
        title="Contact Us" 
        subtitle="Get in touch with our team"
        backgroundImage={CONTACT_HERO}
        size="default"
      />
      
      <Section 
        backgroundColor="white" 
        paddingY="lg"
        withPattern={true}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1A365D] mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A365D] focus:border-[#1A365D] outline-none transition-colors" 
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A365D] focus:border-[#1A365D] outline-none transition-colors" 
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A365D] focus:border-[#1A365D] outline-none transition-colors" 
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A365D] focus:border-[#1A365D] outline-none transition-colors" 
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-[#1A365D] text-white font-medium rounded-md hover:bg-[#2C5282] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-[#1A365D] mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1A365D]/10 flex items-center justify-center text-[#1A365D]">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#1A365D]">Our Main Office</h3>
                    <p className="text-gray-600 mt-1">
                      Norzin Lam, Thimphu<br />
                      Bhutan, 11001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1A365D]/10 flex items-center justify-center text-[#1A365D]">
                    <FaPhoneAlt />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#1A365D]">Phone Numbers</h3>
                    <p className="text-gray-600 mt-1">
                      Main: +975 123 456 789<br />
                      Customer Service: +975 123 456 790
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1A365D]/10 flex items-center justify-center text-[#1A365D]">
                    <FaEnvelope />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#1A365D]">Email Addresses</h3>
                    <p className="text-gray-600 mt-1">
                      General Inquiries: info@ccbhutan.bt<br />
                      Customer Support: support@ccbhutan.bt<br />
                      Careers: careers@ccbhutan.bt
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1A365D]/10 flex items-center justify-center text-[#1A365D]">
                    <FaClock />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#1A365D]">Business Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section 
        backgroundColor="light" 
        paddingY="lg"
        withContainer={false}
      >
        <div className="h-[400px] w-full bg-gray-200 flex items-center justify-center">
          {/* Replace with actual map integration */}
          <p className="text-gray-500">Map will be integrated here</p>
        </div>
      </Section>
    </>
  );
} 