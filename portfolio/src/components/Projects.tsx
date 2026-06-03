// // Projects.tsx
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// export default function Projects() {
//   const ref = useRef(null);
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   // Responsive breakpoints
//   const isMobile = windowWidth < 768;

//   return (
//     <section
//       ref={ref}
//       id="projects"
//       className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#05011a] overflow-x-hidden overflow-y-visible scroll-mt-20"
//     >
//       {/* Background gradients */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,#4c1d95_0%,#1e1b4b_40%,transparent_70%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#3b0764_0%,#1e1b4b_35%,transparent_65%)]" />
      
//       {/* Floating orbs - reduced on mobile for performance */}
      
      

//       {/* Edge guards */}
      
//     </section>
//   );
// }