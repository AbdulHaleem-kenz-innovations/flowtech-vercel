import React from 'react';
import { useParams } from 'react-router';
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

const serviceData = {
  'manufacturing': {
    title: 'Manufacturing Intelligence (MI)',
    description: 'Advanced data-driven insights to monitor production, optimise quality, and drive industrial excellence.',
    intro: 'Manufacturing Intelligence (MI) enables real-time visibility into production processes across machines, lines, and plants. It integrates data from PLC and SCADA systems into a centralized platform, helping organizations monitor, analyze, and optimize manufacturing performance.',
    technology: 'Industrial IoT, AI/ML, Edge Computing',
    concept: 'Data-Driven Production, Predictive Quality',
    industry: 'Automotive, Consumer Goods, Heavy Industry',
    solution: 'We deliver an advanced manufacturing intelligence platform designed to optimize production cycles, reduce waste, and improve product quality. Real-time machine monitoring and predictive maintenance identify issues before they occur, while automated reporting ensures compliance and operational transparency.'
  },
  'energy-monitoring': {
    title: 'Energy Monitoring System (EMS)',
    description: 'Real-time energy intelligence to monitor consumption, optimise efficiency, and drive sustainable operations.',
    intro: 'Energy Monitoring System (EMS) enables real-time visibility into energy consumption across equipment, utilities, and facilities. It integrates data from sensors and meters into a centralized platform, helping organizations monitor, analyze, and optimize energy usage.',
    technology: 'IoT Sensors, Edge Devices, Cloud Analytics',
    concept: 'Real-time Monitoring, Energy Intelligence Platform',
    industry: 'Utilities, Manufacturing, Industrial Enterprises',
    solution: 'We deliver an advanced energy monitoring system designed to optimize consumption, reduce operational costs, and improve efficiency. Real-time data acquisition and intelligent analytics provide complete visibility into energy usage, while automated alerts help identify anomalies and prevent losses.'
  },
  'pipeline-safety': {
    title: 'Pipeline Safety (DFOS)',
    description: 'Distributed fiber optic sensing for real-time pipeline monitoring, leak detection, and infrastructure security.',
    intro: 'Pipeline Safety solutions utilize Distributed Fiber Optic Sensing (DFOS) technology to provide continuous, real-time monitoring of critical pipeline infrastructure. It detects leaks, third-party interference, and structural changes with unmatched precision.',
    technology: 'DFOS, Acoustic Sensing, Thermal Analysis',
    concept: 'Infrastructure Integrity, Leak Detection',
    industry: 'Oil & Gas, Water Distribution, Mining',
    solution: 'Our safety platform integrates DFOS technology to transform pipelines into smart sensors. By analyzing acoustic and thermal vibrations, we provide real-time alerts for leaks, ground movement, or unauthorized excavation, ensuring the safety of personnel and the environment.'
  },
  'ai-analytics': {
    title: 'Artificial Intelligence & Analytics',
    description: 'Empowering industrial systems with predictive maintenance, computer vision, and autonomous decision-making.',
    intro: 'Our AI & Analytics solutions transform raw industrial data into actionable intelligence. By leveraging machine learning models and computer vision, we enable predictive maintenance, anomaly detection, and autonomous process optimization.',
    technology: 'Deep Learning, Computer Vision, Big Data',
    concept: 'Autonomous Operations, Predictive Insights',
    industry: 'Cross-industry Industrial Applications',
    solution: 'We build custom AI models tailored to industrial challenges. From automated visual inspection of parts to complex forecasting of energy demand, our analytics platform empowers teams to make decisions based on patterns invisible to the human eye.'
  },
  'cloud-data': {
    title: 'Cloud & Data Platforms',
    description: 'Scalable cloud infrastructure and robust data lakes for secure, high-performance industrial data management.',
    intro: 'Cloud & Data Platforms provide the foundation for modern industrial digital transformation. We build secure, scalable environments that handle massive streams of sensor data, enabling seamless global accessibility and advanced processing.',
    technology: 'Azure/AWS, Data Lakes, Snowflake',
    concept: 'Scalable Infrastructure, Data Democratization',
    industry: 'Enterprise Manufacturing, Global Energy',
    solution: 'Our cloud architecture is designed for the high-velocity, high-volume nature of industrial IoT. We ensure data security and sovereignty while providing low-latency access to critical information across your entire global organization.'
  },
  'sap-oracle': {
    title: 'SAP & Oracle Solutions',
    description: 'Seamless integration of industrial IoT data with ERP systems for unified business and operational visibility.',
    intro: 'Our ERP Integration solutions bridge the gap between the factory floor and the boardroom. We specialize in connecting real-time industrial data with SAP and Oracle platforms, ensuring financial and operational alignment.',
    technology: 'SAP S/4HANA, Oracle ERP, IoT Connectors',
    concept: 'Enterprise Connectivity, Real-time ERP',
    industry: 'Global Enterprises, Supply Chain Hubs',
    solution: 'We provide specialized connectors that feed live operational data directly into your ERP system. This eliminates data silos, reduces manual entry errors, and provides executives with an accurate, real-time view of business costs and performance.'
  }
};

function TopSection({ data }) {
  return (
    <section className="flex flex-col gap-16 md:gap-32 items-center text-center pt-32 md:pt-60 px-6 overflow-hidden">
      {/* Title Area */}
      <div className="max-w-[1222px] w-full flex flex-col gap-8 items-center">
        <div
          className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[40px] sm:text-[72px] md:text-[100px] text-transparent tracking-[-0.4px] leading-[1.1]"
          style={{ backgroundImage: "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}
        >
          <p>{data.title}</p>
        </div>
        <div className="flex flex-col font-['Geist'] font-normal text-[14px] md:text-[18px] text-white/70 uppercase max-w-[741px]">
          <p className="leading-relaxed">{data.description}</p>
        </div>
      </div>

      <div className="max-w-[1260px] w-full flex flex-col gap-20 md:gap-[80px]">
        {/* Intro Section: Text & Image */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Category Wrap */}
          <div className="backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col gap-10 text-left relative overflow-hidden">
            <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit">
              <div className="size-[16px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
              <span className="font-['Geist:SemiBold'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">Introduction</span>
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
                  <span className="font-['Geist'] text-[14px] md:text-[16px] text-white uppercase mt-1 sm:mt-0 text-left sm:text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Wrap */}
          <div className="flex-1 rounded-[7px] overflow-hidden min-h-[400px] md:min-h-[638px] relative">
            <ImageWithFallback alt="Service Graph" className="absolute inset-0 size-full object-cover" src={img3DGraphComputerIllustration1} />
          </div>
        </div>

        {/* Category Image Wrap - Full Width */}
        <div className="w-full aspect-video md:aspect-[1260/630] rounded-[7px] overflow-hidden relative">
          <ImageWithFallback alt="Service Dashboard" className="absolute inset-0 size-full object-cover" src={img3DGraphComputerIllustration1} />
        </div>

        {/* Solution Section: Image & Text */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch h-auto lg:h-[650px]">
          <div className="flex-1 h-full rounded-[7px] overflow-hidden min-h-[400px] w-full relative">
            <ImageWithFallback alt="Interface" className="absolute inset-0 size-full object-cover" src={imgImage2} />
          </div>
          <div className="backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col gap-10 text-left">
            <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit">
              <div className="size-[16px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
              <span className="font-['Geist:SemiBold'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">The Solution</span>
            </div>
            <div
              className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
              style={{ backgroundImage: "linear-gradient(269.291deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}
            >
              <p>{data.solution}</p>
            </div>
          </div>
        </div>

        {/* Full width Image */}
        <div className="w-full aspect-video md:aspect-[1260/630] rounded-[7px] overflow-hidden relative mt-12 md:mt-20">
          <ImageWithFallback alt="Service Visualization" className="absolute inset-0 size-full object-cover" src={img3DGraphComputerIllustration1} />
        </div>

        {/* Final Thoughts Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch h-auto lg:h-[646px] mt-12 md:mt-20">
          <div className="backdrop-blur-[25px] bg-white/10 flex-1 p-8 md:p-[50px] rounded-[7px] flex flex-col gap-10 text-left h-full">
            <div className="backdrop-blur-[20px] bg-white/10 px-3 py-1.5 rounded-full flex gap-2 items-center w-fit">
              <div className="size-[16px] bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG}')`, maskSize: 'contain' }} />
              <span className="font-['Geist:SemiBold'] font-semibold text-[10px] md:text-[11px] text-white uppercase tracking-wider">Final thoughts</span>
            </div>
            <div
              className="bg-clip-text flex flex-col font-['Geist'] font-medium text-[20px] md:text-[23px] text-transparent tracking-tight leading-relaxed"
              style={{ backgroundImage: "linear-gradient(269.177deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}
            >
              <p>Our {data.title} plays a critical role in optimizing operations, helping organizations reduce costs while improving efficiency and sustainability across global facilities.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start mt-auto pt-8 border-t border-white/10">
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex gap-2 items-center">
                  <div className="size-[18px]">
                    <ImageWithFallback src={imgIcon} alt="" className="size-full object-contain" />
                  </div>
                  <span className="font-['Geist'] font-medium text-[14px] md:text-[16px] text-white uppercase whitespace-nowrap">OPERATIONAL IMPACT</span>
                </div>
                <p className="font-['Geist'] text-[12px] md:text-[14px] text-white/70 uppercase leading-relaxed text-left">THIS SOLUTION GOES BEYOND MONITORING — IT ENABLES SMART MANAGEMENT WITH REAL-TIME VISIBILITY, PROACTIVE ALERTS, AND CONTINUOUS OPTIMISATION.</p>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex gap-2 items-center">
                  <div className="size-[18px]">
                    <ImageWithFallback src={imgIcon1} alt="" className="size-full object-contain" />
                  </div>
                  <span className="font-['Geist'] font-medium text-[14px] md:text-[16px] text-white uppercase whitespace-nowrap">SCALABLE FOUNDATION</span>
                </div>
                <p className="font-['Geist'] text-[12px] md:text-[14px] text-white/70 uppercase leading-relaxed text-left">OUR PLATFORM IS BUILT TO SCALE ACROSS MULTIPLE SITES, PROVIDING A CONNECTED, DATA-DRIVEN APPROACH TO EFFICIENCY AND LONG-TERM PERFORMANCE.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full rounded-[7px] overflow-hidden min-h-[400px] w-full relative">
            <ImageWithFallback alt="Interface" className="absolute inset-0 size-full object-cover" src={imgImage2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export const ServicePage = () => {
  const { serviceId } = useParams();
  const currentService = (serviceId && serviceData[serviceId]) ? serviceData[serviceId] : serviceData['energy-monitoring'];

  return (
    <div className="relative z-10 w-full flex flex-col items-center">
      <TopSection data={currentService} />
      <div className="w-full mt-16 md:mt-32">
        <ContactSection />
        <RotationCardSection />
        <BlogSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default ServicePage;
