import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';
import Image from 'next/image';
import { Metadata } from 'next';

// 使用新的图片
const ABOUT_HERO = '/images/about/headquarters.jpg';
const FOUNDER_IMAGE = '/images/about/founders.jpg';
const TIMELINE_IMAGE = '/images/about/timeline.jpg';

export const metadata: Metadata = {
  title: 'About Us | SHAGYAL ENTERPRISES',
  description: 'Learn about the 25-year entrepreneurial journey of SHAGYAL ENTERPRISES, from a single store to leading retail and distribution company in Bhutan.',
};

export default function AboutPage() {
  return (
    <>
      {/* Company Overview */}
      <Section backgroundColor="white" paddingY="md">
        <div className="max-w-5xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">Our Entrepreneurial Story</h1>
              <div className="h-0.5 w-20 bg-[#D4AF37] mb-6"></div>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                17 years ago, Kencho Wangdi and Tshering Bidha embarked on their entrepreneurial journey with their first store in Bhutan, importing daily necessities and beauty products from Thailand.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, our family-owned businesses, led by SHAGYAL ENTERPRISES, reflect our dedication to quality, innovation, and market expansion.
              </p>
              <p className="text-base md:text-lg text-gray-700">
                Our operations employ over 100 individuals, including a skilled management team of 10, and generate an annual turnover exceeding USD 10 million. We hold three major import licenses in Bhutan, which enable us to efficiently handle logistics and maintain a steady supply of international products.
              </p>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={FOUNDER_IMAGE}
                alt="Kencho Wangdi and Tshering Bidha"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Founders Section */}
      <Section backgroundColor="light" paddingY="md">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Our Founders</h2>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Kencho Wangdi</h3>
            <p className="text-gray-700 mb-6">
              Kencho Wangdi, with his visionary leadership and business acumen, has been the driving force behind the expansion of our business operations. His ability to identify market opportunities and forge strategic partnerships has enabled SHAGYAL ENTERPRISES to grow from a single store to a diversified retail enterprise.
            </p>
            <p className="text-gray-700">
              With expertise in supply chain management and import logistics, Kencho has secured important import licenses that form the backbone of our retail operations, enabling us to bring international brands to the Bhutanese market.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Tshering Bidha</h3>
            <p className="text-gray-700 mb-6">
              Tshering Bidha brings her exceptional customer insight and operational expertise to the business. Her deep understanding of consumer preferences and retail management has been crucial in creating exceptional shopping experiences across all our retail outlets.
            </p>
            <p className="text-gray-700">
              Her focus on quality assurance and team development has established a strong organizational culture centered on customer satisfaction and operational excellence, making our stores the preferred shopping destinations in Bhutan.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Timeline Section */}
      <Section backgroundColor="dark" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Growth Timeline</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a single shop to a nationwide retail network
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4AF37]"></div>
          
          {/* Timeline Events */}
          <div className="grid grid-cols-1 gap-16 relative z-10">
            {/* First Store */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-2xl font-bold text-[#1A365D]">2008</h3>
                  <h4 className="text-xl font-semibold text-[#1A365D] mb-3">Supermarket Launch</h4>
                  <p className="text-gray-700">
                    Started our retail journey by opening our first supermarket in Thimphu, offering a wide range of imported and local products.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
            
            {/* Cosmetics Store */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-2xl font-bold text-[#1A365D]">2015</h3>
                  <h4 className="text-xl font-semibold text-[#1A365D] mb-3">Cosmetics Store</h4>
                  <p className="text-gray-700">
                    Expanded into beauty retail with our first cosmetics store, bringing international beauty brands to Bhutan.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Miniso */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-2xl font-bold text-[#1A365D]">2019</h3>
                  <h4 className="text-xl font-semibold text-[#1A365D] mb-3">First Miniso Store</h4>
                  <p className="text-gray-700">
                    Secured the Master Franchise for Miniso in Bhutan and opened our first Miniso store in Thimphu.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
            
            {/* CC Brand */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-2xl font-bold text-[#1A365D]">2021</h3>
                  <h4 className="text-xl font-semibold text-[#1A365D] mb-3">CC Brand Establishment</h4>
                  <p className="text-gray-700">
                    Established CC Brand as our corporate identity, consolidating our various retail operations under one banner.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Focallure Bhutan */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-2xl font-bold text-[#1A365D]">2023</h3>
                  <h4 className="text-xl font-semibold text-[#1A365D] mb-3">Focallure Bhutan</h4>
                  <p className="text-gray-700">
                    Established Focallure Bhutan, bringing premium beauty and cosmetics products to the Bhutanese market.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
            
            {/* Present */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <div className="bg-[#D4AF37] p-6 rounded-lg shadow-lg inline-block">
                  <h3 className="text-2xl font-bold text-white">2024</h3>
                  <h4 className="text-xl font-semibold text-white mb-3">Creamnest Launch</h4>
                  <p className="text-white">
                    Operating 7 Miniso stores, 3 Focallure beauty stores, and launching nationwide distribution for Creamnest products.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Values Section */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Principles that guide our business operations
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Quality</h3>
            <p className="text-gray-700">
              We are committed to offering only the highest quality products to our customers, ensuring that every purchase meets international standards.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Innovation</h3>
            <p className="text-gray-700">
              We constantly seek innovative retail concepts and products to bring fresh experiences to the Bhutanese market.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Customer Focus</h3>
            <p className="text-gray-700">
              Our business decisions are guided by understanding and meeting the needs of our customers, creating enjoyable shopping experiences.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Integrity</h3>
            <p className="text-gray-700">
              We conduct our business with honesty and transparency, building trust with our customers, partners, and employees.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Community</h3>
            <p className="text-gray-700">
              We are committed to contributing positively to Bhutanese communities through employment opportunities and supporting local initiatives.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-4">Growth</h3>
            <p className="text-gray-700">
              We strive for continuous growth, both as a business and in developing our team members' skills and capabilities.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
} 