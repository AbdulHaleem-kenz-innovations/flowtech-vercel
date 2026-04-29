import React from 'react';
import { imgDivFramerIu4QG, imgDivFramerIu4QG1 } from "../../imports/svg-b5az9";

const PlusIcon = ({ size = 16, opacity = 1, className = "" }) => (
  <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] size-full top-1/2"
      style={{
        maskImage: `url('${size === 16 ? imgDivFramerIu4QG : imgDivFramerIu4QG1}')`,
        maskSize: 'contain',
        opacity,
      }}
    />
  </div>
);

const Badge = () => (
  <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0">
    <PlusIcon size={16} />
    <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
      <p className="leading-[17.6px]">Our process</p>
    </div>
  </div>
);

const ProcessCard = ({ number, title, ampersandTitle, description }) => (
  <div className="w-full">
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] relative rounded-[7px] border border-[rgba(255,255,255,0.05)]">
      <div className="content-stretch flex flex-col gap-6 md:gap-[39.2px] items-start justify-center pb-12 md:pb-[60px] pl-6 md:pl-[35px] pr-6 md:pr-[30px] pt-8 md:pt-[30px] relative size-full">
        <div className="content-stretch flex gap-[15px] md:gap-[20px] items-center overflow-clip relative shrink-0 w-full">
          <div
            className={`backdrop-blur-[10px] ${number === '04' ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(255,255,255,0.05)]'} content-stretch flex items-center justify-center pb-[4px] md:pb-[8px] relative rounded-full shrink-0 size-[50px] md:size-[60px]`}
          >
            <span className="font-['Playfair_Display'] italic text-[18px] md:text-[23px] text-white leading-none">{number}</span>
          </div>
          <div className="content-center flex flex-wrap gap-x-2 gap-y-1 items-center overflow-clip relative">
            <span
              className="bg-clip-text font-['Geist'] font-medium text-[20px] md:text-[23px] text-[transparent] tracking-[-0.4px] leading-tight"
              style={{
                backgroundImage:
                  'linear-gradient(-87.3379deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)',
              }}
            >
              {title}
            </span>
            <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[20px] md:text-[23px] leading-none">&</span>
            <span
              className="bg-clip-text font-['Geist'] font-medium text-[20px] md:text-[23px] text-[transparent] tracking-[-0.4px] leading-tight"
              style={{
                backgroundImage:
                  'linear-gradient(-87.3379deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)',
              }}
            >
              {ampersandTitle}
            </span>
          </div>
        </div>
        <div className="opacity-75 relative shrink-0 w-full">
          <p className="font-['Geist'] font-normal text-[14px] md:text-[16px] text-white uppercase leading-[1.4] md:leading-[22.4px]">
            {description}
          </p>
        </div>
        <PlusIcon size={20} opacity={0.4} className="absolute bottom-[15px] left-[15px] md:bottom-[20px] md:left-[20px]" />
        <PlusIcon size={20} opacity={0.4} className="absolute top-[15px] right-[15px] md:top-[20px] md:right-[20px]" />
      </div>
    </div>
  </div>
);

// export const OurProcessSection = () => {
//   return (
//     <section className="w-full flex justify-center py-16 md:py-32 px-6 md:px-8">
//       <div className="max-w-[1260px] w-full flex flex-col lg:flex-row gap-12 lg:gap-16" data-name="Our Process">
//         <div className="w-full lg:w-[40%] flex flex-col gap-8 lg:gap-10 lg:sticky lg:top-32 lg:self-start">
//           <div className="flex flex-col gap-5 items-start">
//             <Badge />
//             <div className="flex flex-wrap items-center">
//               <span
//                 className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight"
//                 style={{
//                   backgroundImage:
//                     'linear-gradient(-88.9328deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)',
//                 }}
//               >
//                 Our&nbsp;
//               </span>
//               <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[36px] md:text-[44px] tracking-[-0.4px] leading-tight">
//                 four-step
//               </span>
//               <span
//                 className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight"
//                 style={{
//                   backgroundImage:
//                     'linear-gradient(-87.7687deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)',
//                 }}
//               >
//                 &nbsp;process
//               </span>
//             </div>
//           </div>

//           <div className="opacity-70">
//             <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase leading-[1.4] md:leading-[27px]">
//               ENSURING EVERY SOLUTION IS SCALABLE, DATA-DRIVEN, AND BUILT TO DELIVER REAL OPERATIONAL IMPACT.
//             </p>
//           </div>

//           <button
//             className="relative rounded-[800px] w-full sm:w-fit cursor-pointer overflow-hidden group"
//             style={{ backgroundImage: 'linear-gradient(42.0662deg, rgb(0, 28, 169) 0%, rgb(4, 108, 228) 100%)' }}
//           >
//             <div className="px-8 md:px-[30px] py-4 md:py-[13px] relative z-10 group-hover:scale-105 transition-transform text-center">
//               <span className="font-['Geist'] font-medium text-[12px] md:text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
//                 Schedule a consultation
//               </span>
//             </div>
//             <div
//               aria-hidden="true"
//               className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[800px]"
//             />
//           </button>
//         </div>

//         <div className="w-full lg:w-[60%] flex flex-col gap-6 md:gap-8">
//           <ProcessCard
//             number="01"
//             title="Assessment"
//             ampersandTitle="Discovery"
//             description="We begin by analysing your operations, systems, and data landscape. Through audits and workshops, we identify gaps, risks, and opportunities."
//           />
//           <ProcessCard
//             number="02"
//             title="Solution Design"
//             ampersandTitle="Integration"
//             description="Our team designs tailored solutions and integrates them seamlessly with your existing infrastructure, ensuring minimal disruption and maximum efficiency."
//           />
//           <ProcessCard
//             number="03"
//             title="Deployment"
//             ampersandTitle="Optimisation"
//             description="We implement and fine-tune systems across environments—leveraging real-time data, automation, and continuous performance monitoring."
//           />
//           <ProcessCard
//             number="04"
//             title="Insights"
//             ampersandTitle="Continuous Support"
//             description="WE DELIVER ACTIONABLE INSIGHTS, PREDICTIVE ANALYTICS, AND ONGOING SUPPORT TO HELP YOU SCALE, IMPROVE SAFETY, AND DRIVE LONG-TERM GROWTH."
//           />
//         </div>
//       </div>
//     </section>
//   );
// };


export const OurProcessSection = () => {
  return (
    <section className="w-full flex justify-center py-16 md:py-32 px-6 md:px-8" style={{ minHeight: '200vh' }}>
      <div className="max-w-[1260px] w-full flex flex-col lg:flex-row gap-12 lg:gap-16" data-name="Our Process">
        
        {/* FIX: Use inline style for sticky instead of Tailwind class */}
        <div 
          className="w-full lg:w-[40%] flex flex-col gap-8 lg:gap-10 lg:self-start"
          style={{
            position: 'sticky',
            top: '32px',
            height: 'fit-content'
          }}
        >
          <div className="flex flex-col gap-5 items-start">
            <Badge />
            <div className="flex flex-wrap items-center">
              <span
                className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight"
                style={{
                  backgroundImage:
                    'linear-gradient(-88.9328deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)',
                }}
              >
                Our&nbsp;
              </span>
              <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[36px] md:text-[44px] tracking-[-0.4px] leading-tight">
                four-step
              </span>
              <span
                className="bg-clip-text font-['Geist'] font-medium text-[36px] md:text-[44px] text-[transparent] tracking-[-0.4px] leading-tight"
                style={{
                  backgroundImage:
                    'linear-gradient(-87.7687deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)',
                }}
              >
                &nbsp;process
              </span>
            </div>
          </div>

          <div className="opacity-70">
            <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase leading-[1.4] md:leading-[27px]">
              ENSURING EVERY SOLUTION IS SCALABLE, DATA-DRIVEN, AND BUILT TO DELIVER REAL OPERATIONAL IMPACT.
            </p>
          </div>

          <button
            className="relative rounded-[800px] w-full sm:w-fit cursor-pointer overflow-hidden group"
            style={{ backgroundImage: 'linear-gradient(42.0662deg, rgb(0, 28, 169) 0%, rgb(4, 108, 228) 100%)' }}
          >
            <div className="px-8 md:px-[30px] py-4 md:py-[13px] relative z-10 group-hover:scale-105 transition-transform text-center">
              <span className="font-['Geist'] font-medium text-[12px] md:text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
                Schedule a consultation
              </span>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[800px]"
            />
          </button>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col gap-6 md:gap-8">
          <ProcessCard
            number="01"
            title="Assessment"
            ampersandTitle="Discovery"
            description="We begin by analysing your operations, systems, and data landscape. Through audits and workshops, we identify gaps, risks, and opportunities."
          />
          <ProcessCard
            number="02"
            title="Solution Design"
            ampersandTitle="Integration"
            description="Our team designs tailored solutions and integrates them seamlessly with your existing infrastructure, ensuring minimal disruption and maximum efficiency."
          />
          <ProcessCard
            number="03"
            title="Deployment"
            ampersandTitle="Optimisation"
            description="We implement and fine-tune systems across environments—leveraging real-time data, automation, and continuous performance monitoring."
          />
          <ProcessCard
            number="04"
            title="Insights"
            ampersandTitle="Continuous Support"
            description="WE DELIVER ACTIONABLE INSIGHTS, PREDICTIVE ANALYTICS, AND ONGOING SUPPORT TO HELP YOU SCALE, IMPROVE SAFETY, AND DRIVE LONG-TERM GROWTH."
          />
        </div>
      </div>
    </section>
  );
};

