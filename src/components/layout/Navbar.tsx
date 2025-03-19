"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/brands/miniso', label: 'Miniso' },
  { href: '/brands/focallure', label: 'Focallure' },
  { href: '/brands/supermarket', label: 'Supermarkets' },
  { href: '/brands/creamnest', label: 'Creamnest' },
  { href: '/join-us', label: 'Join Us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' 
          : 'bg-white py-6 shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="relative z-[101] group">
          <div className="flex items-center">
            <h1 className="font-bold text-2xl md:text-4xl text-[#1A365D] transition-all duration-300 tracking-wide">
              CC BHUTAN
            </h1>
            <motion.div 
              className="h-[3px] bg-[#D4AF37] w-0 group-hover:w-12 ml-3 transition-all duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 relative z-[101]">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`${
                pathname === link.href 
                  ? 'font-semibold text-[#D4AF37]'
                  : 'font-medium text-[#1A365D] hover:text-[#D4AF37]'
              } transition-colors duration-300 relative py-2 text-lg tracking-wide`}
            >
              <span>{link.label}</span>
              {pathname === link.href && (
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] w-full"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                />
              )}
            </Link>
          ))}

          {/* Contact button for desktop */}
          <Link 
            href="/contact" 
            className="ml-2 px-6 py-3 rounded-md transition-all duration-300 text-lg bg-[#1A365D] text-white hover:bg-[#2C5282] border border-[#1A365D]/50"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-[101] p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-8 flex flex-col items-end">
            <span className={`block h-0.5 mb-2 transition-all duration-300 bg-[#1A365D] ${isMenuOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8'}`}></span>
            <span className={`block h-0.5 mb-2 transition-all duration-300 bg-[#1A365D] ${isMenuOpen ? 'w-0 opacity-0' : 'w-6'}`}></span>
            <span className={`block h-0.5 transition-all duration-300 bg-[#1A365D] ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-7'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[99] flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl text-[#1A365D] relative ${
                      pathname === link.href 
                        ? 'font-bold text-[#D4AF37]'
                        : 'font-medium'
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#D4AF37] w-10" />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Contact button for mobile menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
                className="mt-6"
              >
                <Link 
                  href="/contact" 
                  className="px-10 py-3 rounded-md bg-[#1A365D] text-xl text-white hover:bg-[#2C5282] transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 