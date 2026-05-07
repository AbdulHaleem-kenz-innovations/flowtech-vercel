import React from 'react';
import imgImage from "../../assets/17cf5bc71490f3c19acec485a65053458454bed7.png";
import imgImage1 from "../../assets/8250f59f5c6822dae8923f1eacf0caee475b2e6b.png";
import imgImage2 from "../../assets/6aac6e50972325bf714b38089a03d3afd0bf55af.png";
import imgImage3 from "../../assets/d8e8171aa3a799053bc44f2b1266a8f4769866a8.png";
import imgImage4 from "../../assets/a5da9837d04c1f6e98c1c7fd56a5d508ff2b1170.png";
import imgImage5 from "../../assets/b695d7219dbe15bacb682a0df03b4d343585e4d0.png";
import { imgDivFramerIu4QG } from "../../imports/svg-7zyoe";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';

function DivFramerIu4QGMaskGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="div.framer-IU4qG:mask-group">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} data-name="div.framer-IU4qG" />
    </div>
  );
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">ENGINEERING INTELLIGENT SYSTEMS</p>
      </div>
    </div>
  );
}

function WelcomeToOptune() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px] md:w-[204px]" data-name="Welcome to optune">
      <PFramerText />
    </div>
  );
}

function Default() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0" data-name="Default">
      <DivFramerIu4QGMaskGroup />
      <WelcomeToOptune />
    </div>
  );
}

function DivFramerIbzdfContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-ibzdf-container">
      <Default />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(91.1485deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.4) 100%)" }}>
        <p className="leading-[1.1]">Innovation powered by</p>
      </div>
    </div>
  );
}

function InnovationPoweredBy() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mb-[-1px] relative shrink-0 w-full md:w-[458px]" data-name="Innovation powered by">
      <H2FramerText />
    </div>
  );
}

function H2FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="bg-clip-text flex flex-col font-['Playfair_Display'] font-normal italic justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(91.1425deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.4) 100%)" }}>
        <p className="leading-[1.1]">adaptive intelligence</p>
      </div>
    </div>
  );
}

function AdaptiveIntelligence() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mb-[-1px] relative shrink-0 w-full md:w-[380px]" data-name="adaptive intelligence">
      <H2FramerText1 />
    </div>
  );
}

function HeadingWrap() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-px relative shrink-0 w-full" data-name="Heading Wrap">
      <InnovationPoweredBy />
      <AdaptiveIntelligence />
    </div>
  );
}

function TitleWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start justify-center relative shrink-0 w-full" data-name="Title Wrap">
      <DivFramerIbzdfContainer />
      <HeadingWrap />
    </div>
  );
}

function ImageAvatar({ src }) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[6px] shrink-0 size-[45px] md:size-[55px]" data-name="Image">
      <div className="flex-[1_0_0] min-h-px relative rounded-[6px] w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
          <ImageWithFallback alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={src} />
        </div>
      </div>
    </div>
  );
}

function ImageWrap() {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.15)] content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Image Wrap">
      <ImageAvatar src={imgImage} />
      <ImageAvatar src={imgImage1} />
      <ImageAvatar src={imgImage2} />
      <ImageAvatar src={imgImage3} />
    </div>
  );
}

function BecomeCustomer1001AndStartWinningWithUs() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-70 relative shrink-0" data-name="Become customer #1,001 and start winning with us">
      <div className="flex flex-col font-['Geist'] font-normal md:h-[40px] justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] text-white uppercase w-[180px] md:w-[214.76px]">
        <p className="leading-[1.2] md:leading-[19.6px]">TRUSTED BY ENTERPRISE TEAMS DRIVING OPERATIONAL EXCELLENCE</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex gap-[12px] md:gap-[17px] items-center overflow-clip relative shrink-0 w-full" data-name="Details">
      <ImageWrap />
      <BecomeCustomer1001AndStartWinningWithUs />
    </div>
  );
}

function DesignYourWayWithOptunsSmartToolsAndFullElementControl() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Design your way with Optun’s smart tools and full element control">
      <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[16px] md:text-[18px] text-white uppercase w-full">
        <p className="leading-[24px] md:leading-[27px]">TRANSFORM OPERATIONS WITH FLOWTECH’S AI, DATA, AND INDUSTRIAL INTELLIGENCE SOLUTIONS</p>
      </div>
    </div>
  );
}

function TextWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] md:gap-[42px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Text Wrap">
      <Details />
      <DesignYourWayWithOptunsSmartToolsAndFullElementControl />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] md:gap-[50px] items-start justify-center max-w-[500px] overflow-clip md:pr-[23px] relative shrink-0 w-full md:w-[500px]" data-name="Content Wrapper">
      <TitleWrap />
      <TextWrap />
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">INTELLIGENCE</p>
      </div>
    </div>
  );
}

function IntegrationBadge() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[79px]" data-name="Integration">
      <PFramerText1 />
    </div>
  );
}

function DefaultBadge() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.03)] content-stretch flex flex-col items-center justify-center pb-[6px] pt-[5px] px-[12px] relative rounded-[30px] shrink-0" data-name="Default">
      <IntegrationBadge />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[10px] md:gap-[14px] items-start justify-center left-[15px] pl-[11px] right-[19px] top-[calc(50%+70px)] md:top-[calc(50%+89.83px)]" data-name="VerticalBorder">
      <div className="backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.15)] h-[10px] md:h-[12px] rounded-[100px] shrink-0 w-[30px] md:w-[38px]" />
      <div className="backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.15)] h-[10px] md:h-[12px] rounded-[100px] shrink-0 w-[80px] md:w-[96px]" />
      <div className="backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.15)] h-[10px] md:h-[12px] rounded-[100px] shrink-0 w-[120px] md:w-[144px]" />
      <div className="backdrop-blur-[7.5px] bg-white h-[10px] md:h-[12px] rounded-[100px] shrink-0 w-[150px] md:w-[183px]" />
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.15)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Card() {
  return (
    <div
      className="
        backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)]
        rounded-[6px]

        /* ✅ MOBILE */
        relative w-full px-4 py-5 h-[250px]

        /* ✅ DESKTOP (original exact) */
        md:absolute md:-translate-y-1/2
        md:h-[309px]
        md:left-[-0.24px] md:right-[0.24px]
        md:top-[calc(50%-90.53px)]
      "
    >
      {/* Badge */}
      <div
        className="
          mb-3

          /* desktop exact */
          md:absolute md:-translate-y-1/2
          md:left-[15px]
          md:top-[calc(50%-128.7px)]
        "
      >
        <DefaultBadge />
      </div>

      {/* Text */}
      <div
        className="
          /* mobile */
          
          /* desktop exact */
          md:absolute md:-translate-y-1/2
          md:left-[15px] md:right-[19px]
          md:top-[calc(50%-36.91px)]
        "
      >
        <p className="font-['Geist'] font-medium text-white text-[16px] md:text-[23px] leading-[1.4] md:leading-[25.99px] tracking-[-0.4px]">
          Data-driven systems enhance performance and support smarter decisions.
        </p>
      </div>

      <VerticalBorder />
    </div>
  );
}


function ImageWrapper() {
  return (
    <div
      className="
        relative w-full max-w-[682px] mx-auto

        /* ✅ MOBILE */
        flex flex-col gap-4

        /* ✅ DESKTOP (original exact) */
        md:block md:h-[546.57px]
      "
    >
      {/* 🔹 CARD + SMALL IMAGE WRAP */}
      <div
        className="
          order-1

          /* desktop exact */
          md:absolute md:h-full
          md:left-0 md:right-[443px]
          md:top-62 md:-translate-y-1/2
          md:z-10
        "
      >
        <Card />

        {/* Small Image */}
        <div
          className="
            /* ✅ MOBILE */
            mt-4 mx-auto w-[360px]

            /* ✅ DESKTOP (original exact) */
            md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
            md:top-[calc(50%+176.29px)]
            md:w-[240px]
          "
        >
          <ImageWithFallback
            alt=""
            src={imgImage4}
            className="w-full  h-[140px] md:h-[193.98px] object-cover rounded-[7px]"
          />
        </div>
      </div>

      {/* 🔹 MAIN IMAGE */}
      <div
        className="
          order-2

          /* ✅ MOBILE */
          w-200px h-[260px]  rounded-[7px] overflow-hidden

          /* ✅ DESKTOP (original exact) */
          md:absolute md:inset-[0_0_0_254px] md:h-full
        "
      >
        <ImageWithFallback
          alt=""
          src={imgImage5}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export const IntroducingSection = () => {
  return (
    <ScrollFadeIn>
    <section className="w-full flex justify-center py-10 md:py-16 px-6 md:px-8">
      <div className="max-w-[1260px] w-full flex items-center justify-center relative" data-name="Introducing Section">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[78px] items-center lg:items-start max-w-[1260px] relative w-full">
          <ContentWrapper />
          <ImageWrapper />
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
}
