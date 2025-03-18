import * as React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CC BHUTAN - Leading Retail & Distribution Company in Bhutan",
  description: "CC BHUTAN is a leading retail and distribution company in Bhutan with 25 years of excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 