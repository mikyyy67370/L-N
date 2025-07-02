'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Zap, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Clock,
  Droplets,
  Phone,
  Home,
  Award,
  Sparkles
} from 'lucide-react';
import React from 'react';
import TranslatableText from '@/components/TranslatableText';

export default function CarpetCleaningPage() {
  const packages = [
    {
      title: 'Express Reinigung',
      price: 4.50,
      unit: 'pro m²',
      features: [
        'Oberflächenreinigung',
        'Fleckenvorbehandlung',
        'Maschinelle Reinigung',
        'Schnelle Trocknung',
        'Grundgeruch entfernen'
      ],
      duration: '2-3 Stunden',
      popular: false
    },
    {
      title: 'Profi Tiefenreinigung',
      price: 6.50,
      unit: 'pro m²',
      features: [
        'Alles aus Express-Paket',
        'Tiefenreinigung mit Dampf',
        'Allergiker-freundlich',
        'Imprägnierung inklusive',
        'Milben-Behandlung',
        '6 Monate Garantie'
      ],
      duration: '3-5 Stunden',
      popular: true
    },
    {
      title: 'Luxus Vollservice',
      price: 9.50,
      unit: 'pro m²',
      features: [
        'Alles aus Profi-Paket',
        'Anti-Allergen Behandlung',
        'Scotchgard Schutz',
        'Geruchsneutralisierung',
        'Farb-Auffrischung',
        'Abholung & Lieferung',
        '12 Monate Garantie'
      ],
      duration: '4-6 Stunden',
      popular: false
    }
  ];

  const carpetTypes = [
    {
      type: 'Orientteppiche',
      description: 'Schonende Handwäsche für wertvolle Perserteppiche',
      price: 'ab CHF 8/m²'
    },
    {
      type: 'Berberteppiche',
      description: 'Spezialbehandlung für strukturierte Oberflächen',
      price: 'ab CHF 6/m²'
    },
    {
      type: 'Hochflor Teppiche',
      description: 'Professionelle Reinigung mit spezieller Technik',
      price: 'ab CHF 7/m²'
    },
    {
      type: 'Outdoor Teppiche',
      description: 'Wetterbeständige Reinigung für Terrassen',
      price: 'ab CHF 5/m²'
    }
  ];

  const beforeAfterSteps = [
    {
      step: 1,
      title: 'Kostenlose Inspektion',
      description: 'Wir analysieren Teppichart, Verschmutzung und bestimmen die beste Reinigungsmethode.'
    },
    {
      step: 2,
      title: 'Vorbehandlung',
      description: 'Flecken werden gezielt behandelt und gelöst, bevor die Hauptreinigung beginnt.'
    },
    {
      step: 3,
      title: 'Professionelle Reinigung',
      description: 'Mit modernster Technik entfernen wir Schmutz, Bakterien und Allergene.'
    },
    {
      step: 4,
      title: 'Schutz & Pflege',
      description: 'Optional: Imprägnierung zum Schutz vor zukünftigen Verschmutzungen.'
    }
  ];

  const testimonials = [
    {
      name: 'Familie Müller',
      location: 'Zürich',
      rating: 5,
      text: 'Unser 20 Jahre alter Perserteppich sieht aus wie neu! Unglaublich, was L&N geschafft hat.',
      service: 'Luxus Vollservice'
    },
    {
      name: 'Restaurant Alpina',
      location: 'Basel',
      rating: 5,
      text: 'Regelmäßige Teppichreinigung für unser Restaurant. Immer perfekte Ergebnisse, sehr zuverlässig.',
      service: 'Profi Tiefenreinigung'
    },
    {
      name: 'Dr. Schmidt',
      location: 'Bern',
      rating: 5,
      text: 'Als Allergiker bin ich sehr zufrieden. Die Anti-Allergen Behandlung hat wirklich geholfen.',
      service: 'Profi Tiefenreinigung'
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
                <span className="text-brand-gold">Teppichreinigung</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-8">
                <Sparkles className="w-5 h-5 mr-2" />
                Wie neu in wenigen Stunden
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8 leading-tight">
                Teppichreinigung
                <span className="block text-brand-gold">die wirkt & schützt</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-lato leading-relaxed mb-10">
                Ihre Teppiche verdienen mehr als nur Staubsaugen. Unsere Profi-Reinigung 
                bringt Farbe, Frische und Hygiene zurück – spürbar für die ganze Familie.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-white/80 font-lato text-sm mb-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  <span>Schonende Methoden</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-brand-gold" />
                  <span>Umweltfreundlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <span>Express-Service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte">
                  <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                    Kostenlose Begutachtung
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
                  src="/images/endreinigung.jpg"
                  alt="Professionelle Teppichreinigung"
                  fill
                  className="object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-brand-gold text-brand-dark-brown font-bold font-lato px-6 py-3 rounded-full shadow-lg">
                  ab CHF 4.50/m²
                </div>
              </div>
            </motion.div>
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
              Von schneller Auffrischung bis zur Luxus-Behandlung – wir haben das richtige Paket.
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

      {/* Carpet Types Section */}
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
              Alle <span className="text-brand-gold">Teppicharten</span> - perfekt gereinigt
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Jeder Teppich ist einzigartig. Wir kennen die richtige Behandlung für jeden Typ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carpetTypes.map((carpet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-4">
                  {carpet.type}
                </h3>
                <p className="text-brand-dark-brown/70 font-lato mb-4 leading-relaxed">
                  {carpet.description}
                </p>
                <div className="text-brand-gold font-bold font-lato">
                  {carpet.price}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              So funktioniert unsere <span className="text-brand-gold">Profi-Reinigung</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Schritt für Schritt zu sauberen, frischen und geschützten Teppichen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center relative"
              >
                {/* Connecting Line */}
                {index < beforeAfterSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-brand-gold/30"></div>
                )}

                {/* Step Number */}
                <div className="w-16 h-16 bg-brand-gold text-brand-dark-brown font-bold font-lato text-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-4">
                  {step.title}
                </h3>
                
                <p className="text-brand-dark-brown/70 font-lato leading-relaxed">
                  {step.description}
                </p>
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
              Begeisterte <span className="text-brand-gold">Kunden</span> sprechen
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
              Bereit für <span className="text-brand-gold">frische Teppiche?</span>
            </h2>
            <p className="text-xl text-white/90 font-lato mb-10 leading-relaxed">
              Erleben Sie den Unterschied einer professionellen Teppichreinigung. Jetzt Termin vereinbaren!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/offerte">
                <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  Kostenlose Begutachtung
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-dark-brown font-semibold font-lato text-lg px-8 py-4 rounded-full transition-all duration-300">
                <Phone className="w-5 h-5 mr-2 inline" />
                Direkt anrufen
              </button>
            </div>
            
            <p className="text-white/70 font-lato text-sm mt-8">
              ✓ Kostenlose Begutachtung ✓ Umweltfreundlich ✓ Express-Service verfügbar
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Section Avantages */}
      <section className="py-12 md:py-16 bg-brand-cream">
        {/* Section content */}
      </section>
    </div>
  );
} 