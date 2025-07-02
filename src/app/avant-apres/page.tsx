'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Camera, Eye, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import TranslatableText from '@/components/TranslatableText';
import BeforeAfterShowcase from '@/components/BeforeAfterShowcase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import AnimatedBeforeAfterSlider from '@/components/AnimatedBeforeAfterSlider';

export default function AvantApresPage() {
  const beforeAfterImages = [
    // Endreinigung
    {
      before: "/images/before-after/endreinigung-before-1.jpg",
      after: "/images/before-after/endreinigung-after-1.jpg",
      title: "Küche Endreinigung",
      service: "Endreinigung",
      altBefore: "Küche vor professioneller Endreinigung",
      altAfter: "Küche nach professioneller Endreinigung"
    },
    {
      before: "/images/before-after/endreinigung-before-2.jpg",
      after: "/images/before-after/endreinigung-after-2.jpg",
      title: "Badezimmer Endreinigung",
      service: "Endreinigung",
      altBefore: "Badezimmer vor professioneller Endreinigung",
      altAfter: "Badezimmer nach professioneller Endreinigung"
    },
    
    // Privatreinigung
    {
      before: "/images/before-after/privatreinigung-before-1.jpg",
      after: "/images/before-after/privatreinigung-after-1.jpg",
      title: "Wohnzimmer Privatreinigung",
      service: "Privatreinigung",
      altBefore: "Wohnzimmer vor Privatreinigung",
      altAfter: "Wohnzimmer nach professioneller Privatreinigung"
    },
    {
      before: "/images/before-after/privatreinigung-before-2.jpg",
      after: "/images/before-after/privatreinigung-after-2.jpg",
      title: "Küche Privatreinigung",
      service: "Privatreinigung",
      altBefore: "Küche vor Privatreinigung",
      altAfter: "Küche nach professioneller Privatreinigung"
    },
    
    // Büroreinigung
    {
      before: "/images/before-after/bueroreinigung-before-1.jpg",
      after: "/images/before-after/bueroreinigung-after-1.jpg",
      title: "Büro Arbeitsplatz",
      service: "Büroreinigung",
      altBefore: "Büro vor professioneller Reinigung",
      altAfter: "Büro nach professioneller Büroreinigung"
    },
    {
      before: "/images/before-after/bueroreinigung-before-2.jpg",
      after: "/images/before-after/bueroreinigung-after-2.jpg",
      title: "Konferenzraum",
      service: "Büroreinigung",
      altBefore: "Konferenzraum vor Büroreinigung",
      altAfter: "Konferenzraum nach professioneller Büroreinigung"
    },
    
    // Sofareinigung
    {
      before: "/images/before-after/sofareinigung-before-1.jpg",
      after: "/images/before-after/sofareinigung-after-1.jpg",
      title: "Sofa Polsterreinigung",
      service: "Polsterreinigung",
      altBefore: "Sofa vor professioneller Polsterreinigung",
      altAfter: "Sofa nach professioneller Polsterreinigung"
    },
    {
      before: "/images/before-after/sofareinigung-before-2.jpg",
      after: "/images/before-after/sofareinigung-after-2.jpg",
      title: "Sessel Polsterreinigung",
      service: "Polsterreinigung",
      altBefore: "Sessel vor Polsterreinigung",
      altAfter: "Sessel nach professioneller Polsterreinigung"
    },
    
    // Teppichreinigung
    {
      before: "/images/before-after/teppichreinigung-before-1.jpg",
      after: "/images/before-after/teppichreinigung-after-1.jpg",
      title: "Teppich Tiefenreinigung",
      service: "Teppichreinigung",
      altBefore: "Teppich vor professioneller Reinigung",
      altAfter: "Teppich nach professioneller Teppichreinigung"
    },
    {
      before: "/images/before-after/teppichreinigung-before-2.jpg",
      after: "/images/before-after/teppichreinigung-after-2.jpg",
      title: "Perserteppich Reinigung",
      service: "Teppichreinigung",
      altBefore: "Perserteppich vor Reinigung",
      altAfter: "Perserteppich nach professioneller Reinigung"
    },
    
    // Möbelreinigung
    {
      before: "/images/before-after/moebelreinigung-before-1.jpg",
      after: "/images/before-after/moebelreinigung-after-1.jpg",
      title: "Möbel Aufbereitung",
      service: "Möbelreinigung",
      altBefore: "Möbel vor professioneller Reinigung",
      altAfter: "Möbel nach professioneller Möbelreinigung"
    },
    {
      before: "/images/before-after/moebelreinigung-before-2.jpg",
      after: "/images/before-after/moebelreinigung-after-2.jpg",
      title: "Esstisch Reinigung",
      service: "Möbelreinigung",
      altBefore: "Esstisch vor Möbelreinigung",
      altAfter: "Esstisch nach professioneller Möbelreinigung"
    },
    
    // Terrassenreinigung
    {
      before: "/images/before-after/terrassenreinigung-before-1.jpg",
      after: "/images/before-after/terrassenreinigung-after-1.jpg",
      title: "Terrasse Hochdruckreinigung",
      service: "Terrassenreinigung",
      altBefore: "Terrasse vor professioneller Reinigung",
      altAfter: "Terrasse nach professioneller Terrassenreinigung"
    },
    {
      before: "/images/before-after/terrassenreinigung-before-2.jpg",
      after: "/images/before-after/terrassenreinigung-after-2.jpg",
      title: "Balkon Reinigung",
      service: "Terrassenreinigung",
      altBefore: "Balkon vor Reinigung",
      altAfter: "Balkon nach professioneller Reinigung"
    },
    
    // Autoinnenreinigung
    {
      before: "/images/before-after/autoinnenreinigung-before-1.jpg",
      after: "/images/before-after/autoinnenreinigung-after-1.jpg",
      title: "Auto Innenraum",
      service: "Autoinnenreinigung",
      altBefore: "Autoinnenraum vor professioneller Reinigung",
      altAfter: "Autoinnenraum nach professioneller Autoinnenreinigung"
    },
    {
      before: "/images/before-after/autoinnenreinigung-before-2.jpg",
      after: "/images/before-after/autoinnenreinigung-after-2.jpg",
      title: "Autositze Aufbereitung",
      service: "Autoinnenreinigung",
      altBefore: "Autositze vor Reinigung",
      altAfter: "Autositze nach professioneller Reinigung"
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const total = beforeAfterImages.length;

  return (
    <div className="min-h-screen bg-brand-cream">
      <SEOHead />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-dark-brown via-brand-dark-brown/95 to-brand-dark-brown/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-transparent to-brand-gold" />
        </div>

        <div className="relative z-10 container-max px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center text-sm text-white/70 font-lato mb-8">
              <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-brand-gold">Vorher-Nachher</span>
            </nav>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-8"
            >
              <Camera className="w-5 h-5 mr-2" />
              <TranslatableText text="Beweis unserer Qualität" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8 leading-tight"
            >
              <TranslatableText text="Vorher-Nachher" />
              <span className="block text-brand-gold">
                <TranslatableText text="Galerie" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 font-lato leading-relaxed mb-10"
            >
              <TranslatableText text="Sehen Sie selbst, wie wir aus verschmutzten Räumen wieder strahlend saubere Orte machen. 
              Echte Resultate von echten Kunden in Zürich und der ganzen Schweiz." />
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-6 text-white/80 font-lato text-sm"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-gold" />
                <span>650+ zufriedene Kunden</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-gold" />
                <span>Transparent & ehrlich</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-brand-gold" />
                <span>Echte Resultate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Badge service au-dessus du slider */}
            <div className="flex justify-center mb-4">
              <span className="px-5 py-2 rounded-full bg-brand-gold/20 text-brand-gold font-bold font-lato text-lg shadow-sm">
                {beforeAfterImages[current].service}
              </span>
            </div>
            {/* Slider avant/après avec flèches */}
            <div className="relative w-full max-w-3xl mx-auto flex items-center">
              {/* Navigation arrows */}
              <button
                onClick={() => setCurrent((current - 1 + total) % total)}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={() => setCurrent((current + 1) % total)}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <AnimatedBeforeAfterSlider
                before={beforeAfterImages[current].before}
                after={beforeAfterImages[current].after}
                altBefore={beforeAfterImages[current].altBefore}
                altAfter={beforeAfterImages[current].altAfter}
              />
            </div>
            {/* Titre du cas sous le slider */}
            <div className="text-center mt-6 mb-2">
              <span className="text-2xl font-bold font-playfair text-brand-dark-brown">
                {beforeAfterImages[current].title}
              </span>
            </div>
            {/* Dots navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {beforeAfterImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    idx === current ? 'bg-black scale-125' : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Bild ${idx + 1} anzeigen`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-dark-brown">
        <div className="container-max px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-6">
              <TranslatableText text="Bereit für diese " />
              <span className="text-brand-gold">
                <TranslatableText text="Transformation?" />
              </span>
            </h2>
            <p className="text-xl text-white/90 font-lato mb-10 leading-relaxed">
              <TranslatableText text="Lassen Sie uns auch Ihr Zuhause oder Büro in neuem Glanz erstrahlen. 
              Kostenloses Angebot in nur 2 Minuten." />
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 justify-center">
              <Link href="/offerte" className="w-full sm:w-auto">
                <button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  <span className="hidden sm:inline">Jetzt kostenlose Offerte anfordern</span>
                  <span className="sm:hidden">Offerte anfordern</span>
                </button>
              </Link>
              
              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-brand-dark-brown font-semibold font-lato text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300">
                  <span className="hidden sm:inline">Alle Services entdecken</span>
                  <span className="sm:hidden">Services entdecken</span>
                </button>
              </Link>
            </div>
            
            <p className="text-white/70 font-lato text-sm mt-8">
              <TranslatableText text="✓ Kostenlose Beratung ✓ 100% Abgabegarantie ✓ Versicherte Services" />
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 