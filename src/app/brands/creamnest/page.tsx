import { Metadata } from 'next';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';
import ImageGallery from '@/components/ui/ImageGallery';

// Placeholder images - replace with actual images later
const CREAMNEST_HERO = '/images/placeholder-creamnest-hero.jpg';
const CREAMNEST_PRODUCT1 = '/images/placeholder-creamnest-product1.jpg';
const CREAMNEST_PRODUCT2 = '/images/placeholder-creamnest-product2.jpg';
const CREAMNEST_PRODUCT3 = '/images/placeholder-creamnest-product3.jpg';
const CREAMNEST_PACKAGING = '/images/placeholder-creamnest-packaging.jpg';
const CREAMNEST_DISTRIBUTION = '/images/placeholder-creamnest-distribution.jpg';
const CREAMNEST_RETAIL = '/images/placeholder-creamnest-retail.jpg';

export const metadata: Metadata = {
  title: 'Creamnest Milk Tea | CC BHUTAN',
  description: 'CC BHUTAN is the exclusive distributor of Creamnest Milk Tea Powder in Bhutan, supplying premium milk tea products nationwide.',
};

const productImages = [
  {
    src: CREAMNEST_PRODUCT1,
    alt: 'Creamnest Classic Milk Tea',
    caption: 'Creamnest Classic Milk Tea Powder',
  },
  {
    src: CREAMNEST_PRODUCT2,
    alt: 'Creamnest Flavored Milk Tea',
    caption: 'Creamnest Specialty Flavors',
  },
  {
    src: CREAMNEST_PRODUCT3,
    alt: 'Creamnest Product Range',
    caption: 'Complete Creamnest Product Line',
  },
  {
    src: CREAMNEST_PACKAGING,
    alt: 'Creamnest Packaging',
    caption: 'Premium Packaging for Retail and Bulk Sale',
  },
  {
    src: CREAMNEST_DISTRIBUTION,
    alt: 'Creamnest Distribution',
    caption: 'Nationwide Distribution Network',
  },
  {
    src: CREAMNEST_RETAIL,
    alt: 'Creamnest Retail Display',
    caption: 'Retail Display in Convenience Stores',
  },
];

const productFlavors = [
  {
    name: 'Classic Milk Tea',
    description: 'The original creamy milk tea flavor that has become a favorite across Bhutan.',
  },
  {
    name: 'Thai Milk Tea',
    description: 'Authentic Thai-inspired milk tea with rich aromatic spices.',
  },
  {
    name: 'Brown Sugar Milk Tea',
    description: 'Creamy milk tea enhanced with the rich caramel notes of brown sugar.',
  },
  {
    name: 'Matcha Milk Tea',
    description: 'Japanese-inspired matcha flavor combined with creamy milk tea.',
  },
  {
    name: 'Taro Milk Tea',
    description: 'Unique taro root flavor blended perfectly with creamy milk tea.',
  },
  {
    name: 'Chocolate Milk Tea',
    description: 'Indulgent chocolate flavor combined with the classic milk tea base.',
  },
];

const distributionRegions = [
  {
    region: 'Western Bhutan',
    cities: ['Thimphu', 'Paro', 'Punakha', 'Haa'],
    coverage: '100+ retail outlets',
  },
  {
    region: 'Central Bhutan',
    cities: ['Wangduephodrang', 'Trongsa', 'Bumthang'],
    coverage: '50+ retail outlets',
  },
  {
    region: 'Eastern Bhutan',
    cities: ['Mongar', 'Trashigang', 'Lhuentse'],
    coverage: '40+ retail outlets',
  },
  {
    region: 'Southern Bhutan',
    cities: ['Gelephu', 'Phuentsholing', 'Samdrup Jongkhar'],
    coverage: '60+ retail outlets',
  },
];

export default function CreamnestPage() {
  return (
    <>
      <PageTitle 
        title="Creamnest Milk Tea" 
        subtitle="Exclusive Distributor Across Bhutan"
        backgroundImage={CREAMNEST_HERO}
      />
      
      {/* Product Introduction */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">About Creamnest</h2>
            <p className="text-lg text-gray-700 mb-6">
              Since 2020, CC BHUTAN has been the exclusive distributor of Creamnest Milk Tea Powder in Bhutan. This premium beverage product has quickly gained popularity across the country for its authentic taste and convenient preparation.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Creamnest offers a range of milk tea powders that deliver the perfect creamy taste with each cup. Available in various flavors, these products are specially formulated to provide an authentic milk tea experience with minimal preparation.
            </p>
            <p className="text-lg text-gray-700">
              Through our extensive distribution network, we ensure that Creamnest products are available in convenience stores and retail outlets across every major city in Bhutan, making this beloved beverage accessible to consumers nationwide.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={CREAMNEST_PRODUCT1}
              alt="Creamnest Milk Tea Powder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Product Gallery */}
      <Section backgroundColor="light" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Product Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of Creamnest milk tea products and distribution network
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <ImageGallery 
          images={productImages}
          columns={3}
          gap="lg"
          rounded="md"
        />
      </Section>
      
      {/* Product Flavors */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Creamnest Flavors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of Creamnest milk tea flavors
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productFlavors.map((flavor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">{flavor.name}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-4"></div>
              <p className="text-gray-700">{flavor.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Distribution Network */}
      <Section backgroundColor="dark" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Distribution Network</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creamnest is available across Bhutan through our extensive distribution
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {distributionRegions.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A365D] mb-2">{region.region}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-4"></div>
              
              <h4 className="font-medium text-gray-700 mb-2">Key Cities:</h4>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                {region.cities.map((city, cityIndex) => (
                  <li key={cityIndex}>{city}</li>
                ))}
              </ul>
              
              <p className="text-[#1A365D] font-medium">{region.coverage}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Product Benefits */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Why Choose Creamnest?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The preferred choice for milk tea lovers across Bhutan
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Authentic Flavor</h3>
            <p className="text-gray-700">
              Specially formulated to deliver an authentic milk tea experience with every cup.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Quick Preparation</h3>
            <p className="text-gray-700">
              Ready in minutes - simply add hot water for a perfect cup of milk tea anytime.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Variety of Flavors</h3>
            <p className="text-gray-700">
              Multiple flavors to suit every taste preference, from classic to unique specialty options.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Premium Quality</h3>
            <p className="text-gray-700">
              Made with high-quality ingredients to ensure consistent flavor and texture.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Consistent Supply</h3>
            <p className="text-gray-700">
              Our nationwide distribution ensures product availability throughout Bhutan.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Value for Money</h3>
            <p className="text-gray-700">
              Affordable pricing makes premium milk tea accessible to everyone.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Retailers Section */}
      <Section backgroundColor="light" paddingY="xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">For Retailers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Interested in stocking Creamnest products at your store?
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4 mb-10"></div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1A365D] mb-6">Become a Creamnest Retailer</h3>
            <p className="text-gray-700 mb-8">
              Join our network of over 250 retailers across Bhutan. We offer competitive wholesale pricing, reliable delivery, and marketing support to help you maximize sales.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div>
                <h4 className="font-bold text-[#1A365D] mb-2">What We Offer:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Flexible ordering quantities</li>
                  <li>Reliable delivery schedules</li>
                  <li>Attractive wholesale pricing</li>
                  <li>Display materials for your store</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1A365D] mb-2">Contact Us:</h4>
                <p className="text-gray-700">
                  For wholesale inquiries and to become a retailer, please contact our distribution team:
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Phone:</span> +975 1234 5699
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> distribution@ccbhutan.bt
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
} 