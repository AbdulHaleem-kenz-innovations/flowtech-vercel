// import React from 'react'
// import { useEffect,useRef } from 'react'

// const ScrollFadeIn = ({children}) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && ref.current) {
//        ref.current.classList.add("animate-fade-in");
//       }
//       else {
//         ref.current.classList.remove("animate-fade-in");
//       }
//     },
//     {thereshold: 0.1}
// );

//     if (ref.current) observer.observe(ref.current) 
//         return ()=> observer.disconnect();

//   }, []);

//   return (
//     <div ref={ref} className='opacity-0'>
//       {children}
//     </div>
//   )
// }

// export default ScrollFadeIn

import React from 'react'
import { useEffect, useRef, useState } from 'react'

const ScrollFadeIn = ({ children }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🔥 ONLY trigger ONCE - when first seen, never again
        if (entry.isIntersecting && !hasAnimated && ref.current) {
          setHasAnimated(true);
          
          // Make element visible immediately with NO blur
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
          ref.current.style.filter = "none";
          
          // Add animation class for the fade effect (no blur)
          ref.current.classList.add("animate-fade-in-up");
          
          // Clean up after animation
          const timer = setTimeout(() => {
            if (ref.current) {
              ref.current.classList.remove("opacity-0", "translate-y-7", "animate-fade-in-up");
              ref.current.style.opacity = "1";
              ref.current.style.transform = "translateY(0)";
              ref.current.style.filter = "none";
            }
          }, 600);
          
          return () => clearTimeout(timer);
        }
      },
      { 
        threshold: 0.1,
        // Once animated, disconnect to prevent any further triggers
        rootMargin: "0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div 
      ref={ref} 
      className='opacity-0 translate-y-7'
      style={{ filter: "blur(0px)" }}  // No initial blur
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;


// import React from 'react'
// import { useEffect, useRef } from 'react'

// const ScrollFadeIn = ({ children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && ref.current) {
//         ref.current.classList.add("animate-blur-fade-in-up");
        
//         // Remove classes after animation to prevent filter interference with backdrop-blur
//         const timer = setTimeout(() => {
//           if (ref.current) {
//             ref.current.classList.remove("opacity-0", "translate-y-7", "blur-sm", "animate-blur-fade-in-up");
//             ref.current.style.opacity = "1";
//             ref.current.style.transform = "translateY(0)";
//             ref.current.style.filter = "none";
//           }
//         }, 800);
        
//         return () => clearTimeout(timer);
//       }
//       else if (!entry.isIntersecting && ref.current) {
//         // Reset when out of view if desired, or keep as is
//         // ref.current.classList.remove("animate-blur-fade-in-up");
//       }
//     },
//     { threshold: 0.1 }
//     );

//     if (ref.current) observer.observe(ref.current) 
//     return () => observer.disconnect();

//   }, []);

//   return (
//     <div 
//       ref={ref} 
//       className='opacity-0 translate-y-7 blur-sm'  // Added blur & translate-y
//     >
//       {children}
//     </div>
//   )
// }

// export default ScrollFadeIn

