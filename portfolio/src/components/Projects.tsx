// Projects.tsx
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Lock, Sparkles, Github, ExternalLink, X, Code2 } from "lucide-react";

const projects = [
  {
    title: "Lumen Chat",
    subtitle: "Encrypted chat with AI summaries",
    description: "Real-time chat app with end-to-end encryption, file sharing, and AI-powered thread summaries.",
    longDescription: "Lumen is an experiment in combining strong privacy with AI assistance. Messages are E2E encrypted on the client; AI summaries are generated on-device using a quantized model so plaintext never leaves the user. Built solo over a few months, it handles real-time WebSocket connections, file chunking for large uploads, and cross-device presence sync.",
    tags: ["Socket.io", "Redis", "WebCrypto", "OpenAI"],
    icon: Lock,
    gradient: "from-cyan-500/30 via-blue-500/20 to-cyan-500/30",
    color: "cyan",
    features: [
      "End-to-end encrypted messages",
      "On-device AI thread summaries",
      "File sharing with chunked uploads",
      "Cross-device presence sync",
      "Real-time typing indicators"
    ],
    github: "https://github.com/",
    live: "https://lumen-chat.demo",
    image: "/projects/lumen-chat.jpg",
    techStack: ["React", "Node.js", "Socket.io", "Redis", "OpenAI API"]
  },
  {
    title: "Pulse Portfolio",
    subtitle: "Motion-rich portfolio template",
    description: "An animation-heavy portfolio template built with Framer Motion, GSAP, and custom WebGL shaders.",
    longDescription: "Pulse is a portfolio template I built and open-sourced. It pairs scroll-driven motion with a custom WebGL shader background and weighs less than 60KB gzipped on first paint. The template includes pre-built components for projects, about sections, and contact forms.",
    tags: ["Three.js", "Motion", "GSAP", "GLSL"],
    icon: Sparkles,
    gradient: "from-purple-500/30 via-pink-500/20 to-purple-500/30",
    color: "purple",
    features: [
      "Custom WebGL nebula shader",
      "Scroll-pinned section transitions",
      "Under 60KB initial JS payload",
      "Open source on GitHub",
      "Responsive design system"
    ],
    github: "https://github.com/",
    live: "https://pulse-portfolio.demo",
    image: "/projects/pulse-portfolio.jpg",
    techStack: ["Next.js", "Three.js", "Framer Motion", "GSAP", "Tailwind"]
  }
];

export default function Projects() {
  const ref = useRef(null);
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <>
      <section
        ref={ref}
        id="projects"
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#05011a] overflow-x-hidden overflow-y-visible"
      >
        {/* Background gradients - responsive opacity */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,#4c1d95_0%,#1e1b4b_40%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,#3b0764_0%,#1e1b4b_35%,transparent_65%)]" />
        
        {/* Floating orbs - reduced on mobile for performance */}
        {!isMobile && (
          <>
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-br from-purple-600/20 via-fuchsia-600/15 to-transparent blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{ x: [0, -40, 0], y: [0, 25, 0], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] right-[-10%] w-[55%] aspect-square rounded-full bg-gradient-to-bl from-blue-600/20 via-indigo-600/15 to-transparent blur-3xl pointer-events-none"
            />
          </>
        )}
        
        <motion.div style={{ y }} className="relative z-10 max-w-6xl mx-auto">
          {/* Section header - responsive text sizes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm shadow-lg shadow-purple-500/20"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-400" />
              <span className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-purple-200/90">FEATURED WORK</span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">
              Projects I've{" "}
              <span className="relative inline-block">
                <motion.span
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 -z-10 blur-2xl sm:blur-3xl bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-blue-600/50 rounded-full"
                />
                <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_50%,#93c5fd_100%)] bg-[length:250%_100%] animate-[shimmer_6s_linear_infinite] text-sm sm:text-base">
                  crafted
                </span>
              </span>
            </h2>
            <p className="text-purple-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Each project represents countless hours of iteration, learning, and pushing boundaries.
            </p>
          </motion.div>

          {/* Projects grid - responsive spacing */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative group"
              >
                {/* Responsive layout - stack on mobile, row on desktop */}
                <div className={`flex flex-col ${!isMobile && idx % 2 === 0 ? 'lg:flex-row' : !isMobile ? 'lg:flex-row-reverse' : ''} gap-6 sm:gap-8 lg:gap-12 items-center`}>
                  
                  {/* Project image area - full width on mobile */}
                  <motion.div
                    whileHover={!isMobile ? { scale: 1.02 } : {}}
                    className="flex-1 w-full cursor-pointer"
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:shadow-purple-500/20 group-hover:border-purple-500/40">
                      <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <project.icon className="w-16 h-16 sm:w-20 sm:h-20 text-white/20 transition-transform duration-500 group-hover:scale-110" />
                          </div>
                        )}
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* View details overlay - responsive sizing */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            View Project
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project info - responsive text sizes */}
                  <motion.div className="flex-1 space-y-3 sm:space-y-4 w-full px-2 sm:px-0">
                    <div className="inline-flex p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 shadow-md">
                      <project.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${project.color}-400`} />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-purple-300/80 text-sm sm:text-base md:text-lg">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-purple-200/70 text-xs sm:text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags - responsive sizing */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3 md:pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300/85 transition-all duration-300 hover:bg-purple-500/25 hover:border-purple-500/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons - responsive spacing */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
                      <motion.button
                        onClick={() => setActiveProject(project)}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-purple-300 hover:text-white transition-colors group"
                      >
                        <span className="tracking-wide">MORE DETAILS</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.button>
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-purple-300/70 text-[10px] sm:text-xs hover:text-white hover:border-purple-400/40 transition-all"
                        >
                          <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          Code
                        </motion.a>
                      )}
                      
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 text-purple-300/70 text-[10px] sm:text-xs hover:text-white hover:border-purple-400/40 transition-all"
                        >
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Decorative line between projects - responsive */}
                {idx < projects.length - 1 && (
                  <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 left-1/2 -translate-x-1/2 flex justify-center">
                    <div className="w-px h-8 sm:h-10 md:h-12 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Edge guards - responsive width */}
        <div className="absolute top-0 left-0 w-4 sm:w-6 md:w-8 h-full bg-gradient-to-r from-[#05011a] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-4 sm:w-6 md:w-8 h-full bg-gradient-to-l from-[#05011a] to-transparent pointer-events-none z-10" />
      </section>

      {/* Project Modal - Responsive */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#05011a]/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0d0728] to-[#05011a] shadow-2xl shadow-purple-500/20"
            >
              {/* Modal Header with Image - responsive height */}
              <div className={`relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br ${activeProject.gradient}`}>
                {activeProject.image ? (
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <activeProject.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0728] via-transparent to-transparent" />
                
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
                >
                  <X size={isMobile ? 14 : 16} />
                </button>
              </div>

              {/* Modal Content - responsive padding and text sizes */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{activeProject.title}</h3>
                    <p className="text-purple-300/80 text-sm sm:text-base">{activeProject.subtitle}</p>
                  </div>
                  <div className="inline-flex p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 self-start">
                    <activeProject.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${activeProject.color}-400`} />
                  </div>
                </div>

                <p className="text-purple-200/80 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 md:mb-6">
                  {activeProject.longDescription}
                </p>

                {/* Tech Stack - responsive grid */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-purple-300/80 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeProject.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-lg bg-purple-500/15 border border-purple-500/25 text-purple-300/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features - responsive grid */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-purple-300/80 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {activeProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5 sm:gap-2 text-purple-200/70 text-[11px] sm:text-xs md:text-sm">
                        <span className="mt-1 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full bg-white/5 border border-white/10 text-purple-100/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - responsive */}
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
                  {activeProject.live && (
                    <motion.a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs sm:text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <ExternalLink size={isMobile ? 12 : 14} />
                      Live Demo
                    </motion.a>
                  )}
                  {activeProject.github && (
                    <motion.a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl border border-purple-500/40 bg-white/5 text-purple-200 text-xs sm:text-sm hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 transition-all"
                    >
                      <Github size={isMobile ? 12 : 14} />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}