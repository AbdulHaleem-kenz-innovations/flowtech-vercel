import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPaths from "../../imports/svg-ntnkjevf2u";
import imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg from "../../assets/3b06c86fd8535cf5a270d186cf91e904d7f06a6c.png";
import imgGroupSuccessfulBusinessPeople1 from "../../assets/267d4f0594aeec11d72c4dea7da2597663f4a736.png";
import imgIcon from "../../assets/445d85002bfbb2f5b9b5a6fc82c66a3c9b6db58b.png";
import imgGoldenPawnChessMoveOutFromLineDifferentThinkingLeadingChangeDisruptionUniqueConceptBy3DRender1 from "../../assets/c0ef51060dd75814baf5d293d141c65a8e99bc93.png";
import imgBusinessHandshakeContract1 from "../../assets/383098714fddf4259383e1d9ca4e645cee702dd4.png";
import imgImage from "../../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";
import imgImage1 from "../../assets/49208a0f068229058add6f6c6c1d9a3f7c59ffa5.png";
import imgImage2 from "../../assets/471de929844a70aecd4765b69e70d32ebd8478b4.png";
import imgGroup31 from "../../assets/d9e1587466443d2cc869bd53ca5485e1cec1d65a.png";
import imgIcon1 from "../../assets/ce1325e35b20a36f04f5cb3826377f8737e01c09.png";
import imgIcon2 from "../../assets/18a6f5127f63a422c53c5b78ebe9fca988d873fa.png";
import imgIcon3 from "../../assets/51ffed27f8563ca2ad8315deb10fabefcc04a9bc.png";
import imgIcon4 from "../../assets/0a5aa46c4dced89013f2a2a5b9b8353e09cd6368.png";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1 } from "../../imports/svg-0ayib";
import { FooterSection } from '../components/footer-section';
import { NewsletterSection } from '../components/newsletter-section';

const HeroSection = () => (
  <section className="w-full max-w-[1260px] mx-auto pt-[200px] pb-[100px] px-6 flex flex-col items-center gap-10 text-center relative z-10">
    <motion.div 
      className="backdrop-blur-md bg-white/5 px-4 py-2 rounded-md border border-white/10 flex items-center gap-2 w-fit"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-4 h-4 bg-white/40" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
      <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">careers</span>
    </motion.div>

    <motion.h1 
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[48px] md:text-[60px] text-transparent tracking-tight leading-[1.1]">
        Build the future.
      </span>
      <span className="font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-white/70 tracking-tight leading-[1.1]">
        Industrial intelligence.
      </span>
    </motion.h1>

    <motion.p 
      className="font-['Geist'] text-white/70 text-[14px] md:text-[16px] uppercase tracking-widest max-w-[800px] leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay: 0.2 }}
    >
      JOIN FLOWTECH AND WORK ON REAL-WORLD SYSTEMS POWERED BY DATA, AI, AND ADVANCED MONITORING TECHNOLOGIES ACROSS INDUSTRIES.
    </motion.p>
    
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
              glare-btn
">
                  View Open Roles
                </button>
  </section>
);

const WhyJoinSection = () => (
  <section className="w-full max-w-[1260px] mx-auto py-[100px] px-6 relative z-10">
    <div className="flex flex-col gap-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="flex flex-col gap-6">
           <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
            <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
            <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">The big why</span>
          </div>
          <h2 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[48px] md:text-[60px] text-transparent leading-tight">
            Why join Flowtech
          </h2>
        </div>
        <p className="max-w-[420px] text-white font-['Geist'] text-[16px] uppercase leading-relaxed text-right">
          We solve complex operational challenges across manufacturing, energy, and infrastructure—creating real impact at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px]">
        <div className="h-[500px] rounded-[7px] overflow-hidden relative border border-white/10">
          <ImageWithFallback src={imgGroupSuccessfulBusinessPeople1} className="size-full object-cover" />
        </div>
        <div className="backdrop-blur-[25px] bg-white/5 border border-white/10 rounded-[7px] p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-8">
            <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
              <div className="size-4">
                <ImageWithFallback src={imgIcon} className="size-full object-contain" />
              </div>
              <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">Our vision</span>
            </div>
            <h3 className="font-['Geist'] font-medium text-[22px] text-white leading-tight uppercase">
              To enable industries with intelligent, connected technologies that drive operational excellence, sustainability, and long-term growth.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-10">
            {[
              { title: "Real-World Impact", desc: "Work on solutions deployed across critical industries and live environments" },
              { title: "Cutting-Edge Technology", desc: "Build with AI, analytics, IoT, and advanced monitoring systems" },
              { title: "Growth & Ownership", desc: "Take ownership of products and grow with high-impact responsibilities" },
              { title: "Collaborative Culture", desc: "Work with cross-functional teams solving meaningful problems together" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-['Geist'] font-semibold text-[16px] text-white uppercase">{item.title}</span>
                <p className="font-['Geist'] font-normal text-[14px] text-white/70 uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h3 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[32px] text-transparent tracking-tight">
            Different Minds, One Vision
          </h3>
          <p className="text-white/70 font-['Geist'] text-[20px] leading-relaxed uppercase">
            Our team brings together engineers, analysts, and problem-solvers building intelligent systems for real-world industries. We value ownership, collaboration, and the belief that impactful solutions come from strong thinking. Here, you’ll learn, build, and grow with people shaping the future of operations.
          </p>
        </div>
        <div className="h-[500px] rounded-[7px] overflow-hidden order-1 md:order-2 border border-white/10">
          <ImageWithFallback src={imgGoldenPawnChessMoveOutFromLineDifferentThinkingLeadingChangeDisruptionUniqueConceptBy3DRender1} className="size-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center">
        <div className="h-[500px] rounded-[7px] overflow-hidden border border-white/10">
          <ImageWithFallback src={imgBusinessHandshakeContract1} className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[32px] text-transparent tracking-tight">
            Work That Leaves a Mark
          </h3>
          <p className="text-white/70 font-['Geist'] text-[20px] leading-relaxed uppercase">
            We don’t just build technology—we deliver systems that transform how industries operate. You’ll work on solutions you can point to and say, “I helped build that.”
          </p>
        </div>
      </div>
    </div>
  </section>
);

const JobOpenings = () => (
  <section className="w-full max-w-[1260px] mx-auto py-[100px] px-6 relative z-10">
    <div className="backdrop-blur-[25px] bg-white/5 border border-white/10 rounded-[7px] p-10 md:p-16 flex flex-col gap-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-6">
          <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
            <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
            <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">Careers</span>
          </div>
          <h2 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[60px] text-transparent leading-tight">
            Job openings
          </h2>
        </div>
        <p className="max-w-[420px] text-white/70 font-['Geist'] text-[16px] uppercase leading-relaxed text-right">
          We’re always looking for driven people to build and scale impactful solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col gap-8 w-full lg:w-[400px]">
          <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
            <svg className="size-4" viewBox="0 0 20 20" fill="white">
              <path d={svgPaths.p2ead8e80} />
            </svg>
            <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">Benefits</span>
          </div>
          <div className="flex flex-col gap-4">
            {[
              "Competitive Salary + Performance bonus",
              "Flexible Work Environment & Hours",
              "High-Impact Industrial Projects",
              "Continuous Learning & Growth"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <svg className="size-5 shrink-0" viewBox="0 0 20 20" fill="white">
                  <path d={svgPaths.p9ebcb80} />
                </svg>
                <span className="font-['Geist'] font-semibold text-[16px] text-white uppercase tracking-wide">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {[
            { title: "Industrial Solutions Project Manager", loc: "ON-SITE (INDIA) / FULL-TIME / ₹18L – ₹28L" },
            { title: "AI & Data Engineer", loc: "REMOTE / FULL-TIME / ₹12L – ₹22L" },
            { title: "Energy Systems Analyst (EMS)", loc: "ON-SITE (UAE) / CONTRACT / ₹15L – ₹25L" },
            { title: "Software Engineer – Backend", loc: "REMOTE / FULL-TIME / ₹10L – ₹20L" },
            { title: "Product Designer – Industrial Platforms", loc: "ON-SITE (INDIA) / FULL-TIME / ₹12L – ₹18L" }
          ].map((job, i) => (
            <div key={i} className="backdrop-blur-[25px] bg-white/10 border border-white/10 rounded-[7px] p-6 group cursor-pointer hover:bg-white/20 transition-colors">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <h4 className="font-['Geist'] font-medium text-[24px] md:text-[32px] text-white leading-tight tracking-tight">
                    {job.title}
                  </h4>
                  <p className="text-white/60 font-['Geist'] text-[18px] md:text-[22px] uppercase">
                    {job.loc}
                  </p>
                </div>
                <div className="size-11 rounded-full bg-white/10 flex items-center justify-center rotate-45 group-hover:bg-white group-hover:text-black transition-colors">
                   <svg className="size-6" viewBox="0 0 44 44" fill="currentColor">
                      <path d={svgPaths.p39f6a080} />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const InsightsSection = () => (
  <section className="w-full max-w-[1260px] mx-auto py-[100px] px-6 relative z-10">
     <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-[364px] aspect-[364/470] rounded-[7px] overflow-hidden relative border border-white/10 group">
           <ImageWithFallback src={imgImage} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-black/20" />
           <div className="absolute bottom-6 left-6 flex flex-col">
              <div className="flex items-center gap-1.5">
                 <span className="font-['Geist'] font-medium text-[23px] text-white">Daniel</span>
                 <span className="font-['Playfair_Display'] font-normal italic text-[23px] text-white/80">Hartmann</span>
              </div>
              <span className="font-['Geist'] text-[14px] text-white/80 uppercase">founder of Flowtech</span>
           </div>
           <div className="absolute inset-0 flex items-center justify-center">
              <button className="size-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-white ml-1" />
              </button>
           </div>
        </div>
        <div className="flex-1 flex flex-col gap-10">
           <div className="flex flex-col gap-6">
              <h2 className="flex flex-wrap items-center gap-x-3 leading-tight tracking-tight">
                 <span className="font-['Geist'] font-medium text-[44px] text-white">Insights that</span>
                 <span className="font-['Playfair_Display'] italic font-normal text-[44px] text-white/70">matter.</span>
                 <span className="font-['Playfair_Display'] italic font-normal text-[44px] text-white/70">Early Access.</span>
              </h2>
              <p className="max-w-[500px] text-white/70 font-['Geist'] text-[18px] uppercase leading-relaxed">
                 STAY UPDATED WITH THE LATEST IN INDUSTRIAL AUTOMATION, AI SOLUTIONS, ENERGY MANAGEMENT, AND REAL-WORLD CASE STUDIES FROM FLOWTECH
              </p>
           </div>
           <form className="flex flex-col gap-4 max-w-[400px]">
              <div className="flex flex-col gap-2">
                 <label className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">Name</label>
                 <input type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                 <label className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">Email Address</label>
                 <input type="email" placeholder="hello@email.com" className="bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <button type="submit" className="bg-gradient-to-r from-[#001ca9] to-[#046ce4] py-4 rounded-full text-white font-['Geist'] text-[14px] uppercase tracking-widest mt-2 shadow-[0_7px_80px_-12px_rgba(17,15,223,1)]">
                 Subscribe
              </button>
           </form>
        </div>
     </div>
  </section>
);

export const CareersPage = () => {
  return (
    <div className="w-full relative">
      <HeroSection />
      <WhyJoinSection />
      <JobOpenings />
      {/* <InsightsSection /> */}
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default CareersPage;
