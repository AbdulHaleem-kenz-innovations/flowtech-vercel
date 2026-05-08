import React from 'react';
import imgImage from "../../assets/f87fe3e0bdbd02d435c484538a92390ac836b1bb.png";
import imgImage2 from "../../assets/13a5123d147560e0b029827bd35b00c4ff90b646.png";
import imgStar from "../../assets/4ae90066ce736d93921e8efb9fccf9d15d69f41b.png";
import imgImage1 from "../../assets/66a6c590d9a3e3624c6c7830890ce0029158f939.png";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';

function StarRating() {
  return (
    <div className="flex gap-[3px] items-center shrink-0">
      {[...Array(5)].map((_, i) => (
        <ImageWithFallback key={i} alt="star" className="size-[16px]" src={imgStar} />
      ))}
    </div>
  );
}

function ReviewHeader() {
  return (
    <div className="flex flex-col gap-[2px] items-start shrink-0 w-full">
      <div className="flex items-end gap-1">
        <span className="font-['Geist'] font-normal text-[40px] md:text-[50px] text-white leading-none">5.0</span>
        <span className="font-['Geist'] font-normal text-[18px] md:text-[20px] text-white/30 leading-none mb-1 md:mb-2">/5</span>
      </div>
      <StarRating />
    </div>
  );
}

function QuoteSection() {
  return (
    <div className="flex flex-col gap-[18px] items-start shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-l font-['Geist'] font-medium from-[rgba(255,255,255,0.4)] text-[18px] md:text-[23px] text-[transparent] to-white tracking-[-0.4px] leading-tight">
        “Flowtech transformed our operations from day one. The implementation was seamless, and we now have complete visibility, control, and confidence in our systems.”
      </p>
      <div className="h-[40px] md:h-[63.8px] relative w-[100px] md:w-[145px] shrink-0 opacity-80">
        <ImageWithFallback alt="Brand Logo" className="h-full w-full object-contain object-left" src={imgImage1} />
      </div>
    </div>
  );
}

export const HeroTestimonialSection = () => {
  return (
    <ScrollFadeIn>
    <section className="w-full flex justify-center py-10 md:py-16 px-6 md:px-8 overflow-hidden -mt-15">
      <div className="max-w-[1260px] w-full aspect-[1/1.2] sm:aspect-[1260/630] relative rounded-[7px] overflow-hidden group">
        {/* Background Main Image */}
        <div className="absolute inset-0 bg-[#3d2a45]">
          <ImageWithFallback 
            alt="Client Representative" 
            className="w-full h-full object-cover opacity-60 md:opacity-100" 
            src={imgImage} 
          />
        </div>

        {/* Floating UI/Dashboard Image Layer - Hidden on mobile or smaller */}
        <div className="hidden lg:block absolute h-[449px] right-[-50px] top-[180px] w-[598px] rounded-[20px] shadow-2xl transition-transform duration-700 group-hover:translate-y-[-10px]">
          <ImageWithFallback 
            alt="Dashboard Interface" 
            className="w-full h-full object-cover rounded-[20px]" 
            src={imgImage2} 
          />
        </div>

        {/* Translucent Review Card */}
        <div className="absolute inset-x-[20px] bottom-[20px] md:inset-auto md:bottom-[30px] md:left-[30px] backdrop-blur-[50px] bg-black/50 flex flex-col gap-8 md:gap-[48px] items-start justify-center max-w-[500px] overflow-hidden p-6 md:p-[35px] rounded-[7px] shadow-xl border border-white/10">
          <ReviewHeader />
          <QuoteSection />
        </div>
      </div>
    </section>
    </ScrollFadeIn>
  );
};
