// BeyondCode.tsx

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Palette,
  Globe,
  Music,
  Coffee,
  Book,
  Mountain,
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
  Maximize2,
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

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: "drawing" | "travelling";
  description: string;
  location?: string;
  date?: string;
  type?: "image" | "video";
  thumbnail?: string;
}

const interests: Interest[] = [
  {
    icon: Brush,
    title: "Drawing & Art",
    description: "Expressing creativity through sketches, digital art, and illustrations",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/30 via-pink-500/20 to-purple-500/30",
    longDescription:
      "Art has been my creative outlet since childhood. I love experimenting with different mediums - from traditional pencil sketches to digital illustrations. It helps me think differently and brings a unique perspective to my design work.",
   
  },
  {
    icon: Globe,
    title: "Travel & Exploration",
    description: "Discovering new cultures, landscapes, and perspectives around the world",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/30",
    longDescription:
      "Traveling fuels my curiosity and broadens my horizons. Each destination teaches me something new about design, culture, and life. I've visited 12 countries and counting, always seeking inspiration in architecture, nature, and local art.",
   
  },
  {
    icon: Headphones,
    title: "Music Listening",
    description: "Finding joy and inspiration through diverse melodies and rhythms",
    color: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/30 via-teal-500/20 to-emerald-500/30",
    longDescription:
      "Music is my constant companion while coding, creating art, or traveling. I love exploring different genres - from classical to lo-fi, jazz to electronic. A good playlist sets the perfect mood for any creative endeavor.",
   
  },
];

// Drawing Gallery Items (Images & Videos)
const drawingGallery: MediaItem[] = [
  {
    type: "image",
    url: "/D1.jpeg",
    title: "à¤…à¤‚à¤¤à¤°à¤ªà¤¾à¤ ",
    description: "oil painting of parvati and shiva hands ",
  },
  {
    type: "image",
    url: "/D2.jpeg",
    title: "à¤…à¤‚à¤¤à¤°à¤ªà¤¾à¤ ",
    description: "oil painting of parvati and shiva hands ",
  },
  {
    type: "image",
    url: "/D3.jpeg",
    title: "Lord Krishna painting",
    description: "Lord Krishna painting",
    
  },
  {
    type: "image",
    url: "/D4.jpeg",
    title: "Lord Krishna painting",
    description: "Lord Krishna painting",
   
  },
  {
    type: "image",
    url: "/D5.jpeg",
    title: "Lord Krishna painting",
    description: "Lord Krishna painting",
    
  },
  {
    type: "image",
    url: "/D6.jpeg",
    title: "KPOP IDOL",
    description: "KPOP IDOL sketch",
    
  },
  {
    type: "image",
    url: "/D7.jpeg",
    title: "Portrait Series",
    description: "Charcoal portrait collection",
   
  },
  {
    type: "image",
    url: "/D8.jpeg",
    title: "Medusa sketch",
    description: "greek mythology character sketch",
   
  },
  {
    type: "image",
    url: "/D9.jpeg",
    title: "à¤›à¤¤à¥à¤°à¤ªà¤¤à¥€ à¤¶à¤¿à¤µà¤¾à¤œà¥€ à¤®à¤¹à¤¾à¤°à¤¾à¤œ",
    description: "à¤›à¤¤à¥à¤°à¤ªà¤¤à¥€ à¤¶à¤¿à¤µà¤¾à¤œà¥€ à¤®à¤¹à¤¾à¤°à¤¾à¤œ",
    
  },
  {
     type: "image",
    url: "/D11.jpeg",
    title: "KPOP IDOL",
    description: "KPOP IDOL sketch in horror theme",
   
  },
  {
    type: "image",
    url: "/D11.jpeg",
    title: "KPOP IDOL",
    description: "KPOP IDOL sketch in horror theme",
    
  },
  {
    type: "image",
    url: "/D12.jpeg",
    title: "RANDOM CHARACTER",
    description: "RANDOM CHARACTER sketch",
    
  },
  
  {
    type: "image",
    url: "/D13.jpeg",
    title: "HUMAN HEART painting ",
    description: "HUMAN HEART painting ",
    
  },
  {
    type: "image",
    url: "/D14.jpeg",
    title: "Elbert ainstein sketch",
    description: " Great scientest Elbert ainstein sketch",
    
  },
];

// Travel Gallery Items (Images & Videos)
const travelGallery: MediaItem[] = [
  {
    type: "image",
    url: "/sin1.jpeg",
    title: "Swiss Alps",
    description: "Breathtaking views of the Swiss mountains",
    location: "Switzerland",
    date: "2024",
  },
  {
    type: "image",
    url: "/sin2.jpeg",
    title: "Kyoto Temple",
    description: "Ancient temple in cherry blossom season",
    location: "Kyoto, Japan",
    date: "2023",
  },
  {
    type: "image",
    url: "/sin3.jpeg",
    title: "Santorini Sunset",
    description: "Iconic blue domes at golden hour",
    location: "Santorini, Greece",
    date: "2024",
  },
  {
    type: "image",
    url: "/sin4.jpeg",
    title: "Northern Lights",
    description: "Aurora borealis dancing across the sky",
    location: "Iceland",
    date: "2023",
  },
  {
    type: "video",
    url: "/solarsys.mp4",
    thumbnail: "/sin1.jpeg",
    title: "Travel Memories Reel",
    description: "A compilation of my best travel moments",
    location: "Various Locations",
    date: "2024",
  },
  {
    type: "image",
    url: "/sin5.jpeg",
    title: "Bali Rice Terraces",
    description: "Tegalalang Rice Terraces at sunrise",
    location: "Bali, Indonesia",
    date: "2023",
  },
  {
    type: "image",
    url: "/sin6.jpeg",
    title: "Parisian Streets",
    description: "Morning light in Montmartre",
    location: "Paris, France",
    date: "2024",
  },
  {
    type: "image",
    url: "/sin7.jpeg",
    title: "Safari Adventure",
    description: "Elephants in Amboseli National Park",
    location: "Kenya",
    date: "2023",
  },
  {
    type: "video",
    url: "/solarsys.mp4",
    thumbnail: "/sin6.jpeg",
    title: "City Exploration",
    description: "Walking through historic European streets",
    location: "Europe",
    date: "2024",
  },
  {
    type: "image",
    url: "/sin8.jpeg",
    title: "Machu Picchu",
    description: "Ancient Incan citadel in the clouds",
    location: "Peru",
    date: "2023",
  },
  {
    type: "image",
    url: "/sin9.jpeg",
    title: "Maldives Beach",
    description: "Crystal clear waters and white sand",
    location: "Maldives",
    date: "2024",
  },
  {
    type: "image",
    url: "/sin10.jpeg",
    title: "New York Skyline",
    description: "Manhattan at night",
    location: "New York, USA",
    date: "2023",
  },
  {
    type: "video",
    url: "/solarsys.mp4",
    thumbnail: "/sin9.jpeg",
    title: "Beach Sunset Timelapse",
    description: "Mesmerizing sunset over the Indian Ocean",
    location: "Maldives",
    date: "2024",
  },
];

// Media Gallery Component for Modal
function MediaGalleryModal({ 
  media, 
  initialIndex, 
  onClose 
}: { 
  media: MediaItem[]; 
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentMedia = media[currentIndex];
  const isVideo = currentMedia?.type === "video";

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
    setIsVideoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    setIsVideoPlaying(false);
  };

  const toggleFullscreen = () => {
    if (!isVideo && !isFullscreen) {
      setIsFullscreen(!isFullscreen);
    } else if (!isVideo) {
      setIsFullscreen(!isFullscreen);
    }
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#05011a]/95 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-purple-500/30 bg-linear-to-br from-[#0d0728] to-[#05011a] shadow-2xl shadow-purple-500/20"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
        >
          <X size={isMobile ? 14 : 16} />
        </button>

        {/* Main Media Display */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-black/50">
          {isVideo ? (
            <video
              ref={videoRef}
              src={currentMedia.url}
              poster={currentMedia.thumbnail}
              className="w-full h-full object-contain"
              onClick={toggleVideoPlay}
              controls={false}
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

          {/* Media Type Badge */}
          <div className="absolute top-4 left-4 z-10 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-1.5">
              {isVideo ? (
                <Video className="w-3.5 h-3.5 text-purple-400" />
              ) : (
                <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
              )}
              <span className="text-xs text-white">
                {isVideo ? "Video" : "Image"} {currentIndex + 1} of {media.length}
              </span>
            </div>
          </div>

          {/* Video Controls */}
          {isVideo && (
            <button
              onClick={toggleVideoPlay}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                {isVideoPlaying ? (
                  <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                ) : (
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                )}
              </div>
            </button>
          )}

          {/* Navigation Buttons */}
          {media.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Media Info */}
        <div className="p-5 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
            {currentMedia.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-purple-400/80 text-xs sm:text-sm mb-3">
            {currentMedia.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{currentMedia.location}</span>
              </div>
            )}
            {currentMedia.date && (
              <div className="flex items-center gap-1">
                <span>ðŸ“…</span>
                <span>{currentMedia.date}</span>
              </div>
            )}
          </div>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
            {currentMedia.description}
          </p>
        </div>

        {/* Thumbnails */}
        {media.length > 1 && (
          <div className="px-4 pb-4 overflow-x-auto hide-scrollbar">
            <div className="flex gap-2">
              {media.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsVideoPlaying(false);
                  }}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    currentIndex === idx
                      ? "border-purple-500 scale-105"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  {item.type === "video" ? (
                    <div className="relative w-full h-full bg-black/60 flex items-center justify-center">
                      <Play className="w-3 h-3 text-white" />
                      {item.thumbnail && (
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover -z-10"
                        />
                      )}
                    </div>
                  ) : (
                    <img src={item.url} alt="" className="w-full h-full object-cover" />
                  )}
                  {currentIndex === idx && (
                    <div className="absolute inset-0 bg-purple-500/30" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
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

  const currentGallery = selectedCategory === "drawing" ? drawingGallery : travelGallery;
  const displayedItems = currentGallery.slice(0, visibleCount);
  const hasMore = visibleCount < currentGallery.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, currentGallery.length));
  };

  const handleItemClick = (item: MediaItem, index: number) => {
    setSelectedMedia({ media: currentGallery, index });
  };

  return (
    <section
      ref={ref}
      id="beyond"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 bg-[#05011a] overflow-x-hidden overflow-y-visible"
    >
      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <SpaceBackground density={25} />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#2e1065_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,#1e1b4b_0%,transparent_55%)]" />

      {!isMobile && (
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
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
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-purple-200/90">
              BEYOND CODE
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4">
            Other orbits I{" "}
            <span className="relative inline-block">
              <motion.span
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 -z-10 blur-2xl sm:blur-3xl bg-linear-to-r from-purple-600/50 via-pink-500/50 to-orange-500/50 rounded-full"
              />
              <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_40%,#fde047_100%)] bg-size-[250%_100%] animate-[shimmer_6s_linear_infinite] text-sm sm:text-base">
                move in
              </span>
            </span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Building software is only one moon in the system. Here's everything else I'm into.
          </p>
        </motion.div>

        {/* Interests Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20 md:mb-24 px-4 sm:px-0 max-w-5xl mx-auto">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${interest.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                <div className="p-6 sm:p-7">
                  <div className="relative mb-5">
                    <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div
                      className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${interest.color} p-0.5 shadow-lg`}
                    >
                      <div className="w-full h-full rounded-xl bg-[#05011a]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <interest.icon className="w-6 h-6 text-white/90" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                    {interest.title}
                  </h3>

                  <p className="text-purple-300/70 text-sm leading-relaxed mb-4">
                    {interest.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                    {interest.stats?.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          {idx === 0 && <Award className="w-3 h-3 text-purple-400" />}
                          {idx === 1 && <Star className="w-3 h-3 text-pink-400" />}
                          {idx === 2 && <Heart className="w-3 h-3 text-blue-400" />}
                          <span className="text-purple-400/80 text-xs font-bold">{stat.value}</span>
                        </div>
                        <span className="text-purple-400/50 text-[10px]">{stat.label}</span>
                      </div>
                    ))}
                  </div>
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
          className="mb-12 sm:mb-16"
        >
          {/* Gallery Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Creative{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Gallery
              </span>
            </h3>
            <p className="text-purple-300/70 text-sm sm:text-base px-4">
              A glimpse into my artistic journey and travel adventures
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto px-4 hide-scrollbar">
            <div className="inline-flex gap-2 p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => {
                  setSelectedCategory("drawing");
                  setVisibleCount(8);
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === "drawing"
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-purple-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Brush className="w-4 h-4" />
                Drawing & Art
              </button>
              <button
                onClick={() => {
                  setSelectedCategory("travelling");
                  setVisibleCount(8);
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === "travelling"
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-purple-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <MapPin className="w-4 h-4" />
                Travel Moments
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 px-4 sm:px-0"
          >
            {displayedItems.map((item, idx) => (
              <motion.div
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => handleItemClick(item, idx)}
              >
                <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-white/8 to-white/2 border border-white/15 transition-all duration-400 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
                  {/* Media Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {item.type === "video" ? (
                      <>
                        <video
                          src={item.url}
                          poster={item.thumbnail}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          muted
                          loop
                          playsInline
                          onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                          onMouseLeave={(e) => {
                            const video = e.currentTarget as HTMLVideoElement;
                            video.pause();
                            video.currentTime = 0;
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20">
                          <Play className="w-10 h-10 text-white/80" />
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/400x400/2d1b69/ffffff?text=${encodeURIComponent(item.title)}`;
                        }}
                      />
                    )}
                    
                    {/* Media Type Badge */}
                    <div className="absolute top-2 right-2 z-20 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-sm">
                      {item.type === "video" ? (
                        <Video className="w-3 h-3 text-purple-400" />
                      ) : (
                        <ImageIcon className="w-3 h-3 text-purple-400" />
                      )}
                    </div>

                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/90 via-[#05011a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-4">
                      <p className="text-white font-bold text-sm">{item.title}</p>
                      <p className="text-purple-300/80 text-xs">
                        {item.location || item.description}
                      </p>
                    </div>
                  </div>

                  {/* Media Info */}
                  <div className="p-3 sm:p-4">
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-purple-400/80 text-xs">
                      {item.location && (
                        <>
                          <MapPin className="w-3 h-3" />
                          <span className="truncate">{item.location}</span>
                        </>
                      )}
                      {item.date && (
                        <>
                          <span>â€¢</span>
                          <span>{item.date}</span>
                        </>
                      )}
                    </div>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
                        Click to view â†’
                      </span>
                    </div>
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
              className="flex justify-center mt-10 sm:mt-12"
            >
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-purple-100 font-semibold backdrop-blur-sm hover:bg-purple-500/15 transition-all duration-300 hover:scale-105 hover:border-purple-500/60"
              >
                <Plus className="w-4 h-4" />
                View More ({currentGallery.length - visibleCount} remaining)
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <MediaGalleryModal
            media={selectedMedia.media}
            initialIndex={selectedMedia.index}
            onClose={() => setSelectedMedia(null)}
          />
        )}
      </AnimatePresence>

      {/* Edge guards */}
      <div className="absolute top-0 left-0 w-4 sm:w-6 md:w-8 h-full bg-linear-to-r from-[#05011a] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-4 sm:w-6 md:w-8 h-full bg-linear-to-l from-[#05011a] to-transparent pointer-events-none z-10" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-linear-to-t from-[#05011a] to-transparent pointer-events-none z-10" />
    </section>
  );
}
