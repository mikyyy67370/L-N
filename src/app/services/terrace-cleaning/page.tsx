'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sun, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Clock,
  Droplets,
  Phone,
  Zap,
  Award,
  Sparkles
} from 'lucide-react';
import React from 'react';
import TranslatableText from '@/components/TranslatableText';

export default function TerraceCleaningPage() {
  const packages = [
    {
      title: 'Basis Reinigung',
      price: 8.50,
      unit: 'pro m²',
      features: [
        'Hochdruckreinigung',
        'Algen & Moos entfernen',
        'Fugensäuberung',
        'Groben Schmutz beseitigen',
        'Nachspülung mit Klarwasser'
      ],
      duration: '2-4 Stunden',
      popular: false
    },
    {
      title: 'Tiefenreinigung',
      price: 12.50,
      unit: 'pro m²',
      features: [
        'Alles aus Basis-Paket',
        'Spezial-Reinigungsmittel',
        'Verfugung erneuern',
        'Steinversiegelung',
        'Moos-Stopp Behandlung',
        '6 Monate Schutz'
      ],
      duration: '4-6 Stunden',
      popular: true
    },
    {
      title: 'Vollservice',
      price: 18.50,
      unit: 'pro m²',
      features: [
        'Alles aus Tiefenreinigung-Paket',
        'Nano-Versiegelung',
        'Flechten-Entfernung',
        'Betonauffrischung',
        'Drainage-Prüfung',
        'Terrassenmöbel mit',
        '12 Monate Garantie'
      ],
      duration: '6-8 Stunden',
      popular: false
    }
  ];

  const terraceTypes = [
    {
      type: 'Steinplatten',
      description: 'Sandstein, Granit, Marmor - schonend und gründlich',
      speciality: 'Versiegelung inklusive'
    },
    {
      type: 'Betonplatten',
      description: 'Robuste Reinigung für Betonoberflächen',
      speciality: 'Farbauffrischung möglich'
    },
    {
      type: 'Holzterrassen',
      description: 'Spezielle Holzpflege und -auffrischung',
      speciality: 'Öl-Behandlung inklusive'
    },
    {
      type: 'Keramikfliesen',
      description: 'Schonende Reinigung ohne Beschädigung',
      speciality: 'Fugen-Erneuerung'
    }
  ];

  const seasonalBenefits = [
    {
      season: 'Frühling',
      title: 'Winterschäden beseitigen',
      description: 'Entfernen Sie Salz, Moos und Winterschmutz für einen frischen Start',
      icon: '🌱'
    },
    {
      season: 'Sommer',
      title: 'Genießen & Entspannen',
      description: 'Saubere Terrasse für perfekte Grillabende und Entspannung',
      icon: '☀️'
    },
    {
      season: 'Herbst',
      title: 'Schutz vor Frost',
      description: 'Versiegelung schützt vor Frostschäden und erleichtert die Pflege',
      icon: '🍂'
    },
    {
      season: 'Winter',
      title: 'Sicherheit gewährleisten',
      description: 'Rutschfeste Oberfläche für sichere Wintermonate',
      icon: '❄️'
    }
  ];

  const testimonials = [
    {
      name: 'Familie Keller',
      location: 'Zürich',
      rating: 5,
      text: 'Unsere 15 Jahre alte Steinterrasse sieht wieder aus wie neu. Das Ergebnis hat alle Erwartungen übertroffen!',
      service: 'Vollservice'
    },
    {
      name: 'Hotel Bellevue',
      location: 'Basel',
      rating: 5,
      text: 'Professionelle Reinigung unserer Restaurant-Terrasse. Gäste sind begeistert vom Ergebnis.',
      service: 'Tiefenreinigung'
    },
    {
      name: 'Thomas B.',
      location: 'Bern',
      rating: 5,
      text: 'Meine Holzterrasse wurde perfekt aufbereitet. Sieht wieder aus wie am ersten Tag!',
      service: 'Tiefenreinigung'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-dark-brown via-brand-dark-brown/95 to-brand-dark-brown/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-transparent to-brand-gold" />
        </div>

        <div className="relative z-10 container-max px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-left"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center text-sm text-white/70 font-lato mb-8">
                <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
                <span className="mx-2">›</span>
                <Link href="/services" className="hover:text-brand-gold transition-colors">Services</Link>
                <span className="mx-2">›</span>
                <span className="text-brand-gold">Terrassenreinigung</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-8">
                <Sun className="w-5 h-5 mr-2" />
                Ihr Outdoor-Wohnzimmer perfekt
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8 leading-tight">
                Terrassenreinigung
                <span className="block text-brand-gold">für Genießer</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-lato leading-relaxed mb-10">
                Ihre Terrasse soll ein Ort der Entspannung sein, nicht der Sorge. 
                Wir machen sie wieder zu Ihrem liebsten Outdoor-Wohnzimmer.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-white/80 font-lato text-sm mb-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  <span>Materialschonend</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand-gold" />
                  <span>Hochdrucktechnik</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-brand-gold" />
                  <span>Umweltschonend</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte">
                  <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                    Kostenlose Besichtigung
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-dark-brown font-semibold font-lato text-lg px-8 py-4 rounded-full transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Sofort anrufen
                </button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative"
            >
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/buero.jpg"
                  alt="Professionelle Terrassenreinigung"
                  fill
                  className="object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-brand-gold text-brand-dark-brown font-bold font-lato px-6 py-3 rounded-full shadow-lg">
                  ab CHF 8.50/m²
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seasonal Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-6">
              Das ganze Jahr <span className="text-brand-gold">perfekt gepflegt</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Jede Jahreszeit stellt andere Anforderungen an Ihre Terrasse. Wir kennen sie alle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center bg-brand-cream rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">
                  {benefit.icon}
                </div>
                <div className="text-sm font-semibold text-brand-gold font-lato mb-2">
                  {benefit.season}
                </div>
                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-4">
                  {benefit.title}
                </h3>
                <p className="text-brand-dark-brown/70 font-lato leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terrace Types */}
      <section className="py-16 lg:py-24 bg-brand-cream">
        <div className="container-max px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-6">
              Alle <span className="text-brand-gold">Materialien</span> - fachgerecht behandelt
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Jedes Material braucht seine eigene Behandlung. Wir kennen die Unterschiede.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {terraceTypes.map((terrace, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-4">
                  {terrace.type}
                </h3>
                <p className="text-brand-dark-brown/70 font-lato mb-4 leading-relaxed">
                  {terrace.description}
                </p>
                <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-3 py-1 rounded-full text-sm">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {terrace.speciality}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-6">
              Wählen Sie Ihre <span className="text-brand-gold">Reinigungsintensität</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Von der Grundreinigung bis zum Komplettservice - passend zu Ihrer Terrasse.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-brand-gold shadow-brand-gold/20' 
                    : 'border-brand-dark-brown/10 hover:border-brand-gold/30'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-gold text-brand-dark-brown font-bold font-lato px-6 py-2 rounded-full text-sm shadow-lg">
                      Beliebteste Wahl
                    </div>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-bold font-playfair text-brand-dark-brown mb-4">
                    {pkg.title}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold font-playfair text-brand-dark-brown mb-1">
                      CHF {pkg.price}
                    </div>
                    <div className="text-brand-dark-brown/60 font-lato text-sm mb-2">
                      {pkg.unit}
                    </div>
                    <div className="text-brand-gold font-lato text-sm font-semibold">
                      {pkg.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-brand-dark-brown/80 font-lato text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-gold mr-3 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/offerte">
                    <button className={`w-full font-bold font-lato py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 ${
                      pkg.popular
                        ? 'bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown shadow-lg hover:shadow-xl'
                        : 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-brown'
                    }`}>
                      Paket auswählen
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-brand-cream">
        <div className="container-max px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-6">
              Begeisterte <span className="text-brand-gold">Terrassenbesitzer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="text-brand-dark-brown/80 font-lato italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div>
                  <div className="font-bold font-playfair text-brand-dark-brown">
                    {testimonial.name}
                  </div>
                  <div className="text-brand-dark-brown/60 font-lato text-sm mb-2">
                    {testimonial.location}
                  </div>
                  <div className="text-brand-gold font-lato text-sm font-semibold">
                    {testimonial.service}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-dark-brown">
        <div className="container-max px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-6">
              Bereit für Ihre <span className="text-brand-gold">Traumterrasse?</span>
            </h2>
            <p className="text-xl text-white/90 font-lato mb-10 leading-relaxed">
              Verwandeln Sie Ihre Terrasse in einen Ort, an dem Sie gerne Zeit verbringen. Jetzt Termin vereinbaren!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/offerte">
                <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  Kostenlose Besichtigung
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-dark-brown font-semibold font-lato text-lg px-8 py-4 rounded-full transition-all duration-300">
                <Phone className="w-5 h-5 mr-2 inline" />
                Direkt anrufen
              </button>
            </div>
            
            <p className="text-white/70 font-lato text-sm mt-8">
              ✓ Materialschonend ✓ Umweltfreundlich ✓ Mit Versiegelung
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Section Services inclus */}
      <section className="py-12 md:py-16 bg-brand-cream">
        {/* Add services section content here */}
      </section>
    </div>
  );
} 