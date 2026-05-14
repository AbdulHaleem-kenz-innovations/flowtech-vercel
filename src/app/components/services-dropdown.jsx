import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { createPortal } from 'react-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png";

export const ServicesDropdown = ({ isOpen, onClose, anchorRef }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [position, setPosition] = useState({ top: 0 });
  const { language } = useLanguage();
  const currentLang = language.toLowerCase();
  const isRtl = currentLang === 'ar';
  
  const services_t = langData[currentLang]?.features?.services || {};

  const services = [
    {
      id: 8,
      name: "Manufacturing Intelligence",
      href: "/services/manufacturing",
      image: imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg
    },
    {
      id: 2,
      name: "Energy Monitoring System",
      href: "/services/energy-monitoring",
      image: "https://images.unsplash.com/photo-1768839727824-28d6f0dcd1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBtb25pdG9yaW5nJTIwcG93ZXIlMjBncmlkJTIwc29sYXIlMjBwYW5lbHxlbnwxfHx8fDE3NzY3NjQ0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      name: "Pipeline Safety",
      href: "/services/pipeline-safety",
      image: "https://images.unsplash.com/photo-1673423601254-776e7a40afe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBwaXBlbGluZSUyMGluZnJhc3RydWN0dXJlJTIwaW5kdXN0cmlhbCUyMHNlbnNvcnxlbnwxfHx8fDE3NzY3NjQ0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      name: "Artificial Intelligence & Analytics",
      href: "/services/ai-analytics",
      image: "https://images.unsplash.com/photo-1677442135732-00cab8f454e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMGFuYWx5dGljcyUyMHZpc3VhbGl6YXRpb24lMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc2NzY0NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      name: "Cloud & Data Platforms",
      href: "/services/cloud-services",
      image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMHJvb20lMjBkYXRhJTIwcGxhdGZvcm18ZW58MXx8fHwxNzc2NzY0NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      name: "SAP Services",
      href: "/services/sap-services",
      image: "https://images.unsplash.com/photo-1662947774668-e2ca450802df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBzYXAlMjBvcmFjbGUlMjBidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzY3NjQ0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
      onMouseLeave={onClose}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className={`backdrop-blur-[25px] md:bg-white/5 bg-black/40 border border-white/20 rounded-[20px] w-[640px] h-[400px] overflow-hidden flex shadow-2xl ${isRtl ? 'flex-row-reverse' : ''}`}>
        
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
        <div className="w-[300px] m-4 relative overflow-hidden rounded-[15px]">
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