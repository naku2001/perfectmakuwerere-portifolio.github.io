import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import FeaturedWritingsSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <FeaturedWritingsSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Index;
