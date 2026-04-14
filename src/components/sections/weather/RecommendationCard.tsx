import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getCardAnimateProps, cardTransition } from "./animations";
import { useRecommendationCardState } from "./hook/useRecommendationCardState";
import type { RecommendationCardProps } from "./types";

export default function RecommendationCard({
  recommendation,
  index,
  relativeIndex,
  onClick,
}: RecommendationCardProps) {
  const { hovered, setHovered, isActive, isVisible, isMobile, num } =
    useRecommendationCardState(index, relativeIndex);

  if (!isVisible) return null;

  return (
    <motion.div
      animate={getCardAnimateProps(
        relativeIndex,
        isActive,
        isVisible,
        isMobile,
      )}
      transition={cardTransition}
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`absolute w-[240px] md:w-[340px] lg:w-[380px] rounded-2xl overflow-hidden cursor-pointer select-none shadow-2xl ${
        isActive ? "ring-1 ring-midnight-steel/20" : ""
      }`}
      style={{
        aspectRatio: "3 / 4",
        maxHeight: "520px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background Image with zoom on hover */}
      <motion.img
        src={recommendation.imageUrl}
        alt={recommendation.name}
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
      />

      {/* Heavy vignette for editorial legibility */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />

      {/* Content wrapper with perspective shift on hover */}
      <motion.div
        className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10"
        animate={{ translateZ: hovered ? 30 : 0 }}
      >
        {/* Top row: number + category */}
        <div className="flex items-start justify-between">
          <span className="text-swiss text-8xl font-black text-white/20 leading-none">
            {num}
          </span>
          <span className="text-swiss text-sm tracking-[0.2em] text-white uppercase bg-black/60 backdrop-blur-lg px-6 py-2 border border-white/30 font-black rounded-lg">
            {recommendation.category}
          </span>
        </div>

        {/* Bottom content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-editorial text-4xl md:text-6xl text-white drop-shadow-lg">
              {recommendation.name}
            </h3>
            <span className="text-swiss text-white text-sm tracking-[0.2em] uppercase font-black">
              IDEAL: {recommendation.idealWeather}
            </span>
          </div>

          <motion.p
            animate={{
              opacity: 1,
            }}
            className="text-swiss text-white text-lg md:text-xl font-bold leading-relaxed line-clamp-3"
          >
            {recommendation.description}
          </motion.p>

          <div className="flex items-center justify-between mt-1">
            <motion.div
              animate={{
                opacity: 1,
                x: hovered ? 5 : 0,
              }}
              className="px-10 py-4 bg-white text-black text-sm tracking-[0.2em] uppercase font-black flex items-center gap-4 group shadow-xl"
            >
              Discover
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Glass Border */}
      <div className="absolute inset-0 border-2 border-white/20 pointer-events-none" />
    </motion.div>
  );
}
