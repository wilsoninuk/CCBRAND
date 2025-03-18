"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: 'white' | 'light' | 'dark' | 'primary' | 'gradient' | 'transparent';
  fullHeight?: boolean;
  withContainer?: boolean;
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  withAccent?: boolean;
  accentPosition?: 'top' | 'bottom' | 'left' | 'right';
  animateOnScroll?: boolean;
  withPattern?: boolean;
};

export default function Section({
  children,
  className = '',
  id,
  backgroundColor = 'white',
  fullHeight = false,
  withContainer = true,
  paddingY = 'lg',
  withAccent = false,
  accentPosition = 'left',
  animateOnScroll = true,
  withPattern = false,
}: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Background color classes
  const bgColorClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-[#1A365D] text-white',
    primary: 'bg-[#D4AF37] text-white',
    gradient: 'bg-gradient-to-br from-[#1A365D] to-[#2C5282] text-white',
    transparent: 'bg-transparent',
  };

  // Padding classes
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-6',
    md: 'py-10',
    lg: 'py-14 md:py-20',
    xl: 'py-18 md:py-28',
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  // Accent elements based on position
  const renderAccent = () => {
    if (!withAccent) return null;
    
    const accentClasses = {
      top: 'h-0.5 w-16 bg-[#D4AF37] mx-auto -mt-0.5',
      bottom: 'h-0.5 w-16 bg-[#D4AF37] mx-auto -mb-0.5',
      left: 'w-0.5 h-16 bg-[#D4AF37] absolute left-0 top-1/2 -translate-y-1/2',
      right: 'w-0.5 h-16 bg-[#D4AF37] absolute right-0 top-1/2 -translate-y-1/2',
    };
    
    return <div className={accentClasses[accentPosition]} />;
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`
        ${bgColorClasses[backgroundColor]}
        ${paddingClasses[paddingY]}
        ${fullHeight ? 'min-h-screen flex flex-col justify-center' : ''}
        ${className}
        relative overflow-hidden
      `}
      initial={animateOnScroll ? "hidden" : "visible"}
      animate={inView || !animateOnScroll ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {renderAccent()}
      
      {/* Background elements for gradient section */}
      {backgroundColor === 'gradient' && (
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        </div>
      )}
      
      {/* Background pattern */}
      {withPattern && (
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} 
        />
      )}
      
      {withContainer ? (
        <div className="container mx-auto px-4 relative z-10">{children}</div>
      ) : (
        <div className="relative z-10">{children}</div>
      )}
    </motion.section>
  );
} 