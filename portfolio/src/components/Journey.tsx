import { motion } from "framer-motion";
import { useState } from "react";
import SpaceBackground from "./SpaceBackground";
import {
  Code2,
  Globe,
  Database,
  Server,
  Cloud,
  Layout,
  GitBranch,
  Terminal,
  Sparkles,
  Rocket,
  Palette,
  Zap,
  Shield,
  Cpu,
  Award,
  Trophy,
  Medal,
  Star,
  ExternalLink,
  X,
  CheckCircle,
  BookOpen,
  FileText,
  Image,
} from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Started Coding",
    desc: "Wrote my first lines of HTML & CSS and instantly fell in love with building for the web.",
    skills: ["HTML", "CSS", "JavaScript"],
    icons: [Layout, Code2, Terminal],
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "2021",
    title: "First Freelance Project",
    desc: "Shipped a landing page for a local business. Discovered the joy of seeing real users use what I built.",
    skills: ["React", "Tailwind CSS", "Git"],
    icons: [Code2, Palette, GitBranch],
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2022",
    title: "Full Stack Deep Dive",
    desc: "Mastered React, Node.js, and databases. Built several side projects and contributed to open source.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    icons: [Server, Database, Database, Server],
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2023",
    title: "Internship & Real Teams",
    desc: "Joined a startup as an intern. Learned how production systems are built, tested, and shipped.",
    skills: ["Docker", "AWS", "CI/CD", "Testing"],
    icons: [Cloud, Server, Rocket, Zap],
    color: "from-orange-500 to-red-500",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    desc: "Now building polished, performant web products end-to-end. Always learning, always shipping.",
    skills: ["Next.js", "TypeScript", "GraphQL", "AI Integration"],
    icons: [Code2, Sparkles, Cpu, Shield],
    color: "from-indigo-500 to-purple-500",
  },
];

const achievements = [
  {
    id: 1,
    title: "Hackathon Winner - AI for Good",
    issuer: "DevPost & GitHub",
    date: "2023",
    description:
      "Won 1st place among 500+ participants for building an AI-powered accessibility tool that helps visually impaired users navigate websites.",
    image: "/ecom.jpeg",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500",
    location: "San Francisco, CA",
    prize: "$10,000 + Mentorship",
  },
  {
    id: 2,
    title: "Open Source Excellence Award",
    issuer: "GitHub & Open Source Community",
    date: "2024",
    description:
      "Recognized for contributing 50+ pull requests to major open source projects including React, Next.js, and Tailwind CSS documentation.",
    image: "/ticketzila.jpeg",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    location: "Remote",
    prize: "GitHub Pro + Recognition",
  },
  {
    id: 3,
    title: "Best Design Award",
    issuer: "Local Hackathon",
    date: "2023",
    description:
      "Awarded for exceptional UI/UX design in a 48-hour hackathon, building a mental health wellness app.",
    image: "/ed.jpeg",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    location: "New York, NY",
    prize: "Design Mentorship",
  },
  {
    id: 4,
    title: "100 Days of Code Challenge",
    issuer: "Self-Initiated",
    date: "2022",
    description:
      "Completed 100 consecutive days of coding, building and deploying a project every single day for 100 days.",
    image: "/infotech.jpeg",
    icon: Medal,
    color: "from-red-500 to-rose-500",
    location: "Online",
    prize: "Community Recognition",
  },
];

const certifications = [
  {
    id: 1,
    title: "Full Stack Development Certification",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "Completed 1000+ hours of coding challenges and built 5 full-stack projects including e-commerce, social media, and analytics dashboards.",
    credentialId: "FCC-2023-789",
    image: "/Resso1.jpeg",
    icon: Award,
    color: "from-amber-500 to-orange-500",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description:
      "Certified in cloud fundamentals, AWS services, security best practices, pricing models, and architectural principles.",
    credentialId: "AWS-CP-2024-456",
    image: "/Resso2.jpeg",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
    skills: ["EC2", "S3", "Lambda", "CloudFormation"],
  },
  {
    id: 3,
    title: "Meta Frontend Professional",
    issuer: "Meta & Coursera",
    date: "2023",
    description:
      "Professional certificate covering advanced React, UI/UX principles, and front-end development best practices.",
    credentialId: "META-FE-2023-234",
    image: "/Chitchat.jpeg",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "UX Design", "APIs", "Testing"],
  },
];

export default function Journey() {
  const [selectedAchievement, setSelectedAchievement] = useState<(typeof achievements)[0] | null>(
    null,
  );
  const [selectedCertification, setSelectedCertification] = useState<
    (typeof certifications)[0] | null
  >(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const isMobile = windowWidth < 768;

  return (
    <>
      <section
        id="journey"
        className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#05011a] overflow-hidden"
      >
        <SpaceBackground density={15} />

        <div className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-purple-300/80 tracking-[0.3em] text-sm mb-4">MY JOURNEY</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The{" "}
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-indigo-300 to-blue-300">
                path
              </span>{" "}
              so far
            </h2>
            <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl mx-auto">
              From first line of code to full stack developer — a journey of continuous learning
            </p>
          </motion.div>

          {/* Timeline Section */}
          <div className="relative mb-24">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-500/20 via-indigo-500/15 to-blue-500/5" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-10 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
                } pl-10 md:pl-0`}
              >
                <div
                  className={`absolute top-6 w-3 h-3 rounded-full bg-linear-to-br ${m.color} shadow-md ${
                    i % 2 === 0 ? "left-2 md:left-auto md:-right-1.5" : "left-2 md:-left-1.5"
                  }`}
                />

                <div className="group relative">
                  <div className="relative p-5 sm:p-6 rounded-xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/25 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-400 to-blue-400 animate-pulse" />
                      <span className="text-blue-300/80 text-xs tracking-[0.2em] font-medium">
                        {m.year}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                      {m.title}
                    </h3>

                    <p className="text-purple-200/75 leading-relaxed text-sm sm:text-base mb-4">
                      {m.desc}
                    </p>

                    <div className="mt-3 pt-3 border-t border-white/10">
                      <p className="text-purple-300/70 text-xs tracking-wider mb-2 flex items-center gap-2">
                        <Sparkles className="w-3 h-3" />
                        SKILLS ACQUIRED
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.skills.map((skill, idx) => {
                          const Icon = m.icons[idx];
                          return (
                            <div
                              key={skill}
                              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/15 transition-all duration-300 hover:bg-purple-500/15"
                            >
                              {Icon && <Icon className="w-3 h-3 text-purple-400" />}
                              <span className="text-xs text-purple-300/80 font-medium">
                                {skill}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section - MOVED FIRST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 mb-16"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-amber-500/40 bg-white/5 backdrop-blur-sm">
                <Trophy className="w-3 h-3 text-amber-400" />
                <span className="text-xs tracking-[0.2em] text-amber-200/90">ACHIEVEMENTS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Awards &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-yellow-400">
                  Recognition
                </span>
              </h3>
              <p className="text-purple-200/75 text-sm sm:text-base max-w-2xl mx-auto">
                Milestones that celebrate excellence and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedAchievement(achievement)}
                >
                  <div className="relative h-full rounded-xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:shadow-lg overflow-hidden">
                    <div
                      className={`h-28 bg-linear-to-br ${achievement.color} relative overflow-hidden flex items-center justify-center`}
                    >
                      {achievement.image ? (
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <achievement.icon className="w-12 h-12 text-white/30 group-hover:scale-110 transition-transform duration-300" />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/80 to-transparent" />
                      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                        <Image className="w-2.5 h-2.5 text-white/80" />
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-start gap-2 mb-1">
                        <achievement.icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <h4 className="text-white font-semibold text-sm leading-tight line-clamp-2">
                          {achievement.title}
                        </h4>
                      </div>
                      <p className="text-purple-300/70 text-xs">{achievement.issuer}</p>
                      <p className="text-purple-400/60 text-[10px]">{achievement.date}</p>
                      <div className="mt-3 flex items-center gap-1 text-amber-400/80 text-[10px] group-hover:translate-x-1 transition-transform">
                        <span>View Details</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section - MOVED SECOND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-blue-500/40 bg-white/5 backdrop-blur-sm">
                <BookOpen className="w-3 h-3 text-blue-400" />
                <span className="text-xs tracking-[0.2em] text-blue-200/90">CERTIFICATIONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Professional{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                  Certifications
                </span>
              </h3>
              <p className="text-purple-200/75 text-sm sm:text-base max-w-2xl mx-auto">
                Validated expertise through industry-recognized certifications
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCertification(cert)}
                >
                  <div className="relative h-full rounded-xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg overflow-hidden">
                    <div
                      className={`h-36 bg-linear-to-br ${cert.color} relative overflow-hidden flex items-center justify-center`}
                    >
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <cert.icon className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-300" />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/80 to-transparent" />
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                        <FileText className="w-3 h-3 text-white/80" />
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="text-white font-semibold text-base sm:text-lg mb-1 line-clamp-1">
                        {cert.title}
                      </h4>
                      <p className="text-purple-300/70 text-xs mb-1">{cert.issuer}</p>
                      <p className="text-purple-400/60 text-xs">{cert.date}</p>
                      <p className="text-purple-200/70 text-xs mt-3 line-clamp-2">
                        {cert.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-blue-400/80 text-xs group-hover:translate-x-1 transition-transform">
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future milestone indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse delay-150" />
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse delay-300" />
              </div>
              <span className="text-purple-300/80 text-xs sm:text-sm">
                Currently learning: Cloud Architecture & AI Integration
              </span>
              <Rocket className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievement Modal - Big Picture */}
      {selectedAchievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedAchievement(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05011a]/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-xl border border-amber-500/30 bg-linear-to-br from-[#0d0728] to-[#05011a] shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-all hover:scale-110"
            >
              <X size={20} />
            </button>

            <div
              className={`relative h-80 md:h-96 bg-linear-to-br ${selectedAchievement.color} overflow-hidden`}
            >
              {selectedAchievement.image ? (
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-contain bg-black/30"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://placehold.co/1200x800/2d1b69/ffffff?text=${encodeURIComponent(selectedAchievement.title)}`;
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <selectedAchievement.icon className="w-32 h-32 text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-[#0d0728] via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedAchievement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-300/80">
                    <span className="text-sm">{selectedAchievement.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span className="text-sm">{selectedAchievement.date}</span>
                  </div>
                </div>
                <selectedAchievement.icon className="w-8 h-8 text-amber-400" />
              </div>

              <p className="text-purple-200/85 text-base leading-relaxed mb-6">
                {selectedAchievement.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedAchievement.location && (
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <p className="text-purple-300/70 text-xs mb-1">Location</p>
                    <p className="text-purple-200/90 text-sm">{selectedAchievement.location}</p>
                  </div>
                )}
                {selectedAchievement.prize && (
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <p className="text-purple-300/70 text-xs mb-1">Prize / Recognition</p>
                    <p className="text-purple-200/90 text-sm">{selectedAchievement.prize}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="flex-1 px-5 py-2.5 rounded-lg bg-linear-to-r from-amber-600 to-yellow-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Certification Modal - Big Picture */}
      {selectedCertification && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertification(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05011a]/95 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-xl border border-blue-500/30 bg-linear-to-br from-[#0d0728] to-[#05011a] shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedCertification(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-all hover:scale-110"
            >
              <X size={20} />
            </button>

            <div
              className={`relative h-80 md:h-96 bg-linear-to-br ${selectedCertification.color} overflow-hidden`}
            >
              {selectedCertification.image ? (
                <img
                  src={selectedCertification.image}
                  alt={selectedCertification.title}
                  className="w-full h-full object-contain bg-black/30"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://placehold.co/1200x800/2d1b69/ffffff?text=${encodeURIComponent(selectedCertification.title)}`;
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <selectedCertification.icon className="w-32 h-32 text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-[#0d0728] via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedCertification.title}
                  </h3>
                  <div className="flex items-center gap-2 text-purple-300/80">
                    <span className="text-sm">{selectedCertification.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-purple-400" />
                    <span className="text-sm">{selectedCertification.date}</span>
                  </div>
                </div>
                <selectedCertification.icon className="w-8 h-8 text-blue-400" />
              </div>

              <p className="text-purple-200/85 text-base leading-relaxed mb-6">
                {selectedCertification.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-purple-300/70 text-xs mb-1">Credential ID</p>
                  <p className="text-purple-200/90 text-sm font-mono">
                    {selectedCertification.credentialId}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-purple-300/70 text-xs mb-1">Skills Covered</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedCertification.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="flex-1 px-5 py-2.5 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
