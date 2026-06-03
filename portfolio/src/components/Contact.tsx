import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  Bot,
  X,
  SendIcon,
  User,
  Briefcase,
  Code,
  Sparkles,
  MessageCircle,
  Instagram,
  Heart,
  PawPrint,
  Smile,
  Coffee,
  Star,
  Volume2,
  VolumeX,
  Mic,
  Zap,
  Cpu,
  Wifi,
  Radio,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import SpaceBackground from "./SpaceBackground";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_xx9czk5";
const EMAILJS_TEMPLATE_ID = "template_q84i32d";
const EMAILJS_PUBLIC_KEY = "KJDQnIcVe32R1AzIc";

// Sound effects - with user interaction check
let userInteracted = false;

const playSound = (type: "hello" | "message" | "pet" | "typing" | "click" | "hover") => {
  if (!userInteracted) return;

  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;

  const audioContext = new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const frequencies = {
    hello: 523.25,
    message: 659.25,
    pet: 392.0,
    typing: 493.88,
    click: 880.0,
    hover: 1046.5,
  };

  oscillator.frequency.value = frequencies[type];
  gainNode.gain.value = {
    hello: 0.25,
    message: 0.2,
    pet: 0.15,
    typing: 0.1,
    click: 0.08,
    hover: 0.05,
  }[type];
  oscillator.type = "sine";
  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.4);

  setTimeout(() => {
    oscillator.stop();
    audioContext.close();
  }, 400);
};

// Spline 3D Cat Model Component - Simplified for better performance
function SplineCatModel({ onClick, isChatOpen }: { onClick: () => void; isChatOpen: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const viewerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (document.querySelector('script[src*="spline-viewer"]')) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
    script.onload = () => setIsLoaded(true);
    script.onerror = () => setIsLoaded(false);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isLoaded || !viewerRef.current) return;
    const el = document.createElement('spline-viewer');
    el.setAttribute('url', 'https://prod.spline.design/hN1sUEAiuJAQeRuV/scene.splinecode');
    el.setAttribute('style', 'width:100%;height:100%;border:none');
    viewerRef.current.appendChild(el);
    return () => {
      try {
        viewerRef.current?.removeChild(el);
      } catch (e) {
        /* ignore */
      }
    };
  }, [isLoaded]);

  return (
    <motion.div
      animate={{ y: isHovered ? [0, -5, 0] : 0 }}
      transition={{ y: { duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 } }}
      onMouseEnter={() => !isChatOpen && (playSound("hover"), setIsHovered(true))}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (playSound("click"), onClick())}
      className="relative cursor-pointer group"
    >
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-[-20px] rounded-full bg-linear-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-2xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-15px] rounded-full border-2 border-purple-500/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-25px] rounded-full border border-pink-500/20"
        />

        <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-linear-to-br from-purple-600/20 to-pink-600/20">
          {isLoaded ? (
            <div ref={viewerRef} style={{ width: '100%', height: '100%' }} />
          ) : (
            <div className="w-32 h-32 rounded-full bg-linear-to-br from-purple-600/40 to-pink-600/40 flex items-center justify-center animate-pulse">
              <Bot className="w-12 h-12 text-purple-400" />
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isHovered && !isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
          >
            <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-xl">
              <span className="flex items-center gap-2">🐱 Say Hi! Click me</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-pink-600" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] text-green-400">ONLINE</span>
        </div>
      </div>

      <p className="text-center text-purple-300/70 text-xs sm:text-sm mt-4">
        Click to chat with my 3D cat assistant 🐱
      </p>
    </motion.div>
  );
}

// Virtual Pet Component
function VirtualPet({ onClick, onSound }: { onClick: () => void; onSound: () => void }) {
  const [emotion, setEmotion] = useState<"idle" | "happy" | "excited" | "sleepy">("idle");
  const [petState, setPetState] = useState<"idle" | "petting">("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      const emotions: ("idle" | "happy" | "excited" | "sleepy")[] = [
        "idle",
        "happy",
        "excited",
        "sleepy",
      ];
      setEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
      setTimeout(() => setEmotion("idle"), 3000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setPetState("petting");
    onSound();
    onClick();
    setTimeout(() => setPetState("idle"), 500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 3, -3, 0],
          scale: petState === "petting" ? 1.15 : 1,
        }}
        transition={{
          y: { duration: 2, repeat: Infinity },
          rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 2 },
          scale: { duration: 0.2 },
        }}
        onClick={handleClick}
        className="cursor-pointer relative"
      >
        <div
          className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-br from-purple-500/40 to-pink-500/40 flex items-center justify-center backdrop-blur-sm ${emotion === "happy" ? "animate-wiggle" : emotion === "excited" ? "animate-bounce" : ""}`}
        >
          <PawPrint className="w-12 h-12 sm:w-14 sm:h-14 text-purple-400" />
          <div className="absolute -top-1 -right-1">
            <Heart className="w-3 h-3 text-pink-400 animate-pulse" />
          </div>
        </div>
      </motion.div>
      <p className="text-purple-300/60 text-[10px] sm:text-xs mt-2 text-center">
        {petState === "petting" ? "🥰 Purrr! So happy!" : "🐾 Pet me!"}
      </p>
    </div>
  );
}

// AI Chatbot responses
const chatbotResponses: Record<string, string> = {
  "who are you":
    "I'm Kirti — a passionate Full Stack Developer who loves building beautiful web applications! ✨",
  "what do you do":
    "I build full-stack web applications using React, Next.js, Node.js, and various modern technologies! 💻",
  skills:
    "My core skills include Frontend (React, Next.js, TypeScript, Tailwind), Backend (Node.js, Express, PostgreSQL, MongoDB), Design (Figma, Framer Motion), and DevOps (Docker, AWS, Vercel)! 🚀",
  experience:
    "I started coding in 2020 and have worked on multiple full-stack projects, freelanced for clients, and contributed to open source! 📚",
  projects:
    "I've built Nebula Commerce, Orbit Analytics, Lumen Chat, and Pulse Portfolio. Check them out in my Projects section! 🚀",
  availability:
    "Yes! I'm currently available for freelance, contract, and full-time opportunities! 💪",
  location: "I'm based in India but work remotely worldwide! 🌍",
  default:
    "Thanks for your question! For more details, feel free to send me a message via the contact form! 💬",
};

const getAIResponse = async (userMessage: string): Promise<string> => {
  const lowerMessage = userMessage.toLowerCase();
  for (const [key, response] of Object.entries(chatbotResponses)) {
    if (lowerMessage.includes(key)) return response;
  }
  return chatbotResponses["default"];
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ text: string; isUser: boolean }[]>([
    {
      text: "Hi there! 👋 I'm Kirti's AI assistant. Ask me anything about Kirti's experience, skills, projects, or availability!",
      isUser: false,
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAudio = () => {
      userInteracted = true;
      document.removeEventListener("click", initAudio);
      document.removeEventListener("keydown", initAudio);
    };
    document.addEventListener("click", initAudio);
    document.addEventListener("keydown", initAudio);
    return () => {
      document.removeEventListener("click", initAudio);
      document.removeEventListener("keydown", initAudio);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  useEffect(() => {
    document.body.style.overflow = showChatbot ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showChatbot]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChatSend = async () => {
    if (!chatInput.trim()) return;
    if (soundEnabled) playSound("message");
    setChatMessages((prev) => [...prev, { text: chatInput, isUser: true }]);
    setIsTyping(true);
    const botResponse = await getAIResponse(chatInput);
    setTimeout(() => {
      setChatMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 500);
    setChatInput("");
  };

  const handlePetClick = () => {
    if (soundEnabled) playSound("pet");
    setChatMessages((prev) => [
      ...prev,
      { text: "🐾 *pet pet* The little cat purrs happily!", isUser: false },
    ]);
  };

  const handleBotClick = () => {
    if (soundEnabled) playSound("hello");
    setShowChatbot(true);
  };

  return (
    <>
      <section
        id="contact"
        className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#05011a] overflow-hidden"
      >
        <SpaceBackground density={25} />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative max-w-6xl mx-auto">
          {/* 3D Cat Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <SplineCatModel onClick={handleBotClick} isChatOpen={showChatbot} />
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm">
              <MessageCircle className="w-3 h-3 text-purple-400" />
              <span className="text-xs tracking-[0.2em] text-purple-200/90">GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Let's{" "}
              <span className="relative inline-block">
                <motion.span
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 -z-10 blur-3xl bg-linear-to-r from-purple-600/50 via-pink-500/50 to-blue-500/50 rounded-full"
                />
                <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_50%,#93c5fd_100%)] bg-size-[250%_100%] animate-[shimmer_6s_linear_infinite]">
                  connect
                </span>
              </span>
            </h2>
            <p className="text-purple-200/80 text-base max-w-xl mx-auto">
              Have a project in mind or just want to say hi? Let's create something amazing
              together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="group p-6 rounded-2xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 backdrop-blur-sm hover:border-purple-500/40 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Email Me</h3>
                <p className="text-purple-300/70 text-sm mb-3">Get a response within 24 hours</p>
                <a
                  href="mailto:kirti@example.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  kirti@example.com
                </a>
              </div>

              <div className="group p-6 rounded-2xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 backdrop-blur-sm hover:border-purple-500/40 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Open to Work</h3>
                <p className="text-purple-300/70 text-sm">
                  Freelance • Full-time • Contract • Remote
                </p>
                <div className="flex items-center gap-2 mt-3 text-green-400 text-xs">
                  <CheckCircle className="w-3 h-3" />
                  <span>Available for immediate start</span>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 backdrop-blur-sm hover:border-purple-500/40 hover:shadow-xl transition-all">
                <h3 className="text-white font-semibold text-lg mb-4">Connect Online</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      Icon: Github,
                      href: "https://github.com/kirti",
                      label: "GitHub",
                      color: "hover:border-gray-400",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://linkedin.com/in/kirti",
                      label: "LinkedIn",
                      color: "hover:border-blue-400",
                    },
                    {
                      Icon: Twitter,
                      href: "https://twitter.com/kirti",
                      label: "Twitter",
                      color: "hover:border-blue-400",
                    },
                    {
                      Icon: Instagram,
                      href: "https://instagram.com/kirti.dev",
                      label: "Instagram",
                      color: "hover:border-pink-400",
                    },
                  ].map(({ Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className={`w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-purple-300/80 hover:text-white ${color} transition-all`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 md:p-8 rounded-2xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-purple-300/80 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-300/80 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-300/80 text-sm mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm text-center flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm text-center">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-purple-100/40 text-sm text-center">
            © {new Date().getFullYear()} Kirti — Crafted with 💜 & code.
          </div>
        </div>
      </section>

      {/* AI Chatbot Modal - Professional Design */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowChatbot(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl h-[600px] rounded-2xl bg-linear-to-br from-[#0d0728] to-[#05011a] border border-purple-500/30 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-linear-to-r from-purple-600/20 to-indigo-600/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI Assistant</h3>
                    <p className="text-purple-300/60 text-xs">Powered by AI</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 text-purple-400" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-purple-400" />
                    )}
                  </button>
                  <button
                    onClick={() => setShowChatbot(false)}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex overflow-hidden">
                {/* Virtual Pet Sidebar */}
                <div className="w-1/3 border-r border-white/10 bg-white/5 flex flex-col items-center justify-center p-4">
                  <VirtualPet
                    onClick={handlePetClick}
                    onSound={() => soundEnabled && playSound("pet")}
                  />
                  <p className="text-purple-300/40 text-[10px] text-center mt-3">
                    Click to interact 🐾
                  </p>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {chatMessages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] p-3 rounded-xl ${
                            msg.isUser
                              ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white"
                              : "bg-white/10 border border-white/15 text-purple-200"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                        </div>
                      </motion.div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-150" />
                            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-300" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Suggested Questions */}
                  <div className="p-3 border-t border-white/10 bg-white/5">
                    <p className="text-purple-300/50 text-xs mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "What skills do you have?",
                        "Tell me about your projects",
                        "Are you available?",
                      ].map((q) => (
                        <button
                          key={q}
                          onClick={() => {
                            setChatInput(q);
                            setTimeout(() => handleChatSend(), 100);
                          }}
                          className="text-xs px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 hover:bg-purple-500/25 transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t border-white/10">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleChatSend()}
                        placeholder="Ask me anything..."
                        className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 focus:outline-none focus:border-purple-500/50 transition-colors text-sm"
                      />
                      <button
                        onClick={handleChatSend}
                        className="w-10 h-10 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center hover:scale-105 transition-transform"
                      >
                        <SendIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
