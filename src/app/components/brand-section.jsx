import ScrollFadeIn from '../../components/ScrollFadeIn';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import KenSpinner from './KenSpinner';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: img1, alt: "Company 1", href: "https://company1.com" },
  { src: img2, alt: "Company 2", href: "https://company2.com" },
  { src: img3, alt: "Company 3", href: "https://company3.com" },
  { src: img4, alt: "Company 4", href: "https://company4.com" },
];

export const BrandSection = () => {

  return (
    <>
      <ScrollFadeIn>
        <div
          className="py-40 md:py-40 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 text-center md:text-left"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* TEXT */}
          <div className="font-['Geist'] text-[14px] md:text-[16px] text-white uppercase mb-12 md:mb-0 tracking-[0.18px]">
            TRUSTED BY LEADING ENTERPRISES:
          </div>

          {/* LOGOS */}
          <div className="w-full md:flex-1 relative overflow-hidden h-[100px] md:h-[120px] flex items-center justify-center">
            {/* <KenSpinner /> */}
            <LogoLoop
              logos={imageLogos}
              speed={40}
              direction="left"
              logoHeight={60}
              gap={100} // 👈 slightly smaller gap for mobile
              hoverSpeed={0}
              fadeOut={100}
              pauseOnHover={false}
              fadeOutColor="black"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </ScrollFadeIn>
    </>
  );
};