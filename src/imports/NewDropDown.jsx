import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png";

function EvkKKiT34ZFcqnJwjmciV1OT2CuJpg() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 left-1/2 top-[-1.05%] w-[530px]" data-name="EvkKKiT34zFcqnJwjmciV1oT2CU.jpg">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[103.4%] left-0 max-w-none top-[-1.7%] w-full" src={imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg} />
        </div>
        <div className="absolute bg-[rgba(21,21,21,0.1)] inset-0" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[6.15%_2.72%_6.15%_45.31%] overflow-clip rounded-[20px]">
      <EvkKKiT34ZFcqnJwjmciV1OT2CuJpg />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute capitalize content-stretch flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold gap-[16px] items-start leading-[0] left-[20px] text-[18px] top-1/2 w-[281px]">
      <div className="flex flex-col justify-center relative shrink-0 text-white w-full">
        <p className="leading-[27px]">Manufacturing Intelligence (MI)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.75)] w-full">
        <p className="leading-[27px]">Energy Monitoring System (EMS)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.75)] w-full">
        <p className="leading-[27px]">Pipeline Safety (DFOS)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.75)] w-full">
        <p className="leading-[27px]">Pipeline Safety (DFOS)</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.75)] w-full">
        <p className="leading-[27px]">{`Artificial Intelligence & Analytics`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.75)] w-full">
        <p className="leading-[27px]">{`Cloud & Data Platforms`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(255,255,255,0.75)] w-full">
        <p className="leading-[27px]">{`SAP & Oracle Solutions`}</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute contents inset-[6.15%_2.72%]" data-name="Menu">
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function NewDropDown() {
  return (
    <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] relative rounded-[20px] size-full" data-name="New drop down">
      <Menu />
    </div>
  );
}