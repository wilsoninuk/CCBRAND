import { Metadata } from 'next';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';

// Images
const CREAMNEST_PRODUCT = '/images/brands/creamnest/product.png';
const CREAMNEST_ABOUT = '/images/brands/creamnest/about-creamnest.jpg';
const CREAMNEST_DISTRIBUTION_MAP = '/images/brands/creamnest/distribution-map.svg';

export const metadata: Metadata = {
  title: 'Creamnest Milk Tea | SHAGYAL ENTERPRISES',
  description: 'SHAGYAL ENTERPRISES is the exclusive distributor of Creamnest Milk Tea Powder in Bhutan, supplying premium milk tea products nationwide.',
};

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
    cities: ['Thimphu', 'Paro', 'Wangdue', 'Punakha'],
    coverage: '100+ retail outlets',
    coordinates: { lng: 30, lat: 40 },
  },
  {
    region: 'Central Bhutan',
    cities: ['Bumthang', 'Trongsa', 'Zhemgang'],
    coverage: '50+ retail outlets',
    coordinates: { lng: 50, lat: 45 },
  },
  {
    region: 'Eastern Bhutan',
    cities: ['Mongar', 'Trashigang', 'Pemagatshel'],
    coverage: '40+ retail outlets',
    coordinates: { lng: 70, lat: 45 },
  },
  {
    region: 'Southern Bhutan',
    cities: ['Phuentsholing', 'Gelephu', 'Samdrup Jongkhar'],
    coverage: '60+ retail outlets',
    coordinates: { lng: 50, lat: 70 },
  },
];

export default function CreamnestPage() {
  return (
    <>
      {/* Hero Section with Product */}
      <div className="w-full min-h-[70vh] bg-[#0A2647] relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          {/* 渐变叠加 - 增加深度和层次感 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295]" />
          {/* 光效果 - 增加视觉层次 */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: "radial-gradient(circle at 50% 50%, #2C74B3 0%, transparent 70%)"
               }}
          />
        </div>

        {/* 内容容器 */}
        <div className="container mx-auto px-4 relative z-10 h-[70vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full py-12">
            {/* Text Content */}
            <div className="text-white lg:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Creamnest Tea Time Dairy Mix
              </h1>
              <div className="h-1 w-24 bg-[#FDB347] mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-100 mb-6 leading-relaxed">
                Premium milk tea powder made with New Zealand dairy, bringing authentic taste to every cup.
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex items-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-[#FDB347] font-bold mr-2">6</span>
                  <span className="text-gray-100">Delicious Flavors</span>
                </div>
                <div className="flex items-center bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-[#FDB347] font-bold mr-2">250+</span>
                  <span className="text-gray-100">Retail Outlets</span>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative lg:pl-8">
              <div className="relative w-full aspect-square max-w-[450px] mx-auto">
                <Image
                  src={CREAMNEST_PRODUCT}
                  alt="Creamnest Tea Time Dairy Mix"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Product Highlights */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <p className="text-[#0A2647] font-bold">New Zealand</p>
                  <p className="text-sm text-gray-600">Premium Dairy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Introduction */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">About Creamnest</h2>
            <p className="text-lg text-gray-700 mb-6">
              Since 2020, SHAGYAL ENTERPRISES has been the exclusive distributor of Creamnest Milk Tea Powder in Bhutan. This premium beverage product has quickly gained popularity across the country for its authentic taste and convenient preparation.
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
              src={CREAMNEST_ABOUT}
              alt="Creamnest Milk Tea Powder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Distribution Network Map */}
      <Section backgroundColor="light" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Our Distribution Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nationwide coverage through strategic distribution points
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto h-[600px] rounded-lg overflow-hidden shadow-xl mb-8 bg-white p-8">
          {/* Map Container */}
          <div className="relative w-full h-full">
            <Image
              src={CREAMNEST_DISTRIBUTION_MAP}
              alt="Creamnest Distribution Network Map"
              fill
              className="object-contain"
              priority
              quality={100}
            />
            
            {/* Distribution Points */}
            {distributionRegions.map((region, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${region.coordinates.lng}%`,
                  top: `${region.coordinates.lat}%`,
                  zIndex: 10
                }}
              >
                {/* Animated Point Marker with improved visibility */}
                <div className="relative">
                  {/* White background for better visibility */}
                  <div className="absolute w-5 h-5 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  {/* Outer ping animation */}
                  <div className="absolute w-8 h-8 bg-[#D4AF37]/30 rounded-full animate-ping" />
                  {/* Inner static dot */}
                  <div className="relative w-4 h-4 bg-[#D4AF37] rounded-full shadow-lg border-2 border-white" />
                </div>
                
                {/* Enhanced Tooltip with improved visibility */}
                <div className="absolute left-6 top-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 min-w-[220px] z-20 border border-gray-100">
                  <h3 className="font-bold text-[#1A365D] mb-2">{region.region}</h3>
                  <div className="h-0.5 w-12 bg-[#D4AF37] mb-3"></div>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Cities:</span><br/>
                    {region.cities.join(', ')}
                  </p>
                  <p className="text-sm font-medium text-[#D4AF37]">{region.coverage}</p>
                </div>
              </div>
            ))}

            {/* Map Legend with improved visibility */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-md border border-gray-100">
              <h4 className="text-sm font-bold text-[#1A365D] mb-2">Coverage</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full mr-2 border border-white"></div>
                  <span className="text-xs text-gray-600">Distribution Point</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 border-2 border-[#1A365D] rounded-full mr-2 bg-white"></div>
                  <span className="text-xs text-gray-600">Major City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Region Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {distributionRegions.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-[#1A365D] mb-2">{region.region}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-4"></div>
              <ul className="text-gray-600 space-y-1 mb-3">
                {region.cities.map((city, cityIndex) => (
                  <li key={cityIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></span>
                    {city}
                  </li>
                ))}
              </ul>
              <p className="font-medium text-[#D4AF37] mt-4">{region.coverage}</p>
            </div>
          ))}
        </div>
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
    </>
  );
} 