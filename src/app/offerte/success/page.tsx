import Link from 'next/link';
import { CheckCircle, Mail, Phone, Home, ShieldCheck } from 'lucide-react';
import TranslatableText from '../../../components/TranslatableText';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-max px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-brand-dark-brown mb-6">
              <TranslatableText text="Vielen Dank für " />
              <TranslatableText text="Ihre Anfrage!" className="text-brand-gold" />
            </h1>

            {/* Subtitle */}
            <TranslatableText 
              text="Ihre Offerteanfrage wurde erfolgreich übermittelt. Wir haben Ihnen eine Bestätigung per E-Mail gesendet."
              as="p"
              className="text-lg lg:text-xl text-brand-dark-brown/70 font-lato leading-relaxed mb-12"
            />

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-brand-gold/20">
                <Mail className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold font-playfair text-brand-dark-brown mb-2">
                  <TranslatableText text="E-Mail Bestätigung" />
                </h3>
                <TranslatableText 
                  text="Sie erhalten in Kürze eine Bestätigung mit allen Details Ihrer Anfrage."
                  as="p"
                  className="text-brand-dark-brown/70 font-lato text-sm"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-brand-gold/20">
                <Phone className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold font-playfair text-brand-dark-brown mb-2">
                  <TranslatableText text="Persönlicher Kontakt" />
                </h3>
                <TranslatableText 
                  text="Wir melden uns innerhalb von 24 Stunden bei Ihnen für ein persönliches Gespräch."
                  as="p"
                  className="text-brand-dark-brown/70 font-lato text-sm"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-brand-gold/20">
                <Home className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-lg font-bold font-playfair text-brand-dark-brown mb-2">
                  <TranslatableText text="Vor-Ort Besichtigung" />
                </h3>
                <TranslatableText 
                  text="Falls nötig, vereinbaren wir einen kostenlosen Besichtigungstermin vor Ort."
                  as="p"
                  className="text-brand-dark-brown/70 font-lato text-sm"
                />
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-brand-dark-brown rounded-2xl p-8 lg:p-12 mb-12">
              <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-6">
                <ShieldCheck className="w-5 h-5 mr-2" />
                <TranslatableText text="Ihre nächsten Schritte" />
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold font-playfair text-white mb-6">
                <TranslatableText text="Wie geht es " />
                <TranslatableText text="jetzt weiter?" className="text-brand-gold" />
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 font-bold text-brand-dark-brown">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold font-lato text-white mb-2">
                        <TranslatableText text="Prüfung Ihrer Anfrage" />
                      </h3>
                      <TranslatableText 
                        text="Wir prüfen Ihre Anfrage sorgfältig und bereiten ein maßgeschneidertes Angebot vor."
                        as="p"
                        className="text-white/80 font-lato text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 font-bold text-brand-dark-brown">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold font-lato text-white mb-2">
                        <TranslatableText text="Persönlicher Kontakt" />
                      </h3>
                      <TranslatableText 
                        text="Unser Team meldet sich innerhalb von 24 Stunden telefonisch bei Ihnen."
                        as="p"
                        className="text-white/80 font-lato text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 font-bold text-brand-dark-brown">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold font-lato text-white mb-2">
                        <TranslatableText text="Detaillierte Offerte" />
                      </h3>
                      <TranslatableText 
                        text="Sie erhalten eine transparente, detaillierte Offerte mit allen Leistungen und Preisen."
                        as="p"
                        className="text-white/80 font-lato text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 font-bold text-brand-dark-brown">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold font-lato text-white mb-2">
                        <TranslatableText text="Terminvereinbarung" />
                      </h3>
                      <TranslatableText 
                        text="Bei Zusage vereinbaren wir den optimalen Termin für Ihre Reinigung."
                        as="p"
                        className="text-white/80 font-lato text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-2xl font-bold font-playfair text-brand-dark-brown mb-6">
                <TranslatableText text="Haben Sie noch " />
                <TranslatableText text="Fragen?" className="text-brand-gold" />
              </h2>
              <TranslatableText 
                text="Zögern Sie nicht, uns direkt zu kontaktieren. Wir sind gerne für Sie da!"
                as="p"
                className="text-brand-dark-brown/70 font-lato mb-6"
              />
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+41761234567" className="flex items-center justify-center space-x-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-semibold font-lato px-6 py-3 rounded-full transition-all">
                  <Phone className="w-5 h-5" />
                  <span>+41 76 123 45 67</span>
                </a>
                <a href="mailto:mikaleclerc5@gmail.com" className="flex items-center justify-center space-x-3 border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-brown font-semibold font-lato px-6 py-3 rounded-full transition-all">
                  <Mail className="w-5 h-5" />
                  <span>mikaleclerc5@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <TranslatableText text="Zurück zur Startseite" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-brown font-semibold font-lato px-8 py-4 rounded-full transition-all duration-300">
                  <TranslatableText text="Unsere Services entdecken" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 