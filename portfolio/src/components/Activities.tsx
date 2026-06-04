// BeyondCode.tsx

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Globe,
  Sparkles,
  X,
  MapPin,
  Brush,
  Headphones,
  Heart,
  ArrowRight,
  Star,
  Award,
  Plus,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Image as ImageIcon,
  Video,
} from "lucide-react";
import SpaceBackground from "./SpaceBackground";

interface Interest {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  gradient: string;
  longDescription?: string;
  stats?: { label: string; value: string }[];
}

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  title: string;
  description: string;
  location?: string;
  date?: string;
}

const interests: Interest[] = [
  {
    icon: Brush,
    title: "Drawing & Art",
    description: "Expressing creativity through sketches, digital art, and illustrations",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/30 via-pink-500/20 to-purple-500/30",
    longDescription:
      "Art has been my creative outlet since childhood. I love experimenting with different mediums.",
  },
  {
    icon: Globe,
    title: "Travel & Exploration",
    description: "Discovering new cultures, landscapes, and perspectives around the world",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/30",
    longDescription:
      "Traveling fuels my curiosity and broadens my horizons.",
  },
  {
    icon: Headphones,
    title: "Music Listening",
    description: "Finding joy and inspiration through diverse melodies and rhythms",
    color: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/30 via-teal-500/20 to-emerald-500/30",
    longDescription:
      "Music is my constant companion while coding, creating art, or traveling.",
  },
];

const drawingGallery: MediaItem[] = [
  { type: "image", url: "/D1.jpeg", title: "Antarpath", description: "Oil painting of Parvati and Shiva hands" },
  { type: "image", url: "/D2.jpeg", title: "Antarpath II", description: "Oil painting of Parvati and Shiva hands" },
  { type: "image", url: "/D3.jpeg", title: "Lord Krishna", description: "Lord Krishna painting" },
  { type: "image", url: "/D4.jpeg", title: "Lord Krishna II", description: "Lord Krishna painting" },
  { type: "image", url: "/D5.jpeg", title: "Lord Krishna III", description: "Lord Krishna painting" },
  { type: "image", url: "/D6.jpeg", title: "KPOP Idol", description: "KPOP idol sketch" },
  { type: "image", url: "/D7.jpeg", title: "Portrait Series", description: "Charcoal portrait collection" },
  { type: "image", url: "/D8.jpeg", title: "Medusa", description: "Greek mythology character sketch" },
  { type: "image", url: "/D9.jpeg", title: "Chhatrapati Shivaji Maharaj", description: "Historical portrait" },
  { type: "image", url: "/D11.jpeg", title: "KPOP Idol — Horror", description: "KPOP idol sketch in horror theme" },
  { type: "image", url: "/D12.jpeg", title: "Random Character", description: "Random character sketch" },
  { type: "image", url: "/D13.jpeg", title: "Human Heart", description: "Anatomical heart painting" },
  { type: "image", url: "/D14.jpeg", title: "Albert Einstein", description: "Sketch of the great scientist" },
];

const travelGallery: MediaItem[] = [
  { type: "image", url: "/t1.jpeg", title: "kalsubai", description: "kalsubai mountains", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t2.jpeg", title: "kalsubai", description: "kalsubai sunrise", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t3.jpeg", title: "kalsubai", description: "kalsubai Gate", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t4.jpeg", title: "kalsubai", description: "kalsubai mandir", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t5.jpeg", title: "kalsubai", description: "kalsubai sunrise", location: "maharashtra", date: "2024" },
 { type: "image", url: "/t7.jpeg", title: "omkareshvar", description: "omkareshvar", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t8.jpeg", title: "Malang gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t9.jpeg", title: "Malang gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t10.jpeg", title: "Malang gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t11.jpeg", title: "Malang gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t12.jpeg", title: "Malang gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t13.jpeg", title: "Malang gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t14.jpeg", title: "Gorakh gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t16.jpeg", title: "Gorakh gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t17.jpeg", title: "Gorakh gadh", description: "Malang gadh", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t18.jpeg", title: "Matheran", description: "Matheran", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t19.jpeg", title: "Matheran", description: "Matheran", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t20.jpeg", title: "Matheran", description: "Matheran", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t21.jpeg", title: "Matheran", description: "Matheran", location: "maharashtra", date: "2024" },
  { type: "image", url: "/t22.jpeg", title: "Matheran", description: "Matheran", location: "maharashtra", date: "2024" },
  
];

function MediaGalleryModal({
  media,
  initialIndex,
  onClose,
}: {
  media: MediaItem[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [windowHeight, setWindowHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 800);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentIndex((p) => (p + 1) % media.length);
      if (e.key === "ArrowLeft") setCurrentIndex((p) => (p - 1 + media.length) % media.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [media.length, onClose]);

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia?.type === "video";
  const isMobile = windowHeight < 700;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsVideoPlaying(false);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsVideoPlaying(false);
  };
  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] sm:max-h-[85vh] flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border border-purple-500/30 bg-linear-to-br from-[#0d0728] to-[#05011a] shadow-2xl shadow-purple-500/20"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="relative flex-1 min-h-0 bg-black/50" style={{ height: isMobile ? '50vh' : '60vh' }}>
          {isVideo ? (
            <video
              ref={videoRef}
              src={currentMedia.url}
              poster={currentMedia.thumbnail}
              className="w-full h-full object-contain"
              onClick={toggleVideoPlay}
              controls={false}
              playsInline
            />
          ) : (
            <img
              src={currentMedia.url}
              alt={currentMedia.title}
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/800x600/2d1b69/ffffff?text=${encodeURIComponent(currentMedia.title)}`;
              }}
            />
          )}

          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-1.5">
              {isVideo ? (
                <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
              ) : (
                <ImageIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
              )}
              <span className="text-[10px] sm:text-xs text-white">
                {currentIndex + 1} / {media.length}
              </span>
            </div>
          </div>

          {isVideo && (
            <button
              onClick={toggleVideoPlay}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                {isVideoPlaying ? (
                  <Pause className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                ) : (
                  <Play className="w-5 h-5 sm:w-8 sm:h-8 text-white ml-0.5" />
                )}
              </div>
            </button>
          )}

          {media.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all active:scale-95"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </>
          )}
        </div>

        <div className="overflow-y-auto flex-shrink-0">
          <div className="p-4 sm:p-6 md:p-8">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-2">
              {currentMedia.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-purple-400/80 text-xs sm:text-sm mb-2 sm:mb-3">
              {currentMedia.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{currentMedia.location}</span>
                </div>
              )}
              {currentMedia.date && <span>📅 {currentMedia.date}</span>}
            </div>
            <p className="text-purple-200/80 text-xs sm:text-sm md:text-base leading-relaxed">
              {currentMedia.description}
            </p>
          </div>

          {media.length > 1 && (
            <div className="px-3 sm:px-4 pb-3 sm:pb-4 overflow-x-auto hide-scrollbar">
              <div className="flex gap-2">
                {media.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsVideoPlaying(false);
                    }}
                    className={`relative w-12 h-9 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      currentIndex === idx
                        ? "border-purple-500 scale-105"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    {item.type === "video" ? (
                      <div className="relative w-full h-full bg-black/60 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white z-10" />
                        {item.thumbnail && (
                          <img src={item.thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                        )}
                      </div>
                    ) : (
                      <img src={item.url} alt="" className="w-full h-full object-cover" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BeyondCode() {
  const ref = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState<"drawing" | "travelling">("drawing");
  const [selectedMedia, setSelectedMedia] = useState<{ media: MediaItem[]; index: number } | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const currentGallery = selectedCategory === "drawing" ? drawingGallery : travelGallery;
  const displayedItems = currentGallery.slice(0, visibleCount);
  const hasMore = visibleCount < currentGallery.length;

  const loadMore = () => setVisibleCount((prev) => Math.min(prev + 8, currentGallery.length));
  const handleItemClick = (_item: MediaItem, index: number) =>
    setSelectedMedia({ media: currentGallery, index });

  // Calculate grid columns based on screen size
  const getGridCols = () => {
    if (isMobile) return "grid-cols-2";
    if (isTablet) return "grid-cols-3";
    return "grid-cols-4";
  };

  return (
    <section
      ref={ref}
      id="beyond"
      className="relative w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 bg-[#05011a] overflow-x-clip overflow-y-visible"
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes shimmer { 
          0% { background-position: 0% 50%; } 
          100% { background-position: 250% 50%; } 
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Space Background - full coverage */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <SpaceBackground density={25} />
      </div>

      {/* Gradient overlays that adapt to content height */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#2e1065_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,#1e1b4b_0%,transparent_70%)] pointer-events-none" />

      {/* Animated floating element - hidden on mobile */}
      {!isMobile && (
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] w-[40%] aspect-square rounded-full bg-linear-to-bl from-purple-600/20 via-pink-500/15 to-transparent blur-3xl pointer-events-none"
        />
      )}

      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
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
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-purple-200/90">
              BEYOND CODE
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-4">
            Other orbits I{" "}
            <span className="relative inline-block">
              <motion.span
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 -z-10 blur-2xl sm:blur-3xl bg-linear-to-r from-purple-600/50 via-pink-500/50 to-orange-500/50 rounded-full"
              />
              <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_40%,#fde047_100%)] bg-size-[250%_100%] animate-[shimmer_6s_linear_infinite]">
                move in
              </span>
            </span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Building software is only one moon in the system. Here's everything else I'm into.
          </p>
        </motion.div>

        {/* Interests Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto px-2 sm:px-0">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r ${interest.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                  <div className="relative mb-3 sm:mb-4 md:mb-5">
                    <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-linear-to-br ${interest.color} p-0.5 shadow-lg`}>
                      <div className="w-full h-full rounded-lg sm:rounded-xl bg-[#05011a]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <interest.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/90" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1.5 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                    {interest.title}
                  </h3>

                  <p className="text-purple-300/70 text-xs sm:text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
              Creative{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Gallery
              </span>
            </h3>
            <p className="text-purple-300/70 text-xs sm:text-sm md:text-base px-4">
              A glimpse into my artistic journey and travel adventures
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 overflow-x-auto hide-scrollbar px-4">
            <div className="inline-flex gap-1.5 sm:gap-2 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => { setSelectedCategory("drawing"); setVisibleCount(8); }}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-lg font-semibold text-[10px] sm:text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === "drawing"
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-purple-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Brush className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                Drawing & Art
              </button>
              <button
                onClick={() => { setSelectedCategory("travelling"); setVisibleCount(8); }}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-lg font-semibold text-[10px] sm:text-xs md:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === "travelling"
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-purple-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                Travel Moments
              </button>
            </div>
          </div>

          {/* Gallery Grid - Responsive */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid ${getGridCols()} gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 px-2 sm:px-0`}
          >
            {displayedItems.map((item, idx) => (
              <motion.div
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
                onClick={() => handleItemClick(item, idx)}
              >
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Image/Video Container - Fixed aspect ratio for consistency */}
                  <div className="relative aspect-square overflow-hidden bg-purple-900/20">
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.url}
                          poster={item.thumbnail}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onMouseEnter={(e) => {
                            const video = e.currentTarget;
                            video.play().catch(() => {});
                          }}
                          onMouseLeave={(e) => {
                            const video = e.currentTarget;
                            video.pause();
                            video.currentTime = 0;
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white/90" />
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/400x400/2d1b69/ffffff?text=${encodeURIComponent(item.title)}`;
                        }}
                      />
                    )}

                    {/* Media Type Badge */}
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-20 px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-md bg-black/60 backdrop-blur-sm">
                      {item.type === "video" ? (
                        <Video className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                      ) : (
                        <ImageIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/95 via-[#05011a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-2 sm:p-3">
                      <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm line-clamp-1">
                        {item.title}
                      </p>
                      <p className="text-purple-300/80 text-[8px] sm:text-[10px] md:text-xs line-clamp-1">
                        {item.location || item.description}
                      </p>
                    </div>
                  </div>

                  {/* Info Section - Hidden on very small screens */}
                  <div className="p-1.5 sm:p-2 md:p-3">
                    <h4 className="text-white font-medium text-[10px] sm:text-xs md:text-sm line-clamp-1">
                      {item.title}
                    </h4>
                    {item.location && (
                      <div className="flex items-center gap-1 text-purple-400/80 text-[8px] sm:text-[10px] md:text-xs mt-0.5">
                        <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-8 sm:mt-10 md:mt-12"
            >
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-purple-500/30 text-purple-100 font-semibold text-xs sm:text-sm backdrop-blur-sm hover:bg-purple-500/15 transition-all duration-300 hover:scale-105 hover:border-purple-500/60"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">View More ({currentGallery.length - visibleCount} remaining)</span>
                <span className="xs:hidden">View More</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <MediaGalleryModal
            media={selectedMedia.media}
            initialIndex={selectedMedia.index}
            onClose={() => setSelectedMedia(null)}
          />
        )}
      </AnimatePresence>

      {/* Edge guards - hidden on mobile */}
      <div className="absolute top-0 left-0 w-2 sm:w-4 md:w-6 h-full bg-linear-to-r from-[#05011a] to-transparent pointer-events-none z-10 hidden sm:block" />
      <div className="absolute top-0 right-0 w-2 sm:w-4 md:w-6 h-full bg-linear-to-l from-[#05011a] to-transparent pointer-events-none z-10 hidden sm:block" />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 bg-linear-to-t from-[#05011a] to-transparent pointer-events-none z-10" />
    </section>
  );
}