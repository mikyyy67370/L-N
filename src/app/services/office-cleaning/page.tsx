'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Clock,
  Calendar,
  Phone,
  Home,
  Users,
  Sparkles
} from 'lucide-react';
import React from 'react';
import TranslatableText from '@/components/TranslatableText';

export default function OfficeCleaningPage() {
  const packages = [
    {
      title: 'Basis Hausreinigung',
      price: 80,
      duration: '2-3 Stunden',
      features: [
        'Staubsaugen aller Räume',
        'Böden wischen',
        'Badezimmer komplett',
        'Küche Grundreinigung',
        'Mülleimer leeren',
        'Oberflächenreinigung'
      ],
      popular: false,
      frequency: 'pro Besuch'
    },
    {
      title: 'Komfort Hausreinigung',
      price: 120,
      duration: '3-4 Stunden',
      features: [
        'Alles aus Basis-Paket',
        'Fensterreinigung innen',
        'Kühlschrank innen reinigen',
        'Schränke außen abstauben',
        'Spiegel & Glas reinigen',
        'Betten machen',
        'Individuelle Wünsche'
      ],
      popular: true,
      frequency: 'pro Besuch'
    },
    {
      title: 'Luxus Hausreinigung',
      price: 180,
      duration: '4-6 Stunden',
      features: [
        'Alles aus Komfort-Paket',
        'Backofen tiefenreinigen',
        'Schränke innen organisieren',
        'Wäsche zusammenlegen',
        'Pflanzen gießen',
        'Einkauf auf Wunsch',
        'Persönlicher Hauskeeper'
      ],
      popular: false,
      frequency: 'pro Besuch'
    }
  ];

  const frequencies = [
    {
      title: 'Wöchentlich',
      discount: '20%',
      description: 'Perfekt für Familien mit Kindern',
      popular: true
    },
    {
      title: '14-täglich',
      discount: '15%',
      description: 'Ideal für Berufstätige Paare',
      popular: false
    },
    {
      title: 'Monatlich',
      discount: '10%',
      description: 'Gut für Singles oder Paare',
      popular: false
    },
    {
      title: 'Nach Bedarf',
      discount: '0%',
      description: 'Flexibel ohne Vertrag',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Équipe motivée',
      description: 'Un environnement propre booste la productivité et le moral des employés.'
    },
    {
      icon: ShieldCheck,
      title: 'Vertrauensvolle Reinigungskraft',
      description: 'Dieselbe geschulte Person kommt regelmäßig zu Ihnen nach Hause.'
    },
    {
      icon: Sparkles,
      title: 'Individuelle Wünsche',
      description: 'Wir passen uns an Ihre Bedürfnisse und Vorlieben an.'
    },
    {
      icon: Clock,
      title: 'Flexible Termine',
      description: 'Termine nach Ihrem Zeitplan, auch abends und am Wochenende.'
    }
  ];

  const testimonials = [
    {
      name: 'Familie Weber',
      location: 'Zürich',
      rating: 5,
      text: 'Seit 2 Jahren kommt Maria jeden Freitag. Unsere Kinder freuen sich schon darauf, dass alles sauber ist, wenn sie von der Schule kommen.',
              service: 'Wöchentliche Gründlichreinigung'
    },
    {
      name: 'Thomas B.',
      location: 'Basel',
      rating: 5,
      text: 'Als Geschäftsführer habe ich keine Zeit für den Haushalt. Das L&N Team macht das perfekt für mich.',
      service: '14-täglich Basis Reinigung'
    },
    {
      name: 'Sandra M.',
      location: 'Bern',
      rating: 5,
      text: 'Nach der Geburt unseres Babys war die regelmäßige Reinigung ein Segen. Kann ich nur empfehlen!',
      service: 'Wöchentliche Luxus Reinigung'
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
                <span className="text-brand-gold">Nettoyage de bureaux</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-8">
                <Building2 className="w-5 h-5 mr-2" />
                Environnement professionnel
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8 leading-tight">
                Privat Reinigung
                <span className="block text-brand-gold">für Ihr Zuhause</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/90 font-lato leading-relaxed mb-10">
                Schenken Sie sich mehr Lebenszeit. Während wir Ihr Zuhause pflegen, 
                können Sie das tun, was Ihnen wirklich wichtig ist.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-white/80 font-lato text-sm mb-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  <span>Vertrauenswürdig</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-gold" />
                  <span>4.9/5 Sterne</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                  <span>Flexible Termine</span>
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
                  src="/images/hero.jpg"
                  alt="Regelmäßige Hausreinigung"
                  fill
                  className="object-cover"
                />
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-brand-gold text-brand-dark-brown font-bold font-lato px-6 py-3 rounded-full shadow-lg">
                  ab CHF 80
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Warum unsere <span className="text-brand-gold">Kunden uns lieben</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Mehr als nur Reinigung – wir schenken Ihnen Zeit und Lebensqualität.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center bg-brand-cream rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-brand-gold" />
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

      {/* Packages Section */}
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
              Wählen Sie Ihr <span className="text-brand-gold">Reinigungspaket</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Flexible Pakete für jeden Bedarf. Alle Preise inklusive Reinigungsprodukte.
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
                    <div className="text-4xl font-bold font-playfair text-brand-dark-brown mb-2">
                      CHF {pkg.price}
                    </div>
                    <div className="text-brand-dark-brown/60 font-lato text-sm mb-1">
                      {pkg.frequency}
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

      {/* Frequency Section */}
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
              Wie oft sollen wir <span className="text-brand-gold">zu Ihnen kommen?</span>
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              Je regelmäßiger der Service, desto größer Ihr Rabatt. Aber auch ohne Vertrag verfügbar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frequencies.map((freq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-brand-cream rounded-2xl p-6 text-center border-2 transition-all duration-300 hover:shadow-lg ${
                  freq.popular 
                    ? 'border-brand-gold bg-brand-gold/5' 
                    : 'border-brand-dark-brown/10 hover:border-brand-gold/30'
                }`}
              >
                {freq.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-gold text-brand-dark-brown font-bold font-lato px-4 py-1 rounded-full text-xs">
                      Beliebt
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-2">
                  {freq.title}
                </h3>
                
                {freq.discount !== '0%' && (
                  <div className="text-2xl font-bold text-brand-gold font-playfair mb-2">
                    -{freq.discount}
                  </div>
                )}
                
                <p className="text-brand-dark-brown/70 font-lato text-sm">
                  {freq.description}
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
              Glückliche <span className="text-brand-gold">Familien</span> erzählen
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
              Bereit für mehr <span className="text-brand-gold">Lebensqualität?</span>
            </h2>
            <p className="text-xl text-white/90 font-lato mb-10 leading-relaxed">
              Starten Sie noch heute und gewinnen Sie wertvolle Zeit für das, was wirklich zählt.
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
              ✓ Kostenlose Beratung ✓ Flexible Termine ✓ Vertrauensvolle Mitarbeiter
            </p>
          </motion.div>
        </div>
      </section>



      {/* Section Services inclus */}
      <section className="py-12 md:py-16 bg-brand-cream">
        {/* Add your existing content here */}
      </section>
    </div>
  );
} 