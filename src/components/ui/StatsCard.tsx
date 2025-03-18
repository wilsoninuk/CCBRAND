"use client";

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type StatsCardProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  delay?: number;
  icon?: React.ReactNode;
  theme?: 'light' | 'dark' | 'accent';
};

export default function StatsCard({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
  delay = 0.2,
  icon,
  theme = 'light'
}: StatsCardProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const countRef = useRef<NodeJS.Timeout | null>(null);
  const hasAnimated = useRef(false);

  // Theme styles
  const themeStyles = {
    light: {
      background: 'bg-white',
      text: 'text-[#1A365D]',
      subtext: 'text-gray-600',
      hover: 'hover:shadow-lg',
      border: 'border-gray-100',
    },
    dark: {
      background: 'bg-[#1A365D]',
      text: 'text-white',
      subtext: 'text-gray-200',
      hover: 'hover:shadow-lg',
      border: 'border-[#2C5282]',
    },
    accent: {
      background: 'bg-gradient-to-br from-[#D4AF37]/90 to-[#B38728]',
      text: 'text-white',
      subtext: 'text-white/90',
      hover: 'hover:shadow-lg',
      border: 'border-[#D4AF37]',
    },
  };

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const steps = 30;
      const stepDuration = (duration * 1000) / steps;
      const increment = value / steps;
      
      let currentStep = 0;
      
      if (countRef.current) {
        clearInterval(countRef.current);
      }
      
      countRef.current = setInterval(() => {
        currentStep += 1;
        
        if (currentStep >= steps) {
          setCount(value);
          if (countRef.current) clearInterval(countRef.current);
        } else {
          setCount(Math.floor(increment * currentStep));
        }
      }, stepDuration);
      
      return () => {
        if (countRef.current) clearInterval(countRef.current);
      };
    }
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className={`relative p-8 rounded-lg border ${themeStyles[theme].background} ${themeStyles[theme].border} shadow-sm ${themeStyles[theme].hover} transition-all duration-300 overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`w-24 h-4 ${theme === 'light' ? 'bg-[#D4AF37]/10' : 'bg-white/10'} rotate-45 translate-x-8 -translate-y-10`}></div>
      </div>
      
      <div className="flex flex-col items-center text-center z-10 relative">
        {icon && (
          <div className="mb-4 text-[#D4AF37]">
            {icon}
          </div>
        )}
        
        <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${themeStyles[theme].text} mb-3`}>
          {prefix}{count}{suffix}
        </div>
        
        <div className={`font-medium ${themeStyles[theme].subtext} tracking-wide`}>
          {label}
        </div>
      </div>
    </motion.div>
  );
} 