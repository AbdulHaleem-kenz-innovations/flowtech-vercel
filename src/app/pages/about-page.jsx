import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';
import { NewsletterSection } from '../components/newsletter-section';
import RotationCard from '../components/rotation-card';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

// Assets from Figma import
import imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg from "../../assets/3b06c86fd8535cf5a270d186cf91e904d7f06a6c.png";
import imgIcon from "../../assets/445d85002bfbb2f5b9b5a6fc82c66a3c9b6db58b.png";
import imgIcon1 from "../../assets/782f6ce0546436e8821bec9c22778b4542230974.png";
import imgImage from "../../assets/dd3cde80d86c11aada3895f36ffe663c314a3ca2.png";
import imgImage1 from "../../assets/28664606051f8506026c69bed106cd92d3ebbb23.png";
import imgIcon2 from "../../assets/6886a2ae690bf45b1c14a4ab8541b0a321dfa1d0.png";
import imgIcon3 from "../../assets/6b222335315314bfb97af68338c7e14209e057cb.png";
import imgIcon4 from "../../assets/9bec84b25147d3f444b5b7b6e9020eb3bc782326.png";
import imgIcon5 from "../../assets/a874bf47701c667cb79e4817723b9f60550fd6a6.png";
import imgImage2 from "../../assets/1ab2cead734fbf40f3614daca8f587b2c28c7db4.png";
import imgFuturisticTechnologyConcept11 from "../../assets/3e9467f54c2e804d06558cf16ffc2f23b98243d0.png";
import imgImage3 from "../../assets/25593f754374bc769956c2480da019422fc09dd7.png";
import imgVector from "../../assets/7f8f7db1b24bd3f3db04f6c6928d30f25bc8e3f5.png";
import imgVector1 from "../../assets/f9904e1428f23b9e83ae11dd28353beb0bbd42fc.png";
import imgVector2 from "../../assets/52dbe64cfeea740ffa579ab7ca8d3b864a141982.png";
import imgVector3 from "../../assets/23c9d8cdb32b5c6f95daa75d78de900199470653.png";
import imgImage4 from "../../assets/a36dc06bf52f150ae73b147605fcf1f068424de7.png";
import imgImage5 from "../../assets/e4a89e3d441973ce4d201b8a267e257b238d44bf.png";
import imgImage6 from "../../assets/d1986fe5d6cbb1975d0b296dceae5f38409b5f54.png";
import img1 from "../../assets/About-page-imgvids/1.jpeg"
import img2 from "../../assets/About-page-imgvids/2.jpeg"
import img3 from "../../assets/About-page-imgvids/3.jpeg"
import img4 from "../../assets/About-page-imgvids/4.jpeg"
import vid1 from "../../assets/About-page-imgvids/video1.mp4"
import vid2 from "../../assets/About-page-imgvids/video2.mp4"


// SVGs
import { imgDivFramerIu4QG, imgDivFramerIu4QG1, imgSection } from "../../imports/svg-2r94c";
import svgPaths from "../../imports/svg-4lq27j1spe";
import { RotationCardSection } from '../components/rotation-card-section';
import ScrollFadeIn from '../../components/ScrollFadeIn';

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

const ValueCard = ({ title, description, icon }) => (
  <motion.div
    className="backdrop-blur-[15px] bg-white/5 rounded-[7px] p-5 flex flex-col gap-4 flex-1 border border-white/10"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3">
      <div className="size-[18px]">
        <ImageWithFallback src={icon} className="size-full object-contain" />
      </div>
      <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">{title}</span>
    </div>
    <p className="font-['Geist'] font-normal text-[14px] text-white/75 uppercase leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const AboutPage = () => {
  const { language } = useLanguage();
  const isRtl = language === 'AR';
  const t = langData[language.toLowerCase()].about_page;

  return (
    <div className="w-full flex flex-col items-center" dir={isRtl ? 'rtl' : 'ltr'}>

      {/* Hero Section */}
      <ScrollFadeIn>
        <section className="pt-[140px] md:pt-[200px] mb-[80px] md:mb-[150px] px-6 w-full max-w-[1260px] mx-auto relative flex flex-col items-center">
          <div className="backdrop-blur-[25px] bg-white/5 border border-white/10 rounded-[7px] p-10 md:p-[100px] w-full relative overflow-hidden">
            {/* Decorative icons */}
            <div className="absolute top-5 start-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute top-5 end-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 end-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />

            <div className="max-w-[800px] flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
                  <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                  <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">{t.hero.badge}</span>
                </div>
                <h1 className="flex flex-wrap items-end gap-x-3">
                  <span className="font-['Geist'] font-medium text-[48px] md:text-[60px] text-white leading-tight">{t.hero.title_p1}</span>
                  <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-transparent leading-tight tracking-tight">{t.hero.title_italic}</span>
                </h1>
              </div>

              <div className="flex flex-col gap-4 text-white/75 font-['Geist'] text-[16px] uppercase leading-relaxed">
                <p>{t.hero.description_1}</p>
                <p>{t.hero.description_2}</p>
              </div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-[140px] mt-8">
                <div className="flex flex-col gap-4 max-w-[330px]">
                  <div className="flex items-center gap-3">
                    <div className="size-[18px]">
                      <ImageWithFallback src={imgIcon} className="size-full object-contain" />
                    </div>
                    <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">{t.hero.vision_title}</span>
                  </div>
                  <p className="text-white/75 text-[16px] uppercase leading-relaxed font-['Geist']">{t.hero.vision_text}</p>
                </div>
                <div className="flex flex-col gap-4 max-w-[330px]">
                  <div className="flex items-center gap-3">
                    <div className="size-[18px]">
                      <ImageWithFallback src={imgIcon1} className="size-full object-contain" />
                    </div>
                    <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">{t.hero.mission_title}</span>
                  </div>
                  <p className="text-white/75 text-[16px] uppercase leading-relaxed font-['Geist']">{t.hero.mission_text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Company Overview Section */}
      <section className="px-6 w-full max-w-[1310px] mx-auto mb-[80px] md:mb-[150px]">
        <ScrollFadeIn>
          <div className="flex flex-col lg:flex-row gap-[25px]">
            <div className="flex-1 bg-white/5 rounded-[7px] overflow-hidden h-[400px] md:h-[650px] relative border border-white/10 group">
              {/* Vertical Scroll Container */}
              <div className="absolute inset-0 p-10 overflow-hidden">
                <div
                  className="w-full space-y-4 animate-scroll-vertical"
                  style={{ '--scroll-speed': '40s' }}
                >
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      {[img1, vid1, img2, vid2, img3, img4].map((item, index) => {
                        const isVideo = typeof item === 'string' && item.includes('.mp4');
                        return (
                          <div key={`${i}-${index}`} className="w-full h-[420px] rounded-[7px] overflow-hidden">
                            {isVideo ? (
                              <video
                                src={item}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                              />
                            ) : (
                              <ImageWithFallback src={item} className="w-full h-full object-cover" />
                            )}
                          </div>
                        );
                      })}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* ✅ TOP PROGRESSIVE BLUR */}
              <div
                className="absolute top-0 left-0 right-0 h-24 backdrop-blur-[10px] pointer-events-none z-10"
                style={{
                  maskImage: `linear-gradient(to bottom, black 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)`,
                  WebkitMaskImage: `linear-gradient(to bottom, black 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)`
                }}
              />

              {/* ✅ BOTTOM PROGRESSIVE BLUR */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 backdrop-blur-[10px] pointer-events-none z-10"
                style={{
                  maskImage: `linear-gradient(to top, black 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)`,
                  WebkitMaskImage: `linear-gradient(to top, black 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)`
                }}
              />
            </div>

            <div className="flex-1 backdrop-blur-[10px] bg-white/5 rounded-[7px] p-6 md:p-12 flex flex-col justify-between border border-white/10 relative overflow-hidden">
              {/* Decorative Background Shape */}
              <div className={`absolute -bottom-20 md:bottom-[-168px] ${isRtl ? '-left-20 md:left-[-100px]' : '-right-20 md:right-[-100px]'} size-[300px] md:size-[617px] opacity-10 pointer-events-none transition-all duration-500`}>
                <svg className="size-full" viewBox="0 0 617 617" fill="none">
                  <path d={svgPaths.p1f4a3af0} stroke="white" strokeWidth="2" opacity="0.3" />
                  <path d={svgPaths.p89c3400} stroke="white" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>

              <div className="space-y-6 md:space-y-10 relative z-10">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="20" viewBox="0 0 130 20" fill="none">
                    <path d="M67.5337 5.27264C68.5392 5.36532 70.3588 5.30527 71.4235 5.29405C71.4986 6.27976 71.4816 7.45565 71.4982 8.46379C71.5358 10.3839 71.5559 12.3043 71.5583 14.2249C71.9875 13.3021 72.6965 11.0962 73.0343 10.091C73.5846 8.48329 74.1523 6.88148 74.7374 5.28598C75.7285 5.32352 76.8896 5.29801 77.8942 5.30124C77.7542 6.60089 77.3983 8.29376 77.1822 9.63939C76.8428 11.9143 76.1771 12.5362 75.3787 14.474C74.7182 16.0772 73.8496 17.9843 73.2562 19.578C71.7533 19.6226 70.0845 19.5922 68.5686 19.5936L68.4134 11.2163C67.7755 12.8503 67.2144 14.5483 66.5914 16.1927C66.2034 17.2169 65.5188 18.5471 65.2531 19.5818C63.7346 19.6201 62.0608 19.5923 60.5315 19.5947L59.543 5.29244C60.846 5.2906 62.4748 5.0988 63.4219 6.15379C63.7296 6.50169 63.9445 6.92167 64.0469 7.37471C64.2462 8.25498 64.1487 13.2179 64.0769 14.3322C64.6689 12.9529 65.1133 11.4091 65.6792 10.043C66.368 8.38013 66.9502 6.9749 67.5337 5.27264Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M54.2364 4.87633C55.9631 4.71723 57.0901 4.93925 58.6378 5.63512C58.8334 7.15421 58.908 8.87146 59.0089 10.4095L59.4679 16.7611C57.8081 19.2037 54.2725 20.212 51.4552 19.9457C48.7048 19.6449 46.6656 17.9773 46.1886 15.1898C45.8272 13.0779 46.8212 10.1408 48.0118 8.41051C49.392 6.4047 51.8834 5.25351 54.2364 4.87633ZM55.5909 15.1654C57.0121 13.3514 57.9696 8.15646 54.2638 8.39098C51.5858 8.92487 50.5596 12.368 50.9698 14.7611C51.2018 16.1134 52.2967 16.5506 53.5421 16.514C54.6106 16.3035 54.9032 16.043 55.5909 15.1654Z" fill="white" />
                    <path d="M124.251 10.1882C124.357 9.02083 124.755 6.90909 125.599 6.07413C126.637 5.04758 128.54 5.2869 129.961 5.29372C129.357 8.30127 128.786 10.9966 128.312 14.0624C128.127 15.2604 127.648 18.4746 127.361 19.5289C127.148 19.6347 126.852 19.6033 126.604 19.5998C125.277 19.6009 123.951 19.5943 122.624 19.5803C122.959 17.736 123.239 15.8649 123.592 14.0282C122.096 14.0183 120.599 14.0175 119.102 14.0257C118.781 15.888 118.544 17.7389 118.163 19.6061C116.61 19.5795 114.994 19.5957 113.436 19.5922C113.647 18.3987 113.848 17.2047 114.056 16.0107C114.68 12.4187 115.445 8.8901 116.06 5.29188C117.55 5.33851 119.276 5.302 120.783 5.30435C120.573 6.66288 120.179 8.86305 119.818 10.1925C121.24 10.1537 122.837 10.1113 124.251 10.1882Z" fill="white" />
                    <path d="M106.791 4.87321C106.913 4.85935 107.035 4.85004 107.159 4.84534C109.333 4.75487 111.882 5.29399 113.121 7.28233C113.799 8.37002 113.82 9.54174 113.861 10.7804C112.446 10.8347 110.756 10.8066 109.318 10.8199C109.327 9.9238 109.214 8.93612 108.255 8.56835C107.585 8.31459 106.841 8.34128 106.192 8.6424C104.293 9.52957 103.719 12.14 103.666 14.0507C103.641 14.967 103.887 16.014 104.866 16.3332C106.985 17.0243 108.136 15.905 108.797 14.0171L112.02 14.0175L113.405 14.0267C112.998 14.9328 112.809 15.6539 112.245 16.5725C109.535 20.9897 100.393 21.5745 99.0796 15.7226C98.6323 13.7284 99.2511 10.6992 100.425 8.94903C101.985 6.62392 104.037 5.40484 106.791 4.87321Z" fill="white" />
                    <path d="M102.731 5.19745L102.777 5.23074C102.718 5.51031 101.275 6.58384 100.952 6.94413C100.457 7.49762 99.9472 7.9324 99.5483 8.6068C98.4177 8.61193 97.2871 8.6079 96.1566 8.5947L95.8054 10.7208L98.6149 10.7302C98.2967 11.7202 98.1508 12.9697 98.0181 14.0074C97.1735 13.9641 95.9102 13.9569 95.081 14.0104C94.9776 14.7764 94.8654 15.5411 94.7444 16.3045C95.9095 16.3265 97.131 16.3013 98.3004 16.2937L98.3114 16.3304C98.7227 17.6514 99.3819 18.8009 100.625 19.4563L100.613 19.5243C100.328 19.6554 98.9771 19.6003 98.571 19.5949L89.4102 19.5895C89.6929 17.8823 89.9472 15.9247 90.3286 14.2533C91.0129 11.2533 91.4454 8.32027 91.9796 5.30157L98.9706 5.3097C99.802 5.31058 102.002 5.36623 102.731 5.19745Z" fill="white" />
                    <path d="M27.4631 5.28021C28.5385 5.34679 30.0584 5.30368 31.1729 5.30602L38.5835 5.30126C38.2713 7.28924 37.8075 8.62555 35.4569 8.61719C34.1201 8.6125 32.7489 8.5974 31.4105 8.60891C31.3451 9.31813 31.1015 10.5538 30.9782 11.295C32.7152 11.2815 34.4525 11.287 36.1894 11.3118C35.8678 12.3919 36.0608 12.7754 35.2601 13.7527C34.0481 14.8589 32.0716 14.5432 30.412 14.525C30.1758 16.0894 29.7431 18.0921 29.5912 19.5952L24.8281 19.5911C24.8905 18.8598 25.0924 17.9375 25.2263 17.1972C25.9431 13.2338 26.4696 9.18417 27.4631 5.28021Z" fill="white" />
                    <path d="M78.7812 5.28998C82.8585 5.35098 87.021 5.29298 91.1074 5.31139C90.7876 8.46228 90.2377 9.06204 87.1277 9.01797C86.7872 11.4039 86.2358 14.5031 85.7274 16.8533C85.547 17.7348 85.3195 18.6955 85.2265 19.5824C83.7031 19.6276 82.0144 19.5997 80.4755 19.6033C80.5959 18.4053 81.027 16.9358 81.2519 15.7254C81.6667 13.4937 82.0126 11.2453 82.428 9.0168L78.1935 9.02978C78.2877 7.96775 78.6202 6.4394 78.7812 5.28998Z" fill="white" />
                    <path d="M39.6084 5.29626C42.8832 5.26385 44.3478 5.89404 43.6436 9.54424C43.2177 11.7517 42.8974 14.088 42.4902 16.3111C43.5056 16.3008 44.5211 16.3106 45.536 16.3404C45.9535 17.8876 46.7353 18.5822 47.8946 19.6237C47.5177 19.5864 47.1059 19.59 46.7248 19.5847L37.1797 19.5951C37.9723 14.9731 38.955 9.89859 39.6084 5.29626Z" fill="white" />
                    <path d="M8.7209 2.53515C9.25013 2.5082 9.52829 2.79411 9.92443 3.10118C10.5481 3.13784 11.2467 3.12099 11.8786 3.12052L15.0314 3.11806C15.8014 3.11726 17.1849 2.94513 17.6978 3.60005C18.5679 4.71095 19.1172 6.06108 19.8844 7.26537L14.0687 7.25783C13.2389 7.2566 12.4084 7.2453 11.5791 7.27095C11.1969 7.28279 10.7013 7.44764 10.4683 7.76692C9.45363 9.15772 8.80364 10.7727 7.8339 12.202C7.53762 12.6237 7.20709 13.276 6.95334 13.7464C6.594 14.4125 5.98266 15.3178 5.7371 16.0064C5.25108 15.3099 4.89436 14.5564 4.43044 13.853C4.04883 13.2683 3.0016 13.2062 2.90025 12.3893C2.72037 10.9393 4.69513 11.5081 4.747 9.92508C4.79253 8.53565 3.38 8.60922 3.17026 7.31028C3.09655 6.85376 3.25318 6.48986 3.50196 6.12625C3.88089 5.44256 4.85973 5.11209 5.54845 5.54301C6.38304 6.06517 6.96232 6.49207 7.71932 5.45604C8.31806 4.63662 7.31641 3.87314 7.84759 3.05079C8.01599 2.79013 8.41286 2.59901 8.7209 2.53515Z" fill="white" />
                    <path d="M19.9776 7.43182C20.0547 7.47906 20.1612 7.64822 20.2054 7.73302C20.7477 8.77999 21.4026 9.77321 21.9105 10.8357C22.0474 11.1213 22.1441 11.583 22.0007 11.8819C21.1853 13.5779 20.1688 15.1838 19.2241 16.809C18.7771 17.5778 18.3961 18.3537 17.9195 19.0943C17.3484 19.9818 16.0911 19.7747 15.152 19.7731L12.3225 19.7704L9.98057 19.7736C9.53723 19.774 9.06213 19.7823 8.62089 19.7531C8.35117 19.7352 7.99599 19.5585 7.72656 19.4527C7.93804 19.1965 8.04779 19.021 8.22257 18.7364C8.31186 18.5976 8.3883 18.4523 8.46607 18.3069C8.95838 17.3858 9.48268 16.483 10.0012 15.5765C10.9261 15.5333 11.971 15.6615 12.8671 15.4369C14.1123 15.1248 14.5482 13.8732 15.1291 12.8496C14.0375 12.8937 12.6568 12.852 11.5425 12.8506C11.8913 12.4284 12.6632 10.6709 13.1228 10.5977C14.381 10.3974 15.7799 10.6472 17.0823 10.4868C18.9706 10.2542 19.0644 8.65498 19.9776 7.43182Z" fill="white" />
                  </svg>
                </div>
                <h2 className="font-['Geist'] font-medium text-[24px] md:text-[32px] text-white leading-tight max-w-[527px]">
                  {t.overview.text.split('&').map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[20px] md:text-[23px] leading-none">&</span>}
                    </React.Fragment>
                  ))}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-10 md:mt-12 relative z-10">
                <button className="relative overflow-hidden flex items-center justify-center w-fit mx-auto sm:mx-0 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[13px] sm:text-[14px] md:text-[16px] rounded-full bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)] border border-white/20 text-white uppercase whitespace-nowrap font-['Geist'] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 glare-btn">
                  {t.overview.cta_team}
                </button>
                <span className={`text-white/60 font-['Geist'] text-[16px] md:text-[18px] text-center ${isRtl ? 'sm:text-right' : 'sm:text-left'}`}>Hello@flowtech.com</span>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* Core Values Section */}
      <section className="px-6 w-full max-w-[1310px] mx-auto mb-[80px] md:mb-[150px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[39px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <h2 className="flex flex-wrap items-center gap-x-3">
                <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[48px] md:text-[60px] text-transparent leading-tight">{t.values.title_p1}</span>
                <span className="font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-white/70 leading-tight">{t.values.title_italic}</span>
              </h2>
              <p className="max-w-[345px] text-white/70 font-['Geist'] text-[16px] uppercase leading-relaxed">
                {t.values.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
              <ValueCard
                title={t.values.card1_title}
                description={t.values.card1_text}
                icon={imgIcon2}
              />
              <ValueCard
                title={t.values.card2_title}
                description={t.values.card2_text}
                icon={imgIcon3}
              />
              <ValueCard
                title={t.values.card3_title}
                description={t.values.card3_text}
                icon={imgIcon4}
              />
              <ValueCard
                title={t.values.card4_title}
                description={t.values.card4_text}
                icon={imgIcon5}
              />
            </div>

            {/* Support Banner */}
            <div className="backdrop-blur-[15px] bg-white/5 border border-white/10 rounded-2xl md:rounded-[50px] p-5 md:p-2 md:pr-6 flex flex-col md:flex-row items-center justify-between max-w-[800px] mx-auto w-full mt-4 gap-6 md:gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-start">
                <div className="size-[60px] md:size-[70px] rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                  <ImageWithFallback src={imgImage2} className="size-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-0.5">
                    <span className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white">{t.support.greeting}</span>
                    <span className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white">{t.support.name}</span>
                    <span className="font-['Playfair_Display'] italic text-[18px] md:text-[23px] text-white/60 italic leading-none">{t.support.team}</span>
                  </div>
                  <p className="text-white/70 font-['Geist'] text-[12px] md:text-[14px] uppercase tracking-wide mt-1">{t.support.description}</p>
                </div>
              </div>
              <button className="relative overflow-hidden flex items-center justify-center w-fit mx-auto sm:mx-0 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[13px] sm:text-[14px] md:text-[16px] rounded-full bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)] border border-white/20 text-white uppercase whitespace-nowrap font-['Geist'] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 glare-btn">
                {t.support.cta}
              </button>
            </div>
          </div>

          {/* Industrial Image */}
          <div className="mt-16 md:mt-[100px] h-[300px] md:h-[630px] rounded-[7px] overflow-hidden relative group">
            <ImageWithFallback src={imgFuturisticTechnologyConcept11} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/20" />
            {/* Decorative icons at corners */}
            <div className="absolute top-5 start-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute top-5 end-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 start-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 end-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
          </div>
        </ScrollFadeIn>
      </section>

      {/* Our Team Section */}
      <section className="px-6 w-full max-w-[1310px] mx-auto mb-[80px]">
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
              <button className="relative overflow-hidden flex items-center justify-center w-fit mx-auto sm:mx-0 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-[13px] sm:text-[14px] md:text-[16px] rounded-full bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)] border border-white/20 text-white uppercase whitespace-nowrap font-['Geist'] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 glare-btn">
                {t.team.cta_join}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[30px]">
              {t.team.members.map((member, i) => (
                <TeamCard key={i} name={member.name} role={member.role} image={[imgImage3, imgImage4, imgImage1, imgImage5, imgImage2, imgImage6][i]} />
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </section>


      {/* Industrial Power Section */}
      <section className="w-full mb-[22px] relative overflow-hidden">
        <ScrollFadeIn>
          <RotationCardSection />
        </ScrollFadeIn>
      </section>
      <ScrollFadeIn>
        {/* Newsletter Section */}
        <NewsletterSection />

        <FooterSection />
      </ScrollFadeIn>
    </div>
  );
};
export default AboutPage