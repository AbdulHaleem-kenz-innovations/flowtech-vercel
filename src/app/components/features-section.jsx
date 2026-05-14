import { Link, useNavigate } from 'react-router';
import imgFrame1139 from "../../assets/c4ae983d71bcd81ac6bc3423a3f716a541328ebf.png";
import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png";
import imgIcon from "../../assets/41ff2d725380255d23878aa7c6fb39c5f6bd3adc.png";
import imgIcon1 from "../../assets/798b5019ccb03e7937fe35631b20dcdefae3cefc.png";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1, imgDivFramerIu4QG2, imgDiv, imgDiv1, imgDiv2, imgDiv3, imgDiv4, imgDiv5, imgDiv6, imgDiv7 } from "../../imports/svg-4ugef";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { servicesData } from "../../lib/servicesData";
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';
import { useState, useEffect } from "react";
import ScrollFadeIn from '../../components/ScrollFadeIn';


function DivFramerIu4QGMaskGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="div.framer-IU4qG:mask-group">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} data-name="div.framer-IU4qG" />
    </div>
  );
}

function PFramerText() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].features;
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start start-0 pb-[0.59px] end-0 top-[calc(50%-0.5px)]" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">{t.core_services}</p>
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
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].features;
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2 → Projects">
      <div className="bg-clip-text bg-gradient-to-l flex flex-col font-['Geist'] font-medium from-[5%] from-[rgba(255,255,255,0.4)] justify-center leading-[0] relative shrink-0 text-[40px] md:text-[60px]  tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[1.1]">{t.services_title}</p>
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
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].features;
  return (
    <div className="md:-translate-y-1/2 md:absolute content-stretch flex flex-col items-start start-0 end-0 md:top-2/8" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] text-white uppercase w-full max-w-[418px]">
        <p className="leading-[1.4] md:leading-[22.4px]">{t.services_description}</p>
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
      {/* <Component2025 /> */}
    </div>
  );
}


function Frame1({ description }) {
  return (
    <div
      className="
        absolute bottom-4 start-4 end-4 md:start-[27.98px] md:end-[27.98px]
        backdrop-blur-[25px]  md:bg-[rgba(255,255,255,0.05)]
         p-6 rounded-lg
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
            <div className="md:-translate-y-1/2 md:absolute content-stretch flex flex-col items-start start-0 end-[0.48px] md:top-[calc(50%-0.7px)]">
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


function ServiceCard({ item }) {
  const Wrapper = item.link ? Link : "div";
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].features;

  const [isMobile, setIsMobile] = useState(false);
  const [mobileHover, setMobileHover] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const translatedItem = t.services[item.id] || item;

  return (
    <Wrapper
      to={item.link || undefined}
      className="content-stretch flex flex-col gap-[10px] items-center justify-center relative w-full max-w-[560px] mx-auto group"
    >
      <div
        className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] content-stretch relative rounded-[7px] aspect-square w-full overflow-hidden"
        onClick={() => {
          if (isMobile) setMobileHover((prev) => !prev);
        }}
      >
        <div className="absolute inset-0">
          {/* Main Image with Hover Scale */}
          <div
            className={`
              absolute inset-0 transition-transform duration-700 ease-out
              ${!isMobile ? "group-hover:scale-110" : ""}
              ${isMobile && mobileHover ? "scale-110" : "scale-100"}
            `}
          >
            <ImageWithFallback
              src={item.hoverImg || item.img}
              alt={translatedItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          <Frame1 description={translatedItem.description} />
        </div>
      </div>

      <TitleWrapCard title={translatedItem.title} subtitle={translatedItem.subtitle} />
    </Wrapper>
  );
}

 function WorkCardWrap({ services }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[15px] w-full">
      {services.map((item) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function DivFramer13M6KicContainer({ serviceButton }) {
  const onNavigate = useNavigate();
  const { language } = useLanguage();
  if (!serviceButton) return null;
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-13m6kic-container">
      <button
        onClick={() => onNavigate(serviceButton.link)}
        className="  relative overflow-hidden
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
    glare-btn">
         {langData[language.toLowerCase()].features.view_all_services}
      </button>
    </div>
  );
}

 function WorkCardWrapper({ services, serviceButton }) {
  return (
    <div className="content-stretch flex flex-col gap-12 md:gap-[50px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Work Card Wrapper">
      <WorkCardWrap services={services} />
      <DivFramer13M6KicContainer serviceButton={serviceButton} />
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

export function ContainerServices({ services, serviceButton }) {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-12 md:gap-[80px] items-center justify-center max-w-[1260px] px-6 md:px-[63px] py-16 md:py-[100px] relative rounded-[7px] shrink-0 w-full" data-name="Container">
      <ContentWrapper />
      <WorkCardWrapper services={services} serviceButton={serviceButton} />
      {/* Floating Gear */}
      <div className="max-[1100px]:hidden absolute h-[150px] md:h-[273.493px] end-[-10px] md:end-[-19.75px] top-[-10px] md:top-[-14.76px] w-[140px] md:w-[265.865px] opacity-30 md:opacity-100">
        <ImageWithFallback alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full animate-[spin_20s_linear_infinite]" src={imgFrame1139} />
      </div>
      {/* Corner Icons */}
      <div className="absolute start-[10px] md:start-[20px] top-[10px] md:top-[20px]"><DivFramerIu4QGMaskGroupSmall /></div>
      <div className="absolute bottom-[10px] md:bottom-[20.11px] start-[10px] md:start-[20px]"><DivFramerIu4QGMaskGroupSmall /></div>
      <div className="absolute bottom-[10px] md:bottom-[20.11px] end-[10px] md:end-[20px]"><DivFramerIu4QGMaskGroupSmall /></div>
      <div className="absolute end-[10px] md:end-[20px] top-[10px] md:top-[20px]">
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
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].features;
  return (
    <div className="h-[400px] md:h-[630px] relative shrink-0 w-full max-w-[1260px] overflow-clip rounded-[7px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-clip">
        <ImageWithFallback alt="" className="absolute h-full w-full object-cover" src={imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg} />
        <div className="absolute bg-[rgba(21,21,21,0.3)] inset-0" />
      </div>

      <BlurOverlays />

      <div className="absolute content-stretch flex flex-col items-start justify-center end-[20px] md:end-[2.7%] top-[20px] md:top-[28px] max-w-[145px]">
        <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[18px] md:text-[23px] text-[transparent] tracking-[-0.4px] whitespace-nowrap text-end md:text-start" style={{ backgroundImage: "linear-gradient(-87.6189deg, rgba(255, 255, 255, 0.6) 5%, rgb(255, 255, 255) 50%)" }}>
          <p className="leading-[1.2] mb-0 whitespace-pre">{t.video_expertise_p1}</p>
          <p className="leading-[1.2] whitespace-pre">{t.video_expertise_p2}</p>
        </div>
      </div>

      <div className="absolute backdrop-blur-[20px] bottom-[20px] md:bottom-[40px] h-[34px] md:h-[38px] start-0 rounded-be-[30px] rounded-te-[30px] w-[90px] md:w-[105px] overflow-clip" data-name="Time">
        <ImageWithFallback alt="" className="absolute inset-0 h-full w-full object-cover" src={imgIcon} />
        <div className="absolute end-[15px] md:end-[20.95px] top-[8px] md:top-[9px]">
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
          <p className="leading-[29.96px] cta-shine cta-shine-primary">{t.view_video}</p>
        </div>
      </div>
    </div>
  );
}

export const FeaturesSection = () => {
  return (
    <ScrollFadeIn>
      <section className="w-full flex justify-center py-10 md:py-16 px-6 md:px-8">
        <div className="max-w-[1260px] w-full flex flex-col gap-12 md:gap-[20px] items-center justify-center relative" data-name="Features">
          <ContainerServices services={servicesData.slice(0, 4)}  serviceButton={{
    // text: "VIEW ALL SERVICES",
    link: "/services"
  }} />
          <VideoSection />
        </div>
      </section>
    </ScrollFadeIn>
  );
}