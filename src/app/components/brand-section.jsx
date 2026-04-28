import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export const BrandSection = () => {
  return (
    <div
      className="py-12 md:py-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 text-center md:text-left"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      {/* TEXT */}
      <div className="font-['Geist'] text-[14px] md:text-[16px] text-white uppercase">
        TRUSTED BY LEADING ENTERPRISES:
      </div>

      {/* LOGOS */}
      <div className="w-full md:flex-1 relative overflow-hidden h-[100px] md:h-[120px] flex items-center justify-center">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={40}
          gap={40} // 👈 slightly smaller gap for mobile
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="black"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};