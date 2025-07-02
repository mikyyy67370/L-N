'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import TranslatableText from '@/components/TranslatableText';

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  service: string;
  altBefore: string;
  altAfter: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
}

export default function BeforeAfterGallery({ images }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setShowBefore(true); // Reset to "before" when changing slide
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setShowBefore(true); // Reset to "before" when changing slide
  };

  const currentImage = images[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Image Display */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
        
        {/* Image Container */}
        <div className="relative aspect-video bg-gray-100">
          <Image
            src={showBefore ? currentImage.before : currentImage.after}
            alt={showBefore ? currentImage.altBefore : currentImage.altAfter}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
          
          {/* Before/After Label */}
          <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 rounded-full font-semibold">
            <TranslatableText text={showBefore ? "Vorher" : "Nachher"} />
          </div>
          
          {/* View Toggle Button */}
          <button
            onClick={() => setShowBefore(!showBefore)}
            className="absolute top-4 right-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown px-6 py-2 rounded-full font-bold transition-all duration-300 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            <TranslatableText text={showBefore ? "Nachher zeigen" : "Vorher zeigen"} />
          </button>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark-brown p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-dark-brown p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Image Info */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-2">
            <TranslatableText text={currentImage.title} />
          </h3>
          <p className="text-brand-gold font-semibold font-lato">
            <TranslatableText text={currentImage.service} />
          </p>
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setShowBefore(true);
            }}
            className={`flex-shrink-0 relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              index === currentIndex
                ? 'border-brand-gold shadow-lg'
                : 'border-gray-300 hover:border-brand-gold/50'
            }`}
          >
            <Image
              src={image.before}
              alt={image.altBefore}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
      
      {/* Counter */}
      <div className="text-center mt-4 text-brand-dark-brown/70 font-lato">
        <TranslatableText text={`${currentIndex + 1} von ${images.length} Bildern`} />
      </div>
    </div>
  );
} 