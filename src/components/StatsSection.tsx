import { Users, Star, ShieldCheck, MapPin } from 'lucide-react';
import TranslatableText from './TranslatableText';

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-max px-6 lg:px-8">
        {/* H2 SEO section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-6">
            <ShieldCheck className="w-5 h-5 mr-2" />
            <span>Warum L&N Reinigung die Nr. 1 in Zürich & Schweiz ist</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-brand-dark-brown mb-6">
            Über 650 zufriedene Kunden & Top-Bewertungen
          </h2>
          <p className="text-lg lg:text-xl text-brand-dark-brown/70 font-lato max-w-3xl mx-auto leading-relaxed">
            Unsere Zahlen sprechen für sich: höchste Kundenzufriedenheit, schnelle Reaktionszeiten, keine Beschwerden und echte Schweizer Qualität. Darum vertrauen uns Privatpersonen, Unternehmen und Verwaltungen in der ganzen Schweiz.
          </p>
        </div>
        {/* Grille des statistiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Stat 1 */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-brand-gold/20 flex flex-col items-center text-center hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center justify-center w-20 h-20 bg-brand-gold/20 rounded-full mb-6">
              <Users className="w-10 h-10 text-brand-gold" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-2">3.2K+</h3>
            <div className="text-xl lg:text-2xl font-semibold font-playfair text-brand-dark-brown mb-2">Reinigungen</div>
            <div className="text-sm font-lato text-brand-gold">3200+ saubere Räume in Zürich & Schweiz</div>
          </div>
          {/* Stat 2 */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-brand-gold/20 flex flex-col items-center text-center hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center justify-center w-20 h-20 bg-brand-gold/20 rounded-full mb-6">
              <Star className="w-10 h-10 text-brand-gold" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-2">4.9/5</h3>
            <div className="text-xl lg:text-2xl font-semibold font-playfair text-brand-dark-brown mb-2">Bewertung</div>
            <div className="text-sm font-lato text-brand-gold">Echte Kundenbewertungen, höchste Zufriedenheit</div>
          </div>
          {/* Stat 3 */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-brand-gold/20 flex flex-col items-center text-center hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center justify-center w-20 h-20 bg-brand-gold/20 rounded-full mb-6">
              <ShieldCheck className="w-10 h-10 text-brand-gold" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-2">0</h3>
            <div className="text-xl lg:text-2xl font-semibold font-playfair text-brand-dark-brown mb-2">Beschwerden</div>
            <div className="text-sm font-lato text-brand-gold">Null ungelöste Beschwerden 2024</div>
          </div>
          {/* Stat 4 */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border-2 border-brand-gold/20 flex flex-col items-center text-center hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center justify-center w-20 h-20 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-10 h-10 text-brand-gold" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-dark-brown mb-2">48h</h3>
            <div className="text-xl lg:text-2xl font-semibold font-playfair text-brand-dark-brown mb-2">Reaktionszeit</div>
            <div className="text-sm font-lato text-brand-gold">Garantierte Antwort binnen 48h in Zürich & Schweiz</div>
          </div>
        </div>
        {/* Section Trust Indicators */}
        <div className="mt-20 lg:mt-24 text-center">
          <div className="bg-brand-cream rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-brand-dark-brown mb-6">
              Was uns besonders macht
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-lg font-bold font-playfair text-brand-dark-brown mb-2">
                  Detailverliebte Präzision
                </h4>
                <p className="text-brand-dark-brown/70 font-lato text-sm">
                  Jede Ecke, jede Fläche – bis zur Perfektion
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-lg font-bold font-playfair text-brand-dark-brown mb-2">
                  Ehrliche Beratung
                </h4>
                <p className="text-brand-dark-brown/70 font-lato text-sm">
                  Transparente Preise, keine versteckten Kosten
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-lg font-bold font-playfair text-brand-dark-brown mb-2">
                  Nachhaltige Produkte
                </h4>
                <p className="text-brand-dark-brown/70 font-lato text-sm">
                  Umweltfreundlich und schonend für Ihre Familie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 