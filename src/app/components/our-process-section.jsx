// 

import React from "react";
import ScrollFadeIn from "../../components/ScrollFadeIn";

const steps = [
  {
    title: "Assessment & Discovery",
    desc: "We begin by analysing your operations, systems, and data landscape. Through audits and workshops, we identify gaps, risks, and opportunities.",
  },
  {
    title: "Solution Design & Integration",
    desc: "Our team designs tailored solutions and integrates them seamlessly with your existing infrastructure, ensuring minimal disruption and maximum efficiency.",
  },
  {
    title: "Deployment & Implementation",
    desc: "We implement and fine-tune systems across environments—leveraging real-time data, automation, and continuous performance monitoring.",
  },
  {
    title: "Insights & Continuous Support",
    desc: "WE DELIVER ACTIONABLE INSIGHTS, PREDICTIVE ANALYTICS, AND ONGOING SUPPORT TO HELP YOU SCALE, IMPROVE SAFETY, AND DRIVE LONG-TERM GROWTH.",
  },
];

export const OurProcessSection = () => {
  return (
    <ScrollFadeIn>
      <section className="relative w-full  py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ✅ LEFT SIDE (STICKY) */}
          <div className="lg:sticky lg:top-40 h-fit">
            <p className="text-sm text-white/60 mb-3">OUR PROCESS</p>

            <h2 className="text-4xl md:text-5xl text-white font-semibold leading-tight">
              Our <span className="italic text-white/70">four-step</span> process
            </h2>

            <p className="text-white/60 mt-4 max-w-md">
              Ensuring every solution is scalable, data-driven, and built to deliver real impact.
            </p>

            <button
              className="relative cursor-pointer overflow-hidden mt-6 px-6 py-3 rounded-full text-white font-['Geist'] font-medium text-sm tracking-[0.3px] bg-gradient-to-tr from-blue-700 to-blue-500 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 glare-btn"
              >
              SCHEDULE A CONSULTATION
            </button>
          </div>

        {/* ✅ RIGHT SIDE (SCROLLING CARDS) */}
        <div className="flex flex-col gap-10">

          {steps.map((item, i) => (
            <div
              key={i}
              className="
      relative rounded-2xl p-8 min-h-[400px]
      bg-gradient-to-br from-[#1e3a8a]/40 to-black/40
      backdrop-blur-xl border border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.4)]
      hover:border-white/20 transition-all duration-300
    "
            >
              {/* 🔵 Top Glow */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl opacity-20 pointer-events-none" />

              {/* 🔢 Number + Title */}
              <div className="flex items-center gap-4 mb-6 relative z-10">

                {/* Number Circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold font-size-lg">
                  {item.title}
                </h3>
              </div>

              {/* 📄 Description */}
              <p className="text-white/60 leading-relaxed relative z-10">
                {item.desc.toLocaleUpperCase()}
              </p>

              {/* ➕ Plus Icons (decorative like your design) */}
              <div className="absolute bottom-6   left-8 text-white/30 text-xl">+</div>
              <div className="absolute top-1/2 left-20 top-50 text-white/20 text-lg">+</div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </ScrollFadeIn >
  );
};