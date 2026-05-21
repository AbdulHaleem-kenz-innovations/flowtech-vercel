import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { createPortal } from 'react-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';
import mesIntro from "../../assets/service-images/MES/1.jpeg"
import emsIntro from "../../assets/service-images/EMS/1.jpeg"
import pipelineIntro from "../../assets/service-images/Pipelines/1.jpeg"
import aiIntro from "../../assets/service-images/Ai-Analytics/1.jpeg"
import cloudIntro from "../../assets/service-images/Cloud/1.jpeg"
import sapIntro from "../../assets/service-images/SAP/1.jpeg"
import oracleIntro from "../../assets/service-images/Oracle/1.jpeg"
import analyticsIntro from "../../assets/service-images/Analytics/1.jpeg"

import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png";

export const ServicesDropdown = ({ isOpen, onClose, onOpen, anchorRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [position, setPosition] = useState({ top: 0 });
  const { language } = useLanguage();
  const currentLang = language.toLowerCase();
  const isRtl = currentLang === 'ar';
  
  const services_t = langData[currentLang]?.features?.services || {};

  const services = [
    {
      id: 1,
      name: "Analytics",
      href: "/services/analytics",
      image: analyticsIntro
    },
    {
      id: 8,
      name: "Manufacturing Intelligence",
      href: "/services/manufacturing",
      image: mesIntro
    },
    {
      id: 2,
      name: "Energy Monitoring System",
      href: "/services/energy-monitoring",
      image: emsIntro
    },
    {
      id: 3,
      name: "Pipeline Safety",
      href: "/services/pipeline-safety",
      image: pipelineIntro
    },
    {
      id: 5,
      name: "Artificial Intelligence & Analytics",
      href: "/services/ai-analytics",
      image: aiIntro
    },
    {
      id: 4,
      name: "Cloud & Data Platforms",
      href: "/services/cloud-services",
      image: cloudIntro
    },
    {
      id: 6,
      name: "SAP Services",
      href: "/services/sap-services",
      image: sapIntro
      },
       {
      id: 7,
      name: "Oracle Solutions",
      href: "/services/oracle-services",
      image: oracleIntro
    }
  ];

  const localizedServices = services.map(service => ({
    ...service,
    name: services_t[service.id]?.title || service.name
  }));

  useEffect(() => {
    const calculate = () => {
      if (!anchorRef?.current) return;
      const rect = anchorRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 25 });
    };

    calculate();
    window.addEventListener('resize', calculate);
    window.addEventListener('scroll', calculate, true);
    return () => {
      window.removeEventListener('resize', calculate);
      window.removeEventListener('scroll', calculate, true);
    };
  }, [anchorRef]);

  const dropdown = (
    <div
      style={{
        position: 'fixed',
        top: position.top - 25,
        left: '50%',
        width: 640,
        paddingTop: 25,
        zIndex: 9999,
        opacity: isOpen ? 1 : 0.001,
        pointerEvents: isOpen ? 'auto' : 'none',
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.25s cubic-bezier(0.23, 1, 0.32, 1), transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isOpen ? 'translateX(-50%) translateY(0) scale(1)' : 'translateX(-50%) translateY(-12px) scale(0.97)',
      }}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className={`backdrop-blur-[25px] md:bg-white/5 bg-black/40 border border-white/20 rounded-[20px] w-[790px] h-[400px] overflow-hidden flex shadow-2xl ${isRtl ? 'flex-row-reverse' : ''}`}>
        
        {/* Services List */}
        <div className={`flex-1 p-8 flex flex-col justify-center gap-4 ${isRtl ? 'text-right' : 'text-left'}`}>
          {localizedServices.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`font-['Geist'] font-semibold text-[18px] transition-colors duration-200 capitalize leading-[27px]
                ${hoveredIndex === index ? 'text-white' : 'text-white/75 hover:text-white/90'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={onClose}
            >
              {service.name}
            </Link>
          ))}
        </div>

        {/* Dynamic Image */}
        <div className="w-[400px] h-[350px] m-4 relative overflow-hidden rounded-[15px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={localizedServices[hoveredIndex]?.image}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  return createPortal(dropdown, document.body);
};