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
import { useEffect, useRef } from 'react'

const ScrollFadeIn = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && ref.current) {
        ref.current.classList.add("animate-blur-fade-in-up");
      }
      else {
        ref.current.classList.remove("animate-blur-fade-in-up");
      }
    },
    { threshold: 0.1 }  // Fixed: was "thereshold"
    );

    if (ref.current) observer.observe(ref.current) 
    return () => observer.disconnect();

  }, []);

  return (
    <div 
      ref={ref} 
      className='opacity-0 translate-y-7 blur-sm'  // Added blur & translate-y
    >
      {children}
    </div>
  )
}

export default ScrollFadeIn

