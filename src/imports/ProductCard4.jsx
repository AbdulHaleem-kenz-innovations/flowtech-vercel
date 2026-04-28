import svgPaths from "./svg-uaeahmmqlr";
import imgMKwvaNgcAkQmHyt5Z49Ijjsm1VuPng from "../assets/0975ee902333fa4c0ff75503ee2b2d45bc2017cd.png";
import { imgDivFramerIu4QG } from "./svg-j4boa";

function H5FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h5.framer-text">
      <div className="flex flex-col font-['Playfair_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[23px] text-white whitespace-nowrap">
        <p className="leading-[25.3px]">01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center opacity-33 relative shrink-0 w-[23px]" data-name="Heading 3 → 01">
      <H5FramerText />
    </div>
  );
}

function Heading3GrowthMarketing() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3 → growth Marketing">
      <div className="capitalize flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[27px]">Kenvoice</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[9.99px] items-start justify-center left-[25px] overflow-clip right-[25px] top-[calc(50%-158.01px)]" data-name="Title">
      <Heading />
      <Heading3GrowthMarketing />
    </div>
  );
}

function MKwvaNgcAkQmHyt5Z49Ijjsm1VuPng() {
  return (
    <div className="h-[389.997px] relative shrink-0 w-full" data-name="MKwvaNGCAkQMHyt5z49ijjsm1VU.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMKwvaNgcAkQmHyt5Z49Ijjsm1VuPng} />
      </div>
    </div>
  );
}

function Shape() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center opacity-25 overflow-clip relative w-full" data-name="Shape">
      <MKwvaNgcAkQmHyt5Z49Ijjsm1VuPng />
    </div>
  );
}

function DivFramerIu4QGMaskGroup() {
  return (
    <div className="absolute right-[19.78px] size-[20px] top-[19.85px]" data-name="div.framer-IU4qG:mask-group">
      <div className="absolute bg-white mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[20px_20px] opacity-40 right-0 size-[20px] top-0" style={{ maskImage: `url('${imgDivFramerIu4QG}')` }} data-name="div.framer-IU4qG" />
    </div>
  );
}

function LoremIpsumDolorSitAmetConsecteturAdipiscingElit() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[25.24px] opacity-75 pb-[0.605px] right-[24.76px] top-[calc(50%+148.87px)]" data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white uppercase w-full">
        <p className="leading-[22.4px]">STREAMLINE INVOICING AND FINANCIAL OPERATIONS WITH AUTOMATED BILLING, REAL-TIME TRACKING, AND SMART REPORTING.</p>
      </div>
    </div>
  );
}

function Default() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[#1e1e1e] h-[429px] left-[-0.22px] overflow-clip right-[0.22px] rounded-[7px] top-[0.15px]" data-name="Default">
      <div className="-translate-x-1/2 absolute left-[calc(50%-180px)] size-[232px] top-[299px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 1" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%+135.5px)] size-[197px] top-[410px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 2" />
        </svg>
      </div>
      <Title />
      <div className="absolute flex items-center justify-center left-[-24.84px] right-[-25.28px] top-[86.79px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-12.2373cqw,-87.7626cqh)] rotate-[172.06deg] w-[hypot(-87.7627cqw,12.2374cqh)]">
          <Shape />
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[171px] left-[calc(50%+0.67px)] top-[calc(50%-36px)] w-[195.334px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195.334 171">
          <path d={svgPaths.pda184c0} fill="var(--fill-0, #959595)" id="Vector" />
        </svg>
      </div>
      <DivFramerIu4QGMaskGroup />
      <LoremIpsumDolorSitAmetConsecteturAdipiscingElit />
    </div>
  );
}

export default function ProductCard() {
  return (
    <div className="relative size-full" data-name="Product card 4">
      <Default />
    </div>
  );
}