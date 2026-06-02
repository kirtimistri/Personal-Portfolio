import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, X, Layers, Sparkles, Loader2, Clock, GitBranch, Zap } from "lucide-react";
import SpaceBackground from "./SpaceBackground";

interface Project {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  gradient: string;
  preview: React.ReactNode;
  features: string[];
  github?: string;
  live?: string;
  imageUrl?: string;
  status?: "ongoing" | "completed";
  progress?: number;
}

// Ongoing Projects
const ongoingProjects: Project[] = [
  {
    title: "AI Code Assistant",
    tagline: "Intelligent coding companion",
    description: "An AI-powered VS Code extension that provides real-time code suggestions, bug detection, and automated refactoring.",
    longDescription: "Building a smart coding assistant that leverages LLMs to help developers write better code faster. Features include context-aware suggestions, security vulnerability detection, and automated documentation generation.",
    tags: ["VS Code API", "OpenAI", "TypeScript", "LangChain"],
    gradient: "from-purple-500/40 via-pink-500/30 to-orange-500/40",
    features: [
      "Real-time code suggestions",
      "Bug detection and fixes",
      "Automated documentation",
      "Security vulnerability scan",
    ],
    github: "#",
    imageUrl: "/projects/ai-assistant.jpg",
    status: "ongoing",
    progress: 45,
    preview: (
      <div className="relative w-full h-full p-5 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 bg-black/30 rounded-lg p-3 font-mono text-xs">
          <div className="text-purple-300/80">$ coding...</div>
<div className="text-green-400/60 mt-2">{'>'} AI Assistant ready</div>
<div className="text-blue-400/60">{'>'} Analyzing code...</div>
<div className="text-purple-300/50 mt-2">const optimizedCode = await AI.suggest();</div>
        </div>
      </div>
    ),
  },
  {
    title: "Real-time Collaboration Hub",
    tagline: "Team collaboration platform",
    description: "A real-time collaborative workspace with document editing, video calls, and project management tools.",
    longDescription: "Building a comprehensive collaboration platform similar to Notion + Zoom. Features include real-time document editing, video conferencing, task management, and team analytics.",
    tags: ["WebRTC", "Socket.io", "React", "Node.js"],
    gradient: "from-blue-500/40 via-cyan-500/30 to-teal-500/40",
    features: [
      "Real-time document editing",
      "HD video conferencing",
      "Task management system",
      "Team performance analytics",
    ],
    github: "#",
    imageUrl: "/projects/collab-hub.jpg",
    status: "ongoing",
    progress: 30,
    preview: (
      <div className="relative w-full h-full p-4 flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full bg-purple-500/30" />
          <div className="flex-1">
            <div className="h-2 w-24 rounded-full bg-white/20 mb-2" />
            <div className="h-2 w-32 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="h-2 w-3/4 rounded-full bg-white/20 mb-2" />
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/10 mt-2" />
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex-1 h-8 rounded-lg bg-white/5 border border-white/10" />
          <div className="flex-1 h-8 rounded-lg bg-white/5 border border-white/10" />
        </div>
      </div>
    ),
  },
];

// Full Stack Projects
const fullStackProjects: Project[] = [
  {
    title: "Nebula Commerce",
    tagline: "Headless storefront for indie brands",
    description:
      "A fully headless e-commerce platform with real-time inventory and a custom admin dashboard.",
    longDescription:
      "Nebula Commerce powers small brands with a fast, headless storefront. I built the entire stack — from the React storefront with optimistic cart updates to the Node admin panel, Stripe Connect onboarding, and a Postgres-backed inventory engine that syncs across warehouses in real time.",
    tags: ["Next.js", "Stripe", "Postgres", "Redis"],
    gradient: "from-purple-500/40 via-indigo-500/30 to-blue-500/40",
    features: [
      "Real-time multi-warehouse inventory",
      "Stripe Connect marketplace payouts",
      "Headless CMS with live preview",
      "Edge-cached product pages (<100ms TTFB)",
    ],
    github: "#",
    live: "#",
    imageUrl: "/projects/nebula-commerce.jpg",
    status: "completed",
    preview: (
      <div className="relative w-full h-full p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-300/70" />
          <div className="w-2 h-2 rounded-full bg-indigo-300/70" />
          <div className="w-2 h-2 rounded-full bg-blue-300/70" />
        </div>
        <div className="grid grid-cols-3 gap-2 flex-1">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-sm"
            />
          ))}
        </div>
        <div className="h-2 w-3/4 rounded-full bg-white/10" />
        <div className="h-2 w-1/2 rounded-full bg-white/5" />
      </div>
    ),
  },
  {
    title: "Orbit Analytics",
    tagline: "Product analytics, beautifully visualized",
    description:
      "Self-hosted analytics dashboard with custom event tracking and live chart updates.",
    longDescription:
      "Orbit is a privacy-first analytics tool I built to replace heavyweight competitors for small teams. Events flow through a Kafka-style queue into ClickHouse, and the React dashboard renders billion-row aggregations in under a second.",
    tags: ["React", "Node", "ClickHouse", "WebSockets"],
    gradient: "from-blue-500/40 via-indigo-500/30 to-purple-500/40",
    features: [
      "Billion-row queries under 1 second",
      "Live updating charts via WebSockets",
      "Custom funnel & retention builder",
      "GDPR-friendly, fully self-hosted",
    ],
    github: "#",
    live: "#",
    imageUrl: "/projects/orbit-analytics.jpg",
    status: "completed",
    preview: (
      <div className="relative w-full h-full p-6 flex flex-col gap-4">
        <div className="flex justify-between items-end h-3/5 gap-2">
          {[40, 70, 30, 85, 55, 95, 60, 75].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-purple-500/70 to-blue-400/80"
            />
          ))}
        </div>
        <div className="h-px bg-white/20" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 rounded-md bg-white/5 border border-white/10" />
          <div className="h-8 rounded-md bg-white/5 border border-white/10" />
          <div className="h-8 rounded-md bg-white/5 border border-white/10" />
        </div>
      </div>
    ),
  },
];

// Mini Projects
const miniProjects: Project[] = [
  {
    title: "Lumen Chat",
    tagline: "Encrypted chat with AI summaries",
    description:
      "Real-time chat app with end-to-end encryption, file sharing, and AI-powered thread summaries.",
    longDescription:
      "Lumen is an experiment in combining strong privacy with AI assistance. Messages are E2E encrypted on the client; AI summaries are generated on-device using a quantized model so plaintext never leaves the user. Built solo over a few months.",
    tags: ["Socket.io", "Redis", "WebCrypto", "OpenAI"],
    gradient: "from-indigo-500/40 via-purple-500/30 to-blue-500/40",
    features: [
      "End-to-end encrypted messages",
      "On-device AI thread summaries",
      "File sharing with chunked uploads",
      "Cross-device presence sync",
    ],
    github: "#",
    imageUrl: "/projects/lumen-chat.jpg",
    status: "completed",
    preview: (
      <div className="relative w-full h-full p-5 flex flex-col gap-3 justify-end">
        <div className="self-start max-w-[70%] p-3 rounded-2xl rounded-bl-sm bg-white/10 border border-white/10 backdrop-blur-sm">
          <div className="h-1.5 w-20 rounded-full bg-white/40 mb-1.5" />
          <div className="h-1.5 w-32 rounded-full bg-white/20" />
        </div>
        <div className="self-end max-w-[70%] p-3 rounded-2xl rounded-br-sm bg-gradient-to-br from-purple-500/60 to-blue-500/60">
          <div className="h-1.5 w-28 rounded-full bg-white/60 mb-1.5" />
          <div className="h-1.5 w-16 rounded-full bg-white/40" />
        </div>
        <div className="self-start max-w-[70%] p-3 rounded-2xl rounded-bl-sm bg-white/10 border border-white/10 backdrop-blur-sm">
          <div className="h-1.5 w-24 rounded-full bg-white/40" />
        </div>
      </div>
    ),
  },
  {
    title: "Pulse Portfolio",
    tagline: "Motion-rich portfolio template",
    description:
      "An animation-heavy portfolio template built with Framer Motion, GSAP, and custom WebGL shaders.",
    longDescription:
      "Pulse is a portfolio template I built and open-sourced. It pairs scroll-driven motion with a custom WebGL shader background and weighs less than 60KB gzipped on first paint.",
    tags: ["Three.js", "Motion", "GSAP", "GLSL"],
    gradient: "from-purple-500/40 via-blue-500/30 to-indigo-500/40",
    features: [
      "Custom WebGL nebula shader",
      "Scroll-pinned section transitions",
      "Under 60KB initial JS payload",
      "Open source on GitHub",
    ],
    github: "#",
    live: "#",
    imageUrl: "/projects/pulse-portfolio.jpg",
    status: "completed",
    preview: (
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-32 h-32 rounded-full bg-[conic-gradient(from_0deg,rgba(168,85,247,0.6),rgba(59,130,246,0.6),rgba(168,85,247,0.6))] blur-2xl" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-300 via-indigo-400 to-blue-500 shadow-[0_0_60px_rgba(168,85,247,0.7)]" />
        </div>
      </div>
    ),
  },
  {
    title: "Weather Dashboard",
    tagline: "Real-time weather tracking",
    description:
      "Interactive weather dashboard with live updates, 7-day forecast, and interactive maps.",
    longDescription:
      "A comprehensive weather application featuring real-time data from multiple APIs, interactive radar maps, and customizable alerts. Built with React and integrated with OpenWeatherMap API.",
    tags: ["React", "API Integration", "Chart.js", "Tailwind"],
    gradient: "from-cyan-500/40 via-blue-500/30 to-teal-500/40",
    features: [
      "Real-time weather updates",
      "Interactive radar maps",
      "7-day detailed forecast",
      "Custom location saving",
    ],
    github: "#",
    live: "#",
    imageUrl: "/projects/weather-dashboard.jpg",
    status: "completed",
    preview: (
      <div className="relative w-full h-full p-5 flex flex-col">
        <div className="w-full h-20 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-white/10 mb-3" />
        <div className="flex gap-2 mb-3">
          <div className="flex-1 h-16 rounded-lg bg-white/5 border border-white/10" />
          <div className="flex-1 h-16 rounded-lg bg-white/5 border border-white/10" />
        </div>
        <div className="w-full h-24 rounded-xl bg-white/5 border border-white/10" />
      </div>
    ),
  },
  {
    title: "TaskFlow",
    tagline: "Minimalist productivity app",
    description:
      "Elegant task management with drag-drop, categories, and progress tracking.",
    longDescription:
      "TaskFlow helps users organize their daily tasks with intuitive drag-and-drop interface, customizable categories, and visual progress tracking. Features include due dates, priority levels, and productivity insights.",
    tags: ["React", "DND Kit", "LocalStorage", "Framer Motion"],
    gradient: "from-emerald-500/40 via-green-500/30 to-teal-500/40",
    features: [
      "Drag-and-drop task organization",
      "Custom categories & labels",
      "Progress analytics dashboard",
      "Dark/light theme toggle",
    ],
    github: "#",
    live: "#",
    imageUrl: "/projects/taskflow.jpg",
    status: "completed",
    preview: (
      <div className="relative w-full h-full p-4 flex flex-col gap-2">
        <div className="h-8 w-3/4 rounded-lg bg-white/10 border border-white/10" />
        <div className="space-y-2 mt-2">
          <div className="h-12 rounded-lg bg-white/5 border border-white/10" />
          <div className="h-12 rounded-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 border border-purple-400/30" />
          <div className="h-12 rounded-lg bg-white/5 border border-white/10" />
        </div>
      </div>
    ),
  },
];

export default function PersonalProjects() {
  const [active, setActive] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<"ongoing" | "fullstack" | "mini">("ongoing");

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-[#05011a] overflow-hidden"
    >
      <SpaceBackground density={30} />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-purple-300/80 tracking-[0.3em] text-sm mb-4">MY WORK</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Things I've{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300">
              built
            </span>
          </h2>
          <p className="text-lg text-purple-100/70 max-w-2xl mx-auto">
            From production-ready full-stack applications to creative side projects
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-12 overflow-x-auto pb-2"
        >
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setActiveCategory("ongoing")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === "ongoing"
                  ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-lg shadow-orange-500/30"
                  : "text-purple-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveCategory("fullstack")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === "fullstack"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-purple-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Layers className="w-4 h-4" />
              Full Stack Projects
            </button>
            <button
              onClick={() => setActiveCategory("mini")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === "mini"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-purple-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Mini Projects
            </button>
          </div>
        </motion.div>

        {/* Ongoing Projects Section */}
        {activeCategory === "ongoing" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse delay-150" />
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse delay-300" />
                </div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-orange-400" />
                  Actively Developing
                </h3>
              </div>
              <p className="text-purple-300/70">
                Projects I'm currently building and iterating on
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-orange-400/40 transition-all cursor-pointer"
                  onClick={() => setActive(p)}
                >
                  <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.classList.add('flex', 'items-center', 'justify-center');
                            const previewDiv = document.createElement('div');
                            previewDiv.className = 'absolute inset-0';
                            previewDiv.innerHTML = p.preview;
                            parent.appendChild(previewDiv);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-90">{p.preview}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/90 via-transparent to-transparent" />
                    
                    {/* Progress Badge */}
                    {p.progress && (
                      <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-orange-400/30">
                        <div className="flex items-center gap-1.5">
                          <Zap className="w-3 h-3 text-orange-400" />
                          <span className="text-xs text-orange-300 font-medium">{p.progress}% Complete</span>
                        </div>
                      </div>
                    )}
                    
                    {p.imageUrl && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-green-400/80 font-medium">Active Development</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                        <p className="text-purple-200/70 text-sm mt-1">{p.tagline}</p>
                      </div>
                      <ArrowUpRight className="text-orange-300 group-hover:rotate-45 transition-transform shrink-0" />
                    </div>
                    <p className="text-purple-100/70 mb-5 leading-relaxed text-sm">{p.description}</p>
                    
                    {/* Mini Progress Bar */}
                    {p.progress && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-purple-400/70 text-xs">Development Progress</span>
                          <span className="text-orange-400/80 text-xs">{p.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${p.progress}%` }}
                            transition={{ duration: 1 }}
                            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-purple-100/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-orange-300 hover:text-white transition-colors">
                      View Progress
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Full Stack Projects Section */}
        {activeCategory === "fullstack" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-6 h-6 text-purple-400" />
                Full Stack Projects
              </h3>
              <p className="text-purple-300/70">
                Complete applications with frontend, backend, and database
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fullStackProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-purple-300/40 transition-all cursor-pointer"
                  onClick={() => setActive(p)}
                >
                  <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.classList.add('flex', 'items-center', 'justify-center');
                            const previewDiv = document.createElement('div');
                            previewDiv.className = 'absolute inset-0';
                            previewDiv.innerHTML = p.preview;
                            parent.appendChild(previewDiv);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-90">{p.preview}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/90 via-transparent to-transparent" />
                    {p.imageUrl && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                        <p className="text-purple-200/70 text-sm mt-1">{p.tagline}</p>
                      </div>
                      <ArrowUpRight className="text-purple-300 group-hover:rotate-45 transition-transform shrink-0" />
                    </div>
                    <p className="text-purple-100/70 mb-5 leading-relaxed text-sm">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-purple-100/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-200 hover:text-white transition-colors">
                      More details
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mini Projects Section */}
        {activeCategory === "mini" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-400" />
                Mini Projects
              </h3>
              <p className="text-purple-300/70">
                Creative side projects and experimental builds
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {miniProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-purple-300/40 transition-all cursor-pointer"
                  onClick={() => setActive(p)}
                >
                  <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.classList.add('flex', 'items-center', 'justify-center');
                            const previewDiv = document.createElement('div');
                            previewDiv.className = 'absolute inset-0';
                            previewDiv.innerHTML = p.preview;
                            parent.appendChild(previewDiv);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-90">{p.preview}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/90 via-transparent to-transparent" />
                    {p.imageUrl && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                        <p className="text-purple-200/70 text-sm mt-1">{p.tagline}</p>
                      </div>
                      <ArrowUpRight className="text-purple-300 group-hover:rotate-45 transition-transform shrink-0" />
                    </div>
                    <p className="text-purple-100/70 mb-5 leading-relaxed text-sm">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-purple-100/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-200 hover:text-white transition-colors">
                      More details
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05011a]/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-300/30 bg-gradient-to-br from-[#0d0728] to-[#05011a] shadow-[0_0_80px_-10px_rgba(168,85,247,0.5)]"
          >
            <SpaceBackground density={15} />

            <button
              onClick={() => setActive(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className={`relative h-64 md:h-72 overflow-hidden bg-gradient-to-br ${active.gradient}`}>
              {active.imageUrl ? (
                <img
                  src={active.imageUrl}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0">{active.preview}</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0728] via-transparent to-transparent" />
              
              {active.status === "ongoing" && active.progress && (
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-orange-400/30">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-orange-400 animate-spin" />
                    <span className="text-xs text-orange-300 font-medium">In Development • {active.progress}% Complete</span>
                  </div>
                </div>
              )}
            </div>

            <div className="relative p-8 md:p-10">
              <p className="text-purple-300/80 tracking-[0.25em] text-xs mb-3">CASE STUDY</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{active.title}</h3>
              <p className="text-purple-200/80 mb-6">{active.tagline}</p>

              <p className="text-purple-100/80 leading-relaxed mb-8">{active.longDescription}</p>

              <h4 className="text-sm tracking-[0.2em] text-purple-300/80 mb-4">HIGHLIGHTS</h4>
              <ul className="space-y-3 mb-8">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-purple-100/80">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-purple-100/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {active.live && (
                  <a
                    href={active.live}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                )}
                {active.github && (
                  <a
                    href={active.github}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-purple-100 hover:text-white hover:border-purple-300/40 transition-colors"
                  >
                    <Github size={16} />
                    Source code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}