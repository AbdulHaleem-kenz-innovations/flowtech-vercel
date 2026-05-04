import React, { useEffect, useState } from 'react';
import imgHEroImage from "../../assets/48517710623739daa711816a992836288eaf350d.png";
import imgImage from "../../assets/14a520dccf727ce258eeb22631612c2347519bfe.png";
import { imgDivFramerIu4QG } from "../../imports/svg-hryyo";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { motion, useScroll, useTransform } from "framer-motion";
import KenSpinner from './KenSpinner';

export const HeroSection = () => {

  const [rotation, setRotation] = useState(290);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 👇 control speed here (adjust 0.05)
      setRotation(290 + scrollY * 0.05);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollFadeIn>
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-60 md:pb-32 px-6 md:px-8 overflow-hidden ">
        <div className="max-w-[1260px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 pb-100">

          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-[600px] text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-sm w-fit">
              <div
                className="w-[14px] h-[14px] bg-white"
                style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', WebkitMaskImage: `url('${imgDivFramerIu4QG}')`, WebkitMaskSize: 'contain' }}
              />
              <span className="font-['Geist'] font-semibold text-[9px] md:text-[10px] text-white tracking-[0.18px] uppercase">
                POWERING INDUSTRIAL INTELLIGENCE
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col">
              <h1 className="font-['Geist'] font-medium text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-l from-white/60 to-white bg-clip-text text-transparent block sm:inline">
                  Building the next
                </span>
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-l from-white/60 to-white bg-clip-text text-transparent">
                  era
                </span>
                <span className="font-['Playfair_Display'] italic font-normal text-[#d9d9d9] ml-2 sm:ml-4">
                  of operations
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-['Geist'] text-white/70 text-sm md:text-base uppercase leading-relaxed tracking-wide max-w-[500px]">
              CONNECT DATA, AI, AND INFRASTRUCTURE TO DRIVE EFFICIENCY, IMPROVE VISIBILITY, AND ENABLE SMARTER DECISIONS ACROSS OPERATIONS
            </p>

            {/* CTA */}

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

              EXPLORE SOLUTIONS
            </button>
          </div>

          {/* Right Content (Sphere) */}

          <div className="relative flex justify-center items-center order-first lg:order-last">
            <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] ">
              <ImageWithFallback
                src={imgHEroImage}
                alt="Industrial Sphere"
                className="w-full h-full object-contain animate-slow-spin drop-shadow-[0_0_50px_rgba(4,108,228,0.3)]"
                style={{
                  animation: "spin 10s linear infinite"
                }}
              />
            </div>
          </div>
        </div>

        {/* Floating Elements (Bottom Sphere) */}

        <div
          className="
        absolute bottom-[0%] left-20 top-240 md:top-180 md:left-[20%]
        w-[160px] md:w-[300px]
        h-[160px] md:h-[540px]
        opacity-70 md:opacity-100
        transition-transform duration-100 ease-out
      "
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <img
            src={imgImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

      </section>
    </ScrollFadeIn>
  );
};


