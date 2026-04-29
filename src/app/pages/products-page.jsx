import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { RotationCardSection } from '../components/rotation-card-section';
import { EarlyAccessSection } from '../components/early-access-section';
import { FooterSection } from '../components/footer-section';

// import { Background } from '../components/background';

// Assets for Products Page
import imgMKwvaNgcAkQmHyt5Z49Ijjsm1VuPng from "../../assets/0975ee902333fa4c0ff75503ee2b2d45bc2017cd.png";
import { imgDivFramerIu4QG } from "../../imports/svg-j4boa";
import svgPaths from "../../imports/svg-uaeahmmqlr";
import Background from '../components/background';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { Scroll } from 'lucide-react';

const ProductCard = ({ number, title, description, vectorPath }) => (
  <div className="relative w-full h-[429px] group" data-name="Product card 4">
    <div className="absolute inset-0 backdrop-blur-[10px] bg-[#1e1e1e] overflow-clip rounded-[7px] border border-white/5 transition-all duration-500 group-hover:bg-[#252525]">
      {/* Background Ellipses */}
      <div className="-translate-x-1/2 absolute left-[calc(50%-180px)] size-[232px] top-[299px] opacity-20">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.05" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+135.5px)] size-[197px] top-[410px] opacity-20">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.05" />
        </svg>
      </div>

      {/* Title & Number */}
      <div className="absolute left-[25px] top-[40px] flex flex-col gap-[10px] z-10">
        <div className="opacity-33">
          <p className="font-['Playfair_Display'] font-normal text-[23px] text-white leading-[25.3px]">{number}</p>
        </div>
        <div className="capitalize">
          <p className="font-['Geist'] font-semibold text-[24px] text-white leading-[27px]">{title}</p>
        </div>
      </div>

      {/* Plus Icon */}
      <div className="absolute right-[20px] top-[20px] size-[20px] z-10">
        <div
          className="absolute bg-white mask-alpha mask-intersect opacity-40 size-[20px]"
          style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }}
        />
      </div>

      {/* Central Visual (Logo/Vector) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Background Shape (Rotated) */}
        <div className="absolute w-[400px] h-[400px] opacity-25 rotate-[172deg]">
          <ImageWithFallback src={imgMKwvaNgcAkQmHyt5Z49Ijjsm1VuPng} className="w-full h-full object-contain" />
        </div>

        {/* Central Vector Logo */}
        <div className="relative w-[195px] h-[171px] z-10 transform transition-transform duration-700 group-hover:scale-110">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195.334 171">
            <path d={vectorPath} fill="#959595" className="transition-colors duration-500 group-hover:fill-white" />
          </svg>
        </div>
      </div>

      {/* Description */}
      <div className="absolute bottom-[35px] left-[25px] right-[25px] opacity-75 z-10">
        <p className="font-['Geist'] font-normal text-[16px] text-white uppercase leading-[22.4px]">
          {description}
        </p>
      </div>
    </div>
  </div>
);

 const ProductsPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Background />
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section */}
        <ScrollFadeIn>
        <section className="pt-[200px] pb-[100px] px-6 text-center max-w-[1260px] w-full flex flex-col items-center gap-10">
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
       

        {/* Product Grid */}
        <section className="px-6 w-full max-w-[1260px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
          <ProductCard
            number="01"
            title="Kenvoice"
            description="STREAMLINE INVOICING AND FINANCIAL OPERATIONS WITH AUTOMATED BILLING, REAL-TIME TRACKING, AND SMART REPORTING."
            vectorPath={svgPaths.pda184c0}
          />
          <ProductCard
            number="02"
            title="Smart IDP"
            description="AUTOMATE DOCUMENT PROCESSING USING AI TO EXTRACT, VALIDATE, AND ORGANIZE DATA FROM COMPLEX BUSINESS DOCUMENTS."
            vectorPath={svgPaths.pda184c0} // Using same visual language as per design pattern
          />
          <ProductCard
            number="03"
            title="AI BizzApp"
            description="BUILD AND DEPLOY CUSTOM AI-POWERED BUSINESS APPLICATIONS TO AUTOMATE WORKFLOWS AND IMPROVE PRODUCTIVITY."
            vectorPath={svgPaths.pda184c0} // Using same visual language as per design pattern
          />
        </section>

        {/* Form Section */}
        <section className="w-full max-w-[1260px] px-6 py-40 flex flex-col lg:flex-row gap-20">
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
                <button className="bg-[#001ca9] py-4 rounded-full text-white font-['Geist'] font-semibold text-[14px] uppercase tracking-widest hover:bg-blue-800 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
         </ScrollFadeIn>

         <section className="w-full h-[1000px] mb-[150px] relative overflow-hidden">
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