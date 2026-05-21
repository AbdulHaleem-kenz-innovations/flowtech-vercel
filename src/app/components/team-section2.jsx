import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

// Assets from Figma import
import imgVector from "../../assets/7f8f7db1b24bd3f3db04f6c6928d30f25bc8e3f5.png";
import imgVector1 from "../../assets/f9904e1428f23b9e83ae11dd28353beb0bbd42fc.png";
import imgVector2 from "../../assets/52dbe64cfeea740ffa579ab7ca8d3b864a141982.png";
import imgVector3 from "../../assets/23c9d8cdb32b5c6f95daa75d78de900199470653.png";
import imgImage3 from "../../assets/25593f754374bc769956c2480da019422fc09dd7.png";
import imgImage4 from "../../assets/a36dc06bf52f150ae73b147605fcf1f068424de7.png";
import imgImage1 from "../../assets/28664606051f8506026c69bed106cd92d3ebbb23.png";
import imgImage5 from "../../assets/e4a89e3d441973ce4d201b8a267e257b238d44bf.png";
import imgImage2 from "../../assets/1ab2cead734fbf40f3614daca8f587b2c28c7db4.png";
import imgImage6 from "../../assets/d1986fe5d6cbb1975d0b296dceae5f38409b5f54.png";

// SVGs
import { imgDivFramerIu4QG } from "../../imports/svg-2r94c";

const TeamCard = ({ name, role, image, socialIcons = [imgVector, imgVector1, imgVector2, imgVector3] }) => (
  <motion.div
    className="flex flex-col gap-4 relative group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="h-[350px] md:h-[497px] rounded-[7px] overflow-hidden relative">
      <ImageWithFallback src={image} className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Detail Overlay */}
      <div className="absolute bottom-[15px] start-[15px] end-[15px]">
        <div className="bg-white rounded-[7px] p-[20px] flex flex-col gap-[17px]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="font-['Geist'] font-semibold text-[18px] text-black">{name.split(' ')[0]}</span>
              <span className="font-['Geist'] font-normal text-[18px] text-[#838383]">{name.split(' ').slice(1).join(' ')}</span>
            </div>
            <span className="font-['Playfair_Display'] font-normal text-[14px] text-black/80 uppercase">{role}</span>
          </div>
          <div className="flex gap-3 items-center opacity-50">
            {socialIcons.map((icon, i) => (
              <div key={i} className="size-[15px] cursor-pointer hover:opacity-100 transition-opacity">
                <ImageWithFallback src={icon} className="size-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const TeamSection2 = React.forwardRef((props, ref) => {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].about_page;

  return (
    <section ref={ref} id="our-team" className="px-6 w-full sm:w-[98%] max-w-[1310px] mx-auto mb-[80px]">
      <ScrollFadeIn>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-10">
            <div className="flex flex-col gap-4 md:gap-6 w-full lg:max-w-[320px]">
              <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
                <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-widest">{t.team.badge}</span>
              </div>
              <h2 className="flex flex-wrap items-center gap-x-3">
                <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] sm:text-[48px] md:text-[60px] text-transparent leading-tight">{t.team.title_p1}</span>
                <span className="font-['Playfair_Display'] italic font-normal text-[36px] sm:text-[48px] md:text-[60px] text-white/70 leading-tight">{t.team.title_italic}</span>
              </h2>
            </div>
            <p className="max-w-[450px] lg:max-w-[345px] text-white/70 font-['Geist'] text-[14px] md:text-[16px] uppercase leading-relaxed">
              {t.team.description}
            </p>
            <Link to="/careers" className="relative overflow-hidden flex items-center justify-center w-fit mx-auto sm:mx-0 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[13px] sm:text-[14px] md:text-[16px] rounded-full bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)] border border-white/20 text-white uppercase whitespace-nowrap font-['Geist'] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 glare-btn">
              {t.team.cta_join}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[30px]">
            {t.team.members.map((member, i) => (
              <TeamCard key={i} name={member.name} role={member.role} image={[imgImage3, imgImage4, imgImage1, imgImage5, imgImage2, imgImage6][i]} />
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
});

TeamSection2.displayName = 'TeamSection2';

export default TeamSection2;
