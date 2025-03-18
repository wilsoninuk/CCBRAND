import { Metadata } from 'next';
import Image from 'next/image';
import PageTitle from '@/components/ui/PageTitle';
import Section from '@/components/ui/Section';
import ImageGallery from '@/components/ui/ImageGallery';

// Placeholder images - replace with actual images later
const SUPERMARKET_HERO = '/images/placeholder-supermarket-hero.jpg';
const SUPERMARKET1 = '/images/placeholder-supermarket1.jpg';
const SUPERMARKET2 = '/images/placeholder-supermarket2.jpg';
const SUPERMARKET3 = '/images/placeholder-supermarket3.jpg';
const SUPERMARKET_INTERIOR1 = '/images/placeholder-supermarket-interior1.jpg';
const SUPERMARKET_INTERIOR2 = '/images/placeholder-supermarket-interior2.jpg';
const SUPERMARKET_PRODUCTS = '/images/placeholder-supermarket-products.jpg';

export const metadata: Metadata = {
  title: 'Supermarkets | CC BHUTAN',
  description: 'Explore our 3 modern supermarkets across Bhutan offering a wide range of local and imported products for all your shopping needs.',
};

const supermarketImages = [
  {
    src: SUPERMARKET1,
    alt: 'Thimphu Supermarket',
    caption: 'CC Supermarket - Thimphu',
  },
  {
    src: SUPERMARKET2,
    alt: 'Gelephu Supermarket',
    caption: 'CC Supermarket - Gelephu',
  },
  {
    src: SUPERMARKET3,
    alt: 'Wangduephodrang Supermarket',
    caption: 'CC Supermarket - Wangduephodrang',
  },
  {
    src: SUPERMARKET_INTERIOR1,
    alt: 'Supermarket Interior',
    caption: 'Modern Shopping Experience',
  },
  {
    src: SUPERMARKET_INTERIOR2,
    alt: 'Supermarket Interior',
    caption: 'Wide Selection of Products',
  },
  {
    src: SUPERMARKET_PRODUCTS,
    alt: 'Supermarket Products',
    caption: 'Quality Local and Imported Items',
  },
];

const supermarketLocations = [
  {
    city: 'Thimphu',
    address: 'Norzin Lam, Central Business District',
    hours: '8:00 AM - 9:00 PM (Monday-Sunday)',
    phone: '+975 1234 5685',
    features: ['Fresh Produce Section', 'Imported Goods', 'Household Items', 'Bakery', 'Personal Care Products'],
  },
  {
    city: 'Gelephu',
    address: 'Main Market Road',
    hours: '8:00 AM - 8:00 PM (Monday-Sunday)',
    phone: '+975 1234 5686',
    features: ['Grocery Section', 'Daily Essentials', 'Home Products', 'Beverages', 'Snacks and Confectionery'],
  },
  {
    city: 'Wangduephodrang',
    address: 'New Town Area',
    hours: '8:00 AM - 8:00 PM (Monday-Sunday)',
    phone: '+975 1234 5687',
    features: ['General Merchandise', 'Fresh Foods', 'Local Products', 'Toiletries', 'Packaged Foods'],
  },
];

const productCategories = [
  {
    name: 'Fresh Produce',
    description: 'Quality vegetables, fruits, and organic options sourced locally and imported.',
  },
  {
    name: 'Bakery',
    description: 'Freshly baked breads, pastries, and cakes made daily in our in-house bakeries.',
  },
  {
    name: 'Groceries',
    description: 'Essential pantry items, including a wide range of local and international brands.',
  },
  {
    name: 'Beverages',
    description: 'Comprehensive selection of drinks, from local favorites to imported specialties.',
  },
  {
    name: 'Household',
    description: 'Cleaning supplies, kitchenware, and home essentials for every need.',
  },
  {
    name: 'Personal Care',
    description: 'Health and beauty products, toiletries, and personal hygiene items.',
  },
];

export default function SupermarketPage() {
  return (
    <>
      <PageTitle 
        title="CC Supermarkets" 
        subtitle="3 Modern Shopping Destinations Across Bhutan"
        backgroundImage={SUPERMARKET_HERO}
      />
      
      {/* Brand Introduction */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-6">Our Supermarket Business</h2>
            <p className="text-lg text-gray-700 mb-6">
              Since our first supermarket opening in 2005, CC BHUTAN has been committed to providing Bhutanese consumers with modern, convenient shopping experiences and access to quality products.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our three supermarkets in Thimphu, Gelephu, and Wangduephodrang offer a comprehensive range of goods, from fresh local produce to imported specialty items, household essentials, and personal care products.
            </p>
            <p className="text-lg text-gray-700">
              Each of our supermarkets is designed with customer comfort in mind, featuring spacious layouts, clear product organization, and friendly, knowledgeable staff ready to assist with your shopping needs.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={SUPERMARKET1}
              alt="CC Supermarket"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Supermarket Gallery */}
      <Section backgroundColor="light" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Our Supermarket Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern shopping environments with extensive product selections
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <ImageGallery 
          images={supermarketImages}
          columns={3}
          gap="lg"
          rounded="md"
        />
      </Section>
      
      {/* Supermarket Locations */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Store Details</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your nearest CC Supermarket
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {supermarketLocations.map((location, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#1A365D] mb-2">{location.city}</h3>
              <div className="h-1 w-12 bg-[#D4AF37] mb-6"></div>
              
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Address:</span> {location.address}
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Hours:</span> {location.hours}
              </p>
              <p className="text-gray-700 mb-6">
                <span className="font-medium">Phone:</span> {location.phone}
              </p>
              
              <h4 className="text-lg font-semibold text-[#1A365D] mb-3">Key Features:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {location.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Product Categories */}
      <Section backgroundColor="dark" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Offer</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our wide range of product categories
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">{category.name}</h3>
              <p className="text-gray-700">{category.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Customer Benefits */}
      <Section backgroundColor="white" paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">The CC Supermarket Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why our customers choose us for their shopping needs
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Quality Products</h3>
            <p className="text-gray-700">
              We carefully select products that meet our high standards for quality and value.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Convenient Shopping</h3>
            <p className="text-gray-700">
              Thoughtfully designed stores make finding what you need quick and easy.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Diverse Selection</h3>
            <p className="text-gray-700">
              We offer a wide range of products to meet the diverse needs of our customers.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1A365D] mb-3">Friendly Service</h3>
            <p className="text-gray-700">
              Our knowledgeable staff are always ready to help you find what you need.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
} 