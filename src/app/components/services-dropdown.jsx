import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Main image from Figma
// import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "figma:asset/12f90a2a24f7e3315caa72708e6722575a13d825.png";
import imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg from "../../assets/12f90a2a24f7e3315caa72708e6722575a13d825.png"

const services = [
  {
    name: "Manufacturing Intelligence",
    href: "/services/manufacturing",
    image: imgEvkKKiT34ZFcqnJwjmciV1OT2CuJpg
  },
  {
    name: "Energy Monitoring System",
    href: "/services/energy-monitoring",
    image: "https://images.unsplash.com/photo-1768839727824-28d6f0dcd1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBtb25pdG9yaW5nJTIwcG93ZXIlMjBncmlkJTIwc29sYXIlMjBwYW5lbHxlbnwxfHx8fDE3NzY3NjQ0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Pipeline Safety",
    href: "/services/pipeline-safety",
    image: "https://images.unsplash.com/photo-1673423601254-776e7a40afe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBwaXBlbGluZSUyMGluZnJhc3RydWN0dXJlJTIwaW5kdXN0cmlhbCUyMHNlbnNvcnxlbnwxfHx8fDE3NzY3NjQ0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Artificial Intelligence & Analytics",
    href: "/services/ai-analytics",
    image: "https://images.unsplash.com/photo-1677442135732-00cab8f454e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyGFuYWx5dGljcyUyMHZpc3VhbGl6YXRpb24lMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc2NzY0NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Cloud & Data Platforms",
    href: "/services/cloud-data",
    image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlciUyMHJvb20lMjBkYXRhJTIwcGxhdGZvcm18ZW58MXx8fHwxNzc2NzY0NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "SAP & Oracle Solutions",
    href: "/services/sap-oracle",
    image: "https://images.unsplash.com/photo-1662947774668-e2ca450802df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBzYXAlMjBvcmFjbGUlMjBidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzY3NjQ0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export const ServicesDropdown = ({ isOpen, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="absolute top-[calc(100%+16px)] left-0 w-[640px] h-[400px] z-50 pointer-events-auto"
          onMouseLeave={onClose}
        >
          <div className="backdrop-blur-[25px] bg-black/80 border border-white/20 rounded-[20px] size-full overflow-hidden flex shadow-2xl">
            {/* Left Side: Services List */}
            <div className="flex-1 p-8 flex flex-col justify-center gap-4">
              {services.map((service, index) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className={`font-['Geist'] font-semibold text-[18px] transition-colors duration-200 capitalize text-left leading-[27px]
                    ${hoveredIndex === index ? 'text-white' : 'text-white/75 hover:text-white/90'}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={onClose}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            {/* Right Side: Dynamic Image */}
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
                    src={services[hoveredIndex].image} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
