'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Armchair, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Clock,
  Droplets,
  Phone,
  Heart,
  Award,
  Sparkles
} from 'lucide-react';
import React from 'react';
import TranslatableText from '@/components/TranslatableText';

export default function SofaCleaningPage() {
  const packages = [
    {
      title: 'Express Auffrischung',
      price: 89,
      unit: 'pro Sitzplatz',
      features: [
        'Oberflächenreinigung',
        'Fleckenentfernung',
        'Desodorierung',
        'Schnelle Trocknung',
        'Anti-Bakterien Schutz'
      ],
      duration: '1-2 Stunden',
      popular: false
    },
    {
      title: 'Profi Tiefenreinigung',
      price: 149,
      unit: 'pro Sitzplatz',
      features: [
        'Alles aus Express-Paket',
        'Dampf-Tiefenreinigung',
        'Milben-Behandlung',
        'Geruchsneutralisierung',
        'Textilschutz-Imprägnierung',
        '6 Monate Garantie'
      ],
      duration: '2-3 Stunden',
      popular: true
    },
    {
      title: 'Luxus Vollservice',
      price: 229,
      unit: 'pro Sitzplatz',
      features: [
        'Alles aus Profi-Paket',
        'Leder-Spezialpflege',
        'Farb-Auffrischung',
        'Anti-Allergen Behandlung',
        'Nano-Versiegelung',
        'Abholung & Lieferung',
        '12 Monate Garantie'
      ],
      duration: '3-4 Stunden',
      popular: false
    }
  ];

  const sofaTypes = [
    {
      type: 'Ledersofa',
      description: 'Fachgerechte Lederpflege für maximale Lebensdauer und geschmeidige Oberfläche.',
      icon: <Armchair className="w-10 h-10 text-brand-gold mx-auto" />,
      benefits: ['Rissschutz', 'Farbauffrischung', 'UV-Schutz']
    },
    {
      type: 'Stoffsofa',
      description: 'Sanfte Tiefenreinigung für Textilsofas – farbschonend und faserschützend.',
      icon: <Star className="w-10 h-10 text-brand-gold mx-auto" />,
      benefits: ['Faserschutz', 'Allergenentfernung', 'Farberhalt']
    },
    {
      type: 'Mikrovelour',
      description: 'Spezialbehandlung für empfindliche Mikrofasern – erhält Struktur und Weichheit.',
      icon: <Award className="w-10 h-10 text-brand-gold mx-auto" />,
      benefits: ['Struktur erhalten', 'Fusselschutz', 'Weichheit']
    },
    {
      type: 'Wildleder/Alcantara',
      description: 'Professionelle Reinigung und Pflege für exklusive Materialien.',
      icon: <Sparkles className="w-10 h-10 text-brand-gold mx-auto" />,
      benefits: ['Oberflächenschutz', 'Struktur-Erhalt', 'Luxus-Gefühl']
    }
  ];

  const problemSolutions = [
    {
      problem: 'Hartnäckige Flecken',
      solution: 'Spezial-Fleckentferner für jeden Fleckentyp',
      result: '98% Fleckenentfernung'
    },
    {
      problem: 'Unangenehme Gerüche',
      solution: 'Tiefe Desodorierung mit Bio-Enzymen',
      result: '100% Geruchsneutralisierung'
    },
    {
      problem: 'Allergien & Milben',
      solution: 'Anti-Allergen Behandlung mit Dampf',
      result: '99.9% Allergen-Reduzierung'
    },
    {
      problem: 'Abnutzung & Farbverlust',
      solution: 'Farb-Auffrischung und Schutzversiegelung',
      result: 'Wie neu Aussehen'
    }
  ];

  const testimonials = [
    {
      name: 'Familie Brunner',
      location: 'Zürich',
      rating: 5,
      text: 'Unser weißes Sofa war nach 3 Jahren mit Kindern hoffnungslos. L&N hat Wunder gewirkt – es sieht aus wie neu!',
      service: 'Profi Tiefenreinigung'
    },
    {
      name: 'Dr. Meier',
      location: 'Basel',
      rating: 5,
      text: 'Mein 15.000 CHF Designer-Sofa wurde perfekt gereinigt. Sehr professionell und schonend.',
      service: 'Luxus Vollservice'
    },
    {
      name: 'Restaurant Bellevue',
      location: 'Bern',
      rating: 5,
      text: 'Quartalsweise Reinigung unserer Lounge-Möbel. Gäste merken den Unterschied sofort.',
      service: 'Express Auffrischung'
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
                <span className="text-brand-gold">Sofa Reinigung</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-8">
                <Heart className="w-5 h-5 mr-2" />
                Kuscheln wie am ersten Tag
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8 leading-tight">
                Sofa Reinigung
                <span className="block text-brand-gold">für Ihr Wohlbefinden</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-lato leading-relaxed mb-10">
                Ihr Sofa ist mehr als ein Möbelstück – es ist Ihr Rückzugsort. 
                Wir sorgen dafür, dass es wieder wie neu aussieht und sich anfühlt.
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
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <span>Schnelle Trocknung</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte">
                  <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                    Kostenlose Beratung
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
                  alt="Professionelle Sofa Reinigung"
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

      {/* Sofa Types Section */}
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
              Alle <span className="text-brand-gold">Materialien</span> - perfekt gepflegt
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Von Leder bis Stoff – wir kennen die richtige Pflege für Ihr Sofa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sofaTypes.map((sofa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-brand-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 text-center">
                  {sofa.icon}
                </div>
                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-4 text-center">
                  {sofa.type}
                </h3>
                <p className="text-brand-dark-brown/70 font-lato mb-4 leading-relaxed text-center">
                  {sofa.description}
                </p>
                <div className="space-y-2">
                  {sofa.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-brand-dark-brown/80 font-lato">
                      <CheckCircle className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" />
                      {benefit}
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
              Jedes Problem hat seine <span className="text-brand-gold">Lösung</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Egal wie hoffnungslos es aussieht – wir finden eine Lösung für Ihr Sofa.
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
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-2">
                      {item.problem}
                    </h3>
                    <p className="text-brand-dark-brown/70 font-lato mb-4">
                      {item.solution}
                    </p>
                    <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-4 py-2 rounded-full text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      {item.result}
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
              Von schneller Auffrischung bis zur Luxus-Behandlung – passend zu Ihrem Sofa.
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
              Zufriedene <span className="text-brand-gold">Sofa-Besitzer</span>
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
              Bereit für Ihr <span className="text-brand-gold">Traumsofa?</span>
            </h2>
            <p className="text-xl text-white/90 font-lato mb-10 leading-relaxed">
              Verwandeln Sie Ihr Sofa wieder in Ihren Lieblings-Kuschelplatz. Professionell und schonend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/offerte">
                <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  Kostenlose Beratung vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-dark-brown font-semibold font-lato text-lg px-8 py-4 rounded-full transition-all duration-300">
                <Phone className="w-5 h-5 mr-2 inline" />
                Direkt anrufen
              </button>
            </div>
            
            <p className="text-white/70 font-lato text-sm mt-8">
              ✓ Materialschonend ✓ Schnelle Trocknung ✓ Zufriedenheitsgarantie
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Section Vorteile */}
      <section className="py-12 md:py-16 bg-brand-cream">
        {/* Section content */}
      </section>
    </div>
  );
} 