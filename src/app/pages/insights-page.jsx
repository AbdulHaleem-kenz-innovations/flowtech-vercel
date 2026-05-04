import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';

import { NewsletterSection } from '../components/newsletter-section';

// Assets from InsightPage.tsx
import imgSimonKadula8Gr6BObQloiUnsplash1 from "../../assets/e1dcc9e435ab91cb6be407673593b96ed5fd1213.png";
import imgIcon from "../../assets/2372b9fca56ab7b15568aca9e51b649f887db747.png";
import imgBrettJordanAfbBhcXeEiUnsplash1 from "../../assets/160918d3c1ae836f98580b56793925e5366b310a.png";
import imgVictorUoIiVYka3VyUnsplash1 from "../../assets/d13ce970613ef8a883efa59e168e7ec2c548ae6a.png";
import imgRemoteControlSoundSettingsFromTablet1 from "../../assets/abf7b3f75dbb5a842260804cd11d591bf760f86c.png";
import imgCarMechanicWearingWhiteUniformStandHoldingWrench1 from "../../assets/1c94e2dfaeaaced7051180c5bfdfedb4e047e2ff.png";
import imgRepresentationUserExperienceInterfaceDesign1 from "../../assets/71ebca363b891b35d2599ab00c8f12e776a2b9b0.png";
import imgFuturisticTechnologyConcept1 from "../../assets/590501c6813c5415ccfadb50476ec414a3dccddb.png";
import imgImage from "../../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";

// SVGs
import { imgDivFramerIu4QG, imgDivFramerIu4QG1, imgDivFramerYVnZo, imgDivFramer1K87S } from "../../imports/svg-m7nqb";
import { imgDivFramerIu4QG as imgPlusIcon, imgDivFramerYVnZo as imgCalendarIcon, imgDivFramer1K87S as imgArrowRightIcon } from "../../imports/svg-9bxc3";
import ScrollFadeIn from '../../components/ScrollFadeIn';

 const InsightsPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <ScrollFadeIn>
      <section className="pt-[140px] md:pt-[200px] pb-[60px] md:pb-[100px] px-6 text-center max-w-[1260px] w-full flex flex-col items-center gap-10">
        <div className="flex flex-col gap-[20px] items-center justify-center relative w-full">
          {/* Title Wrap */}
          <div className="flex flex-col gap-[20px] items-center justify-center relative w-full">
            {/* Latest News Badge */}
            <motion.div 
              className="backdrop-blur-[20px] bg-white/5 border border-white/10 flex gap-[8px] items-center justify-center px-4 py-2 relative rounded-full w-fit mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative size-4">
                <div className="absolute inset-0 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
              </div>
              <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-[0.2px] uppercase">
                latest news
              </span>
            </motion.div>

            {/* Heading Wrap */}
            <motion.div 
              className="flex flex-col items-center justify-center w-full max-w-[900px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="flex flex-col items-center gap-1 md:gap-2 text-center">
                <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] sm:text-[48px] md:text-[60px] text-transparent tracking-[-0.04em] leading-[1.1]">
                  Latest industry trends and
                </span>
                <span className="flex flex-wrap items-center justify-center gap-x-4">
                  <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] sm:text-[48px] md:text-[60px] text-transparent tracking-[-0.04em] leading-[1.1]">
                    expert
                  </span>
                  <span className="font-['Playfair_Display'] italic font-normal text-[36px] sm:text-[48px] md:text-[60px] text-white/70 tracking-[-0.04em] leading-[1.1]">
                    insights from our team
                  </span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div 
            className="flex flex-col items-center opacity-70 w-full max-w-[780px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-['Geist'] font-normal text-[14px] md:text-[18px] text-center text-white uppercase tracking-wider leading-relaxed">
              STAY UPDATED WITH THE LATEST IN INDUSTRIAL AUTOMATION, ENERGY MANAGEMENT, AND AI-DRIVEN SOLUTIONS
            </p>
          </motion.div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Filter Tabs & Search */}
      <ScrollFadeIn>
      <section className="px-6 w-full max-w-[1260px] flex flex-col gap-10 md:gap-16 items-start justify-center mt-12 md:mt-20">
        {/* Categories Header */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
          <div className="flex items-center gap-2 opacity-80">
            <span className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white tracking-tight">Search</span>
            <span className="font-['Playfair_Display'] italic font-normal text-[20px] md:text-[23px] text-white tracking-tight">by categories</span>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-center">
            {['ALL', 'MANUFACTURING', 'ENERGY', 'PIPELINE'].map((cat, i) => (
              <button 
                key={cat}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full text-[12px] md:text-[14px] font-['Geist'] font-medium uppercase tracking-wider transition-all cursor-pointer
                  ${i === 0 
                    ? "bg-gradient-to-r from-[#001ca9] to-[#046ce4] text-white shadow-[0_7px_40px_-10px_rgba(17,15,223,0.6)]" 
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Main Content */}
        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {/* Top Grid: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
            {[
              { title: "How smart manufacturing is transforming production efficiency", img: imgSimonKadula8Gr6BObQloiUnsplash1, slug: "how-smart-manufacturing-is-transforming-production-efficiency" },
              { title: "The future of energy monitoring and sustainable operations", img: imgBrettJordanAfbBhcXeEiUnsplash1, slug: "the-future-of-energy-monitoring" },
              { title: "Enhancing pipeline safety with real-time fiber optic sensing", img: imgVictorUoIiVYka3VyUnsplash1, slug: "enhancing-pipeline-safety" }
            ].map((post, idx) => (
              <Link key={idx} to={`/insights/${post.slug}`} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-xl transition-all hover:-translate-y-1">
                <div className="p-6 md:p-8 flex flex-col h-full justify-between gap-12 relative min-h-[360px]">
                  {/* Top: Image and Plus Icon */}
                  <div className="flex justify-between items-start">
                    <div className="size-5 opacity-40" style={{ maskImage: `url('${imgPlusIcon}')`, maskSize: 'contain', backgroundColor: 'black' }} />
                    <div className="w-24 md:w-28 h-28 md:h-32 rounded-lg overflow-hidden">
                      <ImageWithFallback src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  {/* Bottom: Content */}
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1.5 opacity-50">
                        <span className="font-['Geist'] font-semibold text-[10px] text-black uppercase tracking-widest">WRITTEN BY:</span>
                        <span className="font-['Geist'] font-semibold text-[10px] text-black uppercase tracking-widest">FLOWTECH TEAM</span>
                      </div>
                      <h3 className="font-['Geist'] font-medium text-[20px] text-black leading-tight">
                        {post.title}
                      </h3>
                    </div>
                    <div className="bg-black p-3 rounded-lg w-fit group-hover:bg-[#046ce4] transition-colors">
                      <div className="size-5 bg-white" style={{ maskImage: `url('${imgIcon}')`, maskSize: 'contain' }} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Full Width Post */}
          <Link to="/insights/optimizing-energy-consumption-with-intelligent-monitoring-systems" className="w-full group">
            <div className="relative min-h-[500px] md:h-[600px] w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                <ImageWithFallback src={imgRemoteControlSoundSettingsFromTablet1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                <div className="flex justify-between items-start w-full">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="size-3.5 bg-white" style={{ maskImage: `url('${imgCalendarIcon}')`, maskSize: 'contain' }} />
                    <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">Jul 23, 2025</span>
                  </div>
                  <div className="size-5 opacity-40 bg-white" style={{ maskImage: `url('${imgPlusIcon}')`, maskSize: 'contain' }} />
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div className="flex flex-col gap-4 max-w-[700px]">
                    <div className="flex items-center gap-2 opacity-60">
                      <span className="font-['Geist'] font-medium text-[12px] text-white uppercase">WRITTEN BY:</span>
                      <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-wider">FLOWTECH TEAM</span>
                    </div>
                    <h2 className="font-['Geist'] font-medium text-[28px] md:text-[36px] text-white leading-tight">
                      Optimising energy consumption with intelligent monitoring systems
                    </h2>
                  </div>
                  <div className="bg-white p-4 rounded-lg w-fit group-hover:bg-[#046ce4] transition-colors">
                    <div className="size-6 bg-black group-hover:bg-white" style={{ maskImage: `url('${imgArrowRightIcon}')`, maskSize: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Bottom Grid: 3 Cards */}
          <div className="flex flex-col gap-10 md:gap-16 w-full pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
              {[
                { title: "Predictive maintenance: reducing downtime with real-time insights", img: imgCarMechanicWearingWhiteUniformStandHoldingWrench1, slug: "predictive-maintenance" },
                { title: "How data-driven analytics improves industrial decision-making", img: imgRepresentationUserExperienceInterfaceDesign1, slug: "data-driven-analytics" },
                { title: "Real-time monitoring: the future of industrial operations", img: imgFuturisticTechnologyConcept1, slug: "real-time-monitoring" }
              ].map((post, idx) => (
                <Link key={idx} to={`/insights/${post.slug}`} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-xl transition-all hover:-translate-y-1">
                  <div className="p-6 md:p-8 flex flex-col h-full justify-between gap-12 relative min-h-[360px]">
                    <div className="flex justify-between items-start">
                      <div className="size-5 opacity-40" style={{ maskImage: `url('${imgPlusIcon}')`, maskSize: 'contain', backgroundColor: 'black' }} />
                      <div className="w-24 md:w-28 h-28 md:h-32 rounded-lg overflow-hidden">
                        <ImageWithFallback src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1.5 opacity-50">
                          <span className="font-['Geist'] font-semibold text-[10px] text-black uppercase tracking-widest">WRITTEN BY:</span>
                          <span className="font-['Geist'] font-semibold text-[10px] text-black uppercase tracking-widest">FLOWTECH TEAM</span>
                        </div>
                        <h3 className="font-['Geist'] font-medium text-[20px] text-black leading-tight">
                          {post.title}
                        </h3>
                      </div>
                      <div className="group inline-flex items-center cursor-pointer overflow-hidden">
  <div className="bg-black p-3 rounded-lg flex items-center gap-2
                  group-hover:bg-[#046ce4]
                  transition-all duration-300 ease-in-out">

    {/* Text (hidden initially) */}
    <span className="
      text-white whitespace-nowrap
      max-w-0 opacity-0
      -translate-x-2
      group-hover:max-w-[80px]
      group-hover:opacity-100
      group-hover:translate-x-0
      transition-all duration-300 ease-in-out
    ">
      view
    </span>

    {/* Arrow (always visible, but slides) */}
    <div
      className="
        size-5 bg-white shrink-0
        transition-all duration-300 ease-in-out
        group-hover:translate-x-1
      "
      style={{
        maskImage: `url('${imgIcon}')`,
        maskSize: 'contain',
        WebkitMaskImage: `url('${imgIcon}')`,
        WebkitMaskSize: 'contain',
      }}
    />

  </div>
</div>
                      {/* <div className="bg-black p-3 rounded-lg w-fit group-hover:bg-[#046ce4] transition-colors">
                        <div className="size-5 bg-white" style={{ maskImage: `url('${imgIcon}')`, maskSize: 'contain' }} />
                      </div> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center w-full">
              <button className="relative px-10 py-4 rounded-full overflow-hidden group cursor-pointer transition-transform hover:scale-105 shadow-[0_10px_40px_-10px_rgba(17,15,223,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#001ca9] to-[#046ce4] transition-all duration-300 hover:scale-105 active:scale-95 glare-btn" />
                <span className="relative z-10 font-['Geist'] font-medium text-white uppercase tracking-widest text-sm">Load More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      </ScrollFadeIn>

      {/* Newsletter Section */}
      <ScrollFadeIn>
      <NewsletterSection />
      </ScrollFadeIn>

      <FooterSection />
    </div>
  );
};
export default InsightsPage;