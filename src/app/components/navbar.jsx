// import React, { useState } from 'react';
// import { Link } from 'react-router';
// import svgPaths from "../../imports/svg-w7xqzyo252";
// import { ServicesDropdown } from './services-dropdown';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-[1260px] z-50">
//         <div className="backdrop-blur-[25px] bg-black/40 md:bg-white/5 border border-white/20 rounded-2xl md:rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between relative">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
//             <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
//               <path d={svgPaths.p375f8780} fill="white" />
//               <path d={svgPaths.p313b85c0} fill="white" />
//               <path d={svgPaths.p263bfa00} fill="white" />
//               <path d={svgPaths.p32dad680} fill="white" />
//               <path d={svgPaths.p26351200} fill="white" />
//               <path d={svgPaths.p669ed00} fill="white" />
//               <path d={svgPaths.p2a5f400} fill="white" />
//               <path d={svgPaths.p3532ea00} fill="white" />
//               <path d={svgPaths.p81a6080} fill="white" />
//               <path d={svgPaths.pcf94600} fill="white" />
//               <path d={svgPaths.p5dec380} fill="white" />
//             </svg>
//             <span className="font-['Geist'] font-extrabold text-white tracking-tighter text-lg md:text-xl uppercase italic">
//               FLOWTECH
//             </span>
//           </Link>

//           {/* Menu Items - Desktop */}
//           <div className="hidden lg:flex items-center gap-8">
//             <Link to="/" className="font-['Geist'] font-semibold text-white text-[16px] md:text-[18px]">Home</Link>
//             <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">About</Link>
//             <div className="flex items-center gap-1 group cursor-pointer relative"
//               onMouseEnter={() => setIsServicesOpen(true)}
//               onMouseLeave={() => setIsServicesOpen(false)}
//             >
//               <span className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] group-hover:text-white transition-colors">Services</span>
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`opacity-70 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
//                 <path d="M4 6L8 10L12 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
//               </svg>

//               <ServicesDropdown
//                 isOpen={isServicesOpen}
//                 onClose={() => setIsServicesOpen(false)}
//               />
//             </div>
//             <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Industries</Link>
//             <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Products</Link>
//             <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Insights</Link>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-end gap-4">
//             {/* Mobile Menu Toggle */}
//             <button
//               className="lg:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <div className="w-6 h-5 relative flex flex-col justify-between">
//                 <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
//                 <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
//                 <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu Overlay */}
//           {isOpen && (
//             <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl lg:hidden flex flex-col gap-6 items-start z-[60]">
//               <Link to="/" className="font-['Geist'] font-semibold text-white text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
//               <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
//               <Link to="/#services" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
//               <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Industries</Link>
//               <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Products</Link>
//               <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Insights</Link>
//               <Link
//                 to="/contact"
//                 className="sm:hidden w-full bg-gradient-to-tr from-[#001ca9] to-[#046ce4] py-4 rounded-xl text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase text-center"
//                 onClick={() => setIsOpen(false)}
//               >
//                 LET'S CONNECT
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>

//       <div className="fixed top-5 md:top-13 right-8 md:right-15 z-50 hidden sm:block">
//         <Link
//           to="/contact"
//           className="bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-4 md:px-9 py-2 md:py-4 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-xs md:text-sm tracking-[0.5px] uppercase hover:opacity-90 transition-opacity"
//         >
//           LET'S CONNECT
//         </Link>
//       </div>
//     </>
//   );
// };


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-w7xqzyo252";
// import { ServicesDropdown } from './services-dropdown';
import { ServicesDropdown } from './services-dropdown';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const onNavigate = useNavigate();

  return (
    <>
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-[1260px] z-50">
        <div className="backdrop-blur-[25px] bg-black/40 md:bg-white/5 border border-white/20 rounded-2xl md:rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none">
              <path d={svgPaths.p375f8780} fill="white" />
              <path d={svgPaths.p313b85c0} fill="white" />
              <path d={svgPaths.p263bfa00} fill="white" />
              <path d={svgPaths.p32dad680} fill="white" />
              <path d={svgPaths.p26351200} fill="white" />
              <path d={svgPaths.p669ed00} fill="white" />
              <path d={svgPaths.p2a5f400} fill="white" />
              <path d={svgPaths.p3532ea00} fill="white" />
              <path d={svgPaths.p81a6080} fill="white" />
              <path d={svgPaths.pcf94600} fill="white" />
              <path d={svgPaths.p5dec380} fill="white" />
            </svg>
            <span className="font-['Geist'] font-extrabold text-white tracking-tighter text-lg md:text-xl uppercase italic">
              FLOWTECH
            </span>
          </Link>

          {/* Menu Items - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="font-['Geist'] font-semibold text-white text-[16px] md:text-[18px]">Home</Link>
            <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">About</Link>
            <div className="flex items-center gap-1 group cursor-pointer relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}>
            <ServicesDropdown
              isOpen={isServicesOpen}
              onClose={() => setIsServicesOpen(false)}
            />
          </div>
          <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Industries</Link>
          <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Products</Link>
          <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Insights</Link>
          <Link to="/insights/blogs" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Blogs</Link>
          <Link to="/careers" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Careers</Link>
          <Link to="/contact" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-end gap-4">
          <Link
            to="/contact"
            className="hidden sm:block bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-xs md:text-sm tracking-[0.5px] uppercase hover:opacity-90 transition-opacity"
          >
            LET'S CONNECT
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl lg:hidden flex flex-col gap-6 items-start z-[60]">
            <Link to="/" className="font-['Geist'] font-semibold text-white text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/#services" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Industries</Link>
            <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link to="/insights/blogs" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link to="/careers" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Careers</Link>
            <Link to="/contact" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link
              to="/contact"
              className="sm:hidden w-full bg-gradient-to-tr from-[#001ca9] to-[#046ce4] py-4 rounded-xl text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase text-center"
              onClick={() => setIsOpen(false)}
            />
            <span className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] group-hover:text-white transition-colors">Services</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`opacity-70 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
              <path d="M4 6L8 10L12 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </svg>

            <ServicesDropdown
              isOpen={isServicesOpen}
              onClose={() => setIsServicesOpen(false)}
            />
            {/* </div> */}
            <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Industries</Link>
            <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Products</Link>
            <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Insights</Link>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-end gap-4">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl lg:hidden flex flex-col gap-6 items-start z-[60]">
            <Link to="/" className="font-['Geist'] font-semibold text-white text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/#services" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Industries</Link>
            <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Insights</Link>
            <Link
              to="/contact"
              className="w-full bg-gradient-to-tr from-[#001ca9] to-[#046ce4] py-4 rounded-xl text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase text-center"
              onClick={() => setIsOpen(false)}
            >
              LET'S CONNECT
            </Link>
          </div>
        )}
        </div>
      </nav >


      {/* Outer CTA Button - only visible on desktop (lg+) where hamburger is gone */}
      {/* < div className="fixed top-5 lg:top-13 right-8 lg:right-15 z-50 hidden lg:block" >
        <Link
          to="/contact"
          className="bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-9 py-4 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase hover:opacity-90 transition-opacity"
        >
          LET'S CONNECT
        </Link>
      </div > */}
    </>
  );
};