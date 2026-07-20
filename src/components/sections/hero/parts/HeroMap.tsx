import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import type { Map as LeafletMap, Marker } from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMountain,
  faLandmark,
  faUtensils,
  faCompass,
  faInfoCircle,
  faTimes,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import MapCard from './MapCard';
import RoutePreview from './RoutePreview';
import { MAP_PLACES, CATEGORY_META, type MapCategory, type MapPlace } from '../../../../data/mapPlaces';
import type { HeroMapProps } from '../types';
import { useScrollLock } from '../../../hooks/useScrollLock';
import 'leaflet/dist/leaflet.css';
const MALANG_CENTER: [number, number] = [-7.9666, 112.6326];

const CATEGORY_ICONS: Record<MapCategory, any> = {
  Nature:     faMountain,
  Historical: faLandmark,
  Culinary:   faUtensils,
  Attraction: faCompass,
};

const CATEGORY_LOCALE_KEY: Record<MapCategory, string> = {
  Nature:     "hero.categories.nature",
  Historical: "hero.categories.heritage",
  Culinary:   "hero.categories.culinary",
  Attraction: "hero.categories.attractions",
};

// Inline SVG paths for Leaflet marker tags
const MARKER_SVG_PATHS: Record<MapCategory, string> = {
  Nature: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4.5px;"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
  Historical: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4.5px;"><line x1="2" y1="22" x2="22" y2="22"/><line x1="6" y1="8" x2="6" y2="18"/><line x1="10" y1="8" x2="10" y2="18"/><line x1="14" y1="8" x2="14" y2="18"/><line x1="18" y1="8" x2="18" y2="18"/><path d="M3 2c3-1 7-1 10 0 3 1 5 1 8 0v4c-3 1-5 1-8 0-3-1-7-1-10 0V2z"/></svg>`,
  Culinary: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4.5px;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  Attraction: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4.5px;"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
};

export default function HeroMap({ category: initialCategory, onClose }: HeroMapProps) {
  const { t } = useTranslation();
  // Lock background scroll while interactive map modal is open
  useScrollLock(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const [activeCategory, setActiveCategory] = useState<MapCategory>(initialCategory);
  const [selectedPlace, setSelectedPlace] = useState<MapPlace | null>(null);
  const [showRoute, setShowRoute] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [userPos, setUserPos] = useState<{ lat: number; lng: number } | null>(null);

  // Request user location once on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {},
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  }, []);

  const handleOpenDirections = useCallback(() => setShowRoute(true), []);
  const handleBackFromRoute = useCallback(() => setShowRoute(false), []);
  const handleCloseMapCard = useCallback(() => {
    setSelectedPlace(null);
    setShowRoute(false);
  }, []);

  // Init map once with full zoom freedom
  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;
    const container = mapContainerRef.current as HTMLElement;

    import('leaflet').then((L) => {
      if ("_leaflet_id" in container) return;

      const map = L.map(container, {
        center: MALANG_CENTER,
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      }).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      mapRef.current = map;
      setMapReady(true);
    });
  }, []);

  // Draw markers when map is ready OR active category changes
  useEffect(() => {
    if (!mapRef.current || !mapReady) return;

    import('leaflet').then((L) => {
      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      const filtered = MAP_PLACES.filter((p) => p.category === activeCategory);
      const activeMeta = CATEGORY_META[activeCategory];
      const svgPath = MARKER_SVG_PATHS[activeCategory];

      const coords = filtered.map((p) => [p.coordinates.lat, p.coordinates.lng] as [number, number]);
      if (coords.length > 0) {
        mapRef.current!.fitBounds(L.latLngBounds(coords), { padding: [60, 60], maxZoom: 14 });
      }

      filtered.forEach((place, idx) => {
        const icon = L.divIcon({
          className: '',
          html: `
            <div 
              class="custom-pin-wrapper"
              style="
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                animation: pinPop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) both;
                animation-delay: ${idx * 40}ms;
              "
            >
              <div style="
                background: ${activeMeta.color};
                color: white;
                border: 2px solid white;
                border-radius: 8px;
                padding: 6px 12px;
                font-size: 11px;
                font-weight: 800;
                font-family: 'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                white-space: nowrap;
                display: flex;
                align-items: center;
                gap: 2px;
                letter-spacing: 0.02em;
              ">
                ${svgPath}
                ${t("hero.places." + place.id + ".name", place.name)}
              </div>
              <div style="
                width: 0; height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 6px solid ${activeMeta.color};
                margin-top: -1px;
              "></div>
            </div>
          `,
          iconAnchor: [0, 36],
          iconSize: [0, 0],
        });

        const marker = L.marker([place.coordinates.lat, place.coordinates.lng], { icon })
          .addTo(mapRef.current!);

        marker.on('click', () => {
          setSelectedPlace(place);
          mapRef.current?.flyTo(
            [place.coordinates.lat, place.coordinates.lng],
            15,
            { animate: true, duration: 0.6 }
          );
        });
        markersRef.current.push(marker);
      });
    });
  }, [activeCategory, mapReady]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#f0ebe3] flex flex-col">
      
      {/* Dynamic Keyframes for Pins popping and hover scaling */}
      <style>{`
        @keyframes pinPop {
          0% { opacity: 0; transform: scale(0.6) translateY(12px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .custom-pin-wrapper {
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: bottom center;
        }
        .custom-pin-wrapper:hover {
          transform: scale(1.08) translateY(-4px) !important;
          z-index: 999999 !important;
        }
      `}</style>

      {/* ── Top Header Controls Overlay ────────────────────────── */}
      <div className="absolute top-4 inset-x-4 z-[600] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between pointer-events-none">
        
        {/* Back Button (Highly Seeable, Solid Swiss layout, No arrow) */}
        {onClose && (
          <button
            onClick={onClose}
            className="pointer-events-auto flex items-center justify-center px-6 py-3 bg-[#0A0A0A] border border-[#0A0A0A] text-white hover:bg-white hover:text-[#0A0A0A] rounded-xl text-sm font-black uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer shadow-md select-none"
          >
            <span>{t('activityDetail.back')}</span>
          </button>
        )}

        {/* Category Switcher Tabs inside Map */}
        <div className="pointer-events-auto bg-[#f5f4f0] border border-premium-black/15 p-1.5 rounded-xl flex overflow-x-auto max-w-full gap-1 shadow-sm select-none scrollbar-none">
          {(['Nature', 'Historical', 'Culinary', 'Attraction'] as MapCategory[]).map((cat) => {
            const isActive = activeCategory === cat;
            const meta = CATEGORY_META[cat];
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedPlace(null);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-premium-black/60 hover:text-premium-black'
                }`}
                style={{ backgroundColor: isActive ? meta.color : 'transparent' }}
              >
                <FontAwesomeIcon icon={CATEGORY_ICONS[cat]} className="text-sm" />
                <span>{t(CATEGORY_LOCALE_KEY[cat])}</span>
              </button>
            );
          })}
        </div>

        {/* Spacer for layout balance */}
        <div className="hidden md:block w-28" />
      </div>

      {/* ── Leaflet Map Viewport (Spans 100% space) ─────────────── */}
      <div ref={mapContainerRef} className="absolute inset-0 z-0" />

      {/* ── Beautiful Split-Card Place Overlay ─────────────────── */}
      {/* ── Place Card / Route Preview Overlay ───────────────── */}
      <div className="absolute inset-0 z-[500] pointer-events-none">
        {showRoute && selectedPlace ? (
          <RoutePreview
            place={selectedPlace}
            userPos={userPos}
            onClose={handleCloseMapCard}
            onBack={handleBackFromRoute}
          />
        ) : (
          <MapCard
            place={selectedPlace}
            onClose={handleCloseMapCard}
            onOpenDirections={handleOpenDirections}
          />
        )}
      </div>

      {/* ── Toggleable Map Guide/Controls Legend ────────────────── */}
      <div className="absolute bottom-6 left-6 z-[200] pointer-events-auto">
        <div className="relative">
          {/* Toggle Button */}
          <button
            onClick={() => setShowControls((prev) => !prev)}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-[#f5f4f0] border border-premium-black/15 text-premium-black/75 hover:text-premium-black rounded-xl text-sm font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm select-none"
          >
            <FontAwesomeIcon icon={showControls ? faTimes : faInfoCircle} />
            <span>{showControls ? t('planner.modal.close') : t('hero.map.controls')}</span>
          </button>

          {/* Collapsible Panel */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="absolute bottom-full mb-3 left-0 bg-[#f5f4f0] border border-premium-black/15 p-4 rounded-xl flex flex-col gap-2.5 min-w-[210px] shadow-md select-none text-left"
              >
                <h4 className="text-sm font-black uppercase tracking-[0.2em] text-premium-black/40 mb-1">
                  {t('hero.map.controls')}
                </h4>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-black/5 border border-black/5 rounded text-sm">
                      <FontAwesomeIcon icon={faMap} className="text-premium-black/50 text-sm" />
                    </div>
                    <span className="text-sm font-bold text-premium-black/70">{t('hero.map.clickMarker')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-black/5 border border-black/5 rounded text-sm">
                      <FontAwesomeIcon icon={faCompass} className="text-premium-black/50 text-sm" />
                    </div>
                    <span className="text-sm font-bold text-premium-black/70">{t('hero.map.drag')}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
