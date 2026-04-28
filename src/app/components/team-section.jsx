// import React from 'react';
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
import { imgDivFramerIu4QG, imgDivFramerIu4QG1 } from "../../imports/svg-34ssx";



const members = [
  {
    id: 1,
    name: "Marcus Leclerc",
    role: "Chief Technology Officer",
    image: imgTeamImage,
    socials: ["IG", "X", "Dribbble"],
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "UI Designer",
    image: imgTeamImage1,
    socials: ["IG", "X"],
  },
  {
    id: 3,
    name: "David Kim",
    role: "Frontend Developer",
    image: imgTeamImage6,
    socials: ["GitHub", "X"],
  },

  // ✅ Added 3 more
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Product Manager",
    image: imgTeamImage6,
    socials: ["IG", "LinkedIn"],
  },
  {
    id: 5,
    name: "Liam Patel",
    role: "Backend Engineer",
    image: imgTeamImage4,
    socials: ["GitHub", "LinkedIn"],
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Product Manager",
    image: imgTeamImage6,
    socials: ["IG", "LinkedIn"],
  },
  {
    id: 5,
    name: "Liam Patel",
    role: "Backend Engineer",
    image: imgTeamImage4,
    socials: ["GitHub", "LinkedIn"],
  },
  {
    id: 6,
    name: "Noah Smith",
    role: "UX Researcher",
    image: imgTeamImage5,
    socials: ["IG", "Dribbble"],
  },
];


import React, { useState } from "react";

const TeamGallery = ({ members }) => {
  const [selected, setSelected] = useState(members[0]);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20">

      {/* 🔹 LEFT GRID */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {members.map((member) => (
          <button
            key={member.id}
            onClick={() => setSelected(member)}
            className={`relative aspect-square rounded-xl overflow-hidden group border transition-all duration-300
            ${selected.id === member.id
                ? "border-white scale-[1.03]"
                : "border-white/10 hover:border-white/40"
              }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

            {/* Plus icon */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
              +
            </div>
          </button>
        ))}
      </div>

      {/* 🔹 RIGHT FEATURED */}
      <div className="relative rounded-2xl overflow-hidden
                      aspect-[3/4] lg:aspect-auto ">

        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-full object-cover"
        />

        {/* Info Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg">
          <h2 className="text-lg font-semibold text-black">
            {selected.name}
          </h2>

          <p className="text-sm text-gray-600">
            {selected.role}
          </p>

          {/* Socials */}
          <div className="flex gap-3 mt-2 text-gray-500 text-sm">
            {selected.socials?.map((icon, i) => (
              <span
                key={i}
                className="hover:text-black cursor-pointer transition"
              >
                {icon}
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
  return (
    <section className="w-full flex justify-center py-16 md:py-[120px] px-6 md:px-8 ">
      <div className="max-w-[1260px] w-full flex flex-col gap-12 md:gap-20">
        <TeamGallery members={members} />
      </div>
    </section>
  );
}
