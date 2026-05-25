// import React, { useEffect, useState } from 'react';
// import imgHEroImage from "../../assets/48517710623739daa711816a992836288eaf350d.png";
// import imgImage from "../../assets/14a520dccf727ce258eeb22631612c2347519bfe.png";
// import { imgDivFramerIu4QG } from "../../imports/svg-hryyo";
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import ScrollFadeIn from '../../components/ScrollFadeIn';
// import { useLanguage } from '../../context/LanguageContext';
// import { langData } from '../../langData/data';
// import { Link } from 'react-router';

// export const HeroSection = () => {
//   const [rotation, setRotation] = useState(290);
//   const { language } = useLanguage();
//   const currentLangData = langData[language.toLowerCase()].hero;

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setRotation(0 + scrollY * 0.05);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <ScrollFadeIn>
//       <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 md:pb-32 px-6 md:px-8 overflow-hidden">
//         <div className="max-w-[1260px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 pb-100">

//           {/* Left Content */}
//           <div className="flex flex-col gap-6 md:gap-8 max-w-[600px] text-center lg:text-start items-center lg:items-start mx-auto lg:mx-0">
//             {/* Badge */}
//             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-sm w-fit">
//               <div
//                 className="w-[14px] h-[14px] bg-white"
//                 style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', WebkitMaskImage: `url('${imgDivFramerIu4QG}')`, WebkitMaskSize: 'contain' }}
//               />
//               <span className="font-['Geist'] font-semibold text-[9px] md:text-[10px] text-white tracking-[0.18px] uppercase">
//                 {currentLangData.badge}
//               </span>
//             </div>

//             {/* Headline */}
//             <div className="flex flex-col">
//               <h1 className="font-['Geist'] font-medium text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.1] tracking-tight">
//                 <span className="bg-gradient-to-l from-white/60 to-white bg-clip-text text-transparent block sm:inline">
//                   {currentLangData.headline_p1}
//                 </span>
//                 <br className="hidden sm:block" />
//                 <span className="bg-gradient-to-l from-white/60 to-white bg-clip-text text-transparent">
//                   {currentLangData.headline_p2}
//                 </span>
//                 <span className="font-['Playfair_Display'] italic font-normal text-[#d9d9d9] ms-2 sm:ms-4">
//                   {currentLangData.headline_p3}
//                 </span>
//               </h1>
//             </div>

//             {/* Description */}
//             <p className="font-['Geist'] text-white/70 text-sm md:text-base uppercase leading-relaxed tracking-wide max-w-[500px]">
//               {currentLangData.description}
//             </p>

//             {/* CTA */}
//             <Link to="/services" 
//               className="
//                 relative overflow-hidden
//                 flex items-center justify-center
//                 w-fit mx-auto sm:mx-0
//                 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
//                 text-[13px] sm:text-[14px] md:text-[16px]
//                 rounded-full
//                 bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)]
//                 border border-white/20
//                 text-white uppercase whitespace-nowrap
//                 font-['Geist']
//                 cursor-pointer
//                 transition-all duration-300 
//                 hover:scale-105 active:scale-95 
//                 glare-btn
//               "
//             >
//               {currentLangData.cta}
//             </Link>
//           </div>

//           {/* Right Content (Sphere) */}
//           <div className="relative flex justify-center items-center order-first lg:order-last">
//             <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
//               <ImageWithFallback
//                 src={imgHEroImage}
//                 alt="Industrial Sphere"
//                 className="w-full h-full object-contain"
//                 style={{
//                   animation: "spin 10s linear infinite"
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Floating Elements (Bottom Sphere/Spear) */}
//         <div className="absolute inset-0 pointer-events-none md:-mt-30 sm:mt-20">
//           <div className="relative max-w-[1260px] mx-auto h-full w-full">
//             <div
//               className="
//                 absolute bottom-[0%] left-[6%] md:left-[1%] top-200 md:top-180
//                 w-[160px] md:w-[300px]
//                 h-[160px] md:h-[540px]
//                 opacity-70 md:opacity-100
//                 pointer-events-auto
//               "
//               style={{
//                 transform: `rotate(${rotation}deg)`,
//               }}
//             >
//               <img
//                 src={imgImage}
//                 alt=""
//                 className="w-[70%] h-[70%] object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </ScrollFadeIn>
//   );
// };

import React, { useEffect, useState } from 'react';
import imgHEroImage from "../../assets/48517710623739daa711816a992836288eaf350d.png";
import imgImage from "../../assets/14a520dccf727ce258eeb22631612c2347519bfe.png";
import { imgDivFramerIu4QG } from "../../imports/svg-hryyo";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';
import { Link } from 'react-router';

export const HeroSection = () => {
  const [rotation, setRotation] = useState(290);
  const { language } = useLanguage();
  const currentLangData = langData[language.toLowerCase()].hero;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(0 + scrollY * 0.05);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollFadeIn>
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 md:pb-32 px-6 md:px-8 overflow-hidden">
        <div className="max-w-[1260px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 pb-100">

          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-[600px] text-center lg:text-start items-center lg:items-start mx-auto lg:mx-0">

            {/* Badge */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-sm w-fit">
              <div
                className="w-[14px] h-[14px] bg-white"
                style={{
                  maskImage: `url('${imgDivFramerIu4QG}')`,
                  maskSize: 'contain',
                  WebkitMaskImage: `url('${imgDivFramerIu4QG}')`,
                  WebkitMaskSize: 'contain'
                }}
              />

              <span className="font-['Geist'] font-semibold text-[9px] md:text-[10px] text-white tracking-[0.18px] uppercase">
                {currentLangData.badge}
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col">
              <h1 className="font-['Geist'] font-medium text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-l from-white/60 to-white bg-clip-text text-transparent block sm:inline">
                  {currentLangData.headline_p1}
                </span>

                <br className="hidden sm:block" />

                <span className="bg-gradient-to-l from-white/60 to-white bg-clip-text text-transparent">
                  {currentLangData.headline_p2}
                </span>

                <span className="font-['Playfair_Display'] italic font-normal text-[#d9d9d9] ms-2 sm:ms-4">
                  {currentLangData.headline_p3}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-['Geist'] text-white/70 text-sm md:text-base uppercase leading-relaxed tracking-wide max-w-[500px]">
              {currentLangData.description}
            </p>

            {/* CTA */}
            <Link
              to="/services"
              className="
                relative overflow-hidden
                flex items-center justify-center
                w-fit mx-auto sm:mx-0
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
              {currentLangData.cta}
            </Link>
          </div>

          {/* Right Content (Sphere + Fixed Logo Overlay) */}
          <div className="relative flex justify-center items-center order-first lg:order-last">
            <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">

              {/* Rotating Sphere */}
              <ImageWithFallback
                src={imgHEroImage}
                alt="Industrial Sphere"
                className="w-full h-full object-contain"
                style={{
                  animation: "spin 10s linear infinite"
                }}
              />

              {/* Static Logo Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 20"
                  className="
                    w-[90%]
                    h-auto
                    opacity-50
                    md:opacity-50
                    drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]
                  "
                  fill="none"
                >
                 <path d="M8.7209 2.53515C9.25013 2.5082 9.52829 2.79411 9.92443 3.10118C10.5481 3.13784 11.2467 3.12099 11.8786 3.12052L15.0314 3.11806C15.8014 3.11726 17.1849 2.94513 17.6978 3.60005C18.5679 4.71095 19.1172 6.06108 19.8844 7.26537L14.0687 7.25783C13.2389 7.2566 12.4084 7.2453 11.5791 7.27095C11.1969 7.28279 10.7013 7.44764 10.4683 7.76692C9.45363 9.15772 8.80364 10.7727 7.8339 12.202C7.53762 12.6237 7.20709 13.276 6.95334 13.7464C6.594 14.4125 5.98266 15.3178 5.7371 16.0064C5.25108 15.3099 4.89436 14.5564 4.43044 13.853C4.04883 13.2683 3.0016 13.2062 2.90025 12.3893C2.72037 10.9393 4.69513 11.5081 4.747 9.92508C4.79253 8.53565 3.38 8.60922 3.17026 7.31028C3.09655 6.85376 3.25318 6.48986 3.50196 6.12625C3.88089 5.44256 4.85973 5.11209 5.54845 5.54301C6.38304 6.06517 6.96232 6.49207 7.71932 5.45604C8.31806 4.63662 7.31641 3.87314 7.84759 3.05079C8.01599 2.79013 8.41286 2.59901 8.7209 2.53515Z" fill="white"/>
  <path d="M19.9776 7.43182C20.0547 7.47906 20.1612 7.64822 20.2054 7.73302C20.7477 8.77999 21.4026 9.77321 21.9105 10.8357C22.0474 11.1213 22.1441 11.583 22.0007 11.8819C21.1853 13.5779 20.1688 15.1838 19.2241 16.809C18.7771 17.5778 18.3961 18.3537 17.9195 19.0943C17.3484 19.9818 16.0911 19.7747 15.152 19.7731L12.3225 19.7704L9.98057 19.7736C9.53723 19.774 9.06213 19.7823 8.62089 19.7531C8.35117 19.7352 7.99599 19.5585 7.72656 19.4527C7.93804 19.1965 8.04779 19.021 8.22257 18.7364C8.31186 18.5976 8.3883 18.4523 8.46607 18.3069C8.95838 17.3858 9.48268 16.483 10.0012 15.5765C10.9261 15.5333 11.971 15.6615 12.8671 15.4369C14.1123 15.1248 14.5482 13.8732 15.1291 12.8496C14.0375 12.8937 12.6568 12.852 11.5425 12.8506C11.8913 12.4284 12.6632 10.6709 13.1228 10.5977C14.381 10.3974 15.7799 10.6472 17.0823 10.4868C18.9706 10.2542 19.0644 8.65498 19.9776 7.43182Z" fill="white"/>
  <path d="M3.17022 8.95083C3.6733 8.84784 4.16409 9.17382 4.26428 9.6774C4.36451 10.181 4.03585 10.67 3.5317 10.7674C3.03145 10.8641 2.54707 10.5386 2.44767 10.0389C2.34824 9.53917 2.6711 9.05301 3.17022 8.95083Z" fill="white"/>
  <path d="M6.4306 3.81838C6.89937 3.68975 7.38495 3.9594 7.52358 4.42527C7.6622 4.89114 7.40306 5.38241 6.94023 5.53099C6.63193 5.62999 6.29419 5.55443 6.05743 5.3335C5.82067 5.11258 5.72193 4.78084 5.79941 4.46642C5.87685 4.152 6.11832 3.90405 6.4306 3.81838Z" fill="white"/>
  <path d="M7.40607 0.828538C7.71904 0.808974 7.82608 0.818682 8.11841 0.920137C8.44029 1.41918 8.52962 1.81029 7.93443 2.12174C7.79758 2.15394 7.65319 2.18842 7.51496 2.156C7.34109 2.11507 7.1913 2.00524 7.09998 1.85169C7.00649 1.68952 6.98295 1.4963 7.03474 1.31638C7.09169 1.11537 7.22282 0.932931 7.40607 0.828538Z" fill="white"/>
  <path d="M0.686531 8.57742C1.04152 8.502 1.39191 8.72329 1.47646 9.07622C1.56097 9.42914 1.34884 9.78515 0.998198 9.87875C0.76318 9.94149 0.512658 9.87179 0.343784 9.69673C0.174946 9.52162 0.11438 9.26874 0.185595 9.03615C0.256811 8.80356 0.448579 8.62795 0.686531 8.57742Z" fill="white"/>
  <path d="M2.32663 4.73915C2.59508 4.72438 2.84122 4.76567 3.03357 4.97548C3.13706 5.08773 3.19089 5.23705 3.18281 5.38955C3.16741 5.69173 2.97938 5.87545 2.77098 6.06505C2.42095 6.12217 2.13986 6.09497 1.95537 5.74584C1.86405 5.57244 1.84601 5.3697 1.90528 5.18289C1.98066 4.9419 2.1174 4.85192 2.32663 4.73915Z" fill="white"/>
  <path d="M0.723616 3.39276C1.27708 3.39117 1.43128 3.9889 0.900532 4.28524C0.713292 4.26499 0.540542 4.22373 0.432378 4.05178C0.377644 3.96593 0.361163 3.86117 0.386846 3.76268C0.432958 3.58243 0.575208 3.48379 0.723616 3.39276Z" fill="white"/>
  <path d="M5.28522 0.0400282C5.42345 -0.0251706 5.58624 -0.00990591 5.70994 0.0798597C5.83364 0.169625 5.89863 0.319641 5.87954 0.471284C5.86041 0.62293 5.76022 0.752125 5.61811 0.808391C5.40783 0.891644 5.16945 0.792956 5.07954 0.585439C4.98963 0.377925 5.08066 0.136506 5.28522 0.0400282Z" fill="white"/>
  <path d="M0.25362 6.06963C0.7618 6.0617 1.1579 6.46578 0.595281 6.80034C0.40105 6.85677 0.197111 6.84551 0.0673586 6.66555C0.00907487 6.58375 -0.0126948 6.48146 0.00719197 6.38304C0.0392498 6.2163 0.123179 6.15791 0.25362 6.06963Z" fill="white"/>
  <path d="M4.90147 1.87234C5.4045 1.86582 5.66017 2.22813 5.20614 2.61728C4.62019 2.69664 4.43172 2.18806 4.90147 1.87234Z" fill="white"/>
                </svg>
              </div> */}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none md:-mt-30 sm:mt-20">
          <div className="relative max-w-[1260px] mx-auto h-full w-full">
            <div
              className="
                absolute bottom-[0%] left-[6%] md:left-[1%] top-200 md:top-180
                w-[160px] md:w-[300px]
                h-[160px] md:h-[540px]
                opacity-70 md:opacity-100
                pointer-events-auto
              "
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
            >
              <img
                src={imgImage}
                alt=""
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Spin Animation */}
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </section>
    </ScrollFadeIn>
  );
};