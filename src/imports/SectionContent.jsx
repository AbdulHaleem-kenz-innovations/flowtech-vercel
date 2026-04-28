import { imgDivFramerIu4QG } from "./svg-aut9f";

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
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">{`let's talk`}</p>
      </div>
    </div>
  );
}

function WelcomeToOptune() {
  return (
    <div className="h-[17.59px] relative shrink-0 w-[59.95px]" data-name="Welcome to optune">
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

function DivFramer1Cde5FkContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1cde5fk-container">
      <Default />
    </div>
  );
}

function H1FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.framer-text">
      <div className="bg-clip-text flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[60px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(-88.8694deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>
        <p className="leading-[66px]">{`Contact `}</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[237px]" data-name="Contact">
      <H1FramerText />
    </div>
  );
}

function H1FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.framer-text">
      <div className="flex flex-col font-['Playfair_Display:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[60px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[66px]">us</p>
      </div>
    </div>
  );
}

function Us() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[57px]" data-name="us">
      <H1FramerText1 />
    </div>
  );
}

function HeadingWrap() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center justify-center relative shrink-0 w-full" data-name="Heading Wrap">
      <Contact />
      <Us />
    </div>
  );
}

function QuestionsIdeasOrJustSayingHi() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-70 relative shrink-0 w-full" data-name="Questions, ideas, or just saying hi">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[27px]">QUESTIONS, PROJECTS, OR PARTNERSHIPS — WE’RE HERE TO HELP</p>
      </div>
    </div>
  );
}

export default function SectionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center justify-center relative size-full" data-name="Section Content">
      <DivFramer1Cde5FkContainer />
      <HeadingWrap />
      <QuestionsIdeasOrJustSayingHi />
    </div>
  );
}