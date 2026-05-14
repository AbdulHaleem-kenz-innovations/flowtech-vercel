import ScrollFadeIn from '../../components/ScrollFadeIn';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import KenSpinner from './KenSpinner';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

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

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return isMobile;
};

export const BrandSection = () => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const currentLangData = langData[language.toLowerCase()].brand;

  return (
    <>
      <ScrollFadeIn>
        <div
          className="py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-4 md:gap-8 text-center md:text-start"
          style={{ maxWidth: "1240px", margin: "0 auto" }}
        >
          {/* TEXT */}
          <div className="font-['Geist'] text-[12px] md:text-[16px] text-white uppercase tracking-[0.18px] md:whitespace-nowrap md:shrink-0">
            {currentLangData.trusted_by}
          </div>

          {/* LOGOS */}
          <div className="w-full md:flex-1 relative overflow-hidden h-[60px] md:h-[100px] flex items-center" dir="ltr">
            <LogoLoop
              logos={imageLogos}
              speed={40}
              direction="left"
              logoHeight={isMobile ? 30 : 40}
              gap={isMobile ? 40 : 100}
              hoverSpeed={0}
              fadeOut={true}
              pauseOnHover={false}
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </ScrollFadeIn>
    </>
  );
};