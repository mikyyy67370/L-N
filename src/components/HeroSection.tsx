'use client';

import Image from 'next/image';
import { ShieldCheck, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Swiss Alps Luxury */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Endreinigung Zürich, Büroreinigung, Umzugsreinigung Schweiz - L&N Reinigung"
          fill
          className="object-cover object-center w-full h-full"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />
        
        {/* Subtle Pattern Overlay for Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-dark-brown/5 to-brand-gold/10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="container-max px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="flex flex-col items-start text-left space-y-8 lg:space-y-12"
            >
              
              {/* Badge de qualité */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center bg-brand-gold/95 text-brand-dark-brown text-sm font-bold font-lato px-4 py-2 rounded-full shadow-lg border border-brand-gold/40 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  <span>Schweizer Qualität</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                  <span className="text-white/90 text-sm font-lato ml-1">5.0</span>
                </div>
              </motion.div>

              {/* H1 SEO principal */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-white leading-[1.1] tracking-tight"
              >
Ihr Zuhause, unsere Leidenschaft: Professionelle Reinigung in der Schweiz.
              </motion.h1>

              {/* H2 sous-titre riche */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl text-brand-gold font-playfair font-bold mt-2"
              >
                Gewinnen Sie Zeit für sich und Ihre Familie, wir kümmern uns um den Rest.
              </motion.h2>

              {/* Paragraphe SEO enrichi */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl text-white/95 font-lato font-light leading-relaxed max-w-2xl"
              >
                L&N Reinigung – Ihr Spezialist für Endreinigung mit Abgabegarantie, Büro- und Umzugsreinigung in Zürich & Schweiz. Vertrauen Sie auf erfahrenes, geschultes Personal und faire Preise.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap items-center gap-6 text-white/80 font-lato text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  Moderne Ausrüstung
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  Geschultes Personal
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  Umweltfreundliche Produkte
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-8"
              >
                {/* Primary CTA */}
                <Link href="/offerte" className="w-full sm:w-auto">
                  <button className="group relative w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl border border-brand-gold/40 transition-all duration-500 hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-gold/30">
                    <span className="relative z-10 flex items-center justify-center">
                      <span className="hidden sm:inline">Offerte anfordern</span>
                      <span className="sm:hidden">Offerte anfordern</span>
                      <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-gold/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </Link>

                {/* Secondary CTA */}
                <Link href="/services" className="w-full sm:w-auto">
                  <button className="group w-full font-lato font-semibold text-white text-base sm:text-lg px-4 sm:px-6 py-3 border-2 border-white/30 rounded-full backdrop-blur-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300 hover:bg-white/5">
                    <span className="flex items-center justify-center">
                      <span className="hidden sm:inline">Alle Reinigungsservices entdecken</span>
                      <span className="sm:hidden">Services entdecken</span>
                      <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
              </motion.div>

              {/* Small Trust Note (H3) */}
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-white/70 font-lato text-base leading-relaxed max-w-md mt-4"
              >
                ✓ Kostenlose Beratung &nbsp; ✓ Transparente Preise &nbsp; ✓ 24h Verfügbarkeit
              </motion.h3>
            </motion.div>

            {/* Right Column - Visual Enhancement (Optional) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Floating Stats Cards */}
                <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-brand-gold/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-playfair text-brand-dark-brown">Bio</div>
                    <div className="text-sm font-lato text-brand-dark-brown/70">Reinigungsprodukte</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-brand-gold/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-playfair text-brand-dark-brown">24/7</div>
                    <div className="text-sm font-lato text-brand-dark-brown/70">Erreichbarkeit</div>
                  </div>
                </div>

                {/* Central Element */}
                <div className="w-64 h-64 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-brand-gold/30">
                  <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-16 h-16 text-brand-gold" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 