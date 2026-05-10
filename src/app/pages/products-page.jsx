import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { RotationCardSection } from '../components/rotation-card-section';
import { EarlyAccessSection } from '../components/early-access-section';
import { FooterSection } from '../components/footer-section';

// import { Background } from '../components/background';

// Assets for Products Page
import imgMKwvaNgcAkQmHyt5Z49Ijjsm1VuPng from "../../assets/0975ee902333fa4c0ff75503ee2b2d45bc2017cd.png";
import imgProduct1 from "../../assets/product1.png";
import imgProduct2 from "../../assets/product2.png";
import imgProduct3 from "../../assets/product3.png";
import normalproduct1 from "../../assets/normal-prd1.png";
import normalproduct2 from "../../assets/normal-prd2.png";
import normalproduct3 from "../../assets/normal-prd3.png";
import { imgDivFramerIu4QG } from "../../imports/svg-j4boa";
import svgPaths from "../../imports/svg-uaeahmmqlr";
import Background from '../components/background';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { Scroll } from 'lucide-react';

const products = [
  {
    description: "STREAMLINE INVOICING AND FINANCIAL OPERATIONS WITH AUTOMATED BILLING, REAL-TIME TRACKING, AND SMART REPORTING.",
    defaultImage: normalproduct1,
    hoverImage: imgProduct1,
  },
  {
    description: "AUTOMATE DOCUMENT PROCESSING USING AI TO EXTRACT, VALIDATE, AND ORGANIZE DATA FROM COMPLEX BUSINESS DOCUMENTS.",
    defaultImage: normalproduct2,
    hoverImage: imgProduct2,
  },
  {
    description: "BUILD AND DEPLOY CUSTOM AI-POWERED BUSINESS APPLICATIONS TO AUTOMATE WORKFLOWS AND IMPROVE PRODUCTIVITY.",
    defaultImage: normalproduct3,
    hoverImage: imgProduct3,
  },
];

 const ProductsPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Background />
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section */}
        <ScrollFadeIn>
        <section className="pt-[140px] md:pt-[200px] pb-10 md:pb-[100px] px-6 text-center max-w-[1260px] w-full flex flex-col items-center gap-10">
          <motion.div
            className="backdrop-blur-md bg-white/5 px-4 py-2 rounded-md border border-white/10 flex items-center gap-2 w-fit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-4 h-4 bg-white/40" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
            <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">core products</span>
          </motion.div>

          <motion.h1
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[48px] md:text-[60px] text-transparent tracking-tight leading-[1.1]">
              Intelligent products.
            </span>
            <span className="font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-white/70 tracking-tight leading-[1.1]">
              Built for scale.
            </span>
          </motion.h1>

          <motion.p
            className="font-['Geist'] text-white/70 text-[14px] md:text-[16px] uppercase tracking-widest max-w-[800px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.2 }}
          >
            POWERING ENTERPRISES WITH AI-DRIVEN PLATFORMS THAT AUTOMATE PROCESSES, IMPROVE DECISION-MAKING, AND DRIVE OPERATIONAL EFFICIENCY
          </motion.p>
        </section>
       

        {/* Product Grid - Zig Zag Layout */}
        <section className="px-6 w-full max-w-[1260px] flex flex-col gap-10 mb-20 md:mb-40">
          {products.map((product, index) => (
            <ScrollFadeIn key={index}>
              <div className={`flex flex-col lg:flex-row gap-6 items-stretch group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Description Side */}
                <div className="flex-1 backdrop-blur-[15px] bg-white/5 border border-white/10 p-8 md:p-12 rounded-[20px] flex items-center transition-all duration-500 group-hover:bg-white/[0.08]">
                  <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white/80 uppercase leading-relaxed tracking-wider">
                    {product.description}
                  </p>
                </div>
                {/* Image Side */}
                <div className="flex-1 rounded-[20px] overflow-hidden min-h-[300px] lg:h-[400px] relative">
                  {/* Default Image (Desktop only, hidden on hover) */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-100 group-hover:lg:opacity-0 hidden lg:block">
                    <ImageWithFallback src={product.defaultImage} className="w-full h-full object-fit" />
                  </div>
                  
                  {/* Hover Image (Visible on Mobile by default, and Desktop on hover) */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-100 lg:opacity-0 group-hover:lg:opacity-100">
                    <ImageWithFallback src={product.hoverImage} className="w-full h-full object-fit" />
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </section>

        {/* Form Section */}
        <section className="w-full max-w-[1260px] px-6 py-20 md:py-40 flex flex-col lg:flex-row gap-20">
          <div className="flex-1 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="flex flex-col">
                <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[44px] text-transparent tracking-tight leading-tight">
                  Share the details of
                </span>
                <span className="font-['Playfair_Display'] italic font-normal text-[44px] text-white/70 tracking-tight leading-tight">
                  your operations with us
                </span>
              </h2>
              <div className="h-px w-full bg-white/20" />
              <p className="font-['Geist'] text-white/70 text-[18px] uppercase tracking-wider leading-relaxed">
                PLANNING A DIGITAL OR INDUSTRIAL TRANSFORMATION? WE’D LOVE TO HEAR WHAT YOU’VE GOT IN MIND.
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
                  <span className="font-['Geist'] font-medium text-white uppercase text-[16px] tracking-wider">Timely response</span>
                </div>
                <p className="font-['Geist'] text-white/50 text-[14px] uppercase leading-relaxed">
                  WE PRIORITIZE TIMELY RESPONSES TO ENSURE SMOOTH COMMUNICATION
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-sm flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L4.5 8L9.5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-['Geist'] font-medium text-white uppercase text-[16px] tracking-wider">Guided next steps</span>
                </div>
                <p className="font-['Geist'] text-white/50 text-[14px] uppercase leading-relaxed">
                  WE DON’T LEAVE YOU GUESSING — EVERY PHASE IS SUPPORTED
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <motion.div
              className="bg-white rounded-[20px] p-10 flex flex-col gap-8 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-2">
                <div className="bg-[#2df9a7]/15 px-3 py-1 rounded-full w-fit flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0f9101] rounded-full" />
                  <span className="font-['Geist'] font-semibold text-[#0f9101] text-[11px] uppercase tracking-wider">Get in touch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-['Geist'] font-medium text-black text-[23px]">Have a</span>
                  <span className="font-['Playfair_Display'] italic text-black/60 text-[23px]">solution in mind?</span>
                </div>
              </div>

              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist'] font-semibold text-black text-[11px] uppercase tracking-wider">Name</label>
                  <input type="text" placeholder="John Doe" className="bg-[#f5f5f5] p-4 rounded-[7px] text-black focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist'] font-semibold text-black text-[11px] uppercase tracking-wider">Email Address*</label>
                  <input type="email" placeholder="hello@website.com" className="bg-[#f5f5f5] p-4 rounded-[7px] text-black focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Geist'] font-semibold text-black text-[11px] uppercase tracking-wider">Message</label>
                  <textarea placeholder="Tell us about your requirements" className="bg-[#f5f5f5] p-4 rounded-[7px] text-black h-32 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4" />
                  <label htmlFor="terms" className="font-['Geist'] text-[12px] text-black/60">I have read and agree to the Terms and Conditions</label>
                </div>
                <button className=" relative overflow-hidden
    flex items-center justify-center

    w-fit mx-auto sm:mx-0   /* 👈 key change */

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
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
         </ScrollFadeIn>

         <section className="w-full h-[400px] md:h-[1000px] mb-[80px] md:mb-[150px] relative overflow-hidden">
        <ScrollFadeIn>
        <RotationCardSection />
        </ScrollFadeIn>
      </section>
<ScrollFadeIn>
      {/* Newsletter Section */}
      <EarlyAccessSection />

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