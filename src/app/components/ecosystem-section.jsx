import React, { useEffect, useState } from 'react';
import svgPaths from "../../imports/svg-n6aofwfw17";
import imgIntegrationLogo from "../../assets/b99b0e4e2368fb58fe0e4380342b8ed7370d0e23.png";
import imgIntegrationLogo1 from "../../assets/32f14cbffd3b88a065aff47d5d448f79e6872884.png";
import imgIntegrationLogo2 from "../../assets/55fd1abb87d523ba2a0472cb476dba4d0680012b.png";
import imgIntegrationLogo3 from "../../assets/b7da4ac7176e05e9ae41e795c0393eabba380eef.png";
import imgIntegrationLogo4 from "../../assets/d81b0b3d1363fb5dba07a1f2b77655d3c638c4c0.png";
import imgIntegrationLogo5 from "../../assets/576cf38c77f18fadd7383fe7122cacc1200d8002.png";
import { imgDivFramerIu4QG } from "../../imports/svg-aiype";
import { ImageWithFallback } from './figma/ImageWithFallback';
import OrbitImages from './OrbitImages';
import ScrollFadeIn from '../../components/ScrollFadeIn';

const images1 = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
];
const images2 = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
];
const images3 = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
];

function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} />
    </div>
  );
}

function Badge() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0 w-[95px] md:w-[102px]">
      <PlusIcon />
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">PARTNERS</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-auto relative shrink-0 w-full flex flex-col gap-1">
      <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(-88.5374deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>
        <p className="leading-[1.1]">Collaborate with your</p>
      </div>
      <div className="flex flex-col font-['Playfair_Display'] font-normal italic justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-white/70 tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[1.1]">innovation ecosystem</p>
      </div>
    </div>
  );
}

function LogoItem({ src, size, className, isCustom = false, children }) {
  return (
    <div className={`absolute backdrop-blur-[20px] rounded-full overflow-hidden flex items-center justify-center border border-white/10 ${className}`} style={{ width: size, height: size }}>
      {isCustom ? children : <ImageWithFallback alt="" className="size-1/2 object-contain" src={src} />}
    </div>
  );
}

function FlowtechCenterLogo() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="size-1/2" fill="none" preserveAspectRatio="none" viewBox="0 0 62.5482 56.0997">
        <path d={svgPaths.p3cf44cc0} fill="white" />
        <path d={svgPaths.p3828ca00} fill="white" />
        <path d={svgPaths.p28117980} fill="white" />
        <path d={svgPaths.p443e280} fill="white" />
        <path d={svgPaths.p2bee9680} fill="white" />
        <path d={svgPaths.p532be80} fill="white" />
        <path d={svgPaths.p36dc1900} fill="white" />
        <path d={svgPaths.p1916f200} fill="white" />
        <path d={svgPaths.p238ef00} fill="white" />
        <path d={svgPaths.p2724f2} fill="white" />
        <path d={svgPaths.p3d74e600} fill="white" />
      </svg>
    </div>
  );
}


export const EcosystemSection = () => {
  const getValues = () => {
    if (typeof window === "undefined") {
      return { radius: 180, itemSize: 50 };
    }

    const width = window.innerWidth;

    if (width < 640) {
      return { radius: 600, itemSize: 38 }; // ✅ mobile tuned
    } else if (width < 1024) {
      return { radius: 300, itemSize: 50 }; // ✅ tablet
    } else {
      return { radius: 600, itemSize: 65 }; // ✅ desktop FIX (not 600)
    }
  };

  const [{ radius, itemSize }, setValues] = useState(getValues);

  useEffect(() => {
    let timeout;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setValues(getValues());
      }, 120);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ScrollFadeIn>
      <section className="w-full flex justify-center  overflow-hidden py-10 md:py-16 px-4 sm:px-6 md:px-8 ">
        {/* //py-16 md:py-32 px-4 sm:px-6 md:px-8 */}

        <div className="max-w-[1260px] w-full flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-[120px] items-center relative">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[500px] flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">

            <div className="flex flex-col gap-4 md:gap-5 items-center lg:items-start">
              <Badge />
              <Heading />
            </div>

            <div className="opacity-70 max-w-[500px]">
              <p className="font-['Geist'] text-[14px] sm:text-[16px] md:text-[18px] text-white uppercase leading-[1.5]">
                PARTNER WITH FLOWTECH TO DELIVER ADVANCED INDUSTRIAL AND AI SOLUTIONS—ENABLING SEAMLESS INTEGRATION, SCALABLE DEPLOYMENTS, AND MUTUAL BUSINESS GROWTH.
              </p>
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
              BECOME A PARTNER
            </button>
          </div>

          {/* RIGHT ORBIT VISUAL */}
          <div className="w-full h-[420px] sm:h-[520px] md:h-[600px] flex items-center justify-center relative ">

            {/* CENTER LOGO */}
            <LogoItem
              isCustom
              size={window.innerWidth < 640 ? 70 : 110}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#191919]"
            >
              <FlowtechCenterLogo />
            </LogoItem>

            {/* OUTER ORBIT */}

            {/* MIDDLE ORBIT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <OrbitImages
                images={images2}
                shape="circle"
                radius={radius * 0.65}
                itemSize={Math.max(itemSize - 10, 160)}
                rotation={10}
                duration={18}
                responsive
                direction="reverse"
                fill
                pathColor="rgba(255, 255, 255, 0.1)"
                showPath={true}
                paused={false}
              />
            </div>

            {/* INNER ORBIT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <OrbitImages
                images={images3}
                shape="circle"
                radius={radius * 0.35}
                itemSize={Math.max(itemSize - 18, 100)}
                rotation={10}
                duration={22}
                responsive
                direction="normal"
                pathColor="rgba(255, 255, 255, 0.11)"
                fill
                showPath={true}
                paused={false}
              />
            </div>

          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
};