import imgImage from "figma:asset/f87fe3e0bdbd02d435c484538a92390ac836b1bb.png";
import imgImage2 from "figma:asset/13a5123d147560e0b029827bd35b00c4ff90b646.png";
import imgStar from "figma:asset/4ae90066ce736d93921e8efb9fccf9d15d69f41b.png";
import imgImage1 from "figma:asset/66a6c590d9a3e3624c6c7830890ce0029158f939.png";

function Image1() {
  return (
    <div className="h-[630px] overflow-clip relative rounded-[7px] shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7px]">
        <img alt="" className="absolute h-[111.06%] left-[0.01%] max-w-none top-[-5.53%] w-[99.98%]" src={imgImage} />
      </div>
      <div className="-translate-x-1/2 absolute h-[449px] left-[calc(50%+427.02px)] rounded-[20px] top-[269.38px] w-[598px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[1260/630] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[7px] shrink-0" data-name="Image">
      <Image1 />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[50px] text-white uppercase whitespace-nowrap">
        <p className="leading-[60px]">5.0</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[74px]" data-name="4.8">
      <H2FramerText />
    </div>
  );
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">/5</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center opacity-30 relative shrink-0 w-[23px]" data-name="/5">
      <PFramerText />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8px] relative shrink-0" data-name="Text">
      <Component />
    </div>
  );
}

function TItle() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0" data-name="TItle">
      <Component1 />
      <Text />
    </div>
  );
}

function Star1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Star">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStar} />
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Star">
      <Star1 />
    </div>
  );
}

function Star3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Star">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStar} />
      </div>
    </div>
  );
}

function Star2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Star">
      <Star3 />
    </div>
  );
}

function Star5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Star">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStar} />
      </div>
    </div>
  );
}

function Star4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Star">
      <Star5 />
    </div>
  );
}

function Star7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Star">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStar} />
      </div>
    </div>
  );
}

function Star6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Star">
      <Star7 />
    </div>
  );
}

function Star9() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Star">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgStar} />
      </div>
    </div>
  );
}

function Star8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Star">
      <Star9 />
    </div>
  );
}

function StarIcons() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center overflow-clip relative shrink-0" data-name="Star Icons">
      <Star />
      <Star2 />
      <Star4 />
      <Star6 />
      <Star8 />
    </div>
  );
}

function ReviewText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center overflow-clip pb-[4px] relative shrink-0 w-full" data-name="Review Text">
      <TItle />
      <StarIcons />
    </div>
  );
}

function H5FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
      <div className="bg-clip-text bg-gradient-to-l flex flex-col font-['Geist:Medium',sans-serif] font-medium from-[5%] from-[rgba(255,255,255,0.4)] justify-center leading-[0] relative shrink-0 text-[23px] text-[transparent] to-1/2 to-white tracking-[-0.4px] w-[434px]">
        <p className="leading-[25.99px]">“Flowtech transformed our operations from day one. The implementation was seamless, and we now have complete visibility, control, and confidence in our systems.”</p>
      </div>
    </div>
  );
}

function FromTheFirstCallToFinalDeliveryTheProcessWasSeamlessWeNowHaveABrandThatTrulyReflectsWhoWeAre() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-w-[435px] relative shrink-0 w-[435px]" data-name="“From the first call to final delivery, the process was seamless. We now have a brand that truly reflects who we are„">
      <H5FramerText />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[63.8px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[40.91%] left-0 max-w-none top-[29.55%] w-full" src={imgImage1} />
      </div>
    </div>
  );
}

function DivFramer1Wtk3Om() {
  return (
    <div className="aspect-[145/63.79999923706055] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="div.framer-1wtk3om">
      <Image2 />
    </div>
  );
}

function TextWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Text Wrap">
      <FromTheFirstCallToFinalDeliveryTheProcessWasSeamlessWeNowHaveABrandThatTrulyReflectsWhoWeAre />
      <DivFramer1Wtk3Om />
    </div>
  );
}

function ReviewContent() {
  return (
    <div className="absolute backdrop-blur-[50px] bg-[rgba(0,0,0,0.5)] bottom-[29.95px] content-stretch flex flex-col gap-[48px] items-start justify-center left-[2.38%] max-w-[500px] overflow-clip pl-[35px] pr-[30px] py-[25px] right-[57.94%] rounded-[7px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" data-name="Review Content">
      <ReviewText />
      <TextWrap />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1260px] overflow-clip relative shrink-0 w-[1260px]" data-name="Container">
      <Image />
      <ReviewContent />
    </div>
  );
}

export default function Testimonial() {
  return (
    <div className="content-stretch flex items-center justify-center px-[30px] relative size-full" data-name="Testimonial">
      <Container />
    </div>
  );
}