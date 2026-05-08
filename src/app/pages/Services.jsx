import React from 'react';
import { motion } from 'motion/react';
import { ContactSection, Container } from '../components/contact-section';
import { RotationCardSection } from '../components/rotation-card-section';
import { RotationalContainer } from '../components/rotation-card-section';
import { BlogSection } from '../components/blog-section';
import { FooterSection } from '../components/footer-section';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import serviceHero from "../../assets/serviceHero.jpg"
import { ContainerServices } from '../components/features-section';
import { NewsletterSection } from '../components/newsletter-section';
import {servicesData} from '../../lib/servicesData'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback src={serviceHero} alt="Background" className="size-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="max-w-[1260px] mx-auto px-6 flex flex-col items-center text-center gap-8 md:gap-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="flex flex-col">
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-white/40 via-white to-white font-['Geist'] font-medium text-[40px] sm:text-[30px] md:text-[60px] leading-[1.1] tracking-[-0.4px]">
              Engineering smarter operations,
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-white/40 via-white to-white font-['Playfair_Display'] italic font-normal text-[40px] sm:text-[30px] md:text-[65px] leading-[1.1] tracking-[-2px] md:tracking-[-4px]">
              through connected intelligence.
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="font-['Geist'] font-normal text-[12px] md:text-[14px] text-white/80 leading-[1.6] text-center uppercase max-w-[800px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Flowtech delivers advanced solutions across manufacturing intelligence, energy monitoring, and pipeline safety—enabling real-time visibility, predictive insights, and optimized performance across industrial ecosystems.
        </motion.p>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="w-full flex flex-col">
        <HeroSection />

       <div className="w-full flex justify-center pt-20 md:pt-32 px-6 md:px-8">
      <div className="max-w-[1260px] w-full flex flex-col gap-20 md:gap-32 items-center justify-center relative" data-name="Features">
              <ContainerServices services={servicesData} />
              <Container />
              {/* <RotationCardSection /> */}
              <RotationalContainer/>
              <NewsletterSection />
              <FooterSection />
              </div>
 </div>
    </div>
  );
};

export default Services;