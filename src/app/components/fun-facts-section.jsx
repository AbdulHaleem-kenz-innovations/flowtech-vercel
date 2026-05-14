import React from 'react';
import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png";
import imgShape from "../../assets/f19f21e1f2c9ee024d3ff5ca5b50f3a45ab6ca42.png";
import imgImage from "../../assets/f705064a5036bcff4084cea6f6b248091c682da8.png";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1, imgDiv, imgDiv1, imgDiv2, imgDiv3, imgDiv4, imgDiv5, imgDiv6, imgDiv7 } from "../../imports/svg-sbzl0";
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

function DivFramerIu4QGMaskGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="div.framer-IU4qG:mask-group">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[16px_16px] size-[16px] top-1/2" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} data-name="div.framer-IU4qG" />
    </div>
  );
}

function PFramerText() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].fun_facts;
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start start-0 pb-[0.59px] end-0 top-[calc(50%-0.5px)]" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">{t.key_impact}</p>
      </div>
    </div>
  );
}

function WelcomeToOptune() {
  return (
    <div className="h-[17.59px] relative shrink-0 w-[55px] md:w-[61.28px]" data-name="Welcome to optune">
      <PFramerText />
    </div>
  );
}

function Badge() {
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] content-stretch flex gap-[5px] items-center justify-center overflow-clip pl-[7px] pr-[11px] py-[5px] relative rounded-[5px] shrink-0" data-name="Default">
      <DivFramerIu4QGMaskGroup />
      <WelcomeToOptune />
    </div>
  );
}

function HeadingWrap() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].fun_facts;
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 items-start md:items-center justify-start md:justify-center relative shrink-0 w-full" data-name="Heading Wrap">
      <div className="h-auto relative shrink-0 w-auto" data-name="Proven results,">
        <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(-88.8627deg, rgba(255, 255, 255, 0.6) 5%, rgb(255, 255, 255) 50%)" }}>
          <p className="leading-[1.1]">{t.proven_results}</p>
        </div>
      </div>
      <div className="h-auto relative shrink-0 w-auto" data-name="every time">
        <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Playfair_Display'] font-normal from-[#d9d9d9] from-[49%] italic justify-center leading-[0] relative shrink-0 text-[32px] sm:text-[40px] md:text-[44px] text-[transparent] to-[rgba(255,255,255,0.6)] tracking-[-0.4px] whitespace-nowrap">
          <p className="leading-[1.1]">{t.every_time}</p>
        </div>
      </div>
    </div>
  );
}

function SectionContent() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].fun_facts;
  return (
    <div className="content-stretch flex flex-col gap-6 md:gap-[22px] items-start md:items-center justify-start md:justify-center self-start md:self-auto max-w-[580px] relative shrink-0 w-full" data-name="Section Content">
      <div className="content-stretch flex flex-col gap-[18px] items-start md:items-center justify-start md:justify-center relative shrink-0 w-full" data-name="Title Wrap">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <Badge />
        </div>
        <HeadingWrap />
      </div>
      <div className="h-auto opacity-70 relative shrink-0 w-full text-start md:text-center md:px-4" data-name="Proven results for every project, with a focus on design and functionality">
        <p className="font-['Geist'] font-normal text-[14px] md:text-[18px] text-white uppercase leading-[1.4] md:leading-[27px]">{t.description}</p>
      </div>
    </div>
  );
}

function CardImpact() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].fun_facts;
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] relative rounded-[7px] shrink-0 w-full" data-name="Card 01">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] md:gap-[51.205px] items-start justify-center pb-[25px] pt-[24px] px-[25px] relative size-full">
          <div className="content-stretch flex flex-col items-start opacity-70 pb-[0.95px] relative shrink-0 w-full" data-name="Heading 3 → 75% faster">
            <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[24px] md:text-[28px] text-white tracking-[-0.4px] uppercase w-full">
              <p className="leading-[1.2]">{t.card1_title}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start opacity-75 pb-[0.605px] relative shrink-0 w-full" data-name="Double your client engagement with Optune’s smart collaboration tools">
            <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] text-white uppercase w-full">
              <p className="leading-[1.4] md:leading-[22.4px]">{t.card1_desc}</p>
            </div>
          </div>
          <div className="absolute end-[20px] size-[20px] top-[20px]" data-name="div.framer-IU4qG:mask-group">
            <div className="absolute bg-white mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-full opacity-40 end-0 size-full top-0" style={{ maskImage: `url('${imgDivFramerIu4QG1}')` }} data-name="div.framer-IU4qG" />
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPreview() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-full aspect-video md:aspect-auto md:h-[305px]" data-name="Video">
      <div className="absolute inset-0 overflow-clip" data-name="ODvWnSeuEr3Z40yCFHm32ie0g6A.mp4">
        <ImageWithFallback alt="" className="size-full object-cover" src={imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg} />
        <div className="absolute bg-[rgba(21,21,21,0.1)] inset-0" />
      </div>
      <div className="absolute bottom-[-1px] content-stretch flex flex-col h-[60px] md:h-[120px] items-start justify-center start-0 end-0" data-name="div.framer-2odnkn-container">
        <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full">
          {[imgDiv, imgDiv1, imgDiv2, imgDiv3, imgDiv4, imgDiv5, imgDiv6, imgDiv7].map((mask, idx) => (
            <div key={idx} className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-fill mask-size-full backdrop-blur-[2px]" style={{ maskImage: `url('${mask}')` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CardFact() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].fun_facts;
  return (
    <div className="bg-white h-auto md:h-full max-w-[436px] relative rounded-[7px] shrink-0 w-full sm:w-[436px] " data-name="Card 02">
      <div className="flex flex-col items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-12 md:gap-[194px] items-center max-w-[inherit] p-[25px] relative size-full min-h-[400px] md:min-h-0">
          {/* Background Shape */}
          <div className="absolute content-stretch flex flex-col items-start justify-center start-0 opacity-80 overflow-clip top-0 w-full">
            <div className="h-[600px] md:h-[1000px] relative shrink-0 w-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none   ">
                <ImageWithFallback alt="" className="absolute start-0 max-w-none size-full top-0 " style={{ opacity: 0.2 }} src={imgShape} />
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[15px] md:gap-[10px] items-start justify-center relative shrink-0 w-full z-10  100" data-name="Title Wrap">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="backdrop-blur-[20px] bg-black content-stretch flex flex-col items-center justify-center pb-[6px] pt-[5px] px-[12px] relative rounded-[30px] shrink-0">
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[44px]">
                  <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full">
                    <div className="flex flex-col font-['Geist'] font-semibold justify-center leading-[0] relative shrink-0 text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
                      <p className="leading-[17.6px]">{t.fact_label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="bg-clip-text flex flex-col font-['Geist'] font-medium justify-center leading-[0] relative shrink-0 text-[20px] md:text-[23px] text-black tracking-[-0.4px] w-full" style={{ backgroundImage: "linear-gradient(-85.5893deg, rgba(0, 0, 0, 0.4) 5%, rgb(0, 0, 0) 50%)" }}>
                    <p className="text-black">
                      <span className="leading-[1.2]">{t.fact_text_p1}</span>
                      <span className="font-['Playfair_Display'] font-normal italic leading-[1.2] text-black tracking-[-0.4px]">{t.fact_text_italic1}</span>
                      <span className="leading-[1.2]">{t.fact_text_p2}</span>
                      <span className="font-['Playfair_Display'] font-normal italic leading-[1.2] text-black tracking-[-0.4px]">{t.fact_text_italic2}</span>
                      <span className="leading-[1.2]">{t.fact_text_p3}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[20px] md:gap-[16px] items-start justify-center relative shrink-0 w-full z-10">
            <div className="content-stretch flex flex-col items-start opacity-75 pb-[0.605px] relative shrink-0 w-full">
              <div className="flex flex-col font-['Geist'] font-normal justify-center leading-[0] relative shrink-0 text-[14px] md:text-[16px] text-black uppercase w-full">
                <p className="leading-[1.4] md:leading-[22.4px]">{t.fact_desc}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full sm:w-auto">
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
                {t.get_started}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardHours() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].fun_facts;
  return (
    <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.05)] relative rounded-[7px] shrink-0 w-full" data-name="Card 01">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-10 md:gap-[52px] items-start justify-center pb-[25px] pt-[24px] px-[25px] relative size-full">
          <div className="content-stretch flex flex-col items-end opacity-70 pb-[0.95px] relative shrink-0 w-full">
            <div className="flex flex-col font-['Geist']  font-normal justify-center leading-[0] relative shrink-0 text-[24px] md:text-[28px] text-end text-white tracking-[-0.4px] uppercase whitespace-nowrap">
              <p className="leading-[1.2]">{t.card3_title}</p>
            </div>
          </div>
          <div className="h-auto md:h-[44.81px] opacity-75 relative shrink-0 w-full text-start mb-8">
            <p className="font-['Geist'] font-normal text-[14px] md:text-[16px] text-white  uppercase leading-[1.4] md:leading-[22.4px]">{t.card3_desc}</p>
          </div>
          <div className="absolute start-[20px] size-[20px] top-[20px]" data-name="div.framer-IU4qG:mask-group">
            <div className="absolute bg-white start-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-full opacity-40 size-full top-0" style={{ maskImage: `url('${imgDivFramerIu4QG1}')` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const FunFactsSection = () => {
  return (
    <ScrollFadeIn>
      <section className="w-full flex justify-center py-10 md:py-16 px-6 md:px-8">
        <div className="max-w-[1260px] w-full flex flex-col gap-16 md:gap-[80px] items-center justify-center relative" data-name="Fun Facts">
          <SectionContent />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[34px]  items-start justify-center relative shrink-0 w-full" data-name="Fun Facts Card Wrapper">
            {/* Left Column */}
            <div className="content-stretch flex flex-col gap-6 md:gap-[15px] items-center justify-center w-full max-w-[436px] mx-auto">
              <CardImpact />
              <VideoPreview />
            </div>
            {/* Middle Column */}
            <div className="content-stretch flex items-start justify-center relative self-stretch shrink-0 w-full max-w-[436px] mx-auto">
              <CardFact />
            </div>
            {/* Right Column */}
            <div className="content-stretch flex flex-col gap-6 md:gap-[15px] items-center justify-center w-full max-w-[436px] mx-auto h-full">
              <div className="content-stretch flex-[1_0_0] items-center justify-center overflow-clip relative rounded-[7px] w-full aspect-square sm:aspect-video lg:aspect-auto">
                <ImageWithFallback alt="" className="absolute inset-0 size-full object-cover" src={imgImage} />
              </div>
              <CardHours />
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}