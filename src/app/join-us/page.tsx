import * as React from 'react';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaGraduationCap, FaHandshake, FaUsers } from 'react-icons/fa';

// Images
const CULTURE_IMAGE = '/images/join-us/culture.jpg';
const BENEFITS_IMAGE = '/images/join-us/benefits.jpg';
const TEAM_IMAGE = '/images/join-us/team.jpg';
const OFFICE_IMAGE = '/images/join-us/office.webp';

export const metadata: Metadata = {
  title: 'Join Our Team | SHAGYAL ENTERPRISES',
  description: 'Explore career opportunities at SHAGYAL ENTERPRISES. Join our growing team and be part of Bhutan\'s leading retail and distribution company.',
};

const benefits = [
  {
    title: 'Competitive Salary',
    description: 'We offer competitive compensation packages that recognize your skills and experience.',
  },
  {
    title: 'Career Growth',
    description: 'Opportunities for professional development and career advancement within the company.',
  },
  {
    title: 'Health Insurance',
    description: 'Comprehensive health insurance coverage for you and your family.',
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working hours and paid time off to help you maintain a healthy work-life balance.',
  },
];

const positions = [
  {
    title: 'Store Manager',
    location: 'Thimphu',
    type: 'Full-time',
    description: 'We are looking for an experienced Store Manager to oversee daily operations of our retail outlet.',
  },
  {
    title: 'Sales Representative',
    location: 'Paro',
    type: 'Full-time',
    description: 'Join our sales team to promote and distribute our products across the region.',
  },
  {
    title: 'Marketing Coordinator',
    location: 'Thimphu',
    type: 'Full-time',
    description: 'Help develop and implement marketing strategies for our brands.',
  },
  {
    title: 'Warehouse Supervisor',
    location: 'Phuentsholing',
    type: 'Full-time',
    description: 'Manage inventory and oversee warehouse operations for efficient distribution.',
  },
];

export default function JoinUsPage() {
  return (
    <>
      {/* Career Introduction */}
      <Section backgroundColor="white" paddingY="md" className="pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">Join Our Team</h1>
            <div className="h-1 w-20 bg-[#D4AF37] mb-6"></div>
            <p className="text-base text-gray-700 mb-4">
              At SHAGYAL ENTERPRISES, we believe in nurturing talent and providing opportunities for growth. Join our dynamic team and be part of Bhutan's leading retail and distribution company.
            </p>
            <p className="text-base text-gray-700 mb-6">
              With 17 years of experience in the industry, we offer a collaborative work environment where innovation is encouraged and excellence is rewarded.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center space-x-4">
                <div className="text-[#D4AF37] text-2xl">
                  <FaUsers />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A365D]">100+</h3>
                  <p className="text-gray-600">Employees</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#D4AF37] text-2xl">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A365D]">4</h3>
                  <p className="text-gray-600">Business Units</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#D4AF37] text-2xl">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A365D]">25+</h3>
                  <p className="text-gray-600">Training Programs</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-[#D4AF37] text-2xl">
                  <FaHandshake />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A365D]">15+</h3>
                  <p className="text-gray-600">Partner Brands</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={TEAM_IMAGE}
              alt="SHAGYAL ENTERPRISES Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Company Culture Section */}
      <Section backgroundColor="white" paddingY="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">Life at SHAGYAL ENTERPRISES</h2>
            <div className="h-1 w-20 bg-[#D4AF37] mb-6"></div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A365D]/10 flex items-center justify-center">
                  <div className="text-[#D4AF37] text-xl">
                    <FaUsers />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">Collaborative Environment</h3>
                  <p className="text-gray-700">
                    Work alongside passionate individuals in a supportive team setting where ideas are valued and creativity is encouraged.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A365D]/10 flex items-center justify-center">
                  <div className="text-[#D4AF37] text-xl">
                    <FaGraduationCap />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">Continuous Learning</h3>
                  <p className="text-gray-700">
                    Access regular training programs, workshops, and skill development opportunities to grow both personally and professionally.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A365D]/10 flex items-center justify-center">
                  <div className="text-[#D4AF37] text-xl">
                    <FaHandshake />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A365D] mb-2">Inclusive Culture</h3>
                  <p className="text-gray-700">
                    Experience a workplace that celebrates diversity, promotes work-life balance, and organizes regular team activities and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={CULTURE_IMAGE}
              alt="Life at SHAGYAL ENTERPRISES"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section backgroundColor="light" paddingY="lg">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-3">Why Work With Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The benefits of building your career with SHAGYAL ENTERPRISES
          </p>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">{benefit.title}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-4"></div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Current Openings */}
      <Section backgroundColor="white" paddingY="lg">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-3">Current Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our current job openings across various brands and locations
          </p>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1A365D]">{position.title}</h3>
                  <p className="text-gray-600">{position.location}</p>
                </div>
                <span className="bg-[#1A365D] text-white text-sm px-3 py-1 rounded-full">
                  {position.type}
                </span>
              </div>
              
              <div className="h-1 w-12 bg-[#D4AF37] mb-6"></div>
              
              <div className="mb-4">
                <h4 className="font-bold text-[#1A365D] mb-2">Description:</h4>
                <p className="text-gray-700">{position.description}</p>
              </div>
              
              <button className="bg-[#D4AF37] hover:bg-[#C09A28] text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                Apply for this Position
              </button>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Application Process */}
      <Section backgroundColor="dark" paddingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={OFFICE_IMAGE}
                alt="Career Growth at SHAGYAL ENTERPRISES"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to Apply</h2>
            <p className="text-base text-gray-300 mb-6">
              We're always looking for talented individuals to join our team. If you're interested in any of our current openings or would like to submit your resume for future opportunities, here's how to apply:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">1. Submit Your Application</h3>
                <p className="text-gray-300">
                  Email your resume and cover letter to wilsoninuk@gmail.com, indicating the position you're applying for in the subject line. For inquiries, call +975 77454705.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">2. Initial Screening</h3>
                <p className="text-gray-300">
                  Our HR team will review your application and reach out to qualified candidates for a preliminary interview.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">3. Interview Process</h3>
                <p className="text-gray-300">
                  Successful candidates will proceed to interviews with department managers and potentially senior leadership.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">4. Offer and Onboarding</h3>
                <p className="text-gray-300">
                  Selected candidates will receive an offer letter and undergo a comprehensive onboarding process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 