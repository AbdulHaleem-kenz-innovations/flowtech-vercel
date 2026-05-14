import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';

// Assets for Contact Page
import imgImage from "../../assets/549b70790ee8b3213006de75df307a8f7731f406.png";
import imgImage1 from "../../assets/49208a0f068229058add6f6c6c1d9a3f7c59ffa5.png";
import imgImage2 from "../../assets/77f31278900216ba996452b69cdaadc60fe5fa10.png";
import { imgDivFramerIu4QG, imgDivFramerJJpra } from "../../imports/svg-ot74f";
import { NewsletterSection } from '../components/newsletter-section';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { TestimonialSection } from '../components/testimonial-section';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

// --- Form Components ---

const InputField = ({ label, placeholder, type = "text", isRtl }) => (
  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name={`label.framer-${label.toLowerCase()}`}>
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-label">
      <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
        <div className={`flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[0.2px] uppercase whitespace-nowrap ${isRtl ? 'text-start' : ''}`}>
          <p className="leading-[17.6px]">{label}</p>
        </div>
      </div>
    </div>
    <div className="bg-[#f5f5f5] relative rounded-[7px] shrink-0 w-full" data-name="div.framer-form-text-input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[1.39px] relative">
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
              <input
                type={type}
                placeholder={placeholder}
                className={`bg-transparent border-none outline-none flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-black text-[16px] w-full placeholder:text-[#999] ${isRtl ? 'text-start' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TextAreaField = ({ label, placeholder, isRtl }) => (
  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-label">
      <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
        <div className={`flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[0.2px] uppercase whitespace-nowrap ${isRtl ? 'text-start' : ''}`}>
          <p className="leading-[17.6px]">{label}</p>
        </div>
      </div>
    </div>
    <div className="bg-[#f5f5f5] content-stretch flex h-[120px] items-start justify-center overflow-clip relative rounded-[7px] shrink-0 w-full">
      <textarea
        placeholder={placeholder}
        className={`bg-transparent border-none outline-none p-[14px] flex-[1_0_0] h-full min-w-px overflow-x-clip overflow-y-auto relative font-['Geist'] font-medium text-black text-[16px] placeholder:text-[#999] resize-none ${isRtl ? 'text-start' : ''}`}
      />
    </div>
  </div>
);

const ContactPage = () => {
  const { language } = useLanguage();
  const isRtl = language === 'AR';
  const t = langData[language.toLowerCase()].contact_page;
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full flex flex-col items-center pt-[200px]" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <ScrollFadeIn>
      <section className="flex flex-col gap-6 md:gap-[18px] items-center justify-center relative w-full max-w-[1260px] px-6 md:mb-[150px] mb-[80px]" data-name="Section Content">
        <div className="flex flex-col items-start relative" data-name="div.framer-1cde5fk-container">
          <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 flex gap-2 items-center justify-center px-4 py-1.5 relative rounded-full" data-name="Default">
            <div className="relative size-4" data-name="div.framer-IU4qG:mask-group">
              <div className="absolute inset-0 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} data-name="div.framer-IU4qG" />
            </div>
            <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-widest uppercase">
              {t.hero.badge}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 text-center w-full" data-name="Heading Wrap">
          <h1 className="flex flex-wrap items-center justify-center gap-x-3">
            <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[40px] md:text-[60px] text-transparent tracking-tighter leading-tight">
              {t.hero.title_p1}
            </span>
            <span className="font-['Playfair_Display'] italic font-normal text-[40px] md:text-[60px] text-white/70 tracking-tighter leading-tight">
              {t.hero.title_italic}
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-center opacity-70 w-full max-w-[800px]" data-name="Questions, ideas, or just saying hi">
          <p className="font-['Geist'] font-normal text-[14px] md:text-[18px] text-center text-white uppercase tracking-widest leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>
      </ScrollFadeIn>

<ScrollFadeIn>
      <section className="w-full max-w-[1260px] px-6 md:mb-[150px] mb-[80px] overflow-visible text-start">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 items-stretch w-full" data-name="Content Wrapper">

    {/* Left Column - Lists */}
    <div className="flex flex-col gap-5 lg:max-w-[305px] lg:flex-1 w-full" data-name="Lists">
      <div className="backdrop-blur-[10px] bg-white/10 border border-white/10 rounded-xl overflow-hidden w-full flex-1" data-name="Card">
        <div className="p-6 md:p-8 flex flex-col gap-12 h-full justify-between">
          <div className="flex flex-col gap-6">
            <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
              <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-widest uppercase">{t.info_cards.hire_us.badge}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[23px] text-transparent tracking-tight leading-tight">
                {t.info_cards.hire_us.title}
              </h5>
              <p className="font-['Playfair_Display'] italic font-normal text-[23px] text-white/70 tracking-tight leading-tight">
                {t.info_cards.hire_us.italic}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 opacity-60">
            <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
              info@flowtech.com
            </p>
            <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase tracking-wider hover:text-white transition-colors cursor-pointer" dir="ltr">
              +1 345 000 678
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden w-full h-[250px] md:h-[292px] lg:h-auto lg:flex-1">
        <ImageWithFallback alt="" className="w-full h-full object-cover" src={imgImage} />
      </div>
    </div>

    {/* Center Column - Form Wrapper (Reference height) */}
    <div className="bg-white flex flex-col gap-8 justify-center lg:max-w-[610px] lg:flex-[2] w-full p-6 md:p-10 lg:p-12 rounded-xl text-start" data-name="Form Wrapper">
      <div className="flex flex-col gap-6 w-full">
        <div className="bg-[#2df9a7]/10 px-4 py-2 rounded-full w-fit flex items-center gap-2">
          <div className="size-3 bg-[#0f9101]" style={{ maskImage: `url('${imgImage1}')`, maskSize: 'contain' }} />
          <span className="font-['Geist'] font-semibold text-[11px] text-[#0f9101] tracking-widest uppercase">{t.form.badge}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-2">
          <h5 className="bg-clip-text bg-gradient-to-r from-black to-black/60 font-['Geist'] font-medium text-[23px] text-transparent tracking-tight">
            {t.form.title_p1}
          </h5>
          <p className="font-['Playfair_Display'] italic font-normal text-[23px] text-black/60 tracking-tight">
            {t.form.title_italic}
          </p>
        </div>
      </div>

      <form className="flex flex-col gap-5 w-full">
        <InputField label={t.form.name} placeholder={t.form.placeholder_name} isRtl={isRtl} />
        <InputField label={t.form.email} placeholder={t.form.placeholder_email} type="email" isRtl={isRtl} />
        <InputField label={t.form.company} placeholder={t.form.placeholder_company} isRtl={isRtl} />
        <TextAreaField label={t.form.message} placeholder={t.form.placeholder_message} isRtl={isRtl} />

        <div className="flex items-start gap-3 py-2">
          <div className="relative size-5 shrink-0 mt-0.5">
            <input type="checkbox" className="absolute inset-0 opacity-0 cursor-pointer z-10 peer" />
            <div className="absolute inset-0 border-2 border-neutral-300 rounded-sm peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none">
              <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p className="font-['Geist'] font-medium text-[13px] md:text-[14px] text-black/70 leading-relaxed">
            {t.form.terms_p1} <span className="text-blue-700 font-semibold cursor-pointer hover:underline">{t.form.terms_link}</span>
          </p>
        </div>

        <button className="relative rounded-full overflow-hidden w-full h-14 group shadow-lg shadow-blue-900/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 transition-opacity group-hover:opacity-90" />
          <span className="relative z-10 font-['Geist'] font-semibold text-[14px] text-white tracking-widest uppercase">{t.form.cta}</span>
        </button>
      </form>
    </div>

    {/* Right Column - Support Cards */}
    <div className="flex flex-col gap-5 lg:max-w-[305px] lg:flex-1 w-full" data-name="Lists">
      <div className="rounded-xl overflow-hidden w-full h-[250px] md:h-[292px] lg:h-auto lg:flex-1">
        <ImageWithFallback alt="" className="w-full h-full object-cover" src={imgImage2} />
      </div>

      <div className="backdrop-blur-[10px] bg-white/10 border border-white/10 rounded-xl overflow-hidden w-full flex-1" data-name="Card">
        <div className="p-6 md:p-8 flex flex-col gap-10 h-full justify-between">
          <div className="flex flex-col gap-6">
            <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
              <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-widest uppercase">{t.info_cards.support.badge}</span>
            </div>
            <h5 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[23px] text-transparent tracking-tight leading-tight">
              {t.info_cards.support.title}
            </h5>
          </div>

          <div className={`flex flex-col gap-3.5 border-white/10 py-1 ${isRtl ? 'border-r pr-4' : 'border-l pl-4'}`}>
            <div className="backdrop-blur-sm bg-white/15 h-3 rounded-full w-[25%]" />
            <div className="backdrop-blur-sm bg-white/15 h-3 rounded-full w-[55%]" />
            <div className="backdrop-blur-sm bg-white/15 h-3 rounded-full w-[80%]" />
            <div className="bg-white h-3 rounded-full w-full" />
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
</ScrollFadeIn>

      {/* FAQ Section */}
      <ScrollFadeIn>
      <section className="w-full md:mb-[150px] mb-[80px] px-4">
        <div className="max-w-[1260px] mx-auto backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] rounded-xl p-6 md:p-12 flex flex-col lg:flex-row gap-10 text-start">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase text-white opacity-70">
                {t.faq.badge}
              </span>

              <h2 className="text-2xl md:text-4xl text-white font-medium">
                {t.faq.title_p1}
              </h2>

              <h3 className="text-2xl font-['Playfair_Display'] md:text-4xl text-gray-300 italic">
                {t.faq.title_italic}
              </h3>
            </div>

            <p className="text-white opacity-70 text-sm md:text-base leading-relaxed">
              {t.faq.description}
            </p>

            <button className="     relative overflow-hidden
              flex items-center justify-center
              w-full sm:w-auto
              px-8 py-4
              rounded-full
              bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)]
              border border-white/20
              text-white uppercase whitespace-nowrap
              font-['Geist'] text-[16px]
              cursor-pointer
              transition-all duration-300 
              hover:scale-105 active:scale-95 
              glare-btn">
                  {t.faq.cta}
                </button>
          </div>

          {/* RIGHT FAQ */}
          <div className="w-full lg:w-[60%] flex flex-col gap-3">
            {t.faq.items.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`
              rounded-lg bg-white/5 backdrop-blur-md
              transition-all duration-300
              ${isOpen ? "bg-white/10" : ""}
            `}
                >
                  {/* BUTTON (better than div for accessibility) */}
                  <button
                    onClick={() =>
                      setActiveIndex(isOpen ? null : idx)
                    }
                    className={`w-full p-5 flex items-center justify-between gap-4 ${isRtl ? 'text-right' : 'text-left'}`}
                    aria-expanded={isOpen}
                  >
                    {/* Question */}
                    <p className="text-white text-[16px] md:text-[18px] leading-[26px]">
                      {item.q}
                    </p>

                    {/* PRO ICON (+ → – with animation) */}
                    <div className="relative w-5 h-5 flex items-center justify-center shrink-0">

                      {/* Horizontal line */}
                      <span className="absolute w-4 h-[2px] bg-white rounded transition-all duration-300" />

                      {/* Vertical line */}
                      <span
                        className={`
                    absolute h-4 w-[2px] bg-white rounded
                    transition-all duration-300
                    ${isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}
                  `}
                      />
                    </div>
                  </button>

                  {/* ANSWER (smooth height animation) */}
                  <div
                    className={`
                grid transition-all duration-300 ease-in-out
                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
              `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 text-white/80 text-sm md:text-base uppercase leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Testimonials Section */}
      <TestimonialSection/>
      {/* Insights Section */}
      <div className="w-full mb-[86px]">
        <NewsletterSection/>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
export default ContactPage;