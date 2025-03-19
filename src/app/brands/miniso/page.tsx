import { Metadata } from 'next';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';
import ImageGallery from '@/components/ui/ImageGallery';

// 使用实际的图片路径
const MINISO_HERO = '/images/brands/miniso/hero.jpg';
const MINISO_PRODUCT1 = '/images/brands/miniso/product1.jpg';
const MINISO_PRODUCT2 = '/images/brands/miniso/product2.webp';
const MINISO_PRODUCT3 = '/images/brands/miniso/product3.jpg';
const MINISO_PRODUCT4 = '/images/brands/miniso/product4.JPG';
const MINISO_STORE2 = '/images/brands/miniso/store2.JPG';
const MINISO_STORE3 = '/images/brands/miniso/store3.jpg';
const MINISO_STORE4 = '/images/brands/miniso/store4.jpg';
const MINISO_STORE5 = '/images/brands/miniso/store5.webp';

export const metadata: Metadata = {
  title: 'Miniso | CC BHUTAN',
  description: 'Discover Miniso stores across Bhutan, offering quality lifestyle products at affordable prices. 7 locations serving customers nationwide.',
};

const storeImages = [
  {
    src: MINISO_STORE2,
    alt: 'MINISO Paro Store Front',
    caption: 'MINISO Paro Store',
  },
  {
    src: MINISO_STORE5,
    alt: 'MINISO Thimphu Store Front',
    caption: 'MINISO Thimphu Store',
  },
  {
    src: MINISO_PRODUCT1,
    alt: 'MINISO Product Collection',
    caption: 'Lifestyle Product Collection',
  },
  {
    src: MINISO_STORE4,
    alt: 'MINISO Plush Toys Section',
    caption: 'Plush Toys Theme Section',
  },
  {
    src: MINISO_PRODUCT3,
    alt: 'MINISO Product Display',
    caption: 'Premium Product Showcase',
  },
  {
    src: MINISO_PRODUCT2,
    alt: 'MINISO IP Products',
    caption: 'Licensed IP Collections',
  },
];

const storeLocations = [
  {
    city: 'Thimphu',
    address: 'Norzin Lam (New Store)',
    hours: '10:00 AM - 8:30 PM',
    phone: '+975 77454705',
  },
  {
    city: 'Thimphu',
    address: 'City Center (Old Store)',
    hours: '10:00 AM - 8:30 PM',
    phone: '+975 77454705',
  },
  {
    city: 'Paro',
    address: 'Main Market Area',
    hours: '10:00 AM - 8:30 PM',
    phone: '+975 77454705',
  },
  {
    city: 'Phuentsholing',
    address: 'Near Main Gate',
    hours: '10:00 AM - 8:30 PM',
    phone: '+975 77454705',
  },
  {
    city: 'Gelephu',
    address: 'Central Market',
    hours: '10:00 AM - 8:30 PM',
    phone: '+975 17331804',
  },
  {
    city: 'Mongar',
    address: 'Main Street',
    hours: '10:00 AM - 9:00 PM',
    phone: '+975 17629377',
  },
  {
    city: 'Wangduephodrang',
    address: 'New Town Area',
    hours: '10:00 AM - 9:00 PM',
    phone: '+975 77280011',
  },
];

export default function MinisoPage() {
  return (
    <>
      <PageTitle 
        title="Miniso Bhutan" 
        subtitle="7 Stores Across Bhutan"
        backgroundImage={MINISO_HERO}
      />
      
      {/* Brand Introduction */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">About Miniso in Bhutan</h2>
            <p className="text-lg text-gray-700 mb-6">
              As the Master Franchisee for Miniso in Bhutan, CC BHUTAN has successfully introduced this popular global lifestyle brand to the Bhutanese market, opening 7 stores across the country since 2015.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Miniso offers quality home goods, cosmetics, and accessories at affordable prices, bringing international design standards and product quality to Bhutan's retail landscape.
            </p>
            <p className="text-lg text-gray-700">
              Our Miniso stores have quickly become favorite shopping destinations for Bhutanese consumers who appreciate the brand's combination of quality, design, and value.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={MINISO_PRODUCT4}
              alt="MINISO Store Interior Display"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Store Gallery */}
      <Section backgroundColor="light" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Our Miniso Stores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our Miniso locations across Bhutan
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <ImageGallery 
          images={storeImages}
          columns={3}
          gap="lg"
          rounded="md"
        />
      </Section>
      
      {/* Store Locations */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Store Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find a Miniso store near you
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeLocations.map((store, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h3 className="text-xl font-bold text-[#1A365D] mb-1">{store.city}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-4"></div>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Address:</span> {store.address}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Hours:</span> {store.hours}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> {store.phone}
              </p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Product Categories */}
      <Section backgroundColor="dark" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Product Categories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the diverse range of products available at Miniso
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-[#1A365D] mb-2">Home Decor</h3>
            <p className="text-gray-600 text-sm">Stylish and affordable home accessories</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-[#1A365D] mb-2">Beauty</h3>
            <p className="text-gray-600 text-sm">Cosmetics and personal care items</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-[#1A365D] mb-2">Stationery</h3>
            <p className="text-gray-600 text-sm">Creative and practical stationery items</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-[#1A365D] mb-2">Digital</h3>
            <p className="text-gray-600 text-sm">Gadgets and electronic accessories</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-[#1A365D] mb-2">Fashion</h3>
            <p className="text-gray-600 text-sm">Accessories and seasonal fashion items</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-[#1A365D] mb-2">Toys</h3>
            <p className="text-gray-600 text-sm">Fun and educational toys for all ages</p>
          </div>
        </div>
      </Section>
    </>
  );
} 