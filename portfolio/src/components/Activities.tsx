// BeyondCode.tsx

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Palette, Globe, Music, Coffee, Book, 
  Mountain, Sparkles, X, 
  MapPin, Brush, Headphones 
} from "lucide-react";

interface Interest {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  gradient: string;
  longDescription?: string;
  stats?: { label: string; value: string }[];
}

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: "drawing" | "travelling";
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
    longDescription: "Art has been my creative outlet since childhood. I love experimenting with different mediums - from traditional pencil sketches to digital illustrations. It helps me think differently and brings a unique perspective to my design work.",
    stats: [
      { label: "Sketches Created", value: "150+" },
      { label: "Digital Art", value: "50+" },
      { label: "Exhibitions", value: "3" }
    ]
  },
  {
    icon: Globe,
    title: "Travel & Exploration",
    description: "Discovering new cultures, landscapes, and perspectives around the world",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/30 via-cyan-500/20 to-blue-500/30",
    longDescription: "Traveling fuels my curiosity and broadens my horizons. Each destination teaches me something new about design, culture, and life. I've visited 12 countries and counting, always seeking inspiration in architecture, nature, and local art.",
    stats: [
      { label: "Countries Visited", value: "12" },
      { label: "Cities Explored", value: "45+" },
      { label: "Photos Taken", value: "5000+" }
    ]
  },
  {
    icon: Headphones,
    title: "Music Listening",
    description: "Finding joy and inspiration through diverse melodies and rhythms",
    color: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-500/30 via-teal-500/20 to-emerald-500/30",
    longDescription: "Music is my constant companion while coding, creating art, or traveling. I love exploring different genres - from classical to lo-fi, jazz to electronic. A good playlist sets the perfect mood for any creative endeavor.",
    stats: [
      { label: "Minutes Listened", value: "50K+" },
      { label: "Artists Discovered", value: "200+" },
      { label: "Playlists Created", value: "15+" }
    ]
  }
];

// Sample gallery images - Replace with your actual images
const galleryImages: GalleryImage[] = [
  // Drawing/Art Gallery Images
  {
    id: 1,
    src: "/gallery/drawing-1.jpg",
    title: "Mountain Sketch",
    category: "drawing",
    description: "Pencil sketch of Himalayan mountains",
    location: "Studio Work",
    date: "2024"
  },
  {
    id: 2,
    src: "/gallery/drawing-2.jpg",
    title: "Portrait Study",
    category: "drawing",
    description: "Charcoal portrait study",
    location: "Art Class",
    date: "2023"
  },
  {
    id: 3,
    src: "/gallery/drawing-3.jpg",
    title: "Digital Illustration",
    category: "drawing",
    description: "Fantasy character design",
    location: "Digital Canvas",
    date: "2024"
  },
  {
    id: 4,
    src: "/gallery/drawing-4.jpg",
    title: "Urban Sketch",
    category: "drawing",
    description: "Cityscape watercolor",
    location: "Downtown Cafe",
    date: "2023"
  },
  // Travelling Gallery Images
  {
    id: 5,
    src: "/gallery/travel-1.jpg",
    title: "Swiss Alps",
    category: "travelling",
    description: "Breathtaking views of the Swiss mountains",
    location: "Switzerland",
    date: "2024"
  },
  {
    id: 6,
    src: "/gallery/travel-2.jpg",
    title: "Kyoto Temple",
    category: "travelling",
    description: "Ancient temple in cherry blossom season",
    location: "Kyoto, Japan",
    date: "2023"
  },
  {
    id: 7,
    src: "/gallery/travel-3.jpg",
    title: "Santorini Sunset",
    category: "travelling",
    description: "Iconic blue domes at golden hour",
    location: "Santorini, Greece",
    date: "2024"
  },
  {
    id: 8,
    src: "/gallery/travel-4.jpg",
    title: "Northern Lights",
    category: "travelling",
    description: "Aurora borealis dancing",
    location: "Iceland",
    date: "2023"
  }
];

export default function BeyondCode() {
  const ref = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState<"drawing" | "travelling">("drawing");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const filteredImages = galleryImages.filter(img => img.category === selectedCategory);

  // Responsive grid columns
  const getGalleryGridCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  };

  return (
    <section
      ref={ref}
      id="beyond"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 bg-[#05011a] overflow-x-hidden overflow-y-visible"
      style={{ minHeight: 'auto' }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#2e1065_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,#1e1b4b_0%,transparent_55%)]" />
      
      {/* Floating orbs - hidden on mobile for performance */}
      {!isMobile && (
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] w-[40%] aspect-square rounded-full bg-gradient-to-bl from-purple-600/20 via-pink-500/15 to-transparent blur-3xl pointer-events-none"
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
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-purple-200/90">BEYOND CODE</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4">
            Other orbits I{" "}
            <span className="relative inline-block">
              <motion.span
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 -z-10 blur-2xl sm:blur-3xl bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-orange-500/50 rounded-full"
              />
              <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_40%,#fde047_100%)] bg-[length:250%_100%] animate-[shimmer_6s_linear_infinite] text-sm sm:text-base">
                move in
              </span>
            </span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Building software is only one moon in the system. Here's everything else I'm into.
          </p>
        </motion.div>

        {/* Interests Cards Grid - Responsive height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 mb-16 sm:mb-20 md:mb-24 px-4 sm:px-0 max-w-5xl mx-auto">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${interest.color} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-sm border border-white/15 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/15 h-full flex flex-col">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${interest.color} p-0.5 mb-4 shadow-md`}>
                    <div className="w-full h-full rounded-xl bg-[#05011a]/90 flex items-center justify-center">
                      <interest.icon className="w-6 h-6 text-white/80" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all">
                    {interest.title}
                  </h3>
                  <p className="text-purple-300/70 text-sm sm:text-base leading-relaxed mb-3">
                    {interest.description}
                  </p>
                </div>
                
                {/* Stats section */}
                {interest.stats && (
                  <div className="mt-4 pt-3 border-t border-white/10 flex-shrink-0">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {interest.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-purple-400/80 text-xs sm:text-sm font-semibold">{stat.value}</span>
                          <span className="text-purple-300/50 text-[10px] sm:text-xs">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Gallery
              </span>
            </h3>
            <p className="text-purple-300/70 text-sm sm:text-base px-4">
              A glimpse into my artistic journey and travel adventures
            </p>
          </div>

          {/* Category Tabs - Responsive */}
          <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto px-4">
            <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => setSelectedCategory("drawing")}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === "drawing"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-purple-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Brush className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Drawing & Art
              </button>
              <button
                onClick={() => setSelectedCategory("travelling")}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === "travelling"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-purple-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Travel Moments
              </button>
            </div>
          </div>

          {/* Gallery Grid - Responsive with auto height */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-0`}
          >
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer h-full"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/8 to-white/2 border border-white/15 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/15 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-purple-900/20 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/400x400/2d1b69/ffffff?text=${encodeURIComponent(image.title)}`;
                      }}
                    />
                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-3 sm:p-4">
                      <p className="text-white font-semibold text-xs sm:text-sm">{image.title}</p>
                      <p className="text-purple-300/80 text-[10px] sm:text-xs">{image.location || image.description}</p>
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div className="p-3 sm:p-4 flex-shrink-0">
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1 line-clamp-1">{image.title}</h4>
                    <div className="flex items-center gap-2 text-purple-400/80 text-[10px] sm:text-xs">
                      {image.location && (
                        <>
                          <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="truncate">{image.location}</span>
                        </>
                      )}
                      {image.date && (
                        <>
                          <span>•</span>
                          <span>{image.date}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        
      </motion.div>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#05011a]/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95%] sm:max-w-[90%] md:max-w-4xl w-full rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-[#0d0728] to-[#05011a] shadow-2xl shadow-purple-500/20"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
              >
                <X size={isMobile ? 14 : 16} />
              </button>
              
              <div className="relative max-h-[70vh] overflow-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain bg-purple-900/20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/800x600/2d1b69/ffffff?text=${encodeURIComponent(selectedImage.title)}`;
                  }}
                />
              </div>
              
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-purple-400/80 text-xs sm:text-sm mb-3">
                  {selectedImage.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{selectedImage.location}</span>
                    </div>
                  )}
                  {selectedImage.date && (
                    <div className="flex items-center gap-1">
                      <span>📅</span>
                      <span>{selectedImage.date}</span>
                    </div>
                  )}
                </div>
                <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-purple-300/60 text-xs sm:text-sm">
                    {selectedImage.category === "drawing" 
                      ? "✏️ Created with passion and attention to detail" 
                      : "🌍 Captured during my journey of discovery"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edge guards */}
      <div className="absolute top-0 left-0 w-4 sm:w-6 md:w-8 h-full bg-gradient-to-r from-[#05011a] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-4 sm:w-6 md:w-8 h-full bg-gradient-to-l from-[#05011a] to-transparent pointer-events-none z-10" />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-[#05011a] to-transparent pointer-events-none z-10" />
    </section>
  );
}