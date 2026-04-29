import React from 'react';
import { Link, useNavigate } from 'react-router';
import imgRectangle from "../../assets/281158e8c678fde7e51a36a31c1553d4e710d208.png";
import img3DGraphComputerIllustration1 from "../../assets/d82205b1a88245914ba5dea196b6e44a35245bb8.png";
import imgRectangle1 from "../../assets/c78c44b955a51258030be19e23842e29465b7545.png";
import imgRectangle2 from "../../assets/ed6ab4e2d6429f0d554d61b64ceec65f98cbdf2e.png";
import imgFrame1139 from "../../assets/c4ae983d71bcd81ac6bc3423a3f716a541328ebf.png";
import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png";
import imgIcon from "../../assets/41ff2d725380255d23878aa7c6fb39c5f6bd3adc.png";
import imgIcon1 from "../../assets/798b5019ccb03e7937fe35631b20dcdefae3cefc.png";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1, imgDivFramerIu4QG2, imgDiv, imgDiv1, imgDiv2, imgDiv3, imgDiv4, imgDiv5, imgDiv6, imgDiv7 } from "../../imports/svg-4ugef";
import { ImageWithFallback } from './figma/ImageWithFallback';
import image1 from "../../assets/services/image 1.png";
import image2 from "../../assets/services/image 2.png";
import image3 from "../../assets/services/image 3.png";
import image4 from "../../assets/services/image 4.png";

const services = [
  {
    id: 1,
    title: "Manufacturing Intelligence",
    subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
    description:
      "Transform shop floor operations with real-time data integration, monitoring, and intelligent dashboards. Leverage predictive analytics to reduce downtime, optimise production, and improve quality.",
    img: imgRectangle,
    link: null,
    hoverImg: image2,
  },
  {
    id: 2,
    title: "Energy Monitoring Systems",
    subtitle: "ENERGY, SUSTAINABILITY",
    description:
      "Real-time energy monitoring that tracks consumption across utilities, equipment, and sites through a centralized dashboard.",
    img: img3DGraphComputerIllustration1,
    link: "/services/energy-monitoring",
    hoverImg: image1,
  },
  {
    id: 3,
    title: "Manufacturing Intelligence",
    subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
    description:
      "Turn complex data into actionable insights with advanced analytics, real-time dashboards, and predictive modelling.",
    img: imgRectangle1,
    link: null,
    hoverImg: image4,
  },
  {
    id: 4,
    title: "Manufacturing Intelligence",
    subtitle: "REAL-TIME ANALYTICS, DASHBOARDS",
    description:
      "Monitor pipelines in real time using distributed fiber optic sensing to detect leaks, temperature changes, and intrusions across long distances.",
    img: imgRectangle2,
    link: null,
    hoverImg: image3,
  },
];

function DivFramerIu4QGMaskGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="div.framer-IU4qG:mask-group">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} data-name="div.framer-IU4qG" />
    </div>
  );
}

function PFramerText() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 pb-[0.59px] right-0 top-[calc(50%-0.5px)]" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">CORE SERVICES</p>
      </div>
    </div>
  );
}

function WelcomeToOptune() {
  return (
    <div className="h-[17.59px] relative shrink-0 w-[80px] md:w-[95.02px]" data-name="Welcome to optune">
      <PFramerText />
    </div>
  );
}

function Default() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0" data-name="Default">
      <DivFramerIu4QGMaskGroup />
      <WelcomeToOptune />
    </div>
  );
}

function DivFramerWgfo5JContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-wgfo5j-container">
      <Default />
    </div>
  );
}

function Heading2Projects() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → Projects">
      <div className="bg-clip-text bg-gradient-to-l flex flex-col font-['Geist'] font-medium from-[5%] from-[rgba(255,255,255,0.4)] justify-center leading-[0] relative shrink-0 text-[40px] md:text-[60px]  tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[1.1]">Services</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] md:gap-[20px] items-start justify-center max-w-[240px] overflow-clip relative shrink-0 w-full sm:w-[240px]" data-name="Title">
      <DivFramerWgfo5JContainer />
      <Heading2Projects />
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="md:-translate-y-1/2 md:absolute content-stretch flex flex-col items-start left-0 right-0 md:top-2/8" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] text-white uppercase w-full max-w-[418px]">
        <p className="leading-[1.4] md:leading-[22.4px]">FROM DATA TO INFRASTRUCTURE, WE DELIVER END-TO-END DIGITAL AND INDUSTRIAL SOLUTIONS BUILT FOR SCALE AND IMPACT</p>
      </div>
    </div>
  );
}

function ExperienceAPlatformEngineeredForImpactPackedWithIntelligentToolsThatSimplifyWorkflows() {
  return (
    <div className="md:h-[67.22px] max-w-[345px] opacity-70 relative shrink-0 w-full md:w-[345px]" data-name="Experience a platform engineered for impact, packed with intelligent tools that simplify workflows">
      <PFramerText1 />
    </div>
  );
}

function TitleWrap() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row flex-[1_0_0] items-start sm:items-end justify-between gap-6 md:max-w-[795px] min-w-px relative w-full" data-name="Title Wrap">
      <Title />
      <ExperienceAPlatformEngineeredForImpactPackedWithIntelligentToolsThatSimplifyWorkflows />
    </div>
  );
}

function Component2025() {
  return <div className="h-[27px] opacity-70 shrink-0 w-[70px] text-[12px] text-white font-['Geist'] hidden sm:block" data-name="(2025©)">(2025©)</div>;
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex items-start sm:items-end justify-between overflow-clip relative shrink-0 w-full" data-name="Content Wrapper">
      <TitleWrap />
      <Component2025 />
    </div>
  );
}


function Frame1({ description }) {
  return (
    <div
      className="
        absolute bottom-4 left-4 right-4 md:left-[27.98px] md:w-[560px]
        backdrop-blur-[25px] bg-black/40 md:bg-[rgba(255,255,255,0.05)]
        bg-gradient-to-r from-blue-500 to-blue-700
        rounded-[7px] p-5 md:p-6 flex items-center z-20

        transition-all duration-500 ease-out

        /* ✅ MOBILE (default) */
        translate-y-0 opacity-100

        /* 💻 DESKTOP (override) */
        md:translate-y-full md:opacity-0

        /* 💻 HOVER (desktop only) */
        md:group-hover:translate-y-0 
        md:group-hover:opacity-100
      "
    >
      <div className="flex flex-col font-['Geist'] font-medium text-[14px] md:text-[20px] text-white w-full">
        <p className="leading-[1.4]">{description}</p>
      </div>
    </div>
  );
}



function Image({ src, children }) {
  return (
    <div className="absolute inset-[-5%] overflow-clip" data-name="Image">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-full left-1/2 top-1/2 w-full" data-name="Rectangle">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
      </div>
      {children}
    </div>
  );
}

function TitleWrapCard({ title, subtitle }) {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.15)] relative rounded-[7px] shrink-0 w-full" data-name="Title Wrap">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col sm:flex-row gap-2 sm:gap-[26.18px] items-start sm:items-center px-[20px] py-[15px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full sm:w-[252px]">
            <div className="flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[18px] md:text-[20px] text-white whitespace-nowrap">
              <p className="leading-[1.2]">{title}</p>
            </div>
          </div>
          <div className="flex-[1_0_0] md:h-[22.41px] min-w-px opacity-70 relative w-full">
            <div className="md:-translate-y-1/2 md:absolute content-stretch flex flex-col items-start left-0 right-[0.48px] md:top-[calc(50%-0.7px)]">
              <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] text-white uppercase whitespace-nowrap">
                <p className="leading-[1.2] md:leading-[22.4px]">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// card Views

// function ServiceCard({ item }) {
//   const Wrapper = item.link ? Link : "div";

//   return (
//     <Wrapper
//       to={item.link || undefined}
//       className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative w-full max-w-[560px] mx-auto group"
//     >
//       <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[7px] aspect-square w-full">

//         {/* Image */}
//         <div className="absolute inset-[-5%] overflow-clip">
//           <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
//             <ImageWithFallback
//               src={item.img}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Overlay Content */}
//           <Frame1 description={item.description} />
//         </div>
//       </div>

//       <TitleWrapCard title={item.title} subtitle={item.subtitle} />
//     </Wrapper>
//   );
// }

// function ServiceCard({ item }) {
//   const Wrapper = item.link ? Link : "div";

//   return (
//     <Wrapper
//       to={item.link || undefined}
//       className="content-stretch flex flex-col gap-[10px] items-center justify-center relative w-full max-w-[560px] mx-auto group"
//     >
//       <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] relative rounded-[7px] aspect-square w-full overflow-hidden">

//         {/* Image Container */}
//         <div className="absolute inset-[-5%]">

//           {/* Default Image */}
//           <div className="absolute inset-0 transition-all duration-500 group-hover:scale-110">
//             <ImageWithFallback
//               src={item.img}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Hover Image */}
//           {item.hoverImg && (
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110">
//               <ImageWithFallback
//                 src={item.hoverImg}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )}

//           {/* Overlay Content */}
//           <Frame1 description={item.description} />
//         </div>
//       </div>

//       <TitleWrapCard title={item.title} subtitle={item.subtitle} />
//     </Wrapper>
//   );
// }


import { useState, useEffect } from "react";
import ScrollFadeIn from '../../components/ScrollFadeIn';

function ServiceCard({ item }) {
  const Wrapper = item.link ? Link : "div";

  const [isMobile, setIsMobile] = useState(false);
  const [mobileHover, setMobileHover] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <Wrapper
      to={item.link || undefined}
      className="content-stretch flex flex-col gap-[10px] items-center justify-center relative w-full max-w-[560px] mx-auto group"
    >
      <div
        className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] relative rounded-[7px] aspect-square w-full overflow-hidden"
        onClick={() => {
          if (isMobile) setMobileHover((prev) => !prev);
        }}
      >
        <div className="absolute inset-[-5%]">

          {/* Default Image */}
          <div
            className={`
              absolute inset-0 transition-all duration-500
              ${!isMobile ? "group-hover:scale-110" : ""}
              ${mobileHover ? "opacity-0" : "opacity-100"}
            `}
          >
            <ImageWithFallback
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hover Image */}
          {item.hoverImg && (
            <div
              className={`
                absolute inset-0 transition-all duration-500
                ${!isMobile ? "group-hover:opacity-100 group-hover:scale-110" : ""}
                ${mobileHover ? "opacity-100 scale-110" : "opacity-0"}
              `}
            >
              <ImageWithFallback
                src={item.hoverImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <Frame1 description={item.description} />
        </div>
      </div>

      <TitleWrapCard title={item.title} subtitle={item.subtitle} />
    </Wrapper>
  );
}

// export default ServiceCard;

export default function WorkCardWrap() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[15px] w-full">
      {services.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </div>
  );
}


// function WorkCardWrap() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[15px] w-full" data-name="Work Card Wrap">
//       {/* Card 1 */}
//       <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative w-full max-w-[560px] mx-auto" data-name="Service card 1">
//         <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] overflow-clip group-hover:scale-110  relative rounded-[7px] shrink-0 aspect-square w-full" data-name="Image Wrap">
//           <Image src={imgRectangle}>
//             <Frame1 description="Transform shop floor operations with real-time data integration, monitoring, and intelligent dashboards. Leverage predictive analytics to reduce downtime, optimise production, and improve quality." />
//           </Image>
//         </div>
//         <TitleWrapCard title="Manufacturing Intelligence" subtitle="REAL-TIME ANALYTICS, DASHBOARDS" />
//       </div>

//       {/* Card 2 - Energy Monitoring System */}
//       <Link to="/services/energy-monitoring" className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative w-full max-w-[560px] mx-auto group">
//         <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[7px] shrink-0 aspect-square w-full" data-name="Image Wrap">
//           <div className="absolute inset-[-5%] overflow-clip" data-name="Image">
//             <div className="-translate-x-1/2 -translate-y-1/2 absolute h-full left-1/2 top-1/2 w-full group-hover:scale-110 transition-transform duration-500" data-name="3d-graph-computer-illustration 1">
//               <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DGraphComputerIllustration1} />
//             </div>
//             <Frame1 description="Real-time energy monitoring that tracks consumption across utilities, equipment, and sites through a centralized dashboard." />
//           </div>
//         </div>
//         <TitleWrapCard title="Energy Monitoring Systems" subtitle="ENERGY, SUSTAINABILITY" />
//       </Link>

//       {/* Card 3 */}
//       <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative w-full max-w-[560px] mx-auto" data-name="Service card 6">
//         <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] overflow-clip relative  rounded-[7px] shrink-0 aspect-square w-full" data-name="Image Wrap">
//           <Image src={imgRectangle1} className="group-hover:scale-110 ">
//             <Frame1 description="Turn complex data into actionable insights with advanced analytics, real-time dashboards, and predictive modelling." />
//           </Image>
//         </div>
//         <TitleWrapCard title="Manufacturing Intelligence" subtitle="REAL-TIME ANALYTICS, DASHBOARDS" />
//       </div>

//       {/* Card 4 */}
//       <div className="content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative w-full max-w-[560px] mx-auto" data-name="Service card 5">
//         <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] overflow-clip relative rounded-[7px] shrink-0 aspect-square w-full" data-name="Image Wrap">
//           <Image src={imgRectangle2}>
//             <Frame1 description="Monitor pipelines in real time using distributed fiber optic sensing to detect leaks, temperature changes, and intrusions across long distances." />
//           </Image>
//         </div>
//         <TitleWrapCard title="Manufacturing Intelligence" subtitle="REAL-TIME ANALYTICS, DASHBOARDS" />
//       </div>
//     </div>
//   );
// }

function DivFramer13M6KicContainer() {
  const onNavigate = useNavigate()
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-13m6kic-container">
      <button className="relative rounded-[800px] shrink-0 cursor-pointer hover:scale-105 transition-transform" style={{ backgroundImage: "linear-gradient(50.1214deg, rgb(0, 28, 169) 0%, rgb(4, 108, 228) 100%)" }} data-name="Hero Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-8 md:px-[22px] py-4 md:py-[13px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 cta-shine cta-shine-primary">
            <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full ">
              <div className="flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
                <p className="leading-[19.6px] " onClick={() => onNavigate("/services/manufacturing")}>view all SERVICES</p>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[800px]" />
      </button>
    </div>
  );
}

function WorkCardWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-12 md:gap-[50px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Work Card Wrapper">
      <WorkCardWrap />
      <DivFramer13M6KicContainer />
    </div>
  );
}

function DivFramerIu4QGMaskGroupSmall() {
  return (
    <div className="size-[20px] md:size-[24px]" data-name="div.framer-IU4qG:mask-group">
      <div className="bg-white mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-full opacity-40 size-full" style={{ maskImage: `url('${imgDivFramerIu4QG1}')` }} data-name="div.framer-IU4qG" />
    </div>
  );
}

function ContainerServices() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-12 md:gap-[80px] items-center justify-center max-w-[1260px] px-6 md:px-[63px] py-16 md:py-[100px] relative rounded-[7px] shrink-0 w-full" data-name="Container">
      <ContentWrapper />
      <WorkCardWrapper />
      {/* Floating Gear */}
      <div className="absolute h-[150px] md:h-[273.493px] right-[-10px] md:right-[-19.75px] top-[-10px] md:top-[-14.76px] w-[140px] md:w-[265.865px] opacity-30 md:opacity-100">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full animate-[spin_20s_linear_infinite]" src={imgFrame1139} />
      </div>
      {/* Corner Icons */}
      <div className="absolute left-[10px] md:left-[20px] top-[10px] md:top-[20px]"><DivFramerIu4QGMaskGroupSmall /></div>
      <div className="absolute bottom-[10px] md:bottom-[20.11px] left-[10px] md:left-[20px]"><DivFramerIu4QGMaskGroupSmall /></div>
      <div className="absolute bottom-[10px] md:bottom-[20.11px] right-[10px] md:right-[20px]"><DivFramerIu4QGMaskGroupSmall /></div>
      <div className="absolute right-[10px] md:right-[20px] top-[10px] md:top-[20px]">
        <div className="size-[16px] md:size-[20px]">
          <div className="bg-white mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-full opacity-40 size-full" style={{ maskImage: `url('${imgDivFramerIu4QG2}')` }} />
        </div>
      </div>
    </div>
  );
}

function BlurOverlays() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[50%_0_0_0] md:inset-[35%_0_0_0] items-start justify-center">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full">
        <div className="absolute backdrop-blur-[0.117px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv}')` }} />
        <div className="absolute backdrop-blur-[0.234px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv1}')` }} />
        <div className="absolute backdrop-blur-[0.469px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv2}')` }} />
        <div className="absolute backdrop-blur-[0.938px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv3}')` }} />
        <div className="absolute backdrop-blur-[1.875px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv4}')` }} />
        <div className="absolute backdrop-blur-[3.75px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv5}')` }} />
        <div className="absolute backdrop-blur-[7.5px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv6}')` }} />
        <div className="absolute backdrop-blur-[15px] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%]" style={{ maskImage: `url('${imgDiv7}')` }} />
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <div className="h-[400px] md:h-[630px] relative shrink-0 w-full max-w-[1260px] overflow-clip rounded-[7px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-clip">
        <ImageWithFallback alt="" className="absolute h-full w-full object-cover" src={imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg} />
        <div className="absolute bg-[rgba(21,21,21,0.3)] inset-0" />
      </div>

      <BlurOverlays />

      <div className="absolute content-stretch flex flex-col items-start justify-center right-[20px] md:right-[2.7%] top-[20px] md:top-[28px] max-w-[145px]">
        <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[18px] md:text-[23px] text-[transparent] tracking-[-0.4px] whitespace-nowrap text-right md:text-left" style={{ backgroundImage: "linear-gradient(-87.6189deg, rgba(255, 255, 255, 0.6) 5%, rgb(255, 255, 255) 50%)" }}>
          <p className="leading-[1.2] mb-0 whitespace-pre">{`Our expertise, `}</p>
          <p className="leading-[1.2] whitespace-pre">in data analysis.</p>
        </div>
      </div>

      <div className="absolute backdrop-blur-[20px] bottom-[20px] md:bottom-[40px] h-[34px] md:h-[38px] left-0 rounded-br-[30px] rounded-tr-[30px] w-[90px] md:w-[105px] overflow-clip" data-name="Time">
        <ImageWithFallback alt="" className="absolute inset-0 h-full w-full object-cover" src={imgIcon} />
        <div className="absolute right-[15px] md:right-[20.95px] top-[8px] md:top-[9px]">
          <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[9px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
            <p className="leading-[17.6px]">4:14 min</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col gap-[10px] md:gap-[14px] items-center justify-center pointer-events-none">
        <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 size-[60px] md:size-[80px] pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
          <div className="size-[10px] md:size-[12px]">
            <ImageWithFallback alt="" className="size-full" src={imgIcon1} />
          </div>
        </div>
        <div className="flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[20px] md:text-[28px] text-white tracking-[-0.4px] whitespace-nowrap">
          <p className="leading-[29.96px] cta-shine cta-shine-primary">View Video</p>
        </div>
      </div>
    </div>
  );
}

export const FeaturesSection = () => {
  return (
    <ScrollFadeIn>
    <section className="w-full flex justify-center py-16 md:py-20 px-6 md:px-8">
      <div className="max-w-[1260px] w-full flex flex-col gap-12 md:gap-[20px] items-center justify-center relative" data-name="Features">
        <ContainerServices />
        <VideoSection />
      </div>
    </section>
    </ScrollFadeIn>
  );
}
