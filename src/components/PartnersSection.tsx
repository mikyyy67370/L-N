'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import TranslatableText from './TranslatableText';

export default function PartnersSection() {
  // Logos des entreprises partenaires
  const partners = [
    {
      name: 'Helvetic Cleaning',
      logo: '/images/partners/helvetic.jpg',
      description: 'Professionelle Reinigungspartner für Zürich & die ganze Schweiz'
    },
    {
      name: 'Umzug Zürich',
      logo: '/images/partners/umzug-zurich.jpg',
      description: 'Zuverlässige Umzugsreinigung & Endreinigung in Zürich'
    },
    {
      name: 'Helvetia Transport',
      logo: '/images/partners/helvetia-transport.jpg',
      description: 'Logistik, Transport & professionelle Reinigungslösungen'
    },
    {
      name: 'Top Umzug',
      logo: '/images/partners/top-umzug.jpg',
      description: 'Experten für Umzug und Endreinigung mit Abgabegarantie'
    },
    {
      name: 'Enzo Enea Garden',
      logo: '/images/partners/enzoeneagarden.jpg',
      description: 'Gartenpflege & Außenreinigung für Immobilien in Zürich'
    }
  ];

  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-brand-cream overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-brown via-transparent to-brand-gold" />
      </div>

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-center">5 Jahre starke Partnerschaften in Zürich & Schweiz</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-brand-dark-brown mb-3 sm:mb-4 px-2">
           Unsere Partner für die Reinigung in Zürich und der Schweiz
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-brand-dark-brown/70 font-lato max-w-2xl mx-auto leading-relaxed px-2">
            Seit 5 Jahren arbeiten wir mit ausgewählten Schweizer Unternehmen zusammen, um Ihnen zuverlässige und hochwertige Reinigungslösungen zu bieten. Unsere Partner teilen unsere Werte: Qualität, Vertrauen und Kundenzufriedenheit.
          </p>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <div className="w-8 sm:w-12 h-px bg-brand-dark-brown/20"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-brand-gold rounded-full mx-3 sm:mx-4"></div>
            <div className="w-8 sm:w-12 h-px bg-brand-dark-brown/20"></div>
          </div>
        </motion.div>

        {/* Partners Grid - Optimisé pour mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-sm border border-brand-dark-brown/5 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-brand-gold/10"
            >
              {/* Partner Logo */}
              <div className="relative w-full h-12 sm:h-14 lg:h-16 xl:h-20 flex items-center justify-center mb-3 sm:mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
              {/* H3 pour chaque partenaire */}
              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold font-playfair text-brand-dark-brown mb-1 text-center leading-tight">
                {partner.name}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-brand-dark-brown/80 text-center leading-tight">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Stats - Version responsive pour mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          {/* Version mobile : en colonne */}
          <div className="sm:hidden space-y-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-brand-gold/20 shadow-lg">
              <div className="text-xl font-bold font-playfair text-brand-dark-brown">98%</div>
              <div className="text-xs font-lato text-brand-dark-brown/70">Kundenzufriedenheit in Zürich</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-brand-gold/20 shadow-lg">
              <div className="text-xl font-bold font-playfair text-brand-dark-brown">5+</div>
              <div className="text-xs font-lato text-brand-dark-brown/70">Jahre vertrauensvolle Partnerschaften</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-brand-gold/20 shadow-lg">
              <div className="text-xl font-bold font-playfair text-brand-dark-brown">650+</div>
              <div className="text-xs font-lato text-brand-dark-brown/70">Glückliche Kunden & Familien</div>
            </div>
          </div>

          {/* Version desktop : en ligne */}
          <div className="hidden sm:inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 lg:px-8 py-3 lg:py-4 border border-brand-gold/20 shadow-lg">
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold font-playfair text-brand-dark-brown">98%</div>
                <div className="text-xs md:text-sm lg:text-base font-lato text-brand-dark-brown/70">Kundenzufriedenheit in Zürich</div>
              </div>
              <div className="w-px h-8 md:h-10 lg:h-12 bg-brand-dark-brown/20"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold font-playfair text-brand-dark-brown">5+</div>
                <div className="text-xs md:text-sm lg:text-base font-lato text-brand-dark-brown/70">Jahre vertrauensvolle Partnerschaften</div>
              </div>
              <div className="w-px h-8 md:h-10 lg:h-12 bg-brand-dark-brown/20"></div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold font-playfair text-brand-dark-brown">650+</div>
                <div className="text-xs md:text-sm lg:text-base font-lato text-brand-dark-brown/70">Glückliche Kunden & Familien</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emotional Benefits - Responsive pour mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 px-2"
        >
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-brand-gold/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-gold rounded-full mr-2 sm:mr-3"></div>
            <span className="font-lato text-xs sm:text-sm lg:text-base text-brand-dark-brown font-medium">Mehr Zeit für Familie</span>
          </div>
          
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-brand-gold/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-gold rounded-full mr-2 sm:mr-3"></div>
            <span className="font-lato text-xs sm:text-sm lg:text-base text-brand-dark-brown font-medium">Stress-freies Zuhause</span>
          </div>
          
          <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-brand-gold/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-gold rounded-full mr-2 sm:mr-3"></div>
            <span className="font-lato text-xs sm:text-sm lg:text-base text-brand-dark-brown font-medium">Seelenruhe garantiert</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 