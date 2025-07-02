'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Home, 
  Building2, 
  Car, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Clock,
  Award,
  Heart
} from 'lucide-react';
import TranslatableText from '../../components/TranslatableText';

export default function ServicesPage() {
  const services = [
    {
      id: 'end-of-tenancy',
      name: 'Endreinigung',
      description: 'Ihr stressfreier Umzug beginnt hier. Wir sorgen dafür, dass Sie Ihre Kaution zurückbekommen und entspannt in Ihr neues Zuhause ziehen können.',
      detailedDescription: 'Umziehen ist emotional genug. Lassen Sie uns die Sorge um die Endreinigung übernehmen. Unsere Experten kennen jeden Vermieter-Trick und sorgen dafür, dass Ihre alte Wohnung makellos übergeben wird.',
      basePrice: 350,
      category: 'residential',
      icon: Home,
      image: '/images/endreinigung.jpg',
      features: [
        'Kautionsrückgabe garantiert',
        'Vermieter-zugelassene Checkliste',
        'Nachbesserung kostenlos',
        'Umzugs-Koordination möglich'
      ],
      benefits: [
        'Kein Stress beim Auszug',
        'Mehr Zeit für den Neuanfang',
        'Finanzielle Sicherheit',
        'Professioneller Abschluss'
      ]
    },
    {
      id: 'private-cleaning',
      name: 'Privat Reinigung',
      description: 'Schenken Sie sich mehr Lebenszeit. Während wir Ihr Zuhause pflegen, können Sie das tun, was Ihnen wirklich wichtig ist – Zeit mit der Familie verbringen.',
      detailedDescription: 'Stellen Sie sich vor: Sie kommen nach Hause und alles glänzt. Kein schlechtes Gewissen, keine To-Do-Liste. Nur Sie, Ihre Familie und ein perfekt gepflegtes Zuhause.',
      basePrice: 80,
      category: 'residential',
      icon: Heart,
      image: '/images/hero.jpg',
      features: [
        'Flexible Termine nach Ihren Wünschen',
        'Vertrauensvolle Stammreinigungskraft',
        'Eigene Reinigungsprodukte inklusive',
        'Versicherungsschutz garantiert'
      ],
      benefits: [
        'Mehr Quality Time mit der Familie',
        'Entspanntes Zuhausegefühl',
        'Gesundheit durch Sauberkeit',
        'Weniger Alltagsstress'
      ]
    },
    {
      id: 'carpet-cleaning',
      name: 'Teppichreinigung',
      description: 'Ihre Teppiche erzählen Geschichten. Wir sorgen dafür, dass es nur schöne sind. Für ein Zuhause, in dem Sie sich rundum wohlfühlen.',
      detailedDescription: 'Flecken verschwinden, Farben erstrahlen neu, Allergene gehören der Vergangenheit an. Ihre Teppiche werden wieder zu dem, was sie sein sollen: weiche Wohlfühloasen.',
      basePrice: 150,
      category: 'residential',
      icon: Sparkles,
      image: '/images/buero.jpg',
      features: [
        'Schonende Tiefenreinigung',
        'Allergen- und Milben-Entfernung',
        'Fleckenschutz-Behandlung',
        'Express-Trocknung verfügbar'
      ],
      benefits: [
        'Gesündere Raumluft',
        'Längere Teppich-Lebensdauer',
        'Neues Wohngefühl',
        'Allergie-Linderung'
      ]
    },
    {
      id: 'sofa-cleaning',
      name: 'Sofas reinigen',
      description: 'Ihr Lieblingsplatz verdient Liebe. Wir hauchen Ihren Polstermöbeln neues Leben ein – für gemütliche Abende ohne Sorgen.',
      detailedDescription: 'Das Sofa ist der Mittelpunkt Ihres Zuhauses. Hier entspannen Sie, hier lachen Sie mit Freunden. Wir sorgen dafür, dass es immer einladend und hygienisch sauber bleibt.',
      basePrice: 180,
      category: 'residential',
      icon: Home,
      image: '/images/endreinigung.jpg',
      features: [
        'Schonende Polsterreinigung',
        'Geruchsneutralisierung',
        'Farbauffrischung',
        'Imprägnierung gegen neue Flecken'
      ],
      benefits: [
        'Wie neu gekauft feeling',
        'Länger haltbare Möbel',
        'Hygienische Sauberkeit',
        'Wertsteigerung Ihrer Einrichtung'
      ]
    },
    {
      id: 'terrace-cleaning',
      name: 'Terrassenreinigung',
      description: 'Verwandeln Sie Ihren Außenbereich in eine Oase. Für Sommerabende, die unvergesslich werden, und Momente, die das Leben schöner machen.',
      detailedDescription: 'Ihre Terrasse soll ein Ort der Freude sein. Wo Grillabende stattfinden, Kinder spielen und Sie den Sonnenuntergang genießen. Wir machen sie bereit dafür.',
      basePrice: 200,
      category: 'specialized',
      icon: Sparkles,
      image: '/images/buero.jpg',
      features: [
        'Hochdruck-Reinigung',
        'Moos- und Algen-Entfernung',
        'Fugen-Säuberung',
        'Schutzbehandlung gegen Wetter'
      ],
      benefits: [
        'Sichere, rutschfeste Oberflächen',
        'Einladender Außenbereich',
        'Weniger Wartungsaufwand',
        'Werterhaltung der Immobilie'
      ]
    },
    {
      id: 'car-interior',
      name: 'Auto-Innenreinigung',
      description: 'Ihr Auto ist mehr als Transport – es ist Ihr mobiles Zuhause. Jeden Morgen sollen Sie gerne einsteigen und sich wohlfühlen.',
      detailedDescription: 'Ob Geschäftstermin oder Familienausflug: In einem sauberen Auto fahren Sie entspannter und kommen besser an. Wir sorgen für das perfekte Fahrgefühl.',
      basePrice: 120,
      category: 'specialized',
      icon: Car,
      image: '/images/hero.jpg',
      features: [
        'Komplett-Innenreinigung',
        'Lederpflege und -schutz',
        'Geruchsbeseitigung',
        'Desinfektion aller Oberflächen'
      ],
      benefits: [
        'Professioneller Auftritt',
        'Werterhaltung des Fahrzeugs',
        'Angenehme Fahratmosphäre',
        'Gesündere Luft im Auto'
      ]
    }
  ];

  const categories = {
    residential: {
      name: 'Zuhause & Wohnen',
      description: 'Für Ihr privates Glück',
      icon: Home,
      color: 'brand-gold'
    },
    specialized: {
      name: 'Spezial Services',
      description: 'Für besondere Ansprüche',
      icon: Star,
      color: 'brand-dark-brown'
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <div className="min-h-screen bg-brand-cream">
      
      {/* Return Button */}
      <div className="container-max px-6 lg:px-8 pt-8">
        <Link href="/">
          <button className="inline-flex items-center text-brand-dark-brown hover:text-brand-gold font-semibold font-lato transition-colors duration-300">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            <TranslatableText text="Zurück zur Startseite" />
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-dark-brown via-brand-dark-brown/95 to-brand-dark-brown/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold via-transparent to-brand-gold" />
        </div>

        <div className="relative z-10 container-max px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-8">
              <Sparkles className="w-5 h-5 mr-2" />
              <TranslatableText text="Alle unsere Services im Überblick" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-8 leading-tight">
              <TranslatableText text="Services, die Ihr Leben " />
              <TranslatableText text="einfacher machen" className="text-brand-gold" />
            </h1>

            {/* Subtitle */}
            <TranslatableText 
              text="Von der ersten Minute an spüren Sie den Unterschied. Schweizer Qualität, 
              die Ihnen mehr Zeit für das schenkt, was wirklich zählt."
              as="p"
              className="text-xl lg:text-2xl text-white/90 font-lato leading-relaxed mb-12"
            />

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold font-playfair text-brand-gold mb-2">6</div>
                <div className="text-white/80 font-lato text-sm">
                  <TranslatableText text="Top Services" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold font-playfair text-brand-gold mb-2">98%</div>
                <div className="text-white/80 font-lato text-sm">
                  <TranslatableText text="Zufriedenheit" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold font-playfair text-brand-gold mb-2">24/7</div>
                <div className="text-white/80 font-lato text-sm">
                  <TranslatableText text="Erreichbar" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold font-playfair text-brand-gold mb-2">0</div>
                <div className="text-white/80 font-lato text-sm">
                  <TranslatableText text="Versteckte Kosten" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {Object.entries(categories).map(([categoryKey, category]) => (
        <section key={categoryKey} className="py-16 lg:py-24">
          <div className="container-max px-6 lg:px-8">
            
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-6">
                <category.icon className="w-5 h-5 mr-2" />
                <TranslatableText text={category.description} />
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-brand-dark-brown mb-4">
                <TranslatableText text={category.name} />
              </h2>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16"
            >
              {services
                .filter(service => service.category === categoryKey)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-brand-gold/30 transition-all duration-500"
                  >
                    {/* Service Image */}
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-brown/80 via-brand-dark-brown/20 to-transparent" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-6 right-6 bg-brand-gold text-brand-dark-brown font-bold font-lato px-4 py-2 rounded-full shadow-lg">
                        <TranslatableText text={`ab CHF ${service.basePrice}`} />
                      </div>

                      {/* Category Icon */}
                      <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-brand-gold" />
                      </div>

                      {/* Service Title on Image */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-white mb-2">
                          <TranslatableText text={service.name} />
                        </h3>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-8 lg:p-10">
                      {/* Description */}
                      <TranslatableText 
                        text={service.description}
                        as="p"
                        className="text-brand-dark-brown/80 font-lato text-lg leading-relaxed mb-6"
                      />

                      {/* Detailed Description */}
                      <TranslatableText 
                        text={service.detailedDescription}
                        as="p"
                        className="text-brand-dark-brown/60 font-lato leading-relaxed mb-8"
                      />

                      {/* Benefits Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Features */}
                        <div>
                          <h4 className="text-lg font-bold font-playfair text-brand-dark-brown mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 text-brand-gold mr-2" />
                            <TranslatableText text="Was wir machen" />
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-brand-dark-brown/70 font-lato">
                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <TranslatableText text={feature} />
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className="text-lg font-bold font-playfair text-brand-dark-brown mb-4 flex items-center">
                            <Heart className="w-5 h-5 text-brand-gold mr-2" />
                            <TranslatableText text="Was Sie gewinnen" />
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start text-sm text-brand-dark-brown/70 font-lato">
                                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <TranslatableText text={benefit} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/offerte" className="flex-1">
                          <button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                            <TranslatableText text="Jetzt Offerte anfordern" />
                          </button>
                        </Link>
                        <Link href={
                          service.id === 'end-of-tenancy' ? '/services/end-of-tenancy' :
                          service.id === 'private-cleaning' ? '/services/private-cleaning' :
                          service.id === 'carpet-cleaning' ? '/services/carpet-cleaning' :
                          service.id === 'sofa-cleaning' ? '/services/sofa-cleaning' :
                          service.id === 'terrace-cleaning' ? '/services/terrace-cleaning' :
                          service.id === 'car-interior' ? '/services/car-interior-cleaning' :
                          '/services'
                        } className="flex-1">
                          <button className="w-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-brown font-semibold font-lato py-3 px-6 rounded-full transition-all duration-300">
                            <TranslatableText text="Mehr Details" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Trust Section */}
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
              <TranslatableText text="Warum L&N die " />
              <TranslatableText text="richtige Wahl" className="text-brand-gold" />
              <TranslatableText text=" ist" />
            </h2>
            <p className="text-lg text-brand-dark-brown/70 font-lato max-w-2xl mx-auto">
              <TranslatableText text="Über 650 glückliche Familien vertrauen uns bereits. Werden auch Sie Teil unserer Community." />
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Versicherter Service',
                description: 'Vollversichert und bonded für Ihren Schutz und Seelenruhe'
              },
              {
                icon: Clock,
                title: 'Pünktlich & Zuverlässig',
                description: 'Wir halten unsere Termine – darauf können Sie sich verlassen'
              },
              {
                icon: Award,
                title: 'Schweizer Qualität',
                description: 'Präzision und Gründlichkeit, die Sie spüren werden'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-brand-cream rounded-2xl"
              >
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-brand-dark-brown mb-4">
                  <TranslatableText text={item.title} />
                </h3>
                <p className="text-brand-dark-brown/70 font-lato">
                  <TranslatableText text={item.description} />
                </p>
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
              <TranslatableText text="Bereit für ein " />
              <TranslatableText text="stressfreies Leben?" className="text-brand-gold" />
            </h2>
            <p className="text-xl text-white/90 font-lato mb-10 leading-relaxed">
              <TranslatableText text="Lassen Sie uns das übernehmen, womit Sie sich nicht beschäftigen möchten. 
              Mehr Zeit für Familie, Hobbys und das, was Ihnen wirklich wichtig ist." />
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/offerte">
                <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  <TranslatableText text="Kostenlose Offerte anfordern" />
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-dark-brown font-semibold font-lato text-lg px-8 py-4 rounded-full transition-all duration-300">
                <TranslatableText text="Beratung vereinbaren" />
              </button>
            </div>
            
            <p className="text-white/70 font-lato text-sm mt-8">
              <TranslatableText text="✓ Kostenlose Beratung ✓ Transparente Preise ✓ Keine Mindestlaufzeit" />
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 