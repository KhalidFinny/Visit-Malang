import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { faXmark, faMapLocationDot, faMountain, faSun, faCloudRain, faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { RecommendationsModalProps } from "../types";
import { useResponsiveScale } from "../../../hooks/useResponsiveScale";
import { ImageWithSkeleton } from "../../../shared/Skeleton";
import { useScrollLock } from "../../../hooks/useScrollLock";

function getGoogleMapsSearchUrl(name: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' Malang Indonesia')}`;
}

export default function RecommendationsModal({
  isOpen,
  onClose,
  recommendations,
}: RecommendationsModalProps) {
  const { t } = useTranslation();
  const { isPhone } = useResponsiveScale();
  const [altitudes, setAltitudes] = useState<any[]>([]);

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      fetch("/api/altitudes")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setAltitudes(data);
          }
        })
        .catch((err) => console.error("Error fetching altitudes:", err));
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] flex items-end md:items-center justify-center p-0 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={isPhone ? { opacity: 0, y: "100%" } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={isPhone ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isPhone ? { opacity: 0, y: "100%" } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`
              relative w-full bg-white shadow-2xl overflow-hidden flex flex-col
              ${isPhone
                ? 'max-h-[85vh] rounded-t-3xl'
                : 'max-w-4xl max-h-[85vh] rounded-3xl'
              }
            `}
          >
            {/* Drag handle (mobile only) */}
            {isPhone && (
              <div className="shrink-0 flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-black/15" />
              </div>
            )}

            {/* Header */}
            <div className={`flex items-center justify-between border-b border-black/8 shrink-0 ${
              isPhone ? 'px-5 py-4' : 'px-8 py-6'
            }`}>
              <div>
                <h2 className={`font-black text-premium-black uppercase tracking-tight leading-none ${
                  isPhone ? 'text-lg' : 'text-2xl'
                }`}>
                  {t('weather.allRecommendations')}
                </h2>
                <p className={`text-premium-black/40 font-medium mt-1 ${
                  isPhone ? 'text-xs' : 'text-sm'
                }`}>
                  {recommendations.length} {t('weather.placesMatched')}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-black/15 text-premium-black/50 hover:bg-premium-black hover:text-white flex items-center justify-center transition-all shrink-0"
                aria-label="Close modal"
              >
                <FontAwesomeIcon icon={faXmark} className="text-sm" />
              </button>
            </div>

            {/* List */}
            <div data-lenis-prevent="true" className="flex-1 overflow-y-auto [overscroll-behavior:contain] scrollbar-transparent">
                <div className={`${isPhone ? 'flex flex-col gap-3' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}`}>
                  {recommendations.map((rec, i) => {
                    const recSlug = rec.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
                    const altData = altitudes.find((a) => a.slug === recSlug);
                    
                    return (
                      <motion.div
                        key={rec.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        className={`group flex flex-col justify-between border border-black/6 hover:border-black/12 hover:bg-black/[0.02] transition-all ${
                          isPhone ? 'p-3 rounded-xl' : 'p-4 rounded-2xl'
                        }`}
                      >
                        <div className="flex gap-3">
                          {/* Thumbnail */}
                          <div className={`shrink-0 rounded-xl overflow-hidden ${
                            isPhone ? 'w-20 h-20' : 'w-24 h-24'
                          }`}>
                            <ImageWithSkeleton
                              src={rec.imageUrl}
                              alt={rec.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              wrapperClassName="w-full h-full"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                 {isPhone && (
                                   <span className="text-xs shrink-0 text-premium-black/60">
                                     <FontAwesomeIcon icon={
                                       rec.idealWeather === 'Any' || rec.idealWeather === 'Sunny' 
                                         ? faSun 
                                         : rec.idealWeather === 'Rainy' 
                                           ? faCloudRain 
                                           : faCloud
                                     } />
                                   </span>
                                 )}
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-black/30">
                                  {t('activity.categories.' + rec.category.toLowerCase().replace(/\s+/g, '').replace(/&/g, ''))}
                                </span>
                                {altData && (
                                  <>
                                    <span className="text-[10px] text-premium-black/20">•</span>
                                    <span className="text-[10px] font-extrabold text-[#7a9e64] uppercase tracking-wider flex items-center gap-1">
                                      <FontAwesomeIcon icon={faMountain} className="text-[9px]" />
                                      <span>{altData.altitude}m</span>
                                    </span>
                                  </>
                                )}
                                {!isPhone && (
                                  <>
                                    <span className="text-[10px] text-premium-black/20">•</span>
                                    <span className="text-[10px] font-bold text-premium-black/30">
                                      {rec.idealWeather === 'Any' ? t('weather.any') : t('weather.condition.' + rec.idealWeather.toLowerCase())}
                                    </span>
                                  </>
                                )}
                              </div>
                              <h3 className={`font-black text-premium-black uppercase tracking-tight leading-tight mb-1 truncate ${
                                isPhone ? 'text-[13px]' : 'text-sm'
                              }`}>
                                {rec.name}
                              </h3>
                              <p className={`text-premium-black/50 font-medium leading-relaxed line-clamp-2 ${
                                isPhone ? 'text-[11px]' : 'text-xs'
                              }`}>
                                {rec.description}
                              </p>
                            </div>

                            <a
                              href={getGoogleMapsSearchUrl(rec.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-premium-black/40 hover:text-premium-black transition-colors"
                            >
                              <FontAwesomeIcon icon={faMapLocationDot} className="text-[10px]" />
                              {t('weather.googleMaps')}
                            </a>
                          </div>
                        </div>

                        {/* Altitude Alert details if altitude is high (>1000m) */}
                        {altData && altData.altitude > 1000 && (
                          <div className="mt-3 p-2.5 rounded-xl bg-amber-500/[0.04] border border-amber-500/15 text-[10px] leading-relaxed text-amber-700 font-medium flex items-start gap-2">
                            <span className="shrink-0 text-xs">❄️</span>
                            <div>
                              <span className="font-extrabold uppercase tracking-wider text-amber-800">Altitude Weather Warning: </span>
                              Temp drops to {altData.temp_range}. Dress warm! Recommended gear: {altData.packing_list}.
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
