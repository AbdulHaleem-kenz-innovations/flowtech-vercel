import React, { useState } from 'react';
import svgPaths from "../../imports/svg-60x66umvnj";
import imgMKwvaNgcAkQmHyt5Z49Ijjsm1VuPng from "../../assets/0975ee902333fa4c0ff75503ee2b2d45bc2017cd.png";
import imgImage3 from "../../assets/ac6be543e6c2dd18fd3ec6d2c2879f0a8e7d1575.png";
import imgHomePage011 from "../../assets/46e850a6ceee651d955294f33b48fc6dd587cffd.png";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1, imgDivFramerIu4QG2 } from "../../imports/svg-emg7m";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import productimg1 from "../../assets/products-img1.png";
import productimg2 from "../../assets/products-img2.png";
import productimg3 from "../../assets/products-img3.png";
import normalimg1 from "../../assets/normal-img1.png";
import normalimg2 from "../../assets/normal-img2.png";
import normalimg3 from "../../assets/normal-img3.png";

function DivFramerIu4QGMaskGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="div.framer-IU4qG:mask-group">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-[calc(50%+0.22px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-[calc(50%+0.26px)]" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} data-name="div.framer-IU4qG" />
    </div>
  );
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">CORE PRODUCTS</p>
      </div>
    </div>
  );
}

function WelcomeToOptune() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px] md:w-[95px]" data-name="Welcome to optune">
      <PFramerText />
    </div>
  );
}

function DefaultBadge() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0" data-name="Default">
      <DivFramerIu4QGMaskGroup />
      <WelcomeToOptune />
    </div>
  );
}

function DivFramer1IzgjdsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1izgjds-container">
      <DefaultBadge />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] text-center tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(91.4672deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.6) 100%)" }}>
        <p className="leading-[1.1]">Intelligent products.</p>
      </div>
    </div>
  );
}

function InnovationPoweredBy() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full sm:w-[404px]" data-name="Innovation powered by">
      <H2FramerText />
    </div>
  );
}

function H2FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="bg-clip-text flex flex-col font-['Playfair_Display'] font-normal italic justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] text-center tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(91.1354deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.6) 100%)" }}>
        <p className="leading-[1.1]">Built for scale.</p>
      </div>
    </div>
  );
}

function AdaptiveIntelligence() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full sm:w-[266px]" data-name="adaptive intelligence">
      <H2FramerText1 />
    </div>
  );
}

function HeadingWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Heading Wrap">
      <InnovationPoweredBy />
      <AdaptiveIntelligence />
    </div>
  );
}

function TitleWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Title Wrap">
      <DivFramer1IzgjdsContainer />
      <HeadingWrap />
    </div>
  );
}

function Description() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] md:text-[18px] text-center text-white uppercase w-full max-w-[780px]">
            <p className="leading-[1.4] md:leading-[27px]">POWERING ENTERPRISES WITH AI-DRIVEN PLATFORMS THAT AUTOMATE PROCESSES, IMPROVE DECISION-MAKING, AND DRIVE OPERATIONAL EFFICIENCY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderArea() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <TitleWrap />
      <Description />
    </div>
  );
}

function ProductCard({ number, title, description, image, normalImage, hoverImage, isCustomImage = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-[7px] w-full   mx-auto h-[400px] md:h-[429px] overflow-clip"
       style={{ aspectRatio: '4/4' }}
      data-name="Product Card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Normal Image View (Desktop only, default visible, hidden on hover) */}
      <div
        className="hidden md:flex absolute inset-0 rounded-[7px] overflow-clip transition-opacity duration-300 items-center justify-center z-10"
        style={{ opacity: isHovered ? 0 : 1 }}
      >
        <ImageWithFallback alt="" className="w-full h-full object-cover" src={normalImage} />
      </div>

      {/* Hover Image View (Default on Mobile, revealed/faded in on Desktop hover) */}
      <div
        className="absolute inset-0 rounded-[7px] overflow-clip transition-opacity duration-300 flex items-center justify-center opacity-100 md:opacity-0"
        style={isHovered ? { opacity: 1 } : {}}
      >
        <ImageWithFallback alt="" className="w-full h-full object-cover" src={hoverImage} />
      </div>
    </div>
  );
}

function KenvoiceLogo() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-[90px] md:w-[101.333px]">
      <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101.333 15.9202">
        <path d={svgPaths.p1418ec80} fill="white" />
      </svg>
    </div>
  );
}

export const WorkSection = () => {
  return (
    <ScrollFadeIn>
      <section className="w-full flex justify-center py-10 md:py-16 px-6 md:px-8 ">
        <div className="max-w-[1260px] w-full flex flex-col gap-12 md:gap-[64px] items-center justify-center p-6 md:py-30 relative  backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] content-stretch " data-name="Work ">
          <div className="absolute -left-3 md:left-[20px] -top-3 md:top-[20px]"><div className="size-[20px] md:size-[24px] opacity-40 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG2}')`, maskSize: 'contain' }} /></div>
          <div className="absolute -right-3 md:-right-[-20px] -top-3 md:-top-[-20px] rotate-90"><div className="size-[20px] md:size-[24px] opacity-40 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG2}')`, maskSize: 'contain' }} /></div>
          <HeaderArea />

          <div className="w-full relative  flex flex-col gap-12 md:gap-[64px] items-center justify-center" data-name="Product Card Container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[24px] w-full">
              <ProductCard
                number="01"
                title={<KenvoiceLogo />}
                description="STREAMLINE INVOICING AND FINANCIAL OPERATIONS WITH AUTOMATED BILLING, REAL-TIME TRACKING, AND SMART REPORTING."
                image={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 195 171'%3E%3Cpath d='${svgPaths.pda184c0}' fill='%23959595'/%3E%3C/svg%3E`}
                normalImage={normalimg1}
                hoverImage={productimg1}
              />
              <ProductCard
                number="02"
                title={<p className="capitalize font-['Geist'] font-semibold text-[16px] md:text-[18px] text-white leading-[27px]">Smart IDP</p>}
                description="AUTOMATE DOCUMENT PROCESSING USING AI TO EXTRACT, VALIDATE, AND ORGANISE DATA FROM COMPLEX BUSINESS DOCUMENTS."
                normalImage={normalimg2}
                hoverImage={productimg2}
                isCustomImage={true}
              />
              <ProductCard
                number="03"
                title={<p className="capitalize font-['Geist'] font-semibold text-[16px] md:text-[18px] text-white leading-[27px]">AI BizzApp</p>}
                description="BUILD AND DEPLOY CUSTOM AI-POWERED BUSINESS APPLICATIONS TO AUTOMATE WORKFLOWS AND IMPROVE PRODUCTIVITY."
                normalImage={normalimg3}
                hoverImage={productimg3}
                isCustomImage={true}
              />
            </div>

            {/* Decorative Corner Icons for the Container */}

            <button
              className=" relative overflow-hidden
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
    glare-btn
"
            >
              VIEW ALL
            </button>
          </div>
          <div className="absolute -left-3 md:left-[20px] -bottom-3 md:-bottom-[-20px] -rotate-90"><div className="size-[20px] md:size-[24px] opacity-40 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG2}')`, maskSize: 'contain' }} /></div>
          <div className="absolute -right-3 md:-right-[-20px] -bottom-3 md:-bottom-[-20px] rotate-180"><div className="size-[20px] md:size-[24px] opacity-40 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG2}')`, maskSize: 'contain' }} /></div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
