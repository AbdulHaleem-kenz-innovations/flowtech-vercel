import React from 'react';
import svgPaths from "../../imports/svg-3wmufn4arv";
import imgImage from "../../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';

function Image() {
  return (
    <div className="flex-[1_0_0] h-[300px] md:h-full min-w-px relative rounded-[7px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
        <ImageWithFallback alt="" className="absolute h-full left-[-14.56%] max-w-none top-0 w-[129.12%] object-cover" src={imgImage} />
      </div>
    </div>
  );
}

function Shape() {
  return <div className="absolute bg-black inset-0 opacity-28 rounded-[7px]" data-name="Shape" />;
}

function H5FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
      <div className="bg-clip-text flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] md:text-[23px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(66.9494deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 100%)" }}>
        <p className="leading-[1.1]">{`Daniel `}</p>
      </div>
    </div>
  );
}

function Daniel() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[60px] md:w-[72px]" data-name="Daniel">
      <H5FramerText />
    </div>
  );
}

function H5FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[18px] md:text-[23px] whitespace-nowrap">
        <p className="leading-[1.1]">Hartmann</p>
      </div>
    </div>
  );
}

function Hartmann() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center opacity-80 relative shrink-0 w-[90px] md:w-[107px]" data-name="Hartmann">
      <H5FramerText1 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Name">
      <Daniel />
      <Hartmann />
    </div>
  );
}

function Heading2FounderOfFreshly() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2 → founder of freshly">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[11px] md:text-[14px] text-white uppercase w-full">
        <p className="leading-[1.4] md:leading-[19.6px]">founder of Flowtech</p>
      </div>
    </div>
  );
}

function AuthorDetails() {
  return (
    <div className="absolute bottom-[20px] md:bottom-[24.99px] content-stretch flex flex-col gap-1 md:gap-[5px] items-start justify-center left-[7%] right-[7%] rounded-[6.4px]" data-name="Author Details">
      <Name />
      <Heading2FounderOfFreshly />
    </div>
  );
}

function Vector() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start justify-center relative shrink-0 w-[12px]" data-name="Vector">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
          <g clipPath="url(#clip0_6_415)" id="svg10456457522">
            <path d={svgPaths.p2b15ab00} fill="white" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_6_415">
              <rect fill="white" height="14" width="12" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[6px] py-[5px] relative shrink-0 size-[24px]" data-name="Play Icon">
      <Vector />
    </div>
  );
}

function PlayButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[60px] md:h-[80px] items-center justify-center min-w-px relative rounded-full" data-name="Play button">
      <PlayIcon />
    </div>
  );
}

function VideoButton() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-1/2 -translate-x-1/2 md:left-[142px] md:translate-x-0 overflow-hidden rounded-full md:rounded-[7px] size-[60px] md:size-[80px] top-1/2 -translate-y-1/2 md:top-[195.4px] md:translate-y-0 cursor-pointer hover:bg-[rgba(255,255,255,0.25)] transition-all" data-name="Video Button">
      <PlayButton />
    </div>
  );
}

function ImageWrap() {
  return (
    <div className="aspect-square md:aspect-[364/470] content-stretch flex items-center justify-center w-full max-w-[364px] overflow-hidden relative rounded-[7px] shrink-0 mx-auto" data-name="Image Wrap">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch h-full">
        <Image />
      </div>
      <Shape />
      <AuthorDetails />
      <VideoButton />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="h2.framer-text">
      <div className="bg-clip-text flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[1.1] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] text-center tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(91.8153deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.4) 100%)" }}>
        <p>Insights that matter.</p>
      </div>
    </div>
  );
}

function H2FramerText1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="h2.framer-text">
      <div className="flex flex-col font-['Playfair_Display:Italic',sans-serif] font-normal italic justify-center leading-[1.1] relative shrink-0 text-[#d9d9d9] text-[32px] sm:text-[40px] md:text-[44px] text-center tracking-[-0.4px] whitespace-nowrap">
        <p>Early Access.</p>
      </div>
    </div>
  );
}

function HeadingWrap() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center relative shrink-0 w-full" data-name="Heading Wrap">
      <H2FramerText />
      <H2FramerText1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
      <HeadingWrap />
    </div>
  );
}

function ExperienceAPlatformEngineeredForImpactPackedWithIntelligentToolsThatSimplifyWorkflows() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Experience a platform engineered for impact, packed with intelligent tools that simplify workflows">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] md:text-[18px] text-white text-center uppercase w-full">
        <p className="leading-[1.4] md:leading-[27px] whitespace-pre-wrap">{`STAY UPDATED WITH THE LATEST IN INDUSTRIAL AUTOMATION, AI SOLUTIONS, ENERGY MANAGEMENT, AND REAL-WORLD CASE STUDIES FROM FLOWTECH`}</p>
      </div>
    </div>
  );
}

function TitleWrap() {
  return (
    <div className="content-stretch flex flex-col gap-4 md:gap-[22px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title Wrap">
      <Title />
      <ExperienceAPlatformEngineeredForImpactPackedWithIntelligentToolsThatSimplifyWorkflows />
    </div>
  );
}

function FormFramer1B3R0N() {
  return (
    <form className="content-stretch flex flex-col gap-4 md:gap-[14px] items-start relative shrink-0 w-full" onSubmit={(e) => e.preventDefault()}>
      <div className="w-full flex flex-col gap-1.5">
         <label className="font-['Geist:SemiBold'] text-[10px] text-white/60 uppercase">Name</label>
         <div className="backdrop-blur-[2.5px] bg-white/10 rounded-[7px] p-4">
            <input className="w-full bg-transparent outline-none font-['Geist:Regular'] text-[16px] text-white placeholder:text-white/40" placeholder="John Doe" />
         </div>
      </div>
      <div className="w-full flex flex-col gap-1.5">
         <label className="font-['Geist:SemiBold'] text-[10px] text-white/60 uppercase">Email Address</label>
         <div className="backdrop-blur-[2.5px] bg-white/10 rounded-[7px] p-4">
            <input className="w-full bg-transparent outline-none font-['Geist:Regular'] text-[16px] text-white placeholder:text-white/40" placeholder="hello@email.com" type="email" />
         </div>
      </div>
      <button type="submit" className="w-full relative rounded-full shrink-0 cursor-pointer overflow-hidden group py-4" style={{ backgroundImage: "linear-gradient(60.4285deg, rgb(0, 28, 169) 0%, rgb(4, 108, 228) 100%)" }}>
        <div className="relative z-10 flex items-center justify-center group-hover:scale-105 transition-transform">
           <span className="font-['Geist:Medium'] font-medium text-white text-[14px] tracking-[0.5px] uppercase">Subscribe</span>
        </div>
        <div aria-hidden="true" className="absolute border border-white/20 border-solid inset-0 pointer-events-none rounded-full" />
      </button>
    </form>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-10 md:gap-[41px] items-start justify-center max-w-[520px] relative shrink-0 w-full" data-name="Content Wrapper">
      <TitleWrap />
      <FormFramer1B3R0N />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row items-center justify-between max-w-[1260px] gap-12 md:gap-20 relative shrink-0 w-full" data-name="Container">
      <div className="w-full lg:w-1/2">
        <ImageWrap />
      </div>
      <div className="w-full lg:w-1/2">
        <ContentWrapper />
      </div>
    </div>
  );
}

export const EarlyAccessSection = () => {
  return (
     <ScrollFadeIn>
    <section className="content-stretch flex items-center justify-center px-6 md:px-[30px] py-16 md:py-[120px] relative w-full" data-name="Early Access Section">
    
      <Container />
      
    </section>
    </ScrollFadeIn>
    
  );
}
