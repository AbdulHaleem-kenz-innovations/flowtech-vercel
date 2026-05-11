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


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import svgPaths from "../../imports/svg-w7xqzyo252";
// // import { ServicesDropdown } from './services-dropdown';
// import { ServicesDropdown } from './services-dropdown';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const onNavigate = useNavigate();

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
//               onMouseLeave={() => setIsServicesOpen(false)}>
//             <ServicesDropdown
//               isOpen={isServicesOpen}
//               onClose={() => setIsServicesOpen(false)}
//             />
//           </div>
//           <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Industries</Link>
//           <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Products</Link>
//           <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Insights</Link>
//           <Link to="/insights/blogs" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Blogs</Link>
//           <Link to="/careers" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Careers</Link>
//           <Link to="/contact" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Contact Us</Link>
//         </div>

//         {/* Right Section */}
//         {/* <div className="flex items-end gap-4">
//           <Link
//             to="/contact"
//             className="hidden sm:block bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-xs md:text-sm tracking-[0.5px] uppercase hover:opacity-90 transition-opacity">
//             LET'S CONNECT
//           </Link> */}

//           {/* Mobile Menu Toggle */}
//           {/* <button
//             className="lg:hidden p-2 text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className="w-6 h-5 relative flex flex-col justify-between">
//               <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
//               <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
//               <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
//             </div>
//           </button>
//         </div> */}

//         {/* Mobile Menu Overlay */}
//         {isOpen && (
//           <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl lg:hidden flex flex-col gap-6 items-start z-[60]">
//             <Link to="/" className="font-['Geist'] font-semibold text-white text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/#services" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
//             <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Industries</Link>
//             <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Products</Link>
//             <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Insights</Link>
//             <Link to="/insights/blogs" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Blogs</Link>
//             <Link to="/careers" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Careers</Link>
//             <Link to="/contact" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Contact</Link>
//             <Link
//               to="/contact"
//               className="sm:hidden w-full bg-gradient-to-tr from-[#001ca9] to-[#046ce4] py-4 rounded-xl text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase text-center"
//               onClick={() => setIsOpen(false)}
//             />
//             <span className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] group-hover:text-white transition-colors">Services</span>
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`opacity-70 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
//               <path d="M4 6L8 10L12 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
//             </svg>

//             <ServicesDropdown
//               isOpen={isServicesOpen}
//               onClose={() => setIsServicesOpen(false)}
//             />
//             {/* </div> */}
//             <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Industries</Link>
//             <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Products</Link>
//             <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-[16px] md:text-[18px] hover:text-white transition-colors">Insights</Link>
//           </div>
//         )}

//         {/* Right Section */}
//         <div className="flex items-end gap-4">
//           {/* Mobile Menu Toggle */}
//           <button
//             className="lg:hidden p-2 text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className="w-6 h-5 relative flex flex-col justify-between">
//               <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
//               <span className={`w-full h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
//               <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu Overlay */}
//         {isOpen && (
//           <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl lg:hidden flex flex-col gap-6 items-start z-[60]">
//             <Link to="/" className="font-['Geist'] font-semibold text-white text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>About</Link>
//             <Link to="/#services" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Services</Link>
//             <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Industries</Link>
//             <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Products</Link>
//             <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Insights</Link>
//             <Link
//               to="/contact"
//               className="w-full bg-gradient-to-tr from-[#001ca9] to-[#046ce4] py-4 rounded-xl text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase text-center"
//               onClick={() => setIsOpen(false)}
//             >
//               LET'S CONNECT
//             </Link>
//           </div>
//         )}
//         </div>
//       </nav >


//       {/* Outer CTA Button - only visible on desktop (lg+) where hamburger is gone */}
//       < div className="fixed top-5 lg:top-13 right-8 lg:right-15 z-50 hidden lg:block" >
//         <Link
//           to="/contact"
//           className="bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-9 py-4 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase hover:opacity-90 transition-opacity"
//         >
//           LET'S CONNECT
//         </Link>
//       </div >
//     </>
//   );
// };


//ORIGINAL CODE
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router';
// import svgPaths from "../../imports/svg-w7xqzyo252";
// import { ServicesDropdown } from './services-dropdown';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const onNavigate = useNavigate();

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
//           <div className="hidden lg:flex items-center gap-6 xl:gap-8">
//             <Link to="/" className="font-['Geist'] font-semibold text-white text-[15px] xl:text-[17px]">Home</Link>
//             <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] hover:text-white transition-colors">About</Link>

//             {/* Services with Dropdown */}
//             <div
//               className="flex items-center gap-1 group cursor-pointer relative"
//               onMouseEnter={() => setIsServicesOpen(true)}
//               onMouseLeave={() => setIsServicesOpen(false)}
//             >
//               <span className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] group-hover:text-white transition-colors">Services</span>
//               <svg
//                 width="16" height="16" viewBox="0 0 16 16" fill="none"
//                 className={`opacity-70 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
//               >
//                 <path d="M4 6L8 10L12 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
//               </svg>
//               <ServicesDropdown isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
//             </div>

//             <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] hover:text-white transition-colors">Industries</Link>
//             <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] hover:text-white transition-colors">Products</Link>
//             <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] hover:text-white transition-colors">Insights</Link>
//             {/*   <Link to="/insights/blogs" className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] hover:text-white transition-colors">Blogs</Link>
//             <Link to="/careers" className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] hover:text-white transition-colors">Careers</Link>
//             <Link to="/contact" className="font-['Geist'] font-semibold text-white/75 text-[15px] xl:text-[17px] hover:text-white transition-colors">Contact Us</Link> */}
//           </div>

//           {/* Right Section — CTA (md only) + Hamburger */}
//           <div className="flex items-center gap-3">
//             {/* Show CTA inline inside navbar only on medium screens (md-lg) */}
//             <Link
//               to="/contact"
//               className="hidden md:flex lg:hidden bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-4 py-2 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-xs tracking-[0.5px] uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
//             >
//               LET'S CONNECT
//             </Link>

//             {/* Mobile/Tablet Hamburger */}
//             <button
//               className="lg:hidden p-2 text-white"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <div className="w-6 h-5 relative flex flex-col justify-between">
//                 <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
//                 <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
//                 <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu Overlay — single, clean */}
//           {isOpen && (
//             <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl lg:hidden flex flex-col gap-4 items-start z-[60]">
//               <Link to="/" className="font-['Geist'] font-semibold text-white text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Home</Link>
//               <Link to="/about" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>About</Link>
//               <Link to="/#services" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Services</Link>
//               <Link to="/industries" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Industries</Link>
//               <Link to="/products" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Products</Link>
//               {/* <Link to="/insights" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Insights</Link>
//               <Link to="/insights/blogs" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Blogs</Link>
//               <Link to="/careers" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Careers</Link>
//               <Link to="/contact" className="font-['Geist'] font-semibold text-white/75 text-lg w-full py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>Contact Us</Link> */}
//               <Link
//                 to="/contact"
//                 className="w-full bg-gradient-to-tr from-[#001ca9] to-[#046ce4] py-4 rounded-xl text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase text-center mt-2"
//                 onClick={() => setIsOpen(false)}
//               >
//                 LET'S CONNECT
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Floating CTA — only on large screens (lg+) */}
//       <div className="fixed top-5 lg:top-10 mt-3 right-6 lg:right-12 z-50 hidden lg:block">
//         <Link
//           to="/contact"
//           className="bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-6 xl:px-9 py-3 xl:py-4 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
//         >
//           LET'S CONNECT
//         </Link>
//       </div>
//     </>
//   );
// };

//DAWARR BHAI CODE
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import svgPaths from "../../imports/svg-w7xqzyo252";
import { ServicesDropdown } from './services-dropdown';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const servicesAnchorRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] max-w-[1260px] z-50">
      <div className="backdrop-blur-[25px] bg-black/40 md:bg-white/5  rounded-2xl md:rounded-full px-6 md:px-4 py-3 md:py-3 flex items-center justify-between relative isolate">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="130" height="20" viewBox="0 0 130 20" fill="none">
            <path d="M67.5337 5.27264C68.5392 5.36532 70.3588 5.30527 71.4235 5.29405C71.4986 6.27976 71.4816 7.45565 71.4982 8.46379C71.5358 10.3839 71.5559 12.3043 71.5583 14.2249C71.9875 13.3021 72.6965 11.0962 73.0343 10.091C73.5846 8.48329 74.1523 6.88148 74.7374 5.28598C75.7285 5.32352 76.8896 5.29801 77.8942 5.30124C77.7542 6.60089 77.3983 8.29376 77.1822 9.63939C76.8428 11.9143 76.1771 12.5362 75.3787 14.474C74.7182 16.0772 73.8496 17.9843 73.2562 19.578C71.7533 19.6226 70.0845 19.5922 68.5686 19.5936L68.4134 11.2163C67.7755 12.8503 67.2144 14.5483 66.5914 16.1927C66.2034 17.2169 65.5188 18.5471 65.2531 19.5818C63.7346 19.6201 62.0608 19.5923 60.5315 19.5947L59.543 5.29244C60.846 5.2906 62.4748 5.0988 63.4219 6.15379C63.7296 6.50169 63.9445 6.92167 64.0469 7.37471C64.2462 8.25498 64.1487 13.2179 64.0769 14.3322C64.6689 12.9529 65.1133 11.4091 65.6792 10.043C66.368 8.38013 66.9502 6.9749 67.5337 5.27264Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2364 4.87633C55.9631 4.71723 57.0901 4.93925 58.6378 5.63512C58.8334 7.15421 58.908 8.87146 59.0089 10.4095L59.4679 16.7611C57.8081 19.2037 54.2725 20.212 51.4552 19.9457C48.7048 19.6449 46.6656 17.9773 46.1886 15.1898C45.8272 13.0779 46.8212 10.1408 48.0118 8.41051C49.392 6.4047 51.8834 5.25351 54.2364 4.87633ZM55.5909 15.1654C57.0121 13.3514 57.9696 8.15646 54.2638 8.39098C51.5858 8.92487 50.5596 12.368 50.9698 14.7611C51.2018 16.1134 52.2967 16.5506 53.5421 16.514C54.6106 16.3035 54.9032 16.043 55.5909 15.1654Z" fill="white" />
            <path d="M124.251 10.1882C124.357 9.02083 124.755 6.90909 125.599 6.07413C126.637 5.04758 128.54 5.2869 129.961 5.29372C129.357 8.30127 128.786 10.9966 128.312 14.0624C128.127 15.2604 127.648 18.4746 127.361 19.5289C127.148 19.6347 126.852 19.6033 126.604 19.5998C125.277 19.6009 123.951 19.5943 122.624 19.5803C122.959 17.736 123.239 15.8649 123.592 14.0282C122.096 14.0183 120.599 14.0175 119.102 14.0257C118.781 15.888 118.544 17.7389 118.163 19.6061C116.61 19.5795 114.994 19.5957 113.436 19.5922C113.647 18.3987 113.848 17.2047 114.056 16.0107C114.68 12.4187 115.445 8.8901 116.06 5.29188C117.55 5.33851 119.276 5.302 120.783 5.30435C120.573 6.66288 120.179 8.86305 119.818 10.1925C121.24 10.1537 122.837 10.1113 124.251 10.1882Z" fill="white" />
            <path d="M106.791 4.87321C106.913 4.85935 107.035 4.85004 107.159 4.84534C109.333 4.75487 111.882 5.29399 113.121 7.28233C113.799 8.37002 113.82 9.54174 113.861 10.7804C112.446 10.8347 110.756 10.8066 109.318 10.8199C109.327 9.9238 109.214 8.93612 108.255 8.56835C107.585 8.31459 106.841 8.34128 106.192 8.6424C104.293 9.52957 103.719 12.14 103.666 14.0507C103.641 14.967 103.887 16.014 104.866 16.3332C106.985 17.0243 108.136 15.905 108.797 14.0171L112.02 14.0175L113.405 14.0267C112.998 14.9328 112.809 15.6539 112.245 16.5725C109.535 20.9897 100.393 21.5745 99.0796 15.7226C98.6323 13.7284 99.2511 10.6992 100.425 8.94903C101.985 6.62392 104.037 5.40484 106.791 4.87321Z" fill="white" />
            <path d="M102.731 5.19745L102.777 5.23074C102.718 5.51031 101.275 6.58384 100.952 6.94413C100.457 7.49762 99.9472 7.9324 99.5483 8.6068C98.4177 8.61193 97.2871 8.6079 96.1566 8.5947L95.8054 10.7208L98.6149 10.7302C98.2967 11.7202 98.1508 12.9697 98.0181 14.0074C97.1735 13.9641 95.9102 13.9569 95.081 14.0104C94.9776 14.7764 94.8654 15.5411 94.7444 16.3045C95.9095 16.3265 97.131 16.3013 98.3004 16.2937L98.3114 16.3304C98.7227 17.6514 99.3819 18.8009 100.625 19.4563L100.613 19.5243C100.328 19.6554 98.9771 19.6003 98.571 19.5949L89.4102 19.5895C89.6929 17.8823 89.9472 15.9247 90.3286 14.2533C91.0129 11.2533 91.4454 8.32027 91.9796 5.30157L98.9706 5.3097C99.802 5.31058 102.002 5.36623 102.731 5.19745Z" fill="white" />
            <path d="M27.4631 5.28021C28.5385 5.34679 30.0584 5.30368 31.1729 5.30602L38.5835 5.30126C38.2713 7.28924 37.8075 8.62555 35.4569 8.61719C34.1201 8.6125 32.7489 8.5974 31.4105 8.60891C31.3451 9.31813 31.1015 10.5538 30.9782 11.295C32.7152 11.2815 34.4525 11.287 36.1894 11.3118C35.8678 12.3919 36.0608 12.7754 35.2601 13.7527C34.0481 14.8589 32.0716 14.5432 30.412 14.525C30.1758 16.0894 29.7431 18.0921 29.5912 19.5952L24.8281 19.5911C24.8905 18.8598 25.0924 17.9375 25.2263 17.1972C25.9431 13.2338 26.4696 9.18417 27.4631 5.28021Z" fill="white" />
            <path d="M78.7812 5.28998C82.8585 5.35098 87.021 5.29298 91.1074 5.31139C90.7876 8.46228 90.2377 9.06204 87.1277 9.01797C86.7872 11.4039 86.2358 14.5031 85.7274 16.8533C85.547 17.7348 85.3195 18.6955 85.2265 19.5824C83.7031 19.6276 82.0144 19.5997 80.4755 19.6033C80.5959 18.4053 81.027 16.9358 81.2519 15.7254C81.6667 13.4937 82.0126 11.2453 82.428 9.0168L78.1935 9.02978C78.2877 7.96775 78.6202 6.4394 78.7812 5.28998Z" fill="white" />
            <path d="M39.6084 5.29626C42.8832 5.26385 44.3478 5.89404 43.6436 9.54424C43.2177 11.7517 42.8974 14.088 42.4902 16.3111C43.5056 16.3008 44.5211 16.3106 45.536 16.3404C45.9535 17.8876 46.7353 18.5822 47.8946 19.6237C47.5177 19.5864 47.1059 19.59 46.7248 19.5847L37.1797 19.5951C37.9723 14.9731 38.955 9.89859 39.6084 5.29626Z" fill="white" />
            <path d="M8.7209 2.53515C9.25013 2.5082 9.52829 2.79411 9.92443 3.10118C10.5481 3.13784 11.2467 3.12099 11.8786 3.12052L15.0314 3.11806C15.8014 3.11726 17.1849 2.94513 17.6978 3.60005C18.5679 4.71095 19.1172 6.06108 19.8844 7.26537L14.0687 7.25783C13.2389 7.2566 12.4084 7.2453 11.5791 7.27095C11.1969 7.28279 10.7013 7.44764 10.4683 7.76692C9.45363 9.15772 8.80364 10.7727 7.8339 12.202C7.53762 12.6237 7.20709 13.276 6.95334 13.7464C6.594 14.4125 5.98266 15.3178 5.7371 16.0064C5.25108 15.3099 4.89436 14.5564 4.43044 13.853C4.04883 13.2683 3.0016 13.2062 2.90025 12.3893C2.72037 10.9393 4.69513 11.5081 4.747 9.92508C4.79253 8.53565 3.38 8.60922 3.17026 7.31028C3.09655 6.85376 3.25318 6.48986 3.50196 6.12625C3.88089 5.44256 4.85973 5.11209 5.54845 5.54301C6.38304 6.06517 6.96232 6.49207 7.71932 5.45604C8.31806 4.63662 7.31641 3.87314 7.84759 3.05079C8.01599 2.79013 8.41286 2.59901 8.7209 2.53515Z" fill="white" />
            <path d="M19.9776 7.43182C20.0547 7.47906 20.1612 7.64822 20.2054 7.73302C20.7477 8.77999 21.4026 9.77321 21.9105 10.8357C22.0474 11.1213 22.1441 11.583 22.0007 11.8819C21.1853 13.5779 20.1688 15.1838 19.2241 16.809C18.7771 17.5778 18.3961 18.3537 17.9195 19.0943C17.3484 19.9818 16.0911 19.7747 15.152 19.7731L12.3225 19.7704L9.98057 19.7736C9.53723 19.774 9.06213 19.7823 8.62089 19.7531C8.35117 19.7352 7.99599 19.5585 7.72656 19.4527C7.93804 19.1965 8.04779 19.021 8.22257 18.7364C8.31186 18.5976 8.3883 18.4523 8.46607 18.3069C8.95838 17.3858 9.48268 16.483 10.0012 15.5765C10.9261 15.5333 11.971 15.6615 12.8671 15.4369C14.1123 15.1248 14.5482 13.8732 15.1291 12.8496C14.0375 12.8937 12.6568 12.852 11.5425 12.8506C11.8913 12.4284 12.6632 10.6709 13.1228 10.5977C14.381 10.3974 15.7799 10.6472 17.0823 10.4868C18.9706 10.2542 19.0644 8.65498 19.9776 7.43182Z" fill="white" />
            <path d="M3.17022 8.95083C3.6733 8.84784 4.16409 9.17382 4.26428 9.6774C4.36451 10.181 4.03585 10.67 3.5317 10.7674C3.03145 10.8641 2.54707 10.5386 2.44767 10.0389C2.34824 9.53917 2.6711 9.05301 3.17022 8.95083Z" fill="white" />
            <path d="M6.4306 3.81838C6.89937 3.68975 7.38495 3.9594 7.52358 4.42527C7.6622 4.89114 7.40306 5.38241 6.94023 5.53099C6.63193 5.62999 6.29419 5.55443 6.05743 5.3335C5.82067 5.11258 5.72193 4.78084 5.79941 4.46642C5.87685 4.152 6.11832 3.90405 6.4306 3.81838Z" fill="white" />
            <path d="M7.40607 0.828538C7.71904 0.808974 7.82608 0.818682 8.11841 0.920137C8.44029 1.41918 8.52962 1.81029 7.93443 2.12174C7.79758 2.15394 7.65319 2.18842 7.51496 2.156C7.34109 2.11507 7.1913 2.00524 7.09998 1.85169C7.00649 1.68952 6.98295 1.4963 7.03474 1.31638C7.09169 1.11537 7.22282 0.932931 7.40607 0.828538Z" fill="white" />
            <path d="M0.686531 8.57742C1.04152 8.502 1.39191 8.72329 1.47646 9.07622C1.56097 9.42914 1.34884 9.78515 0.998198 9.87875C0.76318 9.94149 0.512658 9.87179 0.343784 9.69673C0.174946 9.52162 0.11438 9.26874 0.185595 9.03615C0.256811 8.80356 0.448579 8.62795 0.686531 8.57742Z" fill="white" />
            <path d="M2.32663 4.73915C2.59508 4.72438 2.84122 4.76567 3.03357 4.97548C3.13706 5.08773 3.19089 5.23705 3.18281 5.38955C3.16741 5.69173 2.97938 5.87545 2.77098 6.06505C2.42095 6.12217 2.13986 6.09497 1.95537 5.74584C1.86405 5.57244 1.84601 5.3697 1.90528 5.18289C1.98066 4.9419 2.1174 4.85192 2.32663 4.73915Z" fill="white" />
            <path d="M0.723616 3.39276C1.27708 3.39117 1.43128 3.9889 0.900532 4.28524C0.713292 4.26499 0.540542 4.22373 0.432378 4.05178C0.377644 3.96593 0.361163 3.86117 0.386846 3.76268C0.432958 3.58243 0.575208 3.48379 0.723616 3.39276Z" fill="white" />
            <path d="M5.28522 0.0400282C5.42345 -0.0251706 5.58624 -0.00990591 5.70994 0.0798597C5.83364 0.169625 5.89863 0.319641 5.87954 0.471284C5.86041 0.62293 5.76022 0.752125 5.61811 0.808391C5.40783 0.891644 5.16945 0.792956 5.07954 0.585439C4.98963 0.377925 5.08066 0.136506 5.28522 0.0400282Z" fill="white" />
            <path d="M0.25362 6.06963C0.7618 6.0617 1.1579 6.46578 0.595281 6.80034C0.40105 6.85677 0.197111 6.84551 0.0673586 6.66555C0.00907487 6.58375 -0.0126948 6.48146 0.00719197 6.38304C0.0392498 6.2163 0.123179 6.15791 0.25362 6.06963Z" fill="white" />
            <path d="M4.90147 1.87234C5.4045 1.86582 5.66017 2.22813 5.20614 2.61728C4.62019 2.69664 4.43172 2.18806 4.90147 1.87234Z" fill="white" />
          </svg>
        </Link>

        {/* Menu Items - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`font-['Geist'] font-semibold text-[16px] md:text-[18px] transition-colors ${isActive('/') ? 'text-white' : 'text-white/75 hover:text-white'}`}>Home</Link>
          <Link to="/about" className={`font-['Geist'] font-semibold text-[16px] md:text-[18px] transition-colors ${isActive('/about') ? 'text-white' : 'text-white/75 hover:text-white'}`}>About</Link>
            {/* Services trigger — attach the ref here */}
          <div
            ref={servicesAnchorRef}                        // ← attach ref
            className="flex items-center gap-1 group cursor-pointer relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`font-['Geist'] font-semibold text-[16px] md:text-[18px] transition-colors ${isActive('/services') ? 'text-white' : 'text-white/75 group-hover:text-white'}`}
            >
              Services
            </Link>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
              className={`opacity-70 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''} ${isActive('/services') ? 'opacity-100' : ''}`}
            >
              <path d="M4 6L8 10L12 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
            </svg>

            {/* Dropdown is now portalled to document.body — pass anchorRef */}
            <ServicesDropdown
              isOpen={isServicesOpen}
              onClose={() => setIsServicesOpen(false)}
              anchorRef={servicesAnchorRef}               // ← pass ref
            />
          </div>
          <Link to="/industries" className={`font-['Geist'] font-semibold text-[16px] md:text-[18px] transition-colors ${isActive('/industries') ? 'text-white' : 'text-white/75 hover:text-white'}`}>Industries</Link>
          <Link to="/products" className={`font-['Geist'] font-semibold text-[16px] md:text-[18px] transition-colors ${isActive('/products') ? 'text-white' : 'text-white/75 hover:text-white'}`}>Products</Link>
          <Link to="/insights" className={`font-['Geist'] font-semibold text-[16px] md:text-[18px] transition-colors ${isActive('/insights') ? 'text-white' : 'text-white/75 hover:text-white'}`}>Insights</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className=" hidden sm:block bg-gradient-to-tr from-[#001ca9] to-[#046ce4] px-2 md:px-4 py-2 md:py-2 rounded-full border border-white/20 text-white font-['Geist'] font-medium text-xs md:text-sm tracking-[0.5px] uppercase hover:opacity-90 transition-opacity"
          >
            LET'S CONNECT
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/70 z-[100] lg:hidden"
              />

              {/* Sidebar */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 right-0 h-screen w-[85%] max-w-[400px] bg-zinc-950 border-l border-white/10 p-8 z-[1001] lg:hidden flex flex-col will-change-transform shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
                style={{ backgroundColor: '#09090b' }} // Forcing solid background
              >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between mb-12">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="16" viewBox="0 0 130 20" fill="none">
                      <path d="M67.5337 5.27264C68.5392 5.36532 70.3588 5.30527 71.4235 5.29405C71.4986 6.27976 71.4816 7.45565 71.4982 8.46379C71.5358 10.3839 71.5559 12.3043 71.5583 14.2249C71.9875 13.3021 72.6965 11.0962 73.0343 10.091C73.5846 8.48329 74.1523 6.88148 74.7374 5.28598C75.7285 5.32352 76.8896 5.29801 77.8942 5.30124C77.7542 6.60089 77.3983 8.29376 77.1822 9.63939C76.8428 11.9143 76.1771 12.5362 75.3787 14.474C74.7182 16.0772 73.8496 17.9843 73.2562 19.578C71.7533 19.6226 70.0845 19.5922 68.5686 19.5936L68.4134 11.2163C67.7755 12.8503 67.2144 14.5483 66.5914 16.1927C66.2034 17.2169 65.5188 18.5471 65.2531 19.5818C63.7346 19.6201 62.0608 19.5923 60.5315 19.5947L59.543 5.29244C60.846 5.2906 62.4748 5.0988 63.4219 6.15379C63.7296 6.50169 63.9445 6.92167 64.0469 7.37471C64.2462 8.25498 64.1487 13.2179 64.0769 14.3322C64.6689 12.9529 65.1133 11.4091 65.6792 10.043C66.368 8.38013 66.9502 6.9749 67.5337 5.27264Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M54.2364 4.87633C55.9631 4.71723 57.0901 4.93925 58.6378 5.63512C58.8334 7.15421 58.908 8.87146 59.0089 10.4095L59.4679 16.7611C57.8081 19.2037 54.2725 20.212 51.4552 19.9457C48.7048 19.6449 46.6656 17.9773 46.1886 15.1898C45.8272 13.0779 46.8212 10.1408 48.0118 8.41051C49.392 6.4047 51.8834 5.25351 54.2364 4.87633ZM55.5909 15.1654C57.0121 13.3514 57.9696 8.15646 54.2638 8.39098C51.5858 8.92487 50.5596 12.368 50.9698 14.7611C51.2018 16.1134 52.2967 16.5506 53.5421 16.514C54.6106 16.3035 54.9032 16.043 55.5909 15.1654Z" fill="white" />
                      <path d="M124.251 10.1882C124.357 9.02083 124.755 6.90909 125.599 6.07413C126.637 5.04758 128.54 5.2869 129.961 5.29372C129.357 8.30127 128.786 10.9966 128.312 14.0624C128.127 15.2604 127.648 18.4746 127.361 19.5289C127.148 19.6347 126.852 19.6033 126.604 19.5998C125.277 19.6009 123.951 19.5943 122.624 19.5803C122.959 17.736 123.239 15.8649 123.592 14.0282C122.096 14.0183 120.599 14.0175 119.102 14.0257C118.781 15.888 118.544 17.7389 118.163 19.6061C116.61 19.5795 114.994 19.5957 113.436 19.5922C113.647 18.3987 113.848 17.2047 114.056 16.0107C114.68 12.4187 115.445 8.8901 116.06 5.29188C117.55 5.33851 119.276 5.302 120.783 5.30435C120.573 6.66288 120.179 8.86305 119.818 10.1925C121.24 10.1537 122.837 10.1113 124.251 10.1882Z" fill="white" />
                      <path d="M106.791 4.87321C106.913 4.85935 107.035 4.85004 107.159 4.84534C109.333 4.75487 111.882 5.29399 113.121 7.28233C113.799 8.37002 113.82 9.54174 113.861 10.7804C112.446 10.8347 110.756 10.8066 109.318 10.8199C109.327 9.9238 109.214 8.93612 108.255 8.56835C107.585 8.31459 106.841 8.34128 106.192 8.6424C104.293 9.52957 103.719 12.14 103.666 14.0507C103.641 14.967 103.887 16.014 104.866 16.3332C106.985 17.0243 108.136 15.905 108.797 14.0171L112.02 14.0175L113.405 14.0267C112.998 14.9328 112.809 15.6539 112.245 16.5725C109.535 20.9897 100.393 21.5745 99.0796 15.7226C98.6323 13.7284 99.2511 10.6992 100.425 8.94903C101.985 6.62392 104.037 5.40484 106.791 4.87321Z" fill="white" />
                      <path d="M102.731 5.19745L102.777 5.23074C102.718 5.51031 101.275 6.58384 100.952 6.94413C100.457 7.49762 99.9472 7.9324 99.5483 8.6068C98.4177 8.61193 97.2871 8.6079 96.1566 8.5947L95.8054 10.7208L98.6149 10.7302C98.2967 11.7202 98.1508 12.9697 98.0181 14.0074C97.1735 13.9641 95.9102 13.9569 95.081 14.0104C94.9776 14.7764 94.8654 15.5411 94.7444 16.3045C95.9095 16.3265 97.131 16.3013 98.3004 16.2937L98.3114 16.3304C98.7227 17.6514 99.3819 18.8009 100.625 19.4563L100.613 19.5243C100.328 19.6554 98.9771 19.6003 98.571 19.5949L89.4102 19.5895C89.6929 17.8823 89.9472 15.9247 90.3286 14.2533C91.0129 11.2533 91.4454 8.32027 91.9796 5.30157L98.9706 5.3097C99.802 5.31058 102.002 5.36623 102.731 5.19745Z" fill="white" />
                      <path d="M27.4631 5.28021C28.5385 5.34679 30.0584 5.30368 31.1729 5.30602L38.5835 5.30126C38.2713 7.28924 37.8075 8.62555 35.4569 8.61719C34.1201 8.6125 32.7489 8.5974 31.4105 8.60891C31.3451 9.31813 31.1015 10.5538 30.9782 11.295C32.7152 11.2815 34.4525 11.287 36.1894 11.3118C35.8678 12.3919 36.0608 12.7754 35.2601 13.7527C34.0481 14.8589 32.0716 14.5432 30.412 14.525C30.1758 16.0894 29.7431 18.0921 29.5912 19.5952L24.8281 19.5911C24.8905 18.8598 25.0924 17.9375 25.2263 17.1972C25.9431 13.2338 26.4696 9.18417 27.4631 5.28021Z" fill="white" />
                      <path d="M78.7812 5.28998C82.8585 5.35098 87.021 5.29298 91.1074 5.31139C90.7876 8.46228 90.2377 9.06204 87.1277 9.01797C86.7872 11.4039 86.2358 14.5031 85.7274 16.8533C85.547 17.7348 85.3195 18.6955 85.2265 19.5824C83.7031 19.6276 82.0144 19.5997 80.4755 19.6033C80.5959 18.4053 81.027 16.9358 81.2519 15.7254C81.6667 13.4937 82.0126 11.2453 82.428 9.0168L78.1935 9.02978C78.2877 7.96775 78.6202 6.4394 78.7812 5.28998Z" fill="white" />
                      <path d="M39.6084 5.29626C42.8832 5.26385 44.3478 5.89404 43.6436 9.54424C43.2177 11.7517 42.8974 14.088 42.4902 16.3111C43.5056 16.3008 44.5211 16.3106 45.536 16.3404C45.9535 17.8876 46.7353 18.5822 47.8946 19.6237C47.5177 19.5864 47.1059 19.59 46.7248 19.5847L37.1797 19.5951C37.9723 14.9731 38.955 9.89859 39.6084 5.29626Z" fill="white" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white/70 hover:text-white transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: 'Services', path: '/services' },
                    { name: 'Industries', path: '/industries' },
                    { name: 'Products', path: '/products' },
                    { name: 'Insights', path: '/insights' },
                  ].map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        to={link.path}
                        className={`font-['Geist'] font-semibold text-[22px] w-full py-4 flex items-center justify-between group transition-colors ${isActive(link.path) ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 ${isActive(link.path) ? 'opacity-100 translate-x-0' : ''}`}>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Let's Connect CTA - Moved here */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-6"
                  >
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-tr from-[#001ca9] to-[#046ce4] py-4 rounded-xl text-white font-['Geist'] font-medium text-sm tracking-[0.5px] uppercase text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      onClick={() => setIsOpen(false)}
                    >
                      LET'S CONNECT
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </motion.div>
                </div>


              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};