"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Metadata } from 'next';

const brandLinks = [
  { href: '/brands/miniso', label: 'Miniso', count: '7 Stores' },
  { href: '/brands/focallure', label: 'Focallure', count: '3 Stores' },
  { href: '/brands/creamnest', label: 'Creamnest', count: 'Distribution' },
];

export default function BrandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Brand Navigation - Desktop */}
      <div className="hidden md:block bg-[#1A365D] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {brandLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-4 px-6 text-center transition-colors duration-300 ${
                  pathname === link.href
                    ? 'bg-[#D4AF37] text-white font-bold'
                    : 'hover:bg-white/10'
                }`}
              >
                <span className="block font-medium">{link.label}</span>
                <span className="text-sm opacity-80">{link.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Navigation - Mobile */}
      <div className="md:hidden bg-[#1A365D] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center"
            >
              <span className="mr-2">Our Brands</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="text-sm font-medium">
              {brandLinks.find((link) => link.href === pathname)?.label || 'Select Brand'}
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="mt-2 border-t border-white/20 py-2">
              {brandLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-2 px-3 ${
                    pathname === link.href
                      ? 'bg-[#D4AF37] text-white font-bold'
                      : 'hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">{link.label}</span>
                  <span className="text-sm opacity-80 ml-2">({link.count})</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Brand Content */}
      <div>{children}</div>
    </div>
  );
} 