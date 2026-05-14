// 

import React from "react";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { sub } from "date-fns";
import { PlusIcon } from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "../../context/LanguageContext";
import { langData } from "../../langData/data";

const Badge = () => {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].our_process;
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip ps-[7px] pe-[11px] py-[5px] relative rounded-[5px] shrink-0">
      <PlusIcon size={16} />
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">{t.badge}</p>
      </div>
    </div>
  );
};

export const OurProcessSection = () => {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].our_process;

  return (
    <ScrollFadeIn>
      <section className="relative w-full  py-10 md:py-16 ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ✅ LEFT SIDE (STICKY) */}
          <div className="lg:sticky lg:top-40 h-fit">
            <div className="flex flex-col gap-5 items-start">
              <Badge />
              <div className="flex flex-wrap items-center">
                <span className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(-88.9328deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>{t.title_p1}&nbsp;</span>
                <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[36px] md:text-[44px] tracking-[-0.4px] leading-tight">{t.title_italic}</span>
                <span className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(-87.7687deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>&nbsp;{t.title_p2}</span>
              </div>
            </div>


            <div className="opacity-70 mt-10 mb-12">
              <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase leading-[1.4] md:leading-[27px]">{t.description}</p>
            </div>

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
              {t.cta}
            </button>
          </div>

          {/* ✅ RIGHT SIDE (SCROLLING CARDS) */}
          <div className="flex flex-col gap-10">
            {t.steps.map((item, i) => (
              <div
                key={i}
                className={clsx(
                  "relative rounded-[7px] p-5 md:p-8 min-h-[260px] md:min-h-[300px] backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.05)] transition-all duration-300",
                  i === 3 && "bg-blue-500/30"
                )}
              >
                {/* 🔵 Top Glow */}
                <div className="absolute inset-0 rounded-[7px] bg-blue-500/10 blur-2xl opacity-20 pointer-events-none" />

                {/* 🔢 Number + Title */}
                <div className="flex items-center gap-4 mb-6 relative z-10">

                  {/* Number Circle */}
                  <div className="
        w-10 h-10 md:w-12 md:h-12
        flex items-center justify-center
        rounded-full bg-white/10 text-white
        font-semibold font-['Playfair_Display'] italic
        text-[16px] md:text-[23px]
      ">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <div className="content-center flex flex-wrap gap-x-2 gap-y-1 items-center overflow-clip relative">
                    <span className="bg-clip-text font-['Geist'] font-medium text-[20px] md:text-[23px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(-87.3379deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>{item.title}</span>
                    <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[20px] md:text-[23px] leading-none">{language === "AR" ? "و" : "&"}</span>
                    <span className="bg-clip-text font-['Geist'] font-medium text-[20px] md:text-[23px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(-87.3379deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>{item.subtitle}</span>
                  </div>
                </div>

                {/* 📄 Description */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed relative z-10">
                  {item.desc.toUpperCase()}
                </p>

                <PlusIcon size={20} opacity={0.4} className="absolute bottom-[15px] start-[15px] md:bottom-[20px] md:start-[20px]" />
                <PlusIcon size={20} opacity={0.4} className="absolute top-[15px] end-[15px] md:top-[20px] md:end-[20px]" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </ScrollFadeIn >
  );
};