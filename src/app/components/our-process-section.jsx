// 

import React from "react";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { sub } from "date-fns";
import { PlusIcon } from "lucide-react";
import clsx from "clsx";

const steps = [
  {
    title: "Assessment",
    subtitle: "Discovery",
    desc: "We begin by analysing your operations, systems, and data landscape. Through audits and workshops, we identify gaps, risks, and opportunities.",
  },
  {
    title: "Solution Design ",
    subtitle: "Integration",
    desc: "Our team designs tailored solutions and integrates them seamlessly with your existing infrastructure, ensuring minimal disruption and maximum efficiency.",
  },
  {
    title: "Deployment",
    subtitle: "Implementation",
    desc: "We implement and fine-tune systems across environments—leveraging real-time data, automation, and continuous performance monitoring.",
  },
  {
    title: "Insights ",
    subtitle: "Continuous Support",
    desc: "WE DELIVER ACTIONABLE INSIGHTS, PREDICTIVE ANALYTICS, AND ONGOING SUPPORT TO HELP YOU SCALE, IMPROVE SAFETY, AND DRIVE LONG-TERM GROWTH.",
  },
];
const Badge = () => (
  <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0">
    <PlusIcon size={16} />
    <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
      <p className="leading-[17.6px]">Our process</p>
    </div>
  </div>
);

export const OurProcessSection = () => {
  return (
    <ScrollFadeIn>
      <section className="relative w-full  py-10 md:py-16 ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ✅ LEFT SIDE (STICKY) */}
          <div className="lg:sticky lg:top-40 h-fit">
            <div className="flex flex-col gap-5 items-start">
              <Badge />
              <div className="flex flex-wrap items-center">
                <span className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(-88.9328deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>Our&nbsp;</span>
                <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[36px] md:text-[44px] tracking-[-0.4px] leading-tight">four-step</span>
                <span className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(-87.7687deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>&nbsp;process</span>
              </div>
            </div>


            <div className="opacity-70 mt-10 mb-12">
              <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase leading-[1.4] md:leading-[27px]">ENSURING EVERY SOLUTION IS SCALABLE, DATA-DRIVEN, AND BUILT TO DELIVER REAL OPERATIONAL IMPACT.</p>
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
              SCHEDULE A CONSULTATION
            </button>
          </div>

          {/* ✅ RIGHT SIDE (SCROLLING CARDS) */}
          <div className="flex flex-col gap-10">
            {steps.map((item, i) => (
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
                    <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[20px] md:text-[23px] leading-none">&</span>
                    <span className="bg-clip-text font-['Geist'] font-medium text-[20px] md:text-[23px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(-87.3379deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>{item.subtitle}</span>
                  </div>
                </div>

                {/* 📄 Description */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed relative z-10">
                  {item.desc.toUpperCase()}
                </p>

                <PlusIcon size={20} opacity={0.4} className="absolute bottom-[15px] left-[15px] md:bottom-[20px] md:left-[20px]" />
                <PlusIcon size={20} opacity={0.4} className="absolute top-[15px] right-[15px] md:top-[20px] md:right-[20px]" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </ScrollFadeIn >
  );
};