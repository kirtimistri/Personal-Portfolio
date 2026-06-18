import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Download,
  FileText,
  ExternalLink,
  Plus,
  X,
  Database,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Zap,
  Shield,
  Globe,
  Cpu,
  ArrowRight,
  Eye,
  Brain,
  Activity,
  BookOpen,
  Briefcase,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  User,
  Heart,
  Star,
  TrendingUp as TrendingUpIcon,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Users,
  BarChart,
  Clock,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Map,
  Flag,
  Target,
  Lightbulb,
  Trophy,
  Coffee,
  Wifi,
  Music,
  Gamepad2,
  BookMarked,
  GraduationCap,
  FolderGit2,
  GitPullRequest,
  Workflow,
  Kanban,
  Figma,
  MonitorSmartphone,
  LineChart,
  PieChart,
  Radio,
  ShieldCheck,
  Key,
  Lock,
  Binary,
  CloudCog,
  Container,
  Box,
  Infinity as InfinityIcon,
  Braces,
  Cuboid,
  Sparkle,
  Atom,
  type LucideIcon,
} from "lucide-react";
import SpaceBackground from "./SpaceBackground";

// --- Extended Types ---
interface DetailedSkill {
  icon: LucideIcon;
  title: string;
  tech: string[];
  color: string;
  longDesc: string;
  proficiency?: number;
  experience?: string;
  projects?: string[];
  certifications?: string[];
  tools?: string[];
  categories?: string[];
  achievements?: string[];
}

interface LearningSkill {
  title: string;
  description: string;
  progress: number;
  icon: LucideIcon;
  color: string;
  resources: string[];
  goals?: string[];
  timeline?: string;
}

// --- Data with expanded details ---
const jobExperiences = [
  {
    title: "Frontend Developer Intern",
    company: "First Buy",
    location: "Mumbai, India",
    period: "3 Months",
    description:
      "Collaborated with design team to build pixel-perfect, responsive websites and web applications.",
    achievements: [
      "Implemented Figma designs with pixel precision",
      "Improved website performance by 35%",
    ],
    technologies: ["React", "JavaScript", "HTML/CSS", "Figma", "Three.js"],
    icon: Palette,
    color: "from-indigo-500 to-purple-500",
    type: "internship",
  },
  {
    title: "Python Developer Intern",
    company: "Hurestic Technopark Pvt Ltd",
    location: "Nashik, India",
    period: "6 Months",
    description:
      "Deep Sudy of python and its framework with experiance of python Fullstack projects .",
    achievements: [
      "implimented python in web development",
      "Bult end to end web application using python",
    ],
    technologies: ["React", "Django", "Django REST Framework", "python", "SQL"],
    icon: Palette,
    color: "from-indigo-500 to-yellow-500",
    type: "internship",
  }
];

// Core Skills (used for horizontal scroll)
const skills = [
  {
    icon: Rocket,
    title: "Backend",
    tech: ["Django","Django REST Framework", "fastAPI","SQL","Node.js"  ,"Express.js","PostgreSQL", "MongoDB"],
    color: "from-indigo-500 to-purple-500",
    longDesc: "Robust backends with Django, fastAPI, and SQL/NoSQL databases.",
    proficiency: 85,
    experience: "2+ years",
    projects: ["E-Commerce API", "Social Media Backend", "Analytics Dashboard"],
    certifications: ["Django Masterclass", "Node.js Advanced"],
  },
  {
    icon: Code2,
    title: "Frontend",
    tech: ["React", "Next.js", "TypeScript", "Tailwind","Three.js"],
    color: "from-blue-500 to-cyan-500",
    longDesc: "Building seamless UIs with React, Next.js, TypeScript, and Tailwind CSS.",
    proficiency: 90,
    experience: "3+ years",
    projects: ["Portfolio Website", "E-Learning Platform", "Dashboard UI"],
    certifications: ["React Advanced", "Next.js Mastery"],
  },
 {
  icon: Brain,
  title: "Artificial Intelligence",
  tech: ["Python", "Ollama", "Gemini API"],
  color: "from-violet-600 to-purple-600",
  longDesc: "Building AI-powered applications including chatbots, language translation systems, voice assistants, and intelligent automation solutions using LLMs, machine learning, and modern AI frameworks.",
  proficiency: 75,
  experience: "1+ years",
  projects: ["AI Chatbot", "Language Translator", "Voice Assistant"],
  certifications: ["LLM Fundamentals", "Prompt Engineering"],
},
{
  icon: Brain,
  title: "Machine Learning",
  tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  color: "from-blue-600 to-indigo-600",
  longDesc: "Built machine learning models for prediction, classification, and data analysis using Python, with experience in data preprocessing, feature engineering, model training, and performance evaluation.",
  proficiency: 70,
  experience: "1+ years",
  projects: ["Sales Predictor", "Customer Segmentation"],
  certifications: ["ML with Python", "Data Science Bootcamp"],
},
];

// More detailed skills (shown when expanded)
const moreSkills: DetailedSkill[] = [
  {
    icon: Database,
    title: "Databases",
    tech: ["PostgreSQL", "MongoDB", "Redis"],
    color: "from-blue-500 to-indigo-500",
    longDesc: "Experienced with both SQL and NoSQL databases, including query optimization, indexing, and data modeling. Proficient in using ORMs like Prisma for type-safe database operations.",
    proficiency: 85,
    experience: "2+ years",
    projects: ["E-commerce DB Design", "Analytics Pipeline", "Real-time Leaderboard"],
    tools: ["postgresql admin panel", "MongoDB Compass", "Redis Insight", "pgAdmin"],
    categories: ["Storage", "Caching", "ORM"],
  },
  {
    icon: Server,
    title: "APIs",
    tech: ["REST", "WebSockets"],
    color: "from-violet-500 to-purple-500",
    longDesc: "Designing and implementing robust APIs with proper documentation, authentication, rate limiting, and versioning strategies.",
    proficiency: 80,
    experience: "2+ years",
    projects: ["RESTful Blog API","Real-time Chat Server"],
    tools: ["Postman"],
    categories: ["Communication", "Integration", "Real-time"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    tech: ["AWS", "Vercel", "Docker", "GitHub Actions"],
    color: "from-indigo-500 to-blue-500",
    longDesc: "Experienced in deploying modern web applications and AI-powered solutions on cloud platforms. Skilled in application hosting, containerization, cloud storage integration, CI/CD workflows, and environment configuration for reliable and scalable deployments.",
    proficiency: 75,
    experience: "1+ years",
    projects: ["AI Translation Chatbot", "Django Chat System", "Task Management Platform"],
    tools: ["AWS Console", "Vercel", "Docker", "GitHub"],
    categories: ["Deployment", "Cloud Infrastructure", "DevOps"],
  },
  {
    icon: Shield,
    title: "Security",
    tech: ["JWT", "OAuth", "Encryption", "CORS","2 step Auth"],
    color: "from-purple-500 to-indigo-500",
    longDesc: "Implementing secure authentication flows, data encryption, and proper CORS policies. Understanding of common web vulnerabilities (XSS, CSRF) and best practices to mitigate them.",
    proficiency: 80,
    experience: "2+ years",
    projects: ["OAuth Integration", "Encrypted Notes App", "Secure API Gateway"],
    tools: ["Auth0", "JWT.io", "OpenSSL", "Security Headers Checker"],
    categories: ["Authentication", "Data Protection", "Compliance"],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    tech: ["Git", "GitHub", "GitLab"],
    color: "from-blue-500 to-violet-500",
    longDesc: "Proficient with Git workflows including feature branching, rebasing, and conflict resolution. Experience with GitHub Actions for CI/CD and collaborative code reviews.",
    proficiency: 90,
    experience: "3+ years",
    projects: ["Open Source Contributions", "Team Project Management", "Git Hooks Automation"],
    tools: ["Git CLI", "GitHub Desktop", "Sourcetree", "GitKraken"],
    categories: ["Collaboration", "CI/CD", "History"],
  },
  {
    icon: Terminal,
    title: "CLI Tools",
    tech: ["Bash", "Zsh", "npm scripts"],
    color: "from-indigo-500 to-purple-500",
    longDesc: "Creating custom scripts and CLI tools to automate repetitive tasks, manage builds, and streamline development workflows. Comfortable with Unix-like command line environments.",
    proficiency: 85,
    experience: "2+ years",
    projects: ["Custom Build Scripts", "Dev Workflow Automation", "Bash Utilities"],
    tools: ["Bash", "Zsh with Oh-My-Zsh", "Node CLI packages"],
    categories: ["Automation", "Tooling", "Scripting"],
  },
  {
    icon: Cpu,
    title: "AI Integration",
    tech: ["OpenAI", "LangChain", "Gemini API", "Ollama"],
    color: "from-indigo-500 to-violet-500",
    longDesc: "Integrating AI capabilities into applications using LLMs, vector databases for semantic search, and agentic workflows. Building intelligent features like summarization, Q&A, and content generation.",
    proficiency: 72,
    experience: "1+ years",
    projects: ["AI Research Assistant", "Document Q&A Bot", "Smart Search Engine"],
    tools: ["OpenAI Playground", "LangSmith", "Pinecone", "ChromaDB"],
    categories: ["Intelligence", "Automation", "NLP"],
  },
  {
    icon: Workflow,
    title: "CI/CD Pipelines",
    tech: ["GitHub Actions", "GitLab CI"],
    color: "from-green-500 to-teal-500",
    longDesc: "Building automated pipelines for testing, building, and deploying applications. Implementing quality gates, environment promotions, and rollback strategies for safe releases.",
    proficiency: 75,
    experience: "1+ years",
    projects: ["Full CI/CD for Node.js App", "Automated Testing Pipeline", "Deployment Automation"],
    tools: ["GitHub Actions", "GitLab CI", "Docker Compose"],
    categories: ["Automation", "DevOps", "Reliability"],
  },
  {
    icon: Container,
    title: "Containerization",
    tech: ["Docker", "Docker Compose", "Container Registry"],
    color: "from-sky-500 to-blue-600",
    longDesc: "Containerizing applications for consistent development and production environments. Using Docker Compose for multi-container setups (app, database, cache, queue).",
    proficiency: 68,
    experience: "1+ years",
    projects: ["Dockerized Dev Environment", "Multi-container Web App", "Containerized Worker Services"],
    tools: ["Docker Desktop", "Docker Hub", "Portainer basics"],
    categories: ["DevOps", "Environment", "Scaling"],
  },
];

// Learning skills with more details
const learningSkills: LearningSkill[] = [
  {
    title: "AI & Machine Learning",
    description: "Exploring LLMs, prompt engineering, and building intelligent applications.",
    progress: 45,
    icon: Brain,
    color: "from-purple-500 to-violet-500",
    resources: ["OpenAI API", "LangChain", "ollama", "Pinecone"],
    goals: ["Build a production RAG system", "Fine-tune an LLM", "Create an AI agent workflow"],
    timeline: "Next 3 months",
  },
   { 
    title: "DevOps & Infrastructure", 
    description: "Containerization with Docker, orchestration with Kubernetes, and automated CI/CD pipelines.", 
    progress: 55, 
    icon: Cloud, 
    color: "from-orange-500 to-red-500", 
    resources: ["Docker", "Kubernetes", "Scaling", "AWS"],
    goals: ["Deploy on Kubernetes", "Set up monitoring stack", "Implement infrastructure as code"],
    timeline: "Next 4 months",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export default function About() {
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<DetailedSkill | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Resume file path - update this to match your actual file name
  const resumeFilePath = "/KIRTI updated resume.pdf";
  const resumeDisplayName = "/KIRTI updated resume.pdf";

  useEffect(() => {
    document.body.style.overflow = showResumeModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showResumeModal]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = resumeDisplayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll for core technologies
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    let direction = 1;

    const autoScroll = () => {
      if (scrollContainer && isAutoScrolling) {
        scrollContainer.scrollLeft += direction;
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 10
        ) {
          direction = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          direction = 1;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 30);

    const pauseScroll = () => setIsAutoScrolling(false);
    const resumeScroll = () => setIsAutoScrolling(true);

    scrollContainer.addEventListener("mouseenter", pauseScroll);
    scrollContainer.addEventListener("mouseleave", resumeScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", pauseScroll);
      scrollContainer.removeEventListener("mouseleave", resumeScroll);
    };
  }, [isAutoScrolling]);

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-[#05011a] overflow-hidden"
    >
      {/* Global styles to hide scrollbars */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Hide scrollbar for horizontal scroll container */
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <SpaceBackground density={30} />

      <div className="relative max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Intro Section */}
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
                  className="absolute inset-0 -z-10 blur-3xl bg-linear-to-r from-purple-600/50 via-pink-500/50 to-blue-500/50 rounded-full"
                />
                <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_50%,#93c5fd_100%)] bg-size-[250%_100%] animate-[shimmer_6s_linear_infinite]">
                  experiences
                </span>
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Picture with Modern Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative mx-auto w-56 h-56 sm:w-72 sm:h-72 group"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-md transition-all duration-500" />
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
              <div className="relative w-full h-full bg-linear-to-br from-purple-600 to-blue-600 p-0.5 rounded-2xl shadow-2xl shadow-purple-500/30">
                <div className="relative w-full h-full bg-[#05011a] overflow-hidden rounded-xl">
                  <img
                    src="/kirti.jpeg"
                    alt="Kirti - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                I'm <span className="text-white font-semibold">Kirti</span> "Full stack developer with a passion for AI, clean code, and creative problem-solving. I build scalable web apps, explore emerging tech, and believe the best learning happens by doing."
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-900/40 hover:shadow-purple-500/50 transition-all"
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

        {/* Work Experience Section */}
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
                <div className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-lg bg-linear-to-br ${exp.color} flex items-center justify-center shrink-0 shadow-lg`}
                      >
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-bold text-base sm:text-lg leading-tight truncate">
                          {exp.title}
                        </h4>
                        <p className="text-purple-300/80 text-sm truncate">{exp.company}</p>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${
                        exp.type === "internship"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : exp.type === "freelance"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      {exp.type === "internship" ? "Intern" : exp.type === "freelance" ? "Freelance" : "Full Time"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-purple-100/60 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-purple-100/70 leading-relaxed mb-4">{exp.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                      <Award className="w-3 h-3" /> Key Achievements
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((a, idx) => (
                        <li key={a} className="text-sm text-purple-100/75 flex gap-2">
                          <span className="text-purple-500 mt-1">✦</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
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

        {/* Currently Learning Section */}
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
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">
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
              <motion.div key={s.title} variants={fadeInUp} whileHover={{ scale: 1.02 }} className="group">
                <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center shadow-lg`}>
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
                        className={`h-full rounded-full bg-linear-to-r ${s.color} relative`}
                      >
                        <motion.div
                          animate={{ x: ["0%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 w-1/2 bg-white/30 blur-sm"
                        />
                      </motion.div>
                    </div>
                  </div>
                  {s.goals && s.goals.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-green-400 mb-2 flex items-center gap-1">
                        <Target className="w-3 h-3" /> Goals
                      </p>
                      <ul className="space-y-1">
                        {s.goals.map((goal) => (
                          <li key={goal} className="text-xs text-purple-200/70 flex gap-2">
                            <span className="text-green-500">▹</span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {s.timeline && (
                    <div className="flex items-center gap-1 text-xs text-purple-300/70 mb-3">
                      <Clock className="w-3 h-3" />
                      <span>Timeline: {s.timeline}</span>
                    </div>
                  )}
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

        {/* Core Skills Section - Horizontal Scroll with hidden scrollbar */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm">
              <Code2 className="w-3 h-3 text-purple-400" />
              <span className="text-xs tracking-[0.2em] text-purple-200/90">EXPERTISE</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Core{" "}
              <span className="bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h3>
            <p className="text-purple-300/65 text-base max-w-2xl mx-auto mt-2">
              My primary tech stack and areas of expertise — scroll to explore →
            </p>
          </motion.div>

          <div className="relative group">
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-purple-600/80 backdrop-blur-sm border border-purple-400/50 flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-purple-600/80 backdrop-blur-sm border border-purple-400/50 flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex gap-6 min-w-max">
                {skills.map((s, i) => (
                  <motion.div
                    key={s.title}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="w-75 sm:w-87.5 shrink-0"
                  >
                    <div className="relative p-5 rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-transparent hover:border-purple-500/40 transition-all duration-300 group h-full">
                      <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${s.color} flex items-center justify-center mb-3`}>
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
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <motion.button
              onClick={() => setShowMoreSkills((v) => !v)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-purple-100 font-semibold backdrop-blur-sm hover:bg-purple-500/15 transition-all"
            >
              {showMoreSkills ? (
                <>
                  <X className="w-4 h-4" /> Show Less
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" /> More Skills & Technologies <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>

          {/* More Skills Section */}
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
                  className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {moreSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.title}
                      variants={fadeInUp}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedSkill(skill)}
                    >
                      <div className="relative p-5 rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-transparent hover:border-purple-500/40 transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${skill.color} flex items-center justify-center shadow-md`}>
                              <skill.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-base">{skill.title}</h4>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {skill.categories?.slice(0, 2).map((cat) => (
                                  <span key={cat} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-purple-300/70">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          {skill.proficiency && (
                            <div className="text-right">
                              <span className="text-xs font-semibold text-purple-300/80">{skill.proficiency}%</span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-purple-200/70 mb-3 line-clamp-2">{skill.longDesc}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {skill.tech.slice(0, 3).map((t) => (
                            <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/5 text-purple-300/70">
                              {t}
                            </span>
                          ))}
                          {skill.tech.length > 3 && (
                            <span className="text-[9px] px-1.5 py-0.5 text-purple-400/70">+{skill.tech.length - 3}</span>
                          )}
                        </div>
                        {skill.proficiency && (
                          <div className="mb-3">
                            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.05 }}
                                className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                              />
                            </div>
                          </div>
                        )}
                        <div className="flex items-center gap-3 text-[10px] text-purple-300/60 mb-2">
                          {skill.experience && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {skill.experience}
                            </span>
                          )}
                          {skill.projects && (
                            <span className="flex items-center gap-1">
                              <FolderGit2 className="w-3 h-3" /> {skill.projects.length} projects
                            </span>
                          )}
                        </div>
                        <div className="mt-auto pt-2 text-right">
                          <span className="text-xs text-purple-400/70 group-hover:text-purple-300 transition-colors inline-flex items-center gap-1">
                            Click for details <ArrowRight className="w-3 h-3" />
                          </span>
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

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-linear-to-br from-[#0d0728] to-[#05011a] border border-purple-500/50 shadow-2xl shadow-purple-500/30 overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10 bg-linear-to-r from-purple-600/20 to-indigo-600/20">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${selectedSkill.color} flex items-center justify-center`}>
                    <selectedSkill.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{selectedSkill.title}</h3>
                    {selectedSkill.categories && (
                      <div className="flex gap-1 mt-0.5">
                        {selectedSkill.categories.map((cat) => (
                          <span key={cat} className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/10 text-purple-300/70">
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <button onClick={() => setSelectedSkill(null)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110">
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-5 hide-scrollbar">
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Overview
                  </h4>
                  <p className="text-sm text-purple-100/80 leading-relaxed">{selectedSkill.longDesc}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {selectedSkill.proficiency && (
                    <div>
                      <h4 className="text-xs font-semibold text-purple-400 mb-1 flex items-center gap-1">
                        <BarChart className="w-3 h-3" /> Proficiency
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                          <div className={`h-full rounded-full bg-linear-to-r ${selectedSkill.color}`} style={{ width: `${selectedSkill.proficiency}%` }} />
                        </div>
                        <span className="text-xs text-purple-300/80">{selectedSkill.proficiency}%</span>
                      </div>
                    </div>
                  )}
                  {selectedSkill.experience && (
                    <div>
                      <h4 className="text-xs font-semibold text-purple-400 mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Experience
                      </h4>
                      <p className="text-sm text-purple-100/80">{selectedSkill.experience}</p>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300/90 border border-purple-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedSkill.tools && selectedSkill.tools.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <Wifi className="w-4 h-4" /> Tools & Software
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.tools.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-purple-300/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedSkill.projects && selectedSkill.projects.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4" /> Featured Projects
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedSkill.projects.map((p) => (
                        <li key={p} className="text-sm text-purple-100/75 flex gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedSkill.certifications && selectedSkill.certifications.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" /> Certifications
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedSkill.certifications.map((c) => (
                        <li key={c} className="text-sm text-purple-100/75 flex gap-2">
                          <Award className="w-4 h-4 text-purple-500 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex justify-end p-4 border-t border-white/10 bg-linear-to-t from-purple-600/20 to-transparent">
                <button onClick={() => setSelectedSkill(null)} className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-purple-500/40 text-purple-100 hover:bg-purple-500/15 font-semibold transition-all">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              className="relative w-full max-w-4xl h-[85vh] rounded-2xl bg-linear-to-br from-[#0d0728] to-[#05011a] border border-purple-500/50 shadow-2xl shadow-purple-500/30 overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-linear-to-r from-purple-600/20 to-indigo-600/20">
                <h3 className="text-white font-semibold inline-flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-300" /> Resume Preview
                </h3>
                <button onClick={() => setShowResumeModal(false)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110" aria-label="Close">
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex-1 bg-white rounded-b-2xl overflow-hidden">
                <iframe src={resumeFilePath} title="Resume" className="w-full h-full" />
              </div>
              <div className="flex justify-center gap-3 p-4 border-t border-white/10 bg-linear-to-t from-purple-600/20 to-transparent">
                <button onClick={handleDownloadResume} className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  <Download className="w-4 h-4" /> Download
                </button>
                <button onClick={() => setShowResumeModal(false)} className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-purple-500/40 text-purple-100 hover:bg-purple-500/15 font-semibold transition-all">
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