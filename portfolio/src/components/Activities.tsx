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

  const filteredImages = galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section
      ref={ref}
      id="beyond"
      className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-[#05011a] overflow-x-hidden overflow-y-visible"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#2e1065_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,#1e1b4b_0%,transparent_55%)]" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[40%] aspect-square rounded-full bg-gradient-to-bl from-purple-600/20 via-pink-500/15 to-transparent blur-3xl pointer-events-none"
      />
      
      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Other orbits I{" "}
            <span className="relative inline-block">
              <motion.span
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-orange-500/50 rounded-full"
              />
              <span className="relative italic text-transparent bg-clip-text bg-[linear-gradient(110deg,#e879f9_0%,#c084fc_40%,#fde047_100%)] bg-[length:250%_100%] animate-[shimmer_6s_linear_infinite]">
                move in
              </span>
            </span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Building software is only one moon in the system. Here's everything else I'm into.
          </p>
        </motion.div>

        {/* Interests Cards Grid - 3 cards only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-16 sm:mb-20 md:mb-24 px-4 sm:px-0 max-w-5xl mx-auto">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${interest.color} rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-sm border border-white/15 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/15 h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${interest.color} p-0.5 mb-4 shadow-md`}>
                  <div className="w-full h-full rounded-xl bg-[#05011a]/90 flex items-center justify-center">
                    <interest.icon className="w-6 h-6 text-white/80" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all">
                  {interest.title}
                </h3>
                <p className="text-purple-300/70 text-sm leading-relaxed">
                  {interest.description}
                </p>
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
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Gallery
              </span>
            </h3>
            <p className="text-purple-300/70 text-sm sm:text-base">
              A glimpse into my artistic journey and travel adventures
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <button
                onClick={() => setSelectedCategory("drawing")}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
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
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 ${
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

          {/* Gallery Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-0"
          >
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white/8 to-white/2 border border-white/15 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/15">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-purple-900/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback for missing images
                        (e.target as HTMLImageElement).src = `https://placehold.co/400x400/2d1b69/ffffff?text=${image.title}`;
                      }}
                    />
                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05011a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-4">
                      <p className="text-white font-semibold text-sm">{image.title}</p>
                      <p className="text-purple-300/80 text-xs">{image.location || image.description}</p>
                    </div>
                  </div>
                  
                  {/* Image Info */}
                  <div className="p-3 sm:p-4">
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">{image.title}</h4>
                    <div className="flex items-center gap-2 text-purple-400/80 text-xs">
                      {image.location && (
                        <>
                          <MapPin className="w-3 h-3" />
                          <span>{image.location}</span>
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-purple-200/80 text-base sm:text-lg md:text-xl italic leading-relaxed">
              "The best ideas emerge at the intersection of disciplines. 
              Creativity flows when you let different passions collide."
            </p>
            <div className="mt-4 w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto" />
            <p className="text-purple-400/70 text-sm mt-3">— Kirti</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05011a]/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-[#0d0728] to-[#05011a] shadow-2xl shadow-purple-500/20"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all hover:scale-110"
              >
                <X size={isMobile ? 14 : 16} />
              </button>
              
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-purple-900/20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/800x600/2d1b69/ffffff?text=${selectedImage.title}`;
                  }}
                />
              </div>
              
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <div className="flex items-center gap-3 text-purple-400/80 text-xs sm:text-sm mb-3">
                  {selectedImage.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
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