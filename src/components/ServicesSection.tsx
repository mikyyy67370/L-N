import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import TranslatableText from './TranslatableText';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Büroreinigung Zürich & Schweiz',
      description: 'Professionelle Büroreinigung für Unternehmen in Zürich und der ganzen Schweiz. Saubere Arbeitsplätze, motivierte Teams, flexible Zeiten.',
      image: '/images/buero.jpg',
      category: 'Büroreinigung',
      link: '/services/office-cleaning'
    },
    {
      id: 2,
      title: 'Haushaltsreinigung & Wohnungsreinigung', 
      description: 'Zuverlässige Haushaltsreinigung und Wohnungsreinigung mit Abgabegarantie. Für Familien, Singles und Senioren in Zürich und Umgebung.',
      image: '/images/hero.jpg',
      category: 'Haushalt',
      link: '/services/private-cleaning'
    },
    {
      id: 3,
      title: 'Sofa- & Polsterreinigung',
      description: 'Tiefenreinigung für Sofas, Sessel und Polstermöbel. Entfernt Flecken, Milben und Gerüche – für ein gesundes Zuhause.',
      image: '/images/endreinigung.jpg',
      category: 'Polster',
      link: '/services/sofa-cleaning'
    },
    {
      id: 4,
      title: 'Möbel- & Spezialreinigung',
      description: 'Schonende Reinigung für Möbel, Teppiche und Spezialflächen. Werterhalt und Hygiene für Ihr Interieur.',
      image: '/images/buero.jpg',
      category: 'Spezial',
      link: '/services/furniture-cleaning'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand-cream" id="services">
      <div className="container-max px-6 lg:px-8">
        {/* H2 SEO section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-6">
            <span>Unsere Reinigungsservices in Zürich & Schweiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-brand-dark-brown mb-6">
            Professionelle Reinigung für Privat & Gewerbe
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <ShieldCheck className="w-6 h-6 text-brand-gold" />
            <span className="text-brand-gold font-semibold font-lato text-lg">
              100% Abgabegarantie – Flexibel – Transparent
            </span>
          </div>
          <p className="text-lg lg:text-xl text-brand-dark-brown/70 font-lato max-w-3xl mx-auto leading-relaxed">
            Wir bieten Ihnen ein breites Spektrum an Reinigungsdienstleistungen: Endreinigung, Büroreinigung, Umzugsreinigung, Teppich- und Polsterreinigung, Fensterreinigung und mehr. Für Privatkunden, Unternehmen, Verwaltungen und Immobilienbesitzer in Zürich, Zug, Luzern, Bern, Basel und der ganzen Schweiz.
          </p>
        </div>
        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service) => (
            <div key={service.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-brand-gold/30 transition-all duration-500 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-brown/70 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-brand-gold text-brand-dark-brown text-xs font-bold font-lato px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="flex items-center bg-white/90 text-brand-gold font-bold font-lato text-xs px-2 py-1 rounded-full shadow border border-brand-gold/30">
                    <ShieldCheck className="w-3 h-3 mr-1 text-brand-gold" /> 
                    Swiss Quality
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-brand-gold" />
                </div>
              </div>
              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold font-playfair text-brand-dark-brown mb-3 group-hover:text-brand-gold transition-colors flex items-center gap-2">
                  {service.title}
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                </h3>
                <p className="text-brand-dark-brown/70 font-lato leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
                <div className="mt-4 inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-3 py-1 rounded-full text-xs">
                  <ShieldCheck className="w-3 h-3 mr-1 text-brand-gold" /> 
                  100% Zufriedenheitsgarantie
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-brand-dark-brown/60 font-lato">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></div>
                    Individuell & persönlich
                  </div>
                  <div className="flex items-center text-sm text-brand-dark-brown/60 font-lato">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></div>
                    Verlässlich & diskret
                  </div>
                  <div className="flex items-center text-sm text-brand-dark-brown/60 font-lato">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></div>
                    Mit Herz & Erfahrung
                  </div>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={service.link}>
                    <button className="w-full bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-brand-dark-brown font-semibold font-lato py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                      Mehr erfahren & Angebot sichern
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call-to-action en bas */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl max-w-3xl mx-auto border-2 border-brand-gold/20">
            <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-6">
              <ShieldCheck className="w-5 h-5 mr-2 text-brand-gold" /> 
              Kostenlose Beratung – persönlich & unverbindlich
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-brand-dark-brown mb-6">
              Sie wünschen sich mehr Lebensqualität?
            </h3>
            <p className="text-brand-dark-brown/70 font-lato text-lg mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Zuhause oder Ihr Unternehmen noch angenehmer machen können. Wir beraten Sie ehrlich, transparent und mit Herz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-12">
              <Link href="/offerte" className="w-full sm:w-auto">
                <button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato px-6 sm:px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-base sm:text-lg">
                  Jetzt Offerte erhalten
                </button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-brown font-semibold font-lato px-6 sm:px-8 py-3 rounded-full transition-all duration-300 text-base sm:text-lg">
                  Alle Services entdecken
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 