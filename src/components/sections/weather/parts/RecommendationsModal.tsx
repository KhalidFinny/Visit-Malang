import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { faXmark, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Recommendation } from "../types";
import { ImageWithSkeleton } from "../../../shared/Skeleton";
import { useResponsiveScale } from "../../../hooks/useResponsiveScale";

interface RecommendationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  recommendations: Recommendation[];
}

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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
            <div className="flex-1 overflow-y-auto scrollbar-transparent">
              <div className={`${isPhone ? 'p-4' : 'p-6 md:p-8'}`}>
                <div className={`${isPhone ? 'flex flex-col gap-3' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}`}>
                  {recommendations.map((rec, i) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={`group flex gap-3 border border-black/6 hover:border-black/12 hover:bg-black/[0.02] transition-all ${
                        isPhone ? 'p-3 rounded-xl' : 'p-4 rounded-2xl'
                      }`}
                    >
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
                          <div className={`flex items-center gap-2 mb-1 ${
                            isPhone ? '' : ''
                          }`}>
                            {isPhone && (
                              <span className="text-lg shrink-0">
                                {rec.idealWeather === 'Any' ? '☀️' : rec.idealWeather === 'Sunny' ? '☀️' : rec.idealWeather === 'Rainy' ? '🌧️' : '☁️'}
                              </span>
                            )}
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-black/30">
                              {t('activity.categories.' + rec.category.toLowerCase().replace(/\s+/g, '').replace(/&/g, ''))}
                            </span>
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
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
