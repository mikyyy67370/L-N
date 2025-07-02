'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLang, setCurrentLang } = useLanguage();

  // Detect scroll to add background to sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Startseite', href: '/', de: 'Startseite' },
    { label: 'Services', href: '/services', de: 'Services' },
    { label: 'Vorher/Nachher', href: '/avant-apres', de: 'Vorher/Nachher' },
    { label: 'Kontakt', href: '/offerte', de: 'Kontakt' },
  ];

  const languages = ['de', 'fr', 'en'];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-brand-gold/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 lg:px-8 py-4 lg:py-5">
        
                  {/* Logo L&N */}
        <Link href="/" className="flex items-center space-x-3 hover-lift">
          <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-lg overflow-hidden transition-all duration-300 ${
            isScrolled ? 'bg-brand-cream' : 'bg-white/90'
          }`}>
            <Image 
              src="/images/logo-ln.png" 
              alt="L&N Reinigung" 
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl lg:text-2xl font-bold font-playfair tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-brand-dark-brown' : 'text-white drop-shadow-lg'
            }`}>
              L&N Reinigung
            </span>
            <span className={`text-xs font-lato font-medium tracking-wider transition-colors duration-300 ${
              isScrolled ? 'text-brand-gold' : 'text-brand-gold drop-shadow-sm'
            }`}>
              SWISS QUALITY
            </span>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-lato font-semibold text-base transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-brand-dark-brown hover:text-brand-gold' 
                  : 'text-white hover:text-brand-gold drop-shadow-lg'
              }`}
            >
              {currentLang === 'de' ? item.de : item.de}
            </Link>
          ))}

          {/* Language Selector */}
          <div className="relative group">
            <button className={`flex items-center space-x-1 font-lato font-medium text-sm transition-colors duration-300 ${
              isScrolled ? 'text-brand-dark-brown' : 'text-white'
            }`}>
              <Globe size={16} />
              <span>{currentLang.toUpperCase()}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-brand-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`block w-full px-4 py-2 text-left font-lato text-sm transition-colors ${
                    currentLang === lang 
                      ? 'bg-brand-gold text-white' 
                      : 'text-brand-dark-brown hover:bg-brand-cream'
                  } ${lang === languages[0] ? 'rounded-t-lg' : ''} ${lang === languages[languages.length - 1] ? 'rounded-b-lg' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/offerte" className="ml-4">
            <button className="group relative bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato px-8 py-3 rounded-full shadow-lg border border-brand-gold/40 transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span className="relative z-10">
                Jetzt Offerte erhalten
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-gold/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </div>

        {/* Menu Mobile Button */}
        <button
          className={`lg:hidden p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
            isScrolled 
              ? 'bg-brand-cream hover:bg-brand-gold/10' 
              : 'bg-white/10 hover:bg-brand-gold/10'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-brand-dark-brown' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-brand-dark-brown' : 'text-white'} />
          )}
        </button>
      </nav>

                {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-brand-gold/20 shadow-xl animate-slide-up">
          <nav className="container-max flex flex-col space-y-1 py-6 px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-brand-dark-brown hover:text-brand-gold font-lato font-semibold text-lg px-4 py-4 rounded-lg transition-all duration-300 hover:bg-brand-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentLang === 'de' ? item.de : item.de}
              </Link>
            ))}

            {/* Language Selector Mobile */}
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-brand-dark-brown font-lato font-medium">Sprache:</span>
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 rounded-lg font-lato text-sm transition-all duration-300 ${
                      currentLang === lang 
                        ? 'bg-brand-gold text-white' 
                        : 'bg-brand-cream text-brand-dark-brown hover:bg-brand-gold/20'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Mobile */}
            <Link href="/offerte" className="mt-4">
              <button 
                className="w-full text-center bg-brand-gold hover:bg-brand-gold/90 text-brand-dark-brown font-bold font-lato px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Jetzt Offerte erhalten
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 