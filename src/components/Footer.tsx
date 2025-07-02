import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Star } from 'lucide-react';
import TranslatableText from './TranslatableText';

export default function Footer() {
  return (
    <footer className="bg-brand-dark-brown text-white py-16 lg:py-20">
      <div className="container-max px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-brand-dark-brown" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-playfair text-brand-gold">L&N Reinigung</h3>
                <TranslatableText 
                  text="Schweizer Qualität"
                  className="text-sm font-lato text-brand-gold/80"
                />
              </div>
            </div>
            <TranslatableText 
              text="Professionelle Reinigungsdienstleistungen in der ganzen Schweiz. Wir sorgen für makellose Sauberkeit in Ihrem Zuhause und Büro – mit Schweizer Präzision und Zuverlässigkeit."
              as="p"
              className="text-white/80 font-lato leading-relaxed mb-6"
            />
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
                <span className="text-white/80 text-sm font-lato ml-2">5.0</span>
              </div>
              <div className="text-brand-gold text-sm font-lato">
                <TranslatableText text="650+ zufriedene Kunden" />
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs font-bold font-lato">
                <TranslatableText text="ISO Zertifiziert" />
              </div>
              <div className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs font-bold font-lato">
                <TranslatableText text="Vollversichert" />
              </div>
              <div className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full text-xs font-bold font-lato">
                <TranslatableText text="Umweltfreundlich" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-playfair text-brand-gold mb-6">
              <TranslatableText text="Unsere Services" />
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/private-cleaning" className="text-white/80 hover:text-brand-gold transition-colors font-lato">
                  <TranslatableText text="Haushaltsreinigung" />
                </Link>
              </li>
              <li>
                <Link href="/services/office-cleaning" className="text-white/80 hover:text-brand-gold transition-colors font-lato">
                  <TranslatableText text="Büroreinigung" />
                </Link>
              </li>
              <li>
                <Link href="/services/end-of-tenancy" className="text-white/80 hover:text-brand-gold transition-colors font-lato">
                  <TranslatableText text="Endreinigung" />
                </Link>
              </li>
              <li>
                <Link href="/services/sofa-cleaning" className="text-white/80 hover:text-brand-gold transition-colors font-lato">
                  <TranslatableText text="Polsterreinigung" />
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-cleaning" className="text-white/80 hover:text-brand-gold transition-colors font-lato">
                  <TranslatableText text="Teppichreinigung" />
                </Link>
              </li>
              <li>
                <Link href="/services/car-interior-cleaning" className="text-white/80 hover:text-brand-gold transition-colors font-lato">
                  <TranslatableText text="Auto-Innenreinigung" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-playfair text-brand-gold mb-6">
              <TranslatableText text="Kontakt" />
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <div className="text-white/80 font-lato text-sm">
                  <TranslatableText text="Schweizweit tätig" />
                  <br />
                  <TranslatableText text="Hauptsitz: Zürich" />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <a href="tel:+41761234567" className="text-white/80 hover:text-brand-gold transition-colors font-lato text-sm">
                  +41 76 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <a href="mailto:Inreinigunggmbh@gmail.com" className="text-white/80 hover:text-brand-gold transition-colors font-lato text-sm">
                                      Inreinigunggmbh@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <div className="text-white/80 font-lato text-sm">
                  <TranslatableText text="Mo-Fr: 08:00-18:00" />
                  <br />
                  <TranslatableText text="Sa: 09:00-16:00" />
                  <br />
                  <TranslatableText text="Notfall: 24/7" />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/offerte" className="block">
              <button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato px-4 sm:px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl text-sm sm:text-base">
                Jetzt Offerte erhalten
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 font-lato text-sm">
              © 2024 L&N Reinigung. <TranslatableText text="Alle Rechte vorbehalten." />
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-brand-gold transition-colors font-lato">
                <TranslatableText text="Datenschutz" />
              </Link>
              <Link href="/legal" className="text-white/60 hover:text-brand-gold transition-colors font-lato">
                <TranslatableText text="Impressum" />
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-brand-gold transition-colors font-lato">
                <TranslatableText text="AGB" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 