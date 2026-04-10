import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { Recommendation } from "./weatherData";

interface Props {
  recommendation: Recommendation;
  index: number;
  activeIndex: number;
  relativeIndex: number;
  onClick: () => void;
}

export default function RecommendationCard({ recommendation, index, activeIndex, relativeIndex, onClick }: Props) {
  const [hovered, setHovered] = useState(false);

  // Position logic for the stack
  const isActive = relativeIndex === 0;
  const isVisible = Math.abs(relativeIndex) <= 2; // Show active + 2 nearby cards
  
  // Editorial number
  const num = String(index + 1).padStart(2, "0");

  if (!isVisible) return null;

  return (
    <motion.div
      initial={false}
      animate={{
        x: relativeIndex * 380, // Horizontal offset
        scale: isActive ? 1 : 0.85,
        z: isActive ? 0 : -200,
        rotateY: relativeIndex * -15, // Book-like tilt
        opacity: isVisible ? (1 - Math.abs(relativeIndex) * 0.3) : 0,
        zIndex: 40 - Math.abs(relativeIndex) * 10,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`absolute w-[300px] md:w-[400px] rounded-3xl overflow-hidden cursor-pointer select-none shadow-2xl ${isActive ? 'ring-1 ring-white/20' : ''}`}
      style={{ 
        aspectRatio: "3 / 4",
        transformStyle: "preserve-3d"
      }}
    >
      {/* Background Image with zoom on hover */}
      <motion.img
        src={recommendation.imageUrl}
        alt={recommendation.name}
        animate={{ scale: hovered ? 1.12 : 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10" />

      {/* Content wrapper with perspective shift on hover */}
      <motion.div 
        className="absolute inset-0 p-8 flex flex-col justify-between"
        animate={{ translateZ: hovered ? 40 : 0 }}
      >
        {/* Top row: number + category */}
        <div className="flex items-start justify-between">
          <span className="font-['Outfit'] text-8xl font-bold text-white/10 leading-none">
            {num}
          </span>
          <span className="font-['Outfit'] text-[0.65rem] tracking-[0.3em] text-white/60 uppercase bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
            {recommendation.category}
          </span>
        </div>

        {/* Bottom content */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-['Vina_Sans'] text-4xl md:text-6xl text-white leading-[0.85]">
              {recommendation.name}
            </h3>
            <span className="font-['Outfit'] text-white/30 text-[0.6rem] tracking-[0.4em] uppercase">
              Ideal: {recommendation.idealWeather}
            </span>
          </div>

          <motion.p
            animate={{ 
              opacity: isActive || hovered ? 1 : 0, 
              y: isActive || hovered ? 0 : 10 
            }}
            className="font-['Outfit'] text-white/60 text-sm font-light leading-relaxed line-clamp-2"
          >
            {recommendation.description}
          </motion.p>

          <div className="flex items-center justify-between mt-2">
            <motion.div
              animate={{
                opacity: hovered ? 1 : 0.4,
                scale: hovered ? 1 : 0.9,
              }}
              className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[0.6rem] tracking-widest uppercase flex items-center gap-3 group"
            >
              Explore destination
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Glass Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

      {/* Overlay for non-active cards to make them feel "back" */}
      {!isActive && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none transition-opacity duration-700" />
      )}
    </motion.div>
  );
}
