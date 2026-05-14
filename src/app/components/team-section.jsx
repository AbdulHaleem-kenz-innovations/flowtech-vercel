import React, { useState } from "react";
import { 
  Instagram, 
  Twitter, 
  Github, 
  Linkedin, 
  Dribbble, 
  PlusIcon 
} from "lucide-react";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import { imgDivFramerIu4QG, imgDivFramerIu4QG1 } from "../../imports/svg-34ssx";
import { useLanguage } from "../../context/LanguageContext";
import { langData } from "../../langData/data";
import imgTeamImage from "../../assets/25593f754374bc769956c2480da019422fc09dd7.png";
import imgTeamImage1 from "../../assets/28664606051f8506026c69bed106cd92d3ebbb23.png";
import imgTeamImage2 from "../../assets/a85c1f3a6e2999097b681b0543e4f8c40a594808.png";
import imgTeamImage3 from "../../assets/a36dc06bf52f150ae73b147605fcf1f068424de7.png";
import imgTeamImage4 from "../../assets/e4a89e3d441973ce4d201b8a267e257b238d44bf.png";
import imgTeamImage5 from "../../assets/d1986fe5d6cbb1975d0b296dceae5f38409b5f54.png";
import imgTeamImage6 from "../../assets/1ab2cead734fbf40f3614daca8f587b2c28c7db4.png";
import imgVector from "../../assets/7f8f7db1b24bd3f3db04f6c6928d30f25bc8e3f5.png";
import imgVector1 from "../../assets/f9904e1428f23b9e83ae11dd28353beb0bbd42fc.png";
import imgVector2 from "../../assets/52dbe64cfeea740ffa579ab7ca8d3b864a141982.png";
import imgVector3 from "../../assets/8359590f5a074bbac33ab163e573171201184996.png";



const members = [
  {
    id: 1,
    name: "Marcus Leclerc",
    role: "Chief Technology Officer",
    image: imgTeamImage,
    socials: [Instagram, Twitter, Dribbble],
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "UI Designer",
    image: imgTeamImage1,
    socials: [Instagram, Twitter],
  },
  {
    id: 3,
    name: "David Kim",
    role: "Frontend Developer",
    image: imgTeamImage6,
    socials: [Github, Twitter],
  },

  // ✅ Added 3 more
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Product Manager",
    image: imgTeamImage6,
    socials: [Instagram, Linkedin],
  },
  {
    id: 5,
    name: "Liam Patel",
    role: "Backend Engineer",
    image: imgTeamImage4,
    socials: [Github, Linkedin],
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    role: "Product Manager",
    image: imgTeamImage6,
    socials: [Instagram, Linkedin],
  },
  {
    id: 7,
    name: "Liam Patel",
    role: "Backend Engineer",
    image: imgTeamImage4,
    socials: [Github, Linkedin],
  },
  {
    id: 8,
    name: "Noah Smith",
    role: "UX Researcher",
    image: imgTeamImage5,
    socials: [Instagram, Dribbble],
  },
];




const TeamGallery = ({ members }) => {
  const [selected, setSelected] = useState(members[0]);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">

      {/* 🔹 LEFT GRID */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {members.map((member) => (
          <button
            key={member.id}
            onClick={() => setSelected(member)}
            className={`relative h-[160px] sm:h-[250px] rounded-xl overflow-hidden group border transition-all duration-300
            ${selected.id === member.id
                ? "border-white"
                : "border-white/10"
              }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover transition duration-500
              ${selected.id === member.id
                  ? "scale-110"
                  : "group-hover:scale-110"
                }`}
            />

            {/* Overlay */}
            <div className={`absolute inset-0 transition duration-300
            ${selected.id === member.id
                ? "bg-black/20"
                : "bg-black/40 group-hover:bg-black/20"
              }`} />

            {/* Plus icon */}
            <div className="absolute top-2 end-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
              +
            </div>
          </button>
        ))}
      </div>

      {/* 🔹 RIGHT FEATURED */}
      <div className="relative rounded-2xl overflow-hidden
                      aspect-[3/4] lg:aspect-auto   max-w-full">

        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-full object-cover transition-transform duration-500 scale-110"
        />

        {/* Info Card */}
        <div className="absolute bottom-4 start-4 end-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h2 className="text-lg font-semibold text-black">
            {selected.name}
          </h2>

          <p className="text-sm text-gray-600">
            {selected.role}
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-3 text-gray-500">
            {selected.socials?.map((Icon, i) => (
              <span
                key={i}
                className="hover:text-black cursor-pointer transition-colors"
              >
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* 🔹 Section Wrapper */
export function TeamSection() {
  const { language } = useLanguage();
  const t = langData[language.toLowerCase()].team_section;

  // Combine static member data with translations
  const localizedMembers = members.map((member, index) => ({
    ...member,
    name: t.members[index]?.name || member.name,
    role: t.members[index]?.role || member.role
  }));

  return (
    <ScrollFadeIn>
      <section className="w-full flex justify-center py-10 md:py-16 px-6 md:px-8 ">
        <div className="max-w-[1260px] w-full flex flex-col gap-12 md:gap-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="flex flex-col gap-5 items-start">
              <div className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.07)] flex gap-[5px] items-center px-[11px] py-[5px] rounded-[5px]">
                <PlusIcon size={16} />
                <span className="font-['Geist'] font-semibold text-[10px] md:text-[11px] text-white tracking-[0.2px] uppercase">{t.badge}</span>
              </div>
              <div className="flex items-center">
                <span className="bg-clip-text font-['Geist'] font-medium text-[40px] md:text-[60px] text-[transparent] tracking-[-0.4px] leading-tight" style={{ backgroundImage: "linear-gradient(268.918deg, rgba(255, 255, 255, 0.4) 5%, rgb(255, 255, 255) 50%)" }}>{t.title_p1}&nbsp;</span>
                <span className="font-['Playfair_Display'] italic text-[#d9d9d9] text-[40px] md:text-[60px] tracking-[-0.4px] leading-tight">{t.title_italic}</span>
              </div>
            </div>
            <div className="max-w-[400px] opacity-70">
              <p className="font-['Geist'] font-normal text-[14px] md:text-[16px] text-white uppercase leading-[1.4] md:leading-[22.4px]">
                {t.description}
              </p>
            </div>
            <button
              className=" relative overflow-hidden
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
              {t.join_us}
            </button>
          </div>
          <TeamGallery members={localizedMembers} />
        </div>
      </section>
    </ScrollFadeIn>
  );
}
