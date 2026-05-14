import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { RotationCardSection } from '../components/rotation-card-section';
import { EarlyAccessSection } from '../components/early-access-section';
import { FooterSection } from '../components/footer-section';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

// import { Background } from '../components/background';

// Assets for Products Page
import kenvoice from "../../assets/Ken-Voice.png";
import kenvoiceColored from "../../assets/Ken-Voice-colour.png";
import smartIDP from "../../assets/Smart-IDP.png";
import smartIDPColored from "../../assets/Smart-IDP-colour.png";
import aibizz from "../../assets/AI-Bizz-App.png";
import aibizzColored from "../../assets/AI-Bizz-App-colour.png";
import { imgDivFramerIu4QG } from "../../imports/svg-j4boa";
import svgPaths from "../../imports/svg-uaeahmmqlr";
import Background from '../components/background';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { Scroll } from 'lucide-react';
import { NewsletterSection } from '../components/newsletter-section';

const products = [
  {
    name: "Kenvoice",
    url: "https://kenvoice.ai/", // Replace with actual link
    description: "STREAMLINE INVOICING AND FINANCIAL OPERATIONS WITH AUTOMATED BILLING, REAL-TIME TRACKING, AND SMART REPORTING.",
    defaultImage: kenvoice,
    hoverImage: kenvoiceColored,
  },
  {
    name: "SmartIDP",
    url: "#", // Replace with actual link
    description: "AUTOMATE DOCUMENT PROCESSING USING AI TO EXTRACT, VALIDATE, AND ORGANIZE DATA FROM COMPLEX BUSINESS DOCUMENTS.",
    defaultImage: smartIDP,
    hoverImage: smartIDPColored,
  },
  {
    name: "Ai Bizz App",
    url: "#", // Replace with actual link
    description: "BUILD AND DEPLOY CUSTOM AI-POWERED BUSINESS APPLICATIONS TO AUTOMATE WORKFLOWS AND IMPROVE PRODUCTIVITY.",
    defaultImage: aibizz,
    hoverImage: aibizzColored,
  },
];

const ProductsPage = () => {
  const { language } = useLanguage();
  const isRtl = language === 'AR';
  const t = langData[language.toLowerCase()].products_page;

  const localizedProducts = products.map((p, i) => ({
    ...p,
    name: t.list[i].name,
    description: t.list[i].description,
    cta: t.list[i].cta
  }));
  return (
    <div className="w-full flex flex-col items-center" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* <Background /> */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section */}
        <ScrollFadeIn>
          <section className="pt-[100px] md:pt-[160px] pb-8 md:pb-16 px-6 text-center max-w-[1260px] w-full flex flex-col items-center gap-6 md:gap-10">
            <motion.div
              className="backdrop-blur-md bg-white/5 px-4 py-2 rounded-md border border-white/10 flex items-center gap-2 w-fit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-4 h-4 bg-white/40" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
              <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] md:text-[60px] text-transparent tracking-tight leading-[1.1]">
                {t.hero.title_p1}
              </span>
              <span className="font-['Playfair_Display'] italic font-normal text-[36px] md:text-[60px] text-white/70 tracking-tight leading-[1.1]">
                {t.hero.title_italic}
              </span>
            </motion.h1>

            <motion.p
              className="font-['Geist'] text-white/70 text-[14px] md:text-[16px] uppercase tracking-widest max-w-[800px] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.description}
            </motion.p>
          </section>


          {/* Product Grid - Zig Zag Layout */}
          <section className="px-6 w-full max-w-[1260px] flex flex-col gap-6 md:gap-10 mb-16 md:mb-24">
            {localizedProducts.map((product, index) => (
              <ScrollFadeIn key={index}>
                <div className={`flex flex-col lg:flex-row gap-6 items-stretch group ${(index % 2 !== 0) ? (isRtl ? 'lg:flex-row' : 'lg:flex-row-reverse') : (isRtl ? 'lg:flex-row-reverse' : 'lg:flex-row')}`}>
                  {/* Image Side - Now first in markup for mobile ordering */}
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-[20px] overflow-hidden min-h-[300px] lg:h-[400px] relative cursor-pointer block group/img"
                  >
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 backdrop-blur-[15px] bg-white/5 border border-white/10" />

                    {/* Default Image (Desktop only, hidden on hover) */}
                    <div className="absolute inset-0 transition-opacity duration-700 opacity-100 group-hover:lg:opacity-0 hidden lg:block">
                      <ImageWithFallback src={product.defaultImage} className="w-full h-full object-contain" />
                    </div>

                    {/* Hover Image (Visible on Mobile by default, and Desktop on hover) */}
                    <div className="absolute inset-0 transition-opacity duration-700 opacity-100 lg:opacity-0 group-hover:lg:opacity-100">
                      <ImageWithFallback src={product.hoverImage} className="w-full h-full object-contain" />
                    </div>
                  </a>

                  {/* Description Side */}
                  <div className="flex-1 backdrop-blur-[15px] bg-white/5 border border-white/10 p-8 md:p-12 rounded-[20px] flex flex-col justify-start gap-6 transition-all duration-500 group-hover:bg-white/[0.08]">
                    <div className="flex flex-col gap-2">
                      <span className="font-['Geist'] font-semibold text-[24px] md:text-[32px] text-white tracking-tight">
                        {product.name}
                      </span>
                      <div className={`h-px w-12 bg-blue-500 transition-all duration-500 group-hover:w-20 ${isRtl ? 'mr-0' : 'ml-0'}`} />
                    </div>
                    <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white/80 uppercase leading-relaxed tracking-wider">
                      {product.description}
                    </p>

                    {/* <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      relative overflow-hidden
                      flex items-center justify-center
                      w-fit
                      px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
                      text-[13px] sm:text-[14px] md:text-[16px]
                      rounded-full
                      bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)]
                      border border-white/20
                      text-white uppercase whitespace-nowrap
                      font-['Geist']
                      cursor-pointer
                      transition-all duration-300 
                      hover:scale-105 active:scale-95 
                      glare-btn
                      mt-auto
                    "
                    >
                      {product.cta}
                    </a> */}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </section>

          {/* Form Section */}
          <section className="w-full max-w-[1260px] px-6 py-12 md:py-12 flex flex-col lg:flex-row gap-12 md:gap-20">
            <div className="flex-1 flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-6">
                <h2 className="flex flex-col">
                  <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[44px] text-transparent tracking-tight leading-tight">
                    {t.form_section.title_p1}
                  </span>
                  <span className="font-['Playfair_Display'] italic font-normal text-[44px] text-white/70 tracking-tight leading-tight">
                    {t.form_section.title_italic}
                  </span>
                </h2>
                <div className="h-px w-full bg-white/20" />
                <p className="font-['Geist'] text-white/70 text-[18px] uppercase tracking-wider leading-relaxed">
                  {t.form_section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L4.5 8L9.5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-['Geist'] font-medium text-white uppercase text-[16px] tracking-wider">{t.form_section.features[0].title}</span>
                  </div>
                  <p className="font-['Geist'] text-white/50 text-[14px] uppercase leading-relaxed">
                    {t.form_section.features[0].desc}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L4.5 8L9.5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-['Geist'] font-medium text-white uppercase text-[16px] tracking-wider">{t.form_section.features[1].title}</span>
                  </div>
                  <p className="font-['Geist'] text-white/50 text-[14px] uppercase leading-relaxed">
                    {t.form_section.features[1].desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <motion.div
                className="bg-white rounded-[20px] p-10 flex flex-col gap-8 shadow-2xl"
                initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-2">
                  <div className="bg-[#2df9a7]/15 px-3 py-1 rounded-full w-fit flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0f9101] rounded-full" />
                    <span className="font-['Geist'] font-semibold text-[#0f9101] text-[11px] uppercase tracking-wider">{t.form.badge}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-['Geist'] font-medium text-black text-[23px]">{t.form.title_p1}</span>
                    <span className="font-['Playfair_Display'] italic text-black/60 text-[23px]">{t.form.title_italic}</span>
                  </div>
                </div>

                <form className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Geist'] font-semibold text-black text-[11px] uppercase tracking-wider">{t.form.labels.name}</label>
                    <input type="text" placeholder={t.form.placeholders.name} className="bg-[#f5f5f5] p-4 rounded-[7px] text-black focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Geist'] font-semibold text-black text-[11px] uppercase tracking-wider">{t.form.labels.email}</label>
                    <input type="email" placeholder={t.form.placeholders.email} className="bg-[#f5f5f5] p-4 rounded-[7px] text-black focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Geist'] font-semibold text-black text-[11px] uppercase tracking-wider">{t.form.labels.message}</label>
                    <textarea placeholder={t.form.placeholders.message} className="bg-[#f5f5f5] p-4 rounded-[7px] text-black h-32 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="terms" className="w-4 h-4" />
                    <label htmlFor="terms" className="font-['Geist'] text-[12px] text-black/60">{t.form.labels.terms}</label>
                  </div>
                  <button className=" relative overflow-hidden
    flex items-center justify-center

    w-full mx-auto sm:mx-0   /* 👈 key change */

    px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
    text-[13px] sm:text-[14px] md:text-[16px]

    rounded-full
    bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)]
    border border-white/20
    text-white uppercase whitespace-nowrap
    font-['Geist']

    cursor-pointer
    transition-all duration-300 
    hover:scale-105 active:scale-95 
    glare-btn">
                    {t.form.cta}
                  </button>
                </form>
              </motion.div>
            </div>
          </section>
        </ScrollFadeIn>

        <section className="w-full h-full md:h-[1000px] mb-[40px] relative overflow-hidden">
          <ScrollFadeIn>
            <RotationCardSection />
          </ScrollFadeIn>
        </section>
        <ScrollFadeIn>
          {/* Newsletter Section */}
          <div className='md:-mt-40'>
            <NewsletterSection />
          </div>

          <FooterSection />
        </ScrollFadeIn>

        {/* Industries Section */}
        {/* <RotationCardSection /> */}

        {/* Newsletter Section */}
        {/* <EarlyAccessSection /> */}

        {/* Footer */}
        {/* <FooterSection /> */}
      </div>
    </div>
  );
};
export default ProductsPage;