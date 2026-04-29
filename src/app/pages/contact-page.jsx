import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';

// Assets for Contact Page
import imgImage from "../../assets/549b70790ee8b3213006de75df307a8f7731f406.png";
import imgImage1 from "../../assets/49208a0f068229058add6f6c6c1d9a3f7c59ffa5.png";
import imgImage2 from "../../assets/77f31278900216ba996452b69cdaadc60fe5fa10.png";
import imgStar from "../../assets/4ae90066ce736d93921e8efb9fccf9d15d69f41b.png";
import imgImage3 from "../../assets/d8e8171aa3a799053bc44f2b1266a8f4769866a8.png";
import imgImage4 from "../../assets/17cf5bc71490f3c19acec485a65053458454bed7.png";
import imgImage5 from "../../assets/6aac6e50972325bf714b38089a03d3afd0bf55af.png";
import imgImage7 from "../../assets/471de929844a70aecd4765b69e70d32ebd8478b4.png";
import imgDaniel from "../../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";
import imgBefore from "../../assets/8fe75819ad75274d13e4f946d5c76e7f101e4326.png";
import svgInsightsPaths from "../../imports/svg-12px0teybw";
import { imgDivFramerIu4QG as imgIcon1, imgDivFramerIu4QG1 as imgIcon2, imgDivFramerJJpra as imgIcon3, imgDivFramerIu4QG2 as imgIcon4 } from "../../imports/svg-h332y";
import { imgDivFramerIu4QG as imgPlusIcon, imgDivFramerIu4QG1 as imgPlusLargeIcon, imgGroup as imgSquareIcon } from "../../imports/svg-o5wm7";
import { imgDivFramerIu4QG, imgDivFramerJJpra } from "../../imports/svg-ot74f";

// --- Form Components ---

const InputField = ({ label, placeholder, type = "text" }) => (
  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name={`label.framer-${label.toLowerCase()}`}>
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-label">
      <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
        <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[0.2px] uppercase whitespace-nowrap">
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
                className="bg-transparent border-none outline-none flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-black text-[16px] w-full placeholder:text-[#999]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TextAreaField = ({ label, placeholder }) => (
  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-label">
      <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
        <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[0.2px] uppercase whitespace-nowrap">
          <p className="leading-[17.6px]">{label}</p>
        </div>
      </div>
    </div>
    <div className="bg-[#f5f5f5] content-stretch flex h-[120px] items-start justify-center overflow-clip relative rounded-[7px] shrink-0 w-full">
      <textarea
        placeholder={placeholder}
        className="bg-transparent border-none outline-none p-[14px] flex-[1_0_0] h-full min-w-px overflow-x-clip overflow-y-auto relative font-['Geist'] font-medium text-black text-[16px] placeholder:text-[#999] resize-none"
      />
    </div>
  </div>
);

const ContactPage = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: "What solutions does Flowtech offer?",
      a: "WE SPECIALIZE IN MANUFACTURING INTELLIGENCE, ENERGY MONITORING SYSTEMS, PIPELINE SAFETY (DFOS), AI ANALYTICS, CLOUD PLATFORMS, AND ENTERPRISE SOLUTIONS",
    },
    {
      q: "How do you design the right solution?",
      a: "We analyze your requirements and tailor solutions accordingly.",
    },
    {
      q: "How long does implementation take?",
      a: "Typically 2–6 weeks depending on complexity.",
    },
    {
      q: "Do you work across different industries?",
      a: "Yes, including manufacturing, energy, and enterprise sectors.",
    },
    {
      q: "What does your pricing model look like?",
      a: "Flexible pricing based on project scope and needs.",
    },
    {
      q: "What makes Flowtech different?",
      a: "Strong domain expertise combined with modern technology.",
    },
  ];


  return (
    <div className="w-full flex flex-col items-center pt-32 pb-20">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 md:gap-[18px] items-center justify-center relative w-full max-w-[1260px] px-6 mb-20 md:mb-32" data-name="Section Content">
        <div className="flex flex-col items-start relative" data-name="div.framer-1cde5fk-container">
          <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 flex gap-2 items-center justify-center px-4 py-1.5 relative rounded-full" data-name="Default">
            <div className="relative size-4" data-name="div.framer-IU4qG:mask-group">
              <div className="absolute inset-0 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} data-name="div.framer-IU4qG" />
            </div>
            <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-widest uppercase">
              let's talk
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 text-center w-full" data-name="Heading Wrap">
          <h1 className="flex flex-wrap items-center justify-center gap-x-3">
            <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[40px] md:text-[60px] text-transparent tracking-tighter leading-tight">
              Contact
            </span>
            <span className="font-['Playfair_Display'] italic font-normal text-[40px] md:text-[60px] text-white/70 tracking-tighter leading-tight">
              us
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-center opacity-70 w-full max-w-[800px]" data-name="Questions, ideas, or just saying hi">
          <p className="font-['Geist'] font-normal text-[14px] md:text-[18px] text-center text-white uppercase tracking-widest leading-relaxed">
            QUESTIONS, PROJECTS, OR PARTNERSHIPS — WE’RE HERE TO HELP
          </p>
        </div>
      </section>

      {/* Grid Layout Section */}
      <section className="w-full max-w-[1260px] px-6 mb-40 overflow-visible">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 items-start justify-center w-full" data-name="Content Wrapper">

          {/* Left Column - Lists */}
          <div className="flex flex-col gap-5 items-center justify-center lg:max-w-[305px] w-full" data-name="Lists">
            <div className="backdrop-blur-[10px] bg-white/10 border border-white/10 rounded-xl overflow-hidden w-full" data-name="Card">
              <div className="p-6 md:p-8 flex flex-col gap-12 min-h-[300px] justify-between">
                <div className="flex flex-col gap-6">
                  <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                    <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-widest uppercase">hire us</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h5 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[23px] text-transparent tracking-tight leading-tight">
                      Have an industrial challenge?
                    </h5>
                    <p className="font-['Playfair_Display'] italic font-normal text-[23px] text-white/70 tracking-tight leading-tight">
                      We’ll solve it.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 opacity-60">
                  <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
                    info@flowtech.com
                  </p>
                  <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
                    +1 345 000 678
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden w-full h-[250px] md:h-[292px]">
              <ImageWithFallback alt="" className="w-full h-full object-cover" src={imgImage} />
            </div>
          </div>

          {/* Center Column - Form Wrapper */}
          <div className="bg-white flex flex-col gap-8 items-start justify-center lg:max-w-[610px] w-full p-6 md:p-10 lg:p-12 rounded-xl" data-name="Form Wrapper">
            <div className="flex flex-col gap-6 w-full">
              <div className="bg-[#2df9a7]/10 px-4 py-2 rounded-full w-fit flex items-center gap-2">
                <div className="size-3 bg-[#0f9101]" style={{ maskImage: `url('${imgImage1}')`, maskSize: 'contain' }} />
                <span className="font-['Geist'] font-semibold text-[11px] text-[#0f9101] tracking-widest uppercase">get in touch</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-2">
                <h5 className="bg-clip-text bg-gradient-to-r from-black to-black/60 font-['Geist'] font-medium text-[23px] text-transparent tracking-tight">
                  Have a
                </h5>
                <p className="font-['Playfair_Display'] italic font-normal text-[23px] text-black/60 tracking-tight">
                  project in mind?
                </p>
              </div>
            </div>

            <form className="flex flex-col gap-5 w-full">
              <InputField label="Name" placeholder="John Doe" />
              <InputField label="Email Address*" placeholder="hello@website.com" type="email" />
              <InputField label="Company*" placeholder="Company name" />
              <TextAreaField label="Message" placeholder="Your message" />

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
                  I have read and agree to the <span className="text-blue-700 font-semibold cursor-pointer hover:underline">Terms and Conditions</span>
                </p>
              </div>

              <button className="relative rounded-full overflow-hidden w-full h-14 group shadow-lg shadow-blue-900/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 transition-opacity group-hover:opacity-90" />
                <span className="relative z-10 font-['Geist'] font-semibold text-[14px] text-white tracking-widest uppercase">Send message</span>
              </button>
            </form>
          </div>

          {/* Right Column - Support Cards */}
          <div className="flex flex-col gap-5 items-center justify-center lg:max-w-[305px] w-full" data-name="Lists">
            <div className="rounded-xl overflow-hidden w-full h-[250px] md:h-[292px]">
              <ImageWithFallback alt="" className="w-full h-full object-cover" src={imgImage2} />
            </div>

            <div className="backdrop-blur-[10px] bg-white/10 border border-white/10 rounded-xl overflow-hidden w-full" data-name="Card">
              <div className="p-6 md:p-8 flex flex-col gap-10 min-h-[300px] justify-between">
                <div className="flex flex-col gap-6">
                  <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                    <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-widest uppercase">SUPPORT</span>
                  </div>
                  <h5 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[23px] text-transparent tracking-tight leading-tight">
                    Solutions that power efficiency and performance
                  </h5>
                </div>

                <div className="flex flex-col gap-3.5 border-l border-white/10 pl-4 py-1">
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


      {/* FAQ Section */}
      {/* FAQ Section */}
      <section className="w-full mb-20 md:mb-40 px-4">
        <div className="max-w-[1260px] mx-auto backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] rounded-xl p-6 md:p-12 flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <div>
              <span className="text-xs uppercase text-white opacity-70">
                FAQ
              </span>

              <h2 className="text-2xl md:text-4xl text-white font-medium">
                Frequently Asked
              </h2>

              <h3 className="text-2xl md:text-4xl text-gray-300 italic">
                Questions
              </h3>
            </div>

            <p className="text-white opacity-70 text-sm md:text-base leading-relaxed">
              Got questions? We’ve got answers. Here’s everything you need to know about working with us.
            </p>

            <button className="w-fit px-5 py-3 rounded-full bg-gradient-to-r from-blue-800 to-blue-500 text-white text-sm uppercase">
              Get in touch
            </button>
          </div>

          {/* RIGHT FAQ */}
          <div className="w-full lg:w-[60%] flex flex-col gap-3">
            {faqs.map((item, idx) => {
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
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
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

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="w-full max-w-[1260px] px-6 py-40 border-t border-white/5">
        <div className="content-stretch flex items-end overflow-clip relative shrink-0 w-full mb-20" data-name="Content Wrapper">
          <div className="content-stretch flex flex-col lg:flex-row items-end justify-between w-full relative shrink-0" data-name="Title Wrap">
            <div className="content-stretch flex flex-col gap-[20.01px] items-start justify-center max-w-[320px] overflow-clip relative shrink-0 w-full lg:w-[320px]" data-name="Title">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-q32ytv-container">
                <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0" data-name="Default">
                  <div className="relative shrink-0 size-[16px]" data-name="div.framer-IU4qG:mask-group">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" style={{ maskImage: `url('${imgPlusIcon}')` }} data-name="div.framer-IU4qG" />
                  </div>
                  <div className="h-[17.59px] relative shrink-0 w-[89.14px]">
                    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 pb-[0.59px] right-0 top-[calc(50%-0.5px)]">
                      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
                        <p className="leading-[17.6px]">client stories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading Wrap">
                <div className="h-[48.41px] relative shrink-0 w-[117.33px]">
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-0.7px)]">
                    <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[44px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(268.908deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>
                      <p className="leading-[48.4px]">{`What `}</p>
                    </div>
                  </div>
                </div>
                <div className="h-[48.41px] relative shrink-0 w-[185.39px]">
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-0.7px)]">
                    <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Playfair_Display'] font-normal from-[#d9d9d9] from-[49%] italic justify-center leading-[0] relative shrink-0 text-[44px] text-[transparent] to-[rgba(255,255,255,0.6)] tracking-[-0.4px] whitespace-nowrap">
                      <p className="leading-[48.4px]">they think</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[67.22px] max-w-[417px] opacity-70 relative shrink-0 w-full lg:w-[417px] mt-8 lg:mt-0">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-0.7px)]">
                <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white uppercase w-full">
                  <p className="leading-[22.4px]">FROM INDUSTRIAL PLANTS TO GLOBAL ENTERPRISES, WE’VE DELIVERED INTELLIGENT SOLUTIONS. SEE HOW FLOWTECH DRIVES REAL IMPACT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {[
            { rating: "5.0", image: imgImage3, name: "Julian Meyer", title: "OPERATIONS HEAD, MANUFACTURING GROUP", text: "“Flowtech transformed our operations end-to-end. From deployment to optimisation, everything was seamless.”" },
            { rating: "3.9", image: imgImage4, name: "amanda more", title: "ENERGY MANAGER, INDUSTRIAL PLANT", text: "“Their energy monitoring solution helped us cut costs significantly. The insights are clear, actionable, and easy to scale across multiple facilities.”" },
            { rating: "4.7", image: imgImage5, name: "alan reeds", title: "DIRECTOR, INFRASTRUCTURE SOLUTIONS", text: "“Highly reliable and technically strong team. Flowtech feels like a true partner, helping us improve safety and efficiency.”" }
          ].map((item, idx) => (
            <div key={idx} className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.05)] relative rounded-[7px] shrink-0 w-full h-full" data-name="Testimonial Card">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[64px] items-center justify-center pb-[30px] pl-[30px] pr-[20px] pt-[20px] relative size-full min-h-[400px]">
                  <div className="relative shrink-0 w-full" data-name="Header Wrap">
                    <div className="flex items-end justify-between w-full">
                      <div className="flex flex-col gap-[2px]">
                        <div className="flex items-end">
                          <span className="font-['Geist'] font-normal text-[50px] text-white uppercase leading-none">{item.rating}</span>
                          <span className="font-['Geist'] font-normal text-[20px] text-white/30 mb-2">/5</span>
                        </div>
                        <div className="flex gap-[3px]">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="size-[16px] relative">
                              <ImageWithFallback src={imgStar} className="size-full" />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="size-[110px] rounded-[7px] overflow-hidden">
                        <ImageWithFallback src={item.image} className="size-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[17px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Author Details">
                    <div className="flex flex-col font-['Geist'] font-medium text-[23px] text-white tracking-[-0.4px] leading-[25.99px]">
                      <p>{item.text}</p>
                    </div>
                    <div className="flex flex-col gap-px opacity-80">
                      <span className="font-['Geist'] font-normal text-[14px] text-white uppercase tracking-tight">{item.name}</span>
                      <span className="font-['Geist'] font-normal text-[14px] text-white/70 uppercase tracking-tight">{item.title}</span>
                    </div>
                  </div>
                  {/* Decorative Accents */}
                  <div className="absolute left-[20px] size-[20px] top-[20px]" data-name="div.framer-IU4qG:mask-group">
                    <div className="absolute bg-white left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_20px] opacity-40 size-[20px] top-0" style={{ maskImage: `url('${imgPlusLargeIcon}')` }} />
                  </div>
                  <div className="absolute bottom-[20px] right-[20px] size-[20px]" data-name="div.framer-IU4qG:mask-group">
                    <div className="absolute bg-white bottom-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_20px] opacity-40 right-0 size-[20px]" style={{ maskImage: `url('${imgPlusLargeIcon}')` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Insights Section */}
      <section className="w-full max-w-[1260px] px-6 py-40 border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-[56px] items-center justify-center max-w-[1260px] mx-auto relative shrink-0 w-full" data-name="Container">
          {/* Left Column - Image & Author */}
          <div className="aspect-[364/470] content-stretch flex items-center justify-center max-w-[364px] overflow-clip relative rounded-[7px] shrink-0 w-full" data-name="Image Wrap">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch h-full">
              <div className="flex-[1_0_0] h-full min-w-px relative rounded-[7px]" data-name="Image">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
                  <ImageWithFallback alt="" className="absolute h-full left-[-14.56%] max-w-none top-0 w-[129.12%] object-cover" src={imgDaniel} />
                </div>
              </div>
            </div>
            <div className="absolute bg-black inset-0 opacity-28 rounded-[7px]" data-name="Shape" />
            <div className="absolute bottom-[24.99px] content-stretch flex flex-col gap-[5px] items-start justify-center left-[6.87%] right-[7.13%] rounded-[6.4px]" data-name="Author Details">
              <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Name">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[72px]" data-name="Daniel">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
                    <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[23px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(66.9494deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 100%)" }}>
                      <p className="leading-[25.99px]">{`Daniel `}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-center opacity-80 relative shrink-0 w-[107px]" data-name="Hartmann">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
                    <div className="flex flex-col font-['Playfair_Display'] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[23px] whitespace-nowrap">
                      <p className="leading-[25.3px]">Hartmann</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2 → founder of freshly">
                <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white uppercase w-full">
                  <p className="leading-[19.6px]">founder of Flowtech</p>
                </div>
              </div>
            </div>
            <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center overflow-clip rounded-[7px] size-[80px] hover:scale-105 transition-transform cursor-pointer" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} data-name="Video Button">
              <div className="content-stretch flex flex-col h-[14px] items-start justify-center relative shrink-0 w-[12px]" data-name="Vector">
                <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                    <g clipPath="url(#clip0_insights)" id="svginsights">
                      <path d={svgInsightsPaths.p2b15ab00} fill="white" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_insights">
                        <rect fill="white" height="14" width="12" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="content-stretch flex flex-col gap-[41px] items-start justify-center max-w-[520px] relative shrink-0 w-full lg:w-[520px]" data-name="Content Wrapper">
            <div className="content-stretch flex flex-col gap-[22px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title Wrap">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
                <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Heading Wrap">
                  <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="h2.framer-text">
                    <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[44px] text-[transparent] text-center tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(91.8153deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.4) 100%)" }}>
                      <p className="leading-[48.4px]">Insights that matter.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="h2.framer-text">
                    <div className="flex flex-col font-['Playfair_Display'] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[44px] text-center tracking-[-0.4px] whitespace-nowrap">
                      <p className="leading-[48.4px]">Early Access.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Experience a platform engineered for impact">
                <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
                  <p className="leading-[27px]">STAY UPDATED WITH THE LATEST IN INDUSTRIAL AUTOMATION, AI SOLUTIONS, ENERGY MANAGEMENT, AND REAL-WORLD CASE STUDIES FROM FLOWTECH</p>
                </div>
              </div>
            </div>

            <form className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="form.framer-1b3r0n0">
              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="label.framer-1nsf3kb">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[33px]" data-name="div.framer-1d7cawy">
                  <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
                      <p className="leading-[17.6px]">Name</p>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.1)] relative rounded-[7px] shrink-0 w-full" data-name="div.framer-form-text-input">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
                      <input type="text" placeholder="John Doe" className="bg-transparent border-none outline-none flex flex-[1_0_0] flex-col items-start min-w-px pb-[1.39px] relative font-['Geist'] font-normal text-[16px] text-white placeholder:text-[rgba(255,255,255,0.6)] w-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="label.framer-1qxfl59">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[91px]" data-name="div.framer-1rgqtk1">
                  <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
                      <p className="leading-[17.6px]">Email Address</p>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.1)] relative rounded-[7px] shrink-0 w-full" data-name="div.framer-form-text-input">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
                      <input type="email" placeholder="hello@email.com" className="bg-transparent border-none outline-none flex flex-[1_0_0] flex-col items-start min-w-px pb-[1.39px] relative font-['Geist'] font-normal text-[16px] text-white placeholder:text-[rgba(255,255,255,0.6)] w-full" />
                    </div>
                  </div>
                </div>
              </div>

              <button className="relative rounded-[800px] shrink-0 w-fit group" style={{ backgroundImage: "linear-gradient(60.4285deg, rgb(0, 28, 169) 0%, rgb(4, 108, 228) 100%)" }} data-name="Hero Button">
                <div className="content-stretch flex items-center justify-center overflow-clip px-[44px] py-[13px] relative rounded-[inherit] size-full group-hover:scale-105 transition-transform cursor-pointer">
                  <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
                      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-white tracking-[0.5px] uppercase whitespace-nowrap">
                        <p className="leading-[19.6px] text-[14px]">Subscribe</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[800px]" />
              </button>
            </form>
          </div>
        </div>

      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};
export default ContactPage;