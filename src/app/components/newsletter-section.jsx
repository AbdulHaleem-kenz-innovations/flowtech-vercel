import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgImage from "../../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";

export const NewsletterSection = () => {
  return (
    <section className="w-full max-w-[1260px] px-6 mb-40 flex flex-col lg:flex-row gap-20 items-center mx-auto">
      <div className="flex-1 relative">
         <div className="aspect-[364/470] max-w-[364px] rounded-[7px] overflow-hidden relative group">
           <ImageWithFallback src={imgImage} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/30" />
           
           <div className="absolute bottom-6 left-6 text-left">
              <div className="flex items-center gap-2">
                <span className="font-['Geist'] font-medium text-[23px] text-white">Daniel</span>
                <span className="font-['Playfair_Display'] text-[23px] text-white/80 italic">Hartmann</span>
              </div>
              <p className="font-['Geist'] text-[14px] text-white/80 uppercase">founder of Flowtech</p>
           </div>

           <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </button>
           </div>
         </div>
      </div>

      <div className="flex-1 flex flex-col gap-8">
         <div className="flex flex-col gap-4">
            <h2 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[44px] text-transparent tracking-tight">
              Insights that matter.
            </h2>
            <p className="font-['Playfair_Display'] italic text-[44px] text-white/80 leading-none">Early Access.</p>
         </div>
         
         <p className="font-['Geist'] text-white/70 text-[16px] leading-relaxed max-w-[480px]">
           STAY UPDATED WITH THE LATEST IN INDUSTRIAL AUTOMATION, ENERGY MANAGEMENT, AND REAL-WORLD CASE STUDIES FROM FLOWTECH
         </p>

         <form className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="flex flex-col gap-2">
              <label className="font-['Geist'] text-[12px] text-white/50 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['Geist'] text-[12px] text-white/50 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                placeholder="hello@flowtech.com"
                className="bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#001ca9] hover:bg-blue-600 px-8 py-4 rounded-md text-white font-['Geist'] font-semibold text-[14px] uppercase tracking-widest transition-colors mt-4"
            >
              SUBSCRIBE
            </button>
         </form>
      </div>
    </section>
  );
};
