import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTrip } from '../../../../context/TripContext';
import type { MapPlace } from '../../../../data/mapPlaces';
import { CATEGORY_META, getGoogleMapsUrl } from '../../../../data/mapPlaces';
import { ImageWithSkeleton } from '../../../shared/Skeleton';

interface MapCardProps {
  place: MapPlace | null;
  onClose: () => void;
}

export default function MapCard({ place, onClose }: MapCardProps) {
  const { t } = useTranslation();
  const { addToTrip, removeFromTrip, isInTrip } = useTrip();

  const inTrip = place ? isInTrip(place.id) : false;

  function handleTrip() {
    if (!place) return;
    if (inTrip) {
      removeFromTrip(place.id);
    } else {
      addToTrip({ id: place.id, name: place.name, coordinates: place.coordinates });
    }
  }

  const mapsLink = place
    ? getGoogleMapsUrl(place.coordinates.lat, place.coordinates.lng)
    : '#';

  return (
    <AnimatePresence>
      {place && (
        <motion.div
          key={place.id}
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-2rem)] max-w-sm pointer-events-auto"
        >
          <div className="bg-white rounded-2xl overflow-hidden border border-black/8 shadow-xl">
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <ImageWithSkeleton
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Category badge */}
              <div
                className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest"
                style={{ backgroundColor: CATEGORY_META[place.category].color + 'cc' }}
              >
                <span>{CATEGORY_META[place.category].emoji}</span>
                <span>{t('hero.categories.' + place.category.toLowerCase())}</span>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/20 text-white/90 hover:text-white flex items-center justify-center text-sm transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="px-4 py-4">
              <h3 className="text-base font-black text-premium-black uppercase tracking-tight leading-tight mb-1.5">
                {place.name}
              </h3>
              <p className="text-xs text-premium-black/55 font-medium leading-relaxed mb-4">
                {place.hook}
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-widest border border-black/15 text-premium-black/60 hover:text-premium-black hover:border-black/30 rounded-lg transition-all"
                >
                  <FontAwesomeIcon icon={faMapLocationDot} className="text-xs" />
                  {t('weather.googleMaps')}
                </a>
                <button
                  onClick={handleTrip}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${
                    inTrip
                      ? 'bg-heritage-sage text-white'
                      : 'bg-white text-premium-black hover:bg-heritage-sage hover:text-white'
                  }`}
                >
                  {inTrip ? '✓ ' + t('hero.trip.added') : '+ ' + t('hero.trip.addToTrip')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
