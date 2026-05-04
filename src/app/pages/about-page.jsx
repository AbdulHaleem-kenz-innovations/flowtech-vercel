import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';
import { NewsletterSection } from '../components/newsletter-section';
import RotationCard from '../components/rotation-card';

// Assets from Figma import
import imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg from "../../assets/3b06c86fd8535cf5a270d186cf91e904d7f06a6c.png";
import imgIcon from "../../assets/445d85002bfbb2f5b9b5a6fc82c66a3c9b6db58b.png";
import imgIcon1 from "../../assets/782f6ce0546436e8821bec9c22778b4542230974.png";
import imgImage from "../../assets/dd3cde80d86c11aada3895f36ffe663c314a3ca2.png";
import imgImage1 from "../../assets/28664606051f8506026c69bed106cd92d3ebbb23.png";
import imgIcon2 from "../../assets/6886a2ae690bf45b1c14a4ab8541b0a321dfa1d0.png";
import imgIcon3 from "../../assets/6b222335315314bfb97af68338c7e14209e057cb.png";
import imgIcon4 from "../../assets/9bec84b25147d3f444b5b7b6e9020eb3bc782326.png";
import imgIcon5 from "../../assets/a874bf47701c667cb79e4817723b9f60550fd6a6.png";
import imgImage2 from "../../assets/1ab2cead734fbf40f3614daca8f587b2c28c7db4.png";
import imgFuturisticTechnologyConcept11 from "../../assets/3e9467f54c2e804d06558cf16ffc2f23b98243d0.png";
import imgImage3 from "../../assets/25593f754374bc769956c2480da019422fc09dd7.png";
import imgVector from "../../assets/7f8f7db1b24bd3f3db04f6c6928d30f25bc8e3f5.png";
import imgVector1 from "../../assets/f9904e1428f23b9e83ae11dd28353beb0bbd42fc.png";
import imgVector2 from "../../assets/52dbe64cfeea740ffa579ab7ca8d3b864a141982.png";
import imgVector3 from "../../assets/23c9d8cdb32b5c6f95daa75d78de900199470653.png";
import imgImage4 from "../../assets/a36dc06bf52f150ae73b147605fcf1f068424de7.png";
import imgImage5 from "../../assets/e4a89e3d441973ce4d201b8a267e257b238d44bf.png";
import imgImage6 from "../../assets/d1986fe5d6cbb1975d0b296dceae5f38409b5f54.png";

// SVGs
import { imgDivFramerIu4QG, imgDivFramerIu4QG1, imgSection } from "../../imports/svg-2r94c";
import svgPaths from "../../imports/svg-4lq27j1spe";
import { RotationCardSection } from '../components/rotation-card-section';
import ScrollFadeIn from '../../components/ScrollFadeIn';

const TeamCard = ({ name, role, image, socialIcons = [imgVector, imgVector1, imgVector2, imgVector3] }) => (
  <motion.div
    className="flex flex-col gap-4 relative group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="h-[497px] rounded-[7px] overflow-hidden relative">
      <ImageWithFallback src={image} className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Detail Overlay */}
      <div className="absolute bottom-[15px] left-[15px] right-[15px]">
        <div className="bg-white rounded-[7px] p-[20px] flex flex-col gap-[17px]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="font-['Geist'] font-semibold text-[18px] text-black">{name.split(' ')[0]}</span>
              <span className="font-['Geist'] font-normal text-[18px] text-[#838383]">{name.split(' ')[1]}</span>
            </div>
            <span className="font-['Playfair_Display'] font-normal text-[14px] text-black/80 uppercase">{role}</span>
          </div>
          <div className="flex gap-3 items-center opacity-50">
            {socialIcons.map((icon, i) => (
              <div key={i} className="size-[15px] cursor-pointer hover:opacity-100 transition-opacity">
                <ImageWithFallback src={icon} className="size-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ValueCard = ({ title, description, icon }) => (
  <motion.div
    className="backdrop-blur-[15px] bg-white/5 rounded-[7px] p-6 flex flex-col gap-4 flex-1 border border-white/10"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3">
      <div className="size-[18px]">
        <ImageWithFallback src={icon} className="size-full object-contain" />
      </div>
      <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">{title}</span>
    </div>
    <p className="font-['Geist'] font-normal text-[14px] text-white/75 uppercase leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Hero Section */}
      <ScrollFadeIn>
        <section className="pt-[200px] pb-[100px] px-6 w-full max-w-[1260px] mx-auto relative flex flex-col items-center">
          <div className="backdrop-blur-[25px] bg-white/5 border border-white/10 rounded-[7px] p-10 md:p-[100px] w-full relative overflow-hidden">
            {/* Decorative icons */}
            <div className="absolute top-5 left-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute top-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />

            <div className="max-w-[800px] flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
                  <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                  <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">Our story</span>
                </div>
                <h1 className="flex flex-wrap items-end gap-x-3">
                  <span className="font-['Geist'] font-medium text-[48px] md:text-[60px] text-white leading-tight">How Flowtech</span>
                  <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-transparent leading-tight tracking-tight">came to life</span>
                </h1>
              </div>

              <div className="flex flex-col gap-4 text-white/75 font-['Geist'] text-[16px] uppercase leading-relaxed">
                <p>Flowtech was founded with a clear vision—to transform industries through intelligent systems, data-driven insights, and advanced digital technologies. With deep expertise across AI, analytics, and industrial solutions, we enable organizations to move from reactive operations to proactive, insight-led decision making.</p>
                <p>By combining Manufacturing Intelligence, Energy Monitoring Systems, and Fiber Optic-based pipeline solutions, Flowtech delivers connected ecosystems that enhance efficiency, improve safety, and drive measurable business outcomes across complex environments.</p>
              </div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-[140px] mt-8">
                <div className="flex flex-col gap-4 max-w-[330px]">
                  <div className="flex items-center gap-3">
                    <div className="size-[18px]">
                      <ImageWithFallback src={imgIcon} className="size-full object-contain" />
                    </div>
                    <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">Vision</span>
                  </div>
                  <p className="text-white/75 text-[16px] uppercase leading-relaxed font-['Geist']">To enable industries with intelligent, connected technologies that drive operational excellence, sustainability, and long-term growth.</p>
                </div>
                <div className="flex flex-col gap-4 max-w-[330px]">
                  <div className="flex items-center gap-3">
                    <div className="size-[18px]">
                      <ImageWithFallback src={imgIcon1} className="size-full object-contain" />
                    </div>
                    <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">Mission</span>
                  </div>
                  <p className="text-white/75 text-[16px] uppercase leading-relaxed font-['Geist']">To deliver advanced AI, analytics, and industrial solutions that enhance efficiency, ensure safety, and empower data-driven decision-making across every operation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Company Overview Section */}

      <section className="px-6 w-full max-w-[1260px] mx-auto mb-[150px]">
        <ScrollFadeIn>
          <div className="flex flex-col lg:flex-row gap-[25px]">
            <div className="flex-1 backdrop-blur-[10px] bg-white/5 rounded-[7px] overflow-hidden min-h-[500px] relative border border-white/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                <div className="w-full space-y-4">
                  <div className="w-full h-[420px] rounded-[7px] overflow-hidden">
                    <ImageWithFallback src={imgImage} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-[420px] rounded-[7px] overflow-hidden">
                    <ImageWithFallback src={imgImage1} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Mask image for the fade effect from figma */}
              <div className="absolute inset-0 pointer-events-none opacity-50" style={{ maskImage: `url('${imgSection}')`, maskSize: 'cover' }} />
            </div>

            <div className="flex-1 backdrop-blur-[10px] bg-white/5 rounded-[7px] p-6 md:p-12 flex flex-col justify-between border border-white/10 relative overflow-hidden">
              {/* Decorative Background Shape */}
              <div className="absolute -bottom-20 md:bottom-[-168px] -right-20 md:right-[-100px] size-[300px] md:size-[617px] opacity-10 pointer-events-none">
                <svg className="size-full" viewBox="0 0 617 617" fill="none">
                  <path d={svgPaths.p1f4a3af0} stroke="white" strokeWidth="2" opacity="0.3" />
                  <path d={svgPaths.p89c3400} stroke="white" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>

              <div className="space-y-6 md:space-y-10 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-['Geist'] font-extrabold text-white text-xl md:text-2xl uppercase italic">FLOWTECH</span>
                </div>
                <h2 className="font-['Geist'] font-medium text-[24px] md:text-[32px] text-white leading-tight max-w-[527px]">
                  Flowtech is a <span className="font-['Playfair_Display'] italic text-white/70">technology first solutions</span> company built on one clear principle: <span className="font-['Playfair_Display'] italic text-white/70">Intelligence should always drive operations forward.</span> We deliver real time AI, data, & industrial systems designed to improve efficiency, safety, & performance <span className="font-['Playfair_Display'] italic text-white/70">across modern enterprises.</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-10 md:mt-12 relative z-10">
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
                  Meet the team
                </button>
                <span className="text-white/60 font-['Geist'] text-[16px] md:text-[18px] text-center sm:text-left">Hello@flowtech.com</span>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </section>


      {/* Core Values Section */}
      <section className="px-6 w-full max-w-[1260px] mx-auto mb-[150px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[39px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <h2 className="flex flex-wrap items-center gap-x-3">
                <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[48px] md:text-[60px] text-transparent leading-tight">Core</span>
                <span className="font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-white/70 leading-tight">values</span>
              </h2>
              <p className="max-w-[345px] text-white/70 font-['Geist'] text-[16px] uppercase leading-relaxed">
                FROM INDUSTRIAL OPERATIONS TO CRITICAL INFRASTRUCTURE, WE DELIVER RELIABLE SOLUTIONS. EXPLORE HOW WE DRIVE EFFICIENCY, SAFETY, AND PERFORMANCE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
              <ValueCard
                title="ENGINEERING PRECISION"
                description="WE DESIGN ROBUST SYSTEMS WITH ACCURACY, RELIABILITY, AND OPERATIONAL CLARITY"
                icon={imgIcon2}
              />
              <ValueCard
                title="OPERATION FIRST APPROACH"
                description="YOUR OPERATIONS COME FIRST. WE ANALYSE, OPTIMISE, AND SCALE WITH YOU"
                icon={imgIcon3}
              />
              <ValueCard
                title="Data Driven Decisions"
                description="REAL TIME DATA MEETS ACTIONABLE INSIGHTS. WE ENABLE SMARTER DECISIONS"
                icon={imgIcon4}
              />
              <ValueCard
                title="CONTINUOUS INNOVATION"
                description="TECHNOLOGY EVOLVES CONSTANTLY—SO DO WE. DRIVEN BY ADVANCEMENT."
                icon={imgIcon5}
              />
            </div>

            {/* Support Banner */}
            <div className="backdrop-blur-[15px] bg-white/5 border border-white/10 rounded-2xl md:rounded-[50px] p-5 md:p-2 md:pr-6 flex flex-col md:flex-row items-center justify-between max-w-[800px] mx-auto w-full mt-4 gap-6 md:gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="size-[60px] md:size-[70px] rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                  <ImageWithFallback src={imgImage2} className="size-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-0.5">
                    <span className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white">Hi there,</span>
                    <span className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white">Flowtech</span>
                    <span className="font-['Playfair_Display'] italic text-[18px] md:text-[23px] text-white/60 italic leading-none">support team here</span>
                  </div>
                  <p className="text-white/70 font-['Geist'] text-[12px] md:text-[14px] uppercase tracking-wide mt-1">FEEL FREE TO REACH OUT IF YOU NEED HELP WITH OUR SOLUTIONS</p>
                </div>
              </div>
              <button className="   relative overflow-hidden
              flex items-center justify-center
              w-full sm:w-fit
              px-6 py-3
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
                Contact us
              </button>
            </div>
          </div>

          {/* Industrial Image */}
          <div className="mt-[100px] h-[630px] rounded-[7px] overflow-hidden relative group">
            <ImageWithFallback src={imgFuturisticTechnologyConcept11} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/20" />
            {/* Decorative icons at corners */}
            <div className="absolute top-5 left-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute top-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 left-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
          </div>
        </ScrollFadeIn>
      </section>

      {/* Our Team Section */}

      <section className="px-6 w-full max-w-[1260px] mx-auto mb-[150px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-10">
              <div className="flex flex-col gap-4 md:gap-6 w-full lg:max-w-[320px]">
                <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
                  <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                  <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-widest">team member</span>
                </div>
                <h2 className="flex flex-wrap items-center gap-x-3">
                  <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] sm:text-[48px] md:text-[60px] text-transparent leading-tight">Our</span>
                  <span className="font-['Playfair_Display'] italic font-normal text-[36px] sm:text-[48px] md:text-[60px] text-white/70 leading-tight">team</span>
                </h2>
              </div>
              <p className="max-w-[450px] lg:max-w-[345px] text-white/70 font-['Geist'] text-[14px] md:text-[16px] uppercase leading-relaxed">
                FROM INDUSTRIAL SYSTEMS TO ENTERPRISE SOLUTIONS, OUR TEAM DRIVES INNOVATION AND IMPACT ACROSS EVERY DEPLOYMENT
              </p>
              <button className="   relative overflow-hidden
              flex items-center justify-center
              w-full sm:w-auto
              px-6 py-3
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
                Join us
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[30px]">
              <TeamCard name="Omar Hassan" role="CHIEF TECHNOLOGY OFFICER" image={imgImage3} />
              <TeamCard name="Layla Al-Farsi" role="VP OF OPERATIONS" image={imgImage4} />
              <TeamCard name="Yousef Al-Mansoori" role="HEAD OF ENGINEERING" image={imgImage1} />
              <TeamCard name="Noura Al-Sayed" role="UX/UI DESIGNER" image={imgImage5} />
              <TeamCard name="Khalid Al-Nahyan" role="DATA & ANALYTICS LEAD" image={imgImage2} />
              <TeamCard name="Amina Al-Harbi" role="PRODUCT SPECIALIST" image={imgImage6} />
            </div>
          </div>
        </ScrollFadeIn>
      </section>


      {/* Industrial Power Section */}
      <section className="w-full h-[1000px] mb-[8px] relative overflow-hidden">
        <ScrollFadeIn>
          <RotationCardSection />
        </ScrollFadeIn>
      </section>
      <ScrollFadeIn>
        {/* Newsletter Section */}
        <NewsletterSection />

        <FooterSection />
      </ScrollFadeIn>
    </div>
  );
};
export default AboutPage