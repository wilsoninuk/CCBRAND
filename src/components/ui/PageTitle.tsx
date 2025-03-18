"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  alignment?: 'left' | 'center' | 'right';
  textColor?: 'white' | 'dark';
  size?: 'default' | 'large' | 'small';
};

export default function PageTitle({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  alignment = 'center',
  textColor = 'white',
  size = 'default',
}: PageTitleProps) {
  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Text color classes
  const textColorClasses = {
    white: 'text-white',
    dark: 'text-[#1A365D]',
  };
  
  // Title size classes
  const titleSizeClasses = {
    small: 'text-3xl md:text-4xl lg:text-5xl',
    default: 'text-4xl md:text-5xl lg:text-6xl',
    large: 'text-5xl md:text-6xl lg:text-7xl',
  };
  
  // Subtitle size classes
  const subtitleSizeClasses = {
    small: 'text-lg md:text-xl',
    default: 'text-xl md:text-2xl',
    large: 'text-2xl md:text-3xl',
  };

  return (
    <div 
      className={`relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 py-24 overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay with improved gradient */}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-0"></div>
      )}

      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A365D] to-[#2C5282] z-0"></div>
      )}

      {/* Content with enhanced animations */}
      <div className={`relative z-10 container mx-auto ${alignmentClasses[alignment]}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Decorative element */}
          <motion.div 
            className="absolute -left-4 -top-4 w-10 h-10 border-l-3 border-t-3 border-[#D4AF37] opacity-70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.h1
            className={`${titleSizeClasses[size]} font-bold mb-5 ${textColorClasses[textColor]} tracking-tight leading-tight`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p
              className={`${subtitleSizeClasses[size]} max-w-3xl ${
                alignment === 'center' ? 'mx-auto' : ''
              } ${textColorClasses[textColor]} opacity-90 leading-relaxed`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Refined golden accent line */}
          <motion.div 
            className={`h-0.5 bg-[#D4AF37] w-20 mt-6 ${
              alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''
            }`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          />
          
          {/* Decorative element */}
          <motion.div 
            className="absolute -right-4 -bottom-4 w-10 h-10 border-r-3 border-b-3 border-[#D4AF37] opacity-70"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
} 