import { Metadata } from 'next';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';
import ImageGallery from '@/components/ui/ImageGallery';

// Placeholder images - replace with actual images later
const FOCALLURE_HERO = '/images/brands/focallure/hero1.jpg';
const FOCALLURE_INTRO_IMAGE = '/images/brands/focallure/store-intro.jpg';
const FOCALLURE_STORE1 = '/images/brands/focallure/store1.jpg';
const FOCALLURE_STORE2 = '/images/brands/focallure/store2.jpg';
const FOCALLURE_PRODUCT1 = '/images/brands/focallure/product1.jpg';
const FOCALLURE_PRODUCT2 = '/images/brands/focallure/product2.jpg';
const FOCALLURE_PRODUCT3 = '/images/brands/focallure/product3.jpg';
const FOCALLURE_PRODUCT4 = '/images/brands/focallure/product4.jpg';
const FOCALLURE_MAKEUP = '/images/brands/focallure/cosmetic.jpg';
const FOCALLURE_SKINCARE = '/images/brands/focallure/skincare.webp';
const FOCALLURE_BEAUTY_TOOLS = '/images/brands/focallure/beauty-tool.jpg';

export const metadata: Metadata = {
  title: 'Focallure Beauty | CC BHUTAN',
  description: 'Discover premium imported cosmetics at Focallure Beauty stores in Bhutan. Three exclusive locations offering high-quality beauty products.',
};

const storeImages = [
  {
    src: FOCALLURE_STORE1,
    alt: 'Focallure Beauty Store in Thimphu',
    caption: 'Focallure Beauty Flagship Store - Thimphu',
  },
  {
    src: FOCALLURE_STORE2,
    alt: 'Focallure Beauty Store in Paro',
    caption: 'Focallure Beauty Store - Paro',
  },
  {
    src: FOCALLURE_PRODUCT1,
    alt: 'Focallure Makeup Products',
    caption: 'Premium Makeup Collection',
  },
  {
    src: FOCALLURE_PRODUCT2,
    alt: 'Focallure Skincare Products',
    caption: 'Advanced Skincare Line',
  },
  {
    src: FOCALLURE_PRODUCT3,
    alt: 'Focallure Cosmetics Display',
    caption: 'Cosmetics Display at Thimphu Store',
  },
  {
    src: FOCALLURE_PRODUCT4,
    alt: 'Focallure Beauty Event',
    caption: 'Beauty Demonstration Event',
  },
];

const storeLocations = [
  {
    city: 'Thimphu',
    address: 'Norzin Lam, Premium Shopping District',
    hours: '10:00 AM - 7:00 PM',
    phone: '+975 17454705',
  },
  {
    city: 'Paro',
    address: 'Main Market Area, Near Clock Tower',
    hours: '10:00 AM - 7:00 PM',
    phone: '+975 77889234',
  },
  {
    city: 'Phuentsholing',
    address: 'Central Business District',
    hours: '10:00 AM - 7:00 PM',
    phone: '+975 17665432',
  },
];

const productCategories = [
  {
    name: 'Makeup',
    description: 'Professional-grade makeup products including foundations, concealers, eyeshadows, lipsticks, and more.',
    image: FOCALLURE_MAKEUP,
  },
  {
    name: 'Skincare',
    description: 'Advanced skincare solutions featuring cleansers, moisturizers, serums, and masks for all skin types.',
    image: FOCALLURE_SKINCARE,
  },
  {
    name: 'Beauty Tools',
    description: 'High-quality beauty applicators, brushes, and accessories to achieve professional makeup results.',
    image: FOCALLURE_BEAUTY_TOOLS,
  },
];

export default function FocallurePage() {
  return (
    <>
      <PageTitle 
        title="Focallure Beauty" 
        subtitle="Premium Beauty Products in Bhutan"
        backgroundImage={FOCALLURE_HERO}
        alignment="right"
        textColor="white"
      />
      
      {/* Brand Introduction */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">About Focallure Beauty</h2>
            <p className="text-lg text-gray-700 mb-6">
              Focallure Beauty represents our dedication to bringing premium international beauty products to the Bhutanese market. Since 2018, we have operated exclusive beauty stores in Thimphu, Paro, and Phuentsholing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our stores feature a carefully curated selection of imported cosmetics and skincare products that meet international quality standards while addressing the unique beauty needs of our local customers.
            </p>
            <p className="text-lg text-gray-700">
              With trained beauty consultants available in-store, we offer personalized advice and product recommendations to help our customers find the perfect beauty solutions.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={FOCALLURE_INTRO_IMAGE}
                alt="Focallure Beauty Store"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Store Gallery */}
      <Section backgroundColor="light" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Our Stores & Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience beauty excellence at our Focallure locations
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
      
      {/* Product Categories */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium beauty collections
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A365D] mb-3">{category.name}</h3>
                <p className="text-gray-700">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Store Locations */}
      <Section backgroundColor="dark" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Our Beauty Stores</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our premium beauty products in person
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {storeLocations.map((store, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#1A365D] mb-2">{store.city}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-6"></div>
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Address:</span> {store.address}
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Hours:</span> {store.hours}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> {store.phone}
              </p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Beauty Services */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">In-Store Beauty Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your shopping experience with our personalized services
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Beauty Consultations</h3>
            <p className="text-gray-700">
              One-on-one sessions with our beauty experts to find products tailored to your needs.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Makeup Demonstrations</h3>
            <p className="text-gray-700">
              Learn application techniques and tips from our skilled makeup artists.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Skincare Analysis</h3>
            <p className="text-gray-700">
              Professional analysis of your skin type and personalized skincare recommendations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Special Events</h3>
            <p className="text-gray-700">
              Regular beauty workshops and product launch events for our customers.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
} 