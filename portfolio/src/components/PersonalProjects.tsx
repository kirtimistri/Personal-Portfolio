import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  X,
  Layers,
  Sparkles,
  Loader2,
  Clock,
  GitBranch,
  Zap,
  Image,
  Video,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
} from "lucide-react";
import SpaceBackground from "./SpaceBackground";

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  title?: string;
}

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
  media?: MediaItem[];
  status?: "ongoing" | "completed";
  progress?: number;
}

// Ongoing Projects
const ongoingProjects: Project[] = [
 {
  title: "TicketZila",
  tagline: "Online movie ticket booking platform",
  description:
    "A full-stack movie ticket booking platform that enables users to browse movies, select seats, book tickets, and manage reservations through a seamless digital experience.",
  longDescription:
    "TicketZila is a modern movie ticket booking platform built to simplify the cinema reservation process. The application provides secure user authentication, movie listings, theater management, seat selection, ticket booking, and booking history tracking. Developed using React for the frontend and Django REST Framework for the backend, the platform features JWT-based authentication, responsive UI design, RESTful APIs, and efficient database management. The system is designed to handle real-world booking workflows while ensuring a smooth and user-friendly experience across devices.",
  tags: [
    "React",
    "Django",
    "Django REST Framework",
    "JWT",
    "PostgreSQL",
    "Tailwind CSS"
  ],
  gradient: "from-red-500/40 via-orange-500/30 to-yellow-500/40",
  features: [
    "User registration and authentication",
    "Movie and theater listings",
    "Interactive seat selection",
    "Online ticket booking",
    "Booking history management",
    "JWT secure authentication",
    "Responsive user interface",
    "RESTful API architecture",
    "Admin movie management",
    "Real-time seat availability"
  ],
  github: "#",
  imageUrl: "/ticketzila.jpeg",
  media: [
    { type: "image", url: "/ticketzila.jpeg", title: "TicketZila Dashboard" },
    { type: "image", url: "/ticketzila2.jpeg", title: "Seat Selection" },
    { type: "video", url: "/ticketzila-demo.mp4", thumbnail: "/ticketzila.jpeg", title: "Platform Demo" },
  ],
  status: "ongoing",
  progress: 20,
  preview: (
    <div className="relative w-full h-full p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <div className="w-3 h-3 rounded-full bg-green-400/70" />
      </div>

      <div className="flex-1 bg-black/30 rounded-lg p-3">
        <div className="text-orange-300 font-semibold mb-3">
          ðŸŽ¬ TicketZila
        </div>

        <div className="grid grid-cols-6 gap-1 mb-4">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className={`h-3 rounded ${
                i % 5 === 0
                  ? "bg-red-500/60"
                  : "bg-green-500/60"
              }`}
            />
          ))}
        </div>

        <div className="text-xs text-white/60">
          Select Your Seats
        </div>

        <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="w-4/5 h-full bg-orange-400 rounded-full" />
        </div>

        <div className="mt-2 text-xs text-orange-300">
          Booking System Active
        </div>
      </div>
    </div>
  ),
}
];

// Full Stack Projects
const fullStackProjects: Project[] = [
  {
  title: "Resso Music Streaming Clone",
  tagline: "Interactive music streaming platform",
  description:
    "A feature-rich music streaming web application inspired by Resso, featuring dynamic album management, immersive music playback, and a modern user experience.",
  longDescription:
    "Developed a full-featured Resso-inspired music streaming application that loads songs directly from server-side music folders and dynamically generates albums. The platform includes advanced audio controls, real-time song switching, seekbar functionality, playlist management, album browsing, and a mobile-friendly interface. Implemented a vertical reel-style music discovery experience, floating lyrics support, responsive UI components, and seamless playback controls to create an engaging music listening experience.",
  tags: [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "HTML5 Audio API"
  ],
  gradient: "from-pink-500/40 via-purple-500/30 to-red-500/40",
  features: [
    "Dynamic album generation from music folders",
    "Real-time audio playback controls",
    "Play, pause, next and previous track navigation",
    "Interactive seekbar and progress tracking",
    "Vertical reel-style song discovery",
    "Floating synchronized lyrics display",
    "Responsive mobile-first design",
    "Folder-based playlist management",
    "Dynamic album artwork loading",
    "Custom music player interface"
  ],
  github: "#",
  imageUrl: "/Resso1.jpeg",
  media: [
    { type: "image", url: "/Resso1.jpeg", title: "Home Screen" },
    { type: "image", url: "/Resso2.jpeg", title: "Player View" },
    
  ],
  status: "completed",
  progress: 100,
  preview: (
    <div className="relative w-full h-full p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <div className="w-3 h-3 rounded-full bg-green-400/70" />
      </div>

      <div className="flex-1 bg-black/30 rounded-lg p-3">
        <div className="text-pink-300 font-semibold mb-3">
          ðŸŽµ Now Playing
        </div>

        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500/50 to-purple-500/50 mx-auto mb-3" />

        <div className="text-center text-white/80 text-sm">
          Dynamic Music Streaming
        </div>

        <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="w-2/3 h-full bg-pink-400 rounded-full" />
        </div>

        <div className="flex justify-center gap-4 mt-4 text-white/70">
          <span>â®</span>
          <span>â–¶</span>
          <span>â­</span>
        </div>
      </div>
    </div>
  ),
},
  {
  title: "ConnectHub Chat Platform",
  tagline: "Real-time messaging and collaboration",
  description:
    "A modern real-time chat application featuring secure authentication, group conversations, profile management, and scalable cloud-based architecture.",
  longDescription:
    "Developed a full-stack real-time chat platform using Django, Django REST Framework, and React. The application supports one-to-one messaging, group chats, secure JWT authentication with HttpOnly cookies, user profile management, and persistent chat history. Implemented REST APIs for authentication, message handling, and account management while integrating cloud services for scalable data storage. Designed the system with a focus on security, performance, and seamless communication, with planned AI-powered features for smart replies and intelligent chat assistance.",
  tags: [
    "Django",
    "React",
    "Django REST Framework",
    "JWT",
    "AWS",
    "PostgreSQL"
  ],
  gradient: "from-emerald-500/40 via-cyan-500/30 to-blue-500/40",
  features: [
    "Real-time one-to-one messaging",
    "Group chat functionality",
    "JWT authentication with HttpOnly cookies",
    "User profile management",
    "Chat history persistence",
    "Secure login and registration",
    "Cloud-based data storage integration",
    "Responsive cross-device interface",
    "RESTful API architecture",
    "Scalable backend design"
  ],
  github: "#",
  live: "#",
  imageUrl: "/Chitchat.jpeg",
  media: [
    { type: "image", url: "/Chitchat.jpeg", title: "Chat Interface" },
    
  ],
  status: "completed",
  preview: (
    <div className="relative w-full h-full p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="text-cyan-300 text-sm font-medium">
          ConnectHub
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="flex-1 space-y-3">
        <div className="ml-auto w-3/4 h-8 rounded-lg bg-cyan-500/30 border border-cyan-400/20" />
        <div className="w-2/3 h-8 rounded-lg bg-white/10 border border-white/10" />
        <div className="ml-auto w-1/2 h-8 rounded-lg bg-cyan-500/30 border border-cyan-400/20" />
        <div className="w-4/5 h-8 rounded-lg bg-white/10 border border-white/10" />
      </div>

      <div className="mt-4 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-3">
        <div className="text-white/40 text-xs">
          Type a message...
        </div>
      </div>
    </div>
  ),
}
];

// Mini Projects
const miniProjects: Project[] = [
  {
    title: "Interactive 3D Solar System",
    tagline: "Explore planets in a realistic 3D universe",
    description:
      "A visually immersive 3D solar system simulation featuring realistic planetary motion, dynamic camera controls, and interactive space exploration.",
    longDescription:
      "Developed an interactive 3D Solar System application using React Three Fiber and Three.js to visualize planets orbiting around the Sun in real time. The project features realistic planetary scaling, orbital animations, dynamic camera tracking, zoom controls, starfield backgrounds, and smooth user interactions. Users can explore each planet individually, follow planetary movements with a cinematic camera system, and experience a realistic representation of our solar system through modern WebGL-powered graphics and animations.",
    tags: [
      "React",
      "Three.js",
      "React Three Fiber",
      "JavaScript",
      "WebGL",
      "Framer Motion"
    ],
    gradient: "from-cyan-500/40 via-blue-500/30 to-purple-500/40",
    features: [
      "Realistic 3D planetary models",
      "Planetary orbit animations",
      "Dynamic camera follow system",
      "Interactive planet selection",
      "Zoom and navigation controls",
      "Real-time rendering with WebGL",
      "Animated starfield background",
      "Responsive cross-device experience",
      "Smooth orbital mechanics",
      "Immersive space exploration"
    ],
    github: "#",
    imageUrl: "/sys.jpeg",
    media: [
      {
        type: "video",
        url: "/solarsys.mp4",
        thumbnail: "/sys.jpeg",
        title: "Solar System Overview"
      },
      {
        type: "image",
        url: "/sys.jpeg",
        title: "Planet Exploration Mode"
      }
    ],
    status: "completed",
    preview: (
      <div className="relative w-full h-full">
        <video
          src="/solarsys.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/sys.jpeg"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-3 left-3 z-10 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm">
          <span className="text-white/80 text-xs flex items-center gap-1">
            <Video className="w-3 h-3" /> Demo Video
          </span>
        </div>
      </div>
    ),
  },
  {
  title: "InfoTech Solutions",
  tagline: "Modern technology services website",
  description:
    "A professional corporate website designed for an IT services company, showcasing technology solutions, development services, and digital transformation expertise.",
  longDescription:
    "Developed a modern and responsive IT company website to establish a strong digital presence for a technology solutions provider. The platform highlights company services, development expertise, project portfolios, client success stories, and contact channels through an engaging user experience. Built with a focus on performance, accessibility, and modern UI/UX principles, the website features interactive animations, responsive layouts, service showcases, and optimized user journeys to help businesses discover and connect with technology solutions.",
  tags: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Framer Motion",
    "Vite",
    "Responsive Design"
  ],
  gradient: "from-blue-500/40 via-cyan-500/30 to-indigo-500/40",
  features: [
    "Modern corporate landing pages",
    "Technology services showcase",
    "Interactive animations and transitions",
    "Project portfolio section",
    "Responsive mobile-first design",
    "Contact and inquiry forms",
    "SEO-friendly architecture",
    "Performance optimized pages",
    "Service and solution categories",
    "Professional company branding"
  ],
  github: "#",
  live: "#",
  imageUrl: "/infotech.jpeg",
  media: [
    {
      type: "image",
      url: "/projects/infotech-website.jpg",
      title: "Homepage"
    }
  ],
  status: "completed",
  preview: (
    <div className="relative w-full h-full p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="text-cyan-300 text-sm font-medium">
          InfoTech Solutions
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="flex-1 space-y-3">
        <div className="h-12 rounded-lg bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-white/10" />

        <div className="grid grid-cols-3 gap-2">
          <div className="h-14 rounded-md bg-white/10 border border-white/10" />
          <div className="h-14 rounded-md bg-white/10 border border-white/10" />
          <div className="h-14 rounded-md bg-white/10 border border-white/10" />
        </div>

        <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
      </div>

      <div className="mt-3 flex justify-between items-center text-xs">
        <span className="text-white/60">IT Services & Solutions</span>
        <span className="text-cyan-300">Explore â†’</span>
      </div>
    </div>
  ),
},
{
  title: "Shinchan Adventure Game",
  tagline: "Interactive browser-based cartoon game",
  description:
    "A fun and engaging frontend game inspired by Shinchan, featuring character animations, score tracking, obstacles, and interactive gameplay mechanics.",
  longDescription:
    "Developed a browser-based Shinchan-themed game using modern frontend technologies, focusing on interactive gameplay, smooth animations, and responsive user experiences. Players control Shinchan through various challenges while avoiding obstacles, collecting rewards, and increasing their score. The project demonstrates strong JavaScript fundamentals, DOM manipulation, game logic implementation, animation handling, collision detection, and responsive UI design. Special attention was given to creating an entertaining experience with colorful visuals, engaging sound effects, and fluid character movements.",
  tags: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Game Development",
    "Animations",
    "Frontend"
  ],
  gradient: "from-yellow-500/40 via-orange-500/30 to-red-500/40",
  features: [
    "Interactive Shinchan character controls",
    "Real-time score tracking",
    "Obstacle avoidance mechanics",
    "Collision detection system",
    "Smooth character animations",
    "Keyboard-based controls",
    "Responsive game interface",
    "Game over and restart functionality",
    "Dynamic difficulty progression",
    "Sound and visual feedback effects"
  ],
  github: "#",
  live: "#",
  imageUrl: "/sin%201.jpeg",
  media: [
    {
      type: "image",
      url: "/sin%201.jpeg",
      title: "Gameplay Screen"
    },
    {
      type: "image",
      url: "/sin2.jpeg",
      title: "Gameplay Screen"
    }
  ],
  status: "completed",
  preview: (
    <div className="relative w-full h-full p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="text-yellow-300 text-sm font-medium">
          Shinchan Adventure
        </div>
        <div className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-[10px]">
          PLAYING
        </div>
      </div>

      <div className="flex-1 rounded-lg bg-gradient-to-b from-sky-400/20 to-green-500/20 border border-white/10 relative overflow-hidden">
        <div className="absolute bottom-3 left-8 text-2xl">
          ðŸ‘¦
        </div>

        <div className="absolute bottom-3 right-8 text-xl">
          ðŸš§
        </div>

        <div className="absolute top-3 right-3 text-xs text-yellow-300">
          Score: 125
        </div>
      </div>

      <div className="mt-3 flex justify-between items-center text-xs">
        <span className="text-white/60">Arcade Game</span>
        <span className="text-yellow-300">Press Space â†’</span>
      </div>
    </div>
  ),
},
 {
  title: "ShopSphere E-Commerce Platform",
  tagline: "Modern online shopping experience",
  description:
    "A full-stack e-commerce platform featuring product browsing, secure authentication, shopping cart management, and seamless order processing.",
  longDescription:
    "Developed a modern e-commerce web application that enables users to browse products, manage shopping carts, place orders, and track purchases through an intuitive interface. The platform includes secure user authentication, product categorization, advanced search and filtering, wishlist functionality, and responsive design. Built using React for the frontend and a robust backend architecture, the system focuses on delivering a smooth shopping experience while ensuring scalability, performance, and security.",
  tags: [
    "React",
    "Django",
    "PostgreSQL",
    "JWT",
    "Tailwind CSS",
    "REST API"
  ],
  gradient: "from-orange-500/40 via-pink-500/30 to-red-500/40",
  features: [
    "User authentication and profiles",
    "Product catalog management",
    "Advanced search and filtering",
    "Shopping cart functionality",
    "Wishlist management",
    "Order placement and tracking",
    "Responsive mobile-friendly design",
    "Secure REST API integration",
    "Product categories and sorting",
    "Admin dashboard management"
  ],
  github: "#",
  live: "#",
  imageUrl: "/ecom.jpeg",
  media: [
    {
      type: "image",
      url: "/projects/ecommerce-platform.jpg",
      title: "Home Page"
    },
    
  ],
  status: "completed",
  preview: (
    <div className="relative w-full h-full p-5 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <div className="text-orange-300 text-xs font-medium">
          ShopSphere
        </div>
        <div className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-[10px]">
          Online
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        <div className="rounded-lg bg-white/10 border border-white/10 p-2">
          <div className="h-10 rounded bg-orange-500/20 mb-2" />
          <div className="h-1.5 w-full rounded bg-white/20 mb-1" />
          <div className="h-1.5 w-2/3 rounded bg-white/10" />
        </div>

        <div className="rounded-lg bg-white/10 border border-white/10 p-2">
          <div className="h-10 rounded bg-pink-500/20 mb-2" />
          <div className="h-1.5 w-full rounded bg-white/20 mb-1" />
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
        </div>
      </div>

      <div className="mt-3 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-between px-3">
        <span className="text-xs text-white/60">
          Cart Items: 3
        </span>
        <span className="text-xs text-orange-300">
          Checkout â†’
        </span>
      </div>
    </div>
  ),
},
  {
  title: "Emotion Detection System",
  tagline: "AI-powered facial emotion recognition",
  description:
    "A machine learning application that detects and classifies human emotions from facial expressions in real time using computer vision techniques.",
  longDescription:
    "Developed an intelligent emotion detection system capable of identifying human emotions such as happiness, sadness, anger, surprise, fear, and neutrality from facial expressions. The system leverages computer vision and deep learning techniques to process live webcam feeds and image inputs, perform face detection, and classify emotions with high accuracy. Built using Python, OpenCV, TensorFlow, and deep learning models, the project demonstrates real-time emotion analysis and human-computer interaction capabilities.",
  tags: [
    "Python",
    "OpenCV",
    "TensorFlow",
    "Keras",
    "Machine Learning",
    "Computer Vision"
  ],
  gradient: "from-pink-500/40 via-purple-500/30 to-indigo-500/40",
  features: [
    "Real-time facial emotion detection",
    "Webcam-based emotion recognition",
    "Multi-emotion classification",
    "Face detection and tracking",
    "Deep learning-powered predictions",
    "Image and video input support",
    "Live confidence score display",
    "Interactive user interface"
  ],
  github: "#",
  live: "#",
  imageUrl: "/ed.jpeg",
  media: [
    
    {
      type: "image",
      url: "/ed.jpeg",
      title: "Real-Time Face Detection"
    }
  ],
  status: "completed",
  preview: (
    <div className="relative w-full h-full p-5 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <div className="text-pink-300 text-xs font-medium">
          Emotion Analysis
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="flex-1 bg-black/20 rounded-lg border border-white/10 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-2 border-pink-400/60 flex items-center justify-center">
            ðŸ˜Š
          </div>

          <div className="absolute -top-2 -right-4 px-2 py-1 rounded bg-pink-500/30 text-[10px] text-pink-200">
            Happy 94%
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="w-[94%] h-full bg-pink-400 rounded-full" />
        </div>
        <div className="text-[10px] text-white/50">
          Real-time Emotion Detection
        </div>
      </div>
    </div>
  ),
}
];

// Media Gallery Component
function MediaGallery({ media, title }: { media: MediaItem[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    setIsFullscreen(!isFullscreen);
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
    <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-black/95" : ""}`}>
      <div className={`relative overflow-hidden rounded-xl ${isFullscreen ? "h-screen" : "h-80 md:h-96"}`}>
        {/* Main Media Display */}
        <div className="relative w-full h-full">
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
              alt={currentMedia.title || `${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Media Type Badge */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
            <div className="flex items-center gap-1.5">
              {isVideo ? (
                <Video className="w-3.5 h-3.5 text-purple-400" />
              ) : (
                <Image className="w-3.5 h-3.5 text-purple-400" />
              )}
              <span className="text-xs text-white">
                {isVideo ? "Video" : "Image"} {currentIndex + 1} of {media.length}
              </span>
            </div>
          </div>

          {/* Video Controls Overlay */}
          {isVideo && (
            <button
              onClick={toggleVideoPlay}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                {isVideoPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </div>
            </button>
          )}

          {/* Navigation Buttons */}
          {media.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

        {/* Thumbnails */}
        {media.length > 1 && !isFullscreen && (
          <div className="absolute bottom-4 left-0 right-0 z-10">
            <div className="flex justify-center gap-2 overflow-x-auto px-4 pb-2">
              {media.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsVideoPlaying(false);
                  }}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === idx
                      ? "border-purple-500 scale-105"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  {item.type === "video" ? (
                    <div className="relative w-full h-full bg-black/50 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                      {item.thumbnail && (
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover -z-10"
                        />
                      )}
                    </div>
                  ) : (
                    <img
                      src={item.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                  {currentIndex === idx && (
                    <div className="absolute inset-0 bg-purple-500/20" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Close Button */}
      {isFullscreen && (
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}

export default function PersonalProjects() {
  const [active, setActive] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<"fullstack" | "ongoing" | "mini">("fullstack");

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#05011a] overflow-hidden">
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
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-purple-300 via-indigo-300 to-blue-300">
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
              onClick={() => setActiveCategory("fullstack")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === "fullstack"
                  ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-purple-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Layers className="w-4 h-4" />
              Full Stack Projects
            </button>
            <button
              onClick={() => setActiveCategory("ongoing")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === "ongoing"
                  ? "bg-linear-to-r from-orange-600 to-yellow-600 text-white shadow-lg shadow-orange-500/30"
                  : "text-purple-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Ongoing Projects
            </button>
            <button
              onClick={() => setActiveCategory("mini")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === "mini"
                  ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                  : "text-purple-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Mini Projects
            </button>
          </div>
        </motion.div>

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
                  <div className={`relative h-56 overflow-hidden bg-linear-to-br ${p.gradient}`}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.classList.add("flex", "items-center", "justify-center");
                            const previewDiv = document.createElement("div");
                            previewDiv.className = "absolute inset-0";
                            previewDiv.innerHTML = p.preview;
                            parent.appendChild(previewDiv);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-90">{p.preview}</div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/90 via-transparent to-transparent" />
                    
                    {/* Media count badge */}
                    {p.media && p.media.length > 0 && (
                      <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                        <div className="flex items-center gap-1">
                          {p.media.some(m => m.type === "video") && <Video className="w-3 h-3 text-purple-400" />}
                          {p.media.some(m => m.type === "image") && <Image className="w-3 h-3 text-purple-400" />}
                          <span className="text-xs text-white">{p.media.length} media</span>
                        </div>
                      </div>
                    )}

                    {p.imageUrl && (
                      <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                    <p className="text-purple-100/70 mb-5 leading-relaxed text-sm">
                      {p.description}
                    </p>
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
              <p className="text-purple-300/70">Projects I'm currently building and iterating on</p>
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
                  <div className={`relative h-56 overflow-hidden bg-linear-to-br ${p.gradient}`}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.classList.add("flex", "items-center", "justify-center");
                            const previewDiv = document.createElement("div");
                            previewDiv.className = "absolute inset-0";
                            previewDiv.innerHTML = p.preview;
                            parent.appendChild(previewDiv);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-90">{p.preview}</div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/90 via-transparent to-transparent" />

                    {/* Progress Badge */}
                    {p.progress && (
                      <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-orange-400/30">
                        <div className="flex items-center gap-1.5">
                          <Zap className="w-3 h-3 text-orange-400" />
                          <span className="text-xs text-orange-300 font-medium">
                            {p.progress}% Complete
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Media count badge */}
                    {p.media && p.media.length > 0 && (
                      <div className="absolute top-4 left-4 z-10 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                        <div className="flex items-center gap-1">
                          {p.media.some(m => m.type === "video") && <Video className="w-3 h-3 text-purple-400" />}
                          {p.media.some(m => m.type === "image") && <Image className="w-3 h-3 text-purple-400" />}
                          <span className="text-xs text-white">{p.media.length} media</span>
                        </div>
                      </div>
                    )}

                    {p.imageUrl && (
                      <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs text-green-400/80 font-medium">
                              Active Development
                            </span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                        <p className="text-purple-200/70 text-sm mt-1">{p.tagline}</p>
                      </div>
                      <ArrowUpRight className="text-orange-300 group-hover:rotate-45 transition-transform shrink-0" />
                    </div>
                    <p className="text-purple-100/70 mb-5 leading-relaxed text-sm">
                      {p.description}
                    </p>

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
                            className="h-full rounded-full bg-linear-to-r from-orange-500 to-yellow-500"
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
              <p className="text-purple-300/70">Creative side projects and experimental builds</p>
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
                  <div className={`relative h-56 overflow-hidden bg-linear-to-br ${p.gradient}`}>
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                          const parent = (e.target as HTMLImageElement).parentElement;
                          if (parent) {
                            parent.classList.add("flex", "items-center", "justify-center");
                            const previewDiv = document.createElement("div");
                            previewDiv.className = "absolute inset-0";
                            previewDiv.innerHTML = p.preview;
                            parent.appendChild(previewDiv);
                          }
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-90">{p.preview}</div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/90 via-transparent to-transparent" />
                    
                    {/* Media count badge */}
                    {p.media && p.media.length > 0 && (
                      <div className="absolute top-4 right-4 z-10 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                        <div className="flex items-center gap-1">
                          {p.media.some(m => m.type === "video") && <Video className="w-3 h-3 text-purple-400" />}
                          {p.media.some(m => m.type === "image") && <Image className="w-3 h-3 text-purple-400" />}
                          <span className="text-xs text-white">{p.media.length} media</span>
                        </div>
                      </div>
                    )}

                    {p.imageUrl && (
                      <div className="absolute inset-0 bg-linear-to-t from-[#05011a]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                    <p className="text-purple-100/70 mb-5 leading-relaxed text-sm">
                      {p.description}
                    </p>
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

      {/* Modal with Media Gallery */}
      <AnimatePresence>
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
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-300/30 bg-linear-to-br from-[#0d0728] to-[#05011a] shadow-[0_0_80px_-10px_rgba(168,85,247,0.5)]"
            >
              <SpaceBackground density={15} />

              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Media Gallery Section */}
              {active.media && active.media.length > 0 ? (
                <MediaGallery media={active.media} title={active.title} />
              ) : (
                <div className={`relative h-64 md:h-72 overflow-hidden bg-linear-to-br ${active.gradient}`}>
                  {active.imageUrl ? (
                    <img
                      src={active.imageUrl}
                      alt={active.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0">{active.preview}</div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d0728] via-transparent to-transparent" />
                </div>
              )}

              {active.status === "ongoing" && active.progress && !active.media && (
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-orange-400/30">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-orange-400 animate-spin" />
                    <span className="text-xs text-orange-300 font-medium">
                      In Development â€¢ {active.progress}% Complete
                    </span>
                  </div>
                </div>
              )}

              <div className="relative p-8 md:p-10">
                <p className="text-purple-300/80 tracking-[0.25em] text-xs mb-3">CASE STUDY</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{active.title}</h3>
                <p className="text-purple-200/80 mb-6">{active.tagline}</p>

                <p className="text-purple-100/80 leading-relaxed mb-8">{active.longDescription}</p>

                <h4 className="text-sm tracking-[0.2em] text-purple-300/80 mb-4">HIGHLIGHTS</h4>
                <ul className="space-y-3 mb-8">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-purple-100/80">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-400 to-blue-400 shrink-0" />
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-medium hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow"
                    >
                      <ExternalLink size={16} />
                      Live demo
                    </a>
                  )}
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
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
      </AnimatePresence>
    </section>
  );
}
