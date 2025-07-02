import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import TranslatableText from './TranslatableText';

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="contact">
      <div className="container-max px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-6">
            <ShieldCheck className="w-5 h-5 mr-2" />
            <span>Schweizer Service & persönliche Beratung</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-brand-dark-brown mb-6">
            Kontakt für Reinigung in Zürich & Schweiz
          </h2>
          <p className="text-lg lg:text-xl text-brand-dark-brown/70 font-lato max-w-3xl mx-auto leading-relaxed">
            Fordern Sie jetzt Ihr kostenloses Angebot an! Unser Team in Zürich berät Sie persönlich, schnell und unverbindlich zu allen Reinigungsdienstleistungen – für Privat, Büro und Gewerbe. Wir antworten werktags innerhalb von 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-brand-cream rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold font-playfair text-brand-dark-brown mb-6">
                Kontaktinformationen & Standort
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-dark-brown" />
                  </div>
                  <div>
                    <h4 className="font-bold font-lato text-brand-dark-brown mb-1">
                      Adresse
                    </h4>
                    <p className="text-brand-dark-brown/70 font-lato">
                      Schweizweit tätig<br />
                      Hauptsitz: Zürich, Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-dark-brown" />
                  </div>
                  <div>
                    <h4 className="font-bold font-lato text-brand-dark-brown mb-1">
                      Telefon
                    </h4>
                    <a href="tel:+41761234567" className="text-brand-dark-brown/70 hover:text-brand-gold transition-colors font-lato">
                      +41 76 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-dark-brown" />
                  </div>
                  <div>
                    <h4 className="font-bold font-lato text-brand-dark-brown mb-1">
                      E-Mail
                    </h4>
                    <a href="mailto:Inreinigunggmbh@gmail.com" className="text-brand-dark-brown/70 hover:text-brand-gold transition-colors font-lato">
                                              Inreinigunggmbh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-dark-brown" />
                  </div>
                  <div>
                    <h4 className="font-bold font-lato text-brand-dark-brown mb-1">
                      Öffnungszeiten
                    </h4>
                    <div className="text-brand-dark-brown/70 font-lato">
                      Montag - Freitag: 08:00 - 18:00<br />
                      Samstag: 09:00 - 16:00<br />
                      Notfall-Service: 24/7 verfügbar
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-brand-gold/20 rounded-2xl p-6 text-center">
                <ShieldCheck className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h4 className="font-bold font-playfair text-brand-dark-brown mb-2">
                  Zertifiziert & Versichert
                </h4>
                <p className="text-brand-dark-brown/70 font-lato text-sm">
                  Vollständig lizenziert und versichert für Ihren Schutz und Seelenruhe.
                </p>
              </div>
              <div className="bg-white border-2 border-brand-gold/20 rounded-2xl p-6 text-center">
                <Clock className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h4 className="font-bold font-playfair text-brand-dark-brown mb-2">
                  Schnelle Antwort & 24/7 Notfall-Service
                </h4>
                <p className="text-brand-dark-brown/70 font-lato text-sm">
                  Wir antworten werktags innerhalb von 24 Stunden auf alle Anfragen. Für Notfälle sind wir rund um die Uhr erreichbar.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-dark-brown rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold font-playfair text-white mb-6">
              Jetzt kostenloses Angebot anfordern
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-lato font-medium mb-2">
                    Vorname
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-brand-gold/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                    placeholder="Max"
                  />
                </div>
                <div>
                  <label className="block text-white font-lato font-medium mb-2">
                    Nachname
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-brand-gold/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                    placeholder="Mustermann"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-lato font-medium mb-2">
                  E-Mail Adresse
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-brand-gold/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="max.mustermann@email.ch"
                />
              </div>
              
              <div>
                <label className="block text-white font-lato font-medium mb-2">
                  Telefon (optional)
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-brand-gold/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="+41 79 123 45 67"
                />
              </div>
              
              <div>
                <label className="block text-white font-lato font-medium mb-2">
                  Nachricht
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-brand-gold/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  placeholder="Beschreiben Sie Ihre Reinigungsanforderungen..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 text-base sm:text-lg"
              >
                Angebot anfordern
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 