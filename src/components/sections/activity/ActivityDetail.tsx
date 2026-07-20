import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { activitiesData } from "./ActivitiesData";
import { ImageWithSkeleton } from "../../shared/Skeleton";
import BackButton from "../../shared/parts/BackButton";
import type { Category, Place } from "./types";

const ActivityDetail = () => {
  const { t } = useTranslation();
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const listRef = useRef<HTMLDivElement>(null);

  // Find current category
  const currentCategory = activitiesData[name || ""] as Category | undefined;

  // Handle local state for current spot
  const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);

  // Safety check: if category not found
  useEffect(() => {
    if (!currentCategory) {
      navigate("/activity");
    }
  }, [currentCategory, navigate]);

  if (!currentCategory) return null;

  const currentPlace = currentCategory.places[currentPlaceIndex] as Place;

  const handleExplore = () => {
    const slug = currentPlace.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    navigate(`/place/${slug}`);
  };

  const handlePlaceSelect = (index: number) => {
    setCurrentPlaceIndex(index);
  };

  const scroll = (direction: "left" | "right") => {
    if (listRef.current) {
      const { scrollLeft, clientWidth } = listRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      listRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  /* ================= RENDER ================= */
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-screen bg-[#f5f4f0] text-[#2D221F] flex flex-col overflow-hidden"
    >
      <BackButton to="/" />

      {/* ================= HERO ================= */}
      <div className="relative w-full flex-1 min-h-0">
        <ImageWithSkeleton
          src={currentPlace.heroImage}
          alt={currentPlace.title}
          className="absolute inset-0 w-full h-full object-cover"
          wrapperClassName="absolute inset-0 w-full h-full"
          loading="eager"
          fetchPriority="high"
        />
        {/* overlay using dark theme color #2D221F */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D221F]/80 via-[#2D221F]/30 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D221F]/50 via-transparent to-transparent pointer-events-none z-10" />

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-14 sm:px-12 sm:pb-16 md:px-16 md:pb-18 max-w-full sm:max-w-[70%] z-20">
          <h1 className="text-[clamp(28px,6vw,64px)] text-editorial font-black leading-tight sm:leading-none tracking-tight mb-3 uppercase text-white">
            {currentPlace.title}
          </h1>

          <p className="text-white/80 text-xs sm:text-[14px] leading-relaxed mb-4 sm:mb-6 max-w-[420px] font-sans">
            {currentPlace.description}
          </p>

          <button
            onClick={handleExplore}
            className="flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-[#2D221F] text-xs font-black uppercase tracking-widest rounded-full hover:bg-[#A3B18A] hover:text-white transition-all w-fit cursor-pointer shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            {t('activityDetail.explore')}
          </button>
        </div>
      </div>

      {/* ================= DESTINASI ================= */}
      <div className="w-full bg-[#f5f4f0] px-4 sm:px-10 h-[200px] sm:h-[220px] flex-shrink-0 overflow-hidden rounded-t-[2rem] sm:rounded-t-[2.5rem] border-t border-[#2D221F]/5 z-20 relative -mt-6 sm:-mt-8 pt-4 sm:pt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-editorial text-xs sm:text-sm font-bold uppercase tracking-wide text-[#2D221F]">
            {t('activityDetail.otherDestinations')}
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#2D221F]/5 border border-[#2D221F]/10 hover:bg-[#2D221F]/10 transition cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" stroke="#2D221F" fill="none" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#2D221F]/5 border border-[#2D221F]/10 hover:bg-[#2D221F]/10 transition cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" stroke="#2D221F" fill="none" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* list */}
        <div
          ref={listRef}
          className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {currentCategory.places.map((place: Place, index: number) => {
            const isSelected = index === currentPlaceIndex;
            return (
              <div
                key={index}
                onClick={() => handlePlaceSelect(index)}
                className={`flex-shrink-0 w-[180px] sm:w-[220px] h-[110px] sm:h-[130px] rounded-xl relative overflow-hidden cursor-pointer snap-start transition-all duration-300 border ${
                  isSelected 
                    ? "border-[#A3B18A] shadow-md scale-[1.02] opacity-100" 
                    : "border-[#2D221F]/5 hover:border-[#A3B18A]/30 opacity-60 hover:opacity-90"
                }`}
              >
                <img
                  src={place.heroImage}
                  alt={place.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D221F]/90 via-[#2D221F]/20 to-transparent" />

                {/* text */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <h3 className="text-white font-bold text-xs sm:text-sm truncate uppercase font-sans">
                    {place.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityDetail;