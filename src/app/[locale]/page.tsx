import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ExperienceSection from '@/components/ExperienceSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEOHead />
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ExperienceSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 