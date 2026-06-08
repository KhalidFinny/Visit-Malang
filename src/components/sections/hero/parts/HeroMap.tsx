import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import type { Map as LeafletMap, Marker } from 'leaflet';
import MapCard from './MapCard';
import TripPanel from './TripPanel';
import { MAP_PLACES, CATEGORY_META, type MapCategory, type MapPlace } from '../../../../data/mapPlaces';
import 'leaflet/dist/leaflet.css';

const MALANG_CENTER: [number, number] = [-7.9666, 112.6326];

interface HeroMapProps {
  category: MapCategory;
}

export default function HeroMap({ category: initialCategory }: HeroMapProps) {
  const { t } = useTranslation();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeCategory] = useState<MapCategory>(initialCategory);
  const [selectedPlace, setSelectedPlace] = useState<MapPlace | null>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const places = MAP_PLACES.filter((p) => p.category === activeCategory);
  const meta = CATEGORY_META[activeCategory];

  // Init map once
  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;

    let cancelled = false;

    import('leaflet').then((L) => {
      if (cancelled || !mapContainerRef.current) return;
      // Guard against Leaflet already having stamped this container (StrictMode)
      type LeafletEl = HTMLElement & { _leaflet_id?: number };
      if ((mapContainerRef.current as LeafletEl)._leaflet_id) return;

      const map = L.map(mapContainerRef.current, {
        center: MALANG_CENTER,
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Re-draw markers whenever activeCategory changes
  useEffect(() => {
    if (!mapRef.current) return;

    import('leaflet').then((L) => {
      // Clear old markers
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      const filtered = MAP_PLACES.filter((p) => p.category === activeCategory);
      const activeMeta = CATEGORY_META[activeCategory];

      // Fit map to new category's places
      const coords = filtered.map((p) => [p.coordinates.lat, p.coordinates.lng] as [number, number]);
      if (coords.length > 0) {
        mapRef.current!.fitBounds(L.latLngBounds(coords), { padding: [80, 80], maxZoom: 14 });
      }

      filtered.forEach((place) => {
        const icon = L.divIcon({
          className: '',
          html: `
            <div style="
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              cursor: pointer;
            ">
              <div style="
                background: ${activeMeta.color};
                color: white;
                border: 2.5px solid white;
                border-radius: 10px;
                padding: 5px 10px;
                font-size: 11px;
                font-weight: 800;
                font-family: 'Outfit', sans-serif;
                white-space: nowrap;
                box-shadow: 0 3px 10px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                gap: 5px;
                letter-spacing: 0.02em;
              ">
                <span style="font-size:13px">${activeMeta.emoji}</span>
                ${place.name}
              </div>
              <div style="
                width: 0; height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 8px solid ${activeMeta.color};
                margin-top: -1px;
              "></div>
            </div>
          `,
          iconAnchor: [0, 42],
          iconSize: [0, 0],
        });

        const marker = L.marker([place.coordinates.lat, place.coordinates.lng], { icon })
          .addTo(mapRef.current!);

        marker.on('click', () => setSelectedPlace(place));
        markersRef.current.push(marker);
      });
    });
  }, [activeCategory]);

  // Ctrl+Scroll to zoom
  const handleWheel = useCallback((e: WheelEvent) => {
    if (!mapRef.current) return;
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      mapRef.current.setZoom(mapRef.current.getZoom() + (e.deltaY < 0 ? 1 : -1), { animate: true });
    } else {
      setShowScrollHint(true);
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
      hintTimerRef.current = setTimeout(() => setShowScrollHint(false), 1800);
    }
  }, []);

  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  function focusPlace(place: MapPlace) {
    setSelectedPlace(place);
    mapRef.current?.flyTo([place.coordinates.lat, place.coordinates.lng], 15, {
      animate: true,
      duration: 0.8,
    });
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f0ebe3] flex">
      {/* ── Side List Panel ──────────────────────────────────────────── */}
      <motion.div
        initial={{ x: -320, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 30, stiffness: 280 }}
        className="relative z-[300] w-72 shrink-0 bg-white border-r border-black/8 flex flex-col shadow-xl"
      >
        {/* Active category header */}
        <div className="px-5 pt-5 pb-4 border-b border-black/6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{meta.emoji}</span>
            <h3
              className="text-[18px] font-black uppercase tracking-tight leading-none"
              style={{ color: meta.color }}
            >
              {t('hero.categories.' + activeCategory.toLowerCase())}
            </h3>
            <span className="text-[14px] font-bold text-[#1a1a1a]/30 uppercase tracking-widest">
              — {places.length} {t('hero.explorer.spots')}
            </span>
          </div>
        </div>

        {/* Place list */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {places.map((place, i) => {
                const isSelected = selectedPlace?.id === place.id;
                return (
                  <button
                    key={place.id}
                    onClick={() => focusPlace(place)}
                    className={`relative w-full text-left px-5 py-4 border-b border-black/5 transition-all group ${
                      isSelected ? 'bg-[#fafafa]' : 'hover:bg-[#fafafa]'
                    }`}
                  >
                    {/* Active indicator */}
                    {isSelected && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.5"
                        style={{ backgroundColor: meta.color }}
                      />
                    )}
                    <div className="flex items-start gap-3">
                      <span
                        className="text-xs font-black shrink-0 mt-0.5"
                        style={{ color: isSelected ? meta.color : 'rgba(0,0,0,0.2)' }}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-black uppercase tracking-tight leading-tight mb-1 transition-colors ${
                            isSelected
                              ? 'text-premium-black'
                              : 'text-premium-black/70 group-hover:text-premium-black'
                          }`}
                        >
                          {place.name}
                        </p>
                        <p className="text-[11px] text-premium-black/40 font-medium leading-relaxed line-clamp-2">
                          {place.hook}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trip panel at bottom */}
        <div className="shrink-0 px-5 py-4 border-t border-black/6">
          <TripPanel inline />
        </div>
      </motion.div>

      {/* ── Map ─────────────────────────────────────────────────────── */}
      <div className="relative flex-1 min-w-0">
        {/* Ctrl+Scroll hint */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[200] pointer-events-none"
            >
              <div className="flex items-center gap-2 bg-premium-black/85 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg whitespace-nowrap">
                <kbd className="bg-white/20 text-white text-[10px] font-black px-1.5 py-0.5 rounded">Ctrl</kbd>
                <span className="text-white/60">+</span>
                <span>{t('hero.map.scrollToZoom')}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={mapContainerRef} className="absolute inset-0 z-0" />

        {/* Map card overlay */}
        <div className="absolute inset-0 z-[500] pointer-events-none">
          <MapCard place={selectedPlace} onClose={() => setSelectedPlace(null)} />
        </div>

        {/* ── Map Legend ────────────────────────────────────────────── */}
        <div className="absolute bottom-6 left-6 z-[200] pointer-events-auto">
          <div className="bg-white/80 backdrop-blur-md border border-black/5 p-4 rounded-2xl shadow-xl flex flex-col gap-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-premium-black/40 mb-1">
              {t('hero.map.controls')}
            </h4>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-black/5 rounded text-[10px]">👆</div>
                <span className="text-[11px] font-bold text-premium-black/70">{t('hero.map.clickMarker')}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-black/5 rounded text-[10px]">🖐️</div>
                <span className="text-[11px] font-bold text-premium-black/70">{t('hero.map.drag')}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-black/5 px-1.5 py-1 rounded">
                  <kbd className="text-[9px] font-black text-premium-black/50">CTRL</kbd>
                  <span className="text-[9px] font-bold text-premium-black/30">+</span>
                  <span className="text-[9px] font-bold text-premium-black/50">SCROLL</span>
                </div>
                <span className="text-[11px] font-bold text-premium-black/70">{t('hero.map.zoom')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
