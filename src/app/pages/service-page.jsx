import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { ContactSection } from '../components/contact-section';
import { RotationCardSection } from '../components/rotation-card-section';
import { BlogSection } from '../components/blog-section';
import { FooterSection } from '../components/footer-section';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { serviceImages } from '../../assets/service-images';
import imgIcon from "../../assets/bb249576ee094c05f7af1474e71aa3d161406f33.png";
import imgIcon1 from "../../assets/e877d7ed814f22a39abcf45085d45b28a8273357.png";
import { imgDivFramerIu4QG } from "../../imports/svg-wzgzr";
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';


const RichContent = ({ content, isRtl }) => {
  if (!content) return null;

  return (
    <div className={`flex flex-col gap-10 ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {content.intro && (
        <p className="font-['Geist'] text-[16px] md:text-[18px] text-white/80 leading-relaxed whitespace-pre-line">
          {content.intro}
        </p>
      )}

      {content.sections?.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-6">
          {section.title && (
            <h3 className="font-['Geist'] font-semibold text-[24px] md:text-[28px] text-white tracking-tight border-b border-white/10 pb-4">
              {section.title}
            </h3>
          )}
          
          {section.content && (
            <p className="font-['Geist'] text-[15px] md:text-[16px] text-white/70 leading-relaxed">
              {section.content}
            </p>
          )}

          {section.bullets && (
            <ul className={`flex flex-col gap-3 list-none ${isRtl ? 'pr-0' : 'pl-0'}`}>
              {section.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className={`size-[6px] rounded-full bg-blue-500 mt-[9px] shrink-0 group-hover:scale-125 transition-transform ${isRtl ? 'ml-3' : 'mr-0'}`} />
                  <span className="font-['Geist'] text-[14px] md:text-[15px] text-white/70 group-hover:text-white transition-colors">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {section.table && (
            <div className="w-full overflow-x-auto rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <table className={`w-full border-collapse ${isRtl ? 'text-right' : 'text-left'} text-[14px] md:text-[15px]`}>
                <thead>
                  <tr className="bg-white/10">
                    {section.table.headers.map((header, i) => (
                      <th key={i} className={`p-4 font-['Geist'] font-semibold text-white uppercase tracking-wider border-b border-white/10 ${isRtl ? 'text-right' : 'text-left'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className="p-4 font-['Geist'] text-white/70 border-b border-white/5 align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.subsections?.map((sub, i) => (
            <div key={i} className={`flex flex-col gap-4 ${isRtl ? 'pr-0 md:pr-6 border-r-2' : 'pl-0 md:pl-6 border-l-2'} border-white/5 hover:border-blue-500/30 transition-colors`}>
              <h4 className="font-['Geist'] font-medium text-[18px] md:text-[20px] text-white/90">
                {sub.title}
              </h4>
              {sub.content && (
                <p className="font-['Geist'] text-[14px] md:text-[15px] text-white/60 leading-relaxed">
                  {sub.content}
                </p>
              )}
              {sub.bullets && (
                <ul className="flex flex-col gap-2 list-none">
                  {sub.bullets.map((bullet, k) => (
                    <li key={k} className="flex gap-3 items-start group">
                      <div className={`size-[5px] rounded-full bg-blue-400/50 mt-[8px] shrink-0 ${isRtl ? 'ml-3' : ''}`} />
                      <span className="font-['Geist'] text-[13px] md:text-[14px] text-white/60 group-hover:text-white transition-colors">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ServiceDetailsModal = ({ isOpen, onClose, data, isRtl }) => {
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (navbar) navbar.style.opacity = '0';
      if (navbar) navbar.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = 'unset';
      if (navbar) navbar.style.opacity = '1';
      if (navbar) navbar.style.pointerEvents = 'auto';
    }
    return () => { 
      document.body.style.overflow = 'unset';
      if (navbar) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed  inset-0 z-[9999] flex items-center justify-center p-4 md:p-10" dir={isRtl ? 'rtl' : 'ltr'}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-white/5 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className={`flex flex-col gap-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                <h2 className="font-['Geist'] font-bold text-[24px] md:text-[32px] text-white leading-tight">
                  {data.title}
                </h2>
                <p className="font-['Playfair_Display'] italic text-[16px] md:text-[18px] text-blue-400">
                  {data.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="size-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <RichContent content={data} isRtl={isRtl} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

function TopSection({ data, onReadMore, isRtl, labels, images }) {
  return (
    <section className="flex flex-col gap-10 md:gap-32 items-center text-center pt-24 md:pt-60 px-6 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Title Area */}
      <ScrollFadeIn>
        <div className="max-w-[1222px] w-full flex flex-col gap-8 items-center">
          <div
            className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[40px] sm:text-[52px] md:text-[64px] text-transparent tracking-[-0.4px] leading-[1.1]"
            style={{ backgroundImage: isRtl 
              ? "linear-gradient(90deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" 
              : "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}
          >
            <p>{data.title}</p>
          </div>
          <div className="flex flex-col font-['Geist'] font-normal text-[14px] md:text-[18px] text-white/70 uppercase max-w-[741px]">
            <p className="leading-relaxed">{data.description}</p>
          </div>
        </div>
      </ScrollFadeIn>

      <div className="max-w-[1260px] w-full flex flex-col gap-5 md:gap-[20px]">
        {/* Intro Section: Text & Image */}
        <ScrollFadeIn>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Category Wrap */}
            <div className={`backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col gap-10 ${isRtl ? 'text-right' : 'text-left'} relative overflow-hidden`}>
              <div className={`backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                <div className="size-[16px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">{labels.introduction}</span>
              </div>

              <div
                className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
                style={{ backgroundImage: isRtl 
                  ? "linear-gradient(90.464deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)"
                  : "linear-gradient(269.536deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}
              >
                <p className="whitespace-pre-line">{data.intro}</p>
              </div>

              <div className="flex flex-col gap-0 border-t border-white/10 mt-auto pt-4">
                {[
                  { label: labels.technology, value: data.technology },
                  { label: labels.concept, value: data.concept },
                  { label: labels.industry, value: data.industry }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-white/10 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
                    <span className="font-['Geist'] text-[14px] md:text-[16px] text-white/60 uppercase">{item.label}</span>
                    <span className={`font-['Geist'] text-[14px] md:text-[16px] text-white mt-1 sm:mt-0 ${isRtl ? 'text-right sm:text-left' : 'text-left sm:text-right'}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Wrap */}
            <div className="flex-1 rounded-[7px] overflow-hidden min-h-[400px] md:min-h-[638px] relative">
              <ImageWithFallback alt="Service Graph" className="absolute inset-0 size-full object-cover" src={images?.intro} />
            </div>
          </div>
        </ScrollFadeIn>

        {/* Category Image Wrap - Full Width */}
        <ScrollFadeIn>
          <div className="w-full aspect-video md:aspect-[1260/630] rounded-[7px] overflow-hidden relative">
            <ImageWithFallback alt="Service Dashboard" className="absolute inset-0 size-full object-cover" src={images?.fullWidth1} />
          </div>

          {/* Solution Section: Image & Text */}
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className={`flex flex-col lg:flex-row gap-6 items-stretch h-auto lg:h-[650px] ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 h-full rounded-[7px] overflow-hidden min-h-[400px] w-full relative">
              <ImageWithFallback alt="Interface" className="absolute inset-0 size-full object-cover" src={images?.solution} />
            </div>
            <div className={`backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col gap-10 ${isRtl ? 'text-right' : 'text-left'} h-full`}>

              {/* Badge */}
              <div className={`backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                <div
                  className="size-[16px] bg-white"
                  style={{
                    maskImage: `url('${imgDivFramerIu4QG}')`,
                    maskSize: 'contain'
                  }}
                />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">
                  {labels.the_solution}
                </span>
              </div>

              {/* Centered Content */}
              <div className="flex flex-col justify-center flex-1">
                <div
                  className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
                  style={{
                    backgroundImage: isRtl
                      ? "linear-gradient(90.709deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)"
                      : "linear-gradient(269.291deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)"
                  }}
                >
                  <p>{data.solution}</p>
                </div>
              </div>

            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          {/* Full width Image */}
          <div className="w-full aspect-video md:aspect-[1260/630] rounded-[7px] overflow-hidden relative ">
            <ImageWithFallback alt="Service Visualization" className="absolute inset-0 size-full object-cover" src={images?.fullWidth2} />
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          {/* Final Thoughts Section */}
          <div className={`flex flex-col lg:flex-row gap-6 items-stretch h-auto lg:h-[646px] ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`backdrop-blur-[25px] gap-10 bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col ${isRtl ? 'text-right' : 'text-left'} h-full`}>

              {/* Top Badge */}
              <div className={`backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit ${isRtl ? 'mr-0 ml-auto' : ''}`}>
                <div
                  className="size-[16px] bg-white"
                  style={{
                    maskImage: `url('${imgDivFramerIu4QG}')`,
                    maskSize: 'contain'
                  }}
                />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">
                  {labels.final_thoughts}
                </span>
              </div>

              {/* Centered Content */}
              <div className="flex flex-col justify-center flex-1 gap-10">

                <div
                  className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
                  style={{
                    backgroundImage: isRtl
                      ? "linear-gradient(90.823deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)"
                      : "linear-gradient(269.177deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)"
                  }}
                >
                  <p>{data.finalThoughts}</p>
                </div>

                <div className={`flex flex-col sm:flex-row gap-8 items-start pt-8 border-t border-white/10 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>

                  <div className="flex flex-col gap-4 flex-1">
                    <div className={`flex gap-2 items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className="size-[18px]">
                        <ImageWithFallback
                          src={imgIcon}
                          alt=""
                          className="size-full object-contain"
                        />
                      </div>

                      <span className="font-['Geist'] font-medium text-[14px] md:text-[16px] text-white uppercase whitespace-nowrap">
                        {data.keyBenefits?.[0]?.title}
                      </span>
                    </div>

                    <p className={`font-['Geist'] text-[12px] md:text-[14px] text-white/70 uppercase leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                      {data.keyBenefits?.[0]?.text}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 flex-1">
                    <div className={`flex gap-2 items-center ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className="size-[18px]">
                        <ImageWithFallback
                          src={imgIcon1}
                          alt=""
                          className="size-full object-contain"
                        />
                      </div>

                      <span className="font-['Geist'] font-medium text-[14px] md:text-[16px] text-white uppercase whitespace-nowrap">
                        {data.keyBenefits?.[1]?.title}
                      </span>
                    </div>

                    <p className={`font-['Geist'] text-[12px] md:text-[14px] text-white/70 uppercase leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
                      {data.keyBenefits?.[1]?.text}
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="flex-1 h-full rounded-[7px] overflow-hidden min-h-[400px] w-full relative">
              <ImageWithFallback alt="Interface" className="absolute inset-0 size-full object-cover" src={images?.finalThoughts} />
            </div>
          </div>
          </ScrollFadeIn>
        {/* Read More Section */}
        <ScrollFadeIn>
          <div className="flex justify-center md:mt-10 ">
              <button
              onClick={onReadMore}
              className="
    relative overflow-hidden
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
  "
            >
              {labels.read_more}
            </button>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}

export const ServicePage = () => {
  const { serviceId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();
  
  const currentLang = language.toLowerCase();
  const isRtl = currentLang === 'ar';
  
  const labels = langData[currentLang]?.service_labels || {};
  const serviceDetailData = langData[currentLang]?.service_detail_page || {};
  const fullServiceDetailsData = langData[currentLang]?.full_service_details || {};

  // Fetch current service data from langData
  const currentService = (serviceId && serviceDetailData[serviceId]) 
    ? serviceDetailData[serviceId] 
    : serviceDetailData['analytics'];
  
  // Fetch detailed service data for modal from langData
  const detailedService = (serviceId && fullServiceDetailsData[serviceId]) 
    ? fullServiceDetailsData[serviceId] 
    : fullServiceDetailsData['analytics'];

  // Fetch current images from serviceImages registry
  const images = serviceImages[serviceId] || serviceImages['analytics'];

  return (
    <div className="relative z-10 w-full flex flex-col items-center">
      <TopSection 
        data={currentService} 
        onReadMore={() => setIsModalOpen(true)} 
        isRtl={isRtl} 
        labels={labels}
        images={images}
      />
      
      <ServiceDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={detailedService} 
        isRtl={isRtl}
      />

      <div className="w-full mt-10 md:mt-20">
        <ContactSection />
        <RotationCardSection />
        <BlogSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default ServicePage;
