import React from 'react';
import imgImageBlogImage from "../../assets/39b1c3665e698d8f5d4815a592ffe4f7132c8f50.png";
import imgIcon from "../../assets/cd44ba461e228e68fc6699cbb24da2b40ffa0111.png";
import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png";
import { imgDivFramerIu4QG, imgDivFramerYVnZo, imgDivFramerFoIvU, imgDivFramerIu4QG1 } from "../../imports/svg-h8bas";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';

function PlusIcon({ size = 16, className = "" }) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] size-full top-1/2"
        style={{ maskImage: `url('${size === 16 ? imgDivFramerIu4QG : imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
    </div>
  );
}

function Badge({ icon, text }) {
  return (
    <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.1)] flex gap-[5px] items-center px-[10px] py-[5px] rounded-[30px] shrink-0 border border-white/5">
      <div className="size-[12px] md:size-[14px] bg-white mask-alpha mask-no-repeat mask-center" style={{ maskImage: `url('${icon}')`, maskSize: 'contain' }} />
      <span className="font-['Geist'] font-semibold text-[9px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">{text}</span>
    </div>
  );
}

function BlogCard({ date, category, title, author, image, categoryIcon }) {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[620/450] rounded-[7px] overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback src={image} alt={title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-5 md:p-[25px] flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <Badge icon={imgDivFramerYVnZo} text={date} />
            <Badge icon={categoryIcon} text={category} />
          </div>
          <PlusIcon size={18} className="opacity-40 md:size-[20px]" />
        </div>

        <div className="flex flex-col gap-4 md:gap-5 items-start">
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex gap-1 items-center opacity-50 font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase">
              <span>Written by:</span>
              <span className="opacity-100">{author}</span>
            </div>
            <h3 className="font-['Geist'] font-medium text-[20px] md:text-[26px] text-white leading-tight max-w-[440px]">
              {title}
            </h3>
          </div>
          <div className=" p-2 md:p-2 rounded-[6.4px] transition-transform group-hover:translate-x-2">
            {/* <ImageWithFallback src={imgIcon} alt="arrow" className="size-[16px] md:size-[20px]" /> */}
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
        </div>
      </div>
    </div>
  );
}

export const BlogSection = () => {
  return (
    <ScrollFadeIn>
    <section className="w-full flex justify-center py-0 md:py-[280px] px-6 md:px-8 bg-transparent">
      <div className="max-w-[1260px] w-full flex flex-col gap-12 md:gap-20 items-center">
        {/* Header Section */}
        <div className="flex flex-col gap-5 items-center text-center max-w-[700px]">
          <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] flex gap-[5px] items-center px-[11px] py-[5px] rounded-[5px]">
            <PlusIcon size={16} />
            <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase">Recent News</span>
          </div>

          <h2 className="flex flex-col items-center">
            <span className="bg-clip-text font-['Geist'] font-medium text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight"
              style={{ backgroundImage: "linear-gradient(91.1511deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.4) 100%)" }}>Latest industry trends and</span>
            <div className="flex flex-wrap gap-x-2 items-center justify-center">
              <span className="bg-clip-text font-['Geist'] font-medium text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight"
                style={{ backgroundImage: "linear-gradient(91.1032deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.4) 100%)" }}>
                expert
              </span>
              <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[32px] sm:text-[40px] md:text-[44px] tracking-[-0.4px] leading-tight">
                insights from our team
              </span>
            </div>
          </h2>

          <p className="font-['Geist'] font-normal text-[14px] md:text-[18px] text-white opacity-70 uppercase leading-[1.5] md:leading-[27px] tracking-tight max-w-[600px]">
            STAY UPDATED WITH THE LATEST IN INDUSTRIAL AUTOMATION, AI SOLUTIONS, ENERGY MANAGEMENT, AND DIGITAL TRANSFORMATION
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[20px] w-full">
          <BlogCard
            date="Jul 23, 2025"
            category="INDUSTRY"
            categoryIcon={imgDivFramerFoIvU}
            title="How manufacturing intelligence is transforming modern operations"
            author="FLOWTECH TEAM"
            image={imgImageBlogImage}
          />
          <BlogCard
            date="Jul 23, 2025"
            category="TECHNOLOGY"
            categoryIcon={imgDivFramerFoIvU}
            title="From data to decisions: turning insights into operational efficiency"
            author="FLOWTECH TEAM"
            image={imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg}
          />
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
};
