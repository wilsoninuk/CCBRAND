"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type BrandCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  index?: number;
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2';
};

export default function BrandCard({ 
  title, 
  description, 
  imageSrc, 
  href,
  index = 0,
  aspectRatio = '3:2'
}: BrandCardProps) {
  
  // Aspect ratio styles
  const getAspectRatioStyle = () => {
    switch(aspectRatio) {
      case '1:1': return { paddingTop: '100%' };
      case '16:9': return { paddingTop: '56.25%' };
      case '4:3': return { paddingTop: '75%' };
      case '3:2': return { paddingTop: '66.67%' };
      default: return { paddingTop: '66.67%' };
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
    >
      {/* Background Image */}
      <div className="relative w-full" style={getAspectRatioStyle()}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 text-white">
        <div className="transform transition-transform duration-500 translate-y-0 group-hover:translate-y-[-8px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-100/80 mb-4 line-clamp-2 max-w-md">
            {description}
          </p>
          
          <Link 
            href={href}
            className="inline-flex items-center text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors duration-300"
          >
            <span>Explore</span>
            <span className="ml-1 h-[1px] w-0 bg-[#D4AF37] group-hover:w-10 transition-all duration-300 inline-block"></span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 