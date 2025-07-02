'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Car, 
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

export default function CarInteriorCleaningPage() {
  const packages = [
    {
      title: 'Express Innenreinigung',
      price: 89,
      unit: 'pro Auto',
      features: [
        'Staubsaugen komplett',
        'Sitze oberflächlich',
        'Armaturenbrett & Lenkrad',
        'Fußmatten reinigen',
        'Fenster innen',
        'Desodorierung'
      ],
      duration: '1-2 Stunden',
      popular: false
    },
    {
      title: 'Profi Tiefenreinigung',
      price: 149,
      unit: 'pro Auto',
      features: [
        'Alles aus Express-Paket',
        'Polster tiefenreinigen',
        'Leder-Spezialpflege',
        'Kofferraum komplett',
        'Geruchsneutralisierung',
        'Kunststoffpflege',
        '6 Monate Schutz'
      ],
      duration: '2-3 Stunden',
      popular: true
    },
    {
      title: 'Luxus Vollservice',
      price: 229,
      unit: 'pro Auto',
      features: [
        'Alles aus Profi-Paket',
        'Dampf-Desinfektion',
        'Nano-Textilversiegelung',
        'Leder-Imprägnierung',
        'Chrom & Alu polieren',
        'Ozon-Behandlung',
        'Wertgutachten für Verkauf',
        '12 Monate Garantie'
      ],
      duration: '3-5 Stunden',
      popular: false
    }
  ];

  const carTypes = [
    {
      type: 'Limousine / Kombi',
      description: 'Standard-Reinigung für Alltagsfahrzeuge',
      price: 'Basispreis',
      features: ['5 Sitze', 'Standard Kofferraum', 'Normale Verschmutzung']
    },
    {
      type: 'SUV / Van',
      description: 'Erweiterte Reinigung für größere Fahrzeuge',
      price: '+25% Aufpreis',
      features: ['7+ Sitze', 'Großer Innenraum', 'Mehr Staufächer']
    },
    {
      type: 'Sportwagen / Cabrio',
              description: 'Professionelle Behandlung für edle Fahrzeuge',
      price: '+50% Aufpreis',
      features: ['Edle Materialien', 'Spezial-Leder', 'Höchste Sorgfalt']
    },
    {
      type: 'Oldtimer / Klassiker',
      description: 'Behutsame Restoration für Sammlerstücke',
      price: 'Auf Anfrage',
      features: ['Historische Materialien', 'Werterhaltung', 'Expertise erforderlich']
    }
  ];

  const problemSolutions = [
    {
      problem: 'Tierhaare',
      solution: 'Spezielle Tierhaar-Bürsten und elektrostatische Geräte',
      icon: '🐕',
      guarantee: '100% Haarentfernung'
    },
    {
      problem: 'Rauchgeruch',
      solution: 'Ozon-Behandlung und Bio-Enzym Geruchsneutralisation',
      icon: '🚭',
      guarantee: 'Vollständige Geruchsbeseitigung'
    },
    {
      problem: 'Essensreste / Flecken',
      solution: 'Professionelle Fleckentfernung mit speziellen Enzymen',
      icon: '🍟',
      guarantee: '95% Fleckenentfernung'
    },
    {
      problem: 'Bakterien / Viren',
      solution: 'UV-Desinfektion und antimikrobielle Behandlung',
      icon: '🦠',
      guarantee: '99.9% Keimreduktion'
    }
  ];

  const testimonials = [
    {
      name: 'Familie Schneider',
      location: 'Zürich',
      rating: 5,
      text: 'Unser Familienauto mit 3 Kindern war hoffnungslos. Nach L&N sieht es wieder aus wie beim Kauf!',
      service: 'Profi Tiefenreinigung',
      carType: 'VW Touran'
    },
    {
      name: 'BMW Autohaus Meier',
      location: 'Basel',
      rating: 5,
      text: 'Für unsere Gebrauchtwagen nutzen wir regelmäßig L&N. Perfekte Ergebnisse, höhere Verkaufspreise.',
      service: 'Luxus Vollservice',
      carType: 'Verschiedene BMW'
    },
    {
      name: 'Thomas K.',
      location: 'Bern',
      rating: 5,
      text: 'Mein 911er Porsche wurde wie ein Rohdiamant behandelt. Jedes Detail perfekt!',
      service: 'Luxus Vollservice',
      carType: 'Porsche 911'
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
                <span className="text-brand-gold">Auto-Innenreinigung</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-8">
                <Car className="w-5 h-5 mr-2" />
                Fahren wie am ersten Tag
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8 leading-tight">
                Auto-Innenreinigung
                <span className="block text-brand-gold">die begeistert</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-lato leading-relaxed mb-10">
                Ihr Auto ist mehr als Fortbewegung – es ist Ihr mobiles Zuhause. 
                Wir sorgen für Sauberkeit, Hygiene und Werterhaltung auf höchstem Niveau.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-white/80 font-lato text-sm mb-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  <span>Materialschonend</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-brand-gold" />
                  <span>Umweltfreundlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-gold" />
                  <span>Werterhaltung</span>
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
                  src="/images/buero.jpg"
                  alt="Professionelle Auto-Innenreinigung"
                  fill
                  className="object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-brand-gold text-brand-dark-brown font-bold font-lato px-6 py-3 rounded-full shadow-lg">
                  ab CHF 89
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Car Types Section */}
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
              Alle <span className="text-brand-gold">Fahrzeugtypen</span> - fachgerecht behandelt
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Vom Alltagsauto bis zum Sportwagen – wir behandeln jedes Fahrzeug mit der gebührenden Sorgfalt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carTypes.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-brand-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-3">
                  {car.type}
                </h3>
                <p className="text-brand-dark-brown/70 font-lato mb-4 leading-relaxed">
                  {car.description}
                </p>
                <div className="text-brand-gold font-bold font-lato mb-4">
                  {car.price}
                </div>
                <div className="space-y-2">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-brand-dark-brown/80 font-lato">
                      <CheckCircle className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Solutions */}
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
              Jedes Problem <span className="text-brand-gold">professionell gelöst</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Egal wie hartnäckig – wir haben die richtige Lösung für jede Verschmutzung.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {problemSolutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-brand-dark-brown/70 font-lato mb-4">
                      {item.solution}
                    </p>
                    <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-4 py-2 rounded-full text-sm">
                      <ShieldCheck className="w-4 h-4 mr-2" />
                      {item.guarantee}
                    </div>
                  </div>
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
              Von der Express-Auffrischung bis zur Luxus-Behandlung – passend zu Ihrem Auto.
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
              Begeisterte <span className="text-brand-gold">Autobesitzer</span>
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

                <p className="text-brand-dark-brown/80 font-lato italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="text-brand-gold font-lato text-xs font-semibold mb-4">
                  {testimonial.carType}
                </div>

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
              Bereit für Ihr <span className="text-brand-gold">perfektes Auto?</span>
            </h2>
            <p className="text-xl text-white/90 font-lato mb-10 leading-relaxed">
              Erleben Sie den Unterschied einer professionellen Auto-Innenreinigung. Ihr Auto wird es Ihnen danken!
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
              ✓ Materialschonend ✓ Werterhaltung ✓ Mobile Anfahrt möglich
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