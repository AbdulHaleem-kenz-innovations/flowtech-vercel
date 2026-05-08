import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { ContactSection } from '../components/contact-section';
import { RotationCardSection } from '../components/rotation-card-section';
import { BlogSection } from '../components/blog-section';
import { FooterSection } from '../components/footer-section';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import img3DGraphComputerIllustration1 from "../../assets/b7bbe33d51abd92f96d7d654afdf841ed7a3aceb.png";
import imgImage2 from "../../assets/13a5123d147560e0b029827bd35b00c4ff90b646.png";
import imgIcon from "../../assets/bb249576ee094c05f7af1474e71aa3d161406f33.png";
import imgIcon1 from "../../assets/e877d7ed814f22a39abcf45085d45b28a8273357.png";
import { imgDivFramerIu4QG } from "../../imports/svg-wzgzr";
import ScrollFadeIn from '../../components/ScrollFadeIn';
import { fullServiceDetails } from '../../lib/servicesData';

const serviceData = {
   'analytics': {
    title: 'Analytics',
    description: 'Advanced data-driven insights to monitor production, optimise quality, and drive industrial excellence.',
    intro: 'Flowtech Analytics transforms raw enterprise data into actionable intelligence that drives faster decisions, improves visibility, and unlocks measurable business growth across operations. By combining data engineering, governance, and visualization, it creates a unified, reliable data foundation. ',
    technology: 'Data Engineering, BI Tools, Data Warehousing',
    concept: 'Data-Driven Decision Making, Business Intelligence ',
    industry: 'Manufacturing, Energy, Government, Enterprise',
    solution: 'We design end-to-end analytics ecosystems that integrate data from ERP, IoT, and enterprise systems into centralized platforms. With real-time dashboards, KPI tracking, and automated reporting, organizations gain clear visibility into performance and can act faster with confidence. ',
    finalThoughts: 'Analytics enables organizations to move from fragmented data to unified, insight-driven operations. ',
    keyBenefits: [
      { title: 'OPERATIONAL EXCELLENCE', text: 'Analytics enables organizations to move from fragmented data to unified, insight-driven operations.  ' },
      { title: 'SCALABLE FOUNDATION', text: 'Builds a governed, enterprise-wide data platform that grows with business needs.  ' }
    ]
  },
  'manufacturing': {
    title: 'Manufacturing Execution System',
    description: 'Advanced data-driven insights to monitor production, optimise quality, and drive industrial excellence.',
    intro: 'Flowtech’s MES connects shop-floor operations with enterprise systems, providing real-time visibility into production, quality, and performance. It bridges the gap between machines and decision-makers, enabling smarter manufacturing operations. ',
    technology: 'IIoT, MES Platforms, Data Integration ',
    concept: 'Real-Time Production Monitoring, Smart Manufacturing',
    industry: 'Manufacturing, Industrial Enterprises',
    solution: 'Our MES integrates machine data, ERP systems, and production workflows into a centralized platform. With real-time dashboards, predictive maintenance, and quality analytics, it improves efficiency, reduces downtime, and enhances production control. ',
    finalThoughts: 'MES enables manufacturers to achieve operational excellence through real-time intelligence and automation. ',
    keyBenefits: [
      { title: 'OPERATIONAL EXCELLENCE', text: 'Improves OEE, reduces downtime, and enhances production quality and visibility. ' },
      { title: 'INTEGRATED ECOSYSTEM', text: 'Adapts across multiple plants and production lines with integrated, data-driven systems. ' }
    ]
  },
  'energy-monitoring': {
    title: 'Energy Management System',
    description: 'Real-time energy intelligence to monitor consumption, optimise efficiency, and drive sustainable operations.',
    intro: 'Flowtech’s Energy Management System provides real-time monitoring and control of energy consumption across assets, utilities, and facilities, enabling organizations to optimize usage, reduce costs, and meet sustainability goals. ',
    technology: 'IoT Sensors, Edge Devices, Cloud Platforms ',
    concept: 'Energy Intelligence, Real-Time Monitoring ',
    industry: 'Manufacturing, Utilities, Industrial Enterprises',
    solution: 'We deliver an IoT-enabled EMS platform that captures energy data from meters and equipment, analyzes consumption patterns, and provides alerts, dashboards, and reports. It supports multi-utility monitoring and ESG tracking for comprehensive energy optimization.',
    finalThoughts: 'EMS enables organizations to take control of energy consumption and drive sustainable operations. ',
    keyBenefits: [
      { title: 'OPERATIONAL IMPACT', text: 'Reduces energy costs, improves efficiency, and identifies waste in real time. ' },
      { title: 'SCALABLE FOUNDATION', text: 'Supports multi-site deployments with integrated energy and sustainability intelligence. ' }
    ]
  },
  'pipeline-safety': {
    title: 'Pipeline Safety',
    description: 'Distributed fiber optic sensing for real-time pipeline monitoring, leak detection, and infrastructure security.',
    intro: 'Flowtech’s Pipeline Safety solutions use Distributed Fiber Optic Sensing (DFOS) to provide continuous, real-time monitoring of pipelines, detecting leaks, intrusions, and structural changes across long distances with high precision. ',
    technology: 'DFOS, DAS, DTS, DSS, DTSS ',
    concept: 'Multi-Modal Sensing, Real-Time Asset Monitoring ',
    industry: 'Oil & Gas, Energy, Infrastructure',
    solution: 'We deploy fiber optic sensing systems combined with advanced analytics to monitor acoustic, temperature, and strain signals. By correlating multiple sensing modalities, the system delivers accurate detection, reduces false alarms, and enables proactive pipeline management. ',
    finalThoughts: 'Pipeline Safety solutions enhance asset integrity and operational intelligence across critical infrastructure. ',
    keyBenefits: [
      { title: 'OPERATIONAL IMPACT', text: 'Detects leaks and intrusions early, reducing risk and improving response time.' },
      { title: 'SCALABLE FOUNDATION', text: 'Supports long-distance infrastructure with reliable, low-maintenance monitoring systems. ' }
    ]
  },
  'ai-analytics': {
    title: 'Artificial Intelligence & Analytics',
    description: 'Empowering industrial systems with predictive maintenance, computer vision, and autonomous decision-making.',
    intro: 'AI Analytics embeds intelligence into business processes using machine learning, predictive modeling, and generative AI to automate decisions, forecast outcomes, and optimize operations in real time. ',
    technology: 'Machine Learning, Generative AI, MLOps ',
    concept: 'Predictive Intelligence, Intelligent Automation',
    industry: 'Enterprise, Manufacturing, Energy, Digital Platforms ',
    solution: 'We develop AI-driven systems that analyze historical and real-time data to predict failures, detect anomalies, and automate workflows. From AI agents to forecasting models, our solutions continuously learn and evolve to improve accuracy and efficiency.',
    finalThoughts: 'AI Analytics transforms businesses from reactive operations to predictive and autonomous systems.',
    keyBenefits: [
      { title: 'OPERATIONAL IMPACT', text: 'Reduces manual effort, prevents failures, and improves efficiency through intelligent automation. ' },
      { title: 'SCALABLE FOUNDATION', text: 'Deploys adaptive AI models that continuously evolve with changing data and environments. ' }
    ]
  },
  'cloud-services': {
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and robust data lakes for secure, high-performance industrial data management.',
    intro: 'Flowtech Cloud Services enable organizations to build, migrate, and operate scalable, secure cloud environments that support modern data, AI, and enterprise workloads. ',
    technology: 'AWS, Azure, Cloud-Native Architecture ',
    concept: 'Cloud Transformation, Scalable Infrastructure ',
    industry: 'Enterprise, Technology, Manufacturing',
    solution: 'We design and implement cloud strategies, migrate workloads, and build cloud-native platforms for data and AI. With DevOps automation and secure architectures, organizations achieve faster deployments and optimized performance.',
    finalThoughts: 'Cloud Services provide the foundation for scalable, future-ready digital operations. ',
    keyBenefits: [
      { title: 'OPERATIONAL IMPACT', text: 'Improves agility, reduces infrastructure costs, and accelerates innovation. ' },
      { title: 'SCALABLE FOUNDATION', text: 'Enables flexible, secure environments that scale with business growth.  ' }
    ]
  },
  'sap-services': {
    title: 'SAP Services',
    description: 'Seamless integration of industrial IoT data with ERP systems for unified business and operational visibility.',
    intro: 'Flowtech SAP Services help organizations maximize the value of their SAP investments by enabling real-time analytics, seamless integration, and intelligent enterprise operations.',
    technology: 'SAP SAC, BW/4HANA, S/4HANA ',
    concept: 'Enterprise Intelligence, Integrated Business Systems ',
    industry: 'Manufacturing, Energy, Enterprise',
    solution: 'We implement and optimize SAP systems, integrating them with analytics platforms and operational systems. From data warehousing to real-time dashboards, we enable end-to-end enterprise visibility and performance management. ',
    finalThoughts: 'SAP Services transform enterprise systems into intelligent, insight-driven platforms. ',
    keyBenefits: [
      { title: 'OPERATIONAL IMPACT', text: 'Improves visibility, planning, and operational efficiency across business functions.' },
      { title: 'SCALABLE FOUNDATION', text: 'Supports enterprise-wide integration with flexible and future-ready SAP architectures.  ' }
    ]
  },
   'oracle-services': {
    title: 'Oracle Services',
    description: 'Seamless integration of industrial IoT data with ERP systems for unified business and operational visibility.',
    intro: 'Flowtech Oracle Services enable organizations to modernize enterprise systems, integrate data, and optimize performance using Oracle’s cloud, database, and analytics solutions. ',
    technology: 'Oracle Cloud, Oracle ERP, Oracle DB ',
    concept: 'Oracle Cloud, Oracle ERP, Oracle DB ',
    industry: 'Enterprise, Finance, Manufacturing',
    solution: 'We implement Oracle Cloud ERP, optimize database performance, and integrate enterprise systems into a unified ecosystem. Our solutions deliver real-time insights, automation, and improved operational control.  ',
    finalThoughts: 'Oracle Services help organizations modernize and streamline enterprise operations. ',
    keyBenefits: [
      { title: 'OPERATIONAL IMPACT', text: 'Oracle Services help organizations modernize and streamline enterprise operations.' },
      { title: 'SCALABLE FOUNDATION', text: 'Oracle Services help organizations modernize and streamline enterprise operations.  ' }
    ]
  }
};

const RichContent = ({ content }) => {
  if (!content) return null;

  return (
    <div className="flex flex-col gap-10">
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
            <ul className="flex flex-col gap-3 list-none pl-0">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 items-start group">
                  <div className="size-[6px] rounded-full bg-blue-500 mt-[9px] shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-['Geist'] text-[14px] md:text-[15px] text-white/70 group-hover:text-white transition-colors">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {section.table && (
            <div className="w-full overflow-x-auto rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <table className="w-full border-collapse text-left text-[14px] md:text-[15px]">
                <thead>
                  <tr className="bg-white/10">
                    {section.table.headers.map((header, i) => (
                      <th key={i} className="p-4 font-['Geist'] font-semibold text-white uppercase tracking-wider border-b border-white/10">
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
            <div key={i} className="flex flex-col gap-4 pl-0 md:pl-6 border-l-2 border-white/5 hover:border-blue-500/30 transition-colors">
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
                      <div className="size-[5px] rounded-full bg-blue-400/50 mt-[8px] shrink-0" />
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

const ServiceDetailsModal = ({ isOpen, onClose, data }) => {
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
        <div className="fixed  inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
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
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-white/5">
              <div className="flex flex-col gap-1">
                <h2 className="font-['Geist'] font-bold text-[24px] md:text-[32px] text-white leading-tight">
                  {data.title}
                </h2>
                <p className="font-['Playfair_Display'] italic text-[16px] md:text-[18px] text-blue-400">
                  {data.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="size-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <RichContent content={data} />
            </div>

            {/* Footer */}
            {/* <div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
               <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-['Geist'] font-medium transition-all hover:scale-105 active:scale-95"
              >
                Close
              </button>
            </div> */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

function TopSection({ data, onReadMore }) {
  return (
    <section className="flex flex-col gap-16 md:gap-32 items-center text-center pt-32 md:pt-60 px-6 overflow-hidden">
      {/* Title Area */}
      <ScrollFadeIn>
        <div className="max-w-[1222px] w-full flex flex-col gap-8 items-center">
          <div
            className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[40px] sm:text-[52px] md:text-[64px] text-transparent tracking-[-0.4px] leading-[1.1]"
            style={{ backgroundImage: "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}
          >
            <p>{data.title}</p>
          </div>
          <div className="flex flex-col font-['Geist'] font-normal text-[14px] md:text-[18px] text-white/70 uppercase max-w-[741px]">
            <p className="leading-relaxed">{data.description}</p>
          </div>
        </div>
      </ScrollFadeIn>

      <div className="max-w-[1260px] w-full flex flex-col gap-20 md:gap-[20px]">
        {/* Intro Section: Text & Image */}
        <ScrollFadeIn>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            {/* Category Wrap */}
            <div className="backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col gap-10 text-left relative overflow-hidden">
              <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit">
                <div className="size-[16px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">Introduction</span>
              </div>

              <div
                className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
                style={{ backgroundImage: "linear-gradient(269.536deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}
              >
                <p className="whitespace-pre-line">{data.intro}</p>
              </div>

              <div className="flex flex-col gap-0 border-t border-white/10 mt-auto pt-4">
                {[
                  { label: 'Technology', value: data.technology },
                  { label: 'Concept', value: data.concept },
                  { label: 'Industry', value: data.industry }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-white/10">
                    <span className="font-['Geist'] text-[14px] md:text-[16px] text-white/60 uppercase">{item.label}</span>
                    <span className="font-['Geist'] text-[14px] md:text-[16px] text-white mt-1 sm:mt-0 text-left sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Wrap */}
            <div className="flex-1 rounded-[7px] overflow-hidden min-h-[400px] md:min-h-[638px] relative">
              <ImageWithFallback alt="Service Graph" className="absolute inset-0 size-full object-cover" src={img3DGraphComputerIllustration1} />
            </div>
          </div>
        </ScrollFadeIn>

        {/* Category Image Wrap - Full Width */}
        <ScrollFadeIn>
          <div className="w-full aspect-video md:aspect-[1260/630] rounded-[7px] overflow-hidden relative">
            <ImageWithFallback alt="Service Dashboard" className="absolute inset-0 size-full object-cover" src={img3DGraphComputerIllustration1} />
          </div>

          {/* Solution Section: Image & Text */}
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="flex flex-col lg:flex-row gap-6 items-stretch h-auto lg:h-[650px]">
            <div className="flex-1 h-full rounded-[7px] overflow-hidden min-h-[400px] w-full relative">
              <ImageWithFallback alt="Interface" className="absolute inset-0 size-full object-cover" src={imgImage2} />
            </div>
            <div className="backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col text-left h-full">

              {/* Badge */}
              <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit">
                <div
                  className="size-[16px] bg-white"
                  style={{
                    maskImage: `url('${imgDivFramerIu4QG}')`,
                    maskSize: 'contain'
                  }}
                />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">
                  The Solution
                </span>
              </div>

              {/* Centered Content */}
              <div className="flex flex-col justify-center flex-1">
                <div
                  className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
                  style={{
                    backgroundImage:
                      "linear-gradient(269.291deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)"
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
            <ImageWithFallback alt="Service Visualization" className="absolute inset-0 size-full object-cover" src={img3DGraphComputerIllustration1} />
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          {/* Final Thoughts Section */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch h-auto lg:h-[646px]">
            <div className="backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col text-left h-full">

              {/* Top Badge */}
              <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit">
                <div
                  className="size-[16px] bg-white"
                  style={{
                    maskImage: `url('${imgDivFramerIu4QG}')`,
                    maskSize: 'contain'
                  }}
                />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">
                  Final thoughts
                </span>
              </div>

              {/* Centered Content */}
              <div className="flex flex-col justify-center flex-1 gap-10">

                <div
                  className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
                  style={{
                    backgroundImage:
                      "linear-gradient(269.177deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)"
                  }}
                >
                  <p>{data.finalThoughts}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 items-start pt-8 border-t border-white/10">

                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex gap-2 items-center">
                      <div className="size-[18px]">
                        <ImageWithFallback
                          src={imgIcon}
                          alt=""
                          className="size-full object-contain"
                        />
                      </div>

                      <span className="font-['Geist'] font-medium text-[14px] md:text-[16px] text-white uppercase whitespace-nowrap">
                        {data.keyBenefits[0].title}
                      </span>
                    </div>

                    <p className="font-['Geist'] text-[12px] md:text-[14px] text-white/70 uppercase leading-relaxed text-left">
                      {data.keyBenefits[0].text}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex gap-2 items-center">
                      <div className="size-[18px]">
                        <ImageWithFallback
                          src={imgIcon1}
                          alt=""
                          className="size-full object-contain"
                        />
                      </div>

                      <span className="font-['Geist'] font-medium text-[14px] md:text-[16px] text-white uppercase whitespace-nowrap">
                        {data.keyBenefits[1].title}
                      </span>
                    </div>

                    <p className="font-['Geist'] text-[12px] md:text-[14px] text-white/70 uppercase leading-relaxed text-left">
                      {data.keyBenefits[1].text}
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="flex-1 h-full rounded-[7px] overflow-hidden min-h-[400px] w-full relative">
              <ImageWithFallback alt="Interface" className="absolute inset-0 size-full object-cover" src={imgImage2} />
            </div>
          </div>
          </ScrollFadeIn>
        {/* Read More Section */}
        <ScrollFadeIn>
          <div className="flex justify-center md:mt-20">
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
              Read More
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
  
  // existing serviceData for page content
  const currentService = (serviceId && serviceData[serviceId]) ? serviceData[serviceId] : serviceData['energy-monitoring'];
  
  // fullServiceDetails from PDF for modal content
  const detailedService = (serviceId && fullServiceDetails[serviceId]) ? fullServiceDetails[serviceId] : fullServiceDetails['analytics'];

  return (
    <div className="relative z-10 w-full flex flex-col items-center">
      <TopSection data={currentService} onReadMore={() => setIsModalOpen(true)} />
      
      <ServiceDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={detailedService} 
      />

      <div className="w-full mt-16 md:mt-20">
        <ContactSection />
        <RotationCardSection />
        <BlogSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default ServicePage;
