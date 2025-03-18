"use client";

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGalleryProps = {
  images: ImageItem[];
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  showCaption?: boolean;
  className?: string;
  aspectRatio?: 'square' | '16:9' | '4:3' | '3:4'; 
};

export default function ImageGallery({
  images,
  columns = 3,
  gap = 'md',
  rounded = 'md',
  showCaption = true,
  className = '',
  aspectRatio = 'square',
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Grid columns classes
  const columnsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  // Gap classes
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  };

  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
  };

  // Aspect ratio styles
  const aspectRatioStyles = {
    'square': { aspectRatio: '1/1' },
    '16:9': { aspectRatio: '16/9' },
    '4:3': { aspectRatio: '4/3' },
    '3:4': { aspectRatio: '3/4' },
  };

  const openLightbox = (image: ImageItem) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className={`grid ${columnsClasses[columns]} ${gapClasses[gap]} ${className}`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="overflow-hidden group"
          >
            <div
              className={`relative overflow-hidden ${roundedClasses[rounded]} cursor-pointer transition-all duration-500 hover:shadow-xl`}
              onClick={() => openLightbox(image)}
              style={aspectRatioStyles[aspectRatio]}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                {showCaption && image.caption && (
                  <p className="text-white text-sm md:text-base font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.caption}</p>
                )}
              </div>
            </div>
            
            {showCaption && image.caption && (
              <p className="mt-2 text-sm text-gray-500 md:hidden">{image.caption}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              
              {selectedImage.caption && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md p-4 text-center absolute bottom-0 w-full"
                >
                  <p className="text-white">{selectedImage.caption}</p>
                </motion.div>
              )}
              
              <button
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/20 hover:bg-black/50 transition-colors duration-300"
                onClick={closeLightbox}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 