import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faXmark, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Recommendation } from "../types";

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
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-black/8 shrink-0">
              <div>
                <h2 className="text-2xl font-black text-premium-black uppercase tracking-tight leading-none">
                  All Recommendations
                </h2>
                <p className="text-sm text-premium-black/40 font-medium mt-1.5">
                  {recommendations.length} places matched for today's weather
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-black/15 text-premium-black/50 hover:bg-premium-black hover:text-white flex items-center justify-center transition-all"
                aria-label="Close modal"
              >
                <FontAwesomeIcon icon={faXmark} className="text-sm" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((rec, i) => (
                  <motion.div
                    key={rec.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="group flex gap-4 p-4 rounded-2xl border border-black/6 hover:border-black/12 hover:bg-black/[0.02] transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
                      <img
                        src={rec.imageUrl}
                        alt={rec.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-black/30">
                            {rec.category}
                          </span>
                          <span className="text-[10px] text-premium-black/20">•</span>
                          <span className="text-[10px] font-bold text-premium-black/30">
                            {rec.idealWeather}
                          </span>
                        </div>
                        <h3 className="text-sm font-black text-premium-black uppercase tracking-tight leading-tight mb-1 truncate">
                          {rec.name}
                        </h3>
                        <p className="text-xs text-premium-black/50 font-medium leading-relaxed line-clamp-2">
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
                        Google Maps
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
