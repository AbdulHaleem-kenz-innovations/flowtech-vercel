import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';
import { NewsletterSection } from '../components/newsletter-section';
import RotationCard from '../components/rotation-card';

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
    <div className="h-[497px] rounded-[7px] overflow-hidden relative">
      <ImageWithFallback src={image} className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Detail Overlay */}
      <div className="absolute bottom-[15px] left-[15px] right-[15px]">
        <div className="bg-white rounded-[7px] p-[20px] flex flex-col gap-[17px]">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="font-['Geist'] font-semibold text-[18px] text-black">{name.split(' ')[0]}</span>
              <span className="font-['Geist'] font-normal text-[18px] text-[#838383]">{name.split(' ')[1]}</span>
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
  return (
    <div className="w-full flex flex-col items-center">

      {/* Hero Section */}
      <ScrollFadeIn>
        <section className="pt-[200px] mb-[150px] px-6 w-full max-w-[1260px] mx-auto relative flex flex-col items-center">
          <div className="backdrop-blur-[25px] bg-white/5 border border-white/10 rounded-[7px] p-10 md:p-[100px] w-full relative overflow-hidden">
            {/* Decorative icons */}
            <div className="absolute top-5 left-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute top-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />

            <div className="max-w-[800px] flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
                  <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                  <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">Our story</span>
                </div>
                <h1 className="flex flex-wrap items-end gap-x-3">
                  <span className="font-['Geist'] font-medium text-[48px] md:text-[60px] text-white leading-tight">How Flowtech</span>
                  <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-transparent leading-tight tracking-tight">came to life</span>
                </h1>
              </div>

              <div className="flex flex-col gap-4 text-white/75 font-['Geist'] text-[16px] uppercase leading-relaxed">
                <p>Flowtech was founded with a clear vision—to transform industries through intelligent systems, data-driven insights, and advanced digital technologies. With deep expertise across AI, analytics, and industrial solutions, we enable organizations to move from reactive operations to proactive, insight-led decision making.</p>
                <p>By combining Manufacturing Intelligence, Energy Monitoring Systems, and Fiber Optic-based pipeline solutions, Flowtech delivers connected ecosystems that enhance efficiency, improve safety, and drive measurable business outcomes across complex environments.</p>
              </div>

              <div className="flex flex-col md:flex-row gap-12 md:gap-[140px] mt-8">
                <div className="flex flex-col gap-4 max-w-[330px]">
                  <div className="flex items-center gap-3">
                    <div className="size-[18px]">
                      <ImageWithFallback src={imgIcon} className="size-full object-contain" />
                    </div>
                    <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">Vision</span>
                  </div>
                  <p className="text-white/75 text-[16px] uppercase leading-relaxed font-['Geist']">To enable industries with intelligent, connected technologies that drive operational excellence, sustainability, and long-term growth.</p>
                </div>
                <div className="flex flex-col gap-4 max-w-[330px]">
                  <div className="flex items-center gap-3">
                    <div className="size-[18px]">
                      <ImageWithFallback src={imgIcon1} className="size-full object-contain" />
                    </div>
                    <span className="font-['Geist'] font-medium text-[16px] text-white uppercase">Mission</span>
                  </div>
                  <p className="text-white/75 text-[16px] uppercase leading-relaxed font-['Geist']">To deliver advanced AI, analytics, and industrial solutions that enhance efficiency, ensure safety, and empower data-driven decision-making across every operation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Company Overview Section */}

      <section className="px-6 w-full max-w-[1310px] mx-auto mb-[150px]">
        <ScrollFadeIn>
          <div className="flex flex-col lg:flex-row gap-[25px]">
            {/* <div className="flex-1 backdrop-blur-[10px] bg-white/5 rounded-[7px] overflow-hidden h-[650px] relative border border-white/10 group"> */}
              {/* Vertical Scroll Container */}
              {/* <div className="absolute inset-0 p-10 overflow-hidden">
                <div
                  className="w-full space-y-4 animate-scroll-vertical"
                  style={{ '--scroll-speed': '40s' }}
                >
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      {[imgImage, imgImage1, imgImage3, imgImage4, imgImage5, imgImage6].map((img, index) => (
                        <div key={`${i}-${index}`} className="w-full h-[420px] rounded-[7px] overflow-hidden">
                          <ImageWithFallback src={img} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div> */}

              {/* Glass / Fading Overlays */}
              {/* <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 via-black/10 to-transparent backdrop-blur-[2px] z-10 pointer-events-none" /> */}

              {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 via-black/10 to-transparent backdrop-blur-[2px] z-10 pointer-events-none" /> */}

              {/* Mask image for the fade effect from figma */}
              {/* <div className="absolute inset-0 pointer-events-none opacity-50 z-20" style={{ maskImage: `url('${imgSection}')`, maskSize: 'cover' }} /> */}
            {/* </div> */}

           <div className="flex-1 bg-white/5 rounded-[7px] overflow-hidden h-[650px] relative border border-white/10 group">
  
  {/* Vertical Scroll Container */}
  <div className="absolute inset-0 p-10 overflow-hidden">
    <div
      className="w-full space-y-4 animate-scroll-vertical"
      style={{ '--scroll-speed': '40s' }}
    >
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          {[imgImage, imgImage1, imgImage3, imgImage4, imgImage5, imgImage6].map((img, index) => (
            <div key={`${i}-${index}`} className="w-full h-[420px] rounded-[7px] overflow-hidden">
              <ImageWithFallback src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>

  {/* ✅ TOP PROGRESSIVE BLUR */}
  <div
    className="absolute top-0 left-0 right-0 h-24 backdrop-blur-[10px] pointer-events-none z-10"
    style={{
      maskImage: `linear-gradient(
        to bottom,
        black 0%,
        rgba(0,0,0,0.6) 40%,
        rgba(0,0,0,0.2) 70%,
        transparent 100%
      )`,
      WebkitMaskImage: `linear-gradient(
        to bottom,
        black 0%,
        rgba(0,0,0,0.6) 40%,
        rgba(0,0,0,0.2) 70%,
        transparent 100%
      )`
    }}
  />

  {/* ✅ BOTTOM PROGRESSIVE BLUR */}
  <div
    className="absolute bottom-0 left-0 right-0 h-24 backdrop-blur-[10px] pointer-events-none z-10"
    style={{
      maskImage: `linear-gradient(
        to top,
        black 0%,
        rgba(0,0,0,0.6) 40%,
        rgba(0,0,0,0.2) 70%,
        transparent 100%
      )`,
      WebkitMaskImage: `linear-gradient(
        to top,
        black 0%,
        rgba(0,0,0,0.6) 40%,
        rgba(0,0,0,0.2) 70%,
        transparent 100%
      )`
    }}
  />

  {/* Optional dark fade (no blur) */}
  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-20 pointer-events-none" />
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-20 pointer-events-none" />

</div>

            <div className="flex-1 backdrop-blur-[10px] bg-white/5 rounded-[7px] p-6 md:p-12 flex flex-col justify-between border border-white/10 relative overflow-hidden">
              {/* Decorative Background Shape */}
              <div className="absolute -bottom-20 md:bottom-[-168px] -right-20 md:right-[-100px] size-[300px] md:size-[617px] opacity-10 pointer-events-none">
                <svg className="size-full" viewBox="0 0 617 617" fill="none">
                  <path d={svgPaths.p1f4a3af0} stroke="white" strokeWidth="2" opacity="0.3" />
                  <path d={svgPaths.p89c3400} stroke="white" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>

              <div className="space-y-6 md:space-y-10 relative z-10">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="130" height="20" viewBox="0 0 130 20" fill="none">
                    <path d="M67.5337 5.27264C68.5392 5.36532 70.3588 5.30527 71.4235 5.29405C71.4986 6.27976 71.4816 7.45565 71.4982 8.46379C71.5358 10.3839 71.5559 12.3043 71.5583 14.2249C71.9875 13.3021 72.6965 11.0962 73.0343 10.091C73.5846 8.48329 74.1523 6.88148 74.7374 5.28598C75.7285 5.32352 76.8896 5.29801 77.8942 5.30124C77.7542 6.60089 77.3983 8.29376 77.1822 9.63939C76.8428 11.9143 76.1771 12.5362 75.3787 14.474C74.7182 16.0772 73.8496 17.9843 73.2562 19.578C71.7533 19.6226 70.0845 19.5922 68.5686 19.5936L68.4134 11.2163C67.7755 12.8503 67.2144 14.5483 66.5914 16.1927C66.2034 17.2169 65.5188 18.5471 65.2531 19.5818C63.7346 19.6201 62.0608 19.5923 60.5315 19.5947L59.543 5.29244C60.846 5.2906 62.4748 5.0988 63.4219 6.15379C63.7296 6.50169 63.9445 6.92167 64.0469 7.37471C64.2462 8.25498 64.1487 13.2179 64.0769 14.3322C64.6689 12.9529 65.1133 11.4091 65.6792 10.043C66.368 8.38013 66.9502 6.9749 67.5337 5.27264Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2364 4.87633C55.9631 4.71723 57.0901 4.93925 58.6378 5.63512C58.8334 7.15421 58.908 8.87146 59.0089 10.4095L59.4679 16.7611C57.8081 19.2037 54.2725 20.212 51.4552 19.9457C48.7048 19.6449 46.6656 17.9773 46.1886 15.1898C45.8272 13.0779 46.8212 10.1408 48.0118 8.41051C49.392 6.4047 51.8834 5.25351 54.2364 4.87633ZM55.5909 15.1654C57.0121 13.3514 57.9696 8.15646 54.2638 8.39098C51.5858 8.92487 50.5596 12.368 50.9698 14.7611C51.2018 16.1134 52.2967 16.5506 53.5421 16.514C54.6106 16.3035 54.9032 16.043 55.5909 15.1654Z" fill="white" />
                    <path d="M124.251 10.1882C124.357 9.02083 124.755 6.90909 125.599 6.07413C126.637 5.04758 128.54 5.2869 129.961 5.29372C129.357 8.30127 128.786 10.9966 128.312 14.0624C128.127 15.2604 127.648 18.4746 127.361 19.5289C127.148 19.6347 126.852 19.6033 126.604 19.5998C125.277 19.6009 123.951 19.5943 122.624 19.5803C122.959 17.736 123.239 15.8649 123.592 14.0282C122.096 14.0183 120.599 14.0175 119.102 14.0257C118.781 15.888 118.544 17.7389 118.163 19.6061C116.61 19.5795 114.994 19.5957 113.436 19.5922C113.647 18.3987 113.848 17.2047 114.056 16.0107C114.68 12.4187 115.445 8.8901 116.06 5.29188C117.55 5.33851 119.276 5.302 120.783 5.30435C120.573 6.66288 120.179 8.86305 119.818 10.1925C121.24 10.1537 122.837 10.1113 124.251 10.1882Z" fill="white" />
                    <path d="M106.791 4.87321C106.913 4.85935 107.035 4.85004 107.159 4.84534C109.333 4.75487 111.882 5.29399 113.121 7.28233C113.799 8.37002 113.82 9.54174 113.861 10.7804C112.446 10.8347 110.756 10.8066 109.318 10.8199C109.327 9.9238 109.214 8.93612 108.255 8.56835C107.585 8.31459 106.841 8.34128 106.192 8.6424C104.293 9.52957 103.719 12.14 103.666 14.0507C103.641 14.967 103.887 16.014 104.866 16.3332C106.985 17.0243 108.136 15.905 108.797 14.0171L112.02 14.0175L113.405 14.0267C112.998 14.9328 112.809 15.6539 112.245 16.5725C109.535 20.9897 100.393 21.5745 99.0796 15.7226C98.6323 13.7284 99.2511 10.6992 100.425 8.94903C101.985 6.62392 104.037 5.40484 106.791 4.87321Z" fill="white" />
                    <path d="M102.731 5.19745L102.777 5.23074C102.718 5.51031 101.275 6.58384 100.952 6.94413C100.457 7.49762 99.9472 7.9324 99.5483 8.6068C98.4177 8.61193 97.2871 8.6079 96.1566 8.5947L95.8054 10.7208L98.6149 10.7302C98.2967 11.7202 98.1508 12.9697 98.0181 14.0074C97.1735 13.9641 95.9102 13.9569 95.081 14.0104C94.9776 14.7764 94.8654 15.5411 94.7444 16.3045C95.9095 16.3265 97.131 16.3013 98.3004 16.2937L98.3114 16.3304C98.7227 17.6514 99.3819 18.8009 100.625 19.4563L100.613 19.5243C100.328 19.6554 98.9771 19.6003 98.571 19.5949L89.4102 19.5895C89.6929 17.8823 89.9472 15.9247 90.3286 14.2533C91.0129 11.2533 91.4454 8.32027 91.9796 5.30157L98.9706 5.3097C99.802 5.31058 102.002 5.36623 102.731 5.19745Z" fill="white" />
                    <path d="M27.4631 5.28021C28.5385 5.34679 30.0584 5.30368 31.1729 5.30602L38.5835 5.30126C38.2713 7.28924 37.8075 8.62555 35.4569 8.61719C34.1201 8.6125 32.7489 8.5974 31.4105 8.60891C31.3451 9.31813 31.1015 10.5538 30.9782 11.295C32.7152 11.2815 34.4525 11.287 36.1894 11.3118C35.8678 12.3919 36.0608 12.7754 35.2601 13.7527C34.0481 14.8589 32.0716 14.5432 30.412 14.525C30.1758 16.0894 29.7431 18.0921 29.5912 19.5952L24.8281 19.5911C24.8905 18.8598 25.0924 17.9375 25.2263 17.1972C25.9431 13.2338 26.4696 9.18417 27.4631 5.28021Z" fill="white" />
                    <path d="M78.7812 5.28998C82.8585 5.35098 87.021 5.29298 91.1074 5.31139C90.7876 8.46228 90.2377 9.06204 87.1277 9.01797C86.7872 11.4039 86.2358 14.5031 85.7274 16.8533C85.547 17.7348 85.3195 18.6955 85.2265 19.5824C83.7031 19.6276 82.0144 19.5997 80.4755 19.6033C80.5959 18.4053 81.027 16.9358 81.2519 15.7254C81.6667 13.4937 82.0126 11.2453 82.428 9.0168L78.1935 9.02978C78.2877 7.96775 78.6202 6.4394 78.7812 5.28998Z" fill="white" />
                    <path d="M39.6084 5.29626C42.8832 5.26385 44.3478 5.89404 43.6436 9.54424C43.2177 11.7517 42.8974 14.088 42.4902 16.3111C43.5056 16.3008 44.5211 16.3106 45.536 16.3404C45.9535 17.8876 46.7353 18.5822 47.8946 19.6237C47.5177 19.5864 47.1059 19.59 46.7248 19.5847L37.1797 19.5951C37.9723 14.9731 38.955 9.89859 39.6084 5.29626Z" fill="white" />
                    <path d="M8.7209 2.53515C9.25013 2.5082 9.52829 2.79411 9.92443 3.10118C10.5481 3.13784 11.2467 3.12099 11.8786 3.12052L15.0314 3.11806C15.8014 3.11726 17.1849 2.94513 17.6978 3.60005C18.5679 4.71095 19.1172 6.06108 19.8844 7.26537L14.0687 7.25783C13.2389 7.2566 12.4084 7.2453 11.5791 7.27095C11.1969 7.28279 10.7013 7.44764 10.4683 7.76692C9.45363 9.15772 8.80364 10.7727 7.8339 12.202C7.53762 12.6237 7.20709 13.276 6.95334 13.7464C6.594 14.4125 5.98266 15.3178 5.7371 16.0064C5.25108 15.3099 4.89436 14.5564 4.43044 13.853C4.04883 13.2683 3.0016 13.2062 2.90025 12.3893C2.72037 10.9393 4.69513 11.5081 4.747 9.92508C4.79253 8.53565 3.38 8.60922 3.17026 7.31028C3.09655 6.85376 3.25318 6.48986 3.50196 6.12625C3.88089 5.44256 4.85973 5.11209 5.54845 5.54301C6.38304 6.06517 6.96232 6.49207 7.71932 5.45604C8.31806 4.63662 7.31641 3.87314 7.84759 3.05079C8.01599 2.79013 8.41286 2.59901 8.7209 2.53515Z" fill="white" />
                    <path d="M19.9776 7.43182C20.0547 7.47906 20.1612 7.64822 20.2054 7.73302C20.7477 8.77999 21.4026 9.77321 21.9105 10.8357C22.0474 11.1213 22.1441 11.583 22.0007 11.8819C21.1853 13.5779 20.1688 15.1838 19.2241 16.809C18.7771 17.5778 18.3961 18.3537 17.9195 19.0943C17.3484 19.9818 16.0911 19.7747 15.152 19.7731L12.3225 19.7704L9.98057 19.7736C9.53723 19.774 9.06213 19.7823 8.62089 19.7531C8.35117 19.7352 7.99599 19.5585 7.72656 19.4527C7.93804 19.1965 8.04779 19.021 8.22257 18.7364C8.31186 18.5976 8.3883 18.4523 8.46607 18.3069C8.95838 17.3858 9.48268 16.483 10.0012 15.5765C10.9261 15.5333 11.971 15.6615 12.8671 15.4369C14.1123 15.1248 14.5482 13.8732 15.1291 12.8496C14.0375 12.8937 12.6568 12.852 11.5425 12.8506C11.8913 12.4284 12.6632 10.6709 13.1228 10.5977C14.381 10.3974 15.7799 10.6472 17.0823 10.4868C18.9706 10.2542 19.0644 8.65498 19.9776 7.43182Z" fill="white" />
                    <path d="M3.17022 8.95083C3.6733 8.84784 4.16409 9.17382 4.26428 9.6774C4.36451 10.181 4.03585 10.67 3.5317 10.7674C3.03145 10.8641 2.54707 10.5386 2.44767 10.0389C2.34824 9.53917 2.6711 9.05301 3.17022 8.95083Z" fill="white" />
                    <path d="M6.4306 3.81838C6.89937 3.68975 7.38495 3.9594 7.52358 4.42527C7.6622 4.89114 7.40306 5.38241 6.94023 5.53099C6.63193 5.62999 6.29419 5.55443 6.05743 5.3335C5.82067 5.11258 5.72193 4.78084 5.79941 4.46642C5.87685 4.152 6.11832 3.90405 6.4306 3.81838Z" fill="white" />
                    <path d="M7.40607 0.828538C7.71904 0.808974 7.82608 0.818682 8.11841 0.920137C8.44029 1.41918 8.52962 1.81029 7.93443 2.12174C7.79758 2.15394 7.65319 2.18842 7.51496 2.156C7.34109 2.11507 7.1913 2.00524 7.09998 1.85169C7.00649 1.68952 6.98295 1.4963 7.03474 1.31638C7.09169 1.11537 7.22282 0.932931 7.40607 0.828538Z" fill="white" />
                    <path d="M0.686531 8.57742C1.04152 8.502 1.39191 8.72329 1.47646 9.07622C1.56097 9.42914 1.34884 9.78515 0.998198 9.87875C0.76318 9.94149 0.512658 9.87179 0.343784 9.69673C0.174946 9.52162 0.11438 9.26874 0.185595 9.03615C0.256811 8.80356 0.448579 8.62795 0.686531 8.57742Z" fill="white" />
                    <path d="M2.32663 4.73915C2.59508 4.72438 2.84122 4.76567 3.03357 4.97548C3.13706 5.08773 3.19089 5.23705 3.18281 5.38955C3.16741 5.69173 2.97938 5.87545 2.77098 6.06505C2.42095 6.12217 2.13986 6.09497 1.95537 5.74584C1.86405 5.57244 1.84601 5.3697 1.90528 5.18289C1.98066 4.9419 2.1174 4.85192 2.32663 4.73915Z" fill="white" />
                    <path d="M0.723616 3.39276C1.27708 3.39117 1.43128 3.9889 0.900532 4.28524C0.713292 4.26499 0.540542 4.22373 0.432378 4.05178C0.377644 3.96593 0.361163 3.86117 0.386846 3.76268C0.432958 3.58243 0.575208 3.48379 0.723616 3.39276Z" fill="white" />
                    <path d="M5.28522 0.0400282C5.42345 -0.0251706 5.58624 -0.00990591 5.70994 0.0798597C5.83364 0.169625 5.89863 0.319641 5.87954 0.471284C5.86041 0.62293 5.76022 0.752125 5.61811 0.808391C5.40783 0.891644 5.16945 0.792956 5.07954 0.585439C4.98963 0.377925 5.08066 0.136506 5.28522 0.0400282Z" fill="white" />
                    <path d="M0.25362 6.06963C0.7618 6.0617 1.1579 6.46578 0.595281 6.80034C0.40105 6.85677 0.197111 6.84551 0.0673586 6.66555C0.00907487 6.58375 -0.0126948 6.48146 0.00719197 6.38304C0.0392498 6.2163 0.123179 6.15791 0.25362 6.06963Z" fill="white" />
                    <path d="M4.90147 1.87234C5.4045 1.86582 5.66017 2.22813 5.20614 2.61728C4.62019 2.69664 4.43172 2.18806 4.90147 1.87234Z" fill="white" />
                  </svg>
                </div>
                <h2 className="font-['Geist'] font-medium text-[24px] md:text-[32px] text-white leading-tight max-w-[527px]">
                  Flowtech is a <span className="font-['Playfair_Display'] italic text-white/70">technology first solutions</span> company built on one clear principle: <span className="font-['Playfair_Display'] italic text-white/70">Intelligence should always drive operations forward.</span> We deliver real time AI, data, & industrial systems designed to improve efficiency, safety, <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[20px] md:text-[23px] leading-none">&</span>  performance <span className="font-['Playfair_Display'] italic text-white/70">across modern enterprises.</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-10 md:mt-12 relative z-10">
                <button className=" relative overflow-hidden
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
    glare-btn
">
                  Meet the team
                </button>
                <span className="text-white/60 font-['Geist'] text-[16px] md:text-[18px] text-center sm:text-left">Hello@flowtech.com</span>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </section>


      {/* Core Values Section */}
      <section className="px-6 w-full max-w-[1310px] mx-auto mb-[150px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[39px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <h2 className="flex flex-wrap items-center gap-x-3">
                <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[48px] md:text-[60px] text-transparent leading-tight">Core</span>
                <span className="font-['Playfair_Display'] italic font-normal text-[48px] md:text-[60px] text-white/70 leading-tight">values</span>
              </h2>
              <p className="max-w-[345px] text-white/70 font-['Geist'] text-[16px] uppercase leading-relaxed">
                FROM INDUSTRIAL OPERATIONS TO CRITICAL INFRASTRUCTURE, WE DELIVER RELIABLE SOLUTIONS. EXPLORE HOW WE DRIVE EFFICIENCY, SAFETY, AND PERFORMANCE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
              <ValueCard
                title="ENGINEERING PRECISION"
                description="WE DESIGN ROBUST SYSTEMS WITH ACCURACY, RELIABILITY, AND OPERATIONAL CLARITY"
                icon={imgIcon2}
              />
              <ValueCard
                title="OPERATION FIRST APPROACH"
                description="YOUR OPERATIONS COME FIRST. WE ANALYSE, OPTIMISE, AND SCALE WITH YOU"
                icon={imgIcon3}
              />
              <ValueCard
                title="Data Driven Decisions"
                description="REAL TIME DATA MEETS ACTIONABLE INSIGHTS. WE ENABLE SMARTER DECISIONS"
                icon={imgIcon4}
              />
              <ValueCard
                title="CONTINUOUS INNOVATION"
                description="TECHNOLOGY EVOLVES CONSTANTLY—SO DO WE. DRIVEN BY ADVANCEMENT."
                icon={imgIcon5}
              />
            </div>

            {/* Support Banner */}
            <div className="backdrop-blur-[15px] bg-white/5 border border-white/10 rounded-2xl md:rounded-[50px] p-5 md:p-2 md:pr-6 flex flex-col md:flex-row items-center justify-between max-w-[800px] mx-auto w-full mt-4 gap-6 md:gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <div className="size-[60px] md:size-[70px] rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                  <ImageWithFallback src={imgImage2} className="size-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-0.5">
                    <span className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white">Hi there,</span>
                    <span className="font-['Geist'] font-medium text-[20px] md:text-[23px] text-white">Flowtech</span>
                    <span className="font-['Playfair_Display'] italic text-[18px] md:text-[23px] text-white/60 italic leading-none">support team here</span>
                  </div>
                  <p className="text-white/70 font-['Geist'] text-[12px] md:text-[14px] uppercase tracking-wide mt-1">FEEL FREE TO REACH OUT IF YOU NEED HELP WITH OUR SOLUTIONS</p>
                </div>
              </div>
              <button className=" relative overflow-hidden
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
    glare-btn
">
                Contact us
              </button>
            </div>
          </div>

          {/* Industrial Image */}
          <div className="mt-[100px] h-[630px] rounded-[7px] overflow-hidden relative group">
            <ImageWithFallback src={imgFuturisticTechnologyConcept11} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/20" />
            {/* Decorative icons at corners */}
            <div className="absolute top-5 left-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute top-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 left-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
            <div className="absolute bottom-5 right-5 opacity-40 size-5 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG1}')`, maskSize: 'contain' }} />
          </div>
        </ScrollFadeIn>
      </section>

      {/* Our Team Section */}

      <section className="px-6 w-full max-w-[1310px] mx-auto mb-[86px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-10">
              <div className="flex flex-col gap-4 md:gap-6 w-full lg:max-w-[320px]">
                <div className="backdrop-blur-[20px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2 w-fit">
                  <div className="size-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                  <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-widest">team member</span>
                </div>
                <h2 className="flex flex-wrap items-center gap-x-3">
                  <span className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[36px] sm:text-[48px] md:text-[60px] text-transparent leading-tight">Our</span>
                  <span className="font-['Playfair_Display'] italic font-normal text-[36px] sm:text-[48px] md:text-[60px] text-white/70 leading-tight">team</span>
                </h2>
              </div>
              <p className="max-w-[450px] lg:max-w-[345px] text-white/70 font-['Geist'] text-[14px] md:text-[16px] uppercase leading-relaxed">
                FROM INDUSTRIAL SYSTEMS TO ENTERPRISE SOLUTIONS, OUR TEAM DRIVES INNOVATION AND IMPACT ACROSS EVERY DEPLOYMENT
              </p>
              <button className=" relative overflow-hidden
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
    glare-btn
">
                Join us
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[30px]">
              <TeamCard name="Omar Hassan" role="CHIEF TECHNOLOGY OFFICER" image={imgImage3} />
              <TeamCard name="Layla Al-Farsi" role="VP OF OPERATIONS" image={imgImage4} />
              <TeamCard name="Yousef Al-Mansoori" role="HEAD OF ENGINEERING" image={imgImage1} />
              <TeamCard name="Noura Al-Sayed" role="UX/UI DESIGNER" image={imgImage5} />
              <TeamCard name="Khalid Al-Nahyan" role="DATA & ANALYTICS LEAD" image={imgImage2} />
              <TeamCard name="Amina Al-Harbi" role="PRODUCT SPECIALIST" image={imgImage6} />
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