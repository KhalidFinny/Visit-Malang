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
      className={`absolute w-[95%] max-w-[700px] h-[480px] lg:h-[550px] rounded-[3rem] overflow-hidden cursor-pointer select-none border border-white/10 ${
        isActive ? "ring-1 ring-white/20" : ""
      }`}
      style={{
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background Image with zoom on hover */}
      <motion.img
        src={recommendation.imageUrl}
        alt={recommendation.name}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] opacity-90 transition-all duration-700"
      />

      {/* Ultra-light vignette for editorial legibility */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

      {/* Content wrapper */}
      <motion.div
        className="absolute inset-0 p-10 md:p-14 lg:p-16 flex flex-col justify-between z-10"
      >
        {/* Top row: number + category */}
        <div className="flex items-start justify-between">
          <span className="text-swiss text-8xl font-thin text-white/10 leading-none">
            {num}
          </span>
          <span className="text-swiss text-[10px] tracking-[0.4em] text-white/60 uppercase bg-black/20 backdrop-blur-md px-5 py-2 border border-white/10 font-black rounded-lg">
            {recommendation.category}
          </span>
        </div>

        {/* Bottom content */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-editorial text-4xl md:text-6xl text-white leading-[0.9]">
              {recommendation.name}
            </h3>
            <span className="text-swiss text-white/40 text-[9px] tracking-[0.4em] uppercase font-black">
              Optimal Conditions: {recommendation.idealWeather}
            </span>
          </div>

          <p className="text-swiss text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl line-clamp-2">
            {recommendation.description}
          </p>

          <div className="flex items-center mt-2">
            <motion.div
              className="px-8 py-3 bg-white text-premium-black text-[10px] tracking-[0.3em] uppercase font-black flex items-center gap-3 group border border-transparent"
            >
              Explore
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
