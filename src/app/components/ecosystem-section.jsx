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
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';
import aibizzColored from "../../assets/AI-Bizz-App-colour.png";
import smartIDPColored from "../../assets/Smart-IDP-colour.png";
import kenvoiceColored from "../../assets/Ken-Voice-colour.png";
import bayanColored from "../../assets/Bayan-logo.png";
import { Link } from 'react-router';

const images1 = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
];
// const images2 = [
//   "https://picsum.photos/300/300?grayscale&random=1",
//   "https://picsum.photos/300/300?grayscale&random=2",
//   "https://picsum.photos/300/300?grayscale&random=3",
//   "https://picsum.photos/300/300?grayscale&random=4",
//   "https://picsum.photos/300/300?grayscale&random=5",
//   "https://picsum.photos/300/300?grayscale&random=6",
// ];
const images2 = [
  // kenvoiceColored,
  smartIDPColored,
  aibizzColored,
  "https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png",
  "https://static.vecteezy.com/system/resources/previews/022/100/812/non_2x/microsoft-logo-transparent-free-png.png"
];
const images3 = [
  bayanColored,
  // kenvoiceColored,
  // smartIDPColored,
  // aibizzColored,
  "https://logodix.com/logo/88250.png",
  "data:image/webp;base64,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",
  "https://th.bing.com/th/id/OIP.6HRkfkqBcctoM20q5tZaCwHaEC?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
];

function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} />
    </div>
  );
}

function Badge() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].ecosystem;
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip ps-[7px] pe-[11px] py-[5px] relative rounded-[5px] shrink-0 w-[95px] md:w-[102px]">
      <PlusIcon />
      <div className="flex flex-col font-geist font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">{t.partners}</p>
      </div>
    </div>
  );
}

function Heading() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].ecosystem;
  return (
    <div className="h-auto relative shrink-0 w-full flex flex-col gap-1">
      <div className="bg-clip-text flex flex-col font-geist font-medium justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(-88.5374deg, rgba(255, 255, 255, 0.6) 5%, rgb(255, 255, 255) 50%)" }}>
        <p className="leading-[1.1]">{t.title_p1}</p>
      </div>
      <div className="flex flex-col font-playfair font-normal italic justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-white/70 tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[1.1]">{t.title_p2}</p>
      </div>
    </div>
  );
}

function LogoItem({ src, size, className, isCustom = false, children }) {
  return (
    <div className={`absolute backdrop-blur-[20px] rounded-full overflow-hidden flex items-center justify-center border border-white/10  ${className}`} style={{ width: size, height: size }}>
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
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].ecosystem;

  // radius is in the 1400px OrbitImages design canvas – OrbitImages auto-scales it
  // to fit the container, so the same radius works for every breakpoint.
  // centerSize is the pixel size of the Flowtech logo in the center.
  const getValues = () => {
    if (typeof window === "undefined") {
      return { radius: 580, itemSize: 50, centerSize: 90 };
    }
    const width = window.innerWidth;
    if (width < 640) {
      return { radius: 580, itemSize: 44, centerSize: 68 };  // mobile
    } else if (width < 1280) {
      return { radius: 580, itemSize: 54, centerSize: 90 };  // tablet portrait
    } else {
      return { radius: 580, itemSize: 65, centerSize: 110 }; // desktop / landscape
    }
  };

  const [{ radius, itemSize, centerSize }, setValues] = useState(getValues);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setValues(getValues()), 120);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ScrollFadeIn>
      {/*
        overflow-hidden on section prevents orbit rings from causing horizontal scroll
        on narrow viewports.
      */}
      <section className="w-full flex justify-center overflow-hidden py-10 md:py-16 px-4 sm:px-6 md:px-8">

        {/*
          Stack vertically until xl (1280 px).
          This keeps iPad Pro portrait (1024 px) and iPad Air portrait (820 px)
          in column mode so the orbit gets its own full-width square slot.
          At xl+ (landscape iPad Pro / desktop) the row layout kicks in.
        */}
        <div className="max-w-[1260px] w-full flex flex-col xl:flex-row gap-8 sm:gap-12 xl:gap-6 2xl:gap-[120px] items-center relative">

          {/* ── LEFT CONTENT ─────────────────────────────────────── */}
          <div className="w-full xl:w-[45%] 2xl:w-[500px] flex flex-col gap-6 md:gap-8 text-start items-start">
            <div className="flex flex-col gap-4 md:gap-5 items-start">
              <Badge />
              <Heading />
            </div>

            <div className="opacity-70 max-w-[500px]">
              <p className="font-geist text-[14px] sm:text-[16px] md:text-[18px] text-white uppercase leading-[1.5]">
                {t.description}
              </p>
            </div>

            <Link to="/contact"
              className="relative overflow-hidden
                flex items-center justify-center
                w-full
                px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4
                text-[13px] sm:text-[14px] md:text-[16px]
                rounded-full
                bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)]
                border border-white/20
                text-white uppercase whitespace-nowrap
                font-geist
                cursor-pointer
                transition-all duration-300
                hover:scale-105 active:scale-95
                glare-btn"
            >
              {t.become_partner}
            </Link>
          </div>

          {/* ── RIGHT ORBIT VISUAL ───────────────────────────────── */}
          {/*
            • In column mode (< xl): full width, square via aspect-square, capped at 600 px
              so the orbit looks large and centred below the text on mobile & portrait tablets.
            • In row mode (≥ xl): flex-1 fills remaining space, fixed height 640 px.
          */}
          <div className="
            w-full max-w-[600px] mx-auto aspect-square
            xl:aspect-auto xl:flex-1 xl:max-w-none xl:mx-0 xl:h-[640px]
            flex items-center justify-center relative
          ">

            {/* CENTER LOGO – size comes from reactive state so it updates on resize */}
            <LogoItem
              isCustom
              size={centerSize}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#191919] z-10"
            >
              <FlowtechCenterLogo />
            </LogoItem>

            {/* MIDDLE ORBIT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
                useGlassContainer={true}
              />
            </div>

            {/* INNER ORBIT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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
                useGlassContainer={true}
              />
            </div>

          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
};