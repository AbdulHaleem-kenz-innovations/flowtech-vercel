import { ImageWithFallback } from './figma/ImageWithFallback';
import imgImage from "../../assets/2f8c3a2c8eca26d65de115305cf49c0c2f3513ea.png";
import { useLanguage } from '../../context/LanguageContext';
import { langData } from '../../langData/data';

export const NewsletterSection = () => {
  const { language } = useLanguage();
  const isRtl = language === 'AR';
  const t = langData[language.toLowerCase()].newsletter_section;

  return (
    <section className="w-full max-w-[1260px] px-6 py-10 md:py-16 flex flex-col lg:flex-row gap-20 items-center mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="flex-1 relative">
         <div className="aspect-[364/470] max-w-[364px] rounded-[7px] overflow-hidden relative group">
           <ImageWithFallback src={imgImage} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/30" />
           
           <div className="absolute bottom-6 start-6 text-start">
              <div className="flex items-center gap-2">
                <span className="font-['Geist'] font-medium text-[23px] text-white">{t.name}</span>
                <span className="font-['Playfair_Display'] text-[23px] text-white/80 italic">{t.surname}</span>
              </div>
              <p className="font-['Geist'] text-[14px] text-white/80 uppercase">{t.role}</p>
           </div>

           <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                 <div className={`w-0 h-0 border-y-[10px] border-y-transparent ${isRtl ? 'border-r-[15px] border-r-white mr-1' : 'border-l-[15px] border-l-white ml-1'}`} />
              </button>
           </div>
         </div>
      </div>

      <div className="flex-1 flex flex-col gap-8">
         <div className="flex flex-col gap-4">
            <h2 className="bg-clip-text bg-gradient-to-r from-white to-white/40 font-['Geist'] font-medium text-[44px] text-transparent tracking-tight">
              {t.title_p1}
            </h2>
            <p className="font-['Playfair_Display'] italic text-[44px] text-white/80 leading-none">{t.title_italic}</p>
         </div>
         
         <p className="font-['Geist'] text-white/70 text-[16px] leading-relaxed max-w-[480px]">
           {t.description}
         </p>

         <form className="flex flex-col gap-4 w-full max-w-[400px]">
            <div className="flex flex-col gap-2">
              <label className="font-['Geist'] text-[12px] text-white/50 uppercase tracking-widest">{t.input_name}</label>
              <input 
                type="text" 
                placeholder={t.placeholder_name}
                className="bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-['Geist'] text-[12px] text-white/50 uppercase tracking-widest">{t.input_email}</label>
              <input 
                type="email" 
                placeholder={t.placeholder_email}
                className="bg-white/5 border border-white/10 rounded-md p-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button 
              type="submit"
              className=" relative overflow-hidden
    flex items-center justify-center

    w-full mx-auto sm:mx-0   /* 👈 key change */

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
    glare-btn"
            >
              {t.cta}
            </button>
         </form>
      </div>
    </section>
  );
};
