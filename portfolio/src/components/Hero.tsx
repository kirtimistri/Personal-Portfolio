import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Responsive star count
  const starCount = windowWidth < 640 ? 20 : windowWidth < 1024 ? 30 : 40;

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#05011a]"
    >
      {/* Clean Background - No Fog */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05011a] via-[#0a0520] to-[#05011a]" />

      {/* Responsive Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[5%] w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] aspect-square rounded-full bg-purple-600/15 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[15%] right-[5%] w-[35%] sm:w-[30%] md:w-[25%] lg:w-[20%] aspect-square rounded-full bg-blue-600/15 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float-slow" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50%] sm:w-[45%] md:w-[40%] aspect-square rounded-full bg-indigo-600/10 blur-[100px] sm:blur-[120px] md:blur-[140px] animate-float-slow" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Responsive Stars - Clean and sharp */}
      {Array.from({ length: starCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-white/40"
          style={{
            top: `${((i * 53) % 85) + 5}%`,
            left: `${((i * 37) % 90) + 2}%`,
          }}
          animate={{ opacity: [0.15, 0.6, 0.15], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 2 + (i % 4),
            repeat: Infinity,
            delay: (i % 5) * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Astronaut */}
      <motion.div
        initial={{ x: -100, y: -50, opacity: 0, rotate: -10 }}
        animate={{ 
          x: [-100, -80, -120, -80],
          y: [-50, -70, -40, -50],
          opacity: 1,
          rotate: [-10, -5, -15, -10]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.33, 0.66, 1]
        }}
        className="absolute top-[15%] left-[5%] z-20 hidden lg:block"
      >
        <div className="relative w-32 h-32">
          {/* Astronaut Body */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-b from-purple-200 to-blue-200 border-2 border-purple-500/60 shadow-lg shadow-purple-500/20">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-400/40 to-blue-400/20" />
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/90" />
              <div className="absolute top-3 right-2 w-1.5 h-1.5 rounded-full bg-white/70" />
            </div>
            
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-10 h-12 rounded-lg bg-gradient-to-b from-purple-300 to-blue-400 border border-purple-500/40 shadow-lg shadow-purple-500/20">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-purple-400/30" />
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-2 rounded-full bg-blue-500" />
            </div>
            
            <div className="absolute top-12 left-1/2 -translate-x-[200%] w-3 h-8 rounded-full bg-gradient-to-r from-purple-300 to-blue-400" />
            <div className="absolute top-12 right-1/2 translate-x-[200%] w-3 h-8 rounded-full bg-gradient-to-l from-purple-300 to-blue-400" />
            
            <div className="absolute top-[88px] left-1/2 -translate-x-[150%] w-4 h-6 rounded-full bg-gradient-to-b from-purple-400 to-blue-500" />
            <div className="absolute top-[88px] right-1/2 translate-x-[150%] w-4 h-6 rounded-full bg-gradient-to-b from-purple-400 to-blue-500" />
            
            <div className="absolute top-10 -right-2 w-4 h-8 rounded-md bg-gradient-to-b from-purple-500 to-blue-600" />
            
            <motion.div
              animate={{ rotate: [0, 10, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 left-1/2 w-px h-12 bg-gradient-to-b from-purple-500 to-blue-400"
              style={{ transformOrigin: "top" }}
            />
          </div>
          
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-1 h-1 rounded-full bg-purple-400/60"
              style={{ top: `${20 + i * 15}%`, left: `${-10 - i * 5}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Meteor 1 */}
      <motion.div
        initial={{ x: "120%", y: "-20%", rotate: 45 }}
        animate={{ 
          x: ["120%", "-20%"],
          y: ["-20%", "80%"],
          rotate: 45,
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "linear",
          times: [0, 0.2, 0.8, 1]
        }}
        className="absolute z-20"
      >
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-600 shadow-md shadow-purple-500/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300 to-blue-400" />
          </div>
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-20 h-0.5 bg-gradient-to-l from-purple-500/60 via-blue-500/30 to-transparent" />
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-px bg-purple-400/40 to-transparent" />
          
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [-10, -25], opacity: [1, 0] }}
              transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
              className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-orange-400"
              style={{ left: -15 - i * 5 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Meteor 2 */}
      <motion.div
        initial={{ x: "150%", y: "10%", rotate: 30 }}
        animate={{ 
          x: ["150%", "-30%"],
          y: ["10%", "90%"],
          rotate: 30,
          opacity: [0, 1, 1, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatDelay: 8,
          delay: 3,
          ease: "linear",
          times: [0, 0.15, 0.85, 1]
        }}
        className="absolute z-20"
      >
        <div className="relative">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-300 to-blue-500 shadow-sm" />
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-0.5 bg-gradient-to-l from-purple-500/50 to-transparent" />
        </div>
      </motion.div>

      {/* Space Debris - Reduced count */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`debris-${i}`}
          animate={{ 
            y: [0, -15, 0, 15, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute z-10"
          style={{
            top: `${20 + (i * 15)}%`,
            left: `${10 + (i * 20)}%`,
          }}
        >
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-sm" />
            <div className="absolute inset-[20%] rounded-full bg-gray-700/50" />
          </div>
        </motion.div>
      ))}

      {/* Shooting Stars - Reduced */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          initial={{ x: "100%", y: "0%", opacity: 0 }}
          animate={{ 
            x: ["100%", "-100%"],
            y: ["0%", "50%"],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 6 + i * 3,
            delay: i * 2,
            ease: "linear",
            times: [0, 0.1, 0.7, 1]
          }}
          className="absolute z-20"
        >
          <div className="relative">
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shadow-sm" />
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-l from-white/50 to-transparent" />
          </div>
        </motion.div>
      ))}

      {/* Space Dust - Reduced */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full bg-white/15"
          style={{
            width: `${1 + (i % 2)}px`,
            height: `${1 + (i % 2)}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Satellite */}
      <motion.div
        animate={{ 
          x: [0, 30, 0, -30, 0],
          y: [0, -10, 0, -5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[5%] z-20 hidden md:block"
      >
        <div className="relative">
          <div className="w-8 h-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-700 shadow-md" />
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-2 rounded-sm bg-blue-400/20 border border-blue-300/30" />
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-2 rounded-sm bg-blue-400/20 border border-blue-300/30" />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-500" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute top-1 left-1 w-1 h-1 rounded-full bg-green-400"
          />
        </div>
      </motion.div>

      {/* Bottom planet effects - Reduced intensity */}
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-screen z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[115%] max-w-[1400px] aspect-square rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.25),rgba(139,92,246,0.3),rgba(59,130,246,0.25),rgba(168,85,247,0.25))] blur-2xl"
        />

        <div className="absolute bottom-[-45%] left-1/2 -translate-x-1/2 w-[105%] max-w-[1200px] aspect-square rounded-full bg-[radial-gradient(circle_at_30%_25%,#c084fc_0%,#a855f7_15%,#7c3aed_35%,#4c1d95_55%,#1e1b4b_100%)] shadow-[0_0_100px_-20px_rgba(139,92,246,0.3),0_0_140px_-40px_rgba(59,130,246,0.25)]">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-[18%] left-[10%] w-[45%] h-[35%] bg-gradient-to-br from-purple-300/25 via-blue-300/15 to-transparent rounded-full blur-2xl" />
            <div className="absolute top-[35%] left-0 w-full h-[1px] bg-purple-300/25 blur-sm" />
            <div className="absolute top-[38%] left-0 w-full h-[0.5px] bg-blue-300/20 blur-sm" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[125%] max-w-[1400px] aspect-square rounded-full border-[2px] border-purple-400/15"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.8, delay: 1 }}
          className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1550px] aspect-square rounded-full border-[1px] border-blue-400/15"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-[15vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-purple-400/30 bg-white/5 backdrop-blur-sm shadow-md shadow-purple-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-md shadow-purple-400" />
          <span className="text-xs tracking-[0.2em] text-purple-200/80">AVAILABLE FOR WORK</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] text-purple-200/70 mb-4 uppercase"
        >
          Hi, I'm Kirti
        </motion.p>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-[0.95]"
        >
          Full Stack <br />
          <span className="relative inline-block">
            <motion.span
              aria-hidden
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-r from-purple-600/40 via-fuchsia-600/40 to-blue-600/40 rounded-full"
            />
            <span className="relative font-extrabold italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#c084fc_0%,#a855f7_20%,#7c3aed_40%,#6366f1_55%,#3b82f6_75%,#c084fc_100%)] bg-[length:250%_100%] animate-[shimmer_6s_linear_infinite] drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              Developer
            </span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-purple-200/75 mb-12 font-light max-w-2xl mx-auto"
        >
          Building immersive digital experiences at the intersection of design,
          motion, and code.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white rounded-full font-semibold transition-all shadow-[0_8px_30px_-8px_rgba(139,92,246,0.5)] hover:shadow-[0_12px_40px_-10px_rgba(139,92,246,0.6)]"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(139,92,246,0.12)", borderColor: "rgba(139,92,246,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white/5 backdrop-blur-sm border-2 border-purple-500/30 text-purple-200 hover:text-white rounded-full font-semibold transition-all text-center"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient - Reduced intensity */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[35%] z-[5] overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -left-20 w-[70%] h-[60%] rounded-[50%] bg-gradient-to-tr from-purple-600/30 via-fuchsia-600/20 to-transparent blur-2xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], opacity: [0.28, 0.42, 0.28] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-24 w-[75%] h-[65%] rounded-[50%] bg-gradient-to-tl from-indigo-600/30 via-purple-600/20 to-transparent blur-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-purple-600/15 via-indigo-600/10 to-transparent blur-xl" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#05011a] to-transparent z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-purple-300/50 text-xs tracking-widest">SCROLL</span>
          <div className="w-5 h-8 border border-purple-400/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Add animations keyframes */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0%, 0%); }
          25% { transform: translate(2%, -3%); }
          50% { transform: translate(-2%, 2%); }
          75% { transform: translate(3%, -1%); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
}