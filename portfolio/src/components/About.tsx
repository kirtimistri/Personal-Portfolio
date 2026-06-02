import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Code2, Palette, Rocket, Sparkles, Download, FileText, ExternalLink, 
  Plus, X, Database, Server, Cloud, Figma, GitBranch, Terminal, 
  Layers, Zap, Shield, Globe, Cpu, ArrowRight, Eye, 
  TrendingUp, Brain, Activity, BookOpen, Briefcase, Calendar, MapPin,
  Award, Users, TrendingUp as TrendingUpIcon
} from "lucide-react";

// Job Experience Data
const jobExperiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Innovations",
    location: "Remote",
    period: "2023 - Present",
    description: "Leading the development of enterprise-level web applications, mentoring junior developers, and architecting scalable solutions for global clients.",
    achievements: [
      "Architected and launched 5+ major features serving 100K+ active users",
      "Reduced application load time by 45% through code optimization",
      "Mentored 3 junior developers, improving team productivity by 30%",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    type: "full-time"
  },
  {
    title: "Full Stack Developer",
    company: "StartupHub",
    location: "Bangalore, India",
    period: "2022 - 2023",
    description: "Built and maintained full-stack applications for multiple clients in the fintech and e-commerce sectors.",
    achievements: [
      "Developed 10+ responsive web applications for diverse clients",
      "Integrated payment gateways for 3 e-commerce platforms",
      "Implemented real-time features using WebSockets",
      "Achieved 95% client satisfaction rating"
    ],
    technologies: ["Next.js", "Express", "MongoDB", "Tailwind", "Redis"],
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    type: "full-time"
  },
  {
    title: "Frontend Developer Intern",
    company: "Creative Digital Agency",
    location: "Mumbai, India",
    period: "2021 - 2022",
    description: "Collaborated with design team to build pixel-perfect, responsive websites and web applications.",
    achievements: [
      "Built 15+ responsive landing pages with 99% Lighthouse scores",
      "Collaborated with designers to implement Figma designs accurately",
      "Improved website performance by 35%",
      "Received 'Rising Star' award"
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Figma", "GSAP"],
    icon: Palette,
    color: "from-emerald-500 to-teal-500",
    type: "internship"
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2020 - Present",
    description: "Worked with small businesses and entrepreneurs to build custom websites and web applications.",
    achievements: [
      "Completed 25+ successful client projects",
      "Delivered projects 20% ahead of schedule",
      "Maintained 5-star rating across platforms",
      "Generated over $50K in freelance revenue"
    ],
    technologies: ["WordPress", "React", "Node.js", "MySQL", "Vercel"],
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    type: "freelance"
  }
];

const skills = [
  { 
    icon: Code2, 
    title: "Frontend", 
    desc: "Building responsive and interactive user interfaces with modern frameworks",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "from-cyan-500 to-blue-500",
    longDesc: "Expertise in creating seamless user experiences with React ecosystem, server-side rendering with Next.js, type-safe development with TypeScript, and utility-first styling with Tailwind CSS."
  },
  { 
    icon: Rocket, 
    title: "Backend", 
    desc: "Creating scalable server-side solutions and RESTful APIs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    tech: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    color: "from-emerald-500 to-teal-500",
    longDesc: "Building robust backend systems with Node.js and Express, designing efficient database schemas with PostgreSQL, and implementing NoSQL solutions with MongoDB."
  },
  { 
    icon: Palette, 
    title: "Design", 
    desc: "Crafting beautiful and intuitive user experiences",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    tech: ["Figma", "Framer Motion", "UI/UX", "Adobe Suite"],
    color: "from-purple-500 to-pink-500",
    longDesc: "Creating pixel-perfect designs in Figma, bringing interfaces to life with Framer Motion animations, and ensuring delightful user experiences through thoughtful UX design."
  },
  { 
    icon: Sparkles, 
    title: "DevOps", 
    desc: "Automating deployment and managing cloud infrastructure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    tech: ["Docker", "AWS", "Vercel", "GitHub Actions"],
    color: "from-orange-500 to-red-500",
    longDesc: "Containerizing applications with Docker, deploying to AWS cloud services, automating CI/CD pipelines with GitHub Actions, and hosting on Vercel."
  },
];

const moreSkills = [
  { 
    icon: Database,
    title: "Databases", 
    desc: "Efficient data management and optimization",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    tech: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    color: "from-blue-500 to-indigo-500",
    longDesc: "Managing relational and NoSQL databases, optimizing queries, and implementing caching strategies with Redis."
  },
  { 
    icon: Server,
    title: "API Development", 
    desc: "RESTful & GraphQL APIs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    tech: ["REST API", "GraphQL", "tRPC", "WebSockets"],
    color: "from-violet-500 to-purple-500",
    longDesc: "Designing RESTful architectures, implementing GraphQL schemas, building type-safe APIs with tRPC, and real-time communication with WebSockets."
  },
  { 
    icon: Cloud,
    title: "Cloud Services", 
    desc: "Scalable cloud infrastructure",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    tech: ["AWS", "Vercel", "Netlify", "Cloudflare"],
    color: "from-yellow-500 to-orange-500",
    longDesc: "Deploying and scaling applications on AWS, utilizing serverless functions, and optimizing performance with CDN services."
  },
  { 
    icon: Shield,
    title: "Security", 
    desc: "Application security best practices",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",
    tech: ["JWT", "OAuth", "Encryption", "CORS"],
    color: "from-red-500 to-rose-500",
    longDesc: "Implementing secure authentication with JWT and OAuth, encrypting sensitive data, and configuring CORS policies."
  },
  { 
    icon: GitBranch,
    title: "Version Control", 
    desc: "Collaborative development workflows",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    tech: ["Git", "GitHub", "GitLab", "Bitbucket"],
    color: "from-orange-500 to-amber-500",
    longDesc: "Managing source code with Git, implementing GitFlow workflows, and collaborating via pull requests and code reviews."
  },
  { 
    icon: Terminal,
    title: "CLI Tools", 
    desc: "Command line automation",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    tech: ["Bash", "Zsh", "PowerShell", "npm scripts"],
    color: "from-gray-500 to-slate-500",
    longDesc: "Automating development workflows with shell scripting, creating custom CLI tools, and optimizing build processes."
  },
  { 
    icon: Layers,
    title: "Testing", 
    desc: "Comprehensive testing strategies",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    tech: ["Jest", "Cypress", "Vitest", "Playwright"],
    color: "from-green-500 to-emerald-500",
    longDesc: "Writing unit tests with Jest, end-to-end testing with Cypress and Playwright, and ensuring code quality with Vitest."
  },
  { 
    icon: Zap,
    title: "Performance", 
    desc: "Optimization and monitoring",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    tech: ["Webpack", "Vite", "Lighthouse", "Bundle analysis"],
    color: "from-yellow-500 to-lime-500",
    longDesc: "Optimizing bundle size with Webpack and Vite, measuring performance with Lighthouse, and analyzing bundle composition."
  },
  { 
    icon: Globe,
    title: "Internationalization", 
    desc: "Global-ready applications",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    tech: ["i18n", "Next.js i18n", "React Intl", "Localization"],
    color: "from-sky-500 to-blue-500",
    longDesc: "Implementing multi-language support, managing translations, and creating global-ready applications with i18n frameworks."
  },
  { 
    icon: Cpu,
    title: "AI Integration", 
    desc: "LLMs and AI features",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    tech: ["OpenAI API", "LangChain", "Vector DBs", "Prompt Engineering"],
    color: "from-fuchsia-500 to-pink-500",
    longDesc: "Integrating OpenAI APIs, building LangChain applications, implementing vector databases, and crafting effective prompts."
  },
];

const learningSkills = [
  {
    title: "Cloud Architecture",
    description: "Deep diving into AWS advanced services, microservices architecture, and serverless patterns",
    progress: 65,
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
    resources: ["AWS Solutions Architect", "System Design", "Kubernetes"]
  },
  {
    title: "AI & Machine Learning",
    description: "Exploring LLMs, prompt engineering, and building intelligent applications with AI",
    progress: 45,
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    resources: ["OpenAI API", "LangChain", "Vector Databases"]
  },
  {
    title: "System Design",
    description: "Learning to architect scalable, high-performance systems for millions of users",
    progress: 50,
    icon: TrendingUpIcon,
    color: "from-green-500 to-emerald-500",
    resources: ["Distributed Systems", "Load Balancing", "Caching Strategies"]
  },
  {
    title: "Web3 & Blockchain",
    description: "Understanding decentralized applications and smart contract development",
    progress: 30,
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
    resources: ["Smart Contracts", "Ethereum", "dApp Development"]
  }
];

export default function About() {
  const ref = useRef(null);
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const handleDownloadResume = () => {
    const resumeUrl = "/kirti updated resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Kirti_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (showResumeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showResumeModal]);

  // Responsive star count
  const starCount = windowWidth < 640 ? 15 : windowWidth < 1024 ? 25 : 35;

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 bg-[#05011a] overflow-x-hidden overflow-y-visible"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        section::-webkit-scrollbar {
          display: none;
        }
        @keyframes smooth-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes soft-pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.02); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes progressPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0%, 0%); }
          25% { transform: translate(2%, -3%); }
          50% { transform: translate(-2%, 2%); }
          75% { transform: translate(3%, -1%); }
        }
        .animate-smooth-float {
          animation: smooth-float 4s ease-in-out infinite;
        }
        .animate-soft-pulse {
          animation: soft-pulse 2s ease-in-out infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 12s linear infinite;
        }
        .shimmer-text {
          background: linear-gradient(110deg, #c084fc 0%, #a855f7 20%, #7c3aed 40%, #6366f1 60%, #3b82f6 80%, #c084fc 100%);
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        .progress-pulse {
          animation: progressPulse 2s ease-in-out infinite;
        }
        .float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>

      {/* Clean Background - No Fog */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#05011a] via-[#0a0520] to-[#05011a]" />

      {/* Responsive Background Elements */}
      <div className="absolute inset-0">
        {/* Responsive gradient orbs that scale with screen */}
        <div className="absolute top-[10%] left-[5%] w-[40%] sm:w-[35%] md:w-[30%] lg:w-[25%] aspect-square rounded-full bg-purple-600/15 blur-[80px] sm:blur-[100px] md:blur-[120px] float-slow" />
        <div className="absolute bottom-[15%] right-[5%] w-[35%] sm:w-[30%] md:w-[25%] lg:w-[20%] aspect-square rounded-full bg-blue-600/15 blur-[80px] sm:blur-[100px] md:blur-[120px] float-slow" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50%] sm:w-[45%] md:w-[40%] aspect-square rounded-full bg-indigo-600/10 blur-[100px] sm:blur-[120px] md:blur-[140px] float-slow" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Purple Planet - Responsive sizing */}
      <motion.div
        style={{ y: planetY }}
        className="absolute -top-20 sm:-top-24 md:-top-32 lg:-top-40 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
      >
        <div className="relative w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[450px] h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[450px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 via-fuchsia-500/15 to-transparent blur-2xl sm:blur-3xl"
          />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[30%] rounded-full border-2 border-purple-500/30 blur-[0.5px] sm:blur-sm"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[25%] rounded-full border border-indigo-500/20 blur-[0.5px] sm:blur-sm"
          />
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-700/40 via-fuchsia-600/30 to-purple-900/40 backdrop-blur-2xl sm:backdrop-blur-3xl shadow-xl shadow-purple-500/20">
            <div className="absolute top-[20%] left-[25%] w-[30%] h-[25%] rounded-full bg-purple-500/20 blur-lg sm:blur-xl" />
            <div className="absolute bottom-[30%] right-[20%] w-[25%] h-[20%] rounded-full bg-fuchsia-500/20 blur-lg sm:blur-xl" />
            <div className="absolute top-[60%] left-[15%] w-[20%] h-[15%] rounded-full bg-indigo-500/20 blur-lg sm:blur-xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-900/40 via-transparent to-purple-400/20" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(168,85,247,0.3),0_0_60px_rgba(168,85,247,0.2)]" />
          </div>
          
          <div className="absolute top-[15%] left-[20%] w-[40%] h-[30%] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-md sm:blur-xl" />
        </div>
      </motion.div>

      {/* Responsive Stars - Count changes based on screen size */}
      {Array.from({ length: starCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-white/40"
          style={{
            top: `${((i * 53) % 85) + 5}%`,
            left: `${((i * 37) % 90) + 2}%`,
          }}
          animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 2 + (i % 4),
            repeat: Infinity,
            delay: (i % 5) * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div style={{ y, opacity: 0.95 }} className="relative z-10 max-w-7xl mx-auto">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 md:mb-8 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm shadow-md shadow-purple-500/15"
          >
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[8px] sm:text-[10px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-purple-200/85">
              MY STORY
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">
            Crafting digital{" "}
            <span className="relative inline-block">
              <motion.span
                aria-hidden
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-r from-purple-600/30 via-fuchsia-600/30 to-blue-600/30 rounded-full"
              />
              <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#c084fc_0%,#a855f7_20%,#7c3aed_40%,#6366f1_60%,#3b82f6_80%,#c084fc_100%)] bg-[length:250%_100%] animate-[shimmer_6s_linear_infinite]">
                experiences
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Picture + Bio Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-shrink-0 w-full sm:w-auto flex justify-center"
          >
            <div className="relative group animate-smooth-float">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-blue-500/40 opacity-60" />
              <div className="absolute -inset-6 rounded-2xl border border-purple-500/30 animate-rotate-slow" />
              <div className="absolute -inset-8 rounded-2xl border border-indigo-500/20 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="absolute -inset-10 rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 animate-soft-pulse blur-2xl" />
              
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                  animate={{
                    y: [0, -10 - (i * 2), 0],
                    x: [0, (i % 2 === 0 ? 10 : -10), 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.2, 0]
                  }}
                  transition={{
                    duration: 2.5 + (i * 0.2),
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: 'center'
                  }}
                />
              ))}
              
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-indigo-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/15 via-transparent to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="/kirti.jpeg"
                  alt="Kirti - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-base sm:text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0 font-light">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 font-semibold">Kirti</span> — a full stack developer passionate about building beautiful,
              performant web applications. I blend thoughtful design with robust engineering
              to ship products people love.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white overflow-hidden transition-all shadow-md shadow-purple-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </span>
              </motion.button>
              
              <motion.button
                onClick={() => setShowResumeModal(true)}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139,92,246,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-purple-200 border border-purple-500/30 overflow-hidden backdrop-blur-sm hover:bg-purple-500/10"
              >
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Preview Resume</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Job Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-sm">
              <Briefcase className="w-3 h-3 text-blue-400" />
              <span className="text-xs tracking-[0.2em] text-blue-200/80">WORK EXPERIENCE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Journey
              </span>
            </h3>
            <p className="text-purple-300/65 text-base max-w-2xl mx-auto">
              Professional experience and internships across the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-0">
            {jobExperiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative h-full p-5 rounded-xl bg-gradient-to-br from-white/8 to-white/2 border border-white/15 transition-all duration-300 hover:border-blue-500/30">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} p-0.5`}>
                        <div className="w-full h-full rounded-lg bg-[#05011a]/90 flex items-center justify-center">
                          <exp.icon className="w-5 h-5 text-white/80" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{exp.title}</h4>
                        <p className="text-blue-400/80 text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      exp.type === 'internship' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      exp.type === 'freelance' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {exp.type === 'internship' ? 'Internship' : exp.type === 'freelance' ? 'Freelance' : 'Full Time'}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-3 text-xs text-purple-400/70">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-purple-300/70 text-sm mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mt-3">
                    <p className="text-purple-300/80 text-xs font-semibold mb-2 flex items-center gap-2">
                      <Award className="w-3 h-3 text-blue-400" />
                      Key Achievements
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-purple-400/70 text-xs">
                          <span className="mt-1 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-3 pt-2 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300/65">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-green-500/30 bg-white/5 backdrop-blur-sm">
              <BookOpen className="w-3 h-3 text-green-400" />
              <span className="text-xs tracking-[0.2em] text-green-200/80">ALWAYS LEARNING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Currently{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Exploring
              </span>
            </h3>
            <p className="text-purple-300/65 text-base max-w-2xl mx-auto">
              Expanding my horizons with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-0">
            {learningSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                <div className="relative p-5 rounded-xl bg-gradient-to-br from-white/8 to-white/2 border border-white/15 transition-all duration-300 hover:border-green-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} p-0.5`}>
                      <div className="w-full h-full rounded-lg bg-[#05011a]/90 flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-white/80" />
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-base">{skill.title}</h4>
                  </div>
                  
                  <p className="text-purple-300/70 text-xs mb-3 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-purple-400/65 text-[10px]">Progress</span>
                      <span className="text-green-400/75 text-[10px] font-medium">{skill.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-purple-500/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} progress-pulse`}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-2 border-t border-white/10">
                    <p className="text-purple-400/60 text-[9px] mb-1.5">Learning Resources:</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.resources.map((resource) => (
                        <span key={resource} className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300/65">
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Technologies Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-sm">
              <Code2 className="w-3 h-3 text-purple-400" />
              <span className="text-xs tracking-[0.2em] text-purple-200/85">EXPERTISE</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Core <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h3>
            <p className="text-purple-300/65 text-base max-w-2xl mx-auto">
              My primary tech stack and areas of expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full bg-gradient-to-br from-white/8 to-white/2 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/15 transition-all duration-300 hover:border-purple-500/30 hover:shadow-md">
                  <div className={`h-0.5 w-full bg-gradient-to-r ${skill.color}`} />
                  <div className="p-6">
                    <div className="relative mb-5">
                      <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-0.5`}>
                        <div className="w-full h-full rounded-xl bg-[#05011a]/90 flex items-center justify-center">
                          <img 
                            src={skill.logo} 
                            alt={skill.title}
                            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                      {skill.title}
                    </h3>
                    
                    <p className="text-purple-300/80 text-base mb-4 leading-relaxed">
                      {skill.longDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300/80 border border-purple-500/15 transition-all duration-300 group-hover:bg-purple-500/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* More Skills Button */}
        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowMoreSkills(!showMoreSkills)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-500/30 text-purple-200 font-semibold transition-all hover:bg-purple-500/10"
            >
              <span className="relative flex items-center gap-2">
                {showMoreSkills ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Show Less</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>More Skills & Technologies</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </motion.button>
          </motion.div>

          <AnimatePresence mode="wait">
            {showMoreSkills && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: "auto", 
                  marginTop: "2rem" 
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0, 
                  marginTop: 0,
                  transition: { duration: 0.4 }
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.04, 0.62, 0.23, 0.98]
                }}
                className="overflow-hidden"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    Extended Toolkit
                  </h3>
                  <p className="text-purple-300/65 text-sm sm:text-base">
                    Additional technologies and specialized skills
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
                  {moreSkills.map((skill, i) => (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.4) }}
                      whileHover={{ y: -3 }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-gradient-to-br from-white/8 to-white/2 rounded-xl overflow-hidden backdrop-blur-sm border border-white/15 transition-all duration-300 hover:border-purple-500/30">
                        <div className="p-5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${skill.color} p-0.5`}>
                              <div className="w-full h-full rounded-lg bg-[#05011a]/90 flex items-center justify-center">
                                <img 
                                  src={skill.logo} 
                                  alt={skill.title}
                                  className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-105"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                            <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                              {skill.title}
                            </h3>
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {skill.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300/70 border border-purple-500/15 transition-all duration-300 group-hover:bg-purple-500/15"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-purple-300/60 text-xs mt-3">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[85vh] bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl border border-purple-500/30 shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-[#05011a]/90 to-transparent backdrop-blur-sm">
                <h3 className="text-white font-semibold text-lg">Resume Preview</h3>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="w-full h-full overflow-auto pt-16">
                <iframe
                  src="/kirti updated resume.pdf#toolbar=0"
                  className="w-full h-full bg-white"
                  title="Resume Preview"
                  style={{ border: 'none' }}
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center gap-4 p-4 bg-gradient-to-t from-[#05011a]/90 to-transparent backdrop-blur-sm">
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold text-white transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </motion.button>
                <motion.button
                  onClick={() => setShowResumeModal(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-xl font-semibold text-purple-200 border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/10 transition-all"
                >
                  <span>Close</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient fade - reduced - REMOVED THE SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-gradient-to-t from-[#05011a] to-transparent pointer-events-none z-10" />
      
      {/* Edge guards */}
      <div className="absolute top-0 left-0 w-3 sm:w-4 md:w-6 h-full bg-gradient-to-r from-[#05011a] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-3 sm:w-4 md:w-6 h-full bg-gradient-to-l from-[#05011a] to-transparent pointer-events-none z-10" />
    </section>
  );
}