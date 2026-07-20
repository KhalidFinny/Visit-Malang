import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  faMapLocationDot,
  faMountain,
  faLandmark,
  faUtensils,
  faCompass,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { MapCategory } from '../../../../data/mapPlaces';
import { CATEGORY_META } from '../../../../data/mapPlaces';
import type { MapCardProps } from '../types';


const CATEGORY_ICONS: Record<MapCategory, any> = {
  Nature:     faMountain,
  Historical: faLandmark,
  Culinary:   faUtensils,
  Attraction: faCompass,
};

const CATEGORY_LOCALE_KEY: Record<MapCategory, string> = {
  Nature: "hero.categories.nature",
  Historical: "hero.categories.heritage",
  Culinary: "hero.categories.culinary",
  Attraction: "hero.categories.attractions",
};

export default function MapCard({ place, onClose, onOpenDirections }: MapCardProps) {
  const { t } = useTranslation();


  const BEST_VISIT_TIMES: Record<MapCategory, string> = {
    Nature: "05:00 - 09:00",
    Historical: "08:00 - 11:00",
    Culinary: "11:30 - 14:00",
    Attraction: "13:00 - 17:00",
  };

  const latVal = place ? Math.abs(place.coordinates.lat).toFixed(4) : '';
  const latDir = place ? (place.coordinates.lat >= 0 ? 'N' : 'S') : '';
  const latStr = place ? `${latVal}° ${latDir}` : '';

  const lngVal = place ? Math.abs(place.coordinates.lng).toFixed(4) : '';
  const lngDir = place ? (place.coordinates.lng >= 0 ? 'E' : 'W') : '';
  const lngStr = place ? `${lngVal}° ${lngDir}` : '';

  const bestTime = place ? BEST_VISIT_TIMES[place.category] : '';

  return (
    <AnimatePresence>
      {place && (
        <motion.div
          key={place.id}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ type: 'spring', damping: 24, stiffness: 220 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-3xl max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-4rem)] overflow-y-auto pointer-events-auto rounded-2xl"
        >
          <div className="bg-[#f5f4f0] rounded-2xl overflow-hidden border border-premium-black/15 flex flex-col md:flex-row md:min-h-[320px] relative">
            
            {/* Left side: Landscape cover */}
            <div className="w-full md:w-[40%] h-52 md:h-auto md:min-h-full self-stretch relative overflow-hidden shrink-0">
              <img
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              {/* Close Button on image for mobile layout */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden w-9 h-9 rounded-full bg-black/45 text-white hover:bg-black/60 flex items-center justify-center text-sm transition-colors z-20 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              {/* Category label */}
              <div
                className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold uppercase tracking-widest z-20"
                style={{ backgroundColor: CATEGORY_META[place.category].color + 'dd' }}
              >
                <FontAwesomeIcon icon={CATEGORY_ICONS[place.category]} className="text-sm" />
                <span>{t(CATEGORY_LOCALE_KEY[place.category])}</span>
              </div>
            </div>

            {/* Right side: Place info + call-to-actions */}
            <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-between text-left select-none relative h-full">
              {/* Close button for desktop layout */}
              <button
                onClick={onClose}
                className="hidden md:flex absolute top-5 right-5 w-8 h-8 rounded-full border border-premium-black/10 text-premium-black/60 hover:text-premium-black hover:border-premium-black/30 items-center justify-center text-sm transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-black text-premium-black uppercase tracking-tight leading-tight mb-2 pr-8">
                  {t("hero.places." + place.id + ".name", place.name)}
                </h3>
                <p className="text-sm md:text-sm text-premium-black/65 font-medium leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                  {t("hero.places." + place.id + ".hook", place.hook)}
                </p>

                {/* Swiss Editorial Metadata Grid */}
                <div className="grid grid-cols-3 gap-3 border-t border-b border-premium-black/10 py-3 select-none font-mono text-sm uppercase tracking-wider text-premium-black/75">
                  <div>
                    <span className="block text-premium-black/40 mb-0.5">{t('hero.map.meta.location')}</span>
                    <span className="font-extrabold text-premium-black">{t('hero.map.meta.region')}</span>
                  </div>
                  <div>
                    <span className="block text-premium-black/40 mb-0.5">{t('hero.map.meta.coordinates')}</span>
                    <span className="font-extrabold text-premium-black block leading-none mb-0.5">{latStr}</span>
                    <span className="font-extrabold text-premium-black block leading-none">{lngStr}</span>
                  </div>
                  <div>
                    <span className="block text-premium-black/40 mb-0.5">{t('hero.map.meta.bestTime')}</span>
                    <span className="font-extrabold text-[#c0451a]">{bestTime}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto">
                <button
                  onClick={onOpenDirections}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm md:text-sm font-bold uppercase tracking-widest bg-[#3e5355] text-white hover:bg-[#2d4042] rounded-xl transition-all cursor-pointer"
                >
                  <FontAwesomeIcon icon={faMapLocationDot} className="text-sm" />
                  {t('hero.map.directions')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
