// import React from 'react';
// import svgPaths from "../../imports/svg-w7xqzyo252";
// // import imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg from "figma:asset/3b06c86fd8535cf5a270d186cf91e904d7f06a6c.png";
// import imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg from "../../assets/3b06c86fd8535cf5a270d186cf91e904d7f06a6c.png";
// import { ImageWithFallback } from './figma/ImageWithFallback';

// const Background = () => {
//   return (
//     <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
//       {/* Top Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%] bg-blue-600/90 blur-[100px] md:blur-[150px] rounded-[100%] -translate-y-1/2" />

//       {/* Background Image */}
//       <div className="absolute inset-0 opacity-100 md:opacity-40">
//         <ImageWithFallback
//           src={imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg}
//           alt=""
//           className="w-full h-full object-cover"
//         />
//         {/* <div className="absolute inset-0 bg-black/20" /> */}
//       </div>

//       {/* Radial Gradient Overlay */}
//       <div className="absolute inset-0 opacity-10 md:opacity-20">
//         <svg className="w-full h-full" viewBox="0 0 1920 1920" preserveAspectRatio="xMidYMid slice">
//           <path d={svgPaths.p2fa32200} fill="url(#bg_radial)" />
//           <defs>
//             <radialGradient id="bg_radial" cx="931.578" cy="960" r="940.132" gradientUnits="userSpaceOnUse">
//               <stop stopColor="white" />
//               <stop offset="1" stopColor="white" stopOpacity="0" />
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// };
// export default Background;

  import React from 'react';
import svgPaths from "../../imports/svg-w7xqzyo252";
import imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg from "../../assets/3b06c86fd8535cf5a270d186cf91e904d7f06a6c.png";
import { ImageWithFallback } from './figma/ImageWithFallback';

const Background = () => {
  return (
    <div 
      className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none"
      style={{
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[100%] bg-blue-600/90 blur-[100px] md:blur-[150px] rounded-[100%] -translate-y-1/2" />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-100 md:opacity-40">
        <ImageWithFallback
          src={imgPakg9GDq53Lni9Opq2ONPx1Qv9IJpg}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1920 1920" preserveAspectRatio="xMidYMid slice">
          <path d={svgPaths.p2fa32200} fill="url(#bg_radial)" />
          <defs>
            <radialGradient id="bg_radial" cx="931.578" cy="960" r="940.132" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Background;