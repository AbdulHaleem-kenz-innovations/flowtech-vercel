import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

// Assets
import imgImage from "../../assets/49208a0f068229058add6f6c6c1d9a3f7c59ffa5.png";
import imgImage1 from "../../assets/471de929844a70aecd4765b69e70d32ebd8478b4.png";
import imgGroup31 from "../../assets/d9e1587466443d2cc869bd53ca5485e1cec1d65a.png";
import imgIcon from "../../assets/ce1325e35b20a36f04f5cb3826377f8737e01c09.png";
import imgIcon1 from "../../assets/18a6f5127f63a422c53c5b78ebe9fca988d873fa.png";
import imgIcon2 from "../../assets/51ffed27f8563ca2ad8315deb10fabefcc04a9bc.png";
import imgIcon3 from "../../assets/0a5aa46c4dced89013f2a2a5b9b8353e09cd6368.png";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1 } from "../../imports/svg-z9wjn";
import svgFooterPaths from "../../imports/svg-2m2zf95hf3";
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { MapPin, MapPinned } from 'lucide-react';

const Logo = () => (
  <div className="h-[44px] w-[49px] relative shrink-0">
    <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.0564 44.0003">
      <g id="Group 2">
        <path d={svgFooterPaths.pd667680} fill="white" />
        <path d={svgFooterPaths.pd95df80} fill="white" />
        <path d={svgFooterPaths.p2850500} fill="white" />
        <path d={svgFooterPaths.p24174800} fill="white" />
        <path d={svgFooterPaths.p3e361d00} fill="white" />
        <path d={svgFooterPaths.p281b3900} fill="white" />
        <path d={svgFooterPaths.pb83b500} fill="white" />
        <path d={svgFooterPaths.p45bdc00} fill="white" />
        <path d={svgFooterPaths.p1ff18500} fill="white" />
        <path d={svgFooterPaths.p1460bb00} fill="white" />
        <path d={svgFooterPaths.p82d4600} fill="white" />
      </g>
    </svg>
  </div>
);

const NavBadge = ({ label }) => (
  <div className="backdrop-blur-[20px] bg-white/10 flex gap-2 items-center px-3 py-1.5 rounded-[5px] w-fit">
    <div className="size-4 relative">
      <div
        className="absolute inset-0 bg-white mask-alpha"
        style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }}
      />
    </div>
    <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white tracking-widest uppercase">
      {label}
    </span>
  </div>
);

const NavLink = ({ label, to = "/" }) => (
  <Link to={to} className="font-['Geist'] text-[16px] md:text-[18px] text-white/60 hover:text-white transition-colors py-1">
    {label}
  </Link>
);

const ContactBox = () => {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].footer_section;

  return (
    <div className="bg-white p-6 md:p-8 lg:p-10 rounded-[24px] w-full lg:max-w-[387px] flex flex-col gap-6 md:gap-8 relative border border-black/5 shadow-2xl">
      <div className="flex flex-col gap-2 items-center text-center">
        <div className="bg-[#2df9a7]/15 px-3 py-1 rounded-full flex gap-2 items-center">
          <div className="size-3">
            <ImageWithFallback src={imgImage} alt="" className="size-full object-contain" />
          </div>
          <span className="font-['Geist'] font-bold text-[#0f9101] text-[10px] tracking-[0.1em] uppercase">
            {t.email_us}
          </span>
        </div>
        <span className="font-['Geist'] text-[15px] md:text-[16px] text-black font-medium break-all">
          hello@flowtech.com
        </span>
      </div>

      <div className="flex flex-col gap-2 items-center text-center">
        <div className="bg-[#2d6ef9]/15 px-3 py-1 rounded-full flex gap-2 items-center">
          <div className="size-3">
            <ImageWithFallback src={imgImage1} alt="" className="size-full object-contain" />
          </div>
          <span className="font-['Geist'] font-bold text-[#110fdf] text-[10px] tracking-[0.1em] uppercase">
            {t.call_us}
          </span>
        </div>
        <span className="font-['Geist'] text-[15px] md:text-[16px] text-black font-medium" dir="ltr">
          +966 55 877 1132
        </span>
      </div>

      <div className="flex flex-col gap-3 items-center text-center">
        <div className="bg-[#8b5cf6]/15 px-3 py-1 rounded-full flex gap-2 items-center">
          <div className="size-3 flex items-center justify-center">
            <MapPinned className="size-full text-[#7c3aed]" />
          </div>
          <span className="font-['Geist'] font-bold text-[#7c3aed] text-[10px] tracking-[0.1em] uppercase">
            {t.our_location}
          </span>
        </div>
        <div className="font-['Geist'] text-[12px] md:text-[13px] text-black/70 leading-snug max-w-[280px]">
          <div className="font-bold text-black mb-0.5">{t.address_title}</div>
          <div className="opacity-80">{t.address_p1}</div>
          <div className="opacity-80">
            {t.address_p2}
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute bottom-4 start-4 size-5 bg-black/10" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
      <div className="absolute start-4 top-4 size-5 bg-black/10" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
      <div className="absolute bottom-4 end-4 size-5 bg-black/10" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
      <div className="absolute end-4 top-4 size-5 bg-black/10" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain', maskRepeat: 'no-repeat' }} />
    </div>
  );
};

export const FooterSection = () => {
  const { language } = useLanguage();
  const isRtl = language === 'AR';
  const t = langData[language.toLowerCase()].footer_section;
  const nav = langData[language.toLowerCase()].navbar;

  return (
    <ScrollFadeIn>
      <footer className="w-full  px-6 md:px-8 relative overflow-hidden bg-transparent border-t border-white/5" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="max-w-[1260px] mx-auto flex flex-col gap-16 md:gap-24 relative z-10">

          {/* Background Pattern */}
          <div className="absolute bottom-[-25%] inset-x-0 h-[300px] pointer-events-none -z-10">
            <ImageWithFallback alt="" className=" object-cover" src={imgGroup31} />
          </div>

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-24 flex-1">
              <div className="flex flex-col gap-6">
                <Logo />
                <p className="font-['Geist'] text-[14px] text-white/40 max-w-[200px] uppercase leading-relaxed">
                  {t.tagline}
                </p>
                <div className="font-['Geist'] text-[13px] sm:text-[14px] text-white/40 max-w-[220px] sm:max-w-[260px] uppercase leading-relaxed space-y-1">
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 flex-1">
                <div className="flex flex-col gap-6">
                  <NavBadge label={t.company} />
                  <nav className="flex flex-col gap-2">
                    <NavLink label={nav.home} to="/" />
                    <NavLink label={nav.about} to="/about" />
                    <NavLink label={nav.services} to="/services/energy-monitoring" />
                    <NavLink label={nav.products} to="/products" />
                    <NavLink label={t.careers} to="/careers" />
                    <NavLink label={nav.industries} to="/industries" />
                  </nav>
                </div>

                <div className="flex flex-col gap-6">
                  <NavBadge label={t.info} />
                  <nav className="flex flex-col gap-2">
                    <NavLink label={t.our_team} to="/about" />
                    <NavLink label={nav.insights} to="/insights" />
                    <NavLink label={nav.connect} to="/contact" />
                  </nav>
                </div>

                <div className="flex flex-col gap-6">
                  <NavBadge label={t.extra} />
                  <nav className="flex flex-col gap-2">
                    <NavLink label={t.privacy} to="/" />
                    <NavLink label={t.terms} to="/" />
                  </nav>
                </div>
              </div>
            </div>

            <ContactBox />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pt-10 border-t border-white/10">
            <div className="max-w-[700px] text-center lg:text-start">
              <p className="font-['Geist'] text-[12px] md:text-[14px] text-white/30 uppercase leading-relaxed tracking-wider">
                {t.copyright}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
              <div className="flex gap-6 justify-center">
                {[imgIcon, imgIcon1, imgIcon2, imgIcon3].map((icon, index) => (icon && (
                  <Link key={index} to="/" className="size-5 opacity-40 hover:opacity-100 transition-opacity">
                    <ImageWithFallback alt="" className="size-full object-contain" src={icon} />
                  </Link>
                )))}
              </div>

              <Link to="/contact" className="w-full sm:w-auto">
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
    glare-btn"
                >
                  {t.need_help}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </ScrollFadeIn>
  );
};
