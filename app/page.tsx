"use client";
import dynamic from 'next/dynamic';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SoftwareOutsourcing from '../components/SoftwareOutsourcing';
import ProductSection from '../components/ProductSection';
import Faq from '../components/Faq';
import MarqueeSection from '../components/MarqueeSection.jsx';
import FeaturedInsights from '../components/FeaturedInsights';
import Testimonials from '../components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '../components/Footer';
import Content from '../components/Content.jsx';
import { use } from 'react';




export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SoftwareOutsourcing />
      <ProductSection />
      <Content />
      
      <Faq />
      <MarqueeSection />
      <FeaturedInsights />
      
      <Testimonials />
      <ContactSection />
      
      <Footer />
    </>
  );
}