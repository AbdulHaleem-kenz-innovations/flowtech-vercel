import React from 'react';
import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { BrandSection } from '../components/brand-section';
import { IntroducingSection } from '../components/introducing-section';
import { FeaturesSection } from '../components/features-section';
import { FunFactsSection } from '../components/fun-facts-section';
import { WorkSection } from '../components/work-section';
import { CtaSection } from '../components/cta-section';
import { OurProcessSection } from '../components/our-process-section';
import { EcosystemSection } from '../components/ecosystem-section';
import { TestimonialSection } from '../components/testimonial-section';
import { HeroTestimonialSection } from '../components/hero-testimonial-section';
import { TeamSection } from '../components/team-section';
import { BlogSection } from '../components/blog-section';
import { ContactSection } from '../components/contact-section';
import { RotationCardSection } from '../components/rotation-card-section';
import { EarlyAccessSection } from '../components/early-access-section';
import { FooterSection } from '../components/footer-section';
import { NewsletterSection } from '../components/newsletter-section';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BrandSection />
      <IntroducingSection />
      <FeaturesSection />
      <FunFactsSection />
      <WorkSection />
      <CtaSection />
      <OurProcessSection />
      <EcosystemSection />
      <TestimonialSection />
      <HeroTestimonialSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <RotationCardSection />
      {/* <EarlyAccessSection /> */}
      <NewsletterSection/>
      <FooterSection />
    </>
  );
};
