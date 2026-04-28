import React from 'react';
import svgPaths from "../../imports/svg-03anttzafb";
import imgStar from "../../assets/4ae90066ce736d93921e8efb9fccf9d15d69f41b.png";
import imgImage from "../../assets/d8e8171aa3a799053bc44f2b1266a8f4769866a8.png";
import imgImage1 from "../../assets/17cf5bc71490f3c19acec485a65053458454bed7.png";
import imgImage2 from "../../assets/6aac6e50972325bf714b38089a03d3afd0bf55af.png";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1 } from "../../imports/svg-emb3x";
import { ImageWithFallback } from './figma/ImageWithFallback';

function PlusIcon({ size = 16, className = "" }) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] size-full top-1/2" 
           style={{ maskImage: `url('${size === 16 ? imgDivFramerIu4QG : imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
    </div>
  );
}

const StarRating = () => (
  <div className="flex gap-[3px] items-center">
    {[...Array(5)].map((_, i) => (
      <ImageWithFallback key={i} alt="star" className="size-[16px]" src={imgStar} />
    ))}
  </div>
);

const TestimonialCard = ({ rating, name, role, quote, image, isCentered = false }) => (
  <div className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.05)] relative rounded-[7px] w-full max-w-[410px] p-[25px] md:p-[30px] border border-[rgba(255,255,255,0.05)] flex flex-col justify-between min-h-[350px]">
    <div className="flex justify-between items-end mb-10 md:mb-[64px]">
      <div className="flex flex-col gap-1">
        <div className="flex items-end gap-1">
          <span className="font-['Geist'] font-normal text-[40px] md:text-[50px] text-white leading-none">{rating}</span>
          <span className="font-['Geist'] font-normal text-[16px] md:text-[20px] text-white/30 leading-none mb-1 md:mb-2">/5</span>
        </div>
        <StarRating />
      </div>
      <div className="size-[80px] md:size-[110px] rounded-[7px] overflow-hidden">
        <ImageWithFallback alt={name} className="size-full object-cover" src={image} />
      </div>
    </div>
    
    <div className="flex flex-col gap-[17px]">
      <p className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white tracking-[-0.4px] leading-tight">
        “{quote}”
      </p>
      <div className="flex flex-col opacity-80 uppercase font-['Geist'] font-normal text-[12px] md:text-[14px] text-white tracking-tight">
        <span>{name}</span>
        <span className="text-white/70">{role}</span>
      </div>
    </div>

    <PlusIcon size={16} className="absolute left-[15px] top-[15px] md:left-[20px] md:top-[20px] opacity-40 md:size-[20px]" />
    <PlusIcon size={16} className="absolute right-[15px] bottom-[15px] md:right-[20px] md:bottom-[20px] opacity-40 md:size-[20px]" />
  </div>
);

export const TestimonialSection = () => {
  return (
    <section className="w-full flex justify-center py-16 md:py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1260px] w-full flex flex-col gap-12 md:gap-16 relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-5 items-start">
            <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px]">
              <PlusIcon size={16} />
              <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase">Client Stories</span>
            </div>
            <div className="flex flex-wrap items-center">
              <span className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(268.908deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>What&nbsp;</span>
              <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[36px] md:text-[44px] tracking-[-0.4px] leading-tight">they think</span>
            </div>
          </div>
          <div className="max-w-[420px] opacity-70">
            <p className="font-['Geist'] font-normal text-[14px] md:text-[16px] text-white uppercase leading-[1.4] md:leading-[22.4px]">
              FROM INDUSTRIAL PLANTS TO GLOBAL ENTERPRISES, WE’VE DELIVERED INTELLIGENT SOLUTIONS. SEE HOW FLOWTECH DRIVES REAL IMPACT.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full place-items-center">
          <TestimonialCard 
            rating="5.0"
            name="Julian Meyer"
            role="OPERATIONS HEAD, MANUFACTURING GROUP"
            quote="Flowtech transformed our operations end-to-end. From deployment to optimisation, everything was seamless."
            image={imgImage}
          />
          <TestimonialCard 
            rating="3.9"
            name="Amanda More"
            role="ENERGY MANAGER, INDUSTRIAL PLANT"
            quote="Their energy monitoring solution helped us cut costs significantly. The insights are clear, actionable, and easy to scale."
            image={imgImage1}
          />
          <TestimonialCard 
            rating="4.7"
            name="Sarah Jenkins"
            role="CTO, LOGISTICS CORP"
            quote="The integration process was flawless. We saw a 30% increase in productivity within the first quarter of using their AI platforms."
            image={imgImage2}
          />
        </div>
      </div>
    </section>
  );
};
