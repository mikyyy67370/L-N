import Image from 'next/image';
import { Star, MapPin, Users, ShieldCheck, Award, Clock } from 'lucide-react';
import TranslatableText from './TranslatableText';

export default function ExperienceSection() {
  const stats = [
    {
      icon: Users,
      number: '650+',
      label: 'Zufriedene Kunden',
      description: 'Privat- und Geschäftskunden in Zürich & Umgebung'
    },
    {
      icon: Award,
      number: '5+',
      label: 'Jahre Erfahrung',
      description: 'In der professionellen Reinigungsbranche'
    },
    {
      icon: ShieldCheck,
      number: '100%',
      label: 'Zufriedenheitsgarantie',
      description: 'Abgabegarantie bei Endreinigung'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Notfall-Service',
      description: 'Für dringende Fälle in Zürich & Umgebung'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-brand-dark-brown">
      <div className="container-max px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-brand-gold/20 text-brand-gold font-semibold font-lato px-6 py-3 rounded-full text-sm mb-6">
            <ShieldCheck className="w-5 h-5 mr-2" />
            <span>5 Jahre Erfahrung – Schweizer Qualität</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6">
            Unsere Erfahrung für Ihre Sauberkeit
          </h2>
          <p className="text-lg lg:text-xl text-white/80 font-lato max-w-3xl mx-auto leading-relaxed">
            Seit über 5 Jahren vertrauen Familien, Unternehmen und Verwaltungen in Zürich und Umgebung auf unsere professionelle Reinigung. Unsere Erfolgsbilanz spricht für sich – testen Sie uns!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-brand-dark-brown" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold font-playfair text-brand-gold mb-2">{stat.number}</h3>
              <div className="text-xl lg:text-2xl font-bold font-playfair text-white mb-2">
                {stat.label}
              </div>
              <p className="text-white/70 font-lato">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 lg:mt-24">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-brand-gold/20">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-white mb-4">
                Warum Kunden uns vertrauen
              </h3>
              <p className="text-white/80 font-lato text-lg">
                Wir sind stolz darauf, dass unsere Kunden uns weiterempfehlen und immer wieder zu uns zurückkehren. Qualität, Zuverlässigkeit und Transparenz stehen bei uns an erster Stelle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <ShieldCheck className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h4 className="text-lg font-bold font-playfair text-white mb-2">
                  Zertifizierte Qualität
                </h4>
                <p className="text-white/70 font-lato text-sm">
                  ISO-zertifiziert und vollständig versichert für Ihren Schutz und Ihre Sicherheit.
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h4 className="text-lg font-bold font-playfair text-white mb-2">
                  Geschultes Personal
                </h4>
                <p className="text-white/70 font-lato text-sm">
                  Alle unsere Mitarbeiter sind professionell geschult, freundlich und vertrauenswürdig.
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h4 className="text-lg font-bold font-playfair text-white mb-2">
                  Ausgezeichneter Service
                </h4>
                <p className="text-white/70 font-lato text-sm">
                  Mehrfach ausgezeichnet für exzellenten Kundenservice und Zuverlässigkeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 