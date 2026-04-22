import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTrip } from '../../../../context/TripContext';

interface TripPanelProps {
  inline?: boolean; // When true, renders flat in the side panel (no absolute positioning)
}

export default function TripPanel({ inline = false }: TripPanelProps) {
  const { tripPlaces, removeFromTrip, directionsUrl } = useTrip();
  const [expanded, setExpanded] = useState(false);

  if (tripPlaces.length === 0) return null;

  // ── Inline variant (inside side panel) ─────────────────────────────────
  if (inline) {
    return (
      <div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full flex items-center justify-between py-2 text-xs font-black uppercase tracking-widest text-premium-black/50 hover:text-premium-black transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-heritage-sage text-white text-[9px] font-black flex items-center justify-center">
              {tripPlaces.length}
            </span>
            Your Trip
          </span>
          <span className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>↑</span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-2 flex flex-col gap-1.5">
                {tripPlaces.map((p) => (
                  <div key={p.id} className="flex items-center justify-between">
                    <span className="text-xs text-premium-black/70 font-semibold truncate pr-2">{p.name}</span>
                    <button
                      onClick={() => removeFromTrip(p.id)}
                      className="text-black/20 hover:text-red-500 text-xs shrink-0 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block w-full text-center py-2 bg-heritage-sage text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-heritage-sage/80 transition-colors"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── Floating variant (absolute, for when used standalone) ───────────────
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute top-4 right-4 z-[1100] pointer-events-auto"
    >
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2.5 bg-white border border-black/10 text-premium-black px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-heritage-sage/50 transition-all shadow-md"
        >
          <span className="w-5 h-5 rounded-full bg-heritage-sage text-white text-[10px] font-black flex items-center justify-center">
            {tripPlaces.length}
          </span>
          Your Trip
          <span className="text-premium-black/40">↑</span>
        </button>
      )}

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="bg-white border border-black/10 rounded-2xl shadow-xl w-64 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/6">
              <span className="text-xs font-black uppercase tracking-widest text-premium-black">
                Your Trip ({tripPlaces.length})
              </span>
              <button onClick={() => setExpanded(false)} className="text-premium-black/40 hover:text-premium-black text-sm transition-colors">
                ✕
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {tripPlaces.map((p) => (
                <div key={p.id} className="flex items-center justify-between px-4 py-2.5 border-b border-black/5">
                  <span className="text-xs font-semibold text-premium-black/80 truncate pr-2">{p.name}</span>
                  <button onClick={() => removeFromTrip(p.id)} className="text-black/20 hover:text-red-500 text-xs shrink-0 transition-colors">✕</button>
                </div>
              ))}
            </div>
            <div className="px-4 py-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 bg-heritage-sage text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-heritage-sage/80 transition-colors"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
