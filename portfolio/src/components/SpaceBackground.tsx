import { motion } from "framer-motion";
import { useMemo } from "react";

interface Props {
  density?: number;
  className?: string;
}

export default function SpaceBackground({ density = 25, className = "" }: Props) {
  const stars = useMemo(
    () =>
      Array.from({ length: density }).map((_, i) => ({
        top: `${((i * 53) % 95) + 2}%`,
        left: `${((i * 37) % 95) + 2}%`,
        delay: (i % 6) * 0.4,
        duration: 2 + (i % 4),
      })),
    [density],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(76,29,149,0.35)_0%,transparent_55%),radial-gradient(ellipse_at_85%_30%,rgba(30,58,138,0.4)_0%,transparent_55%),radial-gradient(circle_at_50%_90%,rgba(91,33,182,0.3)_0%,transparent_60%)]" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[55%] aspect-square rounded-full bg-linear-to-br from-purple-600/30 via-indigo-500/15 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 30, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] right-[-15%] w-[60%] aspect-square rounded-full bg-linear-to-bl from-blue-600/30 via-purple-600/15 to-transparent blur-3xl"
      />
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-white"
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1.4, 0.7] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
