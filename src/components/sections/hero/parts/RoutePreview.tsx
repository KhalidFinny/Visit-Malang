import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faLocationCrosshairs,
  faRoad,
  faClock,
  faCar,
  faWalking,
  faBus,
  faArrowRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { haversineDistance, estimateDrivingTime } from '../../../../utils/distance';
import { getGoogleMapsDirectionsUrl } from '../../../../data/mapPlaces';
import type { MapPlace } from '../../../../data/mapPlaces';

interface RoutePreviewProps {
  place: MapPlace;
  userPos: { lat: number; lng: number } | null;
  onClose: () => void;
  onBack: () => void;
}

function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

export default function RoutePreview({ place, userPos, onClose, onBack }: RoutePreviewProps) {
  const { t } = useTranslation();

  const distanceKm = userPos
    ? haversineDistance(userPos.lat, userPos.lng, place.coordinates.lat, place.coordinates.lng)
    : null;

  const drivingTime = distanceKm ? estimateDrivingTime(distanceKm) : null;

  function handleStartNavigation(mode: 'driving' | 'walking' | 'transit') {
    if (!userPos) return;
    const url = getGoogleMapsDirectionsUrl(
      userPos.lat, userPos.lng,
      place.coordinates.lat, place.coordinates.lng,
      mode,
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.97 }}
      transition={{ type: 'spring', damping: 24, stiffness: 220 }}
      className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-xl pointer-events-auto rounded-2xl"
    >
      <div className="bg-[#f5f4f0] rounded-2xl overflow-hidden border border-premium-black/15 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-premium-black/50 hover:text-premium-black transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowRight} className="rotate-180 text-sm" />
            <span>{t('planner.modal.back')}</span>
          </button>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full border border-premium-black/10 text-premium-black/50 hover:text-premium-black hover:border-premium-black/30 flex items-center justify-center text-sm transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Route line: origin → destination */}
        <div className="flex items-start gap-3 mb-5">
          <div className="flex flex-col items-center gap-1 pt-0.5">
            <div className="w-5 h-5 rounded-full bg-[#3e5355] flex items-center justify-center">
              <FontAwesomeIcon icon={faLocationCrosshairs} className="text-white text-sm" />
            </div>
            <div className="w-0.5 flex-1 min-h-[28px] bg-premium-black/15" />
            <div className="w-5 h-5 rounded-full bg-[#c0451a] flex items-center justify-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-white text-sm" />
            </div>
          </div>

          <div className="flex-1 min-w-0 space-y-3">
            {/* Origin */}
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-premium-black/40 block leading-tight mb-0.5">
                {t('hero.map.from')}
              </span>
              <span className="text-sm font-bold text-premium-black block truncate">
                {userPos
                  ? `${Math.abs(userPos.lat).toFixed(4)}° ${userPos.lat >= 0 ? 'N' : 'S'}, ${Math.abs(userPos.lng).toFixed(4)}° ${userPos.lng >= 0 ? 'E' : 'W'}`
                  : t('hero.map.detecting')}
              </span>
              {!userPos && (
                <span className="text-sm text-premium-black/40 font-medium animate-pulse">
                  {t('hero.map.requestLocation')}
                </span>
              )}
            </div>

            {/* Destination */}
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-premium-black/40 block leading-tight mb-0.5">
                {t('hero.map.to')}
              </span>
              <span className="text-sm font-bold text-premium-black block truncate">
                {place.name}
              </span>
            </div>
          </div>
        </div>

        {/* Distance & Time estimate */}
        {distanceKm !== null && drivingTime && (
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-black/[0.03] border border-premium-black/10 rounded-xl p-3.5 text-center">
              <FontAwesomeIcon icon={faRoad} className="text-premium-black/40 text-sm mb-1.5" />
              <span className="block text-lg font-black text-premium-black leading-none mb-0.5">
                {formatDistance(distanceKm)}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-premium-black/40">
                {t('hero.map.distance')}
              </span>
            </div>
            <div className="bg-black/[0.03] border border-premium-black/10 rounded-xl p-3.5 text-center">
              <FontAwesomeIcon icon={faClock} className="text-premium-black/40 text-sm mb-1.5" />
              <span className="block text-lg font-black text-premium-black leading-none mb-0.5">
                {drivingTime.hours > 0
                  ? `${drivingTime.hours}h ${drivingTime.minutes}m`
                  : `${drivingTime.minutes} min`}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-premium-black/40">
                {t('hero.map.byCar')}
              </span>
            </div>
          </div>
        )}

        {/* Travel mode buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => handleStartNavigation('driving')}
            disabled={!userPos}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-5 bg-[#3e5355] text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#2d4042] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faCar} />
            <span>{t('hero.map.startDriving')}</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleStartNavigation('walking')}
              disabled={!userPos}
              className="flex items-center justify-center gap-2 py-2.5 px-4 border border-premium-black/15 text-premium-black/65 hover:text-premium-black hover:border-premium-black/35 rounded-xl text-sm font-bold uppercase tracking-wider transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FontAwesomeIcon icon={faWalking} />
              <span>{t('hero.map.walk')}</span>
            </button>
            <button
              onClick={() => handleStartNavigation('transit')}
              disabled={!userPos}
              className="flex items-center justify-center gap-2 py-2.5 px-4 border border-premium-black/15 text-premium-black/65 hover:text-premium-black hover:border-premium-black/35 rounded-xl text-sm font-bold uppercase tracking-wider transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <FontAwesomeIcon icon={faBus} />
              <span>{t('hero.map.transit')}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
