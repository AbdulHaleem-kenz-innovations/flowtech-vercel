import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FooterSection } from '../components/footer-section';
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

// Assets from 1920WLight-22-2100.tsx
import imgSimonKadula8Gr6BObQloiUnsplash1 from "../../assets/e1dcc9e435ab91cb6be407673593b96ed5fd1213.png";
import imgRoboticArmPlacingChipCircuitBoard1 from "../../assets/44f0628d039c5c4462b35e023fd207b769c6c4bb.png";
import imgAuthorImage from "../../assets/d1986fe5d6cbb1975d0b296dceae5f38409b5f54.png";
import imgVector from "../../assets/bd8e69885427a49b2b47477a2091c568af8d612c.png";
import imgBrettJordanAfbBhcXeEiUnsplash1 from "../../assets/160918d3c1ae836f98580b56793925e5366b310a.png";
import imgIcon from "../../assets/2372b9fca56ab7b15568aca9e51b649f887db747.png";
import imgVictorUoIiVYka3VyUnsplash1 from "../../assets/d13ce970613ef8a883efa59e168e7ec2c548ae6a.png";
import imgFuturisticTechnologyConcept1 from "../../assets/590501c6813c5415ccfadb50476ec414a3dccddb.png";
import imgImage from "../../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";
import { Twitter, Instagram, Slack, Github } from 'lucide-react';

// SVGs
import { imgDivFramerYVnZo, imgDivFramerFoIvU, imgGroup, imgGroup1, imgGroup2, imgDivFramerIu4QG1, imgDivFramerIu4QG3, imgDivFramerIu4QG4 } from "../../imports/svg-7bw06";
import svgPaths from "../../imports/svg-4h9mwqx04v";
import { NewsletterSection } from '../components/newsletter-section';

const BlogCard = ({ title, image, author = "FLOWTECH TEAM", isRtl, t }) => (
  <motion.div
    className="bg-white rounded-[7px] p-6 flex flex-col gap-6 relative group cursor-pointer text-start"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="flex justify-end h-[120px]">
      <div className="w-[110px] h-full rounded-[7px] overflow-hidden">
        <ImageWithFallback src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1.5 opacity-50">
        <span className="font-['Geist'] font-semibold text-[11px] text-black uppercase tracking-wider">{t.author.label}</span>
        <span className="font-['Geist'] font-semibold text-[11px] text-black uppercase tracking-wider">{author}</span>
      </div>
      <h3 className="font-['Geist'] font-medium text-[20px] text-black leading-tight">
        {title}
      </h3>
      <div className="group inline-flex items-center cursor-pointer overflow-hidden">
        <div className="bg-black p-3 rounded-lg flex items-center gap-2
                                                           transition-all duration-300 ease-in-out
                                                           group-hover:bg-gradient-to-tr
                                                           group-hover:from-[#001ca9]
                                                           group-hover:to-[#046ce4]">

          {/* Text (hidden initially) */}
          <span className={`text-white whitespace-nowrap max-w-0 opacity-0 ${isRtl ? 'translate-x-2' : '-translate-x-2'} group-hover:max-w-[80px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out`}>
            {t.ui.view_cta}
          </span>

          {/* Arrow (always visible, but slides) */}
          <div
            className={`size-5 bg-white shrink-0 transition-all duration-300 ease-in-out ${isRtl ? 'group-hover:-translate-x-1 scale-x-[-1]' : 'group-hover:translate-x-1'}`}
            style={{
              maskImage: `url('${imgIcon}')`,
              maskSize: 'contain',
              WebkitMaskImage: `url('${imgIcon}')`,
              WebkitMaskSize: 'contain',
            }}
          />
        </div>
      </div>
    </div>

    {/* Small tag icon at top left */}
    <div className="absolute top-5 start-5 opacity-40">
      <div className="w-5 h-5 bg-black" style={{ maskImage: `url('${imgDivFramerIu4QG4}')`, maskSize: 'contain' }} />
    </div>
  </motion.div>
);

const BlogDetailPage = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const isRtl = language === 'AR';
  const t = langData[language.toLowerCase()].blog_detail;
  const insightsT = langData[language.toLowerCase()].insights_page;
  
  const socialIcons = [
    { Icon: Twitter, href: "#", label: "X (Twitter)" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Slack, href: "#", label: "Slack" },
    { Icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <div className="w-full flex flex-col items-center" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header Info */}
      <section className="pt-[180px] pb-[80px] px-6 text-center max-w-[1260px] w-full flex flex-col items-center gap-10">
        <div className="flex gap-[5px] items-center justify-center">
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex gap-[5px] items-center justify-center px-[13px] py-[6px] rounded-[30px]">
            <div className="w-[13px] h-[13px] bg-white" style={{ maskImage: `url('${imgDivFramerYVnZo}')`, maskSize: 'contain' }} />
            <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-[0.2px] uppercase">{t.meta.date}</span>
          </div>
          <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.1)] flex gap-[5px] items-center justify-center px-[13px] py-[6px] rounded-[30px]">
            <div className="w-[13px] h-[13px] bg-white" style={{ maskImage: `url('${imgDivFramerFoIvU}')`, maskSize: 'contain' }} />
            <span className="font-['Geist'] font-semibold text-[11px] text-white tracking-[0.2px] uppercase">{t.meta.category}</span>
          </div>
        </div>

        <h1 className="font-['Geist'] font-medium text-[30px] md:text-[60px] text-center text-white tracking-[-0.4px] max-w-[1000px] leading-tight">
          {t.title}
        </h1>

        <p className="font-['Geist'] font-normal text-[16px] md:text-[18px] text-center text-white/70 uppercase tracking-widest max-w-[800px]">
          {t.subtitle}
        </p>
      </section>

      {/* Main Image */}
      <section className="px-6 w-full max-w-[1260px] mb-10 md:mb-20">
        <div className="aspect-[1260/681] rounded-[7px] overflow-hidden">
          <ImageWithFallback src={imgSimonKadula8Gr6BObQloiUnsplash1} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Blog Content */}
      <section className="px-6 w-full max-w-[850px] flex flex-col gap-12 mb-32">
        <div className="flex flex-col gap-6 text-[16px] md:text-[18px] text-white/75 uppercase leading-relaxed font-['Geist'] text-start">
          <p>{t.content.p1}</p>
          <p>{t.content.p2}</p>
        </div>

        <div className="flex flex-col gap-6 text-start">
          <h2 className="font-['Geist'] font-medium text-[24px] md:text-[28px] text-white tracking-tight">
            {t.content.h2_1}
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/75 uppercase leading-relaxed font-['Geist']">
            {t.content.p3}
          </p>
        </div>

        <div className="ps-6 border-s-2 border-white/20 text-start">
          <blockquote className="font-['Playfair_Display'] italic text-[24px] md:text-[32px] text-white leading-tight">
            “{t.content.quote}”
          </blockquote>
        </div>

        <div className="flex flex-col gap-6 text-[16px] md:text-[18px] text-white/75 uppercase leading-relaxed font-['Geist'] text-start">
          <p>{t.content.p4}</p>
        </div>

        <div className="flex flex-col gap-8 text-start">
          <h2 className="font-['Geist'] font-medium text-[24px] md:text-[28px] text-white tracking-tight">
            {t.content.h2_2}
          </h2>
          <div className="flex flex-col gap-6 text-[16px] md:text-[18px] text-white/75 uppercase leading-relaxed font-['Geist']">
            <p>{t.content.p5}</p>
            <ul className="list-disc ps-6 flex flex-col gap-4">
              {t.content.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t.content.p6}</p>
          </div>
        </div>

        {/* Second Image */}
        <div className="aspect-[1260/681] rounded-[7px] overflow-hidden">
          <ImageWithFallback src={imgRoboticArmPlacingChipCircuitBoard1} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-8 text-start">
          <h2 className="font-['Geist'] font-medium text-[24px] md:text-[28px] text-white tracking-tight">
            {t.content.h2_3}
          </h2>
          <div className="flex flex-col gap-6 text-[16px] md:text-[18px] text-white/75 uppercase leading-relaxed font-['Geist']">
            <p>{t.content.p7}</p>
            <p>{t.content.p8}</p>
          </div>
        </div>

        {/* Author Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/10 text-start">
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] rounded-[7px] overflow-hidden">
              <ImageWithFallback src={imgAuthorImage} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Geist'] text-[12px] text-white/50 uppercase tracking-widest">{t.author.label}</span>
              <span className="font-['Geist'] text-[16px] text-white uppercase font-medium">{t.author.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-['Geist'] text-[14px] text-white/50 uppercase tracking-widest">
              {t.author.keep_in_touch}
            </span>

            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full -mt-25 py-16 px-6 flex flex-col items-center">
        <div className="max-w-[1260px] w-full">
          <div className="flex flex-col gap-6 items-center text-center mb-20">
            <div className="backdrop-blur-md bg-white/5 px-4 py-2 rounded-md border border-white/10 flex items-center gap-2 w-fit">
              <div className="w-4 h-4 bg-white" style={{ maskImage: `url('${imgDivFramerIu4QG3}')`, maskSize: 'contain' }} />
              <span className="font-['Geist'] font-semibold text-[11px] text-white uppercase tracking-widest">{t.related.badge}</span>
            </div>
            <h2 className="flex flex-col gap-2">
              <span className="font-['Geist'] font-medium text-[30px] md:text-[44px] text-white leading-tight">{t.related.title_p1} <span className="font-['Playfair_Display'] italic text-white/70">{t.related.title_p2}</span></span>
              <span className="font-['Playfair_Display'] italic font-normal text-[30px] md:text-[44px] text-white/80 leading-tight">{t.related.title_p3} <span className="font-['Geist'] font-medium not-italic text-white">{t.related.title_p4}</span></span>
            </h2>
            <div className="mt-4">
              <Link to="/insights" className="     relative overflow-hidden
              flex items-center justify-center
              w-full sm:w-auto
              px-8 py-4
              rounded-full
              bg-[linear-gradient(78deg,#001CA9_0%,#046CE4_100%)]
              border border-white/20
              text-white uppercase whitespace-nowrap
              font-['Geist'] text-[16px]
              cursor-pointer
              transition-all duration-300 
              hover:scale-105 active:scale-95 
              glare-btn">
                {t.related.cta}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard
              title={insightsT.posts[1].title}
              image={imgBrettJordanAfbBhcXeEiUnsplash1}
              isRtl={isRtl}
              t={t}
            />
            <BlogCard
              title={insightsT.posts[2].title}
              image={imgVictorUoIiVYka3VyUnsplash1}
              isRtl={isRtl}
              t={t}
            />
            <BlogCard
              title={insightsT.posts[6].title}
              image={imgFuturisticTechnologyConcept1}
              isRtl={isRtl}
              t={t}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}

      <NewsletterSection />

      <FooterSection />
    </div>
  );
};
export default BlogDetailPage;