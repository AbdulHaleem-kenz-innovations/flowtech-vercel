import React from 'react';
import svgPaths from "../../imports/svg-xiqtb1g9gy";
import imgCarouselCard from "../../assets/a472609dbace7ecf5cd488930722298673849efe.png";
import imgCarouselCard1 from "../../assets/aaefc97b28cbafd5347a11e89efe6f544e2e173e.png";
import imgCarouselCard2 from "../../assets/b72eb57f3b9ddd9b8837f115ea95d2774f47f210.png";
import imgCarouselCard3 from "../../assets/8f7a91c582ce5031688ece9af2f943dbce49edf1.png";
import imgCarouselCard4 from "../../assets/b4298092cbb3667198289c9f8c9242dc67662c89.png";
import imgCarouselCard5 from "../../assets/a4671e03732d31f07b12df3902d9e71f95fff694.png";
import imgCarouselCard6 from "../../assets/a4f0f1e497eb808db270d44a8e29c6fcafbbe327.png";
import imgCarouselCard7 from "../../assets/3b453cf0140e06001838b868f712959a3d8d225e.png";
import imgImageWrap1 from "../../assets/ecddb26aa177edd71427467de9bf23fb1c9fcf37.png";
import { imgDivFramerIu4QG, imgDiv, imgDiv1, imgDiv2, imgDiv3, imgDiv4, imgDiv5, imgDiv6, imgDiv7 } from "../../imports/svg-yce4z";
import { ImageWithFallback } from './figma/ImageWithFallback';

function LogoGroup() {
  return (
    <div className="flex gap-2 items-center relative shrink-0">
      <div className="size-[20px] md:size-[22px]">
        <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.069 19.7946">
          <path d={svgPaths.p25211000} fill="white" />
          <path d={svgPaths.p3de9bb00} fill="white" />
          <path d={svgPaths.p2c881770} fill="white" />
          <path d={svgPaths.paa5b680} fill="white" />
          <path d={svgPaths.p131cd0f0} fill="white" />
          <path d={svgPaths.p2b259e60} fill="white" />
          <path d={svgPaths.p6655480} fill="white" />
          <path d={svgPaths.p26098f00} fill="white" />
          <path d={svgPaths.p3a6e5800} fill="white" />
          <path d={svgPaths.p8605200} fill="white" />
          <path d={svgPaths.p19957f00} fill="white" />
        </svg>
      </div>
      <div className="w-[80px] md:w-[105px] h-[12px] md:h-[15px]">
        <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.131 15.1709">
          <path d={svgPaths.p16bd0c0} fill="white" />
          <path d={svgPaths.p3f174880} fill="white" />
          <path d={svgPaths.p22959800} fill="white" />
          <path d={svgPaths.p12e95100} fill="white" />
          <path d={svgPaths.p5a79e80} fill="white" />
          <path d={svgPaths.p275be000} fill="white" />
          <path d={svgPaths.p1bcf000} fill="white" />
          <path d={svgPaths.p3c82e200} fill="white" />
        </svg>
      </div>
    </div>
  );
}

export default function RotationCard() {
  return (
    <div className="relative w-full max-w-[1260px] mx-auto h-[600px] md:h-[780px] rounded-[20px] overflow-hidden backdrop-blur-[25px] bg-gradient-to-t from-[rgba(17,15,223,0.5)] to-transparent flex items-center justify-center">
      {/* Background Image - The Gears/Mechanical parts */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
        <ImageWithFallback 
          src={imgImageWrap1} 
          className="w-full h-full object-cover object-bottom" 
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-6 text-center max-w-[700px]">
        <LogoGroup />
        
        <div className="flex flex-col gap-2">
          <h2 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] sm:text-[48px] md:text-[60px] text-transparent leading-tight tracking-tight">
            We power industries.
          </h2>
          <p className="font-['Playfair_Display'] italic font-normal text-[36px] sm:text-[48px] md:text-[60px] text-white/70 leading-tight">
            You're up next.
          </p>
        </div>

        <p className="font-['Geist'] text-white/70 text-[14px] md:text-[18px] uppercase tracking-widest leading-relaxed">
          WE BUILD INTELLIGENT, DATA-DRIVEN SOLUTIONS THAT OPTIMIZE OPERATIONS, IMPROVE SAFETY, AND DRIVE SCALABLE GROWTH ACROSS INDUSTRIES
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center mt-4">
          <button className=" relative overflow-hidden
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
    glare-btn">
            Let’s talk
          </button>
          <button className="w-full w-fit mx-auto sm:mx-0 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
    text-[13px] sm:text-[14px] md:text-[16px] bg-white px-10 py-4 rounded-full text-[#035fda] font-['Geist'] font-medium text-[14px] uppercase tracking-widest hover:bg-white/90 transition-colors">
            Our SOLUTIONS
          </button>
        </div>
      </div>

      {/* Floating Corner Icons */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 opacity-30">
        <div className="size-5 md:size-6 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
      </div>
      <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-30">
        <div className="size-5 md:size-6 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
      </div>
    </div>
  );
}
