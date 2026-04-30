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
        <p className="leading-[17.6px]">PRODUCTS</p>
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

// export const EcosystemSection = () => {

//   const [radius, setRadius] = useState(200);
//   const [itemSize, setItemSize] = useState(60);

//   // ✅ Responsive control
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setRadius(110);
//         setItemSize(40);
//       } else if (window.innerWidth < 1024) {
//         setRadius(160);
//         setItemSize(55);
//       } else {
//         setRadius(600);
//         setItemSize(70);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <section className="w-full flex justify-center py-16 md:py-32 px-6 md:px-8 overflow-hidden">
//       <div className="max-w-[1260px] w-full flex flex-col lg:flex-row gap-16 lg:gap-[160px] items-center relative">
//         {/* Left Content */}
//         <div className="w-full lg:w-[500px] flex flex-col gap-8 md:gap-10 text-center lg:text-left items-center lg:items-start mx-auto lg:mx-0">
//           <div className="flex flex-col gap-5 items-center lg:items-start">
//             <Badge />
//             <Heading />
//           </div>

//           <div className="opacity-70 max-w-[500px]">
//             <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-white uppercase leading-[1.4] md:leading-[27px]">
//               PARTNER WITH FLOWTECH TO DELIVER ADVANCED INDUSTRIAL AND AI SOLUTIONS—ENABLING SEAMLESS INTEGRATION, SCALABLE DEPLOYMENTS, AND MUTUAL BUSINESS GROWTH.
//             </p>
//           </div>

//           <button className="relative rounded-[800px] w-full sm:w-fit cursor-pointer overflow-hidden group" style={{ backgroundImage: "linear-gradient(49.6721deg, rgb(0, 28, 169) 0%, rgb(4, 108, 228) 100%)" }}>
//             <div className="px-8 md:px-[30px] py-4 md:py-[13px] relative z-10 group-hover:scale-105 transition-transform text-center">
//               <span className="font-['Geist'] font-medium text-[12px] md:text-[14px] text-white tracking-[0.5px] uppercase whitespace-nowrap">BECOME A PARTNER</span>
//             </div>
//             <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[800px]" />
//           </button>
//         </div>

//         {/* Right Ecosystem Visualization */}

//         <div className="w-full h-[500px] sm:h-[600px] flex items-center justify-center relative overflow-visible">

//           {/* 🔵 Center Logo */}
//           <LogoItem isCustom size={90} className="-translate-x-1/2 left-1/2 top-[40%] bg-[#191919] md:size-[120px]">
//             <FlowtechCenterLogo />
//           </LogoItem>
//           {/* 🔵 Outer Orbit */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <OrbitImages
//               images={images1}
//               shape="circle"
//               radius={radius}
//               itemSize={itemSize}
//               rotation={-4}
//               duration={12}
//               responsive={true}
//               direction="normal"
//               fill
//               showPath
//               paused={false}
//             />
//           </div>

//           {/* 🔵 Middle Orbit */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <OrbitImages
//               images={images2}
//               shape="circle"
//               radius={radius * 0.7}
//               itemSize={itemSize - 10}
//               rotation={-4}
//               duration={16}
//               responsive={true}
//               direction="reverse"   // 👈 nice effect
//               fill
//               showPath
//               paused={false}
//             />
//           </div>

//           {/* 🔵 Inner Orbit */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <OrbitImages
//               images={images3}
//               shape="circle"
//               radius={radius * 0.4}
//               itemSize={itemSize - 20}
//               rotation={-4}
//               duration={20}
//               responsive={true}
//               direction="normal"
//               fill
//               showPath
//               paused={false}
//             />
//           </div>

//         </div>
//       </div>
//     </section >
//   );
// };



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
    <section className="w-full flex justify-center py-16 md:py-32 px-4 sm:px-6 md:px-8 overflow-hidden ">

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

          {/* <button className="relative rounded-full w-full sm:w-fit cursor-pointer overflow-hidden group bg-gradient-to-r from-blue-800 to-blue-500">
            <div className="px-6 md:px-8 py-3 md:py-4 relative z-10 group-hover:scale-105 transition-transform">
              <span className="font-['Geist'] text-[12px] md:text-[14px] text-white uppercase tracking-wide">
                BECOME A PARTNER
              </span>
            </div>
            <div className="absolute inset-0 border border-white/20 rounded-full pointer-events-none" />
          </button> */}
          <button
  className="relative cursor-pointer overflow-hidden w-full sm:w-fit px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 text-white font-['Geist'] text-xs md:text-sm uppercase tracking-wide bg-gradient-to-r from-blue-800 to-blue-500 transition-all duration-300 hover:scale-105 active:scale-95 glare-btn"
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
          {/* <div className="absolute inset-0 flex items-center justify-center  ">
            <OrbitImages
              images={images1}
              shape="circle"
              radius={radius}
              itemSize={itemSize}
              rotation={-4}
              duration={14}
              responsive
              direction="normal"
              fill
              showPath={true} // ✅ cleaner mobile
              paused={false}
            />
          </div> */}

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