import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';
import { NewsletterSection } from '../components/newsletter-section';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

import AibizzImg1 from "../../assets/AI-Bizz-App-1.png";
import AibizzImg2 from "../../assets/Ai-Bizz-App-2.png";
import kenvoiceImg1 from "../../assets/Kenvoice-1.png";
import kenvoiceImg2 from "../../assets/Kenvoice-2.png";
import smartidp1 from "../../assets/Smart-IDP-1.png";
import smartidp2 from "../../assets/Smart-IDP-2.png";


// Badge SVG icons (reused from blog-detail-page)
import { imgDivFramerYVnZo, imgDivFramerFoIvU } from '../../imports/svg-7bw06';
import { ContactSection } from '../components/contact-section';

const partnerImages = {
  kenvoice: { heroImage: kenvoiceImg1, secondImage: kenvoiceImg2 },
  "smart-idp": { heroImage: smartidp1, secondImage: smartidp2 },
  "ai-bizzapp": { heroImage: AibizzImg1, secondImage: AibizzImg2 },
};

const PartnersDetailPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  
  const partnerData = langData[language.toLowerCase()].partners_detail?.[slug];
  const images = partnerImages[slug];
  const partner = partnerData && images ? { ...partnerData, ...images } : null;

  const labels = langData[language.toLowerCase()].partners_detail?.labels || {
    productOverview: "Product Overview",
    keyFeatures: "Key Features",
    useCases: "Use Cases",
    resultsAndImpact: "Results & Impact",
    conclusion: "Conclusion"
  };

  // 404-style fallback
  if (!partner) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 pt-[180px] pb-40">
        <h1 className="font-['Geist'] font-medium text-[48px] text-white">Product not found</h1>
        <p className="font-['Geist'] text-white/50 uppercase text-[14px] tracking-widest">
          The product you're looking for doesn't exist.
        </p>
        <Link
          to="/products"
          className="mt-4 px-8 py-4 rounded-full bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)] border border-white/20 text-white uppercase font-['Geist'] text-[14px] hover:scale-105 transition-all duration-300"
        >
          Back to Products
        </Link>
      </div>
    );
  }
  const isRtl = language === 'AR';

  return (
    <div className="w-full flex flex-col items-center" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* ── HERO HEADER ────────────────────────────────────────── */}
      <section className="pt-[160px] pb-[60px] px-6 text-center max-w-[1260px] w-full flex flex-col items-center gap-8">
        {/* Badges */}
        <motion.div
          className="flex gap-[6px] items-center justify-center flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex gap-[6px] items-center justify-center px-[13px] py-[6px] rounded-[30px]">
            <div
              className="w-[13px] h-[13px] bg-white"
              style={{ maskImage: `url('${imgDivFramerYVnZo}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }}
            />
            <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-[0.2px] uppercase">
              {partner.badge1}
            </span>
          </div>
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex gap-[6px] items-center justify-center px-[13px] py-[6px] rounded-[30px]">
            <div
              className="w-[13px] h-[13px] bg-white"
              style={{ maskImage: `url('${imgDivFramerFoIvU}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }}
            />
            <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-[0.2px] uppercase">
              {partner.badge2}
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-['Geist'] font-medium text-[48px] md:text-[80px] text-white tracking-[-1px] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {partner.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="font-['Geist'] font-normal text-[13px] md:text-[14px] text-white/60 uppercase tracking-[0.15em] max-w-[700px] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {partner.description}
        </motion.p>
      </section>

      {/* ── HERO IMAGE with tagline overlay ────────────────────── */}
      <section className="px-6 w-full max-w-[1260px] mb-20">
        <motion.div
          className="relative rounded-[7px] overflow-hidden"
          style={{ aspectRatio: '16/9' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <ImageWithFallback
            src={partner.heroImage}
            alt={partner.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Tagline */}
          {/* <div className="absolute inset-0 flex items-center justify-center px-6">
            <h2 className="font-['Geist'] font-medium text-[28px] md:text-[52px] text-white text-center leading-tight tracking-[-0.5px] max-w-[800px]">
              {partner.heroTagline.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < partner.heroTagline.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div> */}
        </motion.div>
      </section>

      {/* ── CONTENT AREA ──────────────────────────────────────── */}
      <section className="px-6 w-full max-w-[850px] flex flex-col gap-14 mb-32">

        {/* Product Overview */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Geist'] font-medium text-[22px] md:text-[26px] text-white tracking-tight">
            {labels.productOverview}
          </h2>
          <div className="flex flex-col gap-3">
            {partner.productOverview.map((para, i) => (
              <p
                key={i}
                className="font-['Geist'] font-normal text-[13px] md:text-[14px] text-white/70 uppercase leading-[1.8] tracking-[0.05em]"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Geist'] font-medium text-[22px] md:text-[26px] text-white tracking-tight">
            {labels.keyFeatures}
          </h2>
          <ol className="flex flex-col gap-[10px]">
            {partner.keyFeatures.map((feat, i) => (
              <li
                key={i}
                className="font-['Geist'] font-normal text-[13px] md:text-[14px] text-white/70 uppercase tracking-[0.05em] leading-snug"
              >
                {i + 1}. {feat}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="relative rounded-[7px] overflow-hidden"
          style={{ aspectRatio: '16/9' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ImageWithFallback
            src={partner.secondImage}
            alt={`${partner.title} feature`}
            className="w-full h-full object-cover"
          />
          {/* same overlay + tagline on second image */}
          <div className="absolute inset-0 bg-black/20" />
          {/* <div className="absolute inset-0 flex items-center justify-center px-6">
            <h2 className="font-['Geist'] font-medium text-[28px] md:text-[52px] text-white text-center leading-tight tracking-[-0.5px] max-w-[800px]">
              {partner.heroTagline.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < partner.heroTagline.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div> */}
        </motion.div>

        {/* Use Cases */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Geist'] font-medium text-[22px] md:text-[26px] text-white tracking-tight">
            {labels.useCases}
          </h2>
          <ol className="flex flex-col gap-[10px]">
            {partner.useCases.map((uc, i) => (
              <li
                key={i}
                className="font-['Geist'] font-normal text-[13px] md:text-[14px] text-white/70 uppercase tracking-[0.05em] leading-snug"
              >
                {i + 1}. {uc}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Geist'] font-medium text-[22px] md:text-[26px] text-white tracking-tight">
            {labels.resultsAndImpact}
          </h2>
          <div className="flex flex-col gap-3">
            {partner.resultsAndImpact.map((para, i) => (
              <p
                key={i}
                className="font-['Geist'] font-normal text-[13px] md:text-[14px] text-white/70 uppercase leading-[1.8] tracking-[0.05em]"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Geist'] font-medium text-[22px] md:text-[26px] text-white tracking-tight">
            {labels.conclusion}
          </h2>
          <p className="font-['Geist'] font-normal text-[13px] md:text-[14px] text-white/70 uppercase leading-[1.8] tracking-[0.05em]">
            {partner.conclusion}
          </p>
        </motion.div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
       <ContactSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default PartnersDetailPage;
