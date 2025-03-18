import { Metadata } from 'next';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';

// Placeholder images - replace with actual images later
const JOIN_US_HERO = '/images/placeholder-join-us-hero.jpg';
const TEAM_IMAGE = '/images/placeholder-team.jpg';
const CAREER_IMAGE = '/images/placeholder-career.jpg';

export const metadata: Metadata = {
  title: 'Join Our Team | CC BHUTAN',
  description: 'Explore career opportunities with CC BHUTAN, a leading retail and distribution company in Bhutan with over 100 employees across multiple brands.',
};

const careerBenefits = [
  {
    title: 'Professional Growth',
    description: 'We invest in our team members through training, mentorship, and opportunities for advancement within our growing company.',
  },
  {
    title: 'Competitive Compensation',
    description: 'We offer attractive salary packages and performance-based incentives that recognize and reward excellence.',
  },
  {
    title: 'Supportive Work Environment',
    description: 'Join a positive workplace culture that values collaboration, respect, and work-life balance.',
  },
  {
    title: 'Career Stability',
    description: 'As a well-established company with 25 years of history, we provide long-term career opportunities and stability.',
  },
];

const openPositions = [
  {
    title: 'Store Manager',
    location: 'Miniso, Thimphu',
    type: 'Full-time',
    responsibilities: [
      'Oversee daily store operations',
      'Lead and develop store staff',
      'Ensure excellent customer service',
      'Manage inventory and sales targets',
    ],
    requirements: [
      'Minimum 3 years of retail management experience',
      'Strong leadership and communication skills',
      'Customer service orientation',
      'Inventory management experience',
    ],
  },
  {
    title: 'Beauty Consultant',
    location: 'Focallure Beauty, Paro',
    type: 'Full-time',
    responsibilities: [
      'Provide personalized beauty consultations',
      'Demonstrate product applications',
      'Meet sales targets',
      'Maintain product displays',
    ],
    requirements: [
      'Experience in beauty or cosmetics industry preferred',
      'Strong interpersonal and communication skills',
      'Passion for beauty products',
      'Customer service orientation',
    ],
  },
  {
    title: 'Distribution Coordinator',
    location: 'Head Office, Thimphu',
    type: 'Full-time',
    responsibilities: [
      'Coordinate product distribution nationwide',
      'Manage delivery schedules and logistics',
      'Maintain relationships with retailers',
      'Monitor inventory levels',
    ],
    requirements: [
      'Experience in logistics or supply chain management',
      'Strong organizational and planning skills',
      'Excellent communication abilities',
      'Problem-solving mindset',
    ],
  },
  {
    title: 'Retail Sales Associate',
    location: 'Multiple Locations',
    type: 'Full-time / Part-time',
    responsibilities: [
      'Provide excellent customer service',
      'Process sales transactions',
      'Maintain store cleanliness and organization',
      'Assist with stock and inventory management',
    ],
    requirements: [
      'Prior retail experience preferred but not required',
      'Strong customer service orientation',
      'Basic math and computer skills',
      'Ability to work in a team environment',
    ],
  },
];

export default function JoinUsPage() {
  return (
    <>
      <PageTitle 
        title="Join Our Team" 
        subtitle="Build Your Career with CC BHUTAN"
        backgroundImage={JOIN_US_HERO}
      />
      
      {/* Company Culture Section */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">Our Company Culture</h2>
            <p className="text-lg text-gray-700 mb-6">
              At CC BHUTAN, we believe our success is built on the dedication, expertise, and passion of our team members. With over 100 employees across our various business units, we've created a workplace environment that values innovation, collaboration, and growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our 25-year journey has been made possible by building a team of talented individuals who share our commitment to quality, customer service, and business excellence. We foster a culture that encourages learning, development, and career advancement.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're joining our retail operations, distribution network, or management team, you'll become part of a family-owned business that treats its employees with respect and provides opportunities to grow professionally while contributing to Bhutan's retail landscape.
            </p>
          </div>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={TEAM_IMAGE}
              alt="CC BHUTAN Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section backgroundColor="light" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Why Work With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The benefits of building your career with CC BHUTAN
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">{benefit.title}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-4"></div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Current Openings */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Current Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our current job openings across various brands and locations
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {openPositions.map((position, index) => (
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
                <h4 className="font-bold text-[#1A365D] mb-2">Responsibilities:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {position.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-[#1A365D] mb-2">Requirements:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {position.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <button className="bg-[#D4AF37] hover:bg-[#C09A28] text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                Apply for this Position
              </button>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Application Process */}
      <Section backgroundColor="dark" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={CAREER_IMAGE}
                alt="Career Growth at CC BHUTAN"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How to Apply</h2>
            <p className="text-lg text-gray-300 mb-6">
              We're always looking for talented individuals to join our team. If you're interested in any of our current openings or would like to submit your resume for future opportunities, here's how to apply:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#D4AF37] mb-2">1. Submit Your Application</h3>
                <p className="text-gray-300">
                  Email your resume and cover letter to careers@ccbhutan.bt, indicating the position you're applying for in the subject line.
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
      
      {/* Contact Section */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">Contact Our HR Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            Have questions about career opportunities at CC BHUTAN? Our HR team is here to help.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-4">Contact Information</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Email:</span> careers@ccbhutan.bt
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Phone:</span> +975 1234 5695
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> CC BHUTAN Head Office, Norzin Lam, Thimphu, Bhutan
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-4">Office Hours</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Monday-Friday:</span> 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM (by appointment only)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 