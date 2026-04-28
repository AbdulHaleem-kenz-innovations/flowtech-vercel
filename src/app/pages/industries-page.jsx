import React from 'react';
import { ContactSection } from '../components/contact-section';
import { RotationCardSection } from '../components/rotation-card-section';
import { BlogSection } from '../components/blog-section';
import { FooterSection } from '../components/footer-section';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

// Images from Industries.tsx
import imgLalitKumarHpPmiduLdc0Unsplash1 from "../../assets/fa82f8211887771169b077207fe2277e6dcae80a.png";
import imgAmericanPublicPowerAssociationTwF1stZFz8Unsplash1 from "../../assets/42db079a7d9725eb489d9c367fff57137c3c427a.png";
import img1S32PRd3OwUHmTftJi70Y6SFfcMPng from "../../assets/1854d22b3cfc3914f9f5575395a6f05e77832a69.png";
import imgScreenshot20260420At25442Pm1 from "../../assets/e1dcc9e435ab91cb6be407673593b96ed5fd1213.png";
import imgScreenshot20260420At25442Pm2 from "../../assets/bd2be405207692b19a3fbcf74fd73eccb16aa347.png";
import imgScreenshot20260420At25442Pm3 from "../../assets/5dea89e4b32d1afe7d1c09a0148d826f2f577105.png";
import imgScreenshot20260420At25442Pm4 from "../../assets/320dbf97e1f517151385ea112c3589c32dc6353f.png";
import imgScreenshot20260420At25442Pm5 from "../../assets/4d405b4ec4ef680019b7738f7299edba20336f08.png";
import imgScreenshot20260420At30549Pm1 from "../../assets/185ee89b3533193961a3174492c77257e876a775.png";
import imgScreenshot20260420At30329Pm1 from "../../assets/5c7764e5d6b12c3141895d7864aae81197b07c90.png";

// SVGs
import { imgDivFramerIu4QG, imgDivFramerIu4QG1 } from "../../imports/svg-8em4t";

const HeroSection = () => {
  const images = [
    { src: imgScreenshot20260420At25442Pm2, className: "absolute top-0 left-[10%] w-[20%] md:w-[15%] aspect-[3/4] rounded-2xl blur-[4px] opacity-30 md:opacity-40" },
    { src: imgScreenshot20260420At25442Pm5, className: "absolute top-[5%] right-[10%] md:right-[15%] w-[20%] md:w-[15%] aspect-[3/4] rounded-2xl blur-[4px] opacity-30 md:opacity-40" },
    { src: imgScreenshot20260420At25442Pm4, className: "absolute top-[20%] right-[-5%] md:right-[2%] w-[20%] md:w-[15%] aspect-[3/4] rounded-2xl blur-[4px] opacity-30 md:opacity-40 hidden sm:block" },
    { src: imgScreenshot20260420At25442Pm1, className: "absolute bottom-[10%] left-[-5%] md:left-[2%] w-[20%] md:w-[15%] aspect-[3/4] rounded-2xl blur-[4px] opacity-30 md:opacity-40 hidden sm:block" },
    { src: imgScreenshot20260420At30329Pm1, className: "absolute bottom-[5%] left-[20%] md:left-[25%] w-[20%] md:w-[15%] aspect-[3/4] rounded-2xl blur-[4px] opacity-30 md:opacity-40" },
    { src: imgScreenshot20260420At25442Pm3, className: "absolute bottom-[10%] right-[20%] md:right-[25%] w-[20%] md:w-[15%] aspect-[3/4] rounded-2xl blur-[4px] opacity-30 md:opacity-40" },
    { src: imgScreenshot20260420At30549Pm1, className: "absolute bottom-[20%] right-[-5%] md:right-[10%] w-[20%] md:w-[15%] aspect-[3/4] rounded-2xl blur-[4px] opacity-30 md:opacity-40 hidden sm:block" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Floating Images */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          className={img.className}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        >
          <ImageWithFallback src={img.src} className="size-full object-cover rounded-[inherit]" />
        </motion.div>
      ))}

      {/* Hero Content */}
      <section className="relative z-10 pt-[160px] md:pt-[200px] pb-[80px] md:pb-[100px] px-6 text-center max-w-[1260px] mx-auto flex flex-col items-center gap-8 md:gap-10">
        <motion.div
          className="backdrop-blur-md bg-white/5 px-4 py-2 rounded-md border border-white/10 flex items-center gap-2 w-fit"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-4 h-4 bg-white/40" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
          <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-widest">Industries we serve</span>
        </motion.div>

        <motion.h1
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] sm:text-[48px] md:text-[60px] text-transparent tracking-tight leading-[1.1]">
            Industries we power,
          </span>
          <span className="font-['Playfair_Display'] italic font-normal text-[36px] sm:text-[48px] md:text-[60px] text-white/70 tracking-tight leading-[1.1]">
            with intelligent solutions.
          </span>
        </motion.h1>

        <motion.p
          className="font-['Geist'] text-white/70 text-[13px] md:text-[16px] uppercase tracking-widest max-w-[800px] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.2 }}
        >
          FLOWTECH ENABLES MANUFACTURING, ENERGY, AND PIPELINE OPERATIONS WITH REAL-TIME MONITORING, PREDICTIVE INSIGHTS, AND ADVANCED ANALYTICS SYSTEMS.
        </motion.p>
      </section>
    </div>
  );
};

const IndustryCard = ({ title, intro, image, capabilities, outcome, icon: IconComponent }) => (
  <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1260px] mb-6">
    {/* Image Side */}
    <div className="flex-1 rounded-[7px] overflow-hidden min-h-[350px] md:min-h-[400px] lg:min-h-[620px] relative border border-white/10">
      <ImageWithFallback src={image} className="absolute inset-0 size-full object-cover" />
    </div>

    {/* Content Side */}
    <div className="flex-1 backdrop-blur-[25px] bg-white/10 p-6 md:p-12 rounded-[7px] flex flex-col gap-8 md:gap-10 text-left border border-white/5">
      {/* Category Header */}
      <div className="flex flex-col gap-6">
        <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-md flex gap-2 items-center w-fit border border-white/10">
          <div className="size-[18px] text-white">
            {IconComponent && <IconComponent />}
          </div>
          <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">{title}</span>
        </div>
        <div className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[20px] md:text-[22px] text-transparent leading-relaxed tracking-tight">
          {intro}
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="flex flex-col gap-6">
        <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-md flex gap-2 items-center w-fit border border-white/10">
          <div className="size-[15px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
          <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">Key Capabilities</span>
        </div>
        <div className="flex flex-col gap-4">
          {capabilities.map((cap, i) => (
            <div key={i} className="flex gap-3 items-center">
              <div className="size-[16px] text-white/60">
                <svg viewBox="0 0 15 19" className="size-full fill-current">
                  <path d="M7.5 0L15 9.5H10.5L13.5 19L0 9.5H4.5L7.5 0Z" />
                </svg>
              </div>
              <span className="font-['Geist'] font-semibold text-[14px] md:text-[16px] text-white uppercase tracking-wide">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div className="mt-auto flex flex-col gap-4">
        <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-md flex gap-2 items-center w-fit border border-white/10">
          <div className="size-[15px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
          <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">Outcome</span>
        </div>
        <div className="font-['Geist'] font-semibold text-[14px] md:text-[16px] text-white uppercase tracking-wide">
          {outcome}
        </div>
      </div>
    </div>
  </div>
);

const ContentSection = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 md:py-20 gap-16 md:gap-20">
      {/* Section Header */}
      <div className="max-w-[1260px] w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-6 md:mb-10">
        <div className="flex flex-col gap-6">
          <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit border border-white/10">
            <div className="size-[16px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
            <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">CORE Industries</span>
          </div>
          <h2 className="bg-clip-text bg-gradient-to-l from-white/40 to-white font-['Geist'] font-medium text-[40px] md:text-[60px] text-transparent tracking-tight leading-tight">Industries</h2>
        </div>
        <div className="max-w-[420px] opacity-70">
          <p className="font-['Geist'] text-white text-[14px] md:text-[16px] uppercase leading-relaxed">
            FROM DATA TO INFRASTRUCTURE, WE DELIVER END-TO-END DIGITAL AND INDUSTRIAL SOLUTIONS BUILT FOR SCALE AND IMPACT
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full flex flex-col items-center gap-6">
        <IndustryCard
          title="Manufacturing"
          icon={() => (
            <svg viewBox="0 0 24 24" className="size-full fill-current">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
            </svg>
          )}
          intro="Flowtech’s Manufacturing Intelligence solution enables complete visibility across production lines, helping teams optimise performance, reduce downtime, and improve decision-making through real-time dashboards and analytics."
          image={imgLalitKumarHpPmiduLdc0Unsplash1}
          capabilities={[
            "Real-time production monitoring",
            "Predictive insights for operations",
            "Centralized dashboards",
            "End-to-end operational visibility"
          ]}
          outcome="Improved efficiency, reduced downtime, and data-driven production control."
        />

        <IndustryCard
          title="Energy & Utilities"
          icon={() => (
            <svg viewBox="0 0 24 24" className="size-full fill-current">
              <path d="M7,2V5H10V11L7,22H10V14L13,22H16V16L19,22H22L15,2H12V5H9V2H7M11,16V22H14V16H11Z" />
            </svg>
          )}
          intro="The Energy Monitoring System (EMS) provides real-time visibility into energy usage, enabling organizations to track consumption, identify inefficiencies, and optimize performance across facilities."
          image={imgAmericanPublicPowerAssociationTwF1stZFz8Unsplash1}
          capabilities={[
            "Real-time energy tracking",
            "Efficienciy analytics and insights",
            "Alerts for anomalies",
            "Sustainability reporting"
          ]}
          outcome="Reduced energy costs, improved efficiency, and better sustainability management."
        />

        <IndustryCard
          title="Pipelines"
          icon={() => (
            <svg viewBox="0 0 24 24" className="size-full fill-current">
              <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
            </svg>
          )}
          intro="Flowtech’s Pipeline Safety solution uses distributed fiber optic sensing (DFOS) to detect leaks, intrusions, and anomalies in real-time, ensuring operational safety and minimizing risks."
          image={img1S32PRd3OwUHmTftJi70Y6SFfcMPng}
          capabilities={[
            "Real-time leak detection",
            "Intrusion monitoring",
            "Continuous pipeline surveillance",
            "Advanced analytics"
          ]}
          outcome="Enhanced safety, faster response times, and reduced operational risks."
        />
      </div>

      {/* Connect Button */}
      <button className="bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-10 md:px-12 py-4 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-xs md:text-sm tracking-[0.5px] uppercase hover:scale-105 transition-transform mt-10">
        Connect US
      </button>
    </section>
  );
};

export const IndustriesPage = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <ContentSection />
      <div className="w-full">
        <ContactSection />
        <RotationCardSection />
        <BlogSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default IndustriesPage;
