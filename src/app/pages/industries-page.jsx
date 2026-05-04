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
import ScrollFadeIn from '../../components/ScrollFadeIn';

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
    <section className="flex flex-col items-center px-6 py-12 md:py-20 gap-16 md:gap-10">
      {/* Section Header */}
      {/* <div className="max-w-[1260px] w-full flex flex-col lg:flex-row items-start lg:items-end justify-center gap-10 mb-6 md:mb-10">
        <div className="flex flex-col gap-6 items-start">
          <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit border border-white/10">
            <div className="size-[16px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
            <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">CORE Industries</span>
          </div>
          <h2 className="bg-clip-text bg-gradient-to-l from-white/40 to-white font-['Geist'] font-medium text-[40px] md:text-[60px] text-transparent tracking-tight leading-tight">Industries</h2>
        </div>
        <div className="max-w-[420px] opacity-70 ">
          <p className="font-['Geist'] text-white text-[14px] md:text-[16px] uppercase leading-relaxed">
            FROM DATA TO INFRASTRUCTURE, WE DELIVER END-TO-END DIGITAL AND INDUSTRIAL SOLUTIONS BUILT FOR SCALE AND IMPACT
          </p>
        </div>
      </div> */}
  
  <div className="relative max-w-[1260px] w-full flex flex-col lg:flex-row items-start lg:items-end gap-10 mb-6 md:mb-10">

  {/* Left content */}
  <div className="flex flex-col gap-6 items-start z-10">
    <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit border border-white/10">
      <div
        className="size-[16px] bg-white"
        style={{
          maskImage: `url('${imgDivFramerIu4QG}')`,
          maskSize: 'contain'
        }}
      />
      <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">
        CORE Industries
      </span>
    </div>

    <h2 className="bg-clip-text bg-gradient-to-l from-white/40 to-white font-['Geist'] font-medium text-[40px] md:text-[60px] text-transparent tracking-tight leading-tight">
      Industries
    </h2>
  </div>

  {/* Centered paragraph */}
  <div className="max-w-[420px] opacity-70 mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0">
    <p className="font-['Geist'] text-white text-[14px] md:text-[16px] uppercase leading-relaxed text-center">
      FROM DATA TO INFRASTRUCTURE, WE DELIVER END-TO-END DIGITAL AND INDUSTRIAL SOLUTIONS BUILT FOR SCALE AND IMPACT
    </p>
  </div>

</div>

      {/* Cards */}
      <div className="w-full flex flex-col items-center gap-6">
        <ScrollFadeIn>
        <IndustryCard
          title="Manufacturing"
          icon={() => (
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.31258 17.5001V15.0001H5.89591L3.77091 8.04179C3.39591 7.83346 3.08703 7.5279 2.84425 7.12513C2.60147 6.72235 2.4798 6.29179 2.47925 5.83346C2.47925 5.13901 2.7223 4.54874 3.20841 4.06263C3.69453 3.57651 4.2848 3.33346 4.97925 3.33346C5.52091 3.33346 6.00369 3.48985 6.42758 3.80263C6.85147 4.1154 7.14647 4.51457 7.31258 5.00013H9.97925V4.16679C9.97925 3.93068 10.0592 3.7329 10.2192 3.57346C10.3792 3.41401 10.577 3.33401 10.8126 3.33346C10.9376 3.33346 11.0592 3.36124 11.1776 3.41679C11.2959 3.47235 11.3965 3.55568 11.4792 3.66679L12.8959 2.33346C13.0209 2.20846 13.1704 2.12846 13.3442 2.09346C13.5181 2.05846 13.6881 2.0829 13.8542 2.16679L17.1042 3.66679C17.2709 3.75013 17.3856 3.87179 17.4484 4.03179C17.5112 4.19179 17.5076 4.3479 17.4376 4.50013C17.3542 4.66679 17.2329 4.77457 17.0734 4.82346C16.914 4.87235 16.7576 4.86179 16.6042 4.79179L13.6042 3.41679L11.6459 5.25013V6.41679L13.6042 8.20846L16.6042 6.83346C16.757 6.76401 16.9167 6.75707 17.0834 6.81263C17.2501 6.86818 17.3681 6.97235 17.4376 7.12513C17.5209 7.29179 17.5279 7.45151 17.4584 7.60429C17.389 7.75707 17.2709 7.87513 17.1042 7.95846L13.8542 9.50013C13.6876 9.58346 13.5176 9.60763 13.3442 9.57263C13.1709 9.53763 13.0215 9.4579 12.8959 9.33346L11.4792 8.00013C11.3959 8.08346 11.2954 8.15985 11.1776 8.22929C11.0598 8.29874 10.9381 8.33346 10.8126 8.33346C10.5765 8.33346 10.3787 8.25374 10.2192 8.09429C10.0598 7.93485 9.9798 7.73679 9.97925 7.50013V6.66679H7.31258C7.27091 6.7779 7.22591 6.88207 7.17758 6.97929C7.12925 7.07651 7.06314 7.18068 6.97925 7.29179L11.1459 15.0001H14.1459V17.5001H3.31258ZM5.57341 6.42679C5.73286 6.26735 5.81258 6.06957 5.81258 5.83346C5.81258 5.59735 5.73286 5.39957 5.57341 5.24013C5.41397 5.08068 5.21591 5.00068 4.97925 5.00013C4.74258 4.99957 4.5448 5.07957 4.38591 5.24013C4.22703 5.40068 4.14703 5.59846 4.14591 5.83346C4.1448 6.06846 4.2248 6.26651 4.38591 6.42763C4.54703 6.58874 4.7448 6.66846 4.97925 6.66679C5.21369 6.66513 5.41175 6.58512 5.57341 6.42679Z" fill="white"/>
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
        </ScrollFadeIn>
           
          <ScrollFadeIn>
        <IndustryCard
          title="Energy & Utilities"
          icon={() => (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.02075 13.6042L12.8541 10.1875C12.9791 10.0764 13.0138 9.94449 12.9583 9.79171C12.9027 9.63893 12.7916 9.54865 12.6249 9.52087L9.62492 9.22921L11.4166 6.75004C11.4583 6.6806 11.4827 6.61449 11.4899 6.55171C11.4971 6.48893 11.4727 6.43004 11.4166 6.37504C11.361 6.3056 11.2916 6.27449 11.2083 6.28171C11.1249 6.28893 11.0485 6.32004 10.9791 6.37504L7.16659 9.79171C7.04159 9.90282 7.00686 10.0348 7.06242 10.1875C7.11797 10.3403 7.22909 10.4306 7.39575 10.4584L10.3958 10.75L8.58325 13.2292C8.54159 13.2987 8.52075 13.3645 8.52075 13.4267C8.52075 13.4889 8.54853 13.5481 8.60408 13.6042C8.65964 13.6603 8.72575 13.6881 8.80242 13.6875C8.87909 13.687 8.95186 13.6592 9.02075 13.6042ZM9.99992 16.6667C9.22214 16.6667 8.48964 16.545 7.80242 16.3017C7.1152 16.0584 6.48659 15.7148 5.91659 15.2709L4.77075 16.4167C4.68742 16.5 4.59381 16.5625 4.48992 16.6042C4.38603 16.6459 4.27825 16.6667 4.16659 16.6667C3.93047 16.6667 3.7327 16.5867 3.57325 16.4267C3.41381 16.2667 3.33381 16.0689 3.33325 15.8334C3.33325 15.7223 3.35409 15.6148 3.39575 15.5109C3.43742 15.407 3.49992 15.3131 3.58325 15.2292L4.72909 14.0834C4.28464 13.5139 3.94103 12.8856 3.69825 12.1984C3.45547 11.5112 3.33381 10.7784 3.33325 10C3.33325 8.13893 3.97909 6.56254 5.27075 5.27087C6.56242 3.97921 8.13881 3.33337 9.99992 3.33337H16.6666V10C16.6666 11.8612 16.0208 13.4375 14.7291 14.7292C13.4374 16.0209 11.861 16.6667 9.99992 16.6667Z" fill="white"/>
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
        </ScrollFadeIn>

          <ScrollFadeIn>
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
        </ScrollFadeIn>
      </div>

      {/* Connect Button */}
     <button className="
              relative overflow-hidden
              flex items-center justify-center
              w-full sm:w-fit
              px-8 py-4
              rounded-full
              bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)]
              border border-white/20
              text-white uppercase whitespace-nowrap
              font-['Geist'] text-[16px]
              cursor-pointer
              transition-all duration-300 
              hover:scale-105 active:scale-95 
              glare-btn
            ">
        Connect US
      </button>
    </section>
  );
};

export const IndustriesPage = () => {
  return (
    <div className="w-full flex flex-col">
      <ScrollFadeIn>
      <HeroSection />
      <ContentSection />
      </ScrollFadeIn>
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
