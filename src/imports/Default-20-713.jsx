import svgPaths from "./svg-12px0teybw";
import imgImage from "../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";

function Image() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[7px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
        <img alt="" className="absolute h-full left-[-14.56%] max-w-none top-0 w-[129.12%]" src={imgImage} />
      </div>
    </div>
  );
}

function Shape() {
  return <div className="absolute bg-black inset-0 opacity-28 rounded-[7px]" data-name="Shape" />;
}

function H5FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
      <div className="bg-clip-text flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[23px] text-[transparent] tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(66.9494deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.5) 100%)" }}>
        <p className="leading-[25.99px]">{`Daniel `}</p>
      </div>
    </div>
  );
}

function Daniel() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[72px]" data-name="Daniel">
      <H5FramerText />
    </div>
  );
}

function H5FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[23px] whitespace-nowrap">
        <p className="leading-[25.3px]">Hartmann</p>
      </div>
    </div>
  );
}

function Hartmann() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center opacity-80 relative shrink-0 w-[107px]" data-name="Hartmann">
      <H5FramerText1 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Name">
      <Daniel />
      <Hartmann />
    </div>
  );
}

function Heading2FounderOfFreshly() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 pb-[0.59px] relative shrink-0 w-full" data-name="Heading 2 → founder of freshly">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white uppercase w-full">
        <p className="leading-[19.6px]">founder of Flowtech</p>
      </div>
    </div>
  );
}

function AuthorDetails() {
  return (
    <div className="absolute bottom-[24.99px] content-stretch flex flex-col gap-[5px] items-start justify-center left-[6.87%] right-[7.13%] rounded-[6.4px]" data-name="Author Details">
      <Name />
      <Heading2FounderOfFreshly />
    </div>
  );
}

function Vector() {
  return (
    <div className="content-stretch flex flex-col h-[14px] items-start justify-center relative shrink-0 w-[12px]" data-name="Vector">
      <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Component 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
          <g clipPath="url(#clip0_19_2916)" id="svg10456457522">
            <path d={svgPaths.p2b15ab00} fill="var(--fill-0, white)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_19_2916">
              <rect fill="white" height="14" width="12" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[6px] py-[5px] relative shrink-0 size-[24px]" data-name="Play Icon">
      <Vector />
    </div>
  );
}

function PlayButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[80px] items-center justify-center min-w-px relative rounded-[100px]" data-name="Play button">
      <PlayIcon />
    </div>
  );
}

function VideoButton() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center left-[142px] overflow-clip rounded-[7px] size-[80px] top-[195.4px]" data-name="Video Button">
      <PlayButton />
    </div>
  );
}

function ImageWrap() {
  return (
    <div className="aspect-[364/470] content-stretch flex items-center justify-center max-w-[364px] overflow-clip relative rounded-[7px] shrink-0" data-name="Image Wrap">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Image />
      </div>
      <Shape />
      <AuthorDetails />
      <VideoButton />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="h2.framer-text">
      <div className="bg-clip-text flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[44px] text-[transparent] text-center tracking-[-0.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(91.8153deg, rgb(255, 255, 255) 56.306%, rgba(255, 255, 255, 0.4) 100%)" }}>
        <p className="leading-[48.4px]">Insights that matter.</p>
      </div>
    </div>
  );
}

function InnovationPoweredBy() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Innovation powered by">
      <H2FramerText />
    </div>
  );
}

function H2FramerText1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="h2.framer-text">
      <div className="flex flex-col font-['Playfair_Display:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[44px] text-center tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[48.4px]">Early Access.</p>
      </div>
    </div>
  );
}

function AdaptiveIntelligence() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="adaptive intelligence">
      <H2FramerText1 />
    </div>
  );
}

function HeadingWrap() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center relative shrink-0 w-full" data-name="Heading Wrap">
      <InnovationPoweredBy />
      <AdaptiveIntelligence />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title">
      <HeadingWrap />
    </div>
  );
}

function ExperienceAPlatformEngineeredForImpactPackedWithIntelligentToolsThatSimplifyWorkflows() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Experience a platform engineered for impact, packed with intelligent tools that simplify workflows">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-white uppercase w-full">
        <p className="leading-[27px]">STAY UPDATED WITH THE LATEST IN INDUSTRIAL AUTOMATION, AI SOLUTIONS, ENERGY MANAGEMENT, AND REAL-WORLD CASE STUDIES FROM FLOWTECH</p>
      </div>
    </div>
  );
}

function TitleWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Title Wrap">
      <Title />
      <ExperienceAPlatformEngineeredForImpactPackedWithIntelligentToolsThatSimplifyWorkflows />
    </div>
  );
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">Name</p>
      </div>
    </div>
  );
}

function DivFramer1D7Cawy() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[33px]" data-name="div.framer-1d7cawy">
      <PFramerText />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#placeholder">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function InputFramerFormInput() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[1.39px] relative" data-name="input.framer-form-input">
      <DivPlaceholder />
    </div>
  );
}

function DivFramerFormTextInput() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.1)] relative rounded-[7px] shrink-0 w-full" data-name="div.framer-form-text-input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
          <InputFramerFormInput />
        </div>
      </div>
    </div>
  );
}

function LabelFramer1Nsf3Kb() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="label.framer-1nsf3kb">
      <DivFramer1D7Cawy />
      <DivFramerFormTextInput />
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-white tracking-[0.2px] uppercase whitespace-nowrap">
        <p className="leading-[17.6px]">Email Address</p>
      </div>
    </div>
  );
}

function DivFramer1Rgqtk() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[91px]" data-name="div.framer-1rgqtk1">
      <PFramerText1 />
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#placeholder">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] w-full">
        <p className="leading-[normal]">hello@email.com</p>
      </div>
    </div>
  );
}

function InputFramerFormInput1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip pb-[1.39px] relative" data-name="input.framer-form-input">
      <DivPlaceholder1 />
    </div>
  );
}

function DivFramerFormTextInput1() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.1)] relative rounded-[7px] shrink-0 w-full" data-name="div.framer-form-text-input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
          <InputFramerFormInput1 />
        </div>
      </div>
    </div>
  );
}

function LabelFramer1Qxfl() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="label.framer-1qxfl59">
      <DivFramer1Rgqtk />
      <DivFramerFormTextInput1 />
    </div>
  );
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[0px] text-white tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[19.6px] text-[14px]">Subscribe</p>
      </div>
    </div>
  );
}

function SeePricing() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[113px]" data-name="See Pricing">
      <PFramerText2 />
    </div>
  );
}

function FormFramer1B3R0N() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="form.framer-1b3r0n0">
      <LabelFramer1Nsf3Kb />
      <LabelFramer1Qxfl />
      <div className="relative rounded-[800px] shrink-0" style={{ backgroundImage: "linear-gradient(60.4285deg, rgb(0, 28, 169) 0%, rgb(4, 108, 228) 100%)" }} data-name="Hero Button">
        <div className="content-stretch flex items-center justify-center overflow-clip px-[22px] py-[13px] relative rounded-[inherit] size-full">
          <SeePricing />
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[800px]" />
      </div>
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] items-start justify-center max-w-[520px] relative shrink-0 w-[520px]" data-name="Content Wrapper">
      <TitleWrap />
      <FormFramer1B3R0N />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[56px] items-center max-w-[940px] relative shrink-0 w-[940px]" data-name="Container">
      <ImageWrap />
      <ContentWrapper />
    </div>
  );
}

export default function Default() {
  return (
    <div className="content-stretch flex items-center justify-center px-[30px] py-[120px] relative size-full" data-name="Default">
      <Container />
    </div>
  );
}