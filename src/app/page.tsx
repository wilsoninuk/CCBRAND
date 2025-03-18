"use client";

import * as React from 'react';
import { useState } from 'react';

// 创建双语内容
const content = {
  en: {
    hero: {
      title: "CC BHUTAN",
      subtitle: "25 Years of Excellence in Retail & Distribution Across Bhutan"
    },
    brands: {
      title: "Our Brands",
      description: "Discover our diverse portfolio of retail businesses and brands across Bhutan",
      items: [
        {
          title: "Miniso",
          description: "7 stores across Bhutan offering quality lifestyle products"
        },
        {
          title: "Focallure Beauty",
          description: "2 premium beauty stores with imported cosmetics"
        },
        {
          title: "Supermarkets",
          description: "3 supermarkets catering to diverse consumer needs"
        },
        {
          title: "Creamnest",
          description: "Exclusive distributor of premium milk tea powder"
        }
      ]
    },
    about: {
      title: "Our Entrepreneurial Journey",
      paragraph1: "25 years ago, Kencho Wangdi and Tshering embarked on their entrepreneurial journey with their first store in Bhutan, importing daily necessities and beauty products from Thailand.",
      paragraph2: "What began as a modest venture has grown into a robust retail and distribution network spanning the country. Today, our family-owned businesses reflect our dedication to quality, innovation, and market expansion.",
      cta: "Read Our Story"
    },
    stats: {
      title: "Our Success in Numbers",
      items: [
        { value: "25+", label: "Years of Experience" },
        { value: "12", label: "Retail Locations" },
        { value: "100+", label: "Employees" },
        { value: "$10M+", label: "Annual Turnover" }
      ]
    },
    cta: {
      title: "Join Our Growing Team",
      description: "Be part of Bhutan's leading retail and distribution company. Explore career opportunities with CC BHUTAN.",
      button: "View Opportunities"
    }
  },
  dz: {
    hero: {
      title: "སི་སི་འབྲུག་ཡུལ།",
      subtitle: "འབྲུག་ཡུལ་ནང་བཙོང་ཁང་དང་བགོ་འགྲེམས་ནང་ལུ་ལོ་ངོ་ ༢༥ རིང་གི་རྒྱལ་ཁབ།"
    },
    brands: {
      title: "ང་བཅས་ཀྱི་ཚོང་རྟགས་ཚུ།",
      description: "འབྲུག་ཡུལ་ནང་ང་བཅས་ཀྱི་ཚོང་ལས་དང་ཚོང་རྟགས་མ་འདྲཝ་ཚུ་ཤེས་དགོ།",
      items: [
        {
          title: "མི་ནི་སོ།",
          description: "འབྲུག་ཡུལ་ནང་གི་ཚོང་ཁང་ ༧ ནང་ལུ་སྤུས་ཚད་ལྡན་པའི་མི་ཚེའི་ཐོན་སྐྱེད་ཚུ་བཙོང་དོ་ཡོད།"
        },
        {
          title: "ཕོ་ཀལ་ལུར་མཛེས་ཆས།",
          description: "ཕྱི་ལས་ནང་འདྲེན་འབད་བའི་མཛེས་ཆས་དང་བཅསཔ་སྦེ་གོང་ཚད་མཐོ་བའི་མཛེས་ཆས་ཚོང་ཁང་ ༢"
        },
        {
          title: "ཚོང་ཁང་ཆེན་མོ།",
          description: "ཉོ་མི་སྣ་ཚོགས་ཀྱི་དགོས་མཁོ་བསྐང་ནིའི་དོན་ལུ་ཚོང་ཁང་ཆེན་མོ་ ༣"
        },
        {
          title: "ཀི་རིམ་ནེསཊི།",
          description: "མཐོ་རིམ་འོ་མའི་ཇ་ཕྱེ་གི་ཁེ་གཙང་བགོ་འགྲེམས་པ།"
        }
      ]
    },
    about: {
      title: "ང་བཅས་ཀྱི་ཚོང་ལས་ཀྱི་ལམ་ཡིག",
      paragraph1: "ལོ་ངོ་ ༢༥ གྱི་ཧེ་མ་ཀེན་ཆོ་དབང་འདུས་དང་ཚེ་རིང་གིས་ཐཱའི་ལེནཌི་ལས་ཉིནམ་རེ་གི་དགོས་མཁོ་དང་མཛེས་ཆས་ཚུ་ནང་འདྲེན་འབད་དེ་ འབྲུག་ཡུལ་ནང་ཁོང་རའི་ཚོང་ཁང་དང་པ་དང་བཅསཔ་སྦེ་ཚོང་ལས་ཀྱི་འགྲུལ་ལམ་འགོ་བཙུགས་ནུག",
      paragraph2: "ག་ཅི་འབད་རུང་ཚད་ལས་མེད་པའི་ལས་འགུལ་ཅིག་གིས་འགོ་བཙུགས་ཡོད་མི་དེ་ ད་ལྟོ་རྒྱལ་ཁབ་ཀྱི་ས་ཁྱབ་ཡོད་པའི་ཚོང་འབྲེལ་དང་བགོ་འགྲེམས་ཡོངས་འབྲེལ་སྦོམ་ཅིག་ལུ་འགྱུར་སོང་ནུག དེ་རིང་ ང་བཅས་ཀྱི་བཟའ་ཚང་གིས་བདག་དབང་འབད་ཡོད་པའི་ཚོང་ལས་ཚུ་གིས་སྤུས་ཚད་ གསར་གཏོད་ དང་ཁྲོམ་ཁར་རྒྱ་སྐྱེད་གཏང་ནི་ལུ་ང་བཅས་ཀྱི་གཅིག་སྒྲིལ་སྟོནམ་ཨིན།",
      cta: "ང་བཅས་ཀྱི་ལོ་རྒྱུས་ལྷག།"
    },
    stats: {
      title: "ཨང་གྲངས་ནང་ང་བཅས་ཀྱི་གྲུབ་འབྲས།",
      items: [
        { value: "༢༥+", label: "ཉམས་མྱོང་གི་ལོ་གྲངས།" },
        { value: "༡༢", label: "ཚོང་ཁང་གི་ས་གནས།" },
        { value: "༡༠༠+", label: "ལས་གཡོག་པ།" },
        { value: "$༡༠M+", label: "ལོ་བསྟར་སྒོར་བཞུ།" }
      ]
    },
    cta: {
      title: "ང་བཅས་ཀྱི་སྐྱེདཔ་སྦེ་ཡོད་པའི་ཚོགས་པ་དང་མཉམ་འབྲེལ་འབད།",
      description: "འབྲུག་ཡུལ་གྱི་མདུན་ཕྱོགས་ལུ་ཡོད་པའི་བཙོང་ཁང་དང་བགོ་འགྲེམས་ཀཱམ་པ་ནི་གྱི་ཆ་ཤས་ཅིག་འབད། སི་སི་འབྲུག་ཡུལ་དང་མཉམ་འབྲེལ་ཐོག་ལས་ཁྱད་རིག་གི་གོ་སྐབས་ཚུ་འཚོལ།",
      button: "གོ་སྐབས་ཚུ་བལྟ།"
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'dz'>('en');
  const t = content[language];

  return (
    <>
      {/* Language Selector */}
      <div className="fixed top-2 right-4 z-50 bg-white rounded-full shadow-md p-1">
        <button 
          onClick={() => setLanguage('en')} 
          className={`px-3 py-1 rounded-full ${language === 'en' ? 'bg-[#D4AF37] text-white' : 'text-gray-700'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLanguage('dz')} 
          className={`px-3 py-1 rounded-full ${language === 'dz' ? 'bg-[#D4AF37] text-white' : 'text-gray-700'}`}
        >
          དབྱིན
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* 背景图片 */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: "url('/images/bhutan-hero.jpg')"}}
        ></div>
        
        {/* 渐变叠加层以提高文字可读性 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D]/80 to-[#2A4E84]/70 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-100">
            {t.hero.subtitle}
          </p>
          <div>
            <a 
              href="/about"
              className="inline-block bg-[#D4AF37] hover:bg-[#C09A28] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {language === 'en' ? 'Our Story' : 'ང་བཅས་ཀྱི་ལོ་རྒྱུས།'}
            </a>
            <a 
              href="/brands/miniso"
              className="inline-block ml-4 bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              {language === 'en' ? 'Our Brands' : 'ང་བཅས་ཀྱི་ཚོང་རྟགས་ཚུ།'}
            </a>
          </div>
        </div>
      </section>
      
      {/* Our Brands Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">{t.brands.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.brands.description}
            </p>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.brands.items.map((brand, index) => {
              // 根据品牌名称确定图片路径
              const brandImageMap: { [key: string]: string } = {
                "Miniso": "/images/brands/miniso.jpg",
                "Focallure Beauty": "/images/brands/focallure.jpg",
                "Supermarkets": "/images/brands/supermarket.jpg",
                "Creamnest": "/images/brands/creamnest.jpg",
                "མི་ནི་སོ།": "/images/brands/miniso.jpg",
                "ཕོ་ཀལ་ལུར་མཛེས་ཆས།": "/images/brands/focallure.jpg",
                "ཚོང་ཁང་ཆེན་མོ།": "/images/brands/supermarket.jpg",
                "ཀི་རིམ་ནེསཊི།": "/images/brands/creamnest.jpg"
              };
              
              const imagePath = brandImageMap[brand.title] || "/images/brands/placeholder.jpg";
              
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-64"
                  style={{
                    backgroundImage: `url('${imagePath}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{brand.title}</h3>
                    <p className="text-sm text-gray-300 mb-4 opacity-90">{brand.description}</p>
                    <a 
                      href={`/brands/${brand.title.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="inline-flex items-center text-sm text-white hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      <span>{language === 'en' ? 'Explore' : 'བལྟ་ནི།'}</span>
                      <span className="ml-1 h-[1px] w-5 bg-[#D4AF37] inline-block"></span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* About Us Preview */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              className="h-[400px] rounded-lg overflow-hidden shadow-lg relative"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{backgroundImage: "url('/images/founders.jpg')"}}
              ></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1A365D] mb-6">{t.about.title}</h2>
              <p className="text-lg text-gray-700 mb-6">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-gray-700 mb-8">
                {t.about.paragraph2}
              </p>
              <a 
                href="/about"
                className="inline-block bg-[#1A365D] hover:bg-[#2A4E84] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
              >
                {t.about.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-[#1A365D] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.stats.title}</h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-[#D4AF37] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <a 
            href="/join-us"
            className="inline-block bg-white text-[#1A365D] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg"
          >
            {t.cta.button}
          </a>
        </div>
      </section>
    </>
  );
} 