import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "Activities" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = links.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#05011a]/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/5"
            : "bg-linear-to-b from-[#05011a]/80 to-transparent backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group flex items-center gap-2"
            >
              {/* Animated background glow */}
              <div className="absolute -inset-2 bg-linear-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Logo Icon */}
              <div className="relative w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Code2 className="w-4 h-4 text-white" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 rounded-full border border-purple-400/30"
                />
              </div>

              {/* Logo Text */}
              <div className="relative">
                <span className="text-white font-bold text-xl tracking-tight">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-indigo-300 to-blue-300">
                    Kirti
                  </span>
                  <span className="text-purple-400/60">.dev</span>
                </span>
                {/* Decorative dot */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-1 -top-1 w-1.5 h-1.5 rounded-full bg-purple-400"
                />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-purple-300/70 hover:text-white group"
                >
                  {/* Glowing hover effect */}
                  <span className="absolute inset-0 rounded-lg bg-linear-to-r from-purple-600/0 via-purple-500/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:via-purple-500/30 group-hover:to-blue-600/20 transition-all duration-500" />

                  {/* Glow on hover */}
                  <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute inset-0 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.3)]" />
                  </span>

                  {/* Active indicator - subtle underline instead of box */}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="border-t border-white/10 bg-linear-to-b from-[#05011a]/95 to-[#05011a] backdrop-blur-xl">
            <div className="px-4 py-4 space-y-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "bg-linear-to-r from-purple-600/20 to-blue-600/20 text-white"
                      : "text-purple-200/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="font-medium">{link.label}</span>
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="mobileActive"
                      className="w-1.5 h-1.5 rounded-full bg-purple-400"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 sm:h-18 lg:h-20" />
    </>
  );
}
