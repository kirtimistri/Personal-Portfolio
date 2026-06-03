import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Code2, Palette, Rocket, Sparkles, Download, FileText, ExternalLink,
  Plus, X, Database, Server, Cloud, GitBranch, Terminal,
  Layers, Zap, Shield, Globe, Cpu, ArrowRight, Eye,
  Brain, Activity, BookOpen, Briefcase, Calendar, MapPin,
  Award, TrendingUp, User, Heart, Star, TrendingUp as TrendingUpIcon
} from "lucide-react";
import SpaceBackground from "./SpaceBackground";

const jobExperiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Innovations",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Leading the development of enterprise-level web applications, mentoring junior developers, and architecting scalable solutions for global clients.",
    achievements: [
      "Architected and launched 5+ major features serving 100K+ active users",
      "Reduced application load time by 45% through code optimization",
      "Mentored 3 junior developers, improving team productivity by 30%",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    icon: Briefcase,
    color: "from-purple-500 to-indigo-500",
    type: "full-time",
  },
  {
    title: "Full Stack Developer",
    company: "StartupHub",
    location: "Bangalore, India",
    period: "2022 - 2023",
    description:
      "Built and maintained full-stack applications for multiple clients in the fintech and e-commerce sectors.",
    achievements: [
      "Developed 10+ responsive web applications",
      "Integrated payment gateways for 3 e-commerce platforms",
      "Implemented real-time features using WebSockets",
    ],
    technologies: ["Next.js", "Express", "MongoDB", "Tailwind", "Redis"],
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    type: "full-time",
  },
  {
    title: "Frontend Developer Intern",
    company: "Creative Digital Agency",
    location: "Mumbai, India",
    period: "2021 - 2022",
    description:
      "Collaborated with design team to build pixel-perfect, responsive websites and web applications.",
    achievements: [
      "Built 15+ landing pages with 99% Lighthouse scores",
      "Implemented Figma designs with pixel precision",
      "Improved website performance by 35%",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Figma", "GSAP"],
    icon: Palette,
    color: "from-indigo-500 to-purple-500",
    type: "internship",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2020 - Present",
    description:
      "Worked with small businesses and entrepreneurs to build custom websites and web applications.",
    achievements: [
      "Completed 25+ successful client projects",
      "Delivered projects 20% ahead of schedule",
      "Maintained 5-star rating across platforms",
    ],
    technologies: ["WordPress", "React", "Node.js", "MySQL", "Vercel"],
    icon: Rocket,
    color: "from-violet-500 to-blue-500",
    type: "freelance",
  },
];

const skills = [
  { icon: Code2, title: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind"], color: "from-blue-500 to-cyan-500", longDesc: "Building seamless UIs with React, Next.js, TypeScript, and Tailwind CSS." },
  { icon: Rocket, title: "Backend", tech: ["Node.js", "Express", "PostgreSQL", "MongoDB"], color: "from-indigo-500 to-purple-500", longDesc: "Robust backends with Node, Express, and SQL/NoSQL databases." },
  { icon: Palette, title: "Design", tech: ["Figma", "Framer Motion", "UI/UX"], color: "from-purple-500 to-violet-500", longDesc: "Pixel-perfect Figma designs and delightful motion with Framer Motion." },
  { icon: Sparkles, title: "DevOps", tech: ["Docker", "AWS", "Vercel", "CI/CD"], color: "from-blue-600 to-indigo-600", longDesc: "Containerized deploys, AWS infra, and automated CI/CD pipelines." },
];

const moreSkills = [
  { icon: Database, title: "Databases", tech: ["PostgreSQL", "MongoDB", "Redis", "Prisma"], color: "from-blue-500 to-indigo-500" },
  { icon: Server, title: "APIs", tech: ["REST", "GraphQL", "tRPC", "WebSockets"], color: "from-violet-500 to-purple-500" },
  { icon: Cloud, title: "Cloud", tech: ["AWS", "Vercel", "Netlify", "Cloudflare"], color: "from-indigo-500 to-blue-500" },
  { icon: Shield, title: "Security", tech: ["JWT", "OAuth", "Encryption", "CORS"], color: "from-purple-500 to-indigo-500" },
  { icon: GitBranch, title: "Version Control", tech: ["Git", "GitHub", "GitLab"], color: "from-blue-500 to-violet-500" },
  { icon: Terminal, title: "CLI Tools", tech: ["Bash", "Zsh", "npm scripts"], color: "from-indigo-500 to-purple-500" },
  { icon: Layers, title: "Testing", tech: ["Jest", "Cypress", "Vitest", "Playwright"], color: "from-violet-500 to-blue-500" },
  { icon: Zap, title: "Performance", tech: ["Vite", "Lighthouse", "Bundle analysis"], color: "from-purple-500 to-indigo-500" },
  { icon: Globe, title: "i18n", tech: ["i18next", "React Intl", "Localization"], color: "from-blue-500 to-indigo-500" },
  { icon: Cpu, title: "AI Integration", tech: ["OpenAI", "LangChain", "Vector DBs"], color: "from-indigo-500 to-violet-500" },
];

const learningSkills = [
  { title: "Cloud Architecture", description: "Deep diving into AWS advanced services, microservices, and serverless patterns.", progress: 65, icon: Cloud, color: "from-blue-500 to-indigo-500", resources: ["AWS SAA", "System Design", "Kubernetes"] },
  { title: "AI & Machine Learning", description: "Exploring LLMs, prompt engineering, and building intelligent applications.", progress: 45, icon: Brain, color: "from-purple-500 to-violet-500", resources: ["OpenAI API", "LangChain", "Vector DBs"] },
  { title: "System Design", description: "Architecting scalable, high-performance systems for millions of users.", progress: 50, icon: TrendingUpIcon, color: "from-indigo-500 to-blue-500", resources: ["Distributed Systems", "Load Balancing", "Caching"] },
  { title: "Web3 & Blockchain", description: "Understanding decentralized apps and smart contract development.", progress: 30, icon: Activity, color: "from-violet-500 to-purple-500", resources: ["Smart Contracts", "Ethereum", "dApps"] },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function About() {
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showResumeModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showResumeModal]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/kirti updated resume.pdf";
    link.download = "Kirti_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-[#05011a] overflow-hidden"
    >
      <SpaceBackground density={30} />

      <div className="relative max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
              <span className="text-xs tracking-[0.2em] text-purple-200/90">MY STORY</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Crafting digital{" "}
              <span className="relative inline-block">
                <motion.span
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-blue-500/50 rounded-full"
                />
                <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_50%,#93c5fd_100%)] bg-[length:250%_100%] animate-[shimmer_6s_linear_infinite]">
                  experiences
                </span>
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Square Picture with New Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative mx-auto w-56 h-56 sm:w-72 sm:h-72 group"
            >
              {/* Animated Border Gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-md transition-all duration-500" />
              
              {/* Rotating Square Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-2xl border border-purple-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 rounded-2xl border border-blue-500/20"
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 p-0.5 rounded-2xl shadow-2xl shadow-purple-500/30">
                <div className="relative w-full h-full bg-[#05011a] overflow-hidden rounded-xl">
                  <img
                    src="/kirti.jpeg"
                    alt="Kirti - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg text-purple-100/80 leading-relaxed mb-6">
                I'm <span className="text-white font-semibold">Kirti</span> — a full stack
                developer passionate about building beautiful, performant web applications. I
                blend thoughtful design with robust engineering to ship products people love.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-900/40 hover:shadow-purple-500/50 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>
                <motion.button
                  onClick={() => setShowResumeModal(true)}
                  whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/40 text-purple-100 backdrop-blur-sm hover:bg-purple-500/15 font-semibold transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Preview Resume
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Work Experience - Neumorphic Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-blue-500/40 bg-white/5 backdrop-blur-sm">
              <Briefcase className="w-3 h-3 text-blue-400" />
              <span className="text-xs tracking-[0.2em] text-blue-200/90">WORK EXPERIENCE</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              My{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Journey
              </span>
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {jobExperiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-[#0a0a1a] border-l-4 border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-bold text-base sm:text-lg leading-tight truncate">{exp.title}</h4>
                        <p className="text-purple-300/80 text-sm truncate">{exp.company}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${
                      exp.type === "internship" ? "bg-emerald-500/20 text-emerald-400" :
                      exp.type === "freelance" ? "bg-orange-500/20 text-orange-400" :
                      "bg-purple-500/20 text-purple-400"
                    }`}>
                      {exp.type === "internship" ? "Intern" : exp.type === "freelance" ? "Freelance" : "Full Time"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-purple-100/60 mb-4">
                    <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                    <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                  </div>

                  <p className="text-sm text-purple-100/70 leading-relaxed mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-purple-400 mb-2">Key Achievements</p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((a, idx) => (
                        <li key={a} className="text-sm text-purple-100/75 flex gap-2">
                          <span className="text-purple-500 mt-1">✦</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-purple-500/20">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Currently Learning - Glassmorphism Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-green-500/40 bg-white/5 backdrop-blur-sm">
              <BookOpen className="w-3 h-3 text-green-400" />
              <span className="text-xs tracking-[0.2em] text-green-200/90">ALWAYS LEARNING</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Currently{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Exploring
              </span>
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {learningSkills.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg">{s.title}</h4>
                  </div>
                  <p className="text-sm text-purple-200/80 mb-4">{s.description}</p>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-purple-300/80 mb-1.5">
                      <span>Progress</span>
                      <span className="text-green-400">{s.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-purple-400 mb-2">Resources</p>
                    <div className="flex flex-wrap gap-2">
                      {s.resources.map((r) => (
                        <span key={r} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-purple-300/80">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Skills - Minimalist Cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm">
              <Code2 className="w-3 h-3 text-purple-400" />
              <span className="text-xs tracking-[0.2em] text-purple-200/90">EXPERTISE</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Core Technologies</h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="relative p-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-purple-500/40 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-3`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{s.title}</h4>
                  <p className="text-purple-300/70 text-sm mb-3">{s.longDesc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-purple-300/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <motion.button
              onClick={() => setShowMoreSkills((v) => !v)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-purple-100 font-semibold backdrop-blur-sm hover:bg-purple-500/15 transition-all"
            >
              {showMoreSkills ? <><X className="w-4 h-4" /> Show Less</> : <><Plus className="w-4 h-4" /> More Skills & Technologies <ArrowRight className="w-4 h-4" /></>}
            </motion.button>
          </div>

          <AnimatePresence>
            {showMoreSkills && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {moreSkills.map((s, i) => (
                    <motion.div
                      key={s.title}
                      variants={fadeInUp}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center`}>
                        <s.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">{s.title}</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {s.tech.slice(0, 2).map((t) => (
                            <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-purple-300/70">
                              {t}
                            </span>
                          ))}
                          {s.tech.length > 2 && (
                            <span className="text-[9px] px-1.5 py-0.5 text-purple-400/70">+{s.tech.length - 2}</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] rounded-2xl bg-gradient-to-br from-[#0d0728] to-[#05011a] border border-purple-500/50 shadow-2xl shadow-purple-500/30 overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
                <h3 className="text-white font-semibold inline-flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-300" /> Resume Preview
                </h3>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex-1 bg-white rounded-b-2xl overflow-hidden">
                <iframe src="/kirti updated resume.pdf" title="Resume" className="w-full h-full" />
              </div>
              <div className="flex justify-center gap-3 p-4 border-t border-white/10 bg-gradient-to-t from-purple-600/20 to-transparent">
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-purple-500/40 text-purple-100 hover:bg-purple-500/15 font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}